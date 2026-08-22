import { Check } from "lucide-react";
import { AdUnit } from "@/components/ads/AdUnit";
import { SoftAgencyCta } from "@/components/ads/SoftAgencyCta";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  detail?: string;
  downloadLabel: string;
  onDownload: () => void;
  onStartOver: () => void;
};

export function SuccessDownload({ title, detail, downloadLabel, onDownload, onStartOver }: Props) {
  return (
    <section className="mt-8 rounded-xl border border-line bg-surface p-5 shadow-soft">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex size-8 items-center justify-center rounded-full bg-ok/10 text-ok">
          <Check className="size-4" strokeWidth={2.5} />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-xl font-medium tracking-tight">{title}</h2>
          {detail ? <p className="mt-1 text-sm text-muted">{detail}</p> : null}
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button type="button" onClick={onDownload} className="min-h-12 flex-1">
          {downloadLabel}
        </Button>
        <Button type="button" variant="secondary" onClick={onStartOver} className="min-h-12">
          Start over
        </Button>
      </div>
      <div className="mt-6">
        <SoftAgencyCta />
      </div>
      <AdUnit slot="after-success" className="mt-6" />
    </section>
  );
}
