import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About — Folio PDF Toolkit" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <AppShell showTabs={false}>
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="font-display text-3xl font-medium tracking-tight">About this free tool</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-ink/90">
          <p>
            Folio is a free PDF toolkit — merge, split and compress — that runs entirely in your
            browser. Files never leave your device.
          </p>
          <p>
            It is built and maintained as a public utility alongside $10k websites, brand identity
            systems and custom web applications.
          </p>
          <p>
            Primary actions stay clear of ads. Privacy and a clean mobile layout come first. If you
            need a custom website or product, say hello through the agency site when it is live.
          </p>
        </div>
      </main>
    </AppShell>
  );
}
