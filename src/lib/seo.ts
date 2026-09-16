import type { Metadata } from "next";

export const SITE_URL = "https://www.flylady.cz";
export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

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
