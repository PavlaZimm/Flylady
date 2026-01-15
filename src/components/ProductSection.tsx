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
};

const formatPrice = (value: number | null) => {
  if (value === null) return "Cena na dotaz";
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
};

export const ProductSection = ({
  title,
  description,
  products,
  limit,
  href,
}: ProductSectionProps) => {
  const shown = typeof limit === "number" ? products.slice(0, limit) : products;

  if (!shown.length) return null;

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
          {description ? (
            <p className="text-sm text-slate-600">{description}</p>
          ) : null}
        </div>
        <div className="flex items-center gap-4">
          {href ? (
            <Link
              href={href}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
            >
              Zobrazit vše
            </Link>
          ) : null}
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {products.length} tipů
          </span>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((product) => (
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
    </section>
  );
};
