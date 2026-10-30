# Detail zážitku: rychlost a cesta k nákupu — 30. 10. 2026

## Co se mění

- Na mobilu je název, cena a hlavní odkaz k prodejci před galerií. Na desktopu zůstává obrázek vlevo a nákupní přehled vpravo. Další fotografie tvoří kompaktní řadu.
- U ceny „od“ je konkrétní nejlevnější varianta z téhož feedu. Čtenář se může přesunout rovnou na všechny varianty.
- Všechny varianty jsou stále v počátečním serverovém HTML, včetně názvu, místa a ceny. Jednodušší definiční seznam má tři elementy na variantu místo pěti. Dlouhé seznamy používají nativní rozbalení bez dalšího JavaScriptu.
- Po porovnání variant i na konci rozhodovacího průvodce je cesta k nabídce Zážitky.cz přes stávající eHUB odkaz. Feed neposkytuje ověřený odkaz na předvolenou variantu; tlačítko proto otevírá nabídku celého zážitku a text to uvádí.
- Statická část mobilního menu je serverová komponenta. Malý klientský obal řeší otevření, zavření, Escape, návrat fokusu a pohyb tabulátorem. Zavřené menu je inertní a jeho odkazy nepřednačítají další stránky.

## SEO a měření

URL, canonical, metadata, Product/Offer, obsah průvodců a interní propojení zůstávají zachované. Varianty nevyžadují JavaScript ani dodatečný API požadavek. Affiliate odkazy nadále používají sponsored/nofollow a eHUB přesměrování.

Událost GA4 `affiliate_click` přidává povolenou hodnotu `link_position`: `product_main`, `product_variants`, `product_end`, jinak `content`. Zachycuje i otevření prostředním tlačítkem. Stále se odesílá jen při souhlasu s analytikou; parametry partnerského odkazu a libovolný text z atributů se neposílají. Změna potvrzuje funkci kódu, nikoli přijetí dat v konkrétním účtu GA4 nebo připsání provize v eHUB.

Úpravy mají zkrátit cestu k výběru a nákupu. Vyšší tržby či konverzní poměr lze potvrdit až z reálných dat; nejde o výsledek A/B testu.

## Ověření

23 jednotkových testů, ESLint a produkční build včetně TypeScriptu. Integrační ověření obsahuje produkt se 164 variantami: všechny zůstávají v HTML, seznam je zpočátku zavřený, kotva funguje a všechna tři umístění nákupního odkazu jsou přítomná. Dále kontroluje 32 sitemap URL, hlavní landmark, absenci GA před souhlasem, interní odkazy, OG 1200 × 630, 404 a jedno načtení sdíleného feedu.

Aktuální výsledky opakovaného měření na produkci a vizuální kontroly jsou uvedené v pull requestu k této změně. Laboratorní Lighthouse není měření výdělku ani terénních Core Web Vitals.

Technické podklady: https://nextjs.org/docs/app/guides/prefetching a https://web.dev/articles/dom-size-and-interactivity.
