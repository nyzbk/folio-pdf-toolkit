export function Header() {
  return (
    <header className="border-b border-line bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4">
        <a href="/" className="flex items-baseline gap-2 no-underline">
          <span className="font-display text-xl font-medium tracking-tight text-ink">Folio</span>
          <span className="hidden text-sm text-muted sm:inline">Free PDF Toolkit</span>
        </a>
        <nav aria-label="Guides" className="flex items-center gap-3 text-xs sm:text-sm">
          <a href="/faq" className="text-muted no-underline hover:text-ink">
            FAQ
          </a>
          <a href="/how-to-split" className="hidden text-muted no-underline hover:text-ink sm:inline">
            How-to
          </a>
          <a href="/contact" className="text-muted no-underline hover:text-ink">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
