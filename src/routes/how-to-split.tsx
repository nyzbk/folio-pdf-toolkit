import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/content/GuidePage";
import { splitFaq } from "@/content/faq";
import { splitGuide, splitHowToSteps } from "@/content/guides";
import { articleHead } from "@/lib/seo";
import { FaqSection } from "@/components/pdf/FaqSection";

export const Route = createFileRoute("/how-to-split")({
  head: () =>
    articleHead({
      title: "How to split a PDF in the browser without uploading — Folio",
      description:
        "Extract page ranges, equal chunks, or one PDF per page on this device. No conversion server, no account.",
      path: "/how-to-split",
      appName: "How to split a PDF",
      includeApp: false,
      faqs: splitFaq,
      howToName: splitGuide.title,
      howToSteps: splitHowToSteps,
    }),
  component: HowToSplitPage,
});

function HowToSplitPage() {
  return (
    <GuidePage
      guide={splitGuide}
      toolHref="/split"
      toolLabel="Open the splitter"
      extra={{ href: "/how-to-merge", label: "How to merge PDFs" }}
    >
      <FaqSection items={splitFaq} />
    </GuidePage>
  );
}
