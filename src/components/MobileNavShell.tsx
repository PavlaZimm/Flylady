"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** The menu content is rendered on the server; only its controls need hydration. */
export function MobileNavShell({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const triggerButton = trigger.current;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLButtonElement>("button")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      triggerButton?.focus();
    };
  }, [isOpen]);

  return <div className="sm:hidden">
    <button ref={trigger} type="button" onClick={() => setIsOpen(true)} aria-label="Otevřít menu" aria-controls="mobile-menu" aria-expanded={isOpen} className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200">
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
    </button>
    {isOpen && <div className="fixed inset-0 z-[100] bg-black/60" onClick={() => setIsOpen(false)} aria-hidden="true" />}
    <div id="mobile-menu" ref={panel} role="dialog" aria-label="Mobilní menu" aria-modal={isOpen || undefined} aria-hidden={!isOpen} inert={!isOpen}
      className={`fixed right-0 top-0 z-[101] h-dvh w-80 max-w-full bg-white shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      onClick={(event) => { if (event.target instanceof Element && event.target.closest("a[href], [data-close-menu]")) setIsOpen(false); }}
      onKeyDown={(event) => {
        if (event.key === "Escape") { setIsOpen(false); return; }
        if (event.key !== "Tab") return;
        const controls = panel.current?.querySelectorAll<HTMLElement>("a[href], button");
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }}>
      {children}
    </div>
  </div>;
}
