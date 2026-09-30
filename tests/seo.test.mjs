import test from 'node:test';
import assert from 'node:assert/strict';
import { parseFeedXml, buildAffiliateUrl, isAviationExperience } from '../src/lib/feed-parser.ts';
import { getCategoryBySlug, matchesCategory, groupProductsByCategory } from '../src/lib/categories.ts';
import { pageMetadata, truncateText } from '../src/lib/seo.ts';

const xml = `<SHOP><SHOPITEM><ID>0015</ID><PRODUCT>Tandemový seskok</PRODUCT><URL>https://www.zazitky.cz/seskok?partner=existing</URL><CATEGORYTEXT>Letecké zážitky</CATEGORYTEXT><VARIANT><VARIANTID>001</VARIANTID><PRICE>1000</PRICE><PRICE_VAT>1 210,00</PRICE_VAT></VARIANT><VARIANT><VARIANTID>002</VARIANTID><PRICE_VAT>0</PRICE_VAT></VARIANT></SHOPITEM></SHOP>`;

test('XML preserves identifiers and parses integer and localized VAT prices', () => {
  const [p] = parseFeedXml(xml);
  assert.equal(p.id, '0015');
  assert.equal(p.variants[0].id, '001');
  assert.equal(p.variants[0].price, 1000);
  assert.equal(p.minPriceVat, 1210);
  assert.equal(p.variants[1].priceVat, null);
  assert.equal(p.slug, 'tandemovy-seskok-0015');
  assert.deepEqual(p.categories, ['Letecké zážitky']);
});
test('buy links go through the eHUB click tracker to the exact experience and reject unsafe URLs', () => {
  const [p] = parseFeedXml(xml);
  const link = new URL(p.url);
  assert.equal(link.origin + link.pathname, 'https://ehub.cz/system/scripts/click.php');
  assert.equal(link.searchParams.get('a_aid'), '3cd17e7c');
  assert.equal(link.searchParams.get('a_bid'), 'c22fc1d9');
  assert.equal(link.searchParams.get('desturl'), 'https://www.zazitky.cz/seskok?partner=existing');
  assert.equal(p.sellerUrl, 'https://www.zazitky.cz/seskok?partner=existing');
  assert.equal(buildAffiliateUrl('https://example.com/a'), 'https://example.com/a');
  assert.equal(buildAffiliateUrl('javascript:alert(1)'), '');
  assert.equal(buildAffiliateUrl('not a URL'), '');
});
test('invalid feed fails instead of replacing the catalogue with an empty success', () => {
  assert.throws(() => parseFeedXml('<html>Unavailable</html>'));
});
const product = (name, categories = [], description = '') => ({ ...parseFeedXml(xml)[0], name, categories, description });
const matches = (p, slug) => matchesCategory(p, getCategoryBySlug(slug));
test('simulated flights do not appear as real fighter flights or pilot experiences', () => {
  const p = product('Staňte se pilotem stíhačky F35', ['Simulátory | Letecké simulátory', 'Letecké zážitky | Lety stíhačkou', 'Letecké zážitky | Pilotování']);
  assert.equal(matches(p, 'letecke-simulatory'), true);
  assert.equal(matches(p, 'let-stihackou'), false);
  assert.equal(matches(p, 'pilotem-na-zkousku'), false);
});
test('paragliding and training do not masquerade as tandem skydives', () => {
  assert.equal(matches(product('Tandemový paragliding'), 'tandemove-seskoky'), false);
  assert.equal(matches(product('Kurz parašutismu'), 'tandemove-seskoky'), false);
  assert.equal(matches(product('Tandemový seskok padákem'), 'tandemove-seskoky'), true);
});
test('description mentions cannot misclassify a product; valid multiple categories remain visible', () => {
  const p = product('Vyhlídkový let ve vrtulníku', ['Letecké zážitky | Vyhlídkové lety'], 'Zkuste také simulátor a tandemový seskok.');
  assert.equal(matches(p, 'letecke-simulatory'), false);
  assert.equal(matches(p, 'tandemove-seskoky'), false);
  const { groups, remaining } = groupProductsByCategory([p]);
  assert.equal(groups.find(g => g.slug === 'let-vrtulnikem').products.length, 1);
  assert.equal(groups.find(g => g.slug === 'vyhlidkove-lety').products.length, 1);
  assert.equal(remaining.length, 0);
});
test('metadata canonical and social URL refer to the same page', () => {
  const m = pageMetadata('Test', 'Popis', '/let-balonem');
  assert.equal(m.alternates.canonical, 'https://www.flylady.cz/let-balonem');
  assert.equal(m.openGraph.url, m.alternates.canonical);
});

test('broad supplier categories do not make airships balloons or gyrocopters helicopters', () => {
  assert.equal(matches(product('Exkluzivní let vzducholodí', ['Letecké zážitky | Lety balónem']), 'let-balonem'), false);
  assert.equal(matches(product('Pilotem vírníku na zkoušku', ['Letecké zážitky | Lety vrtulníkem']), 'let-vrtulnikem'), false);
});
test('simulators listed only under "Letecké simulátory" stay in the aviation catalogue', () => {
  assert.equal(isAviationExperience(['Simulátory | Letecké simulátory']), true);
  assert.equal(isAviationExperience(['Gurmánské zážitky']), false);
});
test('meta descriptions are cut on a word boundary', () => {
  const text = 'slovo '.repeat(40);
  const cut = truncateText(text);
  assert.ok(cut.length <= 160);
  assert.ok(cut.endsWith('slovo…'));
  assert.equal(truncateText('Krátký popis.'), 'Krátký popis.');
});
test('regions come from feed categories, deduplicated and in fixed order', async () => {
  const { getProductRegions, groupByRegion } = await import('../src/lib/regions.ts');
  const p = product('Let balónem', ['Letecké zážitky', 'Jihomoravský', 'Praha', 'Královehradecký', 'Dárky pro dva', 'Praha']);
  assert.deepEqual(getProductRegions(p).map((r) => r.name), ['Praha', 'Královéhradecký kraj', 'Jihomoravský kraj']);
  const q = { ...product('Tunel', ['Praha']), id: 'q' };
  assert.deepEqual(groupByRegion([p, q]).map((g) => [g.region.name, g.products.length]), [['Praha', 2], ['Královéhradecký kraj', 1], ['Jihomoravský kraj', 1]]);
});
test('category stats pick the cheapest and priciest variant and sort rows by price', async () => {
  const { summarizeCategory, variantLabel } = await import('../src/lib/category-stats.ts');
  const v = (name, priceVat) => ({ id: name, name, price: null, priceVat, location: null });
  const a = { ...product('Let balónem', ['Praha']), id: 'a', variants: [v('Let balónem, 1 osoba, 1 hodina', 4990), v('Let balónem, 2 osoby, 1 hodina', 8990)] };
  const b = { ...product('Privátní let', ['Jihomoravský']), id: 'b', variants: [v('Privátní let, 2 osoby', 12990), v('Privátní let, bez ceny', null)] };
  const stats = summarizeCategory([b, a]);
  assert.equal(stats.minPrice, 4990);
  assert.equal(stats.maxPrice, 12990);
  assert.equal(stats.variantCount, 3);
  assert.equal(stats.cheapest.label, '1 osoba, 1 hodina');
  assert.deepEqual(stats.rows.map((r) => r.product.id), ['a', 'b']);
  assert.equal(variantLabel(a, 'Jiný název, 1 osoba'), 'Jiný název, 1 osoba');
});
test('scenic flights exclude paragliding and fighter jets tagged as scenic by the supplier', () => {
  assert.equal(matches(product('Tandemový paragliding', ['Letecké zážitky | Vyhlídkové lety']), 'vyhlidkove-lety'), false);
  assert.equal(matches(product('Let stíhačkou L-39 Albatros', ['Letecké zážitky | Vyhlídkové lety']), 'vyhlidkove-lety'), false);
  assert.equal(matches(product('Vyhlídkový let - Pálava', ['Letecké zážitky | Vyhlídkové lety']), 'vyhlidkove-lety'), true);
});
