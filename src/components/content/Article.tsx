import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { AdUnit } from "@/components/ads/AdUnit";
import { GuideCtas } from "@/components/content/Sections";
import { RelatedGuides } from "@/components/content/RelatedGuides";

export function Article({
  title,
  lede,
  toolHref,
  toolLabel,
  extra,
  children,
  related,
}: {
  title: string;
  lede: string;
  toolHref: string;
  toolLabel: string;
  extra?: { href: string; label: string };
  children: ReactNode;
  related?: string;
}) {
  return (
    <AppShell showTabs={false}>
      <article className="folio-article mx-auto max-w-2xl px-4 py-10">
        <h1 className="font-display text-3xl font-medium tracking-tight">{title}</h1>
        <p className="mt-4 text-base leading-relaxed text-ink/90">{lede}</p>
        <GuideCtas toolHref={toolHref} toolLabel={toolLabel} extra={extra} />
        {children}
        <AdUnit slot="mid" className="mt-10" />
        <RelatedGuides current={related} />
        <GuideCtas toolHref={toolHref} toolLabel={toolLabel} extra={extra} />
      </article>
    </AppShell>
  );
}
