import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/content/GuidePage";
import { compressFaq } from "@/content/faq";
import { compressGuide, compressHowToSteps } from "@/content/guides";
import { articleHead } from "@/lib/seo";
import { FaqSection } from "@/components/pdf/FaqSection";

export const Route = createFileRoute("/how-to-compress")({
  head: () =>
    articleHead({
      title: "How to compress a PDF without uploading — Folio",
      description:
        "Rewrite a PDF in this browser. Folio trims structure and metadata. It does not rasterize scans or send the file to a compressor.",
      path: "/how-to-compress",
      appName: "How to compress a PDF",
      includeApp: false,
      faqs: compressFaq,
      howToName: compressGuide.title,
      howToSteps: compressHowToSteps,
    }),
  component: HowToCompressPage,
});

function HowToCompressPage() {
  return (
    <GuidePage
      guide={compressGuide}
      toolHref="/compress"
      toolLabel="Open the compressor"
      extra={{ href: "/how-to-split", label: "How to split a PDF" }}
    >
      <FaqSection items={compressFaq} />
    </GuidePage>
  );
}
