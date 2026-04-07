"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="sm:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 active:scale-95 transition"
        aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
        aria-expanded={isOpen}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed right-0 top-0 z-[101] h-full w-80 transform shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </span>
            <span className="text-lg font-bold text-slate-900">Flylady.cz</span>
          </div>
          <button
            onClick={closeMenu}
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
                href="/"
                onClick={closeMenu}
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
                href="/zazitky"
                onClick={closeMenu}
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
                href="/blog"
                onClick={closeMenu}
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
            <li>
              <Link
                href="/kategorie/vyhlidkove-lety"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition"
              >
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Vyhlídkové lety
              </Link>
            </li>
            <li>
              <Link
                href="/kategorie/tandemove-seskoky"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition"
              >
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                Tandemové seskoky
              </Link>
            </li>
            <li>
              <Link
                href="/kategorie/letecke-simulatory"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition"
              >
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                Letecké simulátory
              </Link>
            </li>
            <li>
              <Link
                href="/kategorie/let-vrtulnikem"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition"
              >
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                Let vrtulníkem
              </Link>
            </li>

            {/* Divider */}
            <li className="py-3">
              <div className="border-t-2 border-slate-100" />
            </li>

            {/* E-book CTA */}
            <li>
              <Link
                href="/ebook"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-4 text-orange-800 hover:from-orange-200 hover:to-amber-200 active:scale-[0.98] transition"
              >
                <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-bold">E-book zdarma</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 border-t-2 border-slate-100 bg-white p-5">
          <Link
            href="/zazitky"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-base font-bold text-white shadow-lg hover:bg-slate-800 active:scale-[0.98] transition"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            Vybrat zážitek
          </Link>
        </div>
      </div>
    </div>
  );
}
