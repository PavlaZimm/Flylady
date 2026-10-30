import Link from "next/link";
import { MobileNavShell } from "@/components/MobileNavShell";

// Nejhledanější kategorie (Marketing Miner, 09/2026) první.
const MENU_CATEGORIES = [
  { href: "/tandemove-seskoky", label: "Tandemové seskoky", dot: "bg-red-500" },
  { href: "/let-balonem", label: "Let balónem", dot: "bg-purple-500" },
  { href: "/vetrny-tunel", label: "Větrný tunel", dot: "bg-sky-500" },
  { href: "/letecke-simulatory", label: "Letecké simulátory", dot: "bg-blue-500" },
  { href: "/let-vrtulnikem", label: "Let vrtulníkem", dot: "bg-amber-500" },
  { href: "/vyhlidkove-lety", label: "Vyhlídkové lety", dot: "bg-green-500" },
];

export default function MobileNav() {
  return <MobileNavShell>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <svg className="h-7 w-7 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            <span className="text-lg font-bold text-slate-900">Flylady.cz</span>
          </div>
          <button
            data-close-menu
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 active:scale-95 transition"
            aria-label="Zavřít menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="overflow-y-auto bg-white p-5" style={{ maxHeight: "calc(100vh - 180px)" }} role="navigation" aria-label="Mobilní navigace">
          <ul className="space-y-2">
            <li>
              <Link
            prefetch={false}
                href="/"
                data-close-menu
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 active:scale-[0.98] transition"
              >
                <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Domů
              </Link>
            </li>
            <li>
              <Link
            prefetch={false}
                href="/zazitky"
                data-close-menu
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 active:scale-[0.98] transition"
              >
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Všechny zážitky
              </Link>
            </li>
            <li>
              <Link
            prefetch={false}
                href="/blog"
                data-close-menu
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 active:scale-[0.98] transition"
              >
                <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                Blog
              </Link>
            </li>

            {/* Divider */}
            <li className="py-3">
              <div className="border-t-2 border-slate-100" />
            </li>

            {/* Kategorie */}
            <li className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              Kategorie
            </li>
            {MENU_CATEGORIES.map((item) => (
              <li key={item.href}>
                <Link
                  prefetch={false}
                  href={item.href}
                  data-close-menu
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition"
                >
                  <span className={`h-2 w-2 rounded-full ${item.dot}`}></span>
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Divider */}
            <li className="py-3">
              <div className="border-t-2 border-slate-100" />
            </li>

            {/* Průvodce výběrem */}
            <li>
              <Link
            prefetch={false}
                href="/blog/jak-vybrat-letecky-zazitek"
                data-close-menu
                className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-4 text-orange-800 hover:from-orange-200 hover:to-amber-200 active:scale-[0.98] transition"
              >
                <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-bold">Jak vybrat dárek</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 border-t-2 border-slate-100 bg-white p-5">
          <Link
            prefetch={false}
            href="/zazitky"
            data-close-menu
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-base font-bold text-white shadow-lg hover:bg-slate-800 active:scale-[0.98] transition"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            Vybrat zážitek
          </Link>
        </div>
  </MobileNavShell>;
}
