import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { GuideCtas, Sections } from "@/components/content/Sections";
import { aboutSections } from "@/content/sections";
import { articleHead } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    articleHead({
      title: "About Folio — local PDF merge, split and compress",
      description:
        "Folio is a browser PDF toolkit. Files stay on the device. No account, no watermark, no conversion server.",
      path: "/about",
      appName: "About Folio",
      includeApp: false,
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <AppShell showTabs={false}>
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="font-display text-3xl font-medium tracking-tight">About Folio</h1>
        <Sections sections={aboutSections} className="mt-8" />
        <p className="mt-8 text-sm">
          Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-copper underline-offset-4 hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <GuideCtas
          toolHref="/"
          toolLabel="Merge PDFs"
          extra={{ href: "/faq", label: "FAQ" }}
        />
      </main>
    </AppShell>
  );
}
