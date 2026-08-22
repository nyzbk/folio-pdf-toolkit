export function mapPdfError(error: unknown): string {
  const msg = error instanceof Error ? error.message : String(error);

  if (/password|encrypt/i.test(msg)) {
    return "This PDF is password-protected and cannot be processed in the browser. Remove the password first, then try again.";
  }
  if (/invalid|corrupt|parse|trailer|xref/i.test(msg)) {
    return "This file appears to be corrupted or is not a valid PDF.";
  }
  if (/memory|allocation|array buffer|too large|maximum/i.test(msg)) {
    return "This file is too large for this device’s available memory. Try a smaller file, fewer files, or a desktop browser.";
  }
  if (error instanceof RangeError) {
    return "This file is too large for this device’s available memory. Try a smaller file.";
  }
  return "Could not process this PDF. Try another file.";
}
