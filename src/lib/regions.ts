import type { Product } from "./feed-parser";

export type Region = { keys: string[]; name: string; city?: string; country: "CZ" | "SK" };

// Kraje, jak je feed Zážitky.cz uvádí v CATEGORYTEXT (včetně jeho pravopisu).
export const REGIONS: Region[] = [
  { keys: ["Praha"], name: "Praha", country: "CZ" },
  { keys: ["Středočeský"], name: "Středočeský kraj", country: "CZ" },
  { keys: ["Jihočeský"], name: "Jihočeský kraj", city: "České Budějovice", country: "CZ" },
  { keys: ["Plzeňský"], name: "Plzeňský kraj", city: "Plzeň", country: "CZ" },
  { keys: ["Karlovarský"], name: "Karlovarský kraj", city: "Karlovy Vary", country: "CZ" },
  { keys: ["Ústecký"], name: "Ústecký kraj", city: "Ústí nad Labem", country: "CZ" },
  { keys: ["Liberecký"], name: "Liberecký kraj", city: "Liberec", country: "CZ" },
  { keys: ["Královehradecký", "Královéhradecký"], name: "Královéhradecký kraj", city: "Hradec Králové", country: "CZ" },
  { keys: ["Pardubický"], name: "Pardubický kraj", city: "Pardubice", country: "CZ" },
  { keys: ["Vysočina"], name: "Kraj Vysočina", city: "Jihlava", country: "CZ" },
  { keys: ["Jihomoravský"], name: "Jihomoravský kraj", city: "Brno", country: "CZ" },
  { keys: ["Olomoucký"], name: "Olomoucký kraj", city: "Olomouc", country: "CZ" },
  { keys: ["Zlínský"], name: "Zlínský kraj", city: "Zlín", country: "CZ" },
  { keys: ["Moravskoslezský"], name: "Moravskoslezský kraj", city: "Ostrava", country: "CZ" },
  { keys: ["Bratislavský"], name: "Bratislavský kraj", city: "Bratislava", country: "SK" },
  { keys: ["Trnavský"], name: "Trnavský kraj", city: "Trnava", country: "SK" },
  { keys: ["Trenčianský", "Trenčiansky"], name: "Trenčínský kraj", city: "Trenčín", country: "SK" },
  { keys: ["Nitrianský", "Nitriansky"], name: "Nitranský kraj", city: "Nitra", country: "SK" },
  { keys: ["Žilinský"], name: "Žilinský kraj", city: "Žilina", country: "SK" },
  { keys: ["Banskobystrický"], name: "Banskobystrický kraj", city: "Banská Bystrica", country: "SK" },
  { keys: ["Prešovský"], name: "Prešovský kraj", city: "Prešov", country: "SK" },
  { keys: ["Košický"], name: "Košický kraj", city: "Košice", country: "SK" },
];

const REGION_BY_KEY = new Map(REGIONS.flatMap((region) => region.keys.map((key) => [key, region] as const)));

/** Kraje, ve kterých feed zážitek nabízí, v pořadí seznamu REGIONS a bez duplicit. */
export const getProductRegions = (product: Pick<Product, "categories">): Region[] => {
  const found = new Set(product.categories.map((category) => REGION_BY_KEY.get(category.trim())));
  return REGIONS.filter((region) => found.has(region));
};

export type RegionGroup = { region: Region; products: Product[] };

/** Zážitky seskupené podle krajů; zážitek dostupný ve více krajích je v každém z nich. */
export const groupByRegion = (products: Product[]): RegionGroup[] => {
  const byRegion = new Map<Region, Product[]>();
  for (const product of products) {
    for (const region of getProductRegions(product)) byRegion.set(region, [...(byRegion.get(region) ?? []), product]);
  }
  return REGIONS.filter((region) => byRegion.has(region)).map((region) => ({ region, products: byRegion.get(region)! }));
};

export const regionLabel = (region: Region) => (region.country === "SK" ? `${region.name} (Slovensko)` : region.name);
