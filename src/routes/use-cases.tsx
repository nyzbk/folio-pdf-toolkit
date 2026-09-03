import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { GuideCtas, Sections } from "@/components/content/Sections";
import { useCaseSections } from "@/content/sections";
import { articleHead } from "@/lib/seo";
import { AdUnit } from "@/components/ads/AdUnit";

export const Route = createFileRoute("/use-cases")({
  head: () =>
    articleHead({
      title: "Folio use cases — portal packets, Gmail brochures, chat caps",
      description:
        "Six real PDF jobs: portal packets, signature pages, Gmail brochures, HR uploads, chat caps, print vs mail. Local merge, split, compress. No upload.",
      path: "/use-cases",
      appName: "Folio use cases",
      includeApp: false,
    }),
  component: UseCasesPage,
});

function UseCasesPage() {
  return (
    <AppShell showTabs={false}>
      <article className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="font-display text-3xl font-medium tracking-tight">When to use Folio</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink/90">
          Six jobs that match merge, split and compress. If your document needs OCR, Word export or
          a fillable form rebuilt, this is the wrong site.
        </p>
        <Sections sections={useCaseSections} className="mt-8" />
        <AdUnit slot="mid" className="mt-10" />
        <GuideCtas
          toolHref="/"
          toolLabel="Merge PDFs"
          extra={{ href: "/split", label: "Split a PDF" }}
        />
      </article>
    </AppShell>
  );
}
