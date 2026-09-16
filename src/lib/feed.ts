import { cache } from "react";
import { unstable_cache } from "next/cache";
import { parseFeedXml, isAviationExperience, type Product } from "@/lib/feed-parser";
export type { Product, ProductVariant } from "@/lib/feed-parser";
export { addUtmParams } from "@/lib/feed-parser";

const FEED_URL = "https://alis.zazitky.cz/data/exports/zazitky-pap-all.xml";

export const getAllProducts = async (): Promise<Product[]> => {
  // The raw feed exceeds Next's 2 MB cache-entry limit. Cache the filtered data below.
  let response: Response | undefined;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      response = await fetch(FEED_URL, { cache: "no-store", signal: AbortSignal.timeout(20000) });
      if (response.ok) break;
    } catch (error) {
      if (attempt === 2) throw error;
    }
    if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
  }
  if (!response?.ok) throw new Error("Nepodařilo se načíst XML feed.");
  return parseFeedXml(await response.text()).sort((a, b) => a.name.localeCompare(b.name, "cs"));
};

export const getAviationProducts = cache(unstable_cache(async () => {
  const products = (await getAllProducts()).filter((product) => isAviationExperience(product.categories));
  if (!products.length) throw new Error("XML feed neobsahuje letecké zážitky.");
  return products;
}, ["aviation-catalog-v2"], { revalidate: 3600 }));

export const getProductById = async (id: string) => {
  const products = await getAviationProducts();
  return products.find((product) => product.id === id) ?? null;
};

export const getProductSlug = (product: Product) => product.slug;

export const getIdFromSlug = (slug: string) => {
  const parts = slug.split("-");
  return parts[parts.length - 1] ?? "";
};

export const getProductBySlug = async (slug: string) => {
  const products = await getAviationProducts();
  return products.find((product) => product.slug === slug) ?? null;
};
