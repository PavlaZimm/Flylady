import type { Metadata } from "next";

export const SITE_URL = "https://www.flylady.cz";
export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export const truncateText = (text: string, max = 160) => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:–-]+$/, "")}…`;
};

export function pageMetadata(title: string, description: string, path: string, image?: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website", locale: "cs_CZ", siteName: "Flylady.cz",
      title, description, url: absoluteUrl(path),
      ...(image ? { images: [{ url: image, alt: title }] } : {}),
    },
    twitter: { card: image ? "summary_large_image" : "summary", title, description, ...(image ? { images: [image] } : {}) },
  };
}
