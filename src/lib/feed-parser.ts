import { XMLParser } from "fast-xml-parser";

// Partnerský program Zážitky.cz běží přes eHUB; click.php zapíše klik a přesměruje na desturl.
const AFFILIATE_CLICK_URL = "https://ehub.cz/system/scripts/click.php";
const AFFILIATE_PARAMS = { a_aid: "3cd17e7c", a_bid: "c22fc1d9" };
const AFFILIATE_HOSTS = ["zazitky.cz", "www.zazitky.cz"];

const parser = new XMLParser({
  ignoreAttributes: false,
  parseTagValue: false,
  attributeNamePrefix: "",
});

type RawVariant = {
  VARIANTID?: string;
  PRODUCTNAMEEXT?: string;
  PRICE?: string;
  PRICE_VAT?: string;
  LOCATION?: string;
};

type RawItem = {
  ID?: string;
  PRODUCT?: string;
  DESCRIPTION?: string;
  URL?: string;
  IMGURL?: string;
  IMGURL2?: string;
  IMGURL3?: string;
  IMGURL4?: string;
  IMGURL5?: string;
  CATEGORYTEXT?: string | string[];
  VARIANT?: RawVariant | RawVariant[];
  DELIVERY_DATE?: string;
};

export type ProductVariant = {
  id: string;
  name: string;
  price: number | null;
  priceVat: number | null;
  location: string | null;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  /** Affiliate odkaz přes eHUB (tlačítko „Koupit“). */
  url: string;
  /** Přímá adresa zážitku u prodejce (strukturovaná data). */
  sellerUrl: string;
  imageUrls: string[];
  categories: string[];
  variants: ProductVariant[];
  minPrice: number | null;
  minPriceVat: number | null;
  location: string | null;
  deliveryDate: string | null;
  slug: string;
};

const normalizeArray = <T>(value?: T | T[]): T[] => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const parsePrice = (value?: string | number): number | null => {
  if (value === undefined || value === "") return null;
  const normalized = String(value).replace(/\s/g, "").replace(",", ".");
  const num = Number(normalized);
  return Number.isFinite(num) && num > 0 ? num : null;
};

const buildSlug = (name: string, id: string) => {
  const base = normalizeText(name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${base}-${id}`;
};

const parseHttpUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed : null;
  } catch {
    return null;
  }
};

/** Odkaz na Zážitky.cz obalí partnerským klikem eHUB; jiné domény vrátí beze změny, nebezpečné URL jako "". */
export const buildAffiliateUrl = (url: string) => {
  const parsed = parseHttpUrl(url);
  if (!parsed) return "";
  if (!AFFILIATE_HOSTS.includes(parsed.hostname)) return parsed.toString();
  const link = new URL(AFFILIATE_CLICK_URL);
  Object.entries(AFFILIATE_PARAMS).forEach(([key, value]) => link.searchParams.set(key, value));
  link.searchParams.set("desturl", parsed.toString());
  return link.toString();
};

const mapVariants = (variants: RawVariant[]): ProductVariant[] =>
  variants.map((variant) => ({
    id: variant.VARIANTID ?? "",
    name: variant.PRODUCTNAMEEXT ?? "",
    price: parsePrice(variant.PRICE),
    priceVat: parsePrice(variant.PRICE_VAT),
    location: variant.LOCATION ?? null,
  }));

const mapItem = (item: RawItem): Product => {
  const categories = normalizeArray(item.CATEGORYTEXT)
    .map((entry) => entry?.trim())
    .filter(Boolean) as string[];
  const variants = mapVariants(normalizeArray(item.VARIANT));
  const prices = variants
    .map((variant) => variant.price)
    .filter((price): price is number => price !== null);
  const pricesVat = variants
    .map((variant) => variant.priceVat)
    .filter((price): price is number => price !== null);

  const images = [
    item.IMGURL,
    item.IMGURL2,
    item.IMGURL3,
    item.IMGURL4,
    item.IMGURL5,
  ].filter((url): url is string => Boolean(url));

  const id = item.ID ?? "";
  const name = item.PRODUCT ?? "";

  return {
    id,
    name,
    description: (item.DESCRIPTION ?? "").replace(/&nbsp;/g, " "),
    url: buildAffiliateUrl(item.URL ?? ""),
    sellerUrl: parseHttpUrl(item.URL ?? "")?.toString() ?? "",
    imageUrls: images,
    categories,
    variants,
    minPrice: prices.length ? Math.min(...prices) : null,
    minPriceVat: pricesVat.length ? Math.min(...pricesVat) : null,
    location: variants.find((variant) => variant.location)?.location ?? null,
    deliveryDate: item.DELIVERY_DATE ?? null,
    slug: buildSlug(name, id),
  };
};

export const isAviationExperience = (categories: string[]) =>
  categories.some((category) => {
    const text = normalizeText(category);
    return text.includes("letecke zazitky") || text.includes("letecke simulatory");
  });

export const parseFeedXml = (xml: string): Product[] => {
  const data = parser.parse(xml);
  if (!data?.SHOP?.SHOPITEM) throw new Error("XML feed neobsahuje produkty.");
  const items = normalizeArray<RawItem>(data.SHOP.SHOPITEM);
  return items.map(mapItem).filter((product) => product.id && product.name && product.url);
};

