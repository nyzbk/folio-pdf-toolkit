import { Fragment, type ReactNode } from "react";

const TOKEN = /(\[[^\]]+\]\([^)]+\))/g;

export function stripMarkdownLinks(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export const stripMdLinks = stripMarkdownLinks;

export function richNodes(text: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (!m) return <Fragment key={i}>{part}</Fragment>;
    const href = m[2];
    const external = /^https?:\/\//.test(href);
    return (
      <a
        key={i}
        href={href}
        className="font-medium text-copper underline-offset-4 hover:underline"
        {...(external ? { rel: "noopener noreferrer" } : {})}
      >
        {m[1]}
      </a>
    );
  });
}

export function RichText({
  text,
  as: Tag = "p",
  className,
}: {
  text: string;
  as?: "p" | "span" | "li" | "h3";
  className?: string;
}) {
  return <Tag className={className}>{richNodes(text)}</Tag>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className="font-medium text-copper underline-offset-4 hover:underline"
      {...(external ? { rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-sm leading-relaxed text-ink/90">{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl font-medium tracking-tight">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-6 text-sm font-medium text-ink">{children}</h3>;
}
