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
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Letecké zážitky
          </h2>
          <p className="text-sm text-slate-600">
            Vyberte si nezapomenutelný let nebo letecké dobrodružství.
          </p>
        </div>
        <label className="w-full md:w-72">
          <span className="sr-only">Hledat zážitek</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Hledat zážitek..."
            className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400"
          />
        </label>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <article
            key={product.id}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              {product.imageUrls[0] ? (
                <Image
                  src={product.imageUrls[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : null}
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p className="line-clamp-3 text-sm text-slate-600">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">
                  {formatPrice(product.minPriceVat)}
                </span>
                <Link
                  href={`/zazitek/${product.slug}`}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                >
                  Detail
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      {!filtered.length ? (
        <p className="rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">
          Pro tento dotaz jsme nic nenašli. Zkuste upravit hledání.
        </p>
      ) : null}
    </section>
  );
};
