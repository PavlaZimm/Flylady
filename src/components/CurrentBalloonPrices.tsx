import Link from "next/link";
import type { Product } from "@/lib/feed";
import { formatCzk } from "@/lib/category-stats";

export function CurrentBalloonPrices({ products, fetchedAt }: { products: Product[]; fetchedAt: string }) {
  const offers = ["746", "22"].map((id) => products.find((product) => product.id === id)).filter((product): product is Product => Boolean(product));
  return <section aria-labelledby="current-balloon-prices" className="max-w-3xl space-y-3 rounded-2xl border border-amber-200 bg-amber-50 p-6">
    <h2 id="current-balloon-prices" className="text-xl font-semibold">Aktuální nabídky pro dva z katalogu</h2>
    <p className="text-sm">Srovnání provozovatelů níže jsme ověřili 30. 10. 2026. Tyto dvě katalogové ceny se obnovují samostatně; datum načtení najdete pod nabídkami.</p>
    {offers.length ? <ul className="space-y-2">{offers.map((product) => <li key={product.id}><Link href={`/zazitek/${product.slug}`} className="font-semibold underline">{product.name}</Link>: {product.minPriceVat === null ? "cenu ověřte u prodejce" : `od ${formatCzk(product.minPriceVat)}`}</li>)}</ul> : <p className="text-sm">Tyto dvě nabídky v aktuálním katalogu nejsou. <Link href="/let-balonem" className="underline">Prohlédnout ostatní lety balónem</Link>.</p>}
    <p className="text-xs text-slate-600">Data naposledy načtena <time dateTime={fetchedAt}>{new Intl.DateTimeFormat("cs-CZ", { dateStyle: "long", timeStyle: "short", timeZone: "Europe/Prague" }).format(new Date(fetchedAt))}</time>. Cena „od“ nemusí platit pro každou lokalitu a délku; konkrétní variantu a celkový počet osob ověřte u prodejce.</p>
  </section>;
}
