import Link from "next/link";
import type { CategoryConfig } from "@/lib/categories";

// Odstavec s odkazy ve tvaru [text](/url); interní přes Link, externí jako běžný odkaz.
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return <>{parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    return href.startsWith("/")
      ? <Link key={index} href={href} className="font-medium underline underline-offset-2">{label}</Link>
      : <a key={index} href={href} className="underline underline-offset-2" target="_blank" rel="noopener">{label}</a>;
  })}</>;
}

export function CategoryGuide({ category }: { category: CategoryConfig }) {
  if (!category.guide?.length) return null;
  return <section className="max-w-3xl space-y-8">
    {category.guide.map((section) => <div key={section.heading} className="space-y-3">
      <h2 className="text-2xl font-semibold">{section.heading}</h2>
      {section.paragraphs.map((paragraph, index) => <p key={index} className={index === 0 ? "leading-relaxed text-slate-800" : "leading-relaxed text-slate-600"}><RichText text={paragraph} /></p>)}
      {section.table && <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <caption className="sr-only">{section.table.caption}</caption>
          <thead><tr className="border-b border-slate-200 text-slate-500">{section.table.head.map((cell) => <th key={cell} scope="col" className="py-3 pr-4 font-medium">{cell}</th>)}</tr></thead>
          <tbody>{section.table.rows.map((row) => <tr key={row.join("|")} className="border-b border-slate-100 last:border-0">{row.map((cell, index) => <td key={index} className={index === 0 ? "py-3 pr-4 font-medium text-slate-900" : "py-3 pr-4 text-slate-600"}><RichText text={cell} /></td>)}</tr>)}</tbody>
        </table>
      </div>}
    </div>)}
    {category.sources?.length ? <p className="text-xs text-slate-500">
      Zdroje: {category.sources.map((source, index) => <span key={source.url}>{index > 0 && ", "}<a href={source.url} className="underline" target="_blank" rel="noopener">{source.label}</a></span>)}.
    </p> : null}
  </section>;
}
