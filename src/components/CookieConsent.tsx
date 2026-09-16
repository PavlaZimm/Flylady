"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const KEY = "fl-cookie-consent";
const GA_ID = "G-ZT9JHLEMYR";
type Consent = "granted" | "denied" | null;

// GDPR: Google Analytics se načte až po souhlasu. Vercel Analytics je
// cookieless, takže lištou procházet nemusí.
export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved === "granted" || saved === "denied") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsent(saved);
    }
    setReady(true);
  }, []);

  const decide = (value: Exclude<Consent, null>) => {
    localStorage.setItem(KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}

      {ready && consent === null && (
        <div
          role="dialog"
          aria-label="Souhlas s cookies"
          className="fixed inset-x-3 bottom-3 z-[3000] mx-auto flex max-w-md flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl"
        >
          <span className="flex-[1_1_210px] text-xs leading-snug text-slate-600">
            Pomůžete nám zjistit, co na Flylady funguje? Google Analytics zapneme jen s vaším souhlasem.
          </span>
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => decide("denied")}
              className="min-h-9 rounded-lg border border-slate-300 px-3 text-xs text-slate-600 hover:bg-slate-50"
            >
              Jen nezbytné
            </button>
            <button
              onClick={() => decide("granted")}
              className="min-h-9 rounded-lg bg-slate-900 px-3 text-xs font-semibold text-white hover:bg-slate-800"
            >
              Povolit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
