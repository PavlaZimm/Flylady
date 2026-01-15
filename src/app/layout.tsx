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
          <header className="border-b border-slate-100 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-lg font-semibold text-slate-900">
                Flylady.cz
              </Link>
              <nav className="flex items-center gap-6 text-sm text-slate-600">
                <Link href="/" className="hover:text-slate-900">
                  Domů
                </Link>
                <Link href="/zazitky" className="hover:text-slate-900">
                  Zážitky
                </Link>
                <Link href="/blog" className="hover:text-slate-900">
                  Blog
                </Link>
              </nav>
            </div>
          </header>
          <div className="mx-auto max-w-6xl px-6 py-12">{children}</div>
          <footer className="border-t border-slate-100 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <span>© {new Date().getFullYear()} Flylady.cz</span>
              <span>Affiliate tipy na letecké zážitky a inspirace.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
