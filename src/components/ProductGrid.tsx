"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/feed";
import { CATEGORY_CONFIG, matchesCategory } from "@/lib/categories";
import { filterCatalog, type CatalogSort } from "@/lib/catalog";
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [sort, setSort] = useState<CatalogSort>("name");
  const filtered = useMemo(() => {
    const selected = CATEGORY_CONFIG.find((item) => item.slug === category);
    return filterCatalog(selected ? products.filter((product) => matchesCategory(product, selected)) : products, query, budget ? Number(budget) : null, sort);
  }, [products, query, category, budget, sort]);
  const reset = () => { setQuery(""); setCategory(""); setBudget(""); setSort("name"); };
  const field = "mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 focus:outline-2 focus:outline-offset-2 focus:outline-slate-700";
  return <section className="space-y-6" aria-label="Výběr zážitků">
    <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="text-sm font-medium">Název nebo lokalita<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Např. balón nebo Most" className={field} /></label>
        <label className="text-sm font-medium">Druh zážitku<select value={category} onChange={(event) => setCategory(event.target.value)} className={field}><option value="">Všechny kategorie</option>{CATEGORY_CONFIG.map((item) => <option key={item.slug} value={item.slug}>{item.title}</option>)}</select></label>
        <label className="text-sm font-medium">Cena varianty do<select value={budget} onChange={(event) => setBudget(event.target.value)} className={field}><option value="">Bez omezení</option>{[3000, 5000, 10000, 20000].map((value) => <option key={value} value={value}>{value.toLocaleString("cs-CZ")} Kč</option>)}</select></label>
        <label className="text-sm font-medium">Řazení<select value={sort} onChange={(event) => setSort(event.target.value as CatalogSort)} className={field}><option value="name">Podle názvu</option><option value="price-asc">Od nejlevnějšího</option><option value="price-desc">Od nejdražšího</option></select></label>
      </div>
      <p className="text-sm text-slate-600">Filtr ceny vychází z nejlevnější varianty. Hledaná lokalita a nejnižší cena mohou patřit různým variantám; ověřte jejich kombinaci v detailu.</p>
      <div className="flex flex-wrap items-center justify-between gap-3"><p role="status" aria-live="polite" aria-atomic="true" className="font-semibold">Počet nalezených zážitků: {filtered.length}</p>{(query || category || budget || sort !== "name") && <button type="button" onClick={reset} className="text-sm underline">Zrušit filtry a řazení</button>}</div>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div>
    {!filtered.length && <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center"><p>Tomuto výběru neodpovídá žádný zážitek. Zkuste jinou lokalitu nebo vyšší rozpočet.</p><button type="button" onClick={reset} className="mt-4 rounded-full bg-slate-900 px-5 py-3 text-white">Zobrazit všechny zážitky</button></div>}
  </section>;
}
