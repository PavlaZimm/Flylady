import type { Metadata } from "next";
import Link from "next/link";
import { EbookForm } from "@/components/EbookForm";

export const metadata: Metadata = {
  title: "E-book zdarma: 5 míst v ČR z ptačí perspektivy",
  description:
    "Stáhněte si zdarma e-book s 5 nejkrásnějšími místy v České republice, která musíte vidět z výšky. Praha, Český Krumlov, České Švýcarsko a další.",
  alternates: {
    canonical: "/ebook",
  },
};

export default function EbookPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 px-6 py-16 text-white sm:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTJIMjR2MmgxMnpNMzYgMjR2LTJIMjR2MmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              E-book zdarma
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              5 míst v ČR, která musíte vidět z ptačí perspektivy
            </h1>

            <p className="text-lg text-white/90">
              Objevte nejkrásnější místa České republiky tak, jak je většina lidí nikdy neuvidí.
              Od historické Prahy po divoké České Švýcarsko.
            </p>

            <ul className="space-y-3 text-white/90">
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Detailní popis 5 nejlepších destinací
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Tipy na nejlepší roční období pro let
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Doporučení typu letu pro každé místo
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Bonus: Checklist před prvním letem
              </li>
            </ul>
          </div>

          {/* Formulář */}
          <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold text-slate-900">Stáhnout e-book zdarma</h2>
              <p className="mt-2 text-sm text-slate-600">
                Zadejte e-mail a e-book vám pošleme ihned.
              </p>
            </div>
            <EbookForm />
          </div>
        </div>
      </section>

      {/* Co se dozvíte */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Co v e-booku najdete?</h2>
          <p className="mt-2 text-slate-600">Kompletní průvodce leteckými zážitky v ČR</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🏰",
              title: "Praha",
              description: "Pražský hrad, Karlův most a Vltava z ptačí perspektivy. Nejlepší trasy a tipy.",
            },
            {
              icon: "🏛️",
              title: "Český Krumlov",
              description: "UNESCO památka, meandry Vltavy a romantický zámek. Kdy letět a na co se připravit.",
            },
            {
              icon: "🏔️",
              title: "České Švýcarsko",
              description: "Pravčická brána a pískovcová skalní města. Unikátní pohledy shora.",
            },
            {
              icon: "⛰️",
              title: "Krkonoše",
              description: "Sněžka a horská panoramata. Ideální pro adrenalinové lety.",
            },
            {
              icon: "🏯",
              title: "Karlštejn",
              description: "Gotický hrad a údolí Berounky. Romantický výlet blízko Prahy.",
            },
            {
              icon: "🎁",
              title: "Bonus tipy",
              description: "Jak vybrat správný typ letu, co si vzít s sebou a jak se připravit.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 hover-lift"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="rounded-2xl bg-slate-50 p-8 text-center">
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="mt-4 text-lg font-medium text-slate-700">
          &ldquo;Díky e-booku jsem věděla přesně, kam letět na první rande. Český Krumlov z vrtulníku byl nezapomenutelný!&rdquo;
        </p>
        <p className="mt-2 text-sm text-slate-500">— Markéta V., Brno</p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-slate-600">Už máte e-book a chcete rovnou vybírat?</p>
        <Link
          href="/zazitky"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 press-effect"
        >
          Prohlédnout zážitky
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
