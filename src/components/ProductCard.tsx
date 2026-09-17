import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/feed";

export function ProductCard({ product }: { product: Product }) {
  const price = product.minPriceVat;
  return <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
    <Link href={`/zazitek/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2" aria-label={`Detail: ${product.name}`}>
      {product.imageUrls[0] && <Image src={product.imageUrls[0]} alt={product.name} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 360px" />}
      {price !== null && price < 3000 && <span className="absolute left-3 top-3 rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">Varianta pod 3 000 Kč</span>}
    </Link>
    <div className="flex flex-1 flex-col gap-3 p-6">
      <h3 className="text-lg font-semibold text-slate-900"><Link href={`/zazitek/${product.slug}`} className="hover:underline">{product.name}</Link></h3>
      <p className="line-clamp-2 text-sm text-slate-600">{product.description}</p>
      <p className="text-xs text-slate-500">Nabídka Zážitky.cz</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="font-bold text-slate-900">{price === null ? "Cena na dotaz" : <>od {new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK", maximumFractionDigits: 0 }).format(price)}</>}</p>
        <Link href={`/zazitek/${product.slug}`} className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700" aria-label={`Varianty a cena: ${product.name}`}>Detail</Link>
      </div>
    </div>
  </article>;
}
