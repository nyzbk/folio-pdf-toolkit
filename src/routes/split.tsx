import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { SplitTool } from "@/components/pdf/SplitTool";
import { splitFaq } from "@/content/faq";
import { toolHead } from "@/lib/seo";

const TITLE = "Free PDF Splitter — Extract Pages Online, Private";
const DESC = "Split PDF by pages or ranges. Works entirely in your browser. No signup, no limits.";
const STEPS = [
  "Drop one PDF.",
  "Choose ranges, every N pages, or one file per page.",
  "Tap Split — pages are extracted on your device.",
  "Download a PDF or a ZIP of the parts.",
];

export const Route = createFileRoute("/split")({
  head: () =>
    toolHead({
      title: TITLE,
      description: DESC,
      path: "/split",
      appName: "Free PDF Splitter",
      faqs: splitFaq,
      howToName: "How to split a PDF online",
      howToSteps: STEPS,
    }),
  component: SplitPage,
});

function SplitPage() {
  return (
    <AppShell>
      <SplitTool />
    </AppShell>
  );
}
