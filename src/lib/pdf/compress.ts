import { PDFDocument } from "pdf-lib";
import { mapPdfError } from "./errors";
import { loadPdf } from "./load";

export type CompressQuality = "high" | "balanced" | "max";

export async function compressPdf(
  file: File,
  quality: CompressQuality,
): Promise<{ bytes: Uint8Array; before: number; after: number }> {
  try {
    const before = file.size;
    const src = await loadPdf(await file.arrayBuffer());
    const out = await PDFDocument.create();
    const copied = await out.copyPages(src, src.getPageIndices());
    for (const page of copied) out.addPage(page);

    if (quality !== "high") {
      out.setTitle("");
      out.setAuthor("");
      out.setSubject("");
      out.setKeywords([]);
      out.setProducer("Folio PDF Toolkit");
      out.setCreator("Folio PDF Toolkit");
    }

    const bytes = await out.save({
      useObjectStreams: quality !== "high",
      addDefaultPage: false,
    });
    return { bytes, before, after: bytes.byteLength };
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("This ")) throw error;
    throw new Error(mapPdfError(error));
  }
}
