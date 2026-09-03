import type { FaqItem } from "@/components/pdf/FaqSection";
import { CONTACT_EMAIL, MAX_PDF_MB } from "@/lib/site";

export const folioFaq: FaqItem[] = [
  {
    q: "Do my PDF files leave this device?",
    a: "No. Folio merge, split and compress run in this browser tab with JavaScript. The PDF bytes are read into memory on your phone or computer, rewritten there, and offered back as a download from that same tab. We do not provide an upload API for documents, we do not store PDFs on a server, and closing the tab discards the bytes. That is the difference from typical online PDF sites, which send the file to a machine you do not control.",
  },
  {
    q: "Do I need an account or email to use Folio?",
    a: "No. Merge, split and compress never ask for a login, email or phone number. There is no quota tied to an account because there is no account. If a future optional feature ever needed sign-in, it would not gate the three tools on this site. You can finish a packet of contracts and leave without creating a profile.",
  },
  {
    q: "Is Folio free? Is there a watermark or a daily cap?",
    a: "The three tools are free. Downloads are not stamped with a Folio logo, a URL or a ‘trial’ banner. We do not reset a counter at midnight. The practical limits are your device memory and the per-file size guard (currently 80 MB), not a paywall. The site is supported by advertisement placeholders that sit after a finished action and in the footer — never over the Merge, Split or Compress button.",
  },
  {
    q: "Which browsers work, including iPhone Safari?",
    a: "Folio is built for current Chrome, Edge, Firefox and Safari, including Safari on iOS and Chrome on Android. You need JavaScript on. A desktop browser usually has more RAM, so a 60-page scan is more likely to finish on a laptop than on an old phone. If a phone tab reloads or Safari warns about memory, move the same file to a desktop and try again — the file never went to us, so nothing is waiting on a server.",
  },
  {
    q: "How large can a PDF be, and can I process a batch?",
    a: `Each file is rejected above ${MAX_PDF_MB} MB before we try to parse it, because a larger PDF will often crash a tab. Merge accepts two or more PDFs in one go. Compress accepts one or more and zips the results if you add several. Split works on one PDF at a time so page numbers stay unambiguous. A ‘batch’ that is really twenty 40 MB scans will still be limited by RAM; if the tab struggles, do fewer files per pass.`,
  },
  {
    q: "What happens if the PDF is password-protected?",
    a: "Folio cannot open an encrypted PDF in the browser without the password, and we will not ask you to type that password into this site. You will see an error instead of a silent failure. Remove the password in the tool that created the file (Preview, Acrobat, the scanner app), then drop the unprotected PDF here. We do not keep a keychain and we do not offer ‘unlock PDF’ as a product.",
  },
  {
    q: "Do interactive forms still work after compress or merge?",
    a: "Not reliably. Folio copies page content into a new PDF. Fillable fields, checkboxes, dropdowns and JavaScript actions often belong to a form catalog that is not rebuilt. A form that you still need to type into should not be compressed or merged here — keep the original. A form that is already filled and flattened as marks on the page will usually still look filled, because those marks are page content, but it may no longer be editable.",
  },
  {
    q: "Why does a scanned PDF barely get smaller?",
    a: "Most of a scan’s weight is the photograph of the paper, stored as images inside the PDF. Folio’s compressor rewrites the document structure: it can drop leftover metadata and pack objects more tightly. It does not downsample those photos, it does not run JPEG again, and it does not OCR the page into text. If the file is a 300 dpi colour scan, expect little or no saving. Born-digital PDFs (exports from Word, invoices, slides) shrink more often because they carry fonts, unused objects and fat metadata rather than photos of paper.",
  },
  {
    q: "Does the text stay selectable after compress?",
    a: "Yes for text that was already real text, not a picture of text. Folio does not rasterize pages into a single image, so copy-paste and find-in-document still work on digital PDFs. A scan remains a scan: you cannot select words that were never encoded as text. If you need searchable scans, run OCR in a dedicated tool first, then use Folio only to merge or split the result.",
  },
  {
    q: "Can I merge files again after I split them?",
    a: "Yes. Split writes ordinary PDFs (or a ZIP of PDFs). Drop those parts onto the Merge tab in the order you want. Page ranges that you extracted as one file come back as that file’s pages, in the order they had inside the extract. Nothing on our side remembers the original, because nothing was uploaded. Keep the source PDF if you might need a page you did not extract.",
  },
  {
    q: "Why is this on a vercel.app address? Is that safe?",
    a: "Folio is a static web app hosted on Vercel’s HTTPS. The vercel.app name is the current public URL, not a tracking subdomain we hide behind. HTTPS is valid. There is no login wall. Robots are allowed to fetch the public pages, ads.txt and the sitemap. The PDF you drop is still processed in your tab; the host only serves the HTML, JavaScript and fonts. A custom domain can come later. It would not change the local-processing model.",
  },
  {
    q: "When do ads appear, and do you ask me to click them?",
    a: "Ad slots are reserved after a successful download and in the footer, plus a mid-page slot below the how-it-works block. Until Google marks the site Ready they are placeholders, not live ads. We do not pay you to click, we do not instruct you to click, and we do not place ads over Merge / Split / Compress. Please do not click ads as a favour — that violates Google policy and can close the account.",
  },
  {
    q: "What is Folio not?",
    a: "Folio is not a cloud drive, not an archive, not e-sign, not OCR, not a password remover, and not an account. We do not convert PDF to Word or Excel. We do not host your files for a link you can share. We do not promise that a merged packet meets a court filing spec. If you need those jobs, use a tool built for them. Folio’s job is three local operations: merge, split, compress.",
  },
  {
    q: "Who runs Folio and how do I contact you?",
    a: `Folio is a local-first PDF utility maintained as a public tool, not a venture product with a sales team. For a bug, a broken PDF that should have worked, or a privacy question, email ${CONTACT_EMAIL}. Include the page URL, the browser, and what you expected. Do not attach the PDF unless we ask — the whole point of this site is that documents stay with you. We do not offer phone support.`,
  },
];

export const qGmail: FaqItem = {
  q: "Gmail said my PDF is too large. What should I click?",
  a: "If you can select text in the PDF, open Compress and try Balanced, then Maximum. If you cannot select text, it is probably a scan — Compress will barely help. Split out the pages the recipient needs, or recapture the paper at a smaller size. Folio does not email the file and does not give you a Drive link. Details: the Email size guide.",
};

export const qScanShrink: FaqItem = {
  q: "Will Folio shrink a scanned ID or a stack of photographed pages?",
  a: "Almost never in a way that matters. Those files are heavy because of the pictures inside, not because of PDF metadata. Folio does not downsample images and does not OCR. Split if you only need some pages. See the Scans guide. Do not upload an ID to a random compressor.",
};

export const qPrintShop: FaqItem = {
  q: "Can I print the merged file at a shop?",
  a: "You can download it and take it to a shop. Folio does not produce PDF/X or PDF/A on purpose. Page sizes are not forced to one paper size. A phone-photo PDF merged with an A4 lease may look odd on a plotter. For a press-ready brochure, keep the layout export. Folio output is for packets and mail, not a new print master.",
};

export const qAttachSize: FaqItem = {
  q: "What attachment size should I aim for?",
  a: "There is no single number. Gmail often fails near 25 MB. Some portals say 10 MB. WhatsApp document sends are frequently lower. Aim under the cap the recipient named. Folio’s own guard is 80 MB per input file so a phone tab survives — that is not an email cap.",
};

folioFaq.push(qGmail, qScanShrink, qPrintShop, qAttachSize);


export const mergeFaq: FaqItem[] = [
  folioFaq[0]!,
  folioFaq[1]!,
  {
    q: "Can I reorder files before merging?",
    a: "Yes. After you add PDFs, use the up and down controls on each row. The merged file follows that list from top to bottom: first file’s pages, then the next file’s pages, and so on. We do not interleave pages from two files automatically. If you need page 1 of B between pages of A, split A first, then merge the pieces in the order you want.",
  },
  folioFaq[4]!,
  folioFaq[5]!,
  folioFaq[6]!,
  folioFaq[8]!,
  folioFaq[11]!,
  folioFaq[13]!,
  qGmail,
  qPrintShop,
];

export const splitFaq: FaqItem[] = [
  folioFaq[0]!,
  {
    q: "If I type 1-3, 5, 8-10, do I get three PDFs?",
    a: "No. Page-range mode builds one PDF that contains exactly those pages, in order. 1-3, 5, 8-10 becomes pages 1, 2, 3, 5, 8, 9 and 10 in a single file. To get a separate PDF for every page, choose “One PDF per page” (a ZIP if there is more than one). To cut a long report into chunks of equal length, choose “Every N pages”.",
  },
  {
    q: "How do page numbers work?",
    a: "Numbers are 1-based and count pages in the file, not the printed folio in the header. Page 1 is the first page of the PDF. Ranges are inclusive. If the document has 12 pages, 10-12 is valid and 10-20 is rejected. We do not read “iii” or “A-4” labels from the page surface.",
  },
  folioFaq[4]!,
  folioFaq[5]!,
  folioFaq[9]!,
  folioFaq[11]!,
  folioFaq[13]!,
  qScanShrink,
];

export const compressFaq: FaqItem[] = [
  folioFaq[0]!,
  folioFaq[2]!,
  {
    q: "What do High, Balanced and Maximum actually change?",
    a: "All three copy the pages into a new PDF. High keeps document title, author and keywords and does not pack objects into compressed streams. Balanced and Maximum clear those metadata fields, set producer to Folio, and save with object streams, which often trims files that were exported carelessly. None of the three recompresses photos inside a scan. Pick High when you want the smallest behaviour change; pick Balanced as the default; pick Maximum only if you do not care about title/author fields.",
  },
  folioFaq[6]!,
  folioFaq[7]!,
  folioFaq[8]!,
  folioFaq[4]!,
  folioFaq[11]!,
  folioFaq[13]!,
  qGmail,
  qScanShrink,
];

export const emailFaq: FaqItem[] = [
  folioFaq[0]!,
  folioFaq[2]!,
  qGmail,
  qAttachSize,
  folioFaq[7]!,
  folioFaq[6]!,
  folioFaq[11]!,
  folioFaq[13]!,
];

export const scanFaq: FaqItem[] = [
  folioFaq[0]!,
  folioFaq[7]!,
  folioFaq[8]!,
  qScanShrink,
  folioFaq[5]!,
  folioFaq[4]!,
  folioFaq[11]!,
  folioFaq[13]!,
];

