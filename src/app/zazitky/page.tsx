import type { Metadata } from "next";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductGrid";
import { getAviationProducts } from "@/lib/feed";

export const metadata: Metadata = {
  title: "Všechny letecké zážitky | Flylady.cz",
  description:
    "Kompletní výběr leteckých zážitků, vyhlídkových letů a leteckých dobrodružství. Více než 50+ ověřených zážitků s garancí spokojenosti.",
};

export default async function AllExperiencesPage() {
  const products = await getAviationProducts();

  return (
    <main className="space-y-10">
      {/* Hero header */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-10 text-white sm:px-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative">
          <Link href="/" className="text-sm text-slate-400 hover:text-white">
            ← Zpět na hlavní stránku
          </Link>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            Všechny letecké zážitky
          </h1>
          <p className="mt-2 max-w-2xl text-slate-300">
            Vybírejte z <strong className="text-white">{products.length}+ ověřených zážitků</strong> — vyhlídkové lety, tandemové seskoky, letecké simulátory a další. Všechny s garancí spokojenosti.
          </p>
        </div>
      </header>

      <ProductGrid products={products} />

      {/* CTA sekce */}
      <section className="rounded-2xl border border-slate-100 bg-white p-6 text-center sm:p-8">
        <h2 className="text-lg font-semibold text-slate-900">Potřebujete poradit?</h2>
        <p className="mt-2 text-sm text-slate-600">
          Nevíte, který zážitek vybrat? Prohlédněte si naše kategorie nebo se vraťte na úvod.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/#kategorie"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Prohlédnout kategorie
          </Link>
          <Link
            href="/"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Zpět na úvod
          </Link>
        </div>
      </section>
    </main>
  );
}
