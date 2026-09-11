import type { FaqItem } from "@/components/pdf/FaqSection";
import { stripMarkdownLinks } from "@/components/content/RichText";
import { CONTACT_EMAIL, SITE_NAME, SITE_ORIGIN, absUrl } from "@/lib/site";

type JsonLdOpts = {
  appName: string;
  path: string;
  description: string;
  faqs?: FaqItem[];
  howToName?: string;
  howToSteps?: string[];
  includeApp?: boolean;
};

const OG_IMAGE = absUrl("/og.jpg");

function socialMeta(title: string, description: string, url: string) {
  return [
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_US" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE },
  ];
}

const publisher = {
  "@type": "Organization",
  name: "Ultimatum",
  email: CONTACT_EMAIL,
  url: "https://ultimatum-hub.vercel.app/",
  sameAs: ["https://ultimatum-hub.vercel.app/", "https://ultimatum.studio"],
};

export function jsonLdScripts(opts: JsonLdOpts) {
  const url = absUrl(opts.path);
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
    description:
      "Merge, split and compress PDFs in the browser. No upload, no signup, no watermark.",
    inLanguage: "en",
    publisher,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Folio",
        item: `${SITE_ORIGIN}/`,
      },
      ...(opts.path !== "/"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: opts.appName,
              item: url,
            },
          ]
        : []),
    ],
  };
  const scripts: { type: string; children: string }[] = [
    { type: "application/ld+json", children: JSON.stringify(website) },
    { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
  ];
  if (opts.includeApp !== false) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: opts.appName,
        url,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript. PDF bytes stay in this tab.",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: opts.description,
        featureList: ["Merge PDF", "Split PDF", "Compress PDF", "No upload", "No signup"],
        publisher,
        screenshot: OG_IMAGE,
      }),
    });
  }
  if (opts.faqs?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: opts.faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: stripMarkdownLinks(item.a) },
        })),
      }),
    });
  }
  if (opts.howToName && opts.howToSteps?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: opts.howToName,
        description: opts.description,
        step: opts.howToSteps.map((text, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          text: stripMarkdownLinks(text),
        })),
      }),
    });
  }
  return scripts;
}

export function toolHead(opts: {
  title: string;
  description: string;
  path: string;
  canonicalPath?: string;
  appName: string;
  faqs: FaqItem[];
  howToName: string;
  howToSteps: string[];
}) {
  const canonical = absUrl(opts.canonicalPath ?? opts.path);
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      ...socialMeta(opts.title, opts.description, canonical),
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: jsonLdScripts(opts),
  };
}

export function articleHead(opts: {
  title: string;
  description: string;
  path: string;
  appName: string;
  faqs?: FaqItem[];
  howToName?: string;
  howToSteps?: string[];
  includeApp?: boolean;
}) {
  const url = absUrl(opts.path);
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      ...socialMeta(opts.title, opts.description, url),
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLdScripts(opts),
  };
}

export function legalHead(opts: { title: string; description: string; path: string }) {
  const url = absUrl(opts.path);
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      ...socialMeta(opts.title, opts.description, url),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
