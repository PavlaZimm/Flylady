import test from 'node:test';
import assert from 'node:assert/strict';
import { getPrimaryCategory } from '../src/lib/categories.ts';
import { pageMetadata } from '../src/lib/seo.ts';
import { ADDITIONAL_PRODUCT_COPY } from '../src/lib/additional-product-copy.ts';
import { CONSENT_KEY, applyAnalyticsConsent, trackEvent } from '../src/lib/analytics.ts';

test('primary category prefers balloons/helicopters and keeps fighter simulators on the ground', () => {
  const product = (name, categories) => ({ name, categories });
  assert.equal(getPrimaryCategory(product('Let balónem', ['Letecké zážitky | Vyhlídkové lety']))?.slug, 'let-balonem');
  assert.equal(getPrimaryCategory(product('Vyhlídkový let vrtulníkem', ['Letecké zážitky | Vyhlídkové lety']))?.slug, 'let-vrtulnikem');
  assert.equal(getPrimaryCategory(product('Staňte se pilotem stíhačky F35', ['Letecké simulátory', 'Lety stíhačkou', 'Pilotování']))?.slug, 'letecke-simulatory');
});

test('pages without a dedicated photo share a real default OG image', () => {
  const metadata = pageMetadata('Test', 'Popis', '/blog');
  assert.equal(metadata.openGraph.images[0].url, 'https://www.flylady.cz/opengraph-image');
  assert.equal(metadata.twitter.images[0], metadata.openGraph.images[0].url);
  assert.equal(pageMetadata('Test', 'Popis', '/x', '/fotky/test.webp').openGraph.images[0].url, '/fotky/test.webp');
});

test('all five previously missing guides have their own checked primary source', () => {
  for (const id of ['966', '854', '979', '853', '7110']) {
    const copy = ADDITIONAL_PRODUCT_COPY[id];
    assert.equal(copy.checked, '2026-10-29');
    assert.ok(copy.included.length && copy.forWhom.length && copy.watchOut.length);
    assert.ok(copy.sources.every(source => new URL(source.url).hostname === 'www.zazitky.cz'));
  }
});

test('analytics stays silent without consent, starts after grant and stops immediately on revoke', () => {
  const calls = [];
  let choice = null;
  globalThis.window = { localStorage: { getItem: key => key === CONSENT_KEY ? choice : null }, location: { pathname: '/zazitek/test-1' }, gtag: (...args) => calls.push(args) };
  try {
    trackEvent('affiliate_click', { destination_host: 'zazitky.cz' });
    assert.equal(calls.length, 0);
    choice = 'granted';
    applyAnalyticsConsent(choice);
    trackEvent('affiliate_click', { destination_host: 'zazitky.cz' });
    assert.equal(calls.at(-1)[0], 'event');
    assert.deepEqual(calls.at(-1)[2], { destination_host: 'zazitky.cz', page_path: '/zazitek/test-1' });
    choice = 'denied';
    applyAnalyticsConsent(choice);
    const afterRevoke = calls.length;
    trackEvent('affiliate_click', { destination_host: 'zazitky.cz' });
    assert.equal(calls.length, afterRevoke);
    assert.equal(window['ga-disable-G-ZT9JHLEMYR'], true);
    window.localStorage.getItem = () => { throw new Error('Storage blocked'); };
    trackEvent('catalog_filter', { filter_type: 'search' });
    assert.equal(calls.length, afterRevoke);
  } finally { delete globalThis.window; }
});
