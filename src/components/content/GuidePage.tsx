import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { GuideCtas, Sections, StepList, type CopySection } from "@/components/content/Sections";
import { AdUnit } from "@/components/ads/AdUnit";

type Guide = {
  title: string;
  lede: string;
  intro: string[];
  steps: { title: string; body: string }[];
  after: CopySection[];
};

export function GuidePage({
  guide,
  toolHref,
  toolLabel,
  extra,
  children,
}: {
  guide: Guide;
  toolHref: string;
  toolLabel: string;
  extra?: { href: string; label: string };
  children?: ReactNode;
}) {
  return (
    <AppShell showTabs={false}>
      <article className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="font-display text-3xl font-medium tracking-tight">{guide.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-ink/90">{guide.lede}</p>
        {guide.intro.map((para) => (
          <p key={para.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-ink/90">
            {para}
          </p>
        ))}
        <GuideCtas toolHref={toolHref} toolLabel={toolLabel} extra={extra} />
        <StepList title="Steps" steps={guide.steps} />
        <AdUnit slot="mid" className="mt-10" />
        <Sections sections={guide.after} className="mt-10" />
        {children}
        <GuideCtas toolHref={toolHref} toolLabel={toolLabel} extra={extra} />
      </article>
    </AppShell>
  );
}
