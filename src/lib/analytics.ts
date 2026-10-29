export const CONSENT_KEY = "fl-cookie-consent";
export const GA_ID = "G-ZT9JHLEMYR";
const DISABLE_KEY = "ga-disable-G-ZT9JHLEMYR";
export type Consent = "granted" | "denied" | null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    "ga-disable-G-ZT9JHLEMYR"?: boolean;
  }
}

export function readConsent(): Consent {
  if (typeof window === "undefined") return null;
  try {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    return saved === "granted" || saved === "denied" ? saved : null;
  } catch { return null; }
}

export function applyAnalyticsConsent(consent: Consent) {
  window[DISABLE_KEY] = consent !== "granted";
  window.gtag?.("consent", "update", {
    analytics_storage: consent === "granted" ? "granted" : "denied",
    ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  });
}

export function clearAnalyticsCookies() {
  const names = document.cookie.split(";").map((cookie) => cookie.trim().split("=")[0]).filter((name) => /^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name));
  const parts = window.location.hostname.split(".");
  const domains = ["", ...parts.map((_, index) => parts.slice(index).join(".")).filter((domain) => domain.includes("."))];
  for (const name of names) for (const domain of domains) {
    document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
  }
}

export function trackEvent(name: "affiliate_click" | "catalog_filter", parameters: Record<string, string | number | boolean>) {
  if (readConsent() !== "granted" || window[DISABLE_KEY] || !window.gtag) return;
  // Do not send the search text, partner IDs or destination query parameters.
  window.gtag("event", name, { ...parameters, page_path: window.location.pathname });
}
