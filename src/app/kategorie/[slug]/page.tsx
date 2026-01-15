import type { Metadata } from "next";
import Link from "next/link";
import { ProductSection } from "@/components/ProductSection";
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
    title: category.title,
    description: category.description,
    openGraph: {
      title: category.title,
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

  return (
    <main className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Kategorie
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          {category.title}
        </h1>
        <p className="text-sm text-slate-600">{category.description}</p>
        <p className="text-sm text-slate-600">{category.seoText}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/zazitky"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
          >
            Zobrazit vše
          </Link>
          <Link
            href="/"
            className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-900"
          >
            Zpět na homepage
          </Link>
        </div>
      </header>

      <ProductSection
        title={`Výběr: ${category.title}`}
        products={items}
      />

      {remaining.length ? (
        <section className="rounded-3xl border border-slate-100 bg-white p-6 text-sm text-slate-600">
          Pokud hledáte něco jiného, projděte také{" "}
          <Link href="/zazitky" className="font-semibold text-slate-900">
            všechny letecké zážitky
          </Link>
          .
        </section>
      ) : null}
    </main>
  );
}
