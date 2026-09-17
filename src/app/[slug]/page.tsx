import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductSection } from "@/components/ProductSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CATEGORY_CONFIG, getCategoryBySlug, matchesCategory } from "@/lib/categories";
import { getAviationProducts } from "@/lib/feed";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };
export const revalidate = 3600;
export const generateStaticParams = async () => CATEGORY_CONFIG.map((category) => ({ slug: category.slug }));
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  return pageMetadata(`${category.title}: nabídky a jak vybrat`, category.description, `/${slug}`);
}
export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const products = (await getAviationProducts()).filter((product) => matchesCategory(product, category));
  const guides = (await getAllPosts()).filter((post) => post.category === slug);
  return <main className="space-y-10">
    <Breadcrumbs items={[{ name: "Zážitky", href: "/zazitky" }, { name: category.title, href: `/${slug}` }]} />
    <header className="max-w-3xl space-y-4"><h1 className="text-3xl font-semibold">{category.title}</h1><p>{category.description}</p><p className="text-slate-600">{category.seoText}</p></header>
    {products.length ? <ProductSection title="Nabídky a ceny" products={products} /> : <p>V této kategorii teď nemáme dostupnou nabídku. Projděte si <Link href="/zazitky" className="underline">další zážitky</Link>.</p>}
    <section className="space-y-4 rounded-3xl bg-white p-8"><h2 className="text-2xl font-semibold">Co ověřit před nákupem</h2><ul className="list-disc space-y-3 pl-5">{category.checklist.map((item) => <li key={item}>{item}</li>)}</ul><p className="text-sm text-slate-600">Ceny a varianty pocházejí z nabídky Zážitky.cz. Rozhodující cenu a podmínky ověřte u prodejce před objednávkou.</p><Link href="/blog/jak-vybrat-letecky-zazitek" className="inline-block underline">Průvodce výběrem dárku</Link></section>
    {guides.length > 0 && <section className="space-y-5"><h2 className="text-2xl font-semibold">Průvodci výběrem a lokalitami</h2><div className="grid gap-4 md:grid-cols-2">{guides.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-500"><h3 className="font-semibold">{post.title}</h3><p className="mt-2 text-sm text-slate-600">{post.description}</p></Link>)}</div></section>}
    <nav aria-label="Další kategorie" className="flex flex-wrap gap-4">{CATEGORY_CONFIG.filter((item) => item.slug !== slug).map((item) => <Link key={item.slug} href={`/${item.slug}`} className="text-sm underline">{item.title}</Link>)}</nav>
  </main>;
}
