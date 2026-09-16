import type { Product } from "@/lib/feed";

export type CategoryConfig = { slug: string; title: string; description: string; seoText: string; keywords: string[]; exclude: string[]; checklist: string[] };

const normalizeText = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const CATEGORY_CONFIG: CategoryConfig[] = [
  {
    "slug": "letecke-simulatory",
    "title": "Letecký simulátor",
    "description": "Vyzkoušejte letecký simulátor: porovnejte kokpity dopravních letadel a stíhaček, délku zážitku a ceny jednotlivých variant.",
    "keywords": [
      "simulator"
    ],
    "exclude": [],
    "seoText": "Chcete si zkusit ovládání letadla a zůstat na zemi? Při výběru simulátoru sledujte typ kokpitu, délku vlastního pilotování a přítomnost instruktora. Rozlišujte mezi virtuální realitou, pevným kokpitem a pohyblivým simulátorem. Označení stroje samo o sobě neříká, jaký pohyb nebo výhled zařízení nabízí.",
    "checklist": [
      "Je cena za osobu, nebo za celý kokpit?",
      "Kolik minut skutečně strávíte u řízení?",
      "Je možné vzít doprovod a jaké jsou podmínky pro děti?"
    ]
  },
  {
    "slug": "vyhlidkove-lety",
    "title": "Vyhlídkové lety",
    "description": "Vyhlídkové lety pro jednotlivce i páry. Porovnejte nabídky podle místa odletu, délky letu, počtu osob a ceny.",
    "keywords": [
      "vyhlidkov",
      "romanticky let letadlem",
      "let vetronem"
    ],
    "exclude": [
      "simulator"
    ],
    "seoText": "U vyhlídkového letu rozhoduje letiště odletu a trasa, nikoli jen název nejbližšího města. Porovnejte délku pobytu ve vzduchu, počet cestujících a to, zda kupujete místo ve sdíleném letu, nebo celý let. Pro dárek si ověřte také možnost změnit termín a platnost poukazu.",
    "checklist": [
      "Odkud se skutečně odlétá a jak se na místo dostanete?",
      "Platí uvedená cena pro jednoho, nebo pro všechny cestující?",
      "Co se stane, když let neumožní počasí?"
    ]
  },
  {
    "slug": "let-balonem",
    "title": "Let balónem",
    "description": "Let balónem pro jednoho, pro dva i soukromou skupinu. Porovnejte ceny a varianty a zjistěte, co ověřit před nákupem poukazu.",
    "keywords": [
      "balon"
    ],
    "exclude": [
      "seskok",
      "vzducholod",
      "simulator"
    ],
    "seoText": "Sdílený let balónem a privátní let jsou dvě odlišné nabídky. U sdíleného letu kupujete místo v koši; u soukromého si ověřte počet osob zahrnutých v ceně. Místo startu, podmínky rezervace a dopravu po přistání kontrolujte v konkrétní variantě. Nespoléhejte na to, že balón poletí nad přesně vybranou památkou.",
    "checklist": [
      "Kolik cestujících bude v koši a je let privátní?",
      "Je zahrnutý návrat z místa přistání?",
      "Jak se domlouvá náhradní termín?"
    ]
  },
  {
    "slug": "pilotem-na-zkousku",
    "title": "Pilotem na zkoušku",
    "description": "Pilotem na zkoušku v letadle nebo vrtulníku: porovnejte délku pilotování, letiště, varianty a ceny zážitků s instruktorem.",
    "keywords": [
      "pilotem",
      "pilotovani",
      "pilotaz"
    ],
    "exclude": [
      "simulator"
    ],
    "seoText": "U nabídky pilotem na zkoušku si rozlište celkovou délku programu od času u řízení. Do programu může patřit pozemní příprava i let s instruktorem. Zážitek vybírejte podle typu stroje, letiště a popisu toho, co si skutečně vyzkoušíte. Zážitkový poukaz sám o sobě není pilotní průkaz.",
    "checklist": [
      "Kolik času je vyhrazeno přípravě a kolik samotnému letu?",
      "Co budete smět ovládat pod vedením instruktora?",
      "Je v ceně doprovod, nebo pouze jeden účastník?"
    ]
  },
  {
    "slug": "let-stihackou",
    "title": "Let stíhačkou",
    "description": "Let stíhačkou: porovnejte skutečné lety, typ letounu, délku programu a ceny. Podívejte se, co zkontrolovat před rezervací.",
    "keywords": [
      "stihack",
      "stihaci",
      "l-39",
      "l-29"
    ],
    "exclude": [
      "simulator"
    ],
    "seoText": "Skutečný let proudovým letounem se výrazně liší od simulátoru stíhačky. Při porovnání sledujte přesný typ stroje, místo konání, čas ve vzduchu a obsah předletové přípravy. Akrobatické prvky ani konkrétní přetížení nepovažujte za automatickou součást každé varianty; rozhoduje popis provozovatele.",
    "checklist": [
      "Jde o skutečný let, nebo o simulátor?",
      "Jaká příprava a vybavení jsou zahrnuté?",
      "Jaké podmínky účasti stanovuje provozovatel?"
    ]
  },
  {
    "slug": "vetrny-tunel",
    "title": "Větrný tunel",
    "description": "Větrný tunel pro jednotlivce, dvojice i rodiny. Porovnejte délku létání, rozdělení času mezi účastníky a ceny variant.",
    "keywords": [
      "vetrny tunel",
      "veterny tunel"
    ],
    "exclude": [],
    "seoText": "Ve větrném tunelu porovnávejte především čistý čas létání na osobu. Rodinný balíček může uvádět součet minut rozdělených mezi více účastníků. Před koupí zkontrolujte instruktorovu asistenci, zapůjčení vybavení a podmínky pro děti. Záznam nebo fotografie mohou být samostatným příplatkem.",
    "checklist": [
      "Je počet minut uvedený na osobu, nebo za celý balíček?",
      "Obsahuje cena instruktora a vybavení?",
      "Jsou fotografie a video zahrnuté v ceně?"
    ]
  },
  {
    "slug": "tandemove-seskoky",
    "title": "Tandemový seskok",
    "description": "Tandemový seskok padákem: porovnejte místa, varianty, ceny a možnosti záznamu. Zjistěte, co ověřit před koupí poukazu.",
    "keywords": [
      "tandemovy seskok",
      "tandemove seskoky"
    ],
    "exclude": [
      "simulator",
      "paragliding"
    ],
    "seoText": "Při výběru tandemového seskoku srovnávejte stejný obsah balíčku. Rozdíl v ceně může tvořit výška výskoku, místo konání nebo video a fotografie. Tandemový seskok, samostatný parašutistický výcvik a tandemový paragliding jsou různé zážitky. Před nákupem ověřte podmínky účasti a rezervace přímo u pořadatele.",
    "checklist": [
      "Je video součástí ceny, nebo se připlácí?",
      "Jaké jsou podmínky účasti a případné příplatky?",
      "Jak se řeší přesun termínu při nevhodném počasí?"
    ]
  },
  {
    "slug": "let-vrtulnikem",
    "title": "Let vrtulníkem",
    "description": "Let vrtulníkem a vyhlídkové lety vrtulníkem: porovnejte místo odletu, délku, kapacitu a cenu konkrétních variant.",
    "keywords": [
      "vrtulnik",
      "helikopt"
    ],
    "exclude": [
      "virnik",
      "simulator"
    ],
    "seoText": "U letu vrtulníkem rozlišujte vyhlídkový let a zážitek s možností pilotování. Podívejte se, zda nabídka platí pro jednoho cestujícího, dvojici nebo celý stroj. Místo odletu a délka letu jsou pro porovnání užitečnější než samotný název balíčku. Trasu a průběh letu si potvrďte při rezervaci.",
    "checklist": [
      "Kupujete jedno sedadlo, nebo celý let?",
      "Kde se nachází místo odletu?",
      "Je součástí pouze vyhlídka, nebo také pilotování?"
    ]
  },
  {
    "slug": "let-vzducholodi",
    "title": "Let vzducholodí",
    "description": "Prohlédněte si nabídku letu vzducholodí a před nákupem ověřte místo konání, délku letu a podmínky rezervace.",
    "keywords": [
      "vzducholod"
    ],
    "exclude": [],
    "seoText": "Let vzducholodí vybírejte s ohledem na místo konání a dostupné termíny. U nabídky v zahraničí počítejte zvlášť s cestou a případným ubytováním, pokud nejsou výslovně uvedené v balíčku. Ověřte také jazyk instruktáže a pravidla při změně termínu.",
    "checklist": [
      "Kde zážitek probíhá a co zahrnuje cena?",
      "V jakém jazyce probíhá instruktáž?",
      "Jak dlouho poukaz platí a kdy lze rezervovat termín?"
    ]
  }
];

// Use names and catalogue categories, not promotional descriptions mentioning other experiences.
export function matchesCategory(product: Product, category: CategoryConfig) {
  const text = normalizeText(`${product.name} ${product.categories.join(" ")}`);
  return category.keywords.some((word) => text.includes(word)) && !category.exclude.some((word) => text.includes(word));
}

export const groupProductsByCategory = (products: Product[]) => {
  const groups = CATEGORY_CONFIG.map((category) => ({ ...category, products: products.filter((product) => matchesCategory(product, category)) }));
  const assigned = new Set(groups.flatMap((group) => group.products.map((product) => product.id)));
  return { groups, remaining: products.filter((product) => !assigned.has(product.id)) };
};
export const getCategoryBySlug = (slug: string) => CATEGORY_CONFIG.find((category) => category.slug === slug) ?? null;
