import test from 'node:test';
import assert from 'node:assert/strict';
import { parseFeedXml, addUtmParams } from '../src/lib/feed-parser.ts';
import { getCategoryBySlug, matchesCategory, groupProductsByCategory } from '../src/lib/categories.ts';
import { pageMetadata } from '../src/lib/seo.ts';

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
test('affiliate tracking preserves existing partner attribution and rejects unsafe URLs', () => {
  const link = new URL(parseFeedXml(xml)[0].url);
  assert.equal(link.searchParams.get('partner'), 'existing');
  assert.equal(link.searchParams.get('utm_medium'), 'affiliate');
  assert.equal(addUtmParams('javascript:alert(1)'), '');
  assert.equal(addUtmParams('not a URL'), '');
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
