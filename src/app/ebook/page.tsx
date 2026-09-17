import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata("E-book připravujeme", "E-book Flylady.cz zatím není k dispozici. Prohlédněte si průvodce výběrem leteckých zážitků na blogu.", "/ebook"),
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function EbookPage() {
  return <main className="max-w-3xl space-y-6 rounded-3xl bg-white p-8 sm:p-12">
    <h1 className="text-3xl font-bold text-slate-900">E-book připravujeme</h1>
    <p className="text-slate-600">E-book zatím není k dispozici. Praktické rady k výběru leteckého zážitku si mezitím můžete přečíst na našem blogu.</p>
    <Link href="/blog/jak-vybrat-letecky-zazitek" className="inline-block rounded-full bg-slate-900 px-6 py-3 font-semibold text-white">Jak vybrat letecký zážitek</Link>
  </main>;
}
