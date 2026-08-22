import { PDFDocument } from "pdf-lib";
import JSZip from "jszip";
import { mapPdfError } from "./errors";
import { loadPdf } from "./load";

export type SplitMode = "range" | "everyN" | "perPage";

export function parsePageRanges(input: string, totalPages: number): number[] {
  const parts = input
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length === 0) {
    throw new Error("Enter at least one page or range, for example 1-3, 5, 8-10.");
  }
  const indices = new Set<number>();
  for (const part of parts) {
    const range = part.match(/^(\d+)\s*[-–]\s*(\d+)$/);
    if (range) {
      let a = Number(range[1]);
      let b = Number(range[2]);
      if (a > b) [a, b] = [b, a];
      if (a < 1 || b > totalPages) {
        throw new Error(`Pages must be between 1 and ${totalPages}.`);
      }
      for (let i = a; i <= b; i++) indices.add(i - 1);
      continue;
    }
    if (/^\d+$/.test(part)) {
      const n = Number(part);
      if (n < 1 || n > totalPages) {
        throw new Error(`Pages must be between 1 and ${totalPages}.`);
      }
      indices.add(n - 1);
      continue;
    }
    throw new Error(`Could not understand “${part}”. Use 1-3, 5, 8-10.`);
  }
  return Array.from(indices).sort((a, b) => a - b);
}

export function groupsEveryN(totalPages: number, n: number): number[][] {
  if (!Number.isInteger(n) || n < 1) throw new Error("N must be a whole number of 1 or more.");
  const groups: number[][] = [];
  for (let i = 0; i < totalPages; i += n) {
    const group: number[] = [];
    for (let j = i; j < Math.min(i + n, totalPages); j++) group.push(j);
    groups.push(group);
  }
  return groups;
}

export function groupsPerPage(totalPages: number): number[][] {
  return Array.from({ length: totalPages }, (_, i) => [i]);
}

async function extractGroup(src: PDFDocument, pages: number[]): Promise<Uint8Array> {
  const out = await PDFDocument.create();
  const copied = await out.copyPages(src, pages);
  for (const page of copied) out.addPage(page);
  return out.save({ useObjectStreams: true });
}

export async function splitPdf(file: File, groups: number[][]): Promise<{ name: string; bytes: Uint8Array }[]> {
  try {
    const src = await loadPdf(await file.arrayBuffer());
    const total = src.getPageCount();
    if (total < 1) throw new Error("This PDF has no pages.");
    const results: { name: string; bytes: Uint8Array }[] = [];
    for (const group of groups) {
      if (group.some((i) => i < 0 || i >= total)) {
        throw new Error(`Pages must be between 1 and ${total}.`);
      }
      const bytes = await extractGroup(src, group);
      const from = group[0]! + 1;
      const to = group[group.length - 1]! + 1;
      const label = from === to ? `page-${String(from).padStart(2, "0")}` : `pages-${from}-${to}`;
      results.push({ name: `${label}.pdf`, bytes });
    }
    return results;
  } catch (error) {
    if (error instanceof Error && /page|range|understand|between|no pages/i.test(error.message)) {
      throw error;
    }
    throw new Error(mapPdfError(error));
  }
}

export async function zipPdfParts(parts: { name: string; bytes: Uint8Array }[]): Promise<Blob> {
  const zip = new JSZip();
  for (const part of parts) zip.file(part.name, part.bytes);
  return zip.generateAsync({ type: "blob" });
}
