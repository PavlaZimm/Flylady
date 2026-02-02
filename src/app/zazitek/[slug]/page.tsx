import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAviationProducts,
  getIdFromSlug,
  getProductById,
  getProductBySlug,
} from "@/lib/feed";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductSchema } from "@/components/StructuredData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const formatPrice = (value: number | null) => {
  if (value === null) return "Cena na dotaz";
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
};

export const generateStaticParams = async () => {
  const products = await getAviationProducts();
  return products.map((product) => ({ slug: product.slug }));
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const id = getIdFromSlug(slug);
  const product = (await getProductById(id)) ?? (await getProductBySlug(slug));

  if (!product) {
    return {
      title: "Zážitek nenalezen",
    };
  }

  return {
    title: product.name,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 160),
      images: product.imageUrls[0] ? [product.imageUrls[0]] : undefined,
    },
  };
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const id = getIdFromSlug(slug);
  const product = (await getProductById(id)) ?? (await getProductBySlug(slug));

  if (!product) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center">
        <h1 className="text-2xl font-semibold">Zážitek nenalezen</h1>
        <p className="mt-2 text-sm text-slate-600">
          Možná byl produkt odstraněn nebo změnil kategorii.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
        >
          Zpět na přehled
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Structured Data pro SEO */}
      <ProductSchema product={product} />

      <div className="space-y-8">
        {/* Breadcrumbs navigace */}
        <Breadcrumbs
          items={[
            { name: "Domů", href: "/" },
            { name: "Zážitky", href: "/zazitky" },
            { name: product.name, href: `/zazitek/${product.slug}` },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100">
            {product.imageUrls[0] ? (
              <Image
                src={product.imageUrls[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            ) : null}
          </div>
          {product.imageUrls.length > 1 ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {product.imageUrls.slice(1, 4).map((url) => (
                <div
                  key={url}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100"
                >
                  <Image
                    src={url}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <aside className="flex flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm lg:sticky lg:top-24">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Skladem
            </span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              Oblíbený zážitek
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              {product.categories.slice(0, 2).join(" · ")}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>

          {/* Cena */}
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-slate-600">Cena od</span>
              <div className="text-right">
                <span className="text-2xl font-bold text-slate-900">
                  {formatPrice(product.minPriceVat)}
                </span>
              </div>
            </div>
          </div>

          {/* Detaily */}
          <div className="space-y-2.5 text-sm">
            {product.location ? (
              <div className="flex items-center gap-3 text-slate-600">
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{product.location}</span>
              </div>
            ) : null}
            {product.deliveryDate ? (
              <div className="flex items-center gap-3 text-slate-600">
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{product.deliveryDate}</span>
              </div>
            ) : null}
            <div className="flex items-center gap-3 text-slate-600">
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Platnost voucheru 2 roky</span>
            </div>
          </div>

          {/* Hlavní CTA */}
          <a
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-green-600/25 transition hover:bg-green-700"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Koupit zážitek
            <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <p className="text-center text-xs text-slate-500">
            Bezpečný nákup přes Zážitky.cz
          </p>

          {/* Trust signály */}
          <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-5 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Garance vrácení</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Doručení ihned</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Změna termínu</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Dárková krabička</span>
            </div>
          </div>
        </aside>
      </div>

        {product.variants.length ? (
          <section className="space-y-4" aria-labelledby="variants-heading">
            <h2 id="variants-heading" className="text-xl font-semibold text-slate-900">
              Dostupné varianty
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {product.variants.map((variant) => (
                <div
                  key={variant.id}
                  className="rounded-2xl border border-slate-100 bg-white p-5 hover-lift"
                >
                  <h3 className="text-sm font-semibold text-slate-900">
                    {variant.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
                    <span>{variant.location ?? "—"}</span>
                    <span className="font-semibold text-slate-900">
                      {formatPrice(variant.priceVat)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}
