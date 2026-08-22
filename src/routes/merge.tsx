import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { MergeTool } from "@/components/pdf/MergeTool";
import { mergeFaq } from "@/content/faq";
import { toolHead } from "@/lib/seo";

const TITLE = "Free PDF Merger — Merge PDFs Online, No Signup, Private";
const DESC =
  "Merge multiple PDFs into one file in your browser. No upload, no watermark, no account. Free forever.";
const STEPS = [
  "Drop or choose two or more PDF files.",
  "Reorder them with the arrows if needed.",
  "Tap Merge — processing stays on your device.",
  "Download the combined PDF. No watermark.",
];

export const Route = createFileRoute("/merge")({
  head: () =>
    toolHead({
      title: TITLE,
      description: DESC,
      path: "/merge",
      appName: "Free PDF Merger",
      faqs: mergeFaq,
      howToName: "How to merge PDF files online",
      howToSteps: STEPS,
    }),
  component: MergePage,
});

function MergePage() {
  return (
    <AppShell>
      <MergeTool />
    </AppShell>
  );
}
