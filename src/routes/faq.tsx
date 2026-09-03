import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { FaqSection } from "@/components/pdf/FaqSection";
import { folioFaq } from "@/content/faq";
import { articleHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    articleHead({
      title: "Folio FAQ — PDF merge, split and compress in the browser",
      description:
        "Whether PDFs leave the device, file size, passwords, forms, scans, ads, and who operates Folio.",
      path: "/faq",
      appName: "Folio FAQ",
      includeApp: false,
      faqs: folioFaq,
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <AppShell showTabs={false}>
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="font-display text-3xl font-medium tracking-tight">Frequently asked questions</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink/90">
          These answers are about Folio’s PDF tools — merge, split and compress — running in this
          browser. They are not a generic converter FAQ.
        </p>
        <FaqSection items={folioFaq} />
        <p className="mt-10 text-sm">
          <a href="/contact" className="text-copper underline-offset-4 hover:underline">
            Contact
          </a>
          {" · "}
          <a href="/how-to-merge" className="text-copper underline-offset-4 hover:underline">
            Merge guide
          </a>
          {" · "}
          <a href="/how-to-split" className="text-copper underline-offset-4 hover:underline">
            Split guide
          </a>
          {" · "}
          <a href="/how-to-compress" className="text-copper underline-offset-4 hover:underline">
            Compress guide
          </a>
          {" · "}
          <a href="/email" className="text-copper underline-offset-4 hover:underline">
            Email size
          </a>
          {" · "}
          <a href="/scan" className="text-copper underline-offset-4 hover:underline">
            Scans
          </a>
        </p>
      </main>
    </AppShell>
  );
}
