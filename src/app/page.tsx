import type { Metadata } from "next";
import Link from "next/link";
import { ProductSection } from "@/components/ProductSection";
import { groupProductsByCategory } from "@/lib/categories";
import { getAviationProducts } from "@/lib/feed";

export const metadata: Metadata = {
  title: "Letecké zážitky pro Flylady",
  description:
    "Vyberte si letecké zážitky, vyhlídkové lety a dobrodružství. Pečlivě vybrané tipy od Flylady.",
};

export default async function Home() {
  const products = await getAviationProducts();
  const { groups, remaining } = groupProductsByCategory(products);

  return (
    <main className="space-y-16">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-16 text-white sm:px-10 lg:px-14">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white">
            Flylady.cz
          </span>
          <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Letecké zážitky s výběrem, kterému můžete věřit
          </h1>
          <p className="text-sm text-slate-200 sm:text-base">
            Připravuji pro vás originální tipy, recenze i inspiraci. Ať už
            hledáte vyhlídkový let, simulátor nebo seskok, tady máte to
            nejlepší na jednom místě.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/zazitky"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
            >
              Zobrazit všechny zážitky
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white"
            >
              Přejít na blog
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-8 text-sm text-slate-600">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="6" y="3" width="12" height="18" rx="2" />
                <path d="M10 17h4" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Mobilní web</h2>
            <p>
              Mobile-first rozložení, takže se vybírá pohodlně i v telefonu na
              cestách.
            </p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="6" />
                <path d="M16 16l4 4" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">SEO základ</h2>
            <p>
              Připravené pro vyhledávače – rychlé načítání, meta informace a
              sdílení.
            </p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12 3l2.9 6.1 6.7.6-5 4.4 1.5 6.6-6.1-3.3-6.1 3.3 1.5-6.6-5-4.4 6.7-.6L12 3z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">
              Důvěryhodný vizuál
            </h2>
            <p>
              Čisté barvy, jasná struktura a dostatek prostoru pro rychlé
              rozhodnutí.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-16">
        {groups.map((group) => (
          <ProductSection
            key={group.slug}
            title={group.title}
            description={group.description}
            products={group.products}
            limit={3}
            href={`/kategorie/${group.slug}`}
          />
        ))}
      </div>

      {remaining.length ? (
        <ProductSection
          title="Další letecké zážitky"
          description="Produkty, které se nevešly do hlavních kategorií."
          products={remaining}
        />
      ) : null}
    </main>
  );
}
