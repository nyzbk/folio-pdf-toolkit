import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { MergeTool } from "@/components/pdf/MergeTool";
import { mergeFaq } from "@/content/faq";
import { toolHead } from "@/lib/seo";

const TITLE = "Merge PDF files in your browser — Folio, no upload";
const DESC =
  "Merge PDFs on this device. Concatenate files in order, download one PDF, no account, no watermark, no conversion server.";
const STEPS = [
  "Drop or choose two or more PDF files. Each file is checked in this tab, not on a server.",
  "Reorder them with the arrows. The merged PDF follows that list from top to bottom.",
  "Tap Merge. Pages are copied in memory with pdf-lib. The tab must stay open.",
  "Download the combined PDF. There is no watermark. Closing the tab discards the bytes.",
];

export const Route = createFileRoute("/")({
  head: () =>
    toolHead({
      title: TITLE,
      description: DESC,
      path: "/",
      appName: "Free PDF Merger",
      faqs: mergeFaq,
      howToName: "How to merge PDF files online",
      howToSteps: STEPS,
    }),
  component: Home,
});

function Home() {
  return (
    <AppShell>
      <MergeTool />
    </AppShell>
  );
}
