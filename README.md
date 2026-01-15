# Flylady.cz

Affiliate web pro letecké zážitky s blogem a administrací (Decap CMS).

## Technické požadavky

- Mobilní a responzivní layout pro všechny obrazovky.
- SEO: statické generování (SSG/ISR), metadata, Open Graph, sitemap a robots.
- Výkon: rychlé načítání obrázků, optimalizace a čistá struktura stránky.
- Affiliate měření: UTM parametry u produktových odkazů.
- Vizuál: konzistentní barvy, typografie a dostatečný kontrast.

## Lokální spuštění

```bash
npm run dev
```

## Struktura

- `src/app/` – stránky (listing, detail, blog)
- `src/lib/feed.ts` – načítání a filtrace XML feedu
- `content/blog/` – markdown články
- `public/admin/` – administrace Decap CMS
