import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { getAviationProducts } from "@/lib/feed";

export const metadata: Metadata = {
  title: "Letecké zážitky pro Flylady",
  description:
    "Vyberte si letecké zážitky, vyhlídkové lety a dobrodružství. Pečlivě vybrané tipy od Flylady.",
};

export default async function Home() {
  const products = await getAviationProducts();

  return (
    <main className="space-y-16">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-16 text-white sm:px-10 lg:px-14">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white">
            Flylady.cz
          </span>
          <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Letecké zážitky, které si zamilujete
          </h1>
          <p className="text-sm text-slate-200 sm:text-base">
            Výběr leteckých zážitků pro všechny, kdo milují volnost, výšku a
            dobrodružství. Inspirace, recenze a tipy na ty nejlepší lety.
          </p>
        </div>
      </section>

      <ProductGrid products={products} />
    </main>
  );
}
