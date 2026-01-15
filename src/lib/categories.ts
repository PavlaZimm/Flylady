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
      "Letecké simulátory jsou ideální volbou pro všechny, kdo si chtějí vyzkoušet pilotáž bez toho, aby opustili zem. Najdete tu moderní simulátory dopravních letadel i vojenských strojů, realistické kokpity a zkušené instruktory, kteří vás provedou prvními minutami letu. Skvělé jako dárek pro fanoušky letectví nebo netradiční zážitek na víkend.",
    keywords: ["simulator", "simulátor", "simulator letu", "simulátor letu"],
  },
  {
    slug: "vyhlidkove-lety",
    title: "Vyhlídkové lety",
    description: "Krásné výhledy a klidný let nad krajinou.",
    seoText:
      "Vyhlídkové lety patří mezi nejoblíbenější letecké zážitky. Užijete si panoramata měst, řek, hor i historických památek a často si můžete vybrat délku i trasu letu. Jsou skvělým dárkem pro páry i rodiny a díky klidnému tempu jsou vhodné i pro úplné začátečníky.",
    keywords: ["vyhlidkov", "vyhlídkov", "panorama", "scenic"],
  },
  {
    slug: "let-stihackou",
    title: "Let stíhačkou",
    description: "Adrenalinový zážitek pro ty, kdo chtějí výš a rychleji.",
    seoText:
      "Let stíhačkou je zážitek pro milovníky adrenalinu. Čeká vás dynamická akrobacie, vysoké přetížení i rychlosti, které v běžném letadle nezažijete. Pokud hledáte dárek pro někoho, kdo má rád výzvy, stíhačka bude trefa do černého.",
    keywords: ["stihack", "stíhačk", "fighter", "mig", "l-39", "albatros"],
  },
  {
    slug: "vetrny-tunel",
    title: "Větrný tunel",
    description: "Pocit volného pádu v bezpečí, vhodné i pro začátečníky.",
    seoText:
      "Větrný tunel vám dá pocit volného pádu bez nutnosti skákat z letadla. Je ideální pro první seznámení s létáním, trénink stability a zábavu s přáteli. Skvělé i pro děti a ty, kteří chtějí bezpečně zkusit, jaké je létat ve vzduchu.",
    keywords: ["veterny tunel", "větrný tunel", "wind tunnel"],
  },
  {
    slug: "tandemove-seskoky",
    title: "Tandemové seskoky",
    description: "Skok padákem s instruktorem a porce pravého adrenalinu.",
    seoText:
      "Tandemové seskoky jsou nejrychlejší cestou k nezapomenutelnému zážitku. Instruktor se postará o vše důležité a vy si užijete volný pád i klidné dosednutí. Pokud chcete překvapit někoho opravdu silným zážitkem, tandemový seskok je sázka na jistotu.",
    keywords: ["tandem", "seskok", "skok", "padak", "padák"],
  },
  {
    slug: "let-vrtulnikem",
    title: "Let vrtulníkem",
    description: "Pohled shora, který z letadla nezažijete.",
    seoText:
      "Let vrtulníkem nabídne úplně jinou perspektivu než letadlo. Díky možnosti visení a nižším letovým výškám si vychutnáte detaily krajiny a měst. Skvělá volba pro romantické lety i netradiční dárky.",
    keywords: ["vrtulnik", "vrtulník", "helikopt", "helikoptera"],
  },
  {
    slug: "let-vzducholodi",
    title: "Let vzducholodí",
    description: "Elegantní zážitek s nejpomalejším výhledem na svět.",
    seoText:
      "Let vzducholodí je pomalý, tichý a neskutečně fotogenický. Pokud hledáte klidný zážitek s výhledem, který si chcete vychutnat bez spěchu, vzducholoď je ideální. Skvělá volba pro páry i milovníky netradičních letů.",
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
