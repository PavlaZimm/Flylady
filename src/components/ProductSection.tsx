import Link from "next/link";
import type { Product } from "@/lib/feed";
import { ProductCard } from "@/components/ProductCard";

type ProductSectionProps = {
  title: string;
  description?: string;
  products: Product[];
  limit?: number;
  href?: string;
  featured?: boolean;
};

export function ProductSection({ title, description, products, limit, href }: ProductSectionProps) {
  const shown = typeof limit === "number" ? products.slice(0, limit) : products;
  if (!shown.length) return null;
  return <section className="space-y-6">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div><h2 className="text-2xl font-semibold text-slate-900">{title}</h2>{description && <p className="mt-2 text-sm text-slate-600">{description}</p>}</div>
      {href && <Link href={href} className="text-sm font-semibold underline" aria-label={`Všechny nabídky: ${title}`}>Zobrazit vše ({products.length})</Link>}
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{shown.map((product) => <ProductCard key={product.id} product={product} />)}</div>
  </section>;
}
