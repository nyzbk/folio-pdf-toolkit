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
import { mergeFaq } from "@/content/faq";
import { mergeIntro, mergeSections } from "@/content/sections";
import { Sections, GuideCtas } from "@/components/content/Sections";
import { inspectPdfFile } from "@/lib/pdf/guard";
import { mergePdfs } from "@/lib/pdf/merge";
import { downloadBlob, bytesToBlob, formatBytes, stampFilename } from "@/lib/utils";

export function MergeTool() {
  const [items, setItems] = useState<ListedFile[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ blob: Blob; name: string; size: number } | null>(null);

  async function addFiles(files: File[]) {
    setError(null);
    setResult(null);
    const next: ListedFile[] = [];
    for (const file of files) {
      const info = await inspectPdfFile(file);
      next.push({
        id: `${file.name}-${file.size}-${file.lastModified}-${crypto.randomUUID()}`,
        file,
        ...info,
      });
    }
    setItems((prev) => [...prev, ...next]);
  }

  function move(id: string, dir: -1 | 1) {
    setItems((prev) => {
      const i = prev.findIndex((p) => p.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= prev.length) return prev;
      const copy = [...prev];
      const tmp = copy[i]!;
      copy[i] = copy[j]!;
      copy[j] = tmp;
      return copy;
    });
  }

  async function onMerge() {
    const valid = items.filter((i) => !i.error);
    if (valid.length < 2) {
      setError("Add at least two valid PDF files to merge.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const bytes = await mergePdfs(valid.map((v) => v.file));
      const blob = bytesToBlob(bytes, "application/pdf");
      setResult({ blob, name: stampFilename("merged", "folio"), size: blob.size });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Merge failed.");
    } finally {
      setBusy(false);
    }
  }

  function startOver() {
    setItems([]);
    setResult(null);
    setError(null);
  }

  const readyCount = items.filter((i) => !i.error).length;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="font-display text-[1.75rem] font-medium leading-tight tracking-tight sm:text-4xl">
        Merge PDF files in your browser
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
        Combine multiple PDFs into one file on this device. No upload, no account, no watermark.
      </p>
      {mergeIntro.map((para) => (
        <p key={para.slice(0, 32)} className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/90">
          {para}
        </p>
      ))}
      <PrivacyNote />

      <div className="mt-8">
        <DropZone multiple disabled={busy} onFiles={addFiles} hint="Add two or more PDFs, then reorder if you need to." />
        <FileList items={items} onRemove={(id) => setItems((p) => p.filter((x) => x.id !== id))} onMove={move} />
        {items.length > 0 ? (
          <div className="mt-3">
            <Button type="button" variant="ghost" onClick={startOver}>
              Clear all
            </Button>
          </div>
        ) : null}
      </div>

      <div className="mt-6">
        <Button type="button" onClick={onMerge} disabled={busy || readyCount < 2} className="min-h-12 w-full sm:w-auto sm:px-10">
          {busy ? "Merging in your browser…" : "Merge PDFs"}
        </Button>
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-sm text-danger">
          {error}
        </p>
      ) : null}

      {result ? (
        <SuccessDownload
          title="Merge complete"
          detail={`${formatBytes(result.size)} · ready to download`}
          downloadLabel="Download merged PDF"
          onDownload={() => downloadBlob(result.blob, result.name)}
          onStartOver={startOver}
        />
      ) : null}

      <HowItWorks
        steps={[
          "Drop or choose two or more PDF files. Each file is checked in this tab, not on a server.",
          "Reorder them with the arrows. The merged PDF follows that list from top to bottom.",
          "Tap Merge. Pages are copied in memory with pdf-lib. The tab must stay open.",
          "Download the combined PDF. There is no watermark. Closing the tab discards the bytes.",
        ]}
      />
      <AdUnit slot="mid" className="mt-10" />
      <Sections sections={mergeSections} />
      <GuideCtas
        toolHref="/how-to-split"
        toolLabel="How to split a PDF"
        extra={{ href: "/how-to-compress", label: "How to compress without uploading" }}
      />
      <FaqSection items={mergeFaq} />
      <RelatedTools current="merge" />
    </main>
  );
}
