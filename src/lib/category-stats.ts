import type { Product } from "./feed-parser";

export type PriceRow = { product: Product; minPrice: number | null; variantCount: number; cheapestLabel: string | null };
export type CategoryStats = {
  offerCount: number;
  variantCount: number;
  minPrice: number | null;
  maxPrice: number | null;
  cheapest: { product: Product; label: string | null } | null;
  priciest: { product: Product; label: string | null } | null;
  rows: PriceRow[];
};

/** Název varianty bez opakovaného názvu zážitku: „Let balónem, 2 osoby, 1 hodina“ → „2 osoby, 1 hodina“. */
export const variantLabel = (product: Product, variantName: string) => {
  const name = variantName.trim();
  if (!name) return null;
  const prefix = `${product.name},`;
  return name.startsWith(prefix) ? name.slice(prefix.length).trim() || null : name;
};

const pricedVariants = (product: Product) => product.variants.filter((variant) => variant.priceVat !== null);

export function summarizeCategory(products: Product[]): CategoryStats {
  let cheapest: CategoryStats["cheapest"] = null;
  let priciest: CategoryStats["priciest"] = null;
  let minPrice: number | null = null;
  let maxPrice: number | null = null;
  let variantCount = 0;

  const rows = products.map((product): PriceRow => {
    const variants = pricedVariants(product);
    variantCount += variants.length;
    const low = variants.reduce<(typeof variants)[number] | null>((best, variant) => (!best || variant.priceVat! < best.priceVat! ? variant : best), null);
    const high = variants.reduce<(typeof variants)[number] | null>((best, variant) => (!best || variant.priceVat! > best.priceVat! ? variant : best), null);
    if (low && (minPrice === null || low.priceVat! < minPrice)) {
      minPrice = low.priceVat;
      cheapest = { product, label: variantLabel(product, low.name) };
    }
    if (high && (maxPrice === null || high.priceVat! > maxPrice)) {
      maxPrice = high.priceVat;
      priciest = { product, label: variantLabel(product, high.name) };
    }
    return { product, minPrice: low?.priceVat ?? null, variantCount: variants.length, cheapestLabel: low ? variantLabel(product, low.name) : null };
  }).sort((a, b) => (a.minPrice ?? Infinity) - (b.minPrice ?? Infinity) || a.product.name.localeCompare(b.product.name, "cs"));

  return { offerCount: products.length, variantCount, minPrice, maxPrice, cheapest, priciest, rows };
}

export const formatCzk = (value: number) => new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK", maximumFractionDigits: 0 }).format(value);

/** České skloňování podle počtu: plural(5, "nabídka", "nabídky", "nabídek") → "nabídek". */
export const plural = (count: number, one: string, few: string, many: string) => (count === 1 ? one : count >= 2 && count <= 4 ? few : many);
