import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { legalHead } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    legalHead({
      title: "Privacy Policy — Folio PDF Toolkit",
      description: "Folio processes PDFs in your browser. Files are not uploaded or stored on a server.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <AppShell showTabs={false}>
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="font-display text-3xl font-medium tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: 28 August 2026</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/90">
          <p>
            Folio (the “PDF Toolkit”) is operated so that merge, split and compress happen in your
            browser. We do not upload, store or view the contents of your PDF files.
          </p>
          <h2 className="font-display text-xl font-medium">What we process</h2>
          <p>
            PDF bytes stay in memory on your device for the duration of the session. Closing the tab
            discards them. We may receive standard server logs (IP address, user-agent, referrer) for
            security and abuse prevention.
          </p>
          <h2 className="font-display text-xl font-medium">Cookies and advertising</h2>
          <p>
            When live ads are enabled we use Google AdSense, which may set cookies according to
            Google’s Privacy Policy. Until then, ad slots are placeholders only.
          </p>
          <h2 className="font-display text-xl font-medium">Retention</h2>
          <p>We do not retain user PDFs. Server logs are kept for up to 90 days.</p>
          <h2 className="font-display text-xl font-medium">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-copper underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
            . Do not email PDFs unless we ask. See also the{" "}
            <a href="/contact" className="underline-offset-4 hover:underline">
              contact page
            </a>
            .
          </p>
        </div>
      </main>
    </AppShell>
  );
}
