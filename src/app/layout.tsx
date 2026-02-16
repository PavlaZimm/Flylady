import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { OrganizationSchema, WebsiteSchema } from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimalizace pro Core Web Vitals
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://flylady.cz";

// Viewport konfigurace pro mobile optimalizaci
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Flylady.cz | Letecké zážitky a dárky",
    template: "%s | Flylady.cz",
  },
  description:
    "Darujte nezapomenutelný letecký zážitek. Vyhlídkové lety, tandemové seskoky, simulátory. 50+ ověřených zážitků s garancí spokojenosti.",
  keywords: [
    "letecké zážitky",
    "vyhlídkové lety",
    "tandemové seskoky",
    "letecké simulátory",
    "dárkové zážitky",
    "let vrtulníkem",
    "let stíhačkou",
  ],
  authors: [{ name: "Flylady.cz" }],
  creator: "Flylady.cz",
  publisher: "Flylady.cz",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: siteUrl,
    siteName: "Flylady.cz",
    title: "Flylady.cz | Letecké zážitky a dárky",
    description:
      "Darujte nezapomenutelný letecký zážitek. 50+ ověřených zážitků s garancí spokojenosti.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flylady.cz - Letecké zážitky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flylady.cz | Letecké zážitky",
    description: "Darujte nezapomenutelný letecký zážitek.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Přidat po registraci v Google Search Console
    // google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        {/* Structured Data pro SEO */}
        <OrganizationSchema />
        <WebsiteSchema />
        {/* Preconnect pro rychlejší načítání externích zdrojů */}
        <link rel="preconnect" href="https://alis.zazitky.cz" />
        <link rel="dns-prefetch" href="https://alis.zazitky.cz" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        {/* Skip link pro keyboard accessibility */}
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Přeskočit na hlavní obsah
        </a>

        <div className="min-h-screen flex flex-col">
          {/* Sticky header */}
          <header
            className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
            role="banner"
          >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
              <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
                  </svg>
                </span>
                Flylady.cz
              </Link>
              <nav
                className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex"
                role="navigation"
                aria-label="Hlavní navigace"
              >
                <Link href="/" className="transition hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded">
                  Domů
                </Link>
                <Link href="/zazitky" className="transition hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded">
                  Zážitky
                </Link>
                <Link href="/blog" className="transition hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded">
                  Blog
                </Link>
                <Link href="/ebook" className="transition text-orange-600 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded font-semibold">
                  E-book zdarma
                </Link>
                <Link
                  href="/zazitky"
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 press-effect"
                >
                  Vybrat zážitek
                </Link>
              </nav>
              {/* Mobile menu button */}
              <Link
                href="/zazitky"
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white sm:hidden focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 press-effect"
                aria-label="Zobrazit zážitky"
              >
                Zážitky
              </Link>
            </div>
          </header>

          {/* Main content */}
          <main id="main-content" className="flex-1 mx-auto w-full max-w-6xl px-6 py-10" role="main">
            {children}
          </main>

          {/* Enhanced footer */}
          <footer className="border-t border-slate-200 bg-white" role="contentinfo">
            <div className="mx-auto max-w-6xl px-6 py-12">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {/* Brand */}
                <div className="space-y-4">
                  <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </span>
                    Flylady.cz
                  </Link>
                  <p className="text-sm text-slate-600">
                    Pečlivě vybrané letecké zážitky a dárky pro ty, kteří milují létání.
                  </p>
                </div>

                {/* Kategorie */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900">Kategorie</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li><Link href="/kategorie/vyhlidkove-lety" className="hover:text-slate-900">Vyhlídkové lety</Link></li>
                    <li><Link href="/kategorie/tandemove-seskoky" className="hover:text-slate-900">Tandemové seskoky</Link></li>
                    <li><Link href="/kategorie/letecke-simulatory" className="hover:text-slate-900">Letecké simulátory</Link></li>
                    <li><Link href="/kategorie/let-vrtulnikem" className="hover:text-slate-900">Let vrtulníkem</Link></li>
                  </ul>
                </div>

                {/* Informace */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900">Informace</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li><Link href="/zazitky" className="hover:text-slate-900">Všechny zážitky</Link></li>
                    <li><Link href="/blog" className="hover:text-slate-900">Blog</Link></li>
                    <li><Link href="/ebook" className="font-semibold text-orange-600 hover:text-orange-700">E-book zdarma</Link></li>
                  </ul>
                </div>

                {/* Trust signály */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900">Proč my?</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      100% garance spokojenosti
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Platnost 2 roky
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Doručení ihned
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Partner Zážitky.cz
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-sm text-slate-500 sm:flex-row">
                <span>© {new Date().getFullYear()} Flylady.cz — Affiliate partner Zážitky.cz</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Bezpečný nákup
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
