import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/content/GuidePage";
import { mergeFaq } from "@/content/faq";
import { mergeGuide, mergeHowToSteps } from "@/content/guides";
import { articleHead } from "@/lib/seo";
import { FaqSection } from "@/components/pdf/FaqSection";

export const Route = createFileRoute("/how-to-merge")({
  head: () =>
    articleHead({
      title: "How to merge PDF files in the browser without uploading — Folio",
      description:
        "Join two or more PDFs on this device. Reorder, download one file, no account, no watermark, no conversion server.",
      path: "/how-to-merge",
      appName: "How to merge PDFs",
      includeApp: false,
      faqs: mergeFaq,
      howToName: mergeGuide.title,
      howToSteps: mergeHowToSteps,
    }),
  component: HowToMergePage,
});

function HowToMergePage() {
  return (
    <GuidePage
      guide={mergeGuide}
      toolHref="/"
      toolLabel="Open the merger"
      extra={{ href: "/email", label: "Email size limits" }}
    >
      <FaqSection items={mergeFaq} />
    </GuidePage>
  );
}
