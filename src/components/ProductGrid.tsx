"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/feed";

type ProductGridProps = {
  products: Product[];
};

const formatPrice = (value: number | null) => {
  if (value === null) return "Cena na dotaz";
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
};

// Badge pro produkty
const getProductBadge = (product: Product, index: number) => {
  const price = product.minPriceVat ?? 0;
  if (price > 10000) return { text: "Premium", color: "bg-purple-500" };
  if (index < 3) return { text: "Oblíbené", color: "bg-amber-500" };
  if (price < 3000) return { text: "Skvělá cena", color: "bg-green-500" };
  return null;
};

export const ProductGrid = ({ products }: ProductGridProps) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(normalized)
    );
  }, [products, query]);

  return (
    <section className="space-y-6">
      {/* Header s vyhledáváním */}
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-slate-900">{filtered.length} zážitků</p>
            <p className="text-xs text-slate-500">Nalezeno ve výběru</p>
          </div>
        </div>
        <label className="relative w-full sm:w-80">
          <span className="sr-only">Hledat zážitek</span>
          <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Hledat zážitek..."
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
          />
        </label>
      </div>

      {/* Trust bar */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Garance vrácení peněz
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Platnost 2 roky
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Doručení ihned
        </span>
      </div>

      {/* Product grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product, index) => {
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
                {badge && (
                  <span className={`absolute left-3 top-3 rounded-full ${badge.color} px-2.5 py-1 text-xs font-semibold text-white shadow-sm`}>
                    {badge.text}
                  </span>
                )}
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
      {!filtered.length ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
          <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <p className="mt-4 text-sm font-medium text-slate-600">Žádné výsledky pro &ldquo;{query}&rdquo;</p>
          <p className="mt-1 text-sm text-slate-500">Zkuste upravit hledaný výraz nebo prohlédněte všechny zážitky.</p>
          <button
            onClick={() => setQuery("")}
            className="mt-4 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
          >
            Zobrazit vše
          </button>
        </div>
      ) : null}
    </section>
  );
};
