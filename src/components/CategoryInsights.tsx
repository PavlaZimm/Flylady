import Link from "next/link";
import type { CategoryConfig } from "@/lib/categories";
import { formatCzk, plural, type CategoryStats } from "@/lib/category-stats";
import { regionLabel, type RegionGroup } from "@/lib/regions";

// Zážitek v jednotném čísle, jak ho lidé hledají („kolik stojí let balónem“).
const SUBJECT: Record<string, string> = {
  "letecke-simulatory": "letecký simulátor",
  "vyhlidkove-lety": "vyhlídkový let",
  "let-balonem": "let balónem",
  "pilotem-na-zkousku": "zážitek pilotem na zkoušku",
  "let-stihackou": "let stíhačkou",
  "vetrny-tunel": "větrný tunel",
  "tandemove-seskoky": "tandemový seskok",
  "let-vrtulnikem": "let vrtulníkem",
  "let-vzducholodi": "let vzducholodí",
};

const REGION_HEADING: Record<string, string> = {
  "letecke-simulatory": "Kde najdete letecký simulátor",
  "vyhlidkove-lety": "Kde si vyhlídkový let zaletíte",
  "let-balonem": "Kde se dá letět balónem",
  "pilotem-na-zkousku": "Kde si pilotování vyzkoušíte",
  "let-stihackou": "Kde se létá stíhačkou",
  "vetrny-tunel": "Kde najdete větrný tunel",
  "tandemove-seskoky": "Kde skočit tandemový seskok",
  "let-vrtulnikem": "Kde se létá vrtulníkem",
  "let-vzducholodi": "Kde se létá vzducholodí",
};

const formatDate = (date: Date) => new Intl.DateTimeFormat("cs-CZ", { dateStyle: "long", timeZone: "Europe/Prague" }).format(date);

export function CategoryInsights({ category, stats, regions, place, updatedAt }: { category: CategoryConfig; stats: CategoryStats; regions: RegionGroup[]; place?: string | null; updatedAt: Date }) {
  if (!stats.offerCount || stats.minPrice === null) return null;
  const subject = SUBJECT[category.slug] ?? category.title.toLowerCase();
  const offers = `${stats.offerCount} ${plural(stats.offerCount, "zážitek", "zážitky", "zážitků")}`;
  const variants = `${stats.variantCount} ${plural(stats.variantCount, "variantou", "variantami", "variantami")}`;

  return <>
    <section id="ceny" className="scroll-mt-24 space-y-5 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h2 className="text-2xl font-semibold">Kolik stojí {subject}?</h2>
      {/* Přímá odpověď do ~45 slov (formát pro úryvek na nulté pozici), podrobnosti až v dalším odstavci. */}
      <p className="max-w-3xl text-lg leading-relaxed text-slate-800">
        {subject.charAt(0).toUpperCase() + subject.slice(1)}{place ? ` ${place}` : ""} stojí na Zážitky.cz od <strong>{formatCzk(stats.minPrice)}</strong>
        {stats.cheapest?.label && ` (${stats.cheapest.label})`}
        {stats.maxPrice !== null && stats.maxPrice > stats.minPrice && <> do {formatCzk(stats.maxPrice)}</>}.
        {" "}V nabídce {stats.offerCount >= 2 && stats.offerCount <= 4 ? "jsou" : "je"} {offers} s {variants}
        {stats.offerCount >= 3 && stats.medianPrice !== null && <> a polovina nabídek začíná do {formatCzk(stats.medianPrice)}</>}.
      </p>
      {stats.cheapest && <p className="max-w-3xl leading-relaxed text-slate-600">
        Nejlevnější variantu má nabídka {stats.cheapest.product.name}
        {stats.maxPrice !== null && stats.maxPrice > stats.minPrice && stats.priciest && <>, nejdražší {stats.priciest.product.name}{stats.priciest.label ? ` (${stats.priciest.label})` : ""}</>}.
        {" "}Ceny všech nabídek porovnáte v tabulce.
      </p>}
      <div className="table-wrapper overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <caption className="sr-only">{category.title}: přehled cen jednotlivých nabídek</caption>
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th scope="col" className="py-3 pr-4 font-medium">Zážitek</th>
              <th scope="col" className="py-3 pr-4 font-medium">Nejlevnější varianta</th>
              <th scope="col" className="py-3 text-right font-medium">Cena od</th>
            </tr>
          </thead>
          <tbody>
            {stats.rows.map((row) => <tr key={row.product.id} className="border-b border-slate-100 last:border-0">
              <td className="py-3 pr-4"><Link href={`/zazitek/${row.product.slug}`} className="font-medium text-slate-900 underline-offset-2 hover:underline">{row.product.name}</Link></td>
              <td className="py-3 pr-4 text-slate-600">{row.cheapestLabel ?? "—"}{row.variantCount > 1 && <span className="text-slate-400"> · {row.variantCount} {plural(row.variantCount, "varianta", "varianty", "variant")}</span>}</td>
              <td className="whitespace-nowrap py-3 text-right font-semibold text-slate-900">{row.minPrice === null ? "na dotaz" : formatCzk(row.minPrice)}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500">Ceny včetně DPH podle nabídky Zážitky.cz, stav k {formatDate(updatedAt)}. Přehled se aktualizuje každou hodinu. Konečnou cenu ověřte u prodejce.</p>
    </section>

    {regions.length > 0 && <section id="kraje" className="scroll-mt-24 space-y-5">
      <h2 className="text-2xl font-semibold">{REGION_HEADING[category.slug] ?? `Kde zážitek najdete`}: přehled podle krajů</h2>
      <p className="max-w-3xl text-slate-600">Kraje uvádí prodejce u každé nabídky. Jeden zážitek může být k dispozici ve více krajích. Přesné místo konání najdete v detailu nabídky.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {regions.map(({ region, products }) => <div key={region.name} className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold">{regionLabel(region)} <span className="font-normal text-slate-500">({products.length})</span></h3>
          {region.city && <p className="text-xs text-slate-500">krajské město {region.city}</p>}
          <ul className="mt-3 space-y-1.5 text-sm">
            {products.map((product) => <li key={product.id}><Link href={`/zazitek/${product.slug}`} className="text-slate-700 underline-offset-2 hover:underline">{product.name}</Link></li>)}
          </ul>
        </div>)}
      </div>
    </section>}
  </>;
}
