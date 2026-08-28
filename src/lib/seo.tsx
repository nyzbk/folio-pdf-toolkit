import type { FaqItem } from "@/components/pdf/FaqSection";
import { SITE_NAME, SITE_ORIGIN, absUrl } from "@/lib/site";

type JsonLdOpts = {
  appName: string;
  path: string;
  description: string;
  faqs?: FaqItem[];
  howToName?: string;
  howToSteps?: string[];
  includeApp?: boolean;
};

export function jsonLdScripts(opts: JsonLdOpts) {
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
        browserRequirements: "Requires JavaScript",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: opts.description,
        featureList: ["Merge PDF", "Split PDF", "Compress PDF", "No upload", "No signup"],
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
          acceptedAnswer: { "@type": "Answer", text: item.a },
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
          text,
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
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: absUrl(opts.path) }],
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
