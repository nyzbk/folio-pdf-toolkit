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
import { splitFaq } from "@/content/faq";
import { splitIntro, splitSections } from "@/content/sections";
import { GuideCtas, Sections } from "@/components/content/Sections";
import { inspectPdfFile } from "@/lib/pdf/guard";
import {
  groupsEveryN,
  groupsPerPage,
  parsePageRanges,
  splitPdf,
  zipPdfParts,
  type SplitMode,
} from "@/lib/pdf/split";
import { downloadBlob, bytesToBlob, formatBytes, stampFilename } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function SplitTool() {
  const [item, setItem] = useState<ListedFile | null>(null);
  const [mode, setMode] = useState<SplitMode>("range");
  const [range, setRange] = useState("1-1");
  const [every, setEvery] = useState("2");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; name: string; label: string } | null>(null);

  async function addFiles(files: File[]) {
    const file = files[0];
    if (!file) return;
    setError(null);
    setResult(null);
    const listed: ListedFile = { id: crypto.randomUUID(), file };
    const info = await inspectPdfFile(file);
    setItem({ ...listed, ...info });
    if (info.pageCount && info.pageCount > 1) setRange(`1-${info.pageCount}`);
    else if (info.pageCount === 1) setRange("1");
  }

  async function onSplit() {
    if (!item || item.error) {
      setError("Choose a valid PDF first.");
      return;
    }
    const total = item.pageCount ?? 0;
    setBusy(true);
    setError(null);
    try {
      let groups: number[][];
      if (mode === "range") {
        groups = [parsePageRanges(range, total)];
      } else if (mode === "everyN") {
        groups = groupsEveryN(total, Number(every));
      } else {
        groups = groupsPerPage(total);
      }
      const parts = await splitPdf(item.file, groups);
      if (parts.length === 1) {
        const blob = bytesToBlob(parts[0]!.bytes, "application/pdf");
        setResult({
          blob,
          name: stampFilename(item.file.name, "split"),
          label: `${formatBytes(blob.size)} · 1 file`,
        });
      } else {
        const blob = await zipPdfParts(parts);
        setResult({
          blob,
          name: stampFilename(item.file.name, "split", "zip"),
          label: `${formatBytes(blob.size)} · ${parts.length} files in ZIP`,
        });
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Split failed.");
    } finally {
      setBusy(false);
    }
  }

  function startOver() {
    setItem(null);
    setResult(null);
    setError(null);
  }

  const modes: { id: SplitMode; label: string; hint: string }[] = [
    { id: "range", label: "Page ranges", hint: "e.g. 1-3, 5, 8-10" },
    { id: "everyN", label: "Every N pages", hint: "Split into chunks" },
    { id: "perPage", label: "One PDF per page", hint: "Each page as a file" },
  ];

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="font-display text-[1.75rem] font-medium leading-tight tracking-tight sm:text-4xl">
        Split a PDF in your browser
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
        Extract page ranges, equal chunks, or one file per page. The source never leaves this device.
      </p>
      {splitIntro.map((para) => (
        <p key={para.slice(0, 32)} className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/90">
          {para}
        </p>
      ))}
      <PrivacyNote />

      <div className="mt-8">
        {item ? (
          <FileList items={[item]} onRemove={() => startOver()} />
        ) : (
          <DropZone multiple={false} disabled={busy} onFiles={addFiles} hint="One PDF at a time." />
        )}
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">Split mode</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {modes.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={cn(
                "min-h-14 rounded-lg border px-3 py-2 text-left text-sm",
                mode === m.id ? "border-copper bg-surface" : "border-line bg-surface/60 hover:border-ink/30",
              )}
            >
              <span className="block font-medium">{m.label}</span>
              <span className="text-xs text-muted">{m.hint}</span>
            </button>
          ))}
        </div>
      </fieldset>

      {mode === "range" ? (
        <label className="mt-4 block text-sm">
          Pages
          <input
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="mt-1 min-h-11 w-full rounded-md border border-line bg-surface px-3 text-sm"
            placeholder="1-3, 5, 8-10"
          />
        </label>
      ) : null}
      {mode === "everyN" ? (
        <label className="mt-4 block text-sm">
          Pages per file
          <input
            type="number"
            min={1}
            value={every}
            onChange={(e) => setEvery(e.target.value)}
            className="mt-1 min-h-11 w-full rounded-md border border-line bg-surface px-3 text-sm"
          />
        </label>
      ) : null}

      <div className="mt-6">
        <Button type="button" onClick={onSplit} disabled={busy || !item || Boolean(item.error)} className="min-h-12 w-full sm:w-auto sm:px-10">
          {busy ? "Splitting in your browser…" : "Split PDF"}
        </Button>
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-sm text-danger">
          {error}
        </p>
      ) : null}

      {result ? (
        <SuccessDownload
          title="Split complete"
          detail={result.label}
          downloadLabel={result.name.endsWith(".zip") ? "Download ZIP" : "Download PDF"}
          onDownload={() => downloadBlob(result.blob, result.name)}
          onStartOver={startOver}
        />
      ) : null}

      <HowItWorks
        steps={[
          "Drop one PDF. Folio counts pages in this tab and refuses passwords and non-PDFs.",
          "Choose ranges for one smaller file, every N pages for chunks, or one PDF per page for a ZIP.",
          "Tap Split. Pages are copied locally. Keep the tab open until the download is ready.",
          "Download a PDF or a ZIP. Closing the tab discards the parts from memory.",
        ]}
      />
      <AdUnit slot="mid" className="mt-10" />
      <Sections sections={splitSections} />
      <GuideCtas
        toolHref="/how-to-split"
        toolLabel="Full guide: split a PDF without uploading"
        extra={{ href: "/scan", label: "If it is a scan, not extra pages" }}
      />
      <FaqSection items={splitFaq} />
      <RelatedTools current="split" />
    </main>
  );
}
