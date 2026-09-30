import type { Product } from "@/lib/feed";

/** Redakční sekce kategorie: nadpis ve tvaru otázky, pod ním odstavce (první = přímá odpověď). Odkazy v Markdown tvaru [text](/url). */
export type CategoryGuideSection = { heading: string; paragraphs: string[]; table?: { caption: string; head: string[]; rows: string[][] } };
export type CategoryConfig = { slug: string; title: string; description: string; seoText: string; keywords: string[]; exclude: string[]; checklist: string[]; guide?: CategoryGuideSection[]; sources?: { label: string; url: string }[] };

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
      "simulator",
      "paragliding",
      "stihack"
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
    "description": "Pilotem na zkoušku v letadle, vrtulníku či vírníku: porovnejte čas u řízení, letiště, podmínky a ceny zážitků s instruktorem.",
    "keywords": [
      "pilotem",
      "pilotovani",
      "pilotaz"
    ],
    "exclude": [
      "simulator"
    ],
    "seoText": "Pilotem na zkoušku je zážitek, při kterém si s instruktorem nebo pilotem vyzkoušíte řízení skutečného letounu, vrtulníku nebo vírníku. Ve vzduchu strávíte zhruba 20 až 60 minut a část programu tvoří pozemní briefing. Porovnejte proto stroj, letiště, délku samotného letu a limity věku a váhy.",
    "checklist": [
      "Kolik času je vyhrazeno přípravě a kolik samotnému letu?",
      "Co budete smět ovládat pod vedením instruktora?",
      "Je v ceně doprovod, nebo pouze jeden účastník?"
    ],
    "guide": [
      {
        "heading": "Potřebujete k letu pilotní průkaz?",
        "paragraphs": [
          "Ne, žádná z nabídek ho nevyžaduje. Stránky jako podmínky uvádějí váhu, většinou i věk a u některých výšku, pilotní průkaz mezi nimi není. Letadlu velí instruktor nebo pilot, který sedí vedle vás, a řízení si zkoušíte pod jeho dohledem.",
          "U ultralehkých letounů to výslovně říká [předpis LAA ČR UL 1](https://www.laacr.cz/tml/files/2026/09/2026-09-02_UL-1.pdf): velitelem smí být jen držitel platného průkazu způsobilosti (bod 5.1.1). Kdo provozuje lety prodávané přes Zážitky.cz, stránky nabídek neuvádějí.",
          "Zážitek sám pilotní průkaz nedává. Pokud uvažujete o průkazu pilota ultralehkého letounu, [výcviková osnova LAA ČR UL 3](https://www.laacr.cz/tml/files/2023/05/2012-04-UL3-ULL.pdf) předepisuje nejméně 45 hodin teorie a 20 letových hodin. Jestli se zážitkový let do výcviku započítá, rozhoduje letecká škola. [Aeroklub Praha](https://www.akletnany.cz/vyhlidkove-lety-4/pilotem-na-zkousku-22) to slibuje u letů, které v Letňanech prodává sám. U nabídek ze Zážitky.cz se zeptejte předem."
        ]
      },
      {
        "heading": "Letoun, vrtulník, nebo vírník?",
        "paragraphs": [
          "Nejvíc nabídek je na letounech, od ultralehkého po čtyřmístnou Cessnu 172. Vrtulník zastupuje dvoumístný Robinson R22 v Brně a Hradci Králové, vírník se zkouší ve Vrchlabí. Kromě strojů se nabídky liší i v tom, kolik pilotování si opravdu vyzkoušíte.",
          "Vírník není vrtulník. Podle [LAA ČR](https://www.laacr.cz/ultralehke-virniky/) se jeho rotor roztáčí dopředným pohybem, motor bývá tlačný a na rozdíl od vrtulníku vírník neumí trvale viset na místě. U nabídky z Vrchlabí navíc vzlet a přistání dělá instruktor a pilotáž si ve výšce zkusíte „v závislosti na podmínkách“. Pokud nechcete, můžete řízení nechat pilotovi a let si jen užít.",
          "Stíhačku F-35 v tabulce nehledejte. Nabídka „Staňte se pilotem stíhačky F35“ je simulátor, ne skutečný let. Takové zážitky najdete mezi [leteckými simulátory](/letecke-simulatory)."
        ],
        "table": {
          "caption": "Pilotem na zkoušku: stroje a obsah programů na Zážitky.cz k 30. 9. 2026",
          "head": [
            "Nabídka",
            "Stroj",
            "Let / celý program",
            "Co si zkusíte"
          ],
          "rows": [
            [
              "Pilotem na zkoušku, privátní let",
              "podle letiště, nejčastěji Cessna 152",
              "let asi 20 min, před ním 60min briefing",
              "plánování, orientace, krizové situace"
            ],
            [
              "Pilotem malého letounu, privátní let",
              "ultralehký letoun (P92 Echo, ALTO)",
              "30 min letu, 30min briefing",
              "plánování letu, funkce 2. pilota"
            ],
            [
              "Pilotem malého letounu",
              "ultralehký letoun (Echo, VL3, ALTO)",
              "20 min letu, společný 30min briefing",
              "navigace podle mapy a kompasu"
            ],
            [
              "Pilotem letounu na zkoušku",
              "Cessna 172",
              "60 min letu pro 3 lidi, celý program 3 h",
              "plánování, krizové situace, 3 letiště"
            ],
            [
              "Na hodinu pilotem",
              "ATEC Faeta 321 NG",
              "60 min letu",
              "3 vzlety a 3 přistání"
            ],
            [
              "Pilotem sportovního letadla",
              "sportovní letoun",
              "30 nebo 40 min letu",
              "rovný let, zatáčky, autopilot"
            ],
            [
              "Vyhlídkový let s možností pilotáže",
              "dvoumístný sportovní letoun",
              "30, 40 nebo 60 min letu",
              "hlavně vyhlídka, řízení po domluvě s pilotem"
            ],
            [
              "Pilotem vrtulníku na zkoušku",
              "Robinson R22",
              "let asi 30 min, celkem aspoň 2 h",
              "„pomozte pilotovat“, navigace"
            ],
            [
              "Pilotem vírníku na zkoušku",
              "vírník",
              "30 nebo 60 min letu",
              "pilotáž podle podmínek"
            ]
          ]
        }
      },
      {
        "heading": "Jak dlouho poletíte a kolik z toho budete řídit?",
        "paragraphs": [
          "Ve vzduchu strávíte obvykle 20 až 60 minut, u řízení z toho jen část: u privátního letu i u vírníku přebíráte řízení až ve výšce. U „Pilotem na zkoušku, privátní let“ je to asi 20 minut letu po hodinovém briefingu, u Cessny 172 si hodinový let dělí až tři lidé po 20 minutách. Celou hodinu letu a pilotáže výslovně slibuje jen „Na hodinu pilotem“, i tam s instruktorem, který může kdykoli zasáhnout do řízení.",
          "Skupinové programy mají mínus, které z popisu nabídky na první pohled není vidět. U malého letounu ve skupinovém termínu je briefing společný a účastníci se u letadla střídají, ostatní čekají na zemi. V Cessně 172 ostatní dva aspoň sedí v letadle. Střídání se týká jen těchto dvou nabídek, u ostatních stránky uvádějí jednoho účastníka.",
          "U vrtulníku počítejte s briefingem asi 60 minut a letem asi 30 minut, dohromady aspoň 2 hodiny. Nejdéle trvá skupinový program na Cessně 172, zhruba 3 hodiny. Pokud vám jde hlavně o výhled a řízení berete jako bonus, projděte si spíš [vyhlídkové lety](/vyhlidkove-lety) nebo [lety vrtulníkem](/let-vrtulnikem)."
        ]
      },
      {
        "heading": "Co se děje, když je špatné počasí?",
        "paragraphs": [
          "Obvykle se let přesune. U většiny nabídek potvrdí provozovatel čas asi tři dny předem podle předpovědi. Náhradní termín, na kterém se kvůli počasí domluvíte, je závazný. U vírníku volají dva dny předem a při špatném počasí se let po domluvě přesune.",
          "Pozor na lhůtu rezervace: u „Pilotem na zkoušku, privátní let“ rezervujte nejpozději 14 dní před termínem, u vrtulníku 30 dní, u vírníku 7 dní a u „Na hodinu pilotem“ počítejte se dvěma až čtyřmi týdny. Poukaz platí 12 měsíců. Vírník létá i v zimě.",
          "U „Na hodinu pilotem“, vyhlídkového letu s možností pilotáže a sportovního letadla popis postup při špatném počasí neuvádí. Zeptejte se před koupí."
        ]
      },
      {
        "heading": "Jaké jsou limity věku a váhy?",
        "paragraphs": [
          "U letounů a vrtulníku většinou platí věk aspoň 16 let (do 18 let s rodičem nebo s jeho souhlasem) a váha do 100 kg. Výjimky jsou vírník od 6 let, „Na hodinu pilotem“ a vyhlídkový let s možností pilotáže s limitem 120 kg a 195 cm výšky a sportovní letadlo s limitem 120 kg.",
          "U Cessny 172 se váha počítá za všechny tři účastníky dohromady: smějí vážit nejvýš 240 kg, tedy v průměru 80 kg na osobu. U vírníku se dá váha nad 100 kg domluvit individuálně. U tří nabídek („Na hodinu pilotem“, vyhlídkový let, sportovní letadlo) popis minimální věk neuvádí, ověřte si ho před koupí. Jak mezi nabídkami vybírat obecněji, popisuje [průvodce výběrem leteckého zážitku](/blog/jak-vybrat-letecky-zazitek)."
        ]
      }
    ],
    "sources": [
      {
        "label": "produktové stránky Zážitky.cz (30. 9. 2026)",
        "url": "https://www.zazitky.cz/pilotem-na-zkousku-privatni-let"
      },
      {
        "label": "LAA ČR, předpis UL 1",
        "url": "https://www.laacr.cz/tml/files/2026/09/2026-09-02_UL-1.pdf"
      },
      {
        "label": "LAA ČR, výcviková osnova UL 3",
        "url": "https://www.laacr.cz/tml/files/2023/05/2012-04-UL3-ULL.pdf"
      },
      {
        "label": "LAA ČR, ultralehké vírníky",
        "url": "https://www.laacr.cz/ultralehke-virniky/"
      }
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
