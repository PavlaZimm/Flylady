import Link from "next/link";
import { ProductSection } from "@/components/ProductSection";
import { groupProductsByCategory } from "@/lib/categories";
import { getAviationProducts } from "@/lib/feed";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 3600;
export const metadata = pageMetadata("Letecké zážitky: vyberte si let, seskok i simulátor", "Letecké zážitky na jednom místě. Porovnejte vyhlídkové lety, let balónem, tandemový seskok a letecký simulátor podle nabídky a ceny.", "/");

export default async function Home() {
  const [products, posts] = await Promise.all([getAviationProducts(), getAllPosts()]);
  const { groups, remaining } = groupProductsByCategory(products);
  return <main className="space-y-14">
    <section className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 px-6 py-16 text-white sm:px-10">
      <div className="max-w-3xl space-y-5">
        <p className="text-sm uppercase tracking-widest">Inspirace pro váš příští let</p>
        <h1 className="text-3xl font-semibold sm:text-5xl">Letecké zážitky: od první vyhlídky po tandemový seskok</h1>
        <p className="text-slate-200">Chcete darovat let balónem, vyzkoušet si pilotování nebo se podívat na krajinu z letadla? Projděte si nabídky Zážitky.cz podle druhu zážitku a porovnejte jejich varianty a ceny.</p>
        <Link href="/zazitky" className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-900">Prohlédnout všechny zážitky</Link>
      </div>
    </section>
    <section id="kategorie" className="scroll-mt-24 space-y-5">
      <h2 className="text-2xl font-semibold">Jaký zážitek hledáte?</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{groups.filter((group) => group.products.length).map((group) => <Link key={group.slug} href={`/${group.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-500"><span className="block text-lg font-semibold">{group.title}</span><span className="text-sm text-slate-600">{group.description}</span></Link>)}</div>
    </section>
    <section className="space-y-5 rounded-3xl bg-white p-8">
      <h2 className="text-2xl font-semibold">Jak vybrat letecký zážitek jako dárek</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div><h3 className="font-semibold">Výhled, nebo vlastní pilotování?</h3><p className="mt-2 text-sm text-slate-600">Pro pozorování krajiny začněte u vyhlídkových letů. Pokud chce obdarovaný ovládat stroj, podívejte se na simulátory a zážitky pilotem na zkoušku.</p></div>
        <div><h3 className="font-semibold">Cena za osobu, nebo celý let?</h3><p className="mt-2 text-sm text-slate-600">Porovnávejte počet účastníků, čas ve vzduchu a obsah balíčku. Nejnižší cena může patřit jiné délce či lokalitě, než kterou hledáte.</p></div>
        <div><h3 className="font-semibold">Termín a místo rozhodují</h3><p className="mt-2 text-sm text-slate-600">Před koupí ověřte skutečné místo odletu, platnost poukazu a pravidla změny termínu. U venkovních zážitků počítejte s vlivem počasí.</p></div>
      </div>
      <Link href="/blog/jak-vybrat-letecky-zazitek" className="inline-block font-semibold underline">Průvodce výběrem leteckého zážitku →</Link>
    </section>
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold">Průvodci před prvním letem</h2>
      <div className="grid gap-5 md:grid-cols-3">{posts.slice(0, 3).map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-500"><h3 className="font-semibold">{post.title}</h3><p className="mt-2 text-sm text-slate-600">{post.description}</p></Link>)}</div>
      <Link href="/blog" className="inline-block underline">Všechny články a místní průvodci</Link>
    </section>
    {groups.map((group) => <ProductSection key={group.slug} title={group.title} description={group.description} products={group.products} limit={3} href={`/${group.slug}`} />)}
    {remaining.length > 0 && <ProductSection title="Další letecké zážitky" products={remaining} limit={6} href="/zazitky" />}
    <section className="space-y-3 text-sm text-slate-600"><h2 className="text-xl font-semibold text-slate-900">Jak funguje Flylady.cz</h2><p>Flylady.cz je affiliate katalog. Nabídky, popisy a ceny přebíráme z feedu Zážitky.cz a doplňujeme je průvodci výběrem. Nejde o vlastní testy ani porovnání celého trhu. Objednávku dokončíte u prodejce; za nákup přes náš odkaz můžeme získat provizi.</p><Link href="/o-webu" className="inline-block underline">Více o nabídkách a financování webu</Link></section>
  </main>;
}
