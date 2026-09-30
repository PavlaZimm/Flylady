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
  "1": {
    "lead": "Vyhlídkový let malým letadlem nad Příbramskem pro až tři lidi, celé letadlo je jen pro vaši skupinu. Trasu vybíráte ze šesti nabízených nebo ji necháte na pilotovi. Typ letadla stránka neurčuje jednoznačně: adresa jmenuje Piper, pokyny obvykle Cessnu.",
    "included": [
      "Let v celém letadle pro nejvýš tři osoby v délce 20, 30, 45 nebo 60 minut podle varianty.",
      "Volba jedné ze šesti tras N-1 až N-6, například k Dobříši a Karlštejnu (N-1), přes Žebrák, Točník a Zbiroh (N-2) nebo přes Orlík a Zvíkov ke Slapům, Štěchovicím a Davli (N-6). Trasu můžete nechat i na pilotovi.",
      "Každá z tras začíná a končí na letišti Příbram."
    ],
    "forWhom": [
      "Pro skupinu do tří lidí. Stránka o pilotování účastníkem nemluví a akrobacii neslibuje.",
      "Dítě do 2 let smí sdílet sedačku s dospělým, starší dítě potřebuje vlastní místo a počítá se jako plnohodnotný pasažér. Děti do 15 let podle stránky jen se souhlasem dospělých, obchodní podmínky žádají doprovod dospělého.",
      "Cestující mají podle stránky sami posoudit zdravotní stav, diagnózy stránka nevyjmenovává. Váhový ani výškový limit v textu není, ověřte si je předem.",
      "Přátelé se mohou dívat z letištní plochy, focení i natáčení je povolené."
    ],
    "watchOut": [
      "Popis stránky ve vyhledávači i její adresa jmenují Piper PA-28-180, pokyny ale píší o Cessně C-172S a Piper nasazují jen tehdy, když Cessna není k dispozici. Který stroj poletí ve vašem termínu, dopředu nevíte.",
      "Stránka výslovně nepíše, jestli cena platí za celé letadlo, nebo jen při plné posádce o třech lidech. Zeptejte se, zda lze letět i ve dvou.",
      "Délky 20 až 60 minut a trasy N-1 až N-6 spolu stránka nepropojuje. Kterou trasu stihnete za kolik minut, z nabídky nepoznáte, volbu proto vyjasněte před rezervací.",
      "Létá se celoročně od úterý do neděle podle počasí. Rezervovat se má aspoň 14 dní předem. Jak počasí lety omezuje, stránka nepopisuje, při zrušení platí čl. 5.7 obchodních podmínek."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Vyhlídkový let ve fantastickém letounu",
        "url": "https://www.zazitky.cz/vyhlidkovy-let-piper-pa-28-180-pro-3-osoby"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "12": {
    "lead": "Akrobatický let s pilotem, při kterém sedíte v kabině vedle něj jako pasažér. Stránka slibuje vývrtky, ostré zatáčky, výkruty, let střemhlav i hlavou dolů a „obrovské přetížení“. Před koupí ověřte, kde lze let opravdu rezervovat, protože nabídka lokalit si na stránce odporuje.",
    "included": [
      "Krátká bezpečnostní instruktáž před letem, její délku stránka neuvádí.",
      "Akrobatický let ve zvolené délce. Konfigurátor nabízí 15, 20 nebo 25 minut, text stránky zmiňuje i 10 minut.",
      "Pronájem letadla a služba akrobatického pilota. V Brně poletíte podle stránky buď na Zlínu Z-142, nebo na AS 202 Bravo, doplňující údaje stránky zmiňují navíc Zlín Z-526. Konkrétní stroj si nevybíráte."
    ],
    "forWhom": [
      "Na jeden let jedna osoba, která sedí vedle pilota. Stránka nepopisuje, že byste směli pilotovat.",
      "Váhu stránka pro Brno omezuje na 110 kg a dodává, že v těsné kabině záleží i na postavě, nejen na hmotnosti. Číselný limit výšky ani minimální věk neuvádí.",
      "Děti do 15 let podle stránky jen se souhlasem dospělých, obchodní podmínky u mladších 15 let ale žádají doprovod dospělého. Věk dítěte proto ověřte před koupí.",
      "Nevhodné je to podle stránky po mozkové příhodě a při cévním či srdečním onemocnění, handicapovaní tento zážitek absolvovat nemohou. Zdravotní stav si posuzujete sami.",
      "Doprovod (nejvýš 4 lidé) sleduje let z vyhrazeného prostoru na letišti, větší skupinu hlaste dva týdny předem. Psi na letiště nesmějí."
    ],
    "watchOut": [
      "Štítek nabídky hlásí „2 lokality“, konfigurátor ale nabízí jen Brno. V doplňujících údajích stránky je u druhé lokality, Příbrami, poznámka o zrušených termínech kvůli poruše letadla.",
      "Přetížení, vývrtky a další prvky jsou tvrzení stránky. Kolik g zažijete a které prvky se vejdou do jaké délky letu, stránka neupřesňuje, ani zda si za letu smíte zkusit řízení.",
      "Před odjezdem na letiště pokyny pro Brno radí zavolat, ideálně napsat SMS, a zjistit podmínky pro let. Zrušení kvůli počasí stránka nepopisuje, rozhoduje čl. 5.7 obchodních podmínek.",
      "Videozáznam je nejasný: v konfigurátoru žádný příplatek není, pokyny pro Brno ale mluví o záznamu doručeném do 14 dnů, „pokud je součástí“ zážitku. Zeptejte se, zda ho dostanete.",
      "Rezervovat se má aspoň 14 dní předem, obecné FAQ na Zážitky.cz uvádí sedm dní. Létá se celoročně od pondělí do soboty, celkovou délku programu včetně instruktáže stránka neuvádí."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Let akrobatickým letadlem",
        "url": "https://www.zazitky.cz/let-akrobatickym-letadlem"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      },
      {
        "label": "Zážitky.cz: časté dotazy",
        "url": "https://www.zazitky.cz/pomoc"
      }
    ]
  },
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
  "19": {
    "lead": "Vyhlídkový tandemový let na paraglidingovém křídle: pilot vás zajistí do sedačky, po krátkém rozběhu z kopce se odpoutáte od země a letíte s ním. Stránka nabízí lety od 10 do 30 minut v Beskydech a v Krkonoších. Čím se liší od termického tandemu, neříká, oba popisy jsou téměř stejné.",
    "included": [
      "Let s tandempilotem v délce podle varianty. Stránka uvádí rozsahy 10 až 15 a 20 až 30 minut, vždy podle počasí.",
      "Instruktáž před startem a bezpečnostní přilba.",
      "Program: setkání na domluveném místě, přesun na start a let. Pilot trasu volí tak, aby přistál poblíž místa vzletu."
    ],
    "forWhom": [
      "Beskydy (Javorový vrch u Třince): minimální věk 10 let, doporučená váha do 110 kg. Podle stránky zvládne instruktor i větší váhu, pokud jde o dobře stavěného a zdatného člověka. Napište to do poznámky k rezervaci.",
      "Krkonoše (Černý Důl): váha v rozmezí 30 až 100 kg, minimální věk stránka neuvádí. Po dohodě poletí podle stránky i lidé s handicapem, například na vozíku.",
      "Z letu jsou vyloučeni lidé pod vlivem alkoholu. Další zdravotní omezení stránka nevypisuje, s pochybnostmi se zeptejte před koupí.",
      "Poukaz je pro 1 až 2 osoby. Stránka nevysvětluje, zda jde o dva pasažéry na jednom poukazu, nebo o samostatné varianty. Diváci jsou vítáni."
    ],
    "watchOut": [
      "Počet lokalit stránka uvádí na dvou místech různě: hlavička a data mluví o dvou, text o třech včetně slovenského Nového Mesta nad Váhom. Pro slovenské místo nejsou limity ani pokyny.",
      "Sezóna se liší: Beskydy od března do listopadu, Krkonoše od Velikonoc do listopadu, Nové Mesto od dubna do října. Delší lety (20 až 30 minut) jsou podle stránky kvůli počasí zpravidla jen do konce září.",
      "V Beskydech sdělí instruktor místo a čas setkání den před termínem podle předpovědi, místo startu vybírá podle povětrnostních podmínek. Pro Krkonoše stránka uvádí jen to, že termíny závisejí na předpovědi a instruktor se ozve s možnými dny. Když pilot let zruší, jde podle stránky o bezpečnost a domluví se nový termín. Rezervace je nejpozději 14 dní předem.",
      "Délka: hlavička říká 10 až 30 minut, data dva rozsahy, 10 až 15 a 20 až 30, mezi nimi je mezera. Varianty označené „po–čt“ jdou jen v pondělí až čtvrtek.",
      "Videozáznam se v Beskydech přikupuje (natáčí se kamerou na tyči), cenu tu stránka neuvádí. V Krkonoších lze fotit a natáčet vlastním zařízením, stránka radí zajistit ho popruhem kolem krku."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Tandemový paragliding",
        "url": "https://www.zazitky.cz/tandem-paragliding"
      }
    ]
  },
  "21": {
    "lead": "Simulátor dopravního letadla ATR 72 ve výcvikovém středisku pilotů na letišti Praha-Ruzyně, kde se nelétá doopravdy. Za hodinu se na sedadlech pilotů vystřídají až tři lidé. Název nabídky slibuje „certifikovaný“ simulátor, sekce omezení ale píše, že není pohyblivý.",
    "included": [
      "Půlhodinový briefing s instruktorem a základní seznámení s ovládáním.",
      "Simulace letu na 1 nebo 2 hodiny podle varianty: povolení k odletu od věže, rolování, vzlet a přistání, podle popisu možná i snížená viditelnost či bouřka s turbulencemi.",
      "Vyhodnocení pilotáže po letu a káva v kavárně, obojí podle popisu programu."
    ],
    "forWhom": [
      "Pro skupinu do tří lidí, kteří se na pilotních sedadlech střídají. V simulátoru je s nimi instruktor.",
      "Podle stránky simulátor není pohyblivý, takže by zážitek neměl činit potíže. Zdravotní omezení tím ale neodpadají: zdravotní kritéria stránka neudává a podle obchodních podmínek (čl. 6.5) si způsobilost posuzuje každý účastník sám. Při pochybnostech se zeptejte předem.",
      "Podle stránky musí mít mladší 17 let doprovod dospělé osoby, obchodní podmínky (čl. 6.2) uvádějí doprovod u dětí do 15 let. Pravidlo pro dítě si nechte potvrdit. Dolní hranici věku stránka neuvádí.",
      "Zážitek je možný i v angličtině.",
      "Váhu ani výšku stránka neudává, dotazy vyřešte před koupí."
    ],
    "watchOut": [
      "Slovo „Certifikovaný“ je jen v názvu. Kdo a co certifikoval, stránka neříká, a k tomu uvádí, že simulátor není pohyblivý. Sesterská nabídka Boeingu 737 ve stejném středisku naopak uvádí „plně pohyblivý“.",
      "Program mluví o „hodině letu“, konfigurátor ale nabízí hodinu i dvě a briefing uvádí zvlášť. Jestli se půlhodinový briefing počítá do letu a jak vypadá program u dvou hodin, není jasné.",
      "Počítejte s měsíčním předstihem: stránka radí měsíc předem a jako nejzazší lhůtu uvádí 30 dnů, obecná nápověda na Zážitky.cz kratší minimum, sedm dní. Potvrďte při rezervaci.",
      "Stránka neuvádí ulici střediska ani to, zda cena platí za celou skupinu, nebo za osobu."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Certifikovaný simulátor dopravního letadla ATR 72",
        "url": "https://www.zazitky.cz/simulator-dopravniho-letadla"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
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
  "113": {
    "lead": "Skupinový let ve čtyřmístné Cessně 172, který stránka popisuje jako let až pro tři osoby. Hodinový let se dělí na tři dvacetiminutové úseky za řízením, zbylí dva mezitím sedí v letadle. Stránka slibuje přistání na třech letištích, celý program s hodinovým briefingem zabere zhruba tři hodiny.",
    "included": [
      "Hodinový briefing před odletem: plánování letu s trasou v mapě, meteorologie a prohlídka letadla. Krizové situace se nacvičují až za letu.",
      "Hodinový let až pro tři účastníky, každý pilotuje 20 minut.",
      "Přistání na třech letištích v průběhu letu."
    ],
    "forWhom": [
      "Pro trojici, která chce zkusit pilotování společně a nevadí jí střídání. Letiště: Ostrava-Mošnov, Brno-Tuřany, Praha-Letňany.",
      "Minimální věk je 16 let, mladší 18 let letí s rodičem nebo s jeho souhlasem.",
      "Posádka o třech lidech smí vážit nejvýš 240 kg, v průměru tedy 80 kg na osobu."
    ],
    "watchOut": [
      "Když pilotuje kolega, jste spolucestující: u řízení strávíte 20 minut z hodiny.",
      "Váhový limit platí za celou posádku. Je-li jeden z vás těžší, ověřte předem, jak se limit počítá.",
      "Termíny jsou vypsané hlavně na víkendy a rezervace musí být hotová nejpozději 14 dní před letem.",
      "Stránka mluví o letu až pro tři osoby, u počtu osob ale uvádí 1. Složení posádky a konkrétní trasu proto ověřte při rezervaci.",
      "Bez dalších pasažérů si zážitek užijete v privátní nabídce „Pilotem letounu na zkoušku – privátní let“, kterou stránka sama doporučuje."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Pilotem letounu na zkoušku",
        "url": "https://www.zazitky.cz/pilotem-letounu-na-zkousku"
      }
    ]
  },
  "114": {
    "lead": "Vrtulník Robinson R22, dvoumístný, z Brna-Tuřan nebo z Hradce Králové. Program tvoří hodinový briefing a zhruba půlhodinový let, celkem počítejte s nejméně dvěma hodinami. Podle stránky si zkusíte funkci druhého pilota, kterou nabídka nazývá „pomozte pilotovat“.",
    "included": [
      "Předletový briefing asi 60 minut s instruktorem a prostor na dotazy.",
      "Let dlouhý asi 30 minut ve vrtulníku Robinson R22.",
      "Funkce druhého pilota, kterou stránka popisuje jako pomoc při pilotování."
    ],
    "forWhom": [
      "Vrtulník je dvoumístný, s pilotem tedy letí jediný účastník.",
      "Zúčastnit se lze od 16 let, nezletilí jen s rodičem nebo s jeho souhlasem; váhový limit je 100 kg.",
      "Kdo chce vrtulník spíš zažít z místa pasažéra, najde další nabídky mezi [lety vrtulníkem](/let-vrtulnikem)."
    ],
    "watchOut": [
      "Rezervace je nejpozději 30 dní předem a termín se dohaduje na poptávku. To je nejdelší z lhůt, které stránky ve skupině uvádějí.",
      "Formulace „pomozte pilotovat“ neříká, kolik z asi 30 minut budete u ovládání. Zeptejte se provozovatele.",
      "Lokalita Mladá Boleslav byla zrušena, náhradou je Hradec Králové nebo Brno, případně výměna či vrácení peněz. Starší zmínky o Boleslavi proto neberte doslova.",
      "Čas setkání potvrdí provozovatel asi tři dny předem; termín přesunutý kvůli počasí už změnit nejde."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Pilotem vrtulníku na zkoušku",
        "url": "https://www.zazitky.cz/pilotem-vrtulniku-na-zkousku"
      }
    ]
  },
  "115": {
    "lead": "Let Cessnou 172 pro dvojici s pilotem. Podle popisu programu je před odletem na letišti sekt a trasa se probírá s pilotem na místě, pevná není. Od ostatních vyhlídkových letů se liší tím, že je určený pro dva a letiště si vybíráte z osmi v konfigurátoru.",
    "included": [
      "Let pro dvě osoby s pilotem v Cessně 172. Konfigurátor uvádí u všech lokalit 30 minut, text stránky délku neuvádí.",
      "Předletový program podle popisu: seznámení s pilotem a společné probrání možných tras na letišti.",
      "Sluchátka v kabině a podle počasí výstup „co nejblíže k mrakům“, jak to stránka popisuje."
    ],
    "forWhom": [
      "Pro dvojici. Řídí pilot, o pilotování účastníkem stránka nemluví.",
      "Společná váha obou účastníků smí být nejvýš 200 kg, jenže formulář dovolí zadat až 119 kg na osobu, což dává víc než 200 kg. Blíží-li se vám hranice, ověřte to předem u provozovatele.",
      "Věkové, zdravotní ani výškové limity stránka neuvádí. Podle obchodních podmínek potřebuje ten, kdo je mladší 15 let, doprovod dospělého, od 15 do 18 let souhlas zákonného zástupce a za zdravotní způsobilost odpovídá účastník.",
      "Diváci sledují start a přistání z vymezeného prostoru letiště, fotit a filmovat se smí."
    ],
    "watchOut": [
      "Text vyjmenovává devět měst včetně Hradce Králové, konfigurátor jich má osm a Hradec tam chybí. Letiště si vybírejte podle konfigurátoru.",
      "Termín se podle dat stránky řeší individuálně na poptávku, přitom text chce rezervaci aspoň 14 dní předem. Zhruba tři dny před odletem piloti potvrdí čas, a když počasí nepustí, domluvený náhradní termín je závazný.",
      "Sekt je v programu popsaný, sekce „V ceně“ ale chybí a stránka ho výslovně do ceny nezahrnuje. Nejasné je i to, kolik ho dostanete a zda se 30 minut počítá bez pozemní části.",
      "Videozáznam jde připlatit jen na letištích Praha 9 – Letňany a Ostrava – Mošnov, jinde ho konfigurátor nenabízí.",
      "Odznak „vrácení zážitku až do 60 dnů“ neberte jako bezplatnou výhodu. Podle obchodních podmínek (čl. 8) je zdarma jen zákonné odstoupení do 14 dnů, delší lhůta je placená doplňková služba."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Romantický let letadlem pro dva",
        "url": "https://www.zazitky.cz/romanticky-let-letadlem-pro-dva"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "142": {
    "lead": "Dvoudenní kurz IAFF končí jedním samostatným skokem ze 4 až 5 km. Vyskočí s vámi dva instruktoři, asi minutu padáte volným pádem a pod padákem řídíte sami. Oproti základnímu výcviku z 1 200 až 1 500 m je to výš a s volným pádem, oproti tandemu nejste k nikomu připoutaní.",
    "included": [
      "Příprava na zemi: teorie a nácvik, první den podle stránky zhruba 6 hodin, v Prostějově a Příbrami 8 hodin.",
      "Seskok ze 4 000 až 5 000 m (podtitul stránky uvádí jen 4 000 m) v doprovodu dvou instruktorů, po celou dobu se spojením vysílačkou.",
      "Let pod padákem zhruba 5 až 6 minut, padák řídíte sami a přistáváte tam, kam se nasměrujete.",
      "Půjčená souprava: přilba, kombinéza, ochranné brýle, radiostanice a padák.",
      "V Prostějově a Příbrami je v ceně i videozáznam seskoku."
    ],
    "forWhom": [
      "Pro ty, kdo chtějí jednou zkusit samostatný skok volným pádem a nechtějí se vázat na celý kurz. Poukaz je pro jednu osobu.",
      "Minimální věk je 15 let. Mladší 18 let musí být podle stránky v doprovodu zákonného zástupce, obchodní podmínky (čl. 6.2) však u 15 až 18 let žádají jen souhlas. Pravidla proto potvrďte u provozovatele.",
      "Podle stránky zážitek není vhodný pro osoby s epilepsií, srdečními problémy nebo problémy s páteří či klouby. Nutná je prohlídka u leteckého lékaře a jeho souhlas, kontakt na lékaře přijde při rezervaci.",
      "Váhu, výšku ani kondici stránka neuvádí a formulář se na váhu neptá, limit proto zjistěte předem. Horní věkovou hranici v omezeních nenajdete. Starší zájemci se mají před koupí zeptat provozovatele."
    ],
    "watchOut": [
      "Prostějov a Příbram vyžadují před kurzem absolvovat tandemový seskok, jinde ho stránka jen doporučuje (pokyny uvádějí podmínku jen u Prostějova). Kde tandem koupit, ukáže přehled [tandemových seskoků](/tandemove-seskoky).",
      "Lokality jsou čtyři: Prostějov, Most, Plzeň a Příbram. Teorie pro Plzeň se učí v Příbrami. Liší se i video: v Mostě se přikupuje, u Plzně o něm stránka mlčí.",
      "Certifikát není v seznamu toho, co zážitek obsahuje. Jen popisek u fotky slibuje certifikát po skoku a dodává, že se na různých letištích liší.",
      "Rezervace je „ideálně 3 týdny“ a zároveň nejpozději 21 dní předem. Instruktor se podle pokynů ozve dva dny před termínem s přesným časem. Sezóna trvá od dubna do října.",
      "Skok po dni teorie a nácviku může zhatit počasí, nový termín pak dohodnete s instruktory. Zda se za to platí, stránka neříká."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Skočte si sami volným pádem",
        "url": "https://www.zazitky.cz/skocte-si-sami-volnym-padem"
      },
      {
        "label": "Zážitky.cz, obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "143": {
    "lead": "Tandemový paragliding, při kterém pilot podle stránky využívá stoupavé proudy a udrží vás ve vzduchu déle (oproti čemu, stránka nevysvětluje). Létá se jen v Beskydech, standardně z Javorového vrchu u Třince, 15 až 20 minut. S vyhlídkovým tandemem se popisem téměř kryje, kromě místa a délky letu tu stránka žádný rozdíl neuvádí.",
    "included": [
      "Let s tandempilotem v délce 15 až 20 minut podle povětrnostních podmínek.",
      "Přilba a instruktáž před letem.",
      "Sraz s instruktorem, přesun na start a rozběh z kopce, přistání nedaleko místa vzletu."
    ],
    "forWhom": [
      "Zážitek podle stránky mohou absolvovat osoby starší 10 let. Doporučený strop váhy je 110 kg. U těžšího a zdatného člověka stránka počítá s tím, že to instruktor zvládne, když to uvedete do poznámky.",
      "Nelétat smějí lidé pod vlivem alkoholu. Jiná zdravotní omezení stránka nezmiňuje, případné otázky proto řešte před koupí.",
      "Poukaz je pro 1 až 2 osoby, přihlížet mohou i diváci.",
      "Vezměte pevnou obuv nad kotníky, dlouhé kalhoty a bundu nebo mikinu s dlouhými rukávy i v teple, nahoře totiž podle stránky trochu fouká."
    ],
    "watchOut": [
      "„Termický“ je v názvu, ale popis vzdušných proudů a výšky několika set metrů se téměř shoduje s vyhlídkovým tandemem. Čím se oba liší kromě lokality a délky, stránky nevysvětlují, proto se před koupí zeptejte.",
      "Akrobacii stránka nezmiňuje, ta je jen u akrobatického letu. Sezóna trvá od března do listopadu podle počasí.",
      "Záznam z kamery na tyči se kupuje na místě a má dorazit e-mailem do dvou dnů. Cenu záznamu si ověřte předem.",
      "Termín je nutné rezervovat nejpozději 7 dní předem. Místo a čas pošle instruktor den před letem podle předpovědi. Když pilot let zruší, stránka to zdůvodňuje bezpečností a nabízí nový termín. Kvůli pochybnostem o počasí není podle ní třeba nikoho předem kontaktovat."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Tandemový paragliding - termický let",
        "url": "https://www.zazitky.cz/tandemovy-paragliding-termicky-let"
      }
    ]
  },
  "186": {
    "lead": "Vyhlídkový let Cessnou 172 z pražských Letňan přes Průhonický park a soutok Vltavy a Berounky ke hradu Karlštejn. Ze tří stejně postavených letů je jediný, u kterého konfigurátor nabízí videozáznam jako příplatek.",
    "included": [
      "Let pro 1 až 3 osoby s pilotem v Cessně 172 z letiště Praha Letňany.",
      "Podle textu vede trasa (120 km podle stránky) přes Průhonický park, vysílač Cukrák, soutok Vltavy a Berounky, lom Malá a Velká Amerika, Davle a Karlštejn.",
      "Délka letu se liší podle zdroje: text uvádí 40 až 50 minut, konfigurátor 40."
    ],
    "forWhom": [
      "Pro cestující, kteří chtějí vidět okolí Prahy shora. Pilotování účastníkem stránka nepopisuje.",
      "Doprovod s vámi do letadla nemůže, vzlet a přistání sleduje z vyhrazeného místa. Focení a natáčení stránka dovoluje.",
      "Nejvýš 240 kg na celou posádku, tedy kolem 80 kg na osobu. Těžší posádce stránka doporučuje zážitek „Pilotem letounu na zkoušku – privátní let“ nebo „Pilotem malého letounu na zkoušku“, viz [pilotem na zkoušku](/pilotem-na-zkousku).",
      "Minimum 16 let najdete jen v datech stránky, zobrazený text věk nezmiňuje. Zdraví ani výšku stránka neřeší, za zdravotní způsobilost odpovídá podle obchodních podmínek účastník."
    ],
    "watchOut": [
      "U příplatku za video stránka nepopisuje, co záznam obsahuje ani jak se doručuje. Zeptejte se před koupí.",
      "Kdy poletíte, si podle konfigurátoru vyberete až po nákupu, text přitom počítá s vypsanými víkendy a rezervací aspoň 14 dní předem.",
      "Stránka neuvádí, kde na letišti se scházíte, ani kdo let provozuje. Místo setkání si před cestou ověřte."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Vyhlídkový let - Karlštejn",
        "url": "https://www.zazitky.cz/vyhlidkovy-let-karlstejn"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "187": {
    "lead": "Vyhlídkový let čtyřmístnou Cessnou 172 z ostravského letiště v Mošnově směrem k Lysé hoře a Beskydám. Podle stránky minete například Žermanickou přehradu, Čeladnou, hrad Hukvaldy a Štramberskou trúbu. Z trojice podobně postavených letů je tenhle ten ostravský.",
    "included": [
      "Let s pilotem v Cessně 172 pro 1, 2 nebo 3 osoby podle zvolené varianty, odlet z letiště Ostrava – Mošnov.",
      "Trasa je podle stránky dlouhá 120 km.",
      "Čas letu stránka udává na 40 až 50 minut, konfigurátor nabízí jedinou variantu, 40 minut."
    ],
    "forWhom": [
      "Pro ty, kdo chtějí vidět Ostravu a Beskydy z kabiny a nechtějí řídit. Stránka pilotování účastníkem nepopisuje a akrobacii nenabízí.",
      "Posádka až tři osoby, dohromady podle stránky nejvýš 240 kg (asi 80 kg na osobu). Formulář přesto přijme až 119 kg na osobu, tedy dohromady víc než 240 kg. U hranice se předem zeptejte provozovatele.",
      "Minimální věk 16 let je jen v datech stránky, zobrazený text ho nezmiňuje. Mladší 18 let jen s rodiči nebo s jejich souhlasem. Zdravotní a výškové limity stránka neuvádí.",
      "Doprovod může start a přistání sledovat z vyhrazeného prostoru letiště a fotit i natáčet."
    ],
    "watchOut": [
      "Termíny si odporují: text mluví o předem vypsaných víkendech a o rezervaci aspoň 14 dní předem, konfigurátor po výběru varianty píše, že termín vyberete až po nákupu. Podle stránky termíny pro 1 a 2 osoby vypisuje provozovatel, u tří osob si termín volíte sami.",
      "Trasa je jen výčet „například“. Co přesně přeletíte, stránka nezaručuje.",
      "Za špatného počasí stránka odkazuje jen na postup s pilotem, případná kompenzace se řídí čl. 5.7 obchodních podmínek.",
      "Cenu stránka nevysvětluje: není jasné, zda platí za celé letadlo, nebo jde o součet za osoby. Nejasné je i to, zda 40 minut znamená čas ve vzduchu. Příplatek za video konfigurátor nemá."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Vyhlídkový let - Beskydy",
        "url": "https://www.zazitky.cz/vyhlidkovy-let-beskydy"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "188": {
    "lead": "Nad jihomoravské vinice a směrem k Pálavě vás z brněnských Tuřan poveze Cessna 172 s pilotem. Podle stránky míjí zámek Židlochovice, Mušovská jezera, Mikulov a Lednicko-valtický areál. Od sesterských letů z Ostravy a Prahy ho odlišuje letiště a krajina.",
    "included": [
      "Let s pilotem v Cessně 172 z letiště Brno-Tuřany, varianty pro 1, 2 nebo 3 osoby.",
      "Směr CHKO Pálava, trasa má podle stránky 120 km.",
      "Konfigurátor počítá se 40 minutami, text stránky se 40 až 50."
    ],
    "forWhom": [
      "Pro cestující, kteří chtějí z výšky vidět jihomoravské vinice a Lednicko-valtický areál a řídit nechtějí.",
      "Váhový limit 240 kg platí pro celou posádku (přibližně 80 kg na osobu).",
      "Smí se od 16 let (podle dat stránky, zobrazený text se o věku nezmiňuje), mladší 18 let s rodiči nebo s jejich souhlasem.",
      "Divákům je určený vyhrazený prostor, odkud vidí start i přistání. Fotit a natáčet smějí."
    ],
    "watchOut": [
      "Přesný čas odletu se potvrzuje až zhruba tři dny předem podle předpovědi. Náhradní termín, který při špatném počasí domluví piloti, je podle stránky finální a závazný.",
      "Videozáznam si v konfigurátoru za příplatek nepřidáte. Zda ho lze domluvit jinak, stránka neříká."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Vyhlídkový let - Pálava",
        "url": "https://www.zazitky.cz/vyhlidkovy-let-palava"
      }
    ]
  },
  "190": {
    "lead": "Simulátor kabiny Boeingu 737 ve stejném ruzyňském středisku jako ATR 72, ne skutečný let. Podle názvu nabídky je certifikovaný a plně pohyblivý, stránka jmenuje šest hydraulických pístů, ale nic nedokládá. Na sedadlech pilotů se vystřídají až tři lidé. Jestli váháte mezi simulátorem a skutečným letem, pomůže [průvodce výběrem](/blog/jak-vybrat-letecky-zazitek).",
    "included": [
      "Briefing na půl hodiny se základy ovládání a poté simulace letu na 1 nebo 2 hodiny podle varianty.",
      "Podle stránky si lze zkusit vyhlídkový let na přání, přístrojové létání, autopilot, přiblížení a přistání, let s poruchou motoru a také mlhu, déšť nebo sníh.",
      "Vyhodnocení pilotáže po letu, malý dárek na památku a káva v kavárně; tyto položky stránka uvádí v popisu programu."
    ],
    "forWhom": [
      "Pro ty, kdo chtějí sedět v kabině velkého dopravního letadla a zkoušet situace, které při skutečném letu nepotkají. Střídat se mohou až tři lidé, instruktor je při tom s nimi.",
      "Je-li mezi účastníky někdo mladší 10 let, provozovatel hydraulický pohyb nezapne. Podle stránky musí mít mladší 17 let doprovod dospělé osoby, obchodní podmínky (čl. 6.2) uvádějí doprovod u dětí do 15 let. Pravidlo pro dítě si nechte potvrdit.",
      "Ke zdraví stránka uvádí jen větu o omezeních jako u běžného letu letadlem a poznámku, že kdo se létání bojí, nemusí mít ideální zážitek. Váhu ani výšku neuvádí.",
      "Zážitek se dá absolvovat i v angličtině. Fotit a filmovat je dovoleno."
    ],
    "watchOut": [
      "Certifikaci i pohyblivost stránka jen tvrdí. Kdo simulátor certifikoval a v jaké kategorii, neuvádí. Konkrétní verze Boeingu 737 se neuvádí.",
      "Nejasné je, zda částka platí za celou skupinu, nebo za osobu, a zda k zážitku patří prohlídka střediska (zmiňují ji jen popisky fotek).",
      "Rezervovat je třeba nejpozději 30 dnů předem, na poslední chvíli to u Boeingu 737 nepůjde.",
      "Zážitek probíhá v neveřejné části letiště. Zbraně a jejich makety se vnášet nesmí a řídíte se pokyny instruktora.",
      "Odznak „Vrácení zážitku až do 60 dnů“ nepočítejte automaticky za bezplatnou lhůtu. Obchodní podmínky (čl. 8) znají zákonné odstoupení spotřebitele do 14 dnů a zvlášť placenou doplňkovou službu vrácení nad rámec této lhůty (čl. 8.9). Jak se k nim odznak vztahuje, výslovně neuvádějí, zeptejte se před koupí."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Certifikovaný plně pohyblivý simulátor Boeing 737",
        "url": "https://www.zazitky.cz/pilotem-dopravniho-letadla-boeing-737"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
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
      "Podle stránky nemohou létat těhotné, lidé pod vlivem alkoholu, lidé s poruchou krevního oběhu a srdce a lidé s problémy se zády. Každý podepisuje prohlášení o zdravotním stavu.",
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
  "228": {
    "lead": "Let bezmotorovým letadlem: větroň vzlétne v aerovleku za motorovým letadlem, pilot lano odpojí a vy letíte tiše zpět na letiště. Létá se z letiště Martin na Slovensku a poukaz je pro jednu osobu. Délku ani výšku letu stránka neuvádí.",
    "included": [
      "Přivítání pilotem na letišti, vysvětlení postupu a usazení do větroně.",
      "Vzlet v aerovleku za motorovým letadlem a po odpojení lana let zpět na letiště. Cestovní rychlost je podle stránky okolo 80 km/h.",
      "Seznam toho, co cena zahrnuje, stránka nemá. Uvedené body vycházejí z popisu programu, obsah varianty si ověřte při výběru."
    ],
    "forWhom": [
      "Poukaz je pro jednu osobu, web zážitek řadí mezi [vyhlídkové lety](/vyhlidkove-lety).",
      "Vyloučeni jsou lidé s epilepsií nebo s vážnou srdeční vadou a také lidé pod vlivem alkoholu. Stránka navíc žádá, aby každý cestující sám zhodnotil svůj zdravotní stav.",
      "Text uvádí limit 100 kg, formulář ale přijme i vyšší váhu. Kterému údaji věřit, zjistěte u provozovatele.",
      "Děti do 15 let smějí podle stránky jen se souhlasem dospělých, minimální věk stránka neuvádí. Obchodní podmínky Zážitky.cz (čl. 6.2) u dětí do 15 let žádají doprovod osoby starší 18 let.",
      "Diváci mohou sledovat z letištní plochy, v Martině jsou lavičky. Vezměte vrstvu oblečení navíc a vlastní foťák nebo mobil, službu záznamu stránka nenabízí."
    ],
    "watchOut": [
      "Délka a výška letu chybí. V datech na stránce se u délky objevují čísla od 8 do 60 bez jednotek a bez vysvětlení, proto délku letu ověřte při výběru varianty.",
      "Sezóna trvá od dubna do října, o víkendech a svátcích podle počasí. Stránka jen obecně píše, že okolnosti letu závisejí na meteorologických podmínkách.",
      "Rezervace je „ideálně 14 dní“ předem a zároveň nejpozději 14 dní.",
      "Pokyny k příchodu jsou na stránce rozepsané podle provozovatelů a není jasné, který z nich létá z Martina. Čas a místo příchodu proto potvrďte při rezervaci."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Let větroněm",
        "url": "https://www.zazitky.cz/let-vetronem"
      },
      {
        "label": "Zážitky.cz, obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "242": {
    "lead": "Výcvik rozložený většinou do dvou dnů končí jedním samostatným seskokem z výšky 1 200 až 1 500 m. Skáčete sami: padák se otevírá automaticky krátce po výskoku a celou dobu jste vysílačkou spojeni s instruktorem na zemi. Volný pád tu stránka nezmiňuje, u skoku ze 4 až 5 km v sesterské nabídce ho naopak slibuje.",
    "included": [
      "Teorie v učebně a praxe na letišti.",
      "Seskok z 1 200 až 1 500 m s padákem typu křídlo, který se otevírá sám (stránka mluví o otevírání „na trhačku“).",
      "Zapůjčení kompletní soupravy: přilba, kombinéza, ochranné brýle (podle stránky se dají nosit s dioptrickými brýlemi i čočkami), radiostanice a padák.",
      "Veškeré letištní poplatky a certifikát o absolvování."
    ],
    "forWhom": [
      "Pro úplné začátečníky bez zkušeností s parašutismem, kteří si chtějí samostatný skok vyzkoušet jednou. Poukaz je pro jednu osobu.",
      "Minimální věk je 15 let, mladší 18 let potřebují souhlas zákonného zástupce. V Plzni se navíc žádá ověřený souhlas (Czech POINT) a souhlas obou rodičů.",
      "Váhový limit má podle stránky Kolín (95 kg). Pro Plzeň stránka limit neuvádí, proto ho potvrďte u provozovatele.",
      "Nutná je prohlídka u leteckého lékaře a jeho souhlas. Kontakty na lékaře dostanete při rezervaci termínu. V ceně prohlídka není, stránka k ní uvádí zvlášť orientační cenu. Konkrétní nemoci, výšku ani kondici neuvádí.",
      "Diváci jsou vítáni a čekají na letišti."
    ],
    "watchOut": [
      "Termín, který si v kalendáři vyberete, je termín teorie. Praxe se domlouvá na místě, zpravidla na následující sobotu nebo neděli podle počasí a instruktora. V Kolíně je teorie každý druhý čtvrtek, takže „dva dny“ nemusejí následovat hned po sobě.",
      "Skok je vázaný na dobré počasí. Když po teorii a nácviku nejsou vhodné podmínky, domluví se nový termín. Co to znamená pro poplatky, stránka neříká.",
      "Místo teorie závisí na lokalitě: u Kolína je to Praha, u Plzně Příbram (podle pokynů možná i letiště v Líních). Kam a kdy přijet, si potvrďte při rezervaci.",
      "Video v ceně není, fotit a natáčet lze jen před nástupem do letadla. Délku letu pod padákem stránka neuvádí.",
      "Rezervace je nejpozději 14 dní předem. Sezóna trvá od dubna do října."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Základní parašutistický výcvik",
        "url": "https://www.zazitky.cz/zakladni-parasutisticky-vycvik"
      }
    ]
  },
  "275": {
    "lead": "Ultralehký letoun ve skupinovém termínu: společný briefing trvá asi 30 minut, pak se zájemci u pilotování střídají a ostatní čekají na zemi. Stránka uvádí 20 minut letu. Termíny jsou předem vypsané, většinou o víkendech.",
    "included": [
      "Společný briefing asi 30 minut pro všechny účastníky termínu.",
      "Let 20 minut podle zvolené varianty: funkce druhého pilota a navigace podle mapy a kompasu.",
      "Ultralehký letoun, v Praze Echo nebo VL3, v Ostravě ALTO."
    ],
    "forWhom": [
      "Pro ty, kterým nevadí střídat se s dalšími a čekat na zemi, než přijdou na řadu.",
      "Podmínky: od 16 let (do 18 let s rodičem nebo s jeho souhlasem), váha nejvýš 100 kg.",
      "Letiště: Praha-Letňany, Ostrava-Mošnov a Miroslav."
    ],
    "watchOut": [
      "Není jasné, zda je těch 20 minut čas každého účastníka, nebo celého letu. Ověřte to před koupí, na tom stojí smysl skupinové varianty.",
      "Den si nevyberete libovolně, termíny jsou vypsané předem. Jak dlouho celý termín skupiny trvá, stránka neříká, tak s čekáním počítejte.",
      "Doplňující informace na stránce uvádí, že se lety přesunuly z Vyškova na letiště Brno-Medlánky, které mezi vypsanými letišti není. Kde se bude létat, ověřte při rezervaci.",
      "Rezervace je nutná nejpozději 14 dní před letem, i když jsou termíny vypsané."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Pilotem malého letounu na zkoušku",
        "url": "https://www.zazitky.cz/pilotem-maleho-letounu-na-zkousku"
      }
    ]
  },
  "276": {
    "lead": "Let na flyboardu nad vodou: instruktor na vodním skútru řídí přívod vody, ta žene trysky pod nohama a vy tělem držíte rovnováhu několik metrů nad hladinou. Nabídka platí pro jednoho nebo dva lidi a stránka uvádí 13 lokalit. Umět plavat je podmínkou.",
    "included": [
      "Instruktáž na souši před vstupem do vody, podle stránky 10 až 15 minut a nad rámec zvolených minut letu.",
      "Let na flyboardu s instruktorem. Konfigurátor nabízí pro jednoho 10, 15 nebo 20 minut, pro dva „2 × 10“, „2 × 15“ nebo „2 × 20“ minut, nabídka se liší podle lokality.",
      "Zapůjčená výbava: flyboard, neopren, plovací vesta, helma, případně plavecké brýle, ponožky nebo kukla. Vlastní neopren či neoprenové boty smíte přinést."
    ],
    "forWhom": [
      "Pro ty, kdo umějí plavat, což stránka výslovně vyžaduje. Zkušenost s jinými sporty nechce, základem jsou dvě pravidla: zpevněná stehna (nekrčit kolena) a mírné kolébání v kotnících.",
      "U většiny lokalit stránka doporučuje věk od 12 let a váhu neomezuje. Hradec Králové má přísnější podmínky: nad 15 let, váha do 120 kg, velikost nohy 36 až 47. Ve stejném odstavci stojí i zmínka o dětech 10 až 15 let s doprovodem, u dítěte proto hranici upřesněte před koupí.",
      "Nesmí těhotné ženy, lidé se závažným onemocněním ani lidé pod vlivem alkoholu. Nevhodné je to pro nevidomé a neslyšící, lehké tělesné postižení nevadí, pokud vám nedělají problém fyzicky náročné sporty a plavání.",
      "Pro jednoho nebo dva lidi. Doprovod je u vody vítán a fotit se smí."
    ],
    "watchOut": [
      "Lokalit je podle štítku i konfigurátoru 13, text jich ale vyjmenovává 12 a jsou v něm místa, která konfigurátor nemá. Naopak tam chybí Hradec Králové a dvě místa v Ostravě. Slapy jsou podle dat stránky uzavřené. Vybírejte podle konfigurátoru.",
      "Nabídka se liší podle místa. Ve Vrané nad Vltavou jsou třeba jen lety na 10 a 15 minut, příplatky se týkají videa ze skútru a dalších 5 minut a vstupné do areálů v Brandýse nad Labem a v Hlučíně se platí mimo cenu zážitku. Text zmiňuje i 30 minut, konfigurátor je nenabízí.",
      "Sezóna je květen až září v předem vypsaných víkendových termínech, ve Vrané nad Vltavou podle textu červen až září, konfigurátor ale píše květen až září. Stránka radí rezervovat s měsíčním předstihem a volit květen nebo červen, protože srpen a září bývají plné.",
      "Kolik času u vody strávíte celkem, stránka nesčítá: instruktáž je navíc k minutám letu, o převlékání se nic nepíše a příchod se žádá aspoň půl hodiny před časem rezervace (u některých míst deset minut). Zda „2 × 10 minut“ znamená dva lidi po deseti minutách, stránka výslovně nepíše."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Flyboarding",
        "url": "https://www.zazitky.cz/flyboarding"
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
      "Doporučený limit váhy je 130 kg. Létat nesmí těhotné, lidé pod vlivem alkoholu ani ti, kdo mají poruchu oběhu a srdce nebo problémy se zády.",
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
  "364": {
    "lead": "Privátní zážitek pro jednoho: hodinový briefing na zemi, asi 20 minut letu a rozbor po přistání. Po dosažení výšky je knipl podle stránky „už jenom váš“, takže se na rozdíl od skupinové Cessny 172 o letadlo s nikým nedělíte.",
    "included": [
      "Asi hodinový briefing: plánování letu, trasa v mapě, meteorologie a předletová prohlídka letadla, tedy práce druhého pilota.",
      "Let asi 20 minut, instruktor je po celou dobu k dispozici.",
      "Za letu nácvik orientace v prostoru a krizových situací.",
      "Poletový rozbor."
    ],
    "forWhom": [
      "Letí jeden účastník, diváci čekají na zemi.",
      "Od 16 let; kdo ještě nemá 18, letí jen s rodičem nebo s jeho souhlasem. Váha nejvýš 100 kg.",
      "Mezi podmínkami není výškový ani zdravotní limit. Máte-li pochybnosti, zeptejte se před koupí.",
      "Letiště ve výběru: Benešov, Hosín (České Budějovice), Brno-Tuřany, Karlovy Vary, Ostrava-Mošnov, Plzeň-Líně, Praha-Letňany a Roudnice nad Labem."
    ],
    "watchOut": [
      "Počet lokalit si odporuje: odznak na stránce slibuje 11, ve výběru je osm letišť. Počítejte s těmi osmi a před koupí ověřte, že jde vaše lokalita opravdu vybrat.",
      "Termíny se domlouvají na poptávku a rezervovat je třeba nejpozději 14 dní předem. Přesný čas odletu potvrdí piloti asi tři dny předem podle předpovědi a náhradní termín domluvený kvůli počasí už je závazný.",
      "Letadlo se liší podle letiště. Cessna 152 je nejčastější, ale nic vám ji nezaručuje.",
      "V datech stránky se objevují i varianty pro více osob a s delším letem, popis ale mluví jen o jednom účastníkovi a 20 minutách. Ověřte, co vybraná varianta zahrnuje.",
      "Poukaz platí 12 měsíců od vystavení, podle obchodních podmínek jde za poplatek prodloužit. Vzhledem k 14denní lhůtě a možnému přesunu kvůli počasí nekupujte na poslední chvíli."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Pilotem na zkoušku, privátní let",
        "url": "https://www.zazitky.cz/pilotem-na-zkousku-privatni-let"
      },
      {
        "label": "Zážitky.cz: Obchodní podmínky",
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
  "393": {
    "lead": "Simulátor kokpitu McDonnell Douglas DC-9 v Liberci, skutečný let to není. Pilotuje jeden člověk, instruktor mu po celou dobu radí a v kabině smějí být až tři další. Program zahrnuje 30 nebo 60 minut letu a po něm možnost prohlídky letounu MiG-21. Další najdete v přehledu [leteckých simulátorů](/letecke-simulatory).",
    "included": [
      "Let v simulátoru podle zvolené varianty. Letový čas se podle stránky počítá od chvíle, kdy se letadlo dá do pohybu.",
      "Instruktáž zhruba 15 minut, kterou stránka ve výčtu uvádí zvlášť.",
      "Instruktor po celou dobu letu: navádí a pomáhá s ovládáním.",
      "Komentovaná prohlídka areálu. Popis programu navíc zmiňuje po letu prohlídku letounu MiG-21."
    ],
    "forWhom": [
      "Pilotuje jeden člověk. V kabině s ním mohou být až tři lidé, další doprovod počká v lobby baru u projekce letu.",
      "Podle stránky by se měl účastník vejít do 120 kg a do obvodu pasu 150 cm. U hraničního případu se zeptejte předem.",
      "Věkový limit stránka nabídky neuvádí. Podle obchodních podmínek (čl. 6.2) potřebuje účastník mladší 15 let doprovod dospělého a účastník do 18 let souhlas zákonného zástupce.",
      "Podle stránky mohou zážitek absolvovat zrakově a sluchově postižení lidé. U lehčího a středně těžkého tělesného postižení platí podmínka, že člověk zvládne stát a s pomocí vylézt na kapitánskou sedačku. Těžké tělesné postižení stránka vylučuje.",
      "Na nohy patří sportovní obuv, do které se kvůli pedálům přezujete. Fotit i natáčet se smí."
    ],
    "watchOut": [
      "O certifikaci ani o pohybu simulátoru stránka nemluví. Uvádí jen skutečné přístroje v kokpitu a 270stupňovou projekci a nic z toho nedokládá. Berte to jako tvrzení nabídky.",
      "Stránka o rezervaci říká dvakrát totéž: 14 dní předem, ideálně i nejpozději. Obecná nápověda na Zážitky.cz uvádí sedm dní, potvrďte si to při rezervaci.",
      "Není jasné, zda se instruktáž počítá do 30 nebo 60 minut ani jak dlouho návštěva trvá celkem. Nápoj v lobby mezi položkami zážitku uveden není.",
      "Kdo se nedostaví včas, tomu se podle obchodních podmínek (čl. 6.1) zážitek považuje za poskytnutý a cena se nevrací.",
      "Provozní dny a hodiny stránka neuvádí, jen že jde o zážitek celoroční. Chybí i ulice a název areálu v Liberci."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Simulátor dopravního letadla Douglas",
        "url": "https://www.zazitky.cz/simulator-dopravniho-letadla-douglas"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
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
      "Limit váhy 130 kg (doporučený). Létání vylučují těhotenství, alkohol, porucha krevního oběhu a srdce a problémy se zády.",
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
  "405": {
    "lead": "Tandemový paragliding s akrobacií: po dosažení výšky pilot předvádí spirály a wingovery, stránka uvádí přetížení až 4 g. Létá se jen v Beskydech, standardně z Javorového vrchu u Třince. Od ostatních paraglidingových tandemů se liší akrobatickou částí, jejíž délku ani výšku stránka neuvádí.",
    "included": [
      "Let s tandempilotem, podle stránky 15 až 20 minut v závislosti na povětrnostních podmínkách.",
      "Bezpečnostní přilba a krátká instruktáž.",
      "Průběh: setkání s instruktorem, přesun na start, zajištění do sedačky a rozběh z kopce. Přistává se poblíž místa vzletu."
    ],
    "forWhom": [
      "Věk stránka formuluje jako „osoby starší 10 let“, jiné paraglidingové nabídky píší „od 10 let“. Hraniční věk si proto potvrďte.",
      "Doporučená maximální váha je 110 kg. Dobře stavěného a zdatného člověka zvládne instruktor podle stránky i při větší váze, uveďte to při rezervaci do poznámky.",
      "Zdravotní omezení stránka neuvádí, ani k akrobacii a přetížení, jen zákaz pro lidi pod vlivem alkoholu. Kdo má zdravotní potíže, ať se před koupí zeptá provozovatele.",
      "Poukaz je pro 1 až 2 osoby, diváci jsou vítáni."
    ],
    "watchOut": [
      "Přetížení až 4 g je tvrzení stránky a nic dalšího k němu nepřidává: chybí výška, ve které akrobacie začíná, počet figur i délka akrobatické části.",
      "Délka letu je jinak v hlavičce (10 až 20 minut) a jinak v seznamu (15 až 20 minut), vždy podle počasí.",
      "Let se natáčí kamerou na tyči, záznam se platí na místě a do dvou dnů přijde e-mailem. Zda se platí za let, nebo za každého ze dvou pasažérů, stránka neříká.",
      "Rezervace je 7 dní předem, sezóna trvá od března do listopadu a lokalita je jediná. Místo a čas sdělí instruktor den předem podle předpovědi. Pilot ruší let především kvůli bezpečnosti, i když je dole hezky, a domluví se nový termín."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Tandemový paragliding - akrobatický let",
        "url": "https://www.zazitky.cz/tandemovy-paragliding-akrobaticky-let"
      }
    ]
  },
  "435": {
    "lead": "Simulátor stíhačky Messerschmitt Bf 109 v Praze 7. Nikdo se tu neodlepí od země, skutečný let to není. Stránka ho označuje za statický, obraz jde do virtuálních brýlí Oculus Rift CV1 a létat prý lze i bez nich. Jiné nabídky najdete mezi [leteckými simulátory](/letecke-simulatory).",
    "included": [
      "Instruktáž 10 až 15 minut a potom let v simulátoru podle zvolené varianty.",
      "Zapůjčení 3D brýlí a instruktor po celou dobu, v nouzi radí vysílačkou.",
      "Program od prvního vzletu přes rovný let a zatáčení pedály až po přistání.",
      "Na výběr je vyhlídkový let nad Evropou za druhé světové války nebo bojové mise, k tomu volba letových podmínek."
    ],
    "forWhom": [
      "Pro každého, kdo chce vyzkoušet válečnou stíhačku ve virtuální realitě. Nabídka počítá s 1 nebo 2 osobami a u varianty „souboj“ pro dvě osoby mají podle textu brýle oba piloti. Jak přesně dvojice létá, stránka nevysvětluje.",
      "Stránka uvádí, že zážitek je vhodný pro osoby starší 13 let. Podmínky účasti nezletilých potvrďte při rezervaci.",
      "Stránka sama varuje před nevolností, lehkým točením hlavy nebo závratí při používání 3D brýlí.",
      "Výškové, váhové ani zdravotní limity stránka neuvádí. Pochybnosti řešte s provozovatelem před koupí.",
      "Let mohou sledovat nejvýš 3 diváci."
    ],
    "watchOut": [
      "Stránka mlčí o tom, zda se smí fotit a natáčet. Sekce o záznamu obsahuje jen vtip, že budete mít plno práce s vyhýbáním se nepřátelským náletům. Zeptejte se předem.",
      "U jednotlivých variant chybí délka letu i informace, zda se do ní počítá instruktáž. Ověřte to při výběru varianty nebo při rezervaci.",
      "Rezervovat je třeba týden předem, uvádí stránka i FAQ na Zážitky.cz. Sezóna je ale vedená jako „celoročně (termíny na poptávku)“ a jak to spolu souvisí, stránka nevysvětluje.",
      "Dostavte se nejpozději 10 minut před začátkem. Při pozdním příchodu se podle obchodních podmínek (čl. 6.1) zážitek považuje za poskytnutý a cena se nevrací.",
      "Adresa je jen „Praha 7“, ulici a číslo stránka neuvádí."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Bojový letecký simulátor letounu Messerschmitt Bf 109",
        "url": "https://www.zazitky.cz/bojovy-letecky-simulator"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "446": {
    "lead": "Tandemový seskok z horkovzdušného balónu ve výšce asi 3 000 m: s tandempilotem se přehoupnete přes okraj koše a vyskočíte. Poukaz platí pro jednoho skokana a dva pasažéry balónu, kteří letí s vámi. Od seskoku z letadla se liší výškou, kratším volným pádem a silnou závislostí na počasí.",
    "included": [
      "Privátní let horkovzdušným balónem do výšky asi 3 000 m a tandemový seskok pro jednu osobu.",
      "Volný pád zhruba 30 až 45 sekund, pak asi 3 až 5 minut pod padákem zpět na letiště odletu. Celý program trvá přibližně tři hodiny, počítáno od rozbalování a nafukování balónu.",
      "Nezbytná povolení pro let i seskok a zajištění řídícího seskoku.",
      "Zapůjčení ochranných brýlí pro skokana. Dioptrické brýle ani čočky nejsou překážka.",
      "Dvě místa v koši pro doprovod a křest prvoletců pro tyto dvě osoby."
    ],
    "forWhom": [
      "Skáče jedna osoba, další dvě jsou pasažéři balónu a smějí fotit i filmovat. Kdo chce jen let balónem, najde ho mezi [lety balónem](/let-balonem).",
      "Stránka vylučuje těhotné ženy, osoby s akutními potížemi pohybového aparátu, s epilepsií a se závažnou srdeční chorobou. Mladší 18 let jen se souhlasem rodičů. Minimální věk stránka neuvádí.",
      "Maximální váha je podle textu 100 kg na osobu, ačkoli rezervační formulář přijímá i vyšší hodnoty. Zda limit platí i pro pasažéry balónu, stránka neříká, proto hodnotu potvrďte při rezervaci.",
      "Diváci jsou po předchozí dohodě vítáni v místě odletu a přistání."
    ],
    "watchOut": [
      "Kapacita je omezená: za kalendářní rok se skáče jen pro 10 osob. Zážitek podle stránky vyžaduje povolení Úřadu pro civilní letectví, souhlas letiště a součinnost s řízením letového provozu.",
      "Nutné je mimořádně dobré počasí (vítr, viditelnost, žádná nízká oblačnost). Balón nemůže létat v silném větru, dešti ani sněhové přeháňce. Stránka sama upozorňuje, že najít vhodný den může být složitější, a poukaz platí 12 měsíců, takže s rezervací raději neotálejte. Zrušení kvůli počasí stránka neřeší, obecně je upraveno v čl. 5.7 obchodních podmínek.",
      "Rezervace je nejpozději 30 dní předem. Sezóna trvá od března do listopadu a jediná lokalita je letiště České Budějovice.",
      "Záznam od organizátora stránka nenabízí, fotit a natáčet mohou jen ti, kdo neskáčou. Certifikát na stránce není."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Tandemový seskok padákem z balónu",
        "url": "https://www.zazitky.cz/tandemovy-seskok-padakem-z-balonu"
      },
      {
        "label": "Zážitky.cz, obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "447": {
    "lead": "Svatební obřad v balónu: „ano“ si řeknete ve vzduchu, po přistání následuje křest a přípitek. Balón a pilota zajistí nabídka; oddávajícího, svědky, zapisovatelku i fotografa musíte přivést sami. Letenky jsou pro sedm osob a startuje se z místa, které si zvolíte v rámci Česka.",
    "included": [
      "Letenky pro sedm osob, balón a pilot.",
      "Vyhlídkový let po obřadu ve vzduchu, zhruba hodinu podle počasí.",
      "Křest prvoletců a sklenka sektu po přistání.",
      "Odvoz zpět na místo setkání, kde vám může pogratulovat zbytek svatebčanů."
    ],
    "forWhom": [
      "Snoubenci starší 18 let. Ostatní pasažéři musí mít výšku nad 140 cm a věk aspoň 7 let.",
      "Šaty a oblek promyslete tak, aby šlo při nástupu i výstupu přelézt hranu koše (asi 140 cm) a celý let vydržet ve stoje. Těhotné ženy nelétají.",
      "Hosté mohou přijet na místo odletu i přistání a jet za balónem autem, do koše se ale nevejdou: letenky jsou jen pro sedm osob.",
      "Kdo nemá oddávajícího ani svědky, musí je nejdřív sehnat. Nabídka je nezajišťuje."
    ],
    "watchOut": [
      "Složení koše si stránka odporuje. Popis mluví o vás dvou, svědcích, oddávajícím a pilotovi, program navíc o zapisovatelce a fotografovi. Počet svědků stránka neuvádí, ani zda se pilot počítá do sedmi. Než někoho pozvete, nechte si obsazení koše potvrdit.",
      "Právní stránku obřadu ve vzduchu stránka nevysvětluje: mluví o „oddávajícím“, ale neříká, zda je takový obřad platný a kdo ho smí vést. Rada: ověřte to u příslušného úřadu dřív, než na letu postavíte celou svatbu.",
      "Stránka doporučuje mít obřad připravený i na zemi. Když pilot let zruší, nabízí podle ní možnost proletět se během následujících 12 měsíců v privátním balónu, už jako novomanželé.",
      "Rezervovat je nutné nejpozději 30 dnů předem, stránka doporučuje 1 až 3 měsíce. Přesný čas a místo domluví pilot, který se ozve večer před letem do 20:00. Let trvá přibližně hodinu, ve variantě je ale uvedeno tři hodiny celého zážitku; s tím počítejte při plánování svatebního dne.",
      "Křestní list seznam obsahu nezmiňuje. Hmotnostní limit v textu chybí; zeptejte se, zda pro pasažéry platí."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Svatba v balónu",
        "url": "https://www.zazitky.cz/svatba-v-balonu"
      }
    ]
  },
  "578": {
    "lead": "Ultralehký letoun s pilotem jen pro vás: půlhodinový briefing a 30 minut letu z Letňan, z Mošnova nebo z Miroslavi na Znojemsku. Oproti skupinovému termínu se nestřídáte s dalšími zájemci a nečekáte na zemi, až na vás přijde řada.",
    "included": [
      "Briefing asi 30 minut: funkce druhého pilota a plánování letu.",
      "Let dlouhý 30 minut, po celou dobu s pilotem, který se věnuje jen vám.",
      "Ultralehký letoun, v Praze P92 Echo, v Ostravě ALTO."
    ],
    "forWhom": [
      "Letí jeden účastník. Diváci sledují start a přistání z bezpečného místa.",
      "Věkový limit je 16 let, nezletilí jen s rodičem nebo s jeho souhlasem, a vážit smíte nejvýš 100 kg.",
      "Pro ty, kdo nechtějí čekat na řadu ve skupině."
    ],
    "watchOut": [
      "Polovina programu se neletí: briefing trvá stejně dlouho jako let.",
      "Miroslav je ve výběru letišť, ale textový popis stránky zná jen Prahu a Ostravu a typ letounu uvádí jen pro ně. Ověřte při rezervaci.",
      "Lhůta na rezervaci je 14 dní a termín se sjednává na poptávku.",
      "O zdravotních ani výškových omezeních stránka nic neříká, zeptejte se při rezervaci."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Pilotem malého letounu na zkoušku, privátní let",
        "url": "https://www.zazitky.cz/pilotem-maleho-letounu-na-zkousku-privatni-let"
      }
    ]
  },
  "586": {
    "lead": "Sdílený let nad Českým Krumlovem se startem u zámeckých zahrad a výškou zhruba 300 metrů; trasu i místo přistání určují vítr a pilot. Nabídka má jedinou lokalitu, objednat lze až čtyři osoby a sezóna trvá od dubna do října.",
    "included": [
      "Let horkovzdušným balónem trvá přibližně hodinu; celý zážitek podle stránky zabere asi tři hodiny.",
      "Potřebná povolení pro let nad městem.",
      "Křest prvoletců a přípitek na konci letu.",
      "Odvoz zpět ke startu.",
      "Pomoc s přípravou balónu, pokud budete chtít; povinná není."
    ],
    "forWhom": [
      "Jednotlivci až čtyřčlenná parta. Koš je sdílený, poletí s vámi další pasažéři.",
      "Nutná je výška nad 140 cm, věk od 7 let a hmotnost do 119 kg. Dítě do 15 let letí s dospělým. Kdo váží 120 kg a víc, může za příplatek snížit obsazení koše o jednu osobu; domluvit se to musí předem.",
      "Kdo přelezne hranu koše a vydrží celý let stát. Těhotné ženy nelétají. Pasažérům s handicapem nabízí stránka na vyžádání let za zvláštních podmínek, a to v Benešově nebo v Jihočeském kraji.",
      "Kdo chce romantiku ve dvou nebo let jen s rodinou, tomu stránka sama doporučuje soukromý let. Ceny takových letů rozebírá [článek o balónu pro dva](/blog/let-balonem-pro-dva-cena)."
    ],
    "watchOut": [
      "Typ balónu se ze stránky nepozná. Text nabízí klasický balón pro 5 až 12 pasažérů nebo největší balón pro 24, panel objednávky ale uvádí jen „klasický balón“. Zda si typ vyberete, nebo o něm rozhodne provozovatel, stránka neříká.",
      "Výhled na zámek a historické centrum stránka slibuje, ale přiznává, že balón nemusí letět přímo nad nimi.",
      "Pilot se ozývá sám: u ranního letu večer před ním nejpozději do 20:00, u odpoledního a večerního v den letu do 14:00. Rezervovaný čas je jen orientační. Když se pilot neozve, stránka radí poslat SMS.",
      "Rezervace je možná nejpozději 14 dnů předem, stránka ale radí 1 až 3 měsíce. Termíny se podle stránky aktualizují průběžně, a když žádný nevyhovuje, doporučuje poukaz si ponechat a rezervaci nedokončovat. Let se může zrušit i na místě, což stránka označuje za ojedinělé.",
      "Hmotnost uvádějte pravdivě: při nepravdivém údaji hrozí doplatek na místě nebo vyloučení z letu, stránka připouští i převážení."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Let balónem nad Českým Krumlovem",
        "url": "https://www.zazitky.cz/let-balonem-nad-ceskym-krumlovem"
      }
    ]
  },
  "622": {
    "lead": "Stejný pobyt na zámku Radešín na dvě noci, ale let je podle stránky s nejvýš šesti osobami plus pilotem, bez zaručeného soukromí a bez vína na pokoji. Kdo chce balón jen pro sebe, tomu stránka doporučuje pobyt s privátním letem, který stojí víc.",
    "included": [
      "Dvě noci v zámeckém pokoji pro dvě osoby; pokoje mají sociální zařízení, Wi-Fi a výhled na zámecký rybníček.",
      "Stravování: dvakrát snídaně (švédský stůl), dvakrát večeře (z jídelního lístku) a káva bez omezení.",
      "Soukromá prohlídka zámku včetně muzea o historii výroby horkovzdušných balónů.",
      "50minutový let, v koši nejvýš šest osob a pilot. Po doletu slavnostní ceremoniál se šampaňským a odvoz zpět na zámek."
    ],
    "forWhom": [
      "Dvě osoby, počet je pevný.",
      "Kdo nepotřebuje koš jen pro sebe a chce zámecký pobyt za nižší cenu než u soukromého letu.",
      "V sekci Omezení jsou jen doplatky za pejska a přistýlku, žádný věkový, výškový ani váhový limit. Neznamená to, že limity neplatí. Ověřte je před koupí."
    ],
    "watchOut": [
      "Stránka nevysvětluje, zda se do „maximálně 6 osob“ počítáte i vy dva a zda může koš obsadit i jiná skupina. Zeptejte se, s kolika lidmi poletíte.",
      "Termíny jsou dvě varianty: v jedné se nastupuje v pátek, v druhé od neděle do čtvrtka. Sesterský pobyt se soukromým letem píše o víkendových termínech, tady to stránka neuvádí, kalendář ale nabízí stejné dny nástupu. Přesný den se určuje až po nákupu, rezervace musí proběhnout nejpozději 30 dnů předem.",
      "Kdy poletíte, se řeší až po příjezdu na zámek; čas odjezdu stránka neuvádí.",
      "V seznamu chybí víno na pokoji, křest prvoletců i křestní list; o nápojích k večeři mimo kávu stránka mlčí."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Pobyt na zámku s polopenzí a let horkovzdušným balónem",
        "url": "https://www.zazitky.cz/pobyt-na-zamku-let-balonem"
      }
    ]
  },
  "623": {
    "lead": "Dvě noci na zámku Radešín na Vysočině a soukromý let balónem: v koši jen vy dva a pilot. Proti sesterské nabídce, kde může v koši letět až šest osob plus pilot, přibývá soukromí a láhev vína na pokoji; zbytek programu se podle seznamů obsahu shoduje. Pobyt je vždy pro dvě osoby.",
    "included": [
      "Zámecký pokoj pro dvojici na dvě noci.",
      "Dvě snídaně formou švédského stolu, dvě večeře z jídelního lístku a bezedná káva po celou dobu pobytu.",
      "Láhev vína na pokoji.",
      "Soukromá prohlídka zámku a muzea historie výroby horkovzdušných balónů, které sídlí přímo v zámku.",
      "Let v délce 50 minut jen pro vás dva a pilota, doprava zpět na zámek a ceremoniál se šampaňským."
    ],
    "forWhom": [
      "Dvojice, počet osob se nemění.",
      "Kdo chce mít po letu co dělat: stránka v okolí jmenuje klášter ve Žďáru nad Sázavou, Zelenou horu, Centrum EDEN, ochutnávku piva v místním pivovaru a cyklostezky s možností půjčit si elektrokolo.",
      "Věkové, výškové a váhové limity ani těhotenství stránka nezmiňuje. Nechte si je potvrdit, než pobyt koupíte.",
      "Pejska nebo přistýlku lze doobjednat za příplatek."
    ],
    "watchOut": [
      "Termíny si odporují: údaje o sezóně a omezeních mluví o víkendových termínech a rezervaci jen od pátku, přitom se na téže stránce prodává varianta s názvem „Radešín (neděle–čtvrtek)“. Ověřte, který režim platí pro zvolenou variantu.",
      "Den ani hodinu letu nabídka neurčuje: po příjezdu se domluvíte, zda poletíte ráno, nebo večer. Čas odjezdu stránka neuvádí, pokoj je připravený od 12 hodin. Den před nástupem vás kvůli počasí kontaktují; když se neletí, přesune se let i pobyt na náhradní termín.",
      "Slovo „polopenze“ v nabídce znamená podle seznamu dvě snídaně a dvě večeře. Nápoje mimo kávu a víno na pokoji seznam neuvádí, dietní požadavky domluvte před příjezdem.",
      "Termín rezervujte nejpozději 30 dnů předem, přesné datum se přitom podle stránky domlouvá až po zakoupení.",
      "Odznak „Výměna zážitku kdykoliv zdarma“ neplatí opakovaně: obchodní podmínky (čl. 7.1) uvádějí bezplatnou změnu jen jednou za dobu platnosti. Odznak „Vrácení zážitku až do 60 dnů“ není zdarma, nad zákonnou 14denní lhůtu jde o placenou službu."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Pobyt na zámku a romantický let balónem ve dvou",
        "url": "https://www.zazitky.cz/pobyt-na-zamku-romanticky-let-balonem"
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
  "664": {
    "lead": "Ranní let nad rakouskými Alpami se startem ve Filzmoosu v rámci zimní balónové fiesty. Stránka uvádí jediné místo a jediný týden fiesty; do ceny nepatří cesta ani nocleh. Objednat lze jedno nebo dvě místa.",
    "included": [
      "Let se startem ve Filzmoosu, podle seznamu obsahu 90 až 120 minut.",
      "Místo v balónu. Stránka u něj uvádí kapacitu 3 až 5 osob, ale nevysvětluje, s kým poletíte ani zda jde o celkové obsazení koše. Podle ní za příznivého počasí startuje každé ráno až 50 balónů (údaj nabídky).",
      "Křest prvoletců po přistání.",
      "Doprava zpět na místo odletu."
    ],
    "forWhom": [
      "Jedna nebo dvě osoby v jedné objednávce.",
      "Pasažér musí mít výšku nad 140 cm, věk nejméně 7 let a hmotnost nejvýš 119 kg. Děti do 15 let letí v doprovodu dospělého.",
      "Kdo při nástupu i výstupu přelezne hranu koše (asi 140 cm) a celý let vydrží stát. Těhotné ženy nelétají.",
      "Kdo počítá s brzkým ránem a téměř celým dnem: balóny vzlétají mezi 8. a 9. hodinou a k autu se vrátíte nejdříve kolem druhé až půl třetí odpoledne, klidně později. Létá se od neděle do čtvrtka."
    ],
    "watchOut": [
      "Jediný termín na stránce patří k už uplynulému ročníku fiesty, jedno z polí zmiňuje dokonce ještě starší. Poukaz se přesto dál prodává a nový ročník stránka neuvádí. Před koupí si na Zážitky.cz ověřte, zda prodej platí pro příští fiestu. Den letu se vybírá až po nákupu.",
      "Rezervovat je nutné nejpozději 30 dnů předem.",
      "Délku letu stránka uvádí čtyřmi způsoby: 90 až 120 minut, až dvě hodiny, zpravidla 2 až 2,5 hodiny a ve volbě varianty 1,5 hodiny. Berte ji jako orientační.",
      "Sekt ani křestní list v seznamu obsahu nejsou. Pravidlo pro zrušení kvůli počasí stránka u letu nad Alpami neuvádí a obecné FAQ o letech balónem Alpy v pravidlech nezmiňuje. Postup si potvrďte předem."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Exkluzivní let balónem nad Alpami",
        "url": "https://www.zazitky.cz/let-balonem-nad-alpami"
      },
      {
        "label": "Zážitky.cz, blog: 23 nejčastějších dotazů o letu balónem",
        "url": "https://www.zazitky.cz/blog/faq-let-balonem"
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
  "702": {
    "lead": "Celý největší balón jen pro vaši skupinu: podle stránky koš pro 24 pasažérů, výška 37 metrů, start z místa, které si zvolíte v Česku. Cena je za celý let a nezávisí na počtu lidí, stránka ale uvádí minimum 16 pasažérů. Sezóna trvá od května do října.",
    "included": [
      "Přeprava balónu a doprovodných vozidel na místo odletu.",
      "Let trvá zhruba hodinu, s celým zážitkem počítejte až na tři hodiny.",
      "Křest prvoletců, přípitek a křestní list na památku.",
      "Odvoz zpět na místo odletu a možnost pomoci s balením balónu po přistání."
    ],
    "forWhom": [
      "Skupina, která se dá dohromady sama. Sdílený let s cizími lidmi je jiná nabídka. Najdete ji mezi [lety balónem](/let-balonem).",
      "Podmínky pro každého pasažéra: výška nad 140 cm, věk aspoň 7 let (děti do 15 let s dospělým), hranu koše je nutné přelézt a celý let vydržet ve stoje. Těhotné ženy nelétají.",
      "Kdo chce vlastní místo startu, potřebuje travnatý pozemek nejméně 50 × 50 m bez překážek s příjezdovou cestou, souhlasem majitele a odstupem 15 až 20 km od státní hranice.",
      "Diváci mohou přijít na místo odletu a let sledovat autem."
    ],
    "watchOut": [
      "Stránka si odporuje v minimu i ve váze. Nadpis slibuje let „jen pro vás“, přitom balón podle ní vzlétne až od 16 pasažérů; co se stane, když se skupina nesejde, nevysvětluje. Váhových pravidel je několik (celkový limit, limit na osobu, tabulka pro menší skupiny) a spolu nesedí. Minimum i váhu potvrďte dřív, než skupinu svoláte.",
      "Rezervace je možná nejpozději 21 dnů předem, stránka radí 1 až 3 měsíce. Přesný termín se sjednává až po zakoupení. Doplňující informace na stránce stále začínají větou o termínech vypisovaných pro starší sezónu, proto údaje ověřte.",
      "Seznam míst, kde se pravidelně létá, si na stránce odporuje. Nechte si místo potvrdit: jiné než vypsané místo se řeší e-mailem na Zážitky.cz s názvem obce, GPS souřadnicemi a odkazem na mapy.cz.",
      "Stránka varuje, že ze země může počasí vypadat v pořádku a přesto se neletí. Let se pak přesouvá na jiný den, což u velké skupiny může být složité (rada, ne údaj stránky)."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Privátní let největším balónem pro 24 pasažérů",
        "url": "https://www.zazitky.cz/privatni-let-nejvetsim-balonem"
      }
    ]
  },
  "708": {
    "lead": "Simulátor F-16 Fighting Falcon v Brně, nikoli skutečný let. Kokpit má podle stránky odpovídat originálu a před sebou máte půlkruhové plátno. Podle popisu se střílí z kanónu i raketou. Minimální výška je podle stránky 150 cm.",
    "included": [
      "Instruktáž asi 10 minut, která se do délky zážitku nepočítá. Samotný let trvá 30 nebo 60 minut.",
      "Instruktor po celou dobu a pilotní průkaz s vaším jménem.",
      "Třicetiminutová varianta zahrnuje základní letové funkce, základní akrobacii a útok na pozemní i vzdušné cíle. Šedesátiminutová navíc nabízí pokročilou akrobacii."
    ],
    "forWhom": [
      "Stránka uvádí, že zážitek je vhodný pro všechny od 10 let a od výšky 150 cm, maximální hmotnost pilota je 120 kg.",
      "Pilotuje jeden účastník, doprovod v počtu až 3 osob se smí dívat, fotit i natáčet.",
      "Horní výšku ani sníženou pohyblivost stránka neřeší. Kdo je velký nebo hůř pohyblivý, ať si u provozovatele ověří, zda se do kokpitu vejde.",
      "Zda děti od 10 let potřebují doprovod rodičů, stránka u této nabídky neuvádí, na rozdíl od Spitfiru a F/A-18, kde je výslovně „jen s rodiči“. Ověřte při rezervaci."
    ],
    "watchOut": [
      "U sezóny stojí „celoročně (středa–neděle)“. Pondělí a úterý tedy zřejmě nejsou k dispozici, potvrďte při výběru termínu.",
      "Limit 150 cm se rozchází s nabídkou souboje F-16 proti F/A-18, která zahrnuje simulátor F-16 a uvádí jen 120 cm. Držte se přísnějšího údaje, dokud provozovatel nepotvrdí jiný.",
      "O pohybu kabiny a o certifikaci se stránka nezmiňuje."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Simulátor stíhačky F-16 Fighting Falcon",
        "url": "https://www.zazitky.cz/simulator-stihacky-f16-ff"
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
  "714": {
    "lead": "Simulátor F/A-18 Hornet v Brně, jen simulace bez skutečného letu. Podle stránky má repliku kokpitu, obraz promítaný na kopuli dvěma projektory, funkční radar a zbraně. Na rozdíl od nabídky F-16 zahrnuje i trénink startu a přistání na letadlové lodi. Pilotujete sami, 30 nebo 60 minut.",
    "included": [
      "Asi 10 minut instruktáže a let dlouhý 30 nebo 60 minut, podle zvolené varianty.",
      "Jmenovitý pilotní průkaz.",
      "Program: test obratnosti, vzdušná akrobacie, útok na vzdušné i pozemní cíle a trénink startu a přistání na letadlové lodi."
    ],
    "forWhom": [
      "Létá jediný účastník, instruktor se drží nablízku.",
      "Děti smějí jen s rodiči, od 10 let a od výšky 120 cm. Když menší na ovladače nedosáhnou, mohou sedět na klíně doprovodu.",
      "Váha nejvýš 120 kg, výška nejvýš 195 cm. Nástup do kokpitu je podle stránky důvodem, proč zážitek nevyhovuje osobám se sníženou pohyblivostí.",
      "Až 3 osoby doprovodu. Foto a video smí pořizovat doprovod, účastník až po přistání."
    ],
    "watchOut": [
      "Radar, zbraně a kopule jsou tvrzení stránky, ne ověřená technická specifikace.",
      "Stránka neříká, zda se do 30minutové varianty vejde celý výčet programu včetně letadlové lodi.",
      "O pohybu kabiny a o certifikaci nabídka mlčí. Na místo nechoďte dřív než 5 minut před termínem."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Simulátor stíhačky F/A-18 Hornet",
        "url": "https://www.zazitky.cz/simulator-stihacky-fa18"
      }
    ]
  },
  "715": {
    "lead": "Souboj F-16 proti F/A-18 na dvou simulátorech v Brně, nejde o skutečný let. Každý ze dvou účastníků pilotuje jeden ze simulátorů a 60 minut spolu buď soupeří, nebo se spojí proti počítačovým protivníkům. Podobné nabídky najdete v přehledu [leteckých simulátorů](/letecke-simulatory).",
    "included": [
      "Instruktáž asi 10 minut nad rámec zážitku a 60 minut letu na dvou simulátorech.",
      "Souboj proti sobě nebo společný boj proti počítačovým protivníkům; dál vyhýbání se střelám a létání ve formaci, u čehož instruktor poradí.",
      "Možnost prostřídat se na obou simulátorech.",
      "Pilotní průkaz se jménem pilota na památku."
    ],
    "forWhom": [
      "Pro dvojici, v níž každý pilotuje vlastní stíhačku.",
      "Stránka připouští děti od 10 let a od 120 cm, ale jen v doprovodu rodičů, protože menší nemusí na ovladače dosáhnout.",
      "Stránka uvádí horní limity 120 kg a 195 cm a označuje zážitek za nevhodný pro osoby se sníženou pohyblivostí kvůli nástupu do kokpitu."
    ],
    "watchOut": [
      "Doprovod: text nabídky připouští až 6 diváků, kdežto pokyn k příchodu jen „až 3 další osoby“. Počítejte s třemi, dokud to nepotvrdí provozovatel.",
      "Stránka žádá minimum 120 cm, ale samostatné F-16 v Brně 150 cm. Kdo měří mezi 120 a 150 cm, ať si nechá potvrdit, zda se do kokpitu F-16 vejde.",
      "U samostatného F-16 je provoz od středy do neděle. Zda to platí i pro souboj, stránka neuvádí.",
      "Zda je uvedená cena za oba piloty dohromady, z nabídky není zřejmé."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Souboj stíhaček F-16 vs. F/A-18",
        "url": "https://www.zazitky.cz/souboj-stihacek"
      }
    ]
  },
  "716": {
    "lead": "Messerschmitt Bf 109 proti Spitfiru na dvou simulátorech v Brně, létá se jen virtuálně. Každý ze dvou účastníků sedí ve vlastním kokpitu a spolu buď bojují, nebo společně čelí počítačovým protivníkům. Varianta je jediná, 60 minut.",
    "included": [
      "Instruktáž asi 10 minut mimo dobu zážitku a 60 minut letu na dvou simulátorech.",
      "Souboj proti sobě navzájem nebo společný boj proti počítačovým protivníkům, na požádání s doprovodem bombardérů.",
      "Na přání střídání účastníků mezi oběma simulátory.",
      "Pilotní průkaz s vaším jménem na památku, jen není jasné, zda jeden, nebo pro oba."
    ],
    "forWhom": [
      "Pro dvojici, která se chce poměřit navzájem; radí instruktor.",
      "Dolní hranice pro děti je 10 let a 120 cm, vždy s rodiči. Kvůli rozměrům kokpitu by menší mohly na ovladače nedosáhnout.",
      "Váha nejvýš 120 kg a výška nejvýš 195 cm, pro osoby se sníženou pohyblivostí to podle stránky není vhodné. Limity nejsou uvedeny zvlášť pro každého z dvojice, ověřte je proto u obou.",
      "Doprovod až 6 osob se smí dívat, fotit i natáčet."
    ],
    "watchOut": [
      "Stránka výslovně neříká, zda cena platí za dvojici, nebo za osobu. Ověřte před koupí, hlavně když kupujete jako dárek.",
      "Stránka nepopisuje ani to, na co se při souboji díváte: virtuální brýle nezmiňuje, mluví jen o replikách kokpitů. Pohyb ani certifikace v popisu nejsou."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Simulátor souboje stíhaček pro dva",
        "url": "https://www.zazitky.cz/souboj-letounu"
      }
    ]
  },
  "717": {
    "lead": "Vyhlídkový let vzducholodí na zhruba půl hodiny, kterou stránka označuje za jedinou v Česku. V otevřeném koši je místo nejvýš pro tři pasažéry, start i přistání jsou na jednom místě; stránka uvádí lokality Brno a Praha (Karlštejn). S pilotem i mezi sebou komunikujete přes sluchátka s interkomem.",
    "included": [
      "Sluchátka s interkomem pro komunikaci s pilotem i mezi sebou.",
      "Vyhlídkový let, podle seznamu obsahu 25 až 30 minut.",
      "Pamětní list vzduchoplavce a sklenka sektu, alkoholického i nealkoholického.",
      "Sladké a slané občerstvení po přistání.",
      "Trasa podle stránky: u Prahy nad lomy Malá a Velká Amerika a kolem Karlštejna, v Brně nad Petrovem, Špilberkem, Kraví horou, náměstím Svobody a Zelným trhem."
    ],
    "forWhom": [
      "Jedna, dvě nebo tři osoby. Za dvě i za tři nabízí stránka jednu společnou cenu, ne cenu za osobu.",
      "Váhový limit je podle stránky 100 kg na osobu. Těhotné ženy nelétají. Věk ani výšku stránka neuvádí.",
      "Kdo se obleče teple: podle stránky ve vzducholodi fouká. Na místě může být rosa nebo mokro.",
      "Za letu lze fotit i natáčet a pilot seznámí pasažéry s ovládáním a parametry lodi."
    ],
    "watchOut": [
      "V datech vložených do stránky nabídky (pole s doplňujícími informacemi) stojí upozornění, že kvůli poruše vzducholodi zážitek dočasně nelze rezervovat a termín opravy není znám; jako řešení uvádí let balónem, výměnu poukazu za jiný zážitek nebo čekání s bezplatným prodloužením poukazu. Zobrazená stránka to upozornění neukazuje a nabízí objednání poukazu i první volné termíny, takže z ní nepoznáte, zda platí. Před koupí si ověřte na Zážitky.cz, zda lze termín rezervovat.",
      "Za překročení váhového limitu stránka uvádí nadlimitní příplatek na osobu. Podmínky si ujasněte při rezervaci, ne až na místě.",
      "Délka letu se liší: 30 minut v názvu varianty a 25 až 30 minut v seznamu obsahu. Stránka doporučuje ranní lety, večerní se podle ní ruší častěji. Trasu určuje pilot podle počasí, vyjmenované pamětihodnosti proto nejsou záruka.",
      "Termín se rezervuje nejpozději 14 dnů předem, pilot upřesní čas a místo 2 dny před odletem. Sezóna trvá od dubna do října. Za silného větru, deště nebo sněhové přeháňky se neletí."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Exkluzivní let vzducholodí",
        "url": "https://www.zazitky.cz/let-vzducholodi"
      }
    ]
  },
  "718": {
    "lead": "Simulátor Spitfiru v Brně, skutečné letadlo to není. Ovládání a budíky v kokpitu podle stránky odpovídají opravdovému letadlu a obraz jde na půlkruhové plátno se zorným polem 160°; virtuální brýle stránka nezmiňuje. Pilotuje jeden člověk, létá se 30 nebo 60 minut.",
    "included": [
      "Po přibližně 10 minutách instruktáže následuje 30 nebo 60 minut letu, podle varianty.",
      "Pilotní průkaz s vaším jménem na památku.",
      "Program podle popisu: seznámení s ovládáním, test obratnosti, vzlet a přistání, letecká bitva a útok na pozemní cíle."
    ],
    "forWhom": [
      "Pro jednoho pilota, instruktor je po ruce.",
      "Děti od 10 let a od výšky 120 cm, jen v doprovodu rodičů. Menší děti nemusí kvůli skutečným rozměrům kokpitu dosáhnout na ovladače, pak mohou sedět na klíně doprovodu.",
      "Horní limity jsou 120 kg a 195 cm. Pro osoby se sníženou pohyblivostí je zážitek podle stránky nevhodný, kvůli reálnému nástupu do kokpitu.",
      "Až 3 osoby doprovodu se smějí dívat, fotit i natáčet."
    ],
    "watchOut": [
      "Stránka neuvádí, o kterou verzi Spitfiru jde.",
      "Pohyb kabiny ani certifikaci stránka neuvádí. Popis simulátoru zato tvrdí, že je ideální na „plně manuální létání bez pomoci počítačů“.",
      "Stránka uvádí „ideálně 14 dní předem“ a zároveň, že termín je třeba rezervovat nejpozději 14 dnů před konáním. FAQ na Zážitky.cz počítá s minimem 7 dní, rozhodující údaj potvrďte v rezervaci.",
      "Vchod je zezadu, z vnitrobloku budovy, a dostavit se máte nejvýše 5 minut před termínem, ne dřív. V téže budově je kavárna a restaurace."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Simulátor stíhacího letounu Supermarine Spitfire",
        "url": "https://www.zazitky.cz/simulator-spitfire"
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
  "757": {
    "lead": "Simulátor s VR brýlemi v Brně, který stránka popisuje jako pohyblivý: elektrická plošina se šesti nohami, zdvih až 60 cm, náklony do 30°. O skutečný let nejde. Pilotuje jeden člověk a vybírá si z vojenských i civilních letounů a vrtulníků. Další nabídky jsou mezi [leteckými simulátory](/letecke-simulatory).",
    "included": [
      "Instruktáž zhruba 10 minut a pomoc s nastavením VR brýlí. Instruktor je podle stránky nablízku pro případ potřeby.",
      "Let 30 nebo 60 minut podle varianty.",
      "Vojenský let (stránka zmiňuje i použití zbraní v misích) s letouny P-51 Mustang, F-14 nebo F/A-18 či s vrtulníkem Mi-8. Civilní vyhlídkový let s Cessnou 172 nebo vrtulníkem EC135.",
      "Ovládání kniplem, pedály a plynovou pákou, u vrtulníku kolektivem."
    ],
    "forWhom": [
      "Pilotuje jeden člověk, doprovod může být až tři lidé. Ti smějí fotit i natáčet.",
      "Váhový limit stránka udává 100 kg a neříká, zda platí jen pro pilotujícího.",
      "U dětí stránka doporučuje věk od 10 let, jde ale jen o doporučení. Podle obchodních podmínek (čl. 6.2) smějí účastníci mladší 15 let jen s doprovodem dospělého.",
      "Do VR brýlí se vejdete i se standardně velkými dioptrickými brýlemi. Hodí se pohodlné oblečení a sportovní boty.",
      "Výšku a zdravotní omezení stránka neuvádí, zeptejte se předem."
    ],
    "watchOut": [
      "Pohyblivost i technické údaje (šest nohou, 60 cm, 30°) pocházejí jen z popisu nabídky. Certifikaci stránka nezmiňuje a neuvádí ani, že jde o repliku kokpitu určitého letadla.",
      "Instruktáž se počítá zvlášť: 10 minut plus 30 nebo 60 minut letu. Celkovou dobu návštěvy stránka neuvádí.",
      "Rezervovat je potřeba dva týdny předem: stránka udává 14 dní jako doporučení i jako nejzazší lhůtu, obecná nápověda na Zážitky.cz sedm dní.",
      "Stránka uvádí jen město Brno, bez ulice a názvu provozovny. Adresu a praktické pokyny pošlou Zážitky.cz e-mailem po rezervaci (OP čl. 4.3).",
      "Stránka zmiňuje kavárnu a restauraci ve stejné budově, mezi položkami zážitku ale nejsou."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Pohyblivý letecký simulátor ve virtuální realitě",
        "url": "https://www.zazitky.cz/pohyblivy-simulator-ve-vr"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "761": {
    "lead": "Tandemový seskok ze 4 000 m u rakouského Zell am See: jste připoutaní k instruktorovi a přibližně minutu padáte volným pádem. Nejde o kurz ani o samostatný skok. Od českých tandemů se liší zemí, sezónou od listopadu do března a tím, že se termíny vypisují jen asi čtyřikrát ročně.",
    "included": [
      "Tandemový seskok ze 4 000 m se zkušeným instruktorem: asi minuta volného pádu a 5 až 10 minut pod otevřeným padákem.",
      "Zapůjčení ochranných brýlí, kalhot a bundy. Kombinéza v seznamu není.",
      "Na celý program vyhraďte tři hodiny. Přesný čas příjezdu pošle instruktor SMS asi 1 až 2 dny předem."
    ],
    "forWhom": [
      "Podle stránky může skákat každý ve věku 10 až 100 let, kdo netrpí epilepsií nebo závažnou srdeční chorobou. Jiná zdravotní omezení stránka nevypisuje.",
      "Bez doplatku se skáče do 90 kg, nad 110 kg seskok nelze uskutečnit. V pásmu mezi těmito hodnotami se na místě doplácí podle ceníku provozovatele. Hranice 90 kg se na stránce objevuje jednou jako strop bez doplatku a podruhé jako začátek příplatkového pásma. Kdo je kolem ní, ať se zeptá předem.",
      "Poukaz je pro jednu osobu, diváci mohou fandit ze země.",
      "Termíny padají do zimní poloviny roku: vezměte termoprádlo, teplé oblečení, pevnou obuv, rukavice, čepici a nákrčník. Bez poukazu vás neodbaví."
    ],
    "watchOut": [
      "Termíny se vypisují přibližně čtyřikrát ročně a sezóna trvá od listopadu do března. Poukaz platí 12 měsíců, proto si vypsané termíny raději ověřte dřív, než ho koupíte nebo darujete.",
      "Stránka uvádí ideálně 3 měsíce předem a zároveň nejpozději 90 dní. Obecná nápověda Zážitky.cz naopak říká, že rezervovat jde nejvýše 90 dní dopředu, proto lhůtu potvrďte při rezervaci. Do poznámky napište preferovaný čas, přesný potvrdí organizátoři.",
      "Příplatky se řeší na místě. Za váhu se doplácí podle ceníku provozovatele, palivový příplatek se platí v hotovosti a může se účtovat kvůli cenám paliva. Rezervací navíc souhlasíte s obchodními podmínkami provozovatele, které jsou na jeho webu.",
      "Vlastní záznam nelze při seskoku pořizovat. Videozáznam se dokupuje nebo kupuje na místě, cenu stránka neuvádí.",
      "Provozovatele stránka nejmenuje a chybí adresa odbavení (jen název letiště a souřadnice). Pro zrušení kvůli počasí v Alpách žádná pravidla nemá, platí obecné podmínky (čl. 5.7)."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Tandemový seskok padákem nad Alpami",
        "url": "https://www.zazitky.cz/tandemovy-seskok-padakem-alpy"
      },
      {
        "label": "Zážitky.cz, obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      },
      {
        "label": "Zážitky.cz, nápověda",
        "url": "https://www.zazitky.cz/pomoc"
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
  "834": {
    "lead": "Balíček, ve kterém jeden člověk za jediný den vyzkouší flyboard, hoverboard a jetpack, každý s vlastní instruktáží a právě v tomto pořadí. Koná se jen ve Vrané nad Vltavou a stránka ho doporučuje fyzicky zdatným lidem. Od univerzálního poukazu se liší tím, že nevybíráte: létáte na všech třech.",
    "included": [
      "Instruktáž na souši před každým ze tří prostředků, vždy 15 minut.",
      "Lety: varianta 75 minut má 10 minut letu na každém prostředku, varianta 90 minut 15 minut na každém.",
      "Půjčená výbava (neopren, plovací vesta, helma) a certifikát.",
      "Podle pokynů stránky je v ceně i vstup do areálu kempu pro vás a doprovod, včetně poplatku za vozidlo."
    ],
    "forWhom": [
      "Poukaz je pro jednoho účastníka.",
      "Limity podle stránky: věk od 16 let, váha nejvýš 120 kg, velikost nohy 36 až 47.",
      "Fyzicky méně zdatným stránka radí spíš univerzální poukaz s jedním prostředkem.",
      "Nevhodné pro nevidomé a neslyšící. Lehké tělesné postižení podle stránky nevadí, když zvládáte fyzicky náročné sporty a plavání.",
      "Zda je nutné umět plavat, stránka u tohoto balíčku výslovně neuvádí. U samotného flyboardingu to píše, proto se před koupí zeptejte."
    ],
    "watchOut": [
      "Hoverboard a jetpack stránka nepopisuje, jen je jmenuje. Jak fungují, jak vysoko zvedají a jak vypadá instruktáž, z nabídky nezjistíte.",
      "Instruktáže a lety dohromady dávají právě 75, respektive 90 minut, takže pauzy v tom zřejmě nejsou (jde o závěr z čísel, stránka to výslovně neříká). Po každém letu je podle stránky zhruba půlhodinová pauza. Vyhradit si máte tři hodiny a přijít aspoň půl hodiny před časem rezervace.",
      "Sezóna trvá od června do září, podle textu „každý víkend“. V konfigurátoru žádné termíny nejsou, vybíráte je až po nákupu. Stránka radí rezervovat s měsíčním předstihem.",
      "Počasí stránka nezmiňuje, při zrušení platí čl. 5.7 obchodních podmínek."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Balíček 3v1: Flyboard, Hoverboard a Jetpack",
        "url": "https://www.zazitky.cz/3v1-flyboard-hoverboard-jetpack"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "835": {
    "lead": "Poukaz na jeden vodní zážitek, který si vyberete až na místě po výkladu instruktorů: flyboard, hoverboard, nebo jetpack. Kupuje se pro jednoho nebo dva lidi a odehrává se ve Vrané nad Vltavou. Oproti balíčku 3v1 letíte jen na jednom prostředku a rezervovat stačí s kratším předstihem.",
    "included": [
      "Seznámení s instruktory a se všemi třemi prostředky, poté detailní instruktáž pro ten zvolený, podle stránky 20 minut.",
      "Jedna osoba: 10, 15 nebo 20 minut letu, celkem 30, 35 nebo 40 minut. Dvě osoby: 2 × 10, 15 nebo 20 minut letu, celkem 60, 70 nebo 80 minut, každý smí zvolit jiný prostředek.",
      "Neopren, plovací vesta a helma k zapůjčení, vstup do areálu kempu je v ceně i pro doprovod."
    ],
    "forWhom": [
      "Pro ty, kdo nevědí, který z prostředků chtějí. Rozhodujete se na místě, ne při koupi.",
      "Limity se liší podle prostředku. Flyboard: doporučený věk od 12 let (mladší jen s doprovodem zákonného zástupce), velikost nohy 36 až 47, váha do 140 kg. Hoverboard: od 16 let, noha od 37, do 120 kg. Jetpack: od 16 let, do 120 kg.",
      "Pro nevidomé a neslyšící je zážitek nevhodný. Lehké postižení nevadí, pokud fyzická zátěž a plavání nejsou pro vás problém. Plavání stránka jako podmínku neuvádí, ověřte si to před koupí.",
      "Diváci jsou vítáni, zdarma si mohou poslechnout školení a fotit."
    ],
    "watchOut": [
      "O hoverboardu a jetpacku nabídka nic nesděluje kromě názvů, takže o volbě rozhodnete až po výkladu na místě, ne podle textu.",
      "Délky v konfigurátoru jsou celkové časy včetně 20 minut instruktáže, u flyboardingu se na Zážitky.cz uvádějí minuty letu a instruktáž zvlášť. Text zmiňuje i 30, 35 a 40 minut pro dva lidi létající společně, konfigurátor to nenabízí.",
      "Zda lze volbu na místě změnit, když nesplníte limit vybraného prostředku, stránka neříká. Limity proto ověřte předem u provozovatele.",
      "Lety se podle textu konají každý víkend od června do září. Konfigurátor termíny neukazuje a píše, že termín vyberete po nákupu. Stránka doporučuje rezervovat ideálně týden předem."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Univerzální poukaz Flyboard, Hoverboard, nebo Jetpack",
        "url": "https://www.zazitky.cz/univerzal-flyboard-hoverboard-jetpack"
      }
    ]
  },
  "841": {
    "lead": "Let ve dvoumístném vírníku z letiště Vrchlabí (Lánov), 30 nebo 60 minut podle varianty. Vzlet a přistání dělá instruktor, ve výšce si pilotáž zkusíte podle podmínek. Když nechcete řídit, můžete let strávit jen jako vyhlídku.",
    "included": [
      "Krátká instruktáž před letem.",
      "Let ve vírníku, 30 nebo 60 minut podle varianty.",
      "Vzlet a přistání zajišťuje instruktor, pilotáž ve výšce je „v závislosti na podmínkách“.",
      "Létá se celoročně, i v zimě."
    ],
    "forWhom": [
      "Stránka uvádí minimální věk 6 let, tedy výrazně míň než 16 let u většiny pilotovacích nabídek, které věk uvádějí. Věk a podmínky pro dítě proto potvrďte před koupí.",
      "Váha nejvýš 100 kg, vyšší váha po individuální domluvě. Pod vlivem alkoholu se nelétá.",
      "Doprovod může přijet na letiště ve Vrchlabí a sledovat let ze země."
    ],
    "watchOut": [
      "Pilotáž není nárok: záleží na podmínkách a může zůstat u vyhlídky. Kolik minut budete u řízení, stránka nesděluje.",
      "Typ vírníku stránka neuvádí ani to, zda jde o ultralehký stroj. Nepředpokládejte to.",
      "Rezervace stačí nejpozději 7 dní předem, což je nejkratší z lhůt, které stránky ve skupině uvádějí. Provozovatel volá asi dva dny před letem a při špatném počasí se let po domluvě přesune.",
      "Lokalita je jediná: Vrchlabí (Lánov), jiné letiště ve výběru není."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Pilotem vírníku na zkoušku",
        "url": "https://www.zazitky.cz/pilotem-virniku-na-zkousku"
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
  },
  "863": {
    "lead": "Sportovní letadlo z Letňan nebo z Ostravy: po krátké instruktáži zkoušíte základní manévry a autopilota. Délku letu určuje varianta, nabídka uvádí 30 a 40 minut. Vzlet a přistání popis nezmiňuje.",
    "included": [
      "Krátká instruktáž před letem.",
      "Let v délce podle varianty (30 nebo 40 minut, případně 60, viz níže).",
      "Ovládání v letu: rovný let, stoupání, klesání, zatáčky a autopilot."
    ],
    "forWhom": [
      "Pro ty, kdo si chtějí vyzkoušet základní ovládání letadla.",
      "Váha nejvýš 120 kg. Při více osobách na palubě smí celková váha činit nejvýš 300 kg.",
      "Stránka počítá s jedním účastníkem, váhu „více osob“ ale zmiňuje, takže není jasné, zda smí letět pasažér.",
      "Doprovod může sledovat let z terminálu."
    ],
    "watchOut": [
      "Délky nesedí: nabídka uvádí 30 a 40 minut, v datech stránky se objevuje i 60 minut. Ověřte, co obsahuje vámi vybraná varianta.",
      "Kdo chce zkusit i vzlet a přistání, ať se před koupí zeptá, zda jsou součástí.",
      "Bristell B32 se objevuje jen v názvech variant, popis zážitku typ letadla neuvádí.",
      "Stránka mlčí o minimálním věku i o postupu při špatném počasí, obojí ověřte před koupí.",
      "Rezervaci je třeba udělat nejpozději 14 dní předem. Preferovaný čas letu se píše do poznámky k rezervaci a stránka doporučuje dostavit se na místo alespoň 15 minut před letem."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Pilotem sportovního letadla",
        "url": "https://www.zazitky.cz/let-sportovni-letadlo"
      }
    ]
  },
  "919": {
    "lead": "Simulátor seskoku padákem s VR brýlemi v Praze 9, žádný skutečný skok. V postroji si vyzkoušíte volný pád, otevření padáku, jeho ovládání i přistání. Celý zážitek má podle stránky trvat zhruba deset minut. Skutečný seskok najdete mezi [tandemovými seskoky](/tandemove-seskoky).",
    "included": [
      "Detailní instruktáž před spuštěním, pomoc s postrojem a VR brýlemi a podpis potřebných dokumentů.",
      "Virtuální seskok od volného pádu po přistání. Výcvik, letadlo ani výšku k tomu nepotřebujete.",
      "Podle popisků fotek lze zvolit letiště i místo mimo letiště."
    ],
    "forWhom": [
      "Varianta pro jednoho nebo pro dva lidi. Stránka neříká, zda u dvojice skáčou oba naráz, nebo jeden po druhém.",
      "Minimální výška je 150 cm kvůli velikosti postroje a brýlí.",
      "Dolní věkovou hranici stránka nemá. Do 18 let je potřeba souhlas zákonného zástupce a podle obchodních podmínek (čl. 6.2) u mladších 15 let i doprovod dospělého. Při účasti dítěte se zeptejte předem.",
      "Těhotné osoby a lidé s vážnými zdravotními problémy mohou podle stránky simulátor absolvovat na vlastní zodpovědnost. Pod vlivem alkoholu to možné není.",
      "Váhový limit stránka neuvádí. Vhodné je pohodlné oblečení."
    ],
    "watchOut": [
      "Zda se tělo při seskoku pohybuje a jak zařízení funguje fyzicky, stránka nepopisuje, mluví jen o postroji a VR brýlích. Certifikaci nezmiňuje. Záleží-li vám na tom, zeptejte se předem.",
      "Stránka nezmiňuje diváky ani focení a natáčení, na rozdíl od jiných simulátorů v nabídce. S doprovodem nepočítejte, dokud to nebude potvrzeno.",
      "Stránka uvádí, že celý zážitek trvá zhruba 10 minut, a přesto radí vyhradit aspoň 30. Délku instruktáže neuvádí, takže není jasné, zda se do těch deseti minut počítá.",
      "Termín je potřeba rezervovat nejpozději 14 dnů předem. K účasti je podle obchodních podmínek (čl. 6.3) nutné předložit platný poukaz.",
      "Stránka zmiňuje jen městskou část Praha 9. Ulici ani název provozovny neuvádí, adresu hledejte v pokynech, které dorazí po rezervaci."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Simulátor seskoku padákem s VR",
        "url": "https://www.zazitky.cz/simulator-seskok-padakem"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "975": {
    "lead": "Simulátor Spitfiru Mk.IX v pražských Holešovicích, tedy zážitek na zemi, ne skutečný let. Stránka mluví o autentické replice kokpitu v měřítku 1:1 a o virtuálních brýlích. Na programu jsou výcvikové úlohy i souboje s počítačovými protivníky, instruktor radí po celou dobu.",
    "included": [
      "Instruktáž 10 až 15 minut a let v simulátoru, při kterém instruktor sleduje a radí.",
      "Volba parametrů letu, běžný výcvik i letecké souboje proti počítačovým protivníkům.",
      "K virtuálním brýlím patří nástavec na dioptrické brýle, takže pilotovat lze i v nich."
    ],
    "forWhom": [
      "Pro začátečníky: stránka tvrdí, že to zvládne i člověk bez zkušeností, pilotuje sám s podporou instruktora.",
      "Počet účastníků je 1 nebo 2. Zda dva piloti létají současně, stránka neříká.",
      "Stránka uvádí minimální doporučený věk 12 let. Výška, váha a zdravotní omezení chybí, ověřte je u provozovatele před koupí.",
      "Doprovod tvoří až 3 osoby, sedí na sedadlech v leteckém stylu a smějí libovolně fotit i natáčet, stejně jako účastník."
    ],
    "watchOut": [
      "Sekce „Zážitek obsahuje“ na stránce chybí, takže není jasné, zda je v ceně pilotní průkaz. Délku letu lze jen odhadnout: v údajích stránky se objevuje 60 a 90 minut, ale bez vazby na počet osob a bez informace, zda se do nich počítá instruktáž.",
      "O pohybu a certifikaci simulátoru stránka nic neuvádí. Pokud vám záleží, zda se kabina hýbe, zeptejte se provozovatele.",
      "Sekce „Co na sebe“ jen opakuje text o doprovodu, o oblečení se tedy nedozvíte nic. Přesnou ulici nenajdete, jen Holešovice.",
      "Týden předem chce stránka i FAQ na Zážitky.cz, volné termíny ukáže až rezervační kalendář. Kdyby vám vyhovoval bližší termín, zkuste ho tam.",
      "Odznak „Vrácení zážitku až do 60 dnů“ nepovažujte za bezplatnou výhodu: obchodní podmínky (čl. 8) uvádějí zákonné odstoupení do 14 dnů a vrácení nad tuto lhůtu jako doplňkovou službu za poplatek. „Výměna zdarma“ platí podle čl. 7.1 jen jednou."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Letecký simulátor letounu Spitfire Mk.IX",
        "url": "https://www.zazitky.cz/simulator-spitfire-mkix"
      },
      {
        "label": "Zážitky.cz: obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "1015": {
    "lead": "Soukromý hodinový let pro dva nad Českými Budějovicemi a jedna noc ve městě. Startuje se z jednoho ze tří míst ve městě (náplavka Vltavy, Výstaviště nebo náměstí), ubytování je v centru a má plně vybavenou kuchyň. Na rozdíl od zámeckých pobytů tu nečekejte zámek, večeři ani prohlídku.",
    "included": [
      "Soukromý let jen pro dva a pilota, ranní nebo večerní, trvá zhruba hodinu.",
      "Ubytování na jednu noc v centru Českých Budějovic s plně vybavenou kuchyní.",
      "Odvoz z ubytování na místo startu a zpět; při rozbalení i sbalení balónu pomáháte i vy.",
      "Křest prvoletců a pamětní certifikát."
    ],
    "forWhom": [
      "Dvě osoby, součet jejich hmotností nejvýš 200 kg.",
      "Kdo nechce jezdit za startem daleko od města: všechna tři místa startu jsou podle stránky v Českých Budějovicích.",
      "Let podle stránky není vhodný pro osoby s vážným pohybovým omezením, srdečními potížemi ani pro těhotné. Speciální let pro handicapované lze zajistit individuální domluvou.",
      "Věk a výšku stránka neuvádí. Ověřte je před koupí."
    ],
    "watchOut": [
      "Stránka neříká, zda se spí před letem, nebo po něm, ani kdy se do ubytování nastupuje a odjíždí. Zeptejte se před rezervací.",
      "Snídaně, sekt ani jiné občerstvení v seznamu obsahu nejsou. Ubytování stránka popisuje třikrát jinak: jako „apartmán“, „apartmán nebo penzion“ a jako název apartmánového zařízení. Typ ubytování si nechte potvrdit.",
      "Termín si vyberete až po nákupu, sezóna trvá od dubna do října a rezervovat je nutné nejpozději 30 dnů předem. Místo startu i volbu ranního nebo večerního letu napište do poznámky. Stránka uvádí časy kolem 6:00 a kolem 18:00 a neupravuje je podle měsíce.",
      "Let proběhne jen za příznivého počasí, bez silného větru, deště či mlhy a s dobrou viditelností."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Privátní let balónem s ubytováním",
        "url": "https://www.zazitky.cz/privatni-let-balonem-ubytovani"
      }
    ]
  },
  "1028": {
    "lead": "Vícedenní kurz AFF se sedmi samostatnými seskoky: k instruktorovi nejste připoutaní, ve vzduchu vás jistí a padák otevíráte sami. Na konci má být certifikát AFF. Od jednorázových skoků se liší rozsahem a podmínkami: nováček musí mít předem za sebou aspoň jeden tandem a osvědčení Medical certificate class II.",
    "included": [
      "Teoretické přednášky a zapůjčení skript AFF. První den kurzu je vždy teorie.",
      "Sedm seskoků AFF: u prvních tří vás doprovázejí dva instruktoři, u dalších čtyř jeden. Volný pád trvá při každém seskoku zhruba minutu, letenky jsou do výšky 4 200 m.",
      "Zapůjčení padákové techniky a veškerého vybavení včetně kombinézy a ochranných brýlí, které sedí přes dioptrické brýle i kontaktní čočky.",
      "Práce instruktorů ve vzduchu a radiokomunikační podpora při letu pod padákem.",
      "Videozáznam seskoku ze všech úrovní kurzu a parašutistický záznamník."
    ],
    "forWhom": [
      "Kurz je pro ty, kdo chtějí skákat sami a opakovaně, ne jen jednou. Poukaz je pro jednu osobu. Koná se na letištích v Prostějově a Příbrami, stránka mezi nimi nerozlišuje.",
      "Kdo ještě nikdy nevyskočil z letadla, musí před prvním seskokem absolvovat aspoň jeden tandem. Nabídku najdete mezi [tandemovými seskoky](/tandemove-seskoky).",
      "Před termínem je nutná prohlídka u leteckého lékaře s osvědčením Medical certificate class II. Cenu prohlídky stránka neuvádí.",
      "Věk, váhu, výšku ani výčet nemocí stránka nezmiňuje (kromě lékařské třídy). Limity zjistěte u provozovatele ještě před koupí."
    ],
    "watchOut": [
      "Kurz trvá v průměru 4 až 7 dní. Stránka radí vyhradit aspoň dva víkendy a mezi jednotlivými seskoky nesmí být pauza delší než 30 dní. Termíny se vypisují v sezóně od dubna do října, většinou v pátek a v sobotu. Rezervaci stránka žádá nejpozději 30 dní předem.",
      "Poukaz platí 12 měsíců. Zda se do nich musí vejít všech sedm seskoků, stránka neříká, sezóna ale končí v říjnu, takže při nákupu na podzim si to ověřte. Odznak „Vrácení zážitku až do 60 dnů“ není bezplatná výhoda: zákonná lhůta je 14 dní, delší se podle ceníku připlácí a nejde koupit po rezervaci termínu.",
      "Stránka nepopisuje, co se stane při nezdaru: opakování úrovně, přezkoušení ani jejich cenu. Neuvádí ani výšky jednotlivých seskoků, jen to, že letenky jsou do 4 200 m.",
      "Podtitul slibuje licenci pro seskoky z letadla, text mluví o certifikátu AFF, s nímž prý můžete skákat kdekoli na světě. Kdo certifikát vydává a v jakém smyslu jde o licenci, stránka nevysvětluje."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Kurz parašutismu",
        "url": "https://www.zazitky.cz/kurz-parasutismu"
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
  "1112": {
    "lead": "Zimní let balónem na Slovensku: pilot podle větru volí start, většinou ve Veľké Lomnici nebo v Popradu, a míří co nejblíž k horám, směrem na Kežmarok, Štrbu nebo Spiš. Sezóna běží od října do března. Výškový ani váhový limit ani minimální věk stránka neuvádí.",
    "included": [
      "Setkání s balónovým týmem na domluveném místě, společný přesun na start, krátká instruktáž a příprava balónu.",
      "Let, který podle seznamu obsahu trvá zhruba 1,5 až 3 hodiny v závislosti na podmínkách.",
      "„Slavnostní zakončení letu“. Co přesně obsahuje, stránka nerozvádí.",
      "Návrat z místa přistání na místo setkání."
    ],
    "forWhom": [
      "Jedna až čtyři osoby v jedné objednávce.",
      "Kdo zvládne nastoupit do koše, vystoupit z něj a po celou dobu letu stát.",
      "Podle stránky letí děti od 15 do 18 let jen v doprovodu zákonného zástupce. Obchodní podmínky žádají u těchto dětí souhlas zákonného zástupce a u dětí do 15 let doprovod osoby starší 18 let. Spodní věkovou hranici stránka neuvádí.",
      "Kdo se obleče do vrstev: funkční sportovní oblečení, čepice, rukavice a pevná teplá nepromokavá obuv."
    ],
    "watchOut": [
      "Zda smějí létat těhotné ženy, stránka neuvádí, stejně jako věk, výšku a váhu. Nepředpokládejte, že platí stejné limity jako u jiných balónových nabídek, a zeptejte se před koupí.",
      "Stránka neříká, zda je let sdílený, nebo soukromý, ani jak velký je koš. V seznamu obsahu chybí křest prvoletců, přípitek, křestní list a pojištění.",
      "Lhůtu rezervace stránka uvádí dvakrát jinak: alespoň 2 až 4 týdny předem a nejpozději 30 dnů předem. Které pravidlo platí, potvrďte při rezervaci. Let je ranní (text zmiňuje východ slunce při startu), přesné místo a hodinu upřesní 2 až 3 dny předem podle počasí. Délku celého programu stránka neuvádí.",
      "Počasí stránka zmiňuje jen tak, že let na něm závisí, náhradní řešení nepopisuje. Poukaz platí 12 měsíců a sezóna trvá jen od října do března. Rada, ne údaj stránky: hlídejte si, kolik zimních týdnů vám po koupi zbývá."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz, Let balónem - Vysoké Tatry",
        "url": "https://www.zazitky.cz/let-balonem-vysoke-tatry"
      },
      {
        "label": "Zážitky.cz, obchodní podmínky",
        "url": "https://www.zazitky.cz/obchodni-podminky"
      }
    ]
  },
  "1122": {
    "lead": "Simulátor, ne skutečný let: stránka nabízí „realistický“ simulátor inspirovaný stíhačkou F-35 v Praze 4. Po 15minutové instruktáži zkusíte podle varianty a schopností jeden nebo několik scénářů, například volný přelet, akrobacii nebo souboj s drony. Ve vzduchu při tom nejste ani na chvíli.",
    "included": [
      "Instruktáž asi 15 minut.",
      "Čas v simulátoru 30 až 90 minut podle varianty.",
      "Scénáře podle varianty a schopností: volný přelet, akrobacie, závod na čas, souboj s drony nebo útok na pozemní cíle."
    ],
    "forWhom": [
      "Pro ty, kdo si chtějí zkusit stíhací kokpit bez skutečného letu. Další simulátory najdete mezi [leteckými simulátory](/letecke-simulatory).",
      "Stránka uvádí doporučený minimální věk 6 let a počet osob 1 až 2, váhový limit neuvádí. Doprovodem mohou být nejvýše dvě osoby.",
      "Podle stránky zážitek není vhodný pro těhotné ženy, lidi s epilepsií, osoby citlivé na obrazovky, blikání, zvukové efekty a časté změny perspektivy ani pro lidi s výrazně omezenou pohyblivostí kvůli nastupování do simulátoru. Máte-li pochybnosti, zeptejte se před koupí."
    ],
    "watchOut": [
      "Skutečnou stíhačku ani skutečný let to není. „Realistický“ je slovo stránky nabídky, ne naše hodnocení; s F-35 je simulátor spojen jen slovem „inspirovaný“.",
      "Není jasné, zda se instruktáž počítá do 30 až 90 minut v simulátoru.",
      "Místo je na stránce označeno jako Praha 4, Pikovická. Rezervovat je třeba nejpozději 5 dní předem a termíny jsou v provozní době pondělí až sobota od 9 do 19 hodin."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Staňte se pilotem stíhačky F35",
        "url": "https://www.zazitky.cz/stante-se-pilotem-stihacky-f35"
      }
    ]
  },
  "1126": {
    "lead": "Hodina za řízením sportovního letounu ATEC Faeta 321 NG (rok výroby 2017) z letiště Příbram. Letíte trasu Příbram, České Budějovice, Strakonice a zpět, takže vás čekají tři vzlety a tři přistání. Instruktor po celou dobu dohlíží na bezpečnost a podle stránky může kdykoli zasáhnout do řízení.",
    "included": [
      "Předletová instruktáž a 60 minut letu s pilotáží.",
      "Řízení v různých fázích letu na trase se třemi vzlety a třemi přistáními.",
      "Pronájem letounu, instruktor, palivo a provozní poplatky."
    ],
    "forWhom": [
      "Pro ty, kdo chtějí za řízením strávit celou hodinu. Stránka slibuje tři vzlety a tři přistání, ale neříká, kolik z nich řídí účastník.",
      "Váha nejvýš 120 kg, výška nejvýš 195 cm."
    ],
    "watchOut": [
      "Prodloužení letu se doplácí na místě za každou další minutu, aktuální částku najdete na stránce nabídky.",
      "Termíny jsou hlavně o víkendech, ve všední den po domluvě. Nejzazší lhůta rezervace je 14 dní, stránka ale radí 2 až 4 týdny předem.",
      "O minimálním věku ani o špatném počasí stránka nic neříká, ověřte to před koupí.",
      "Stránka neříká, kdo zážitek provozuje ani zda by se let započítal do případného výcviku."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Na hodinu pilotem",
        "url": "https://www.zazitky.cz/na-hodinu-pilotem"
      }
    ]
  },
  "1127": {
    "lead": "Vyhlídkový let dvoumístným sportovním letounem z Příbrami, při němž si za řízení podle stránky sednete jen „po domluvě s pilotem“. Na výběr je let dlouhý 30, 40 nebo 60 minut. Kdo chce naopak celou hodinu řídit, hledá spíš nabídku „Na hodinu pilotem“ ze stejného letiště.",
    "included": [
      "Předletová instruktáž.",
      "Let v délce 30, 40 nebo 60 minut podle varianty, trasa se řídí variantou a podmínkami.",
      "Možnost vyzkoušet řízení, pokud to pilot dovolí.",
      "Služby pilota, palivo, pojištění odpovědnosti provozovatele a provozní poplatky."
    ],
    "forWhom": [
      "Pro ty, kdo chtějí hlavně vidět krajinu z letadla a řízení berou jako možný bonus. Další nabídky najdete mezi [vyhlídkovými lety](/vyhlidkove-lety).",
      "Váha nejvýš 120 kg, výška nejvýš 195 cm."
    ],
    "watchOut": [
      "Řízení je jen možnost, o které rozhoduje domluva s pilotem. Kolik minut budete řídit, stránka neuvádí.",
      "Typ letounu stránka nejmenuje, jen že je dvoumístný sportovní.",
      "Minimální věk ani špatné počasí nabídka neřeší, zeptejte se před koupí.",
      "Rezervujte nejpozději 14 dní předem, stránka radí 2 až 4 týdny. Lety bývají hlavně o víkendech, ve všední den po domluvě."
    ],
    "checked": "2026-09-30",
    "sources": [
      {
        "label": "Zážitky.cz: Vyhlídkový let ve sportovním letounu s možností pilotáže",
        "url": "https://www.zazitky.cz/vyhlidkovy-let-ve-sportovnim-letounu-s-moznosti-pilotaze"
      }
    ]
  }
};

export const stripLinks = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export const getProductCopy = (id: string): ProductCopy | null => PRODUCT_COPY[id] ?? null;
