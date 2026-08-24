import type { FaqItem } from "@/components/pdf/FaqSection";
import { SITE_NAME, SITE_ORIGIN, absUrl } from "@/lib/site";

export function jsonLdScripts(opts: {
  appName: string;
  path: string;
  description: string;
  faqs: FaqItem[];
  howToName: string;
  howToSteps: string[];
}) {
  const url = absUrl(opts.path);
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
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
  const app = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.appName,
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: opts.description,
    featureList: ["Merge PDF", "Split PDF", "Compress PDF", "No upload", "No signup"],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: opts.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.howToName,
    description: opts.description,
    step: opts.howToSteps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    })),
  };
  return [
    { type: "application/ld+json", children: JSON.stringify(website) },
    { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
    { type: "application/ld+json", children: JSON.stringify(app) },
    { type: "application/ld+json", children: JSON.stringify(faq) },
    { type: "application/ld+json", children: JSON.stringify(howTo) },
  ];
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
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: jsonLdScripts(opts),
  };
}

export function legalHead(opts: { title: string; description: string; path: string }) {
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: absUrl(opts.path) }],
  };
}
