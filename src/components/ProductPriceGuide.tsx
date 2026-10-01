import type { Product } from "@/lib/feed-parser";
import { formatCzk, plural } from "@/lib/category-stats";
import { describeVariant, summarizeVariants, type PriceGroup } from "@/lib/variants";

function GroupTable({ caption, label, groups }: { caption: string; label: string; groups: PriceGroup[] }) {
  return <div className="overflow-x-auto">
    <table className="w-full min-w-[420px] border-collapse text-left text-sm">
      <caption className="mb-2 text-left text-sm font-medium text-slate-900">{caption}</caption>
      <thead><tr className="border-b border-slate-200 text-slate-500">
        <th scope="col" className="py-2 pr-4 font-medium">{label}</th>
        <th scope="col" className="py-2 pr-4 text-right font-medium">Cena</th>
        <th scope="col" className="py-2 text-right font-medium">Variant</th>
      </tr></thead>
      <tbody>{groups.map((group) => <tr key={group.label} className="border-b border-slate-100 last:border-0">
        <td className="py-2 pr-4 text-slate-800">{group.label}</td>
        <td className="whitespace-nowrap py-2 pr-4 text-right font-semibold text-slate-900">{group.from === group.to ? formatCzk(group.from) : `${formatCzk(group.from)} až ${formatCzk(group.to)}`}</td>
        <td className="py-2 text-right text-slate-500">{group.count}</td>
      </tr>)}</tbody>
    </table>
  </div>;
}

/** Přehled variant a cen spočítaný z feedu: u zážitků s mnoha variantami nahrazuje seznam desítek karet. */
export function ProductPriceGuide({ product, updatedAt }: { product: Product; updatedAt: Date }) {
  const summary = summarizeVariants(product);
  if (!summary || summary.count < 3) return null;

  const tables: { caption: string; label: string; groups: PriceGroup[] }[] = [];
  if (summary.byPersons.length >= 2) tables.push({ caption: "Podle počtu osob", label: "Počet osob", groups: summary.byPersons });
  if (summary.byDuration.length >= 2) tables.push({ caption: "Podle délky", label: "Délka", groups: summary.byDuration });
  if (summary.byHeight.length >= 2) tables.push({ caption: "Podle výšky", label: "Výška", groups: summary.byHeight });
  if (summary.byOption.length >= 2) tables.push({ caption: "Podle druhu varianty", label: "Varianta", groups: summary.byOption.slice(0, 12) });
  if (!tables.length) return null;

  const cheapest = describeVariant(summary.cheapest);
  const priciest = describeVariant(summary.priciest);
  const date = new Intl.DateTimeFormat("cs-CZ", { dateStyle: "long", timeZone: "Europe/Prague" }).format(updatedAt);

  return <section id="ceny" className="scroll-mt-24 space-y-5 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="price-guide-heading">
    <h2 id="price-guide-heading" className="text-xl font-semibold text-slate-900">Ceny a varianty: {product.name}</h2>
    <p className="max-w-3xl leading-relaxed text-slate-700">
      Zážitky.cz nabízejí {summary.count} {plural(summary.count, "variantu", "varianty", "variant")} této nabídky, ceny jsou od <strong>{formatCzk(summary.min)}</strong>
      {cheapest && ` (${cheapest})`} do <strong>{formatCzk(summary.max)}</strong>{priciest && summary.max > summary.min ? ` (${priciest})` : ""}.
      Rozpětí podle jednotlivých parametrů ukazují tabulky níže.
    </p>
    <div className="grid gap-6 lg:grid-cols-2">
      {tables.map((table) => <GroupTable key={table.caption} {...table} />)}
    </div>
    <p className="text-xs text-slate-500">Ceny včetně DPH podle nabídky Zážitky.cz, stav k {date}. Sloupec Cena ukazuje nejnižší a nejvyšší cenu mezi variantami dané řádky. Konečnou cenu vybrané varianty ověřte u prodejce.</p>
  </section>;
}
