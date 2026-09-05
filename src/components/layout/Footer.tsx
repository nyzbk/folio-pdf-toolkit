import { AdUnit } from "@/components/ads/AdUnit";
import { SoftAgencyCta } from "@/components/ads/SoftAgencyCta";

const LINKS = [
  { href: "/", label: "Merge" },
  { href: "/split", label: "Split" },
  { href: "/compress", label: "Compress" },
  { href: "/how-to-merge", label: "How to merge" },
  { href: "/how-to-split", label: "How to split" },
  { href: "/how-to-compress", label: "How to compress" },
  { href: "/email", label: "Email size" },
  { href: "/scan", label: "Scans" },
  { href: "/whatsapp", label: "WhatsApp" },
  { href: "/faq", label: "FAQ" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface/60">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-10">
        <SoftAgencyCta />
        <nav aria-label="Site" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted underline-offset-4 hover:text-ink hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <AdUnit slot="footer" />
        <p className="text-center text-xs text-subtle">
          Files never leave your device. Processing happens in your browser.
        </p>
      </div>
    </footer>
  );
}
