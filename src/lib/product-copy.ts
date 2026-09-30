// Vlastní redakční popisy hlavních zážitků. Klíč je ID produktu z feedu Zážitky.cz.
// Texty vznikají z ověřených údajů na stránkách nabídek (docs/vyzkum/produkty/<ID>.md), ne z popisu ve feedu.
// Odkazy v textu: [popisný text](/adresa).

export type ProductCopy = {
  /** 2–3 věty vlastními slovy; nahradí popis z feedu u fotky a v meta popisku. */
  lead: string;
  /** Co je v ceně. */
  included: string[];
  /** Pro koho je zážitek a jaké platí limity. */
  forWhom: string[];
  /** Na co si dát pozor před koupí (mínusy, lhůty, nejasnosti). */
  watchOut: string[];
  /** Datum poslední věcné kontroly údajů (RRRR-MM-DD). */
  checked: string;
  sources: { label: string; url: string }[];
};

export const PRODUCT_COPY: Record<string, ProductCopy> = {
  "15": {
    "lead": "Standardní tandemový seskok pro jednoho: skáčete připoutaní k instruktorovi z výšky až 4 km, volný pád trvá necelou minutu a pak následuje let pod padákem. Vybíráte hlavně letiště, protože se liší váhovými limity i příplatky. Oproti seskoku ze 6000 m jsou u něj věkové a zdravotní podmínky mírnější.",
    "included": [
      "Kombinéza a ochranné brýle, které se dají nasadit přes dioptrické brýle i kontaktní čočky.",
      "Seskok připoutaný k instruktorovi: volný pád (ze 4 km podle stránky přibližně 45 až 55 sekund) a let pod otevřeným padákem 5 až 10 minut.",
      "Na celý program na letišti počítejte 3 až 4 hodiny.",
      "Video a fotografie v základu nejsou, stránka je vede jako doplňkové služby."
    ],
    "forWhom": [
      "Věk 10 až 100 let, v Prostějově a Příbrami od 8 let. Mladší 18 let potřebují souhlas zákonného zástupce; obchodní podmínky (čl. 6.2) navíc u dětí do 15 let žádají doprovod osoby starší 18 let, proto to u dítěte ověřte u provozovatele.",
      "Stránka jako vyloučené uvádí epilepsii a závažnou srdeční chorobu; další zdravotní omezení proberte s provozovatelem. Při handicapu napište nejdřív Zážitkům.cz, lokalita se pak volí podle druhu omezení.",
      "Váhu hlídá každé letiště zvlášť a stránka ji v různých částech textu uvádí nejednotně. Konkrétní limit i příplatek pro vybrané letiště si před rezervací potvrďte u provozovatele."
    ],
    "watchOut": [
      "Stránka žádá rezervaci nejpozději 30 dnů předem, obecná nápověda Zážitků.cz uvádí jiné lhůty (nejméně 7 a nejvýš 90 dní předem). Sezóna trvá podle stránky od dubna do října a podle počasí. Kdo koupí poukaz na podzim, skočí kvůli 30denní lhůtě nejspíš až v další sezóně.",
      "Příplatek za palivo se platí na místě v hotovosti, příplatek za váhu se také doplácí na místě; výše se liší podle letiště. V Mostě je palivový příplatek od 28. 3. 2026 povinný a mění se podle výšky seskoku. Konečnou částku si spočítejte předem.",
      "Stránka si sama odporuje: na jednom místě trvá volný pád ze 4 km cca 55 sekund, jinde okolo 45, lokalit je jednou 14, jindy 17 a váhové limity Kolína a Mostu se v textech liší. Jak si údaje ověřit u jednoho letiště, ukazuje [článek o seskoku v Mostě](/blog/tandemovy-seskok-most), další možnosti jsou v přehledu [tandemových seskoků](/tandemove-seskoky).",
      "Poukaz obecně platí 12 měsíců od zaplacení. Zda některá varianta nemá pevně dané, dřívější datum konce platnosti, se nepodařilo ověřit, proto si datum zkontrolujte u vybrané varianty před platbou. Co přesně varianta obsahuje, hlavně záznam, si ověřte v jejím popisu.",
      "Odznak „Vrácení zážitku až do 60 dnů“ není bezplatná výhoda: zákonná lhůta je 14 dní, 30 a 60 dní se podle ceníku připlácí (jen do rezervace termínu). Odznak „Výměna zdarma“ platí podle obchodních podmínek (čl. 7.1) jen jednou; podle nápovědy webu nelze poukaz vyměnit za stejný zážitek."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Tandemový seskok padákem",
        "url": "https://www.zazitky.cz/tandemovy-seskok-padakem"
      },
      {
        "label": "Zážitky.cz, obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      },
      {
        "label": "Zážitky.cz, ceník",
        "url": "https://www.zazitky.cz/cenik"
      }
    ]
  },
  "16": {
    "lead": "Základní sdílená varianta: poletíte v koši pro 5 až 24 pasažérů spolu s dalšími lidmi. Start vybíráte ze 41 lokalit a tu lze při rezervaci zdarma změnit. Kupujete jednotlivá místa, soukromí tu není. To nabízejí sesterské nabídky.",
    "included": [
      "Přibližně hodinový let horkovzdušným balónem, celý zážitek zabere asi tři hodiny.",
      "Křest prvoletců.",
      "Doprava zpět na místo odletu.",
      "Pomoc s balením balónu po přistání; přistává se obvykle na poli nebo na louce."
    ],
    "forWhom": [
      "Jednotlivci, dvojice i skupinky: v jedné objednávce 1 až 4 osoby.",
      "Od 7 let a s výškou nad 140 cm, děti do 15 let letí v doprovodu dospělého.",
      "Hmotnost do 119 kg podle textu stránky (pole pro váhu ve formuláři ale dovoluje až 200 kg, potvrďte si to při rezervaci). Těžší pasažér se má ozvat Zážitkům.cz, stránka nabízí za příplatek snížit obsazení koše o jednu osobu.",
      "Kdo zvládne přelézt hranu koše (asi 140 cm vysokou) při nástupu i výstupu a vydrží celý let stát. Těhotné ženy nelétají."
    ],
    "watchOut": [
      "Věk se liší podle zdroje: stránka uvádí minimum 7 let a doprovod dospělého do 15 let, starší blog Zážitků.cz z roku 2020 doporučuje aspoň 8 let a připouští let dětí bez doprovodu se souhlasem rodičů. Řiďte se stránkou a věk dítěte si nechte potvrdit při rezervaci.",
      "Velikost koše se také rozchází: stránka mluví o 5 až 24 pasažérech, starší FAQ uvádí koše většinou pro 5, 7, 9 nebo 12 lidí. Kdo nechce velkou společnost, ať se zeptá, jaký balón dostane.",
      "Termín se rezervuje nejpozději 14 dní předem a vypisuje se jen 1 až 2 měsíce dopředu. Sezóna trvá od dubna do října. Kdo poukaz koupí na konci sezóny, musí počítat s podzimním termínem nebo s jarem.",
      "Sekt, pojištění pasažéra ani fotky od provozovatele stránka neuvádí. Křestní list v seznamu obsahu chybí, starší FAQ i textová část stránky ho slibují každému prvoletci.",
      "Pilot může let zrušit i na místě, stránka to označuje za ojedinělé riziko. Poukaz po zrušení kvůli počasí podle staršího FAQ zůstává platný a obchodní podmínky (čl. 5.7) slibují náhradní termín. U poukazu bez domluveného termínu ale platnost kvůli vyšší moci neprodlužují (čl. 5.6). Jde o různé situace a texty se nevysvětlují, proto si termín nenechávejte na poslední týdny platnosti."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "stránka nabídky Let balónem",
        "url": "https://www.zazitky.cz/let-balonem"
      },
      {
        "label": "obchodní podmínky Zážitky.cz",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      },
      {
        "label": "Zážitky.cz blog: nejčastější dotazy (2020)",
        "url": "https://www.zazitky.cz/blog/faq-let-balonem"
      }
    ]
  },
  "22": {
    "lead": "Koš jen pro dva a pilota: soukromý let přesně pro dvě osoby, na rozdíl od privátní nabídky pro 2 až 5 lidí. Sezóna začíná už v březnu, dřív než u ostatních nabídek letu balónem, které tu porovnáváme (ty začínají v dubnu, případně v květnu), rezervovat se ale musí nejpozději 30 dní předem.",
    "included": [
      "Přibližně hodinový let podle aktuálního počasí, v koši jen vy dva a pilot.",
      "Sklenice sektu po přistání.",
      "Odvoz zpět na místo odletu.",
      "Křest prvoletců, popsaný v programu."
    ],
    "forWhom": [
      "Přesně dvě osoby. Pro tři až pět lidí je určená samostatná nabídka soukromého letu pro skupinu.",
      "Věk od 7 let, výška nad 140 cm. Děti do 15 let letí v doprovodu dospělého.",
      "Celková hmotnost obou pasažérů nejvýše 200 kg.",
      "Kdo chce vlastní místo startu, potřebuje variantu „Kdekoliv v ČR“: travnatý pozemek nejméně 50 × 50 m bez překážek, příjezdovou cestu, souhlas majitele a odstup 15 až 20 km od státní hranice."
    ],
    "watchOut": [
      "Soukromý let neznamená libovolný start. Kalendářní termíny platí pro start do zhruba 15 km od zvolené lokality, jiné nebo vzdálenější místo se řeší e-mailem se Zážitky.cz. Rezervační lhůta je 30 dní, u sdíleného letu jen 14.",
      "Lokalit je podle hlavičky a textu 34, výběr jich nabízí 41. Sedm lokalit (mimo jiné Kutná Hora, Znojmo, Třeboň) je jen ve výběru a stránka nevysvětluje proč. Čtyři lokality (Hukvaldy, Chrudim, Jihlava, Karlštejn) mají jinou cenu než ostatní.",
      "Hmotnostní limit se rozchází: text uvádí 200 kg za oba pasažéry, formulář má pole pro váhu účastníka s maximem 119 kg na osobu. Jde-li o těžší pasažéry, potvrďte při rezervaci, co platí.",
      "Křest je v programu, ale ne v seznamu „Zážitek obsahuje“. O pojištění pasažéra ani o fotkách od provozovatele se stránka nezmiňuje.",
      "Při rezervaci mimo kalendář je třeba připsat, zda chcete let ráno, nebo odpoledne. Pilot se ozve večer před ranním letem do 20:00, před odpoledním v den letu do 14:00. Let se může zrušit i na místě, stránka to uvádí jako možné riziko."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "stránka nabídky Soukromý let balónem pro dva",
        "url": "https://www.zazitky.cz/soukromy-let-balonem-pro-dva"
      },
      {
        "label": "obchodní podmínky Zážitky.cz",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "201": {
    "lead": "Základní tunelový poukaz: po nácviku polohy na zemi létáte v tunelu s instruktorem, v základní variantě dvakrát 1,5 minuty, dohromady tři minuty na osobu. Vhodný pro jednotlivce i skupinu do pěti lidí, kteří chtějí vyzkoušet létání bez skoku z letadla. Z tunelových nabídek má podle údajů stránky nejvíc variant.",
    "included": [
      "Půjčená kombinéza, helma a ochranné brýle.",
      "Instruktáž na zemi (nácvik letecké polohy a signálů), let s instruktorem a rozbor po skončení.",
      "Dva lety po 1,5 minuty s odpočinkem mezi nimi. V tunelu létá vždy jen jedna osoba.",
      "Diváci smějí stát u prosklené komory a zvenku fotit i natáčet."
    ],
    "forWhom": [
      "Děti od 5 let. Stránka žádá u mladších 18 let doprovod plnoleté osoby nebo zákonného zástupce, který na místě podepíše převzetí odpovědnosti; obchodní podmínky (čl. 6.2) to formulují jinak (do 15 let doprovod osoby starší 18 let, od 15 do 18 let souhlas zákonného zástupce), proto pravidla pro dítě potvrďte předem.",
      "Doporučený limit váhy je 130 kg.",
      "Podle stránky nemohou létat těhotné, lidé pod vlivem alkoholu nebo drog, lidé s poruchou krevního oběhu a srdce a lidé s problémy se zády. Každý podepisuje prohlášení o zdravotním stavu.",
      "Stránka uvádí, že mohou létat zrakově, sluchově a tělesně postižení (těžce postižení jen s pohyblivými pažemi); po vykloubení ramene se létání nedoporučuje. Požadavky nahlaste předem."
    ],
    "watchOut": [
      "Cena „od“ platí pro nejlevnější variantu a stránka neříká, která to je. Parametry stránky ukazují varianty pro 1 až 10 osob a 2 až 30 minut, zatímco text mluví o 1 až 5 osobách. Ověřte, kolik osob a minut poukaz skutečně zahrnuje. Co přesně varianta zahrnuje, ověřte v jejím popisu.",
      "Při pěti osobách po třech minutách je to 15 minut v tunelu, ale každý letí sám a ostatní čekají u prosklené komory. Jak dlouho program pro celou skupinu trvá, stránka neříká.",
      "Rezervace: parametry říkají nejpozději 7 dní předem, text hned pod nimi, že jde i na zítra. Rozhodne volný termín v kalendáři.",
      "V červnu až srpnu je v pondělí zavřeno. Varianty označené „po–čt“ jdou jen v pondělí až čtvrtek, víkend tedy vyžaduje variantu „po–ne“.",
      "Rychlost proudu uvádí stránka různě (až 270 km/h, někdy až 220 km/h, průměrně 50 m/s). Adresa je jen Hurricane Factory, Praha 9 (Letňany), ulici si ověřte. Přehled všech nabídek najdete na stránce [větrných tunelů](/vetrny-tunel)."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Větrný tunel",
        "url": "https://www.zazitky.cz/vetrny-tunel"
      },
      {
        "label": "Zážitky.cz, obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "221": {
    "lead": "Let s pilotem v cvičném proudovém letounu L-29 Delfín z letiště Brno-Tuřany, starším a pomalejším než L-39. Příprava na zemi trvá zhruba hodinu místo půl hodiny, celý program asi dvě hodiny. Limity pro výšku i váhu jsou mírnější.",
    "included": [
      "Zapůjčení kombinézy stíhacích pilotů a kompletní letové výstroje.",
      "Zhruba hodinová příprava na letišti: kokpit, přístroje, průběh letu a nácvik nouzového opuštění letadla.",
      "Let s pilotem v délce 15, 20, 25 nebo 30 minut podle varianty.",
      "Poletový rozbor."
    ],
    "forWhom": [
      "Od 18 let, jeden účastník na let. Hlavička slibuje „možnost i pilotovat“, text ale upřesňuje, že jen krátce a pokud půjde vše hladce.",
      "Stránka udává váhu do 120 kg a doporučenou výšku do 200 cm, při překročení radí napsat na info@zazitky.cz.",
      "Zdravotní omezení jsou stejná jako u L-39: dobrá kondice a pohyblivost, po bypassu srdce či jiného orgánu jiný zážitek, zrakové, sluchové a těžké tělesné postižení nevhodné, u lehčího postižení rozhodne lékař."
    ],
    "watchOut": [
      "Video se platí zvlášť a záznam dorazí do 14 dnů odkazem na e-mail. Fotit a natáčet můžete na letišti.",
      "Akrobacii ani sílu přetížení popis nezmiňuje, zeptejte se provozovatele.",
      "Doprovod je popsán dvojím způsobem: text stránky připouští až 4 diváky, pokyny k rezervaci žádají vzít jen jednoho. Potvrďte, kolik lidí smíte přivést.",
      "Na vrátnici letiště se máte dostavit nejvýše 5 minut před časem rezervace. Když se nedostavíte včas, podle obchodních podmínek se zážitek považuje za poskytnutý a cena se nevrací. Psi na letiště nesmějí.",
      "Provozní podmínky jsou stejné jako u L-39: březen až listopad, pondělí až sobota, rezervace ideálně 14 dní předem, obecné FAQ Zážitků uvádí nejméně 7. Počasí si před cestou ověřte telefonicky."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Let stíhačkou L-29 Delfín",
        "url": "https://www.zazitky.cz/let-stihackou-l-29"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "288": {
    "lead": "Poukaz pevně pro dvě osoby, které do tunelu letí po sobě, každá sama s instruktorem. Stránka nabízí varianty 3, 6 a 9 minut, ale nepíše jasně, jestli jde o minuty na osobu, nebo dohromady. Vyplatí se to potvrdit před platbou.",
    "included": [
      "Kombinéza, helma a brýle k zapůjčení, nácvik na zemi, vstup do tunelu s instruktorem a rozbor letu.",
      "Základní varianta má tři minuty (dva lety po 1,5 minuty s odpočinkem), delší jsou na 6 nebo 9 minut.",
      "Účastníci létají po sobě, v tunelu je vždy jen jeden."
    ],
    "forWhom": [
      "Dvě osoby, počet je pevný a cena na něm nezávisí.",
      "Děti od 5 let. Stránka žádá u mladších 18 let doprovod plnoleté osoby nebo zákonného zástupce; obchodní podmínky (čl. 6.2) požadují doprovod osoby starší 18 let u dětí do 15 let a souhlas zákonného zástupce do 18 let, proto pravidla pro dítě potvrďte předem.",
      "Doporučený limit váhy je 130 kg. Létat nesmí těhotné, lidé pod vlivem alkoholu či drog ani ti, kdo mají poruchu oběhu a srdce nebo problémy se zády.",
      "Váháte mezi tunelem a tandemem? Pomůže [průvodce leteckými zážitky](/blog/jak-vybrat-letecky-zazitek)."
    ],
    "watchOut": [
      "Minuty: text mluví o třech minutách a zároveň o zážitku pro dva. U základního tunelu jsou to tři minuty na osobu, tady to stránka neříká. Bez potvrzení nepočítejte s tím, že oba dostanou po třech minutách.",
      "Lhůta: parametry stránky chtějí rezervaci 14 dní předem, text zároveň slibuje i zítřek. U základního a dětského tunelu stačí 7 dní, tady počítejte s delší.",
      "Ceny a délky variant (3, 6, 9 minut) ukáže až výběr varianty; stránka zmiňuje i varianty jen pro dny po–čt, ale zda je má právě tato nabídka, nešlo ověřit. Zkontrolujte také, co která varianta zahrnuje.",
      "Stejně jako u základního tunelu je v červnu až srpnu v pondělí zavřeno a případné varianty „po–čt“ nejdou o víkendu."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Větrný tunel pro dva",
        "url": "https://www.zazitky.cz/vetrny-tunel-pro-dva"
      },
      {
        "label": "Zážitky.cz, obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "358": {
    "lead": "Soukromý koš pro menší společnost: stránka uvádí 2 až 5 osob, takže se hodí pro přátele nebo rodinu, které nechtějí sdílet let s cizími. Od soukromého letu pro dva se liší počtem osob, od rodinné nabídky nepevným složením. Skutečný nejvyšší počet pasažérů ale zůstává nejasný.",
    "included": [
      "Přibližně hodinový let podle aktuálního počasí v privátním koši, celý zážitek trvá asi tři hodiny včetně nafukování a balení balónu.",
      "Sklenice sektu po přistání.",
      "Odvoz zpět na místo odletu.",
      "Tradiční křest prvoletců, popsaný v programu.",
      "Možnost zapojit se do příprav balónu."
    ],
    "forWhom": [
      "Menší skupina, stránka uvádí 2 až 5 osob.",
      "Děti od 7 let a nad 140 cm výšky, do 15 let s doprovodem dospělého.",
      "Hmotnost: celkový limit stránka neuvádí (u soukromého letu pro dva je 200 kg, u rodinného 340 kg), formulář má maximum 119 kg na osobu. Zjistěte si před koupí, co platí pro vaši skupinu.",
      "Kdo chce vlastní místo startu, musí koupit variantu „Kdekoliv v ČR“: pozemek nejméně 50 × 50 m, souhlas majitele, odstup 15 až 20 km od hranic."
    ],
    "watchOut": [
      "Nejasný počet pasažérů: stránka říká 2 až 5, ale volba počtu osob v datech stránky nabízí čísla až do 15. Kolik lidí vezme jeden koš, nikde nestojí.",
      "Stránka nerozlišuje, zda cena „od“ platí pro dva, nebo pro pět lidí. Než si cenu rozdělíte ve skupině, zeptejte se Zážitků.cz.",
      "Termín se rezervuje nejpozději 30 dní předem. Sezóna je duben až říjen, tedy o měsíc kratší než u soukromého letu pro dva.",
      "Lokalit je podle textu 34, výběr jich nabízí 41 a „Kdekoliv v ČR“. Start platí do zhruba 15 km od zvolené lokality.",
      "Chybí údaje o pojištění pasažéra, křestním listu a fotkách od provozovatele."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "stránka nabídky Privátní let balónem",
        "url": "https://www.zazitky.cz/privatni-let-balonem"
      },
      {
        "label": "obchodní podmínky Zážitky.cz",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "366": {
    "lead": "Vyhlídkový let s pilotem z brněnského letiště Tuřany. Na výběr je vrtulník Robinson R22, R44 nebo Bell 206 a délka letu od 15 do 60 minut: kratší lety zůstávají nad Brnem, delší míří k Pálavě a Lednicko-valtickému areálu. Další nabídky najdete mezi [lety vrtulníkem](/let-vrtulnikem).",
    "included": [
      "Předletová instruktáž asi 10 minut, při které pilot představí vrtulník a jeho hlavní části.",
      "Let vybraným vrtulníkem v délce podle varianty, zhruba 300 m nad zemí.",
      "Letištní poplatek a pohonné hmoty.",
      "Trasa podle délky: 20 minut nad Brnem, 30 minut navíc s Masarykovým okruhem, hradem Veveří a přehradou, od 45 minut s Pálavou."
    ],
    "forWhom": [
      "Pro ty, kdo chtějí vidět Brno a okolí shora a nechtějí řídit. Stránka popisuje let s pilotem a o pilotování účastníkem nemluví.",
      "Lze letět sám (R22, 1 osoba) nebo ve skupině (R44 pro 3, Bell 206 pro 4 osoby). Varianty u lokality „Brno“ jsou označené jako privátní let.",
      "Minimální věk je podle stránky 10 let, mladší 18 let jen se souhlasem rodičů. Obecné podmínky Zážitků ale u dětí do 15 let žádají doprovod dospělého, proto u dítěte ověřte podmínky předem.",
      "Váhu stránka omezuje na 110 kg na osobu a u tříčlenné posádky na 240 kg dohromady; varianta Bell 206 je přitom pro 4 osoby, proto váhu proberte s provozovatelem předem. Zdravotní ani výškové limity stránka neuvádí.",
      "Za letu lze fotit i natáčet. Diváci uvidí jen start, pak čekají na návrat."
    ],
    "watchOut": [
      "Lhůta rezervace si odporuje: stránka chce termín nejpozději 14 dní předem, obecné FAQ Zážitků uvádí minimum 7 dní a text zároveň mluví o víkendech ve vypsaných termínech. Potvrďte při rezervaci.",
      "Přesný čas odletu potvrzují piloti zhruba 3 dny předem podle předpovědi. Náhradní termín domluvený při špatném počasí je závazný. Kompenzaci za zrušení stránka nepopisuje, platí obecné podmínky Zážitků (čl. 5.7): nabídka náhradního termínu, případně možnost odstoupit, pokud se podmínky změní podstatně.",
      "V konfigurátoru jsou dvě lokality, „Brno“ a „Brno-Tuřany“. Liší se výběrem termínu i typem vrtulníku a stránka rozdíl nevysvětluje.",
      "U variant pro 3 a 4 osoby stránka výslovně neuvádí, zda částka platí za celý vrtulník, nebo za osobu. Před koupí si to ověřte.",
      "Provozovatele stránka nejmenuje a chybí i přesné místo setkání a adresa."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Vyhlídkový let ve vrtulníku nad Brnem",
        "url": "https://www.zazitky.cz/vyhlidkovy-let-ve-vrtulniku-nad-brnem"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "379": {
    "lead": "Let balónem pro čtyřčlennou rodinu, ve složení dvě dospělé osoby a dvě děti ve věku 7 až 15 let. Nabídka má pevně dané složení a limit 340 kg pro všechny čtyři pasažéry dohromady. Stránka neříká, zda je koš jen pro rodinu, a věková hranice se v ní rozchází.",
    "included": [
      "Letenka pro čtyři osoby: dva dospělí a dvě děti od 7 do 15 let.",
      "Přibližně hodinový let podle počasí, celý zážitek zabere asi tři hodiny.",
      "Sklenice sektu po přistání, jen pro dospělé.",
      "Odvoz zpět na místo odletu a tradiční křest prvoletců.",
      "Rodina se může zapojit do příprav balónu."
    ],
    "forWhom": [
      "Rodiny se dvěma dospělými a dvěma dětmi. Jiné složení (třeba jeden dospělý a tři děti) stránka neuvádí, ověřte ho před koupí.",
      "Děti: popis nabídky uvádí věk 7 až 15 let, sekce s omezeními minimum 8 let, v obou případech s výškou nad 140 cm.",
      "Celková hmotnost všech čtyř pasažérů nejvýše 340 kg (formulář má navíc pole pro váhu účastníka s maximem 119 kg na osobu).",
      "Kdo zvládne nástup přes hranu koše i výstup a celý let vydrží vestoje."
    ],
    "watchOut": [
      "Věková hranice se rozchází: omezení uvádí minimálně 8 let, popis obsahu děti od 7. U většiny sesterských nabídek je to 7 let, starší blog Zážitků.cz doporučuje 8. Výška nad 140 cm platí i pro děti, mladší dítě proto změřte doma před koupí.",
      "Stránka výslovně neříká, zda poletí jen vaše rodina, nebo se koš sdílí s dalšími. Hlavička sice mluví o letu „s celou rodinou“, potvrzení si ale vyžádejte.",
      "Výška letu se v podkladech liší: stránka píše o 500 až 700 metrech nad zemí, starší FAQ uvádí nejčastěji 300 metrů a maximum kolem kilometru. Berte údaj jako orientační.",
      "Termín se rezervuje nejpozději 30 dní předem, sezóna trvá od dubna do října. Při zrušení kvůli počasí platí totéž co u ostatních nabídek: starší FAQ slibuje zachování poukazu a obchodní podmínky (čl. 5.7) náhradní termín, u poukazu bez domluveného termínu ale platnost kvůli vyšší moci neprodlužují (čl. 5.6). Jde o různé situace a texty se nevysvětlují.",
      "Sekt dostanou jen dospělí, o nápoji pro děti stránka mlčí."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "stránka nabídky Rodinný let balónem",
        "url": "https://www.zazitky.cz/rodinny-let-balonem"
      },
      {
        "label": "obchodní podmínky Zážitky.cz",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      },
      {
        "label": "Zážitky.cz blog: nejčastější dotazy (2020)",
        "url": "https://www.zazitky.cz/blog/faq-let-balonem"
      }
    ]
  },
  "394": {
    "lead": "Simulátor kokpitu Boeingu 737 na letišti Kladno-Velká Dobrá, ne skutečný let. Nikam neletíte a celou dobu vás vede instruktor-pilot, program trvá 30, 60 nebo 90 minut. Další nabídky najdete mezi [leteckými simulátory](/letecke-simulatory).",
    "included": [
      "Seznámení se simulátorem a plánování letu včetně cílové destinace.",
      "Nastartování motorů, hlášení startu věži a vlastní let pod dohledem instruktora-pilota.",
      "Výběr z 25 000 letišť, volba počasí a krizové situace."
    ],
    "forWhom": [
      "Pro ty, kdo si chtějí vyzkoušet obsluhu dopravního letadla, aniž by se odlepili od země. Pilotuje jeden účastník, do simulátoru se vejdou až 3 diváci.",
      "Stránka uvádí, že zážitek je určen pro osoby starší 14 let a účastník musí měřit víc než 130 cm. Účastník mladší 15 let podle obchodních podmínek (čl. 6.2) potřebuje doprovod osoby starší 18 let; u hraničního věku se raději zeptejte provozovatele.",
      "Váhový limit ani zdravotní omezení stránka neuvádí, případné dotazy vyřešte s provozovatelem před koupí.",
      "Simulátor je v prvním patře a bezbariérový přístup není zajištěn.",
      "Fotit i natáčet je dovoleno."
    ],
    "watchOut": [
      "Zážitky.cz neuvádějí, zda se simulátor při letu pohybuje ani jaké má osvědčení. Pokud je vám to důležité, zeptejte se před koupí provozovatele.",
      "Rezervaci stránka žádá minimálně měsíc předem, v obecném FAQ Zážitků je 7 dní. Provoz je každý den kromě středy od 9:00 do 17:30.",
      "Stránka neříká, zda se instruktáž počítá do 30, 60 nebo 90 minut.",
      "Simulátor je v prostoru letiště, kde platí přísná opatření. Pilot si vás vyzvedne na parkovišti, sám se po areálu pohybovat nesmíte a máte dorazit alespoň 10 minut předem."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Simulátor letadla Boeing 737",
        "url": "https://www.zazitky.cz/simulator-boeingu-737"
      }
    ]
  },
  "403": {
    "lead": "Balíček 15 minut v tunelu pro až pět lidí za jednu cenu. Při plném obsazení vychází tři minuty na osobu, u menší skupiny se podle stránky minuty dělí mezi přihlášené, přesná pravidla ale stránka neuvádí (viz níže). Hodí se, když chce létat víc lidí než dva.",
    "included": [
      "Vstup do tunelu až pro 5 osob, dohromady 15 minut.",
      "Při pěti lidech tři minuty na osobu, každý vstup jako dva lety po 1,5 minuty s odpočinkem.",
      "Půjčená kombinéza, helma a brýle, instruktáž na zemi, instruktor v tunelu a rozbor letu.",
      "Kdo nelétá, může zvenku fotit a natáčet."
    ],
    "forWhom": [
      "Skupina 1 až 5 osob, děti i dospělí dohromady v jednom balíčku.",
      "Děti od 5 let. Tato stránka žádá u mladších 18 let souhlas jednoho z rodičů nebo zákonných zástupců; obchodní podmínky (čl. 6.2) navíc u dětí do 15 let požadují doprovod osoby starší 18 let, proto pravidla pro dítě potvrďte předem.",
      "Limit váhy 130 kg (doporučený). Létání vylučují těhotenství, alkohol, drogy, porucha krevního oběhu a srdce a problémy se zády.",
      "Stránka uvádí, že mohou létat zrakově, sluchově a tělesně postižení (těžce postižení jen s pohyblivými pažemi); po vykloubení ramene se létání nedoporučuje. Požadavky nahlaste předem."
    ],
    "watchOut": [
      "Parametry stránky uvádějí pevných 5 osob a 15 minut. Není jasné, zda se cena změní, když poletí jen tři lidé; stránka říká jen, že se 15 minut dělí podle počtu přihlášených. Nekupujte pro menší skupinu, dokud to nepotvrdí provozovatel.",
      "Létá vždy jen jeden, takže se u pěti osob 15 minut střídáte a čekání je součástí programu.",
      "Rezervaci parametry stránky vyžadují 14 dní předem, text připouští i zítřek, u základního tunelu je lhůta 7 dní.",
      "V červnu až srpnu je v pondělí zavřeno. Údaj „Sezóna“ o tom mlčí, jiné části stránky to uvádějí.",
      "Video a let do horní části tubusu jsou příplatkové, ceny stránka neuvádí."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Větrný tunel pro rodinu",
        "url": "https://www.zazitky.cz/vetrny-tunel-pro-rodinu"
      },
      {
        "label": "Zážitky.cz, obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "626": {
    "lead": "Let s pilotem v cvičném proudovém letounu L-39 Albatros z brněnského letiště Tuřany. Je novější a rychlejší než L-29, který najdete mezi [lety stíhačkou](/let-stihackou). Celý program trvá zhruba dvě hodiny, z toho půl hodiny zabere příprava na letišti.",
    "included": [
      "Zapůjčení kombinézy stíhacích pilotů.",
      "Seznámení s letounem a příprava na zemi, asi 30 minut: ukázka kokpitu a přístrojů, výklad průběhu letu a nácvik nouzového opuštění letadla (stránka výslovně uvádí katapultaci).",
      "Let s pilotem, který sedí v kokpitu před vámi. Délka podle varianty, konfigurátor nabízí 15, 20, 25 nebo 30 minut.",
      "Poletový rozbor."
    ],
    "forWhom": [
      "Pro dospělé od 18 let, na jeden let vždy jeden účastník. Řídí pilot, chvíli pilotovat si podle stránky můžete jen „pokud půjde vše hladce“.",
      "Limity podle stránky: výška do 195 cm a váha do 105 kg. O hraniční výšce nebo váze rozhodněte s provozovatelem ještě před koupí.",
      "Stránka nabídky žádá dobrou kondici a pohyblivost. Při bypassu srdce či jiného orgánu doporučuje jiný zážitek a lehčí postižení radí konzultovat s lékařem. Zrakové, sluchové a těžké tělesné postižení označuje za nevhodné.",
      "Doprovod až 4 osoby sleduje let z vyhrazeného prostoru na letišti."
    ],
    "watchOut": [
      "Video je za příplatek (dvě kamery, záznam přijde do 14 dnů odkazem na e-mail). Na letišti se fotit smí, o focení za letu stránka mlčí.",
      "Oficiální text neuvádí, zda se poletí akrobacie, ani jak silné bude přetížení. To si ověřte u provozovatele. Nejasné je i to, zda 15 až 30 minut znamená čas ve vzduchu, nebo se do něj počítá i příprava.",
      "Létá se od března do listopadu, od pondělí do soboty. Stránka uvádí ideálně 14 dní předem a zároveň termín nejpozději 14 dnů před konáním, obecné FAQ Zážitků říká nejméně 7. Před cestou na letiště zavolejte kvůli počasí (číslo je v pokynech k rezervaci). Postup při zrušení kvůli počasí stránka nepopisuje.",
      "Odznak „vrácení zážitku až do 60 dnů“ si před koupí ověřte. Podle obchodních podmínek (čl. 8) je zdarma jen zákonné odstoupení do 14 dnů, vrácení nad tuto lhůtu je placená doplňková služba (čl. 8.9); zda odznak popisuje právě ji, podmínky výslovně neříkají. „Výměna zdarma“ platí podle podmínek (čl. 7.1) jen jednou za dobu platnosti poukazu.",
      "Označení „stíhačka“ je obchodní, L-39 je cvičný proudový letoun."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Let stíhačkou L-39 Albatros",
        "url": "https://www.zazitky.cz/let-stihackou-l-39-albatros"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "671": {
    "lead": "Tandemový seskok z 6000 m, tedy o dva kilometry výš než běžný tandem. Volný pád trvá přes 90 sekund, podle stránky rychlostí až 200 km/h, a pod padákem se pak letí až deset minut. Berou se jen dospělí v omezeném věku a s BMI v normě, proto nejdřív zkontrolujte vlastní parametry.",
    "included": [
      "Seskok ze 6000 m s instruktorem a volný pád přes 90 sekund.",
      "Let pod otevřeným padákem: stránka uvádí 8 až 10 minut, na jiném místě 5 až 10.",
      "Kombinéza a ochranné brýle (i pro nositele dioptrických brýlí a čoček).",
      "Záznam seskoku (video, fotky) se objednává zvlášť."
    ],
    "forWhom": [
      "Věk 18 až 55 let, v Prostějově a Příbrami jen 18 až 50 let.",
      "BMI musí být „v normě“, tedy ani podváha, ani nadváha. Počítá se z výšky a váhy.",
      "Váha: podle stránky v Prostějově a Příbrami nejvýš 90 kg, jinde do 110 kg s příplatky na místě při váze nad 89 kg. Tabulka příplatků u Prostějova a Příbrami ale sahá i nad 110 kg, proto limit před rezervací potvrďte u provozovatele.",
      "Konkrétní nemoci, které seskok vylučují, stránka nevypisuje, jen že je 6000 m pro tělo náročnější než 3 až 4 km. Zdravotní stav proto probírejte s provozovatelem předem. Přineste si vlastní sportovní obuv.",
      "Když vám nevyhovuje věk nebo BMI, zbývá [tandemový seskok ze 3 až 4 km](/tandemove-seskoky) s mírnějšími podmínkami. Poukaz je na jednu osobu."
    ],
    "watchOut": [
      "Sezóna je podle textu stránky červen až září (odznak v hlavičce říká březen až říjen) a rezervovat je nutné nejpozději 60 dnů předem. Kdo kupuje na podzim, musí kvůli 60denní lhůtě a krátké sezóně s největší pravděpodobností počítat s příštím létem.",
      "Kde se ze 6000 m skáče, stránka uvádí třikrát jinak: čtyři, šest a sedm lokalit. České Budějovice byly přesunuty do Kramolína. Před koupí zjistěte, které letiště 6000 m skutečně nabízí a jak daleko je od vás.",
      "Palivový příplatek se platí v hotovosti na místě, příplatky za váhu se doplácejí také na místě. U části lokalit rezervací souhlasíte i se samostatnými podmínkami provozovatele.",
      "U provozovatele JUMP-TANDEM oznamuje letiště nepřízeň počasí nejpozději den před termínem; podle obchodních podmínek (čl. 5.7) může termín změnit nebo zrušit Zážitky.cz i provozovatel. Při 60denním předstihu a krátké sezóně si ověřte, co se stane, když náhradní termín vyjde na konec platnosti poukazu.",
      "Před koupí si u vybrané varianty ověřte, co zahrnuje, včetně záznamu, a délku letu pod padákem, kterou stránka uvádí dvakrát různě."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Tandemový seskok ze 6000 m",
        "url": "https://www.zazitky.cz/tandemovy-seskok-ze-6000-m"
      },
      {
        "label": "Zážitky.cz, obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "701": {
    "lead": "Sdílený let největším balónem flotily: stránka uvádí koš pro 24 pasažérů, balón vysoký 37 metrů a start jen ze čtyř lokalit v sezóně od května do října. Křestní list a přípitek jsou přímo v obsahu, u základního Letu balónem je seznam obsahu neuvádí.",
    "included": [
      "Přibližně hodinový let horkovzdušným balónem (stránka píše „až hodinový“), celý zážitek může zabrat i tři hodiny.",
      "Křest prvoletců a přípitek „bublinkami“.",
      "Křestní list na památku.",
      "Doprava zpět na místo odletu.",
      "Po přistání povídání o historii balónového létání a o živlech; kdo chce, pomůže se sbalením balónu."
    ],
    "forWhom": [
      "Kdo chce vidět největší balón flotily zblízka a nemá problém se sdíleným košem až pro 24 lidí.",
      "Minimální věk 7 let, výška nad 140 cm, do 15 let doprovod dospělého.",
      "Nejvyšší hmotnost pasažéra je 119 kg, u těžšího se domluvte se Zážitky.cz.",
      "Kdo rád fotí a natáčí: stránka to výrazně doporučuje a radí vzít telefon, zrcadlovku nebo dalekohled."
    ],
    "watchOut": [
      "Údaj o koši pro 24 pasažérů pochází z textu prodejce, nezávislé potvrzení k němu nemáme. Stránka také neuvádí, kdo balón provozuje.",
      "Vybírá se jen ze čtyř lokalit: Český ráj (Mladějov), Kutná Hora, Roudnice nad Labem a Karlštejn. Stránka uvádí sezónu květen až říjen, tedy o měsíc kratší než u základního Letu balónem (duben až říjen).",
      "Ze země může počasí vypadat v pořádku, a přesto se neletí. Rozhoduje bezpečnost a let se přesouvá na jiný den. Rezervaci proto neodkládejte na konec sezóny.",
      "Pilot upřesní místo a čas setkání asi 12 hodin před letem, jinde stránka uvádí telefonát večer před ranním letem do 20:00 nebo v den odpoledního letu do 14:00. Držte si telefon po ruce.",
      "Počet osob v objednávce je podle hlavičky 1 až 4, data stránky nabízejí až 10. Stránka radí rezervovat 1 až 3 měsíce předem, nejzazší lhůta je ale 14 dní a termíny se průběžně aktualizují."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "stránka nabídky Let největším balónem",
        "url": "https://www.zazitky.cz/let-nejvetsim-balonem"
      },
      {
        "label": "obchodní podmínky Zážitky.cz",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "713": {
    "lead": "Simulátor kokpitu Boeingu 737 MAX v Brně, který stránka popisuje jako věrnou kopii kokpitu s půlkruhovým plátnem o výhledu 220°. Oproti simulátoru 737 v Kladně má nižší věkovou hranici (10 let), dává pilotní průkaz s vaším jménem a nabízí jen 30 a 60 minut letu. Přehled najdete mezi [leteckými simulátory](/letecke-simulatory).",
    "included": [
      "Instruktáž zhruba 10 minut a poté 30 nebo 60 minut letu podle varianty.",
      "Pilotování za kniplem, volba místa na světě, počasí a denní doba na přání, simulace poruch letadla a možnost vyzkoušet nouzové přistání.",
      "Instruktor je po ruce, kdybyste potřebovali poradit.",
      "Pilotní průkaz s vaším jménem na památku."
    ],
    "forWhom": [
      "Pro rodiny s dětmi i dospělé, kteří chtějí zkusit pilotovat sami. Děti od 10 let a od výšky 120 cm smí pilotovat jen v doprovodu rodičů.",
      "Kokpit je v reálné velikosti. Menší děti, které nedosáhnou na ovladače, mohou sedět na klíně někomu z doprovodu.",
      "Váha je omezena na 120 kg. Zdravotní omezení stránka nezmiňuje, zeptejte se předem.",
      "S sebou můžete vzít až 3 osoby jako doprovod. Fotit a natáčet může doprovod, účastník až po přistání."
    ],
    "watchOut": [
      "Zážitky.cz neuvádějí, zda se simulátor při letu pohybuje ani jaké má osvědčení. Pokud je vám to důležité, zeptejte se před koupí provozovatele.",
      "Čas na Zážitky.cz je podle stránky jen samotný let, instruktáž na začátku (asi 10 minut) se počítá navíc. Počítejte s delší návštěvou.",
      "Rezervace ideálně 14 dní předem, obecné FAQ Zážitků počítá se 7 dny. Provozní dobu stránka neuvádí. Vchod je zezadu z vnitrobloku a máte dorazit nejvýše 5 minut před termínem.",
      "Produktová stránka Zážitků neuvádí ulici ani číslo domu; přesné místo si před cestou ověřte v pokynech po rezervaci."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Simulátor letadla Boeing 737 MAX",
        "url": "https://www.zazitky.cz/simulator-boeing-737-max"
      }
    ]
  },
  "746": {
    "lead": "Název slibuje dva, ne soukromí: kupujete dvě letenky do skupinového letu, takže ve dvou poletíte v koši s dalšími lidmi. Koš jen pro sebe je až varianta „Privátní let (kdekoliv v ČR)“.",
    "included": [
      "Dvě letenky do skupinového letu, přibližně hodina ve vzduchu.",
      "Křest prvoletců.",
      "Doprava zpět na místo odletu.",
      "Celý program trvá zhruba tři hodiny. V létě se startuje ráno po východu slunce nebo večer před západem, mimo léto blíže k poledni."
    ],
    "forWhom": [
      "Dvě osoby v objednávce, ve sdíleném koši s dalšími pasažéry.",
      "Minimálně 8 let a výška nad 140 cm, děti do 15 let letí v doprovodu dospělého.",
      "Kdo váží přes 119 kg, ať kontaktuje Zážitky.cz.",
      "Kdo přeleze hranu koše a vydrží celý let stát. Těhotné ženy nelétají.",
      "Kdo chce koš jen pro sebe, ať sáhne po samostatné nabídce soukromého letu."
    ],
    "watchOut": [
      "Soukromí se tu kupuje jen jako varianta „Privátní let (kdekoliv v ČR)“, která vyžaduje travnatý pozemek nejméně 50 × 50 m se souhlasem majitele, s příjezdovou cestou a s odstupem 15 až 20 km od hranic. Stránka nevysvětluje, zda je totožná se samostatnou nabídkou soukromého letu pro dva; ceny i podmínky obou se liší. Porovnání najdete v [článku o ceně letu balónem pro dva](/blog/let-balonem-pro-dva-cena).",
      "Velikost koše u této nabídky není uvedena. U základního Letu balónem jde o koše pro 5 až 24 pasažérů. Kolik lidí poletí s vámi dvěma, si nechte potvrdit.",
      "Minimální věk je tu 8 let, u většiny sesterských nabídek 7. Starší FAQ doporučuje 8 let a připouští děti do 15 let bez doprovodu se souhlasem rodičů, stránka vyžaduje doprovod dospělého.",
      "Lokalit je podle hlavičky 41, text stránky vyjmenovává jen 29 míst a zbytek uvidíte až ve výběru lokality.",
      "Nejzazší lhůta rezervace je 14 dní předem, termíny se ale vypisují jen 1 až 2 měsíce dopředu a stránka radí rezervovat 1 až 3 měsíce předem. Sekt v seznamu obsahu chybí, zmiňuje ho jen jedna recenze."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "stránka nabídky Let balónem pro dva",
        "url": "https://www.zazitky.cz/let-balonem-pro-dva"
      },
      {
        "label": "obchodní podmínky Zážitky.cz",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      },
      {
        "label": "Zážitky.cz blog: nejčastější dotazy (2020)",
        "url": "https://www.zazitky.cz/blog/faq-let-balonem"
      }
    ]
  },
  "782": {
    "lead": "Tunelový let pro děti od 5 do 15 let, na jeden poukaz jedno až tři děti. Dítě létá s instruktorem, musí mít doprovod a stránka žádá doložit věk. Ze čtyř tunelových nabídek v našem katalogu je jediná s horní věkovou hranicí a pevnou délkou tři minuty.",
    "included": [
      "Kombinéza, helma a brýle na půjčení.",
      "Před letem nácvik polohy a signálů na zemi, po něm rozbor letu s instruktorem.",
      "Délka tři minuty: dva lety po 1,5 minuty s odpočinkem. V tunelu je vždy jen jedno dítě s instruktorem.",
      "Video v ceně není, je to příplatková služba."
    ],
    "forWhom": [
      "Děti od 5 do 15 let, jedno až tři na poukaz.",
      "Věk je třeba doložit, například kartičkou zdravotní pojišťovny. Nutný je i souhlas zákonného zástupce.",
      "Dítě musí mít doprovod aspoň jedné osoby, která podepíše převzetí odpovědnosti. Ostatní se mohou dívat u prosklené komory.",
      "Doporučený limit váhy je 130 kg. Dětem létání vylučuje porucha krevního oběhu a srdce nebo problémy se zády. Každý podepisuje prohlášení o zdravotním stavu.",
      "Když má létat i dospělý, hodí se spíš [tunel pro dva nebo pro rodinu](/vetrny-tunel)."
    ],
    "watchOut": [
      "Není jasné, zda jsou tři minuty na každé dítě, nebo dohromady, když poukaz využijí dvě nebo tři děti. Ověřte to před koupí.",
      "Stránka uvádí doprovod plnoleté osoby pro mladší 18 let, obchodní podmínky žádají doprovod starší 18 let u dětí do 15 let. Přijďte s dospělým a s dokladem o věku.",
      "Ostatní tunelové stránky uvádějí, že je v červnu až srpnu v pondělí zavřeno, tato o tom mlčí. Při plánování prázdnin si provoz v pondělí raději ověřte.",
      "Rezervace: 7 dní předem podle parametrů, i zítra podle textu. Rozhoduje volný termín v kalendáři."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Větrný tunel pro děti",
        "url": "https://www.zazitky.cz/vetrny-tunel-deti"
      },
      {
        "label": "Zážitky.cz, obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "847": {
    "lead": "Vyhlídkový let malým letadlem s pilotem pro jednoho až tři pasažéry z Letňan, z letiště Ostrava nebo ze slovenského Martina. Trasy vedou od půlhodinového okruhu nad ostravskými přehradami po lety nad Tatrami a Oravou. Další možnosti najdete mezi [vyhlídkovými lety](/vyhlidkove-lety).",
    "included": [
      "Let s pilotem po zvolené trase v délce od 30 do 100 minut podle varianty.",
      "Uvítání pilotem na letišti, seznámení s průběhem letu a sluchátka.",
      "Možnost vyfotit po přistání letadlo nebo pilota."
    ],
    "forWhom": [
      "Pro ty, kdo se chtějí podívat na konkrétní krajinu: Karlštejn nebo Kokořín a Bezděz z Letňan, Beskydy a ostravské přehrady z Ostravy, Tatry a Oravu z Martina.",
      "Let je pro 1, 2 nebo 3 osoby. Vlastní trasu lze dohodnout, ale jen z Letňan.",
      "Celková váha pasažérů nesmí přesáhnout 300 kg.",
      "Věkové, zdravotní ani výškové limity stránka neuvádí, ověřte je před koupí.",
      "Doprovod může přijít na letiště, do letadla s vámi ale nesmí. Fotit i natáčet lze po celou dobu letu."
    ],
    "watchOut": [
      "Lhůta rezervace si odporuje už na jedné stránce: „minimálně 3 týdny předem“ a zároveň nejpozději 14 dní před termínem, obecné FAQ Zážitků uvádí 7 dní. Počítejte s třemi týdny a do poznámky napište preferovaný čas letu.",
      "Let závisí na počasí, postup při zrušení stránka nepopisuje, platí obecné podmínky Zážitků.",
      "Stránka nemá sekci „V ceně“. Neuvádí typ letadla ani provozovatele a není jasné, zda 90minutová a 100minutová varianta zahrnují přistání či zastávku. Martin je na Slovensku a stránka neříká, jaké doklady potřebujete.",
      "Počet tras se liší: stránka slibuje 8, konfigurátor nabízí 7. Trasa „kolem Prahy“ je popsána v textu, ale v konfigurátoru ji nenajdete. Video za příplatek se nabízí jen u tras Karlštejn a Kokořín.",
      "Zda částka u variant pro víc osob platí za celý let, nebo za osobu, stránka výslovně neuvádí. Ověřte před koupí."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Privátní vyhlídkový let letadlem",
        "url": "https://www.zazitky.cz/privatni-vyhlidkovy-let-letadlem"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  }
};

export const stripLinks = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export const getProductCopy = (id: string): ProductCopy | null => PRODUCT_COPY[id] ?? null;
