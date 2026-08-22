import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { CompressTool } from "@/components/pdf/CompressTool";
import { compressFaq } from "@/content/faq";
import { toolHead } from "@/lib/seo";

const TITLE = "Free PDF Compressor — Reduce Size Online, No Upload";
const DESC = "Compress PDF files in your browser. Choose quality. No account, no watermark.";
const STEPS = [
  "Drop one or more PDFs.",
  "Pick High, Balanced, or Maximum.",
  "Tap Compress — rewriting happens on your device.",
  "Compare original vs new size and download.",
];

export const Route = createFileRoute("/compress")({
  head: () =>
    toolHead({
      title: TITLE,
      description: DESC,
      path: "/compress",
      appName: "Free PDF Compressor",
      faqs: compressFaq,
      howToName: "How to compress a PDF online",
      howToSteps: STEPS,
    }),
  component: CompressPage,
});

function CompressPage() {
  return (
    <AppShell>
      <CompressTool />
    </AppShell>
  );
}
