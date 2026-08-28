export type CopySection = {
  h2?: string;
  p: string[];
};

export function Sections({ sections, className = "mt-14" }: { sections: CopySection[]; className?: string }) {
  return (
    <div className={`${className} space-y-10`}>
      {sections.map((section) => (
        <section key={section.h2 ?? section.p[0]}>
          {section.h2 ? (
            <h2 className="font-display text-2xl font-medium tracking-tight">{section.h2}</h2>
          ) : null}
          {section.p.map((para) => (
            <p key={para.slice(0, 48)} className="mt-3 text-sm leading-relaxed text-ink/90">
              {para}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

export function StepList({
  title,
  steps,
}: {
  title: string;
  steps: { title: string; body: string }[];
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-medium tracking-tight">{title}</h2>
      <ol className="mt-5 list-decimal space-y-5 pl-5">
        {steps.map((step, i) => (
          <li key={step.title} className="text-sm leading-relaxed text-ink/90">
            <h3 className="font-medium text-ink">
              {i + 1}. {step.title}
            </h3>
            <p className="mt-2 text-ink/90">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function GuideCtas({
  toolHref,
  toolLabel,
  extra,
}: {
  toolHref: string;
  toolLabel: string;
  extra?: { href: string; label: string };
}) {
  return (
    <p className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-sm">
      <a href={toolHref} className="font-medium text-copper underline-offset-4 hover:underline">
        {toolLabel}
      </a>
      {extra ? (
        <a href={extra.href} className="text-muted underline-offset-4 hover:text-ink hover:underline">
          {extra.label}
        </a>
      ) : null}
    </p>
  );
}
