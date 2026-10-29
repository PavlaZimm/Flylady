"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { CONSENT_KEY, GA_ID, applyAnalyticsConsent, clearAnalyticsCookies, readConsent, trackEvent, type Consent } from "@/lib/analytics";

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const settingsButton = useRef<HTMLButtonElement>(null);
  const denyButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = readConsent();
    applyAnalyticsConsent(saved);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(saved);
    setReady(true);
    const sync = (event: StorageEvent) => {
      if (event.key !== CONSENT_KEY && event.key !== null) return;
      const value = readConsent();
      applyAnalyticsConsent(value);
      if (value !== "granted") clearAnalyticsCookies();
      setConsent(value);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  useEffect(() => {
    if (settingsOpen) denyButton.current?.focus();
  }, [settingsOpen]);

  useEffect(() => {
    const recordClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[rel~="sponsored"]') : null;
      if (!target) return;
      const url = new URL(target.href);
      if (url.hostname !== "ehub.cz" || url.pathname !== "/system/scripts/click.php") return;
      trackEvent("affiliate_click", { destination_host: "zazitky.cz" });
    };
    document.addEventListener("click", recordClick);
    return () => document.removeEventListener("click", recordClick);
  }, []);

  const closeSettings = () => {
    setSettingsOpen(false);
    // Initial consent must not scroll the visitor down to the footer.
    if (settingsOpen) settingsButton.current?.focus();
  };
  const decide = (value: Exclude<Consent, null>) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
      setStorageError(false);
    } catch {
      applyAnalyticsConsent("denied");
      clearAnalyticsCookies();
      setConsent(null);
      setStorageError(true);
      return;
    }
    applyAnalyticsConsent(value);
    if (value === "denied") clearAnalyticsCookies();
    setConsent(value);
    closeSettings();
  };

  return <>
    <button ref={settingsButton} type="button" aria-controls="cookie-settings" aria-expanded={ready && (consent === null || settingsOpen)} onClick={() => setSettingsOpen(true)} className="min-h-11 underline underline-offset-2 hover:text-slate-900">Nastavení cookies</button>
    {consent === "granted" && <>
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
        gtag('consent', 'default', {analytics_storage:'granted', ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied'});
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    </>}
    {ready && (consent === null || settingsOpen) && <div id="cookie-settings" role="dialog" aria-labelledby="cookie-title" onKeyDown={(event) => { if (event.key === "Escape" && consent !== null) closeSettings(); }} className="fixed inset-x-3 bottom-3 z-[3000] mx-auto max-w-md space-y-3 rounded-xl border border-slate-200 bg-white px-4 py-4 text-left shadow-xl">
      <p id="cookie-title" className="text-sm font-semibold text-slate-900">Nastavení analytiky</p>
      <p className="text-xs leading-relaxed text-slate-600">Google Analytics zapneme jen s vaším souhlasem. Svou volbu můžete kdykoliv změnit přes Nastavení cookies v patičce.</p>
      {storageError && <p role="status" className="text-xs text-slate-600">Volbu se nepodařilo uložit. Analytika zůstává vypnutá.</p>}
      <div className="flex flex-wrap gap-2">
        <button ref={denyButton} type="button" onClick={() => decide("denied")} className="min-h-11 rounded-lg border border-slate-300 px-3 text-xs text-slate-700 hover:bg-slate-50">Jen nezbytné</button>
        <button type="button" onClick={() => decide("granted")} className="min-h-11 rounded-lg bg-slate-900 px-3 text-xs text-white hover:bg-slate-800">Povolit analytiku</button>
        {consent !== null && <button type="button" onClick={closeSettings} className="min-h-11 px-3 text-xs underline">Zavřít</button>}
      </div>
    </div>}
  </>;
}
