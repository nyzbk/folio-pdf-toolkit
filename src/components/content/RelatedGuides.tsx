const GUIDES = [
  { href: "/how-to-merge", id: "merge", title: "How to merge PDFs", blurb: "Join two or more files in this tab. Reorder, download one packet." },
  { href: "/how-to-split", id: "split", title: "How to split a PDF", blurb: "Extract a range, equal chunks, or one file per page." },
  { href: "/how-to-compress", id: "compress", title: "How to compress a PDF", blurb: "Rewrite a digital export locally. Scans will barely move." },
  { href: "/email", id: "email", title: "Gmail and Outlook size caps", blurb: "25 MB is not 80 MB. MIME overhead, portals, Drive links." },
  { href: "/scan", id: "scan", title: "Why a scan stays heavy", blurb: "Photographs of paper are not a metadata problem." },
  { href: "/whatsapp", id: "whatsapp", title: "Send a PDF in WhatsApp", blurb: "Document vs photo. Chat caps are not Gmail caps." },
  { href: "/use-cases", id: "use-cases", title: "Six real PDF jobs", blurb: "Landlord packet, signature page, Gmail brochure, HR slot, chat, print vs mail." },
] as const;

export function RelatedGuides({ current }: { current?: string }) {
  const items = GUIDES.filter((g) => g.id !== current);
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-medium tracking-tight">Related on this site</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((g) => (
          <li key={g.href}>
            <a
              href={g.href}
              className="block rounded-lg border border-line bg-surface p-4 no-underline hover:border-copper"
            >
              <span className="font-medium text-ink">{g.title}</span>
              <span className="mt-1 block text-sm text-muted">{g.blurb}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
