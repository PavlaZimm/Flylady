import { ImageResponse } from "next/og";

export const alt = "Flylady.cz — Letecké zážitky, ceny a průvodci výběrem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SocialImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#0f172a", color: "#fff", padding: "65px 80px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 38 }}>
        <svg width="58" height="58" viewBox="0 0 24 24" fill="#fbbf24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
        Flylady.cz
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.1 }}>Váš příští let začíná tady.</div>
        <div style={{ fontSize: 30, color: "#cbd5e1" }}>Letecké zážitky · ceny · průvodci výběrem</div>
      </div>
      <div style={{ fontSize: 23, color: "#fbbf24" }}>Od prvního simulátoru po let balónem</div>
    </div>,
    size,
  );
}
