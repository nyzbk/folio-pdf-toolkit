import { pageCountOf } from "./load";

const MAX_FILE_BYTES = 80 * 1024 * 1024;

export async function assertSafePdf(file: File): Promise<void> {
  if (file.size <= 0) {
    throw new Error("This file is empty.");
  }
  if (file.size > MAX_FILE_BYTES) {
    throw new Error("This file is too large for this device’s memory. Try a smaller PDF.");
  }
  const name = file.name.toLowerCase();
  const typeOk = file.type === "application/pdf" || name.endsWith(".pdf");
  if (!typeOk) {
    throw new Error("Only PDF files are accepted.");
  }
  const head = new Uint8Array(await file.slice(0, 8).arrayBuffer());
  const sig = String.fromCharCode(head[0]!, head[1]!, head[2]!, head[3]!);
  if (sig !== "%PDF") {
    throw new Error("This file is not a valid PDF.");
  }
}

export async function inspectPdfFile(file: File): Promise<{ pageCount?: number; error?: string }> {
  try {
    await assertSafePdf(file);
    const pageCount = await pageCountOf(file);
    return { pageCount };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Could not read this PDF." };
  }
}
