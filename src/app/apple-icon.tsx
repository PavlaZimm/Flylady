import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 32,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 20L24 12L16 16L8 20Z" fill="#f8fafc" />
          <path d="M16 16L24 12L20 24L16 16Z" fill="#94a3b8" />
          <path d="M16 16L12 24L8 20L16 16Z" fill="#64748b" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
