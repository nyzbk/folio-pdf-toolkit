import { useState } from "react";
import { AdUnit } from "@/components/ads/AdUnit";
import { Button } from "@/components/ui/button";
import { DropZone } from "@/components/pdf/DropZone";
import { FaqSection } from "@/components/pdf/FaqSection";
import { FileList, type ListedFile } from "@/components/pdf/FileList";
import { HowItWorks } from "@/components/pdf/HowItWorks";
import { PrivacyNote } from "@/components/pdf/PrivacyNote";
import { RelatedTools } from "@/components/pdf/RelatedTools";
import { SuccessDownload } from "@/components/pdf/SuccessDownload";
import { compressFaq } from "@/content/faq";
import { compressIntro, compressSections } from "@/content/sections";
import { GuideCtas, Sections } from "@/components/content/Sections";
import { compressPdf, type CompressQuality } from "@/lib/pdf/compress";
import { inspectPdfFile } from "@/lib/pdf/guard";
import { downloadBlob, bytesToBlob, formatBytes, stampFilename } from "@/lib/utils";
import { cn } from "@/lib/utils";
import JSZip from "jszip";

const PRESETS: { id: CompressQuality; label: string; hint: string }[] = [
  { id: "high", label: "High quality", hint: "Light rewrite, keep structure" },
  { id: "balanced", label: "Balanced", hint: "Strip extra metadata" },
  { id: "max", label: "Maximum", hint: "Smallest object streams" },
];

export function CompressTool() {
  const [items, setItems] = useState<ListedFile[]>([]);
  const [quality, setQuality] = useState<CompressQuality>("balanced");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; name: string; label: string } | null>(null);

  async function addFiles(files: File[]) {
    setError(null);
    setResult(null);
    const next: ListedFile[] = [];
    for (const file of files) {
      const info = await inspectPdfFile(file);
      next.push({ id: `${file.name}-${crypto.randomUUID()}`, file, ...info });
    }
    setItems((prev) => [...prev, ...next]);
  }

  async function onCompress() {
    const valid = items.filter((i) => !i.error);
    if (!valid.length) {
      setError("Add at least one valid PDF.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const outputs: { name: string; bytes: Uint8Array; before: number; after: number }[] = [];
      for (const item of valid) {
        const out = await compressPdf(item.file, quality);
        outputs.push({
          name: stampFilename(item.file.name, "compressed"),
          ...out,
        });
      }
      if (outputs.length === 1) {
        const only = outputs[0]!;
        const blob = bytesToBlob(only.bytes, "application/pdf");
        setResult({
          blob,
          name: only.name,
          label: `${formatBytes(only.before)} → ${formatBytes(only.after)}`,
        });
      } else {
        const zip = new JSZip();
        let before = 0;
        let after = 0;
        for (const o of outputs) {
          zip.file(o.name, o.bytes);
          before += o.before;
          after += o.after;
        }
        const blob = await zip.generateAsync({ type: "blob" });
        setResult({
          blob,
          name: stampFilename("compressed", "folio", "zip"),
          label: `${formatBytes(before)} → ${formatBytes(after)} · ${outputs.length} files`,
        });
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Compress failed.");
    } finally {
      setBusy(false);
    }
  }

  function startOver() {
    setItems([]);
    setResult(null);
    setError(null);
  }

  const ready = items.filter((i) => !i.error).length;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="font-display text-[1.75rem] font-medium leading-tight tracking-tight sm:text-4xl">
        Compress a PDF in your browser
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
        Rewrite a PDF locally to trim structure and metadata. No upload. Scans of paper may not shrink.
      </p>
      {compressIntro.map((para) => (
        <p key={para.slice(0, 32)} className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/90">
          {para}
        </p>
      ))}
      <PrivacyNote />

      <div className="mt-8">
        <DropZone multiple disabled={busy} onFiles={addFiles} hint="One or more PDFs." />
        <FileList items={items} onRemove={(id) => setItems((p) => p.filter((x) => x.id !== id))} />
        {items.length > 0 ? (
          <Button type="button" variant="ghost" className="mt-3" onClick={startOver}>
            Clear all
          </Button>
        ) : null}
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">Quality</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setQuality(p.id)}
              className={cn(
                "min-h-14 rounded-lg border px-3 py-2 text-left text-sm",
                quality === p.id ? "border-copper bg-surface" : "border-line bg-surface/60 hover:border-ink/30",
              )}
            >
              <span className="block font-medium">{p.label}</span>
              <span className="text-xs text-muted">{p.hint}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <Button type="button" onClick={onCompress} disabled={busy || ready < 1} className="min-h-12 w-full sm:w-auto sm:px-10">
          {busy ? "Compressing in your browser…" : "Compress PDF"}
        </Button>
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-sm text-danger">
          {error}
        </p>
      ) : null}

      {result ? (
        <SuccessDownload
          title="Compression complete"
          detail={result.label}
          downloadLabel={result.name.endsWith(".zip") ? "Download ZIP" : "Download PDF"}
          onDownload={() => downloadBlob(result.blob, result.name)}
          onStartOver={startOver}
        />
      ) : null}

      <HowItWorks
        steps={[
          "Drop one or more PDFs. Each file is checked in this tab. Passwords are refused.",
          "Pick High to keep metadata, Balanced as the default, or Maximum to drop title and author.",
          "Tap Compress. Pages are copied in memory. Image scans are not downsampled.",
          "Compare original vs new size. Download only if the saving is worth the rewrite.",
        ]}
      />
      <AdUnit slot="mid" className="mt-10" />
      <Sections sections={compressSections} />
      <GuideCtas
        toolHref="/how-to-compress"
        toolLabel="Full guide: compress without uploading"
        extra={{ href: "/use-cases", label: "When Gmail refuses a brochure" }}
      />
      <FaqSection items={compressFaq} />
      <RelatedTools current="compress" />
    </main>
  );
}
