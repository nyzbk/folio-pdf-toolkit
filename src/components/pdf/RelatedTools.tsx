const TOOLS = [
  {
    href: "/",
    id: "merge",
    title: "Merge PDF",
    blurb: "Combine PDF files into one document. Free, no signup.",
  },
  {
    href: "/split",
    id: "split",
    title: "Split PDF",
    blurb: "Extract pages or split a PDF into separate files.",
  },
  {
    href: "/compress",
    id: "compress",
    title: "Compress PDF",
    blurb: "Reduce PDF file size in your browser.",
  },
] as const;

export function RelatedTools({ current }: { current: "merge" | "split" | "compress" }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-medium tracking-tight">More free PDF tools</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {TOOLS.filter((t) => t.id !== current).map((t) => (
          <li key={t.href}>
            <a
              href={t.href}
              className="block rounded-lg border border-line bg-surface p-4 no-underline hover:border-copper"
            >
              <span className="font-medium text-ink">{t.title}</span>
              <span className="mt-1 block text-sm text-muted">{t.blurb}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
