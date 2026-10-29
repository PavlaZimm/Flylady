import { cache } from "react";
import { unstable_cache } from "next/cache";
import { parseFeedXml, isAviationExperience, type Product } from "@/lib/feed-parser";
export type { Product, ProductVariant } from "@/lib/feed-parser";
export { buildAffiliateUrl } from "@/lib/feed-parser";

// Server-only override also lets integration checks use an isolated fixture feed.
const FEED_URL = process.env.FLYLADY_FEED_URL ?? "https://alis.zazitky.cz/data/exports/zazitky-pap-all.xml";

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

async function loadAviationCatalog() {
  const products = (await getAllProducts()).filter((product) => isAviationExperience(product.categories));
  if (!products.length) throw new Error("XML feed neobsahuje letecké zážitky.");
  return { products, fetchedAt: new Date().toISOString() };
}

// unstable_cache includes callback.toString() in its key. Turbopack minifies the
// route-handler and RSC copies differently, which otherwise creates TWO caches.
// A bound callback has the same native identity string in both bundles. The
// explicit version/source key owns invalidation: bump it when parsing changes.
export const getAviationCatalog = cache(unstable_cache(loadAviationCatalog.bind(null), ["aviation-catalog-v4", FEED_URL], { revalidate: 3600 }));

export const getAviationProducts = cache(async () => (await getAviationCatalog()).products);

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
