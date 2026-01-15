import { XMLParser } from "fast-xml-parser";

const FEED_URL =
  "https://alis.zazitky.cz/data/exports/zazitky-pap-all.xml";

const UTM_PARAMS = {
  utm_source: "flylady.cz",
  utm_medium: "affiliate",
  utm_campaign: "letecke-zazitky",
};

const parser = new XMLParser({
  ignoreAttributes: false,
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
  url: string;
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

const parsePrice = (value?: string): number | null => {
  if (!value) return null;
  const normalized = value.replace(/\s/g, "").replace(",", ".");
  const num = Number(normalized);
  return Number.isFinite(num) ? num : null;
};

const buildSlug = (name: string, id: string) => {
  const base = normalizeText(name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${base}-${id}`;
};

export const addUtmParams = (url: string) => {
  try {
    const parsed = new URL(url);
    Object.entries(UTM_PARAMS).forEach(([key, value]) => {
      parsed.searchParams.set(key, value);
    });
    return parsed.toString();
  } catch {
    return url;
  }
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
    description: item.DESCRIPTION ?? "",
    url: addUtmParams(item.URL ?? ""),
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

const isAviationExperience = (categories: string[]) =>
  categories.some((category) =>
    normalizeText(category).includes("letecke zazitky")
  );

const parseFeed = async (): Promise<Product[]> => {
  const response = await fetch(FEED_URL, {
    next: { revalidate: 60 * 60 },
  });
  if (!response.ok) {
    throw new Error("Nepodařilo se načíst XML feed.");
  }
  const xml = await response.text();
  const data = parser.parse(xml);
  const items = normalizeArray<RawItem>(data?.SHOP?.SHOPITEM);
  return items.map(mapItem);
};

export const getAllProducts = async () => {
  const products = await parseFeed();
  return products.sort((a, b) => a.name.localeCompare(b.name, "cs"));
};

export const getAviationProducts = async () => {
  const products = await getAllProducts();
  return products.filter((product) =>
    isAviationExperience(product.categories)
  );
};

export const getProductById = async (id: string) => {
  const products = await getAviationProducts();
  return products.find((product) => product.id === id) ?? null;
};

export const getProductSlug = (product: Product) => product.slug;

export const getIdFromSlug = (slug: string) => {
  const parts = slug.split("-");
  return parts[parts.length - 1] ?? "";
};
