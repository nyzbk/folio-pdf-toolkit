import { PDFDocument } from "pdf-lib";
import { mapPdfError } from "./errors";
import { loadPdf } from "./load";

export async function mergePdfs(files: File[]): Promise<Uint8Array> {
  if (files.length < 2) {
    throw new Error("Add at least two PDF files to merge.");
  }

  try {
    const out = await PDFDocument.create();
    for (const file of files) {
      const src = await loadPdf(await file.arrayBuffer());
      const count = src.getPageCount();
      if (count < 1) throw new Error(`“${file.name}” has no pages.`);
      const copied = await out.copyPages(src, src.getPageIndices());
      for (const page of copied) out.addPage(page);
    }
    if (out.getPageCount() < 1) throw new Error("Nothing to merge.");
    return await out.save({ useObjectStreams: true });
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("This ")) throw error;
    throw new Error(mapPdfError(error));
  }
}
