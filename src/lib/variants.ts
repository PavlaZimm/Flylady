import type { Product, ProductVariant } from "./feed-parser";

// Název varianty ve feedu: „<Zážitek>, 2 osoby, 1 hodina, Hromadný let“. Z něj se dá spolehlivě poznat
// počet osob a délka; cokoli dalšího (druh letu, výška seskoku, záznam) bereme jako „druh varianty“.
const PERSONS = /^(\d+)(?:\s*[–-]\s*(\d+))?\s*(osob\w*)$/i;
const HEIGHT = /^(\d{3,5})\s*m$/i;
const VALIDITY = /^platnost do\b/i;
const DURATION = /^(\d+(?:[,.]\d+)?)(?:\s*[–-]\s*\d+(?:[,.]\d+)?)?\s*(hodin\w*|minut\w*|min\.?|dn[ůyí]+)$/i;

export type ParsedVariant = {
  variant: ProductVariant;
  price: number;
  persons: string | null;
  personsSort: number | null;
  duration: string | null;
  durationSort: number | null;
  height: string | null;
  heightSort: number | null;
  options: string[];
};

export type PriceGroup = { label: string; count: number; from: number; to: number; sort: number };

export type VariantSummary = {
  count: number;
  min: number;
  max: number;
  cheapest: ParsedVariant;
  priciest: ParsedVariant;
  byPersons: PriceGroup[];
  byDuration: PriceGroup[];
  byHeight: PriceGroup[];
  byOption: PriceGroup[];
};

const toNumber = (value: string) => Number(value.replace(",", "."));

const durationMinutes = (amount: number, unit: string) => {
  const lower = unit.toLowerCase();
  if (lower.startsWith("hodin")) return amount * 60;
  if (lower.startsWith("min")) return amount;
  return amount * 24 * 60; // dny
};

export const parseVariant = (product: Pick<Product, "name">, variant: ProductVariant): ParsedVariant | null => {
  if (variant.priceVat === null) return null;
  const name = variant.name.trim();
  const rest = name.startsWith(`${product.name},`) ? name.slice(product.name.length + 1) : name;
  const parsed: ParsedVariant = { variant, price: variant.priceVat, persons: null, personsSort: null, duration: null, durationSort: null, height: null, heightSort: null, options: [] };
  // Desetinná čárka („1,5 hodiny“) segment nedělí, čárka s mezerou ano.
  for (const raw of rest.split(/,(?!\d)/)) {
    const segment = raw.trim();
    if (!segment) continue;
    const persons = segment.match(PERSONS);
    const duration = segment.match(DURATION);
    if (persons && parsed.persons === null) {
      parsed.persons = segment;
      parsed.personsSort = Number(persons[1]);
    } else if (duration && parsed.duration === null) {
      parsed.duration = segment;
      parsed.durationSort = durationMinutes(toNumber(duration[1]), duration[2]);
    } else if (HEIGHT.test(segment) && parsed.height === null) {
      parsed.height = segment;
      parsed.heightSort = Number(segment.match(HEIGHT)![1]);
    } else if (VALIDITY.test(segment)) {
      continue; // omezená platnost je vidět v seznamu variant, do přehledu druhů nepatří
    } else if (segment !== "1" && !parsed.options.includes(segment)) {
      parsed.options.push(segment);
    }
  }
  return parsed;
};

const groupBy = (items: ParsedVariant[], key: (item: ParsedVariant) => { label: string; sort: number } | null): PriceGroup[] => {
  const groups = new Map<string, PriceGroup>();
  for (const item of items) {
    const group = key(item);
    if (!group) continue;
    const current = groups.get(group.label);
    if (current) {
      current.count += 1;
      current.from = Math.min(current.from, item.price);
      current.to = Math.max(current.to, item.price);
    } else {
      groups.set(group.label, { label: group.label, count: 1, from: item.price, to: item.price, sort: group.sort });
    }
  }
  return [...groups.values()].sort((a, b) => a.sort - b.sort || a.label.localeCompare(b.label, "cs"));
};

export function summarizeVariants(product: Pick<Product, "name" | "variants">): VariantSummary | null {
  const parsed = product.variants.map((variant) => parseVariant(product, variant)).filter((item): item is ParsedVariant => item !== null);
  if (!parsed.length) return null;
  const cheapest = parsed.reduce((best, item) => (item.price < best.price ? item : best));
  const priciest = parsed.reduce((best, item) => (item.price > best.price ? item : best));
  return {
    count: parsed.length,
    min: cheapest.price,
    max: priciest.price,
    cheapest,
    priciest,
    byPersons: groupBy(parsed, (item) => (item.persons ? { label: item.persons, sort: item.personsSort ?? 0 } : null)),
    byDuration: groupBy(parsed, (item) => (item.duration ? { label: item.duration, sort: item.durationSort ?? 0 } : null)),
    // Druhy varianty seřazené od nejlevnějšího; jednu variantu s více volbami řadíme podle první volby.
    byHeight: groupBy(parsed, (item) => (item.height ? { label: item.height, sort: item.heightSort ?? 0 } : null)),
    byOption: groupBy(parsed, (item) => (item.options.length ? { label: item.options.join(", "), sort: 0 } : null)).sort((a, b) => a.from - b.from),
  };
}

/** Popisek nejlevnější/nejdražší varianty bez názvu zážitku: „2 osoby, 1 hodina“. */
export const describeVariant = (item: ParsedVariant) => [item.persons, item.duration, item.height, ...item.options].filter(Boolean).join(", ");
