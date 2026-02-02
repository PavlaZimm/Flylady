import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://flylady.cz";

export const metadata: Metadata = {
  title: {
    default: "Flylady.cz | Letecké zážitky",
    template: "%s | Flylady.cz",
  },
  description:
    "Letecké zážitky, tipy a inspirace pro všechny, kdo milují létání.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Flylady.cz | Letecké zážitky",
    description:
      "Letecké zážitky, tipy a inspirace pro všechny, kdo milují létání.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="min-h-screen">
          {/* Sticky header */}
          <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
              <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
                  </svg>
                </span>
                Flylady.cz
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
                <Link href="/" className="transition hover:text-slate-900">
                  Domů
                </Link>
                <Link href="/zazitky" className="transition hover:text-slate-900">
                  Zážitky
                </Link>
                <Link href="/blog" className="transition hover:text-slate-900">
                  Blog
                </Link>
                <Link
                  href="/zazitky"
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Vybrat zážitek
                </Link>
              </nav>
              {/* Mobile menu button */}
              <Link
                href="/zazitky"
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white sm:hidden"
              >
                Zážitky
              </Link>
            </div>
          </header>
          <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
          {/* Enhanced footer */}
          <footer className="border-t border-slate-200 bg-white">
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
