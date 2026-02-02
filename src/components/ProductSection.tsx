"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/feed";

type ProductSectionProps = {
  title: string;
  description?: string;
  products: Product[];
  limit?: number;
  href?: string;
  featured?: boolean;
};

const formatPrice = (value: number | null) => {
  if (value === null) return "Cena na dotaz";
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
};

// Pseudonáhodné štítky pro produkty
const getProductBadge = (product: Product, index: number) => {
  const price = product.minPriceVat ?? 0;
  if (price > 10000) return { text: "Premium", color: "bg-purple-500" };
  if (index === 0) return { text: "Oblíbené", color: "bg-amber-500" };
  if (price < 3000) return { text: "Skvělá cena", color: "bg-green-500" };
  if (index === 1) return { text: "Top volba", color: "bg-blue-500" };
  return null;
};

export const ProductSection = ({
  title,
  description,
  products,
  limit,
  href,
  featured = false,
}: ProductSectionProps) => {
  const shown = typeof limit === "number" ? products.slice(0, limit) : products;

  if (!shown.length) return null;

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
            {featured && (
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                Doporučujeme
              </span>
            )}
          </div>
          {description ? (
            <p className="mt-1 text-sm text-slate-600">{description}</p>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          {href ? (
            <Link
              href={href}
              className="group flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600 transition hover:text-slate-900"
            >
              Zobrazit vše
              <svg className="h-3 w-3 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : null}
          <span className="text-xs uppercase tracking-[0.15em] text-slate-400">
            {products.length} {products.length === 1 ? "tip" : products.length < 5 ? "tipy" : "tipů"}
          </span>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((product, index) => {
          const badge = getProductBadge(product, index);
          return (
            <article
              key={product.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                {product.imageUrls[0] ? (
                  <Image
                    src={product.imageUrls[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : null}
                {/* Badge */}
                {badge && (
                  <span className={`absolute left-3 top-3 rounded-full ${badge.color} px-2.5 py-1 text-xs font-semibold text-white shadow-sm`}>
                    {badge.text}
                  </span>
                )}
                {/* Quick view overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg">
                    Zobrazit detail
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-slate-700">
                    {product.name}
                  </h3>
                  <p className="line-clamp-2 text-sm text-slate-600">
                    {product.description}
                  </p>
                </div>
                <div className="mt-auto space-y-3">
                  {/* Trust indicators */}
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Garance
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Ověřeno
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-500">od</span>
                      <span className="ml-1 text-lg font-bold text-slate-900">
                        {formatPrice(product.minPriceVat)}
                      </span>
                    </div>
                    <Link
                      href={`/zazitek/${product.slug}`}
                      className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
