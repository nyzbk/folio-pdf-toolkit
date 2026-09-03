import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/content/GuidePage";
import { scanFaq } from "@/content/faq";
import { scanGuide, scanHowToSteps } from "@/content/guides";
import { articleHead } from "@/lib/seo";
import { FaqSection } from "@/components/pdf/FaqSection";

export const Route = createFileRoute("/scan")({
  head: () =>
    articleHead({
      title: "Why a scanned PDF barely shrinks — and what Folio will not do",
      description:
        "A scan is a photograph of paper inside a PDF. Folio does not downsample those images and does not OCR. Split pages or re-scan. No upload, no fake 90% smaller.",
      path: "/scan",
      appName: "Scanned PDFs",
      includeApp: false,
      faqs: scanFaq,
      howToName: scanGuide.title,
      howToSteps: scanHowToSteps,
    }),
  component: ScanPage,
});

function ScanPage() {
  return (
    <GuidePage
      guide={scanGuide}
      toolHref="/split"
      toolLabel="Split pages instead"
      extra={{ href: "/compress", label: "Compress tab" }}
    >
      <FaqSection items={scanFaq} />
    </GuidePage>
  );
}
