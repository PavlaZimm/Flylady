import type { Metadata } from "next";
import Link from "next/link";
import { ProductSection } from "@/components/ProductSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  CATEGORY_CONFIG,
  getCategoryBySlug,
  groupProductsByCategory,
} from "@/lib/categories";
import { getAviationProducts } from "@/lib/feed";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () =>
  CATEGORY_CONFIG.map((category) => ({ slug: category.slug }));

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Kategorie nenalezena" };
  }

  return {
    title: `${category.title} | Letecké zážitky`,
    description: `${category.description} ${category.seoText.slice(0, 100)}...`,
    alternates: {
      canonical: `/kategorie/${category.slug}`,
    },
    openGraph: {
      title: `${category.title} — Flylady.cz`,
      description: category.description,
    },
  };
};

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center">
        <h1 className="text-2xl font-semibold">Kategorie nenalezena</h1>
        <p className="mt-2 text-sm text-slate-600">Tato kategorie neexistuje nebo byla odstraněna.</p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
        >
          Zpět na hlavní stránku
        </Link>
      </div>
    );
  }

  const products = await getAviationProducts();
  const { groups, remaining } = groupProductsByCategory(products);
  const group = groups.find((item) => item.slug === slug);
  const items = group?.products ?? [];

  // Ostatní kategorie pro cross-sell
  const otherCategories = CATEGORY_CONFIG.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <div className="space-y-10">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: "Domů", href: "/" },
          { name: "Zážitky", href: "/zazitky" },
          { name: category.title, href: `/kategorie/${category.slug}` },
        ]}
      />

      {/* Hero header */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-10 text-white sm:px-10">
        <div className="relative max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
              Kategorie
            </span>
            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-300">
              {items.length} {items.length === 1 ? "zážitek" : items.length < 5 ? "zážitky" : "zážitků"}
            </span>
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl">{category.title}</h1>
          <p className="text-slate-300">{category.description}</p>
        </div>
      </header>

      {/* SEO text */}
      <section className="rounded-2xl border border-slate-100 bg-white p-6 text-sm leading-relaxed text-slate-600 sm:p-8">
        <p>{category.seoText}</p>
      </section>

      {/* Produkty */}
      <ProductSection
        title={`Výběr: ${category.title}`}
        products={items}
      />

      {/* Ostatní kategorie - cross-sell */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">Další kategorie</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategorie/${cat.slug}`}
              className="group rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900 transition group-hover:text-slate-700">
                {cat.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600 line-clamp-2">{cat.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-slate-900">
                Zobrazit
                <svg className="h-3 w-3 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* E-book CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-6 text-center sm:p-8">
        <h2 className="text-lg font-semibold text-slate-900">Chcete vědět, kam letět?</h2>
        <p className="mt-1 text-sm text-slate-600">
          Stáhněte si zdarma e-book s 5 nejkrásnějšími místy v ČR z ptačí perspektivy.
        </p>
        <Link
          href="/ebook"
          className="mt-4 inline-flex rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 press-effect"
        >
          Stáhnout e-book zdarma
        </Link>
      </section>
    </div>
  );
}
