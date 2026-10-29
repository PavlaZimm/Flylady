# Opravy po auditu Flylady.cz — 29. 10. 2026

Výchozí produkční větev: `95f8fffd1f8abbe1e678e2ae17685da5845616d3`. Tento záznam popisuje změny v návrhu PR; není potvrzením nasazení produkce.

| Nález | Výsledek změny |
| --- | --- |
| F01 | Sitemap a obsah čtou jednu verzovanou hodinovou cache katalogu. Odstraněna nezávislá cache výstupních stránek. Test skutečného produkčního buildu prokázal jeden request na feed pro sitemap i její cíle, včetně nového F-35. |
| F02 | Filtr přesněji označen jako Název nebo kraj, příklad odpovídá datům. Města ani vazby město–cena nejsou vymýšlené. |
| F03 | Jeden `main#main-content` v layoutu pro všechny šablony, loading i 404. Odstraněny vnořené main obaly; zachován skip link. |
| F04 | Odkaz Kontakt na provozovatelku v patičce a kontaktní sekce na O webu, vedoucí na existující LinkLady /kontakt. |
| F05 | Nastavení cookies lze znovu otevřít, upravit i zavřít klávesou Escape. Odvolání aktualizuje stav Google tagu, vypíná měření a maže dostupné analytické cookies. Počáteční souhlas neposouvá návštěvníka do patičky. |
| F06 | Čas načtení vzniká pouze po úspěšném stažení a parsování feedu a ukládá se se stejnými daty. Cenové přehledy už nepoužívají čas renderu jako datum zdroje. |
| F07 | Článek nad historickým srovnáním ukazuje živé nabídky dvou relevantních produktů, včetně skutečného času načtení. Zářijové ceníky zůstávají výslovně historické. Neproběhla nová faktografická revize všech 13 provozovatelů a datum jejich kontroly nebylo uměle změněno. |
| F08 | Pět individuálních produktových průvodců podle aktuálně načtených stránek prodejce. Záznam zdrojů, data kontroly a Apify run/dataset ID je v `docs/vyzkum/produkty/doplneni-2026-10-29.json`. |
| F09 | Výchozí Open Graph/Twitter obrázek pro stránky bez vlastní fotografie, generovaný jako 1200 × 630 PNG. Vlastní obrázky zůstávají přednostní. |
| F10 | Výběr primární kategorie preferuje konkrétní druh zážitku před obecnými vyhlídkovými lety. Regresní testy balónu, vrtulníku a simulátoru F-35. |
| F11 | Připravené události `affiliate_click` a `catalog_filter`, vysílané pouze po souhlasu. Neposílají text hledání ani partner ID/cílové query parametry. Vlastnictví eHUB účtu, připsání provize a příjem událostí v produkční GA4 zůstávají neověřené. Partner ID ani nákupní cíle se nemění. |

## Cache a provoz

`unstable_cache` odvozuje identitu i z textu callbacku. Turbopack vytvářel pro metadata route (sitemap) a RSC různé minifikované callbacky, a tudíž dvě nezávislé cache. Bound callback sjednocuje identitu; explicitní klíč obsahuje verzi a URL zdroje. Při změně parseru nebo významu katalogu musí verze klíče vzrůst.

Stránky závislé na feedu jsou nyní generovány na požadavek ze sdílených dat, která se obnovují přibližně po hodině. To zvyšuje počet serverových renderů oproti samostatnému ISR HTML, ale nestahuje feed pro každou stránku. Při chybě obnovy může Next zachovat poslední úspěšnou hodnotu; zobrazený čas načtení proto zůstává původní.

`FLYLADY_FEED_URL` je volitelná serverová konfigurace. Bez ní se používá původní produkční URL Zážitky.cz. Používá se také pro izolované integrační ověření; testovací URL nenastavovat v produkci.

## Ověření

- 22 regresních testů v `npm test`, včetně původních testů partner parametrů, kategorií a parseru.
- ESLint, TypeScript a produkční build.
- `node scripts/verify-audit.mjs` po buildu: lokální HTTP feed → produkční Next server → sitemap a všech 28 jejích cílů v testovací sadě. Všechny cíle 200, jeden main na stránku, OG metadata, chybějící adresa 404, přesně jedno načtení feedu a PNG 1200 × 630.
- Integrační sada používá syntetická data a nezastupuje kontrolu 91 současných produkčních URL. Po nasazení ověřit živou sitemap a její cíle, banner v čistém profilu, skutečné přijetí GA4 událostí a partnerské reporty.

Automatické schválení/merge starého otevřeného PR #10 ani produkční nasazení nejsou součástí této změny.
