import type { Product } from "./feed-parser";

export const normalizeSearch = (value: string) => value.toLocaleLowerCase("cs-CZ").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
export type CatalogSort = "name" | "price-asc" | "price-desc";

export function filterCatalog(products: Product[], query: string, maxPrice: number | null, sort: CatalogSort) {
  const words = normalizeSearch(query).trim().split(/\s+/).filter(Boolean);
  return products.filter((product) => {
    const text = normalizeSearch([product.name, product.location ?? "", ...product.categories, ...product.variants.map((variant) => variant.location ?? "")].join(" "));
    return words.every((word) => text.includes(word)) && (maxPrice === null || (product.minPriceVat !== null && product.minPriceVat <= maxPrice));
  }).sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name, "cs");
    if (a.minPriceVat === null) return b.minPriceVat === null ? a.name.localeCompare(b.name, "cs") : 1;
    if (b.minPriceVat === null) return -1;
    const delta = a.minPriceVat - b.minPriceVat;
    return (sort === "price-desc" ? -delta : delta) || a.name.localeCompare(b.name, "cs");
  });
}
