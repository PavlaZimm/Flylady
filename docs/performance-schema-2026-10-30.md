# Rychlost, přístupnost a strukturovaná data — 30. 10. 2026

Lighthouse 12.8.2, mobil, simulované zpomalení, jednorázový běh na produkčním commitu ba158456832297d592e7e04988b13a22b1a08f54. Nejde o terénní CrUX data, opakovaný medián ani měření INP návštěvníků. Výchozí čísla jsou v lighthouse-baseline-2026-10-30.json.

| Stránka | Výkon | Přístupnost | SEO | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- |
| Úvod | 98 | 96 | 100 | 2,163 s | 137 ms | 0 |
| Simulátory | 89 | 97 | 100 | 1,975 s | 405 ms | 0 |
| Let balónem | 97 | 97 | 100 | 2,434 s | 104 ms | 0 |

## Opravy doložené nálezy

- Tmavší text patičky, oranžové odkazy a zelené nákupní tlačítko pro čitelný kontrast.
- Přístupné názvy obsahují viditelný text Detail, Zobrazit vše a případný cenový štítek. Ovládání hlasem a asistivní technologie tak dostávají konzistentní název.
- Odstraněn ručně vložený /_vercel/insights/script.js: na ostrém webu vracel 404 a chybu MIME. Google Analytics se souhlasem a affiliate odkazy zůstávají funkční samostatně. Odstraněním nedostupného skriptu se nezískává měření návštěvnosti.
- Hlavní obrázek produktu dostává eager/high prioritu a přesnější responzivní velikost se započtením okrajů stránky.
- Zbytkový JavaScript a jeho odhadovaná úspora cca 28 KiB pocházejí také z frameworku. Neodstraňujeme funkční navigaci a souhlas jen kvůli bodům auditu. Jednotlivé laboratorní skóre kolísá.

## Strukturovaná data a limit kontroly

Kontrola skutečného JSON-LD ze sitemapy zahrnuje parsování, názvy entit, kladnou cenu a CZK u zveřejněných Offer, cílové URL a pořadí položek BreadcrumbList. Product používá Offer konkrétního prodejce, nikoli AggregateOffer vydávající varianty za nabídky více prodejců. Nejsou doplňovaná smyšlená hodnocení, dostupnost nebo dodací podmínky.

Veřejný Google Rich Results Test byl spuštěn pro produkt /zazitek/let-balonem-16, ale skončil zprávou „Něco se pokazilo — Přihlaste se a zkuste to znovu“. Úspěšná validace Googlem proto není doložená. Vlastní kontrola JSON-LD nenahrazuje rozhodnutí Googlu o rozšířených výsledcích.

Primární dokumentace: https://developers.google.com/search/docs/appearance/structured-data/product-snippet a https://nextjs.org/docs/app/api-reference/components/image.
