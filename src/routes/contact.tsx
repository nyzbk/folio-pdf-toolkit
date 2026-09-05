import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { A, H2, P } from "@/components/content/RichText";
import { articleHead } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    articleHead({
      title: "Contact Folio — PDF toolkit",
      description: "Email the operator about Folio merge, split and compress. Do not attach PDFs unless asked.",
      path: "/contact",
      appName: "Contact",
      includeApp: false,
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <AppShell showTabs={false}>
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="font-display text-3xl font-medium tracking-tight">Contact</h1>
        <P>
          Email{" "}
          <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A> for a bug, a file type that
          should have worked, or a privacy question about this PDF toolkit.
        </P>
        <H2>What to include</H2>
        <P>
          The page URL — merge, split, compress, or a guide such as{" "}
          <A href="/email">email size</A>, <A href="/scan">scans</A>,{" "}
          <A href="/whatsapp">WhatsApp</A>. The browser and device. What you expected. If you saw
          an error message, paste it. Do not attach the PDF in the first email. Folio is built so
          documents stay on your device, and an inbox is still someone else’s server.
        </P>
        <P>
          We do not take feature commissions through this address, we do not unlock passwords, and
          we do not store files for you. For custom websites and brand work, the Agency note in
          the footer is the right door, not this inbox. Short answers that are already written:{" "}
          <A href="/faq">FAQ</A>. Who we are: <A href="/about">about Folio</A>.
        </P>
      </main>
    </AppShell>
  );
}
