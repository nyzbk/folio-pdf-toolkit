import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/content/GuidePage";
import { emailFaq } from "@/content/faq";
import { emailGuide, emailHowToSteps } from "@/content/guides";
import { articleHead } from "@/lib/seo";
import { FaqSection } from "@/components/pdf/FaqSection";

export const Route = createFileRoute("/email")({
  head: () =>
    articleHead({
      title: "Fit a PDF under Gmail and Outlook size caps — Folio",
      description:
        "Gmail still rejects many attachments around 25 MB. Compress a digital PDF in this tab, or split pages. Scans of paper will not magically shrink. No upload.",
      path: "/email",
      appName: "PDF email size",
      includeApp: false,
      faqs: emailFaq,
      howToName: emailGuide.title,
      howToSteps: emailHowToSteps,
    }),
  component: EmailPage,
});

function EmailPage() {
  return (
    <GuidePage
      guide={emailGuide}
      toolHref="/compress"
      toolLabel="Open compress"
      extra={{ href: "/split", label: "Split pages" }}
    >
      <FaqSection items={emailFaq} />
    </GuidePage>
  );
}
