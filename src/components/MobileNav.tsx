"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="sm:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500"
        aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 p-4">
          <span className="text-lg font-bold text-slate-900">Menu</span>
          <button
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Zavřít menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="p-4" role="navigation" aria-label="Mobilní navigace">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Domů
              </Link>
            </li>
            <li>
              <Link
                href="/zazitky"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Všechny zážitky
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                Blog
              </Link>
            </li>

            {/* Divider */}
            <li className="py-2">
              <div className="border-t border-slate-100" />
            </li>

            {/* Kategorie */}
            <li className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Kategorie
            </li>
            <li>
              <Link
                href="/kategorie/vyhlidkove-lety"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              >
                Vyhlídkové lety
              </Link>
            </li>
            <li>
              <Link
                href="/kategorie/tandemove-seskoky"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              >
                Tandemové seskoky
              </Link>
            </li>
            <li>
              <Link
                href="/kategorie/letecke-simulatory"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              >
                Letecké simulátory
              </Link>
            </li>
            <li>
              <Link
                href="/kategorie/let-vrtulnikem"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              >
                Let vrtulníkem
              </Link>
            </li>

            {/* Divider */}
            <li className="py-2">
              <div className="border-t border-slate-100" />
            </li>

            {/* E-book CTA */}
            <li>
              <Link
                href="/ebook"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg bg-orange-50 px-4 py-3 text-orange-700 hover:bg-orange-100"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <span className="font-semibold">E-book zdarma</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 bg-slate-50 p-4">
          <Link
            href="/zazitky"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 press-effect"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            Vybrat zážitek
          </Link>
        </div>
      </div>
    </div>
  );
}
