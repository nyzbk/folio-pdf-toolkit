import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const TABS = [
  { href: "/", label: "Merge" },
  { href: "/split", label: "Split" },
  { href: "/compress", label: "Compress" },
] as const;

export function ToolTabs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav aria-label="PDF tools" className="border-b border-line">
      <div className="mx-auto grid max-w-3xl grid-cols-3">
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          return (
            <a
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex min-h-12 items-center justify-center text-sm font-medium no-underline transition-colors",
                active
                  ? "border-b-2 border-copper text-ink"
                  : "border-b-2 border-transparent text-muted hover:text-ink",
              )}
            >
              {tab.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
