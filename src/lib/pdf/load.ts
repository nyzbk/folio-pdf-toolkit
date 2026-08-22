import { PDFDocument } from "pdf-lib";
import { mapPdfError } from "./errors";

export async function loadPdf(bytes: ArrayBuffer): Promise<PDFDocument> {
  try {
    return await PDFDocument.load(bytes, { updateMetadata: false });
  } catch (error) {
    throw new Error(mapPdfError(error));
  }
}

export async function pageCountOf(file: File): Promise<number> {
  const bytes = await file.arrayBuffer();
  const doc = await loadPdf(bytes);
  const count = doc.getPageCount();
  if (count < 1) throw new Error("This PDF has no pages.");
  return count;
}
