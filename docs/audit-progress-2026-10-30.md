# Pokračování auditu — průvodci výběrem, 30. 10. 2026

Navazuje na audit 24 oblastí z 29. 10. a produkční opravy z PR #11 (merge `5bf51d9a243b29bd185d1f12b107c841923bc08e`). Tento soubor popisuje obsahovou sadu; stav jejího nasazení dokládá navazující PR a deployment.

## Dokončená zadání

- **Zadání 02 — kategorie simulátorů:** na stávající `/letecke-simulatory` přibylo srovnání čtyř různých zařízení podle místa, pohybu, zobrazení, programu a účastníků. Odlišení VR od pohyblivé plošiny, pilotujícího účastníka od doprovodu a instruktáže od simulovaného letu. Doplněny otázky pro společnou návštěvu, děti a zimní dárek. Ceny zůstávají v existující živé tabulce kategoriální stránky.
- **Zadání 03 — průvodce dárkem:** původní `/blog/jak-vybrat-letecky-zazitek` má rozhodovací tabulku, postup s pevným rozpočtem, konkrétní odkazy na čtyři produkty a část o vánočním předání poukazu. Neslibuje volné termíny ani vánoční doručení. Původní datum vydání se zachovává, věcná aktualizace je 30. 10. 2026.
- **Navigace:** kategorie s existujícím průvodcem dostávají odkaz z úvodu na `#jak-vybrat`, aby byl průvodce dosažitelný před dlouhým seznamem produktů. Jednoznačné ID a odstup pro posun pod navigaci.
- **Podklady:** čtyři produktové stránky a nápověda Zážitky.cz načteny přes Apify, všechny HTTP 200. Metoda, konkrétní fakta, limity a run/dataset ID jsou v `docs/vyzkum/pruvodci-2026-10-30.json`. Recenze zákazníků ani nezávisle nedoložená certifikace nejsou základem srovnání.

## Ověření

- 22 testů, ESLint, TypeScript a produkční build.
- Rozšířený stávající test interních odkazů: produktové slugs odvozuje skutečným parserem z inventáře čtyř ověřených nabídek. Neignoruje produktové odkazy.
- Produkční HTTP integrace se syntetickým feedem rozšířená o tyto čtyři nabídky. Na obou upravených stránkách ověřuje skutečně vykreslené interní odkazy i cíle fragmentů; zároveň zachovává kontrolu společné cache, sitemapy, hlavního obsahu, OG a 404.
- Dvě změny TSX jsou serverové a přidávají pouze odkaz/ID, bez klientského stavu, závislostí či dalších datových požadavků. Kontrola podle React Best Practices.

## Co v auditu zbývá

1. **Zadání 01 / F07:** opakovat věcný průzkum všech 13 balónových provozovatelů. Živé katalogové nabídky jsou doplněné, zářijové srovnání je výslovně historické. Nové datum cenové kontroly lze uvést až po skutečném ověření jednotlivých ceníků.
2. **Zadání 04 — Most:** ověřit současného pořadatele, sezonu a případnou přesnou affiliate variantu pro Most. Kraj není důkazem konkrétního města.
3. **F11 / GA4, GSC a eHUB:** 30. 10. GSC stále vrací 403 včetně výpisu všech vlastností; dostupné GA4 připojení nabízí pouze Attersee a Tripradar. Události na webu jsou implementované, jejich příjem pro Flylady a připsání provizí zůstávají neověřené. Přístup k eHUB reportům nebyl získán.
4. **Výkon a schema:** Lighthouse/CrUX a Google Rich Results posouzení nebyly dokončené v původním auditu; syntakticky platné JSON-LD není totéž co nárok na rozšířené výsledky.
5. **Další nepokryté oblasti:** backlinkový inventář, skutečná kanibalizace a dopad podle GSC, ověřené citace v AI odpovědích a navazující spolupráce. Nejsou označené jako hotové ani nahrazené odhadovanými metrikami.

Zadání 05 (pět produktových průvodců) je součástí již nasazeného PR #11. Žádné oslovení partnerů nebylo odesláno.
