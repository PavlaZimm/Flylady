import type { Metadata } from "next";
import Link from "next/link";
import { ProductSection } from "@/components/ProductSection";
import { groupProductsByCategory } from "@/lib/categories";
import { getAviationProducts } from "@/lib/feed";
import { FAQSchema } from "@/components/StructuredData";

// FAQ data pro structured data a zobrazení
const FAQ_DATA = [
  {
    question: "Jak dlouho platí voucher?",
    answer: "Všechny vouchery platí 2 roky od zakoupení. Termín lze přeplánovat kdykoliv během platnosti.",
  },
  {
    question: "Mohu změnit typ zážitku?",
    answer: "Ano, voucher lze vyměnit za jiný zážitek ve stejné nebo vyšší hodnotě (s doplatkem).",
  },
  {
    question: "Co když bude špatné počasí?",
    answer: "Zážitek se přesune na náhradní termín bez poplatků. Bezpečnost je vždy na prvním místě.",
  },
  {
    question: "Jak rychle dostanu voucher?",
    answer: "E-mailem ihned po zaplacení. Můžete také zvolit tištěnou verzi v dárkové krabičce.",
  },
];

export const metadata: Metadata = {
  title: "Letecké zážitky pro Flylady | Dárky, které se nezapomínají",
  description:
    "Darujte nezapomenutelný letecký zážitek. Vyhlídkové lety, tandemové seskoky, simulátory a další. Ověřené zážitky s garancí spokojenosti.",
};

export default async function Home() {
  const products = await getAviationProducts();
  const { groups, remaining } = groupProductsByCategory(products);
  const totalProducts = products.length;

  return (
    <>
      {/* FAQ Structured Data pro SEO */}
      <FAQSchema faqs={FAQ_DATA} />

      <div className="space-y-16">
        {/* Hero sekce s trust signály */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-16 text-white sm:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-1.5 text-xs font-medium text-green-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              {totalProducts}+ ověřených zážitků
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">
              Partner Zážitky.cz
            </span>
          </div>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Darujte zážitek, na který se nezapomíná
          </h1>
          <p className="text-base text-slate-200 sm:text-lg">
            Vyhlídkové lety, tandemové seskoky, letecké simulátory a další.
            Vybírejte z <strong className="text-white">{totalProducts}+ ověřených zážitků</strong> s garancí spokojenosti.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Garance vrácení peněz
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Platnost 2 roky
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Doručení ihned e-mailem
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/zazitky"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
            >
              Prohlédnout zážitky
              <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#kategorie"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Vybrat podle kategorie
            </Link>
          </div>
        </div>
      </section>

      {/* Benefit sekce - zaměřeno na zákazníka */}
      <section className="rounded-3xl border border-slate-100 bg-white p-8 text-sm text-slate-600">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3 text-center md:text-left">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 md:mx-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Voucher platí 2 roky</h2>
            <p>
              Žádný stres s termínem. Obdarovaný si vybere datum, které mu vyhovuje.
            </p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600 md:mx-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">100% garance spokojenosti</h2>
            <p>
              Nejste spokojeni? Peníze vám vrátíme bez otázek. Váš klid je priorita.
            </p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 md:mx-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Doručení ihned e-mailem</h2>
            <p>
              Voucher dostanete okamžitě po zaplacení. Ideální i na dárek na poslední chvíli.
            </p>
          </div>
        </div>
      </section>

      {/* Kategorie produktů */}
      <div id="kategorie" className="space-y-16 scroll-mt-8">
        {groups.map((group, index) => (
          <ProductSection
            key={group.slug}
            title={group.title}
            description={group.description}
            products={group.products}
            limit={3}
            href={`/kategorie/${group.slug}`}
            featured={index < 3}
          />
        ))}
      </div>

      {remaining.length ? (
        <ProductSection
          title="Další letecké zážitky"
          description="Produkty, které se nevešly do hlavních kategorií."
          products={remaining}
        />
      ) : null}

      {/* Social proof sekce */}
      <section className="rounded-3xl bg-gradient-to-r from-slate-50 to-slate-100 p-8 sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-lg font-medium text-slate-700 sm:text-xl">
            &ldquo;Manžel byl nadšený! Vyhlídkový let nad Prahou byl nejlepší dárek k narozeninám. Objednávka byla jednoduchá a voucher přišel hned.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-slate-500">— Petra K., Praha</p>
        </div>
      </section>

      {/* E-book Lead Magnet Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-6 py-10 text-white sm:px-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTJIMjR2MmgxMnpNMzYgMjR2LTJIMjR2MmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold sm:text-2xl">E-book zdarma: 5 míst v ČR z ptačí perspektivy</h2>
            <p className="mt-1 text-white/90">
              Stáhněte si průvodce nejkrásnějšími místy pro vyhlídkové lety. Praha, Český Krumlov, České Švýcarsko a další.
            </p>
          </div>
          <Link
            href="/ebook"
            className="flex-shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-orange-600 shadow-lg transition hover:bg-orange-50 press-effect"
          >
            Stáhnout zdarma
          </Link>
        </div>
      </section>

      {/* FAQ sekce */}
      <section className="space-y-6" aria-labelledby="faq-heading">
        <div className="text-center">
          <h2 id="faq-heading" className="text-2xl font-semibold text-slate-900">Časté otázky</h2>
          <p className="mt-2 text-sm text-slate-600">Vše, co potřebujete vědět před nákupem</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQ_DATA.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-white p-6 hover-lift">
              <h3 className="font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA sekce */}
      <section className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-center text-white sm:px-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">Stále nevíte, co vybrat?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-300">
          Prohlédněte si všech {totalProducts}+ zážitků a najděte ten pravý. Filtrujte podle ceny, lokace nebo typu.
        </p>
        <Link
          href="/zazitky"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 press-effect"
        >
          Zobrazit všechny zážitky
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
      </div>
    </>
  );
}
