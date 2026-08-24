export const SITE_ORIGIN = "https://folio-pdf-toolkit.vercel.app";
export const SITE_NAME = "Folio — Free PDF Toolkit";
export const ADSENSE_CLIENT = "ca-pub-7636435144500691";
export const SITEMAP_LASTMOD = "2026-08-24";

export function absUrl(path: string): string {
  if (!path || path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
