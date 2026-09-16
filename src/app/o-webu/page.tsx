import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
export const metadata = pageMetadata("O webu a affiliate spolupráci", "Jak Flylady.cz vybírá a zobrazuje nabídky, odkud pocházejí ceny a jak fungují affiliate odkazy na Zážitky.cz.", "/o-webu");
export default function AboutPage() {
  return <main className="max-w-3xl space-y-7">
    <Breadcrumbs items={[{ name: "O webu", href: "/o-webu" }]} />
    <h1 className="text-3xl font-semibold">O Flylady.cz</h1>
    <p>Pomáháme zorientovat se v leteckých zážitcích a v rozdílech mezi jejich variantami. Katalog doplňujeme průvodci výběrem a otázkami, které si položit před nákupem.</p>
    <section className="space-y-3"><h2 className="text-xl font-semibold">Odkud jsou nabídky a ceny</h2><p>Nabídky, fotografie, produktové popisy a ceny pocházejí z XML feedu Zážitky.cz. Katalog zahrnuje nabídky tohoto prodejce, nejde o srovnání celého trhu. Produktové karty řadíme abecedně; pořadí není žebříčkem kvality. Nemáme všechny zážitky osobně vyzkoušené.</p><p>Data se obnovují přibližně jednou za hodinu. Cena „od“ odpovídá nejlevnější naceněné variantě včetně DPH a nemusí platit pro každou lokalitu či délku. Rozhodující je cena a dostupnost na stránce prodejce při objednávce.</p></section>
    <section className="space-y-3"><h2 className="text-xl font-semibold">Affiliate odkazy</h2><p>Odkazy s tlačítkem „Koupit na Zážitky.cz“ vedou k prodejci. Pokud přes ně nakoupíte, můžeme získat provizi. Flylady.cz objednávku nepřijímá ani samotný zážitek nepořádá.</p></section>
    <section className="space-y-3"><h2 className="text-xl font-semibold">Rezervace a podmínky</h2><p>Před zaplacením ověřte místo konání, platnost poukazu, podmínky účasti a postup při přesunu termínu. S dotazy na rezervaci a konkrétní nabídku se obraťte na prodejce nebo provozovatele uvedeného u zážitku.</p></section>
    <Link className="inline-block underline" href="/zazitky">Prohlédnout nabídky zážitků</Link>
  </main>;
}
