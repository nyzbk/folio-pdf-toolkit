import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { CompressTool } from "@/components/pdf/CompressTool";
import { compressFaq } from "@/content/faq";
import { toolHead } from "@/lib/seo";

const TITLE = "Compress a PDF in your browser — no upload, no rasterize";
const DESC =
  "Rewrite a PDF locally to trim metadata and objects. Text stays selectable. Scans of paper often will not shrink.";
const STEPS = [
  "Drop one or more PDFs. Each file is checked in this tab. Passwords are refused.",
  "Pick High to keep metadata, Balanced as the default, or Maximum to drop title and author.",
  "Tap Compress. Pages are copied in memory. Image scans are not downsampled.",
  "Compare original vs new size. Download only if the saving is worth the rewrite.",
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
