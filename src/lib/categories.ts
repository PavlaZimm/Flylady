import type { Product } from "@/lib/feed";

export type CategoryConfig = {
  slug: string;
  title: string;
  description: string;
  seoText: string;
  keywords: string[];
};

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const matchKeywords = (text: string, keywords: string[]) =>
  keywords.some((keyword) =>
    normalizeText(text).includes(normalizeText(keyword))
  );

export const CATEGORY_CONFIG: CategoryConfig[] = [
  {
    slug: "letecke-simulatory",
    title: "Letecké simulátory",
    description: "Skvělý start pro budoucí piloty i fanoušky letectví.",
    seoText:
      "Letecké simulátory v Praze, Brně a dalších městech ČR jsou ideální volbou pro všechny, kdo si chtějí vyzkoušet pilotáž bez toho, aby opustili zem. Najdete tu moderní simulátory dopravních letadel Boeing 737 i vojenských strojů, realistické kokpity a zkušené instruktory. V Praze vás čeká simulátor v centru města, v Brně pak profesionální kokpit s pohyblivou plošinou. Skvělé jako dárek pro fanoušky letectví nebo netradiční zážitek na víkend.",
    keywords: ["simulator", "simulátor", "simulator letu", "simulátor letu"],
  },
  {
    slug: "vyhlidkove-lety",
    title: "Vyhlídkové lety",
    description: "Krásné výhledy a klidný let nad českou krajinou.",
    seoText:
      "Vyhlídkové lety patří mezi nejoblíbenější letecké zážitky v České republice. Užijte si panoramata Prahy s Pražským hradem a Vltavou, romantické meandry u Českého Krumlova, gotický hrad Karlštejn z ptačí perspektivy nebo majestátní scenérie Krkonoš. Často si můžete vybrat délku i trasu letu. Jsou skvělým dárkem pro páry i rodiny a díky klidnému tempu jsou vhodné i pro úplné začátečníky.",
    keywords: ["vyhlidkov", "vyhlídkov", "panorama", "scenic"],
  },
  {
    slug: "let-stihackou",
    title: "Let stíhačkou",
    description: "Adrenalinový zážitek pro ty, kdo chtějí výš a rychleji.",
    seoText:
      "Let stíhačkou je zážitek pro milovníky adrenalinu. Na letištích v okolí Hradce Králové, Kunovicích nebo u Prahy vás čeká dynamická akrobacie v legendárním L-39 Albatros, vysoké přetížení i rychlosti, které v běžném letadle nezažijete. Pokud hledáte dárek pro někoho, kdo má rád výzvy, stíhačka bude trefa do černého.",
    keywords: ["stihack", "stíhačk", "fighter", "mig", "l-39", "albatros"],
  },
  {
    slug: "vetrny-tunel",
    title: "Větrný tunel",
    description: "Pocit volného pádu v bezpečí, vhodné i pro začátečníky.",
    seoText:
      "Větrný tunel v Praze (Hurricane Factory Letňany) nebo v Brně vám dá pocit volného pádu bez nutnosti skákat z letadla. Je ideální pro první seznámení s létáním, trénink stability a zábavu s přáteli. Skvělé i pro děti od 5 let a ty, kteří chtějí bezpečně zkusit, jaké je létat ve vzduchu. Profesionální instruktoři vás provedou celým zážitkem.",
    keywords: ["veterny tunel", "větrný tunel", "wind tunnel"],
  },
  {
    slug: "tandemove-seskoky",
    title: "Tandemové seskoky",
    description: "Skok padákem s instruktorem a porce pravého adrenalinu.",
    seoText:
      "Tandemové seskoky na letištích Most, Příbram, Prostějov nebo České Budějovice jsou nejrychlejší cestou k nezapomenutelnému zážitku. Vystoupáte do výšky 3 000–4 000 metrů a po volném pádu rychlostí přes 200 km/h se budete kochat výhledem na českou krajinu pod padákem. Instruktor se postará o vše důležité. Pokud chcete překvapit někoho opravdu silným zážitkem, tandemový seskok je sázka na jistotu.",
    keywords: ["tandem", "seskok", "skok", "padak", "padák"],
  },
  {
    slug: "let-vrtulnikem",
    title: "Let vrtulníkem",
    description: "Pohled shora, který z letadla nezažijete.",
    seoText:
      "Let vrtulníkem nad Prahou, Českým Švýcarskem nebo Krkonošemi nabídne úplně jinou perspektivu než letadlo. Díky možnosti visení a nižším letovým výškám si vychutnáte detaily Pražského hradu, Pravčické brány nebo údolí Labe. Skvělá volba pro romantické lety nad zámky jižní Moravy nebo netradiční dárky k výročí.",
    keywords: ["vrtulnik", "vrtulník", "helikopt", "helikoptera"],
  },
  {
    slug: "let-vzducholodi",
    title: "Let vzducholodí",
    description: "Elegantní zážitek s nejpomalejším výhledem na svět.",
    seoText:
      "Let vzducholodí je pomalý, tichý a neskutečně fotogenický. Vznášejte se nad českou krajinou a vychutnávejte si výhledy, které žádné jiné letadlo nenabídne. Pokud hledáte klidný zážitek s výhledem, který si chcete vychutnat bez spěchu, vzducholoď je ideální. Skvělá volba pro páry i milovníky netradičních letů.",
    keywords: ["vzducholod", "vzducholoď", "airship"],
  },
];

export const groupProductsByCategory = (products: Product[]) => {
  const assigned = new Set<string>();

  const groups = CATEGORY_CONFIG.map((category) => {
    const matched = products.filter((product) => {
      if (assigned.has(product.id)) return false;
      const text = `${product.name} ${product.description} ${product.categories.join(
        " "
      )}`;
      const isMatch = matchKeywords(text, category.keywords);
      if (isMatch) assigned.add(product.id);
      return isMatch;
    });

    return {
      ...category,
      products: matched,
    };
  });

  const remaining = products.filter((product) => !assigned.has(product.id));

  return { groups, remaining };
};

export const getCategoryBySlug = (slug: string) =>
  CATEGORY_CONFIG.find((category) => category.slug === slug) ?? null;
