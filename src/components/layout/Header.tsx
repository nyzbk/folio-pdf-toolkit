export function Header() {
  return (
    <header className="border-b border-line bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4">
        <a href="/" className="flex items-baseline gap-2 no-underline">
          <span className="font-display text-xl font-medium tracking-tight text-ink">Folio</span>
          <span className="hidden text-sm text-muted sm:inline">Free PDF Toolkit</span>
        </a>
        <nav aria-label="PDF guides" className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-xs sm:text-sm">
          <a href="/split" className="text-muted no-underline hover:text-ink">
            Split
          </a>
          <a href="/compress" className="text-muted no-underline hover:text-ink">
            Compress
          </a>
          <a href="/email" className="text-muted no-underline hover:text-ink">
            Email
          </a>
          <a href="/scan" className="hidden text-muted no-underline hover:text-ink sm:inline">
            Scans
          </a>
          <a href="/faq" className="text-muted no-underline hover:text-ink">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
