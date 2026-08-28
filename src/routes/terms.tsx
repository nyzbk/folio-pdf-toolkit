import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { legalHead } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    legalHead({
      title: "Terms of Service — Folio PDF Toolkit",
      description: "Terms for using Folio, the free private PDF merger, splitter and compressor.",
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <AppShell showTabs={false}>
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="font-display text-3xl font-medium tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">Last updated: 28 August 2026</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/90">
          <p>By using Folio you agree to these Terms and the Privacy Policy.</p>
          <p>
            The tools are provided “as is”. We do not warrant that merged, split or compressed files
            will meet a particular legal, archival or print standard.
          </p>
          <p>
            To the maximum extent permitted by law we are not liable for lost data, incorrect
            processing or business losses arising from use of the tools.
          </p>
          <p>Do not use the tools to process illegal content or to attack the service.</p>
          <p>Output files belong to you. The tool’s design and code belong to us.</p>
          <p>
            Questions:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-copper underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
            . Do not send the PDF unless we ask.
          </p>
        </div>
      </main>
    </AppShell>
  );
}
