import type { Metadata } from "next";
import Link from "next/link";
import { ProductSection } from "@/components/ProductSection";
import { getAviationProducts } from "@/lib/feed";

export const metadata: Metadata = {
  title: "Letecké zážitky pro Flylady",
  description:
    "Vyberte si letecké zážitky, vyhlídkové lety a dobrodružství. Pečlivě vybrané tipy od Flylady.",
};

export default async function Home() {
  const products = await getAviationProducts();

  const normalizeText = (value: string) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const matchKeywords = (productText: string, keywords: string[]) =>
    keywords.some((keyword) =>
      normalizeText(productText).includes(normalizeText(keyword))
    );

  const categories = [
    {
      id: "simulatory",
      title: "Letecké simulátory",
      description: "Ideální start pro pilotní nadšence a dárek pro fanoušky.",
      keywords: ["simulator", "simulátor", "simulator letu"],
    },
    {
      id: "vyhlidkove-lety",
      title: "Vyhlídkové lety",
      description: "Krásné výhledy a klidný let nad krajinou.",
      keywords: ["vyhlidkov", "vyhlídkov"],
    },
    {
      id: "let-stihackou",
      title: "Let stíhačkou",
      description: "Adrenalinový zážitek pro ty, kdo chtějí výš a rychleji.",
      keywords: ["stihack", "stíhačk", "fighter"],
    },
    {
      id: "veterny-tunel",
      title: "Větrný tunel",
      description: "Pocit volného pádu v bezpečí, vhodné i pro začátečníky.",
      keywords: ["veterny tunel", "větrný tunel"],
    },
    {
      id: "tandemove-seskoky",
      title: "Tandemové seskoky",
      description: "Skok padákem s instruktorem a porce pravého adrenalinu.",
      keywords: ["tandem", "seskok", "skok"],
    },
    {
      id: "let-vrtulnikem",
      title: "Let vrtulníkem",
      description: "Pohled shora, který z letadla nezažijete.",
      keywords: ["vrtulnik", "vrtulník", "helikopt"],
    },
    {
      id: "let-vzducholodi",
      title: "Let vzducholodí",
      description: "Elegantní zážitek s nejpomalejším výhledem na svět.",
      keywords: ["vzducholod", "vzducholoď"],
    },
  ];

  const assigned = new Set<string>();
  const grouped = categories.map((category) => {
    const matched = products.filter((product) => {
      if (assigned.has(product.id)) return false;
      const text = `${product.name} ${product.description} ${product.categories.join(
        " "
      )}`;
      const isMatch = matchKeywords(text, category.keywords);
      if (isMatch) assigned.add(product.id);
      return isMatch;
    });

    return { ...category, products: matched };
  });

  const remaining = products.filter((product) => !assigned.has(product.id));

  return (
    <main className="space-y-16">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-16 text-white sm:px-10 lg:px-14">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white">
            Flylady.cz
          </span>
          <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Letecké zážitky s výběrem, kterému můžete věřit
          </h1>
          <p className="text-sm text-slate-200 sm:text-base">
            Připravuji pro vás originální tipy, recenze i inspiraci. Ať už
            hledáte vyhlídkový let, simulátor nebo seskok, tady máte to
            nejlepší na jednom místě.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/zazitky"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
            >
              Zobrazit všechny zážitky
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white"
            >
              Přejít na blog
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-8 text-sm text-slate-600">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Mobilní web</h2>
            <p>
              Vše je navržené mobile-first, aby si vybrali i lidé, kteří hledají
              dárky na cestách.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">SEO základ</h2>
            <p>
              Stránky jsou optimalizované pro indexaci, rychlé načítání a
              sdílení na sociálních sítích.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Jasný vizuál</h2>
            <p>
              Konzistentní barvy, kontrast a čitelnost zajišťují, že nabídka je
              přehledná a důvěryhodná.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-16">
        {grouped.map((group) => (
          <ProductSection
            key={group.id}
            title={group.title}
            description={group.description}
            products={group.products}
          />
        ))}
      </div>

      {remaining.length ? (
        <ProductSection
          title="Další letecké zážitky"
          description="Produkty, které se nevešly do hlavních kategorií."
          products={remaining}
        />
      ) : null}
    </main>
  );
}
