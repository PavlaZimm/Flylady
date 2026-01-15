import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { getAviationProducts } from "@/lib/feed";

export const metadata: Metadata = {
  title: "Všechny letecké zážitky",
  description:
    "Kompletní výběr leteckých zážitků, vyhlídkových letů a leteckých dobrodružství.",
};

export default async function AllExperiencesPage() {
  const products = await getAviationProducts();

  return (
    <main className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">
          Všechny letecké zážitky
        </h1>
        <p className="text-sm text-slate-600">
          Projděte si celý katalog a najděte přesně ten pravý zážitek.
        </p>
      </header>
      <ProductGrid products={products} />
    </main>
  );
}
