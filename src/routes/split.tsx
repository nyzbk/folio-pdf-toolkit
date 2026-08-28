import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { SplitTool } from "@/components/pdf/SplitTool";
import { splitFaq } from "@/content/faq";
import { toolHead } from "@/lib/seo";

const TITLE = "Split a PDF in your browser — extract pages, no upload";
const DESC =
  "Split a PDF by ranges, every N pages, or one file per page. Runs in this tab. No account, no conversion server.";
const STEPS = [
  "Drop one PDF. Folio counts pages in this tab and refuses passwords and non-PDFs.",
  "Choose ranges for one smaller file, every N pages for chunks, or one PDF per page for a ZIP.",
  "Tap Split. Pages are copied locally. Keep the tab open until the download is ready.",
  "Download a PDF or a ZIP. Closing the tab discards the parts from memory.",
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
