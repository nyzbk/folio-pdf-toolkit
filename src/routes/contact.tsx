import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Sections } from "@/components/content/Sections";
import { contactSections } from "@/content/sections";
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
        <p className="mt-4 text-sm leading-relaxed">
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-copper underline-offset-4 hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <Sections sections={contactSections} className="mt-6" />
      </main>
    </AppShell>
  );
}
