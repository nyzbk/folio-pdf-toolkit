import type { ReactNode } from "react";

/** Inline Folio links: [Email size](/email) or [mail](mailto:…). External http is left as text. */
const TOKEN = /\[([^\]]+)\]\((\/[^\s)]+|mailto:[^\s)]+)\)/g;

export function stripMdLinks(text: string): string {
  return text.replace(TOKEN, "$1");
}

export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  const re = new RegExp(TOKEN.source, "g");
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    nodes.push(
      <a
        key={`n${key++}`}
        href={match[2]}
        className="text-copper underline underline-offset-4 hover:text-ink"
      >
        {match[1]}
      </a>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
