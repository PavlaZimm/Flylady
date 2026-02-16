import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stránka nenalezena",
  description: "Tato stránka neexistuje. Vraťte se na hlavní stránku a vyberte si letecký zážitek.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <span className="text-6xl font-bold text-slate-200">404</span>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">
        Stránka nenalezena
      </h1>
      <p className="mt-2 max-w-md text-slate-600">
        Tato stránka neexistuje nebo byla přesunuta.
        Nevadí — máme pro vás spoustu jiných leteckých zážitků!
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 press-effect"
        >
          Zpět na hlavní stránku
        </Link>
        <Link
          href="/zazitky"
          className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Prohlédnout zážitky
        </Link>
      </div>

      {/* E-book CTA */}
      <div className="mt-12 w-full max-w-lg rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-6 text-center">
        <p className="font-semibold text-slate-900">Mezitím si stáhněte e-book zdarma</p>
        <p className="mt-1 text-sm text-slate-600">
          5 míst v ČR, která musíte vidět z ptačí perspektivy
        </p>
        <Link
          href="/ebook"
          className="mt-4 inline-flex rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 press-effect"
        >
          Stáhnout e-book
        </Link>
      </div>
    </div>
  );
}
