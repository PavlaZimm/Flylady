import Link from "next/link";
import type { ProductCopy } from "@/lib/product-copy";

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

const formatDate = (value: string) => new Intl.DateTimeFormat("cs-CZ", { dateStyle: "long", timeZone: "UTC" }).format(new Date(value));

function Block({ heading, items }: { heading: string; items: string[] }) {
  if (!items.length) return null;
  return <div className="space-y-3">
    <h3 className="text-lg font-semibold text-slate-900">{heading}</h3>
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-slate-700">{items.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>
  </div>;
}

export function ProductCopySection({ copy, name }: { copy: ProductCopy; name: string }) {
  return <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="product-copy-heading">
    <h2 id="product-copy-heading" className="text-xl font-semibold text-slate-900">Co je v ceně a na co se zeptat: {name}</h2>
    <div className="grid gap-8 lg:grid-cols-3">
      <Block heading="Co je v ceně" items={copy.included} />
      <Block heading="Pro koho a s jakými limity" items={copy.forWhom} />
      <Block heading="Na co si dát pozor" items={copy.watchOut} />
    </div>
    <p className="text-xs text-slate-500">
      Údaje ověřeny {formatDate(copy.checked)} na stránkách nabídky Zážitky.cz{copy.sources.length ? <>: {copy.sources.map((source, index) => <span key={source.url}>{index > 0 && ", "}<a href={source.url} className="underline" target="_blank" rel="noopener">{source.label}</a></span>)}</> : null}. Podmínky se mohou měnit, před koupí je zkontrolujte.
    </p>
  </section>;
}
