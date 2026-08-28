import { MAX_PDF_MB } from "@/lib/site";

export const splitGuide = {
  title: "How to split a PDF in the browser without uploading",
  lede:
    "Cut pages out of a PDF on this device. Folio reads the file in the tab, writes the parts in memory, and never posts the document to a splitter API.",
  intro: [
    "The usual reason to split a PDF is not ‘I enjoy extra files’. It is that someone asked for page 12, or an inbox will not take 40 pages, or a folder should not hold the full contract. Hosted splitters solve that by taking the upload. That is the wrong bargain for an NDA, a medical scan, or a passport PDF.",
    "Folio’s splitter is a page copier. It does not crop, redact, OCR, or rename chapters from bookmarks. It counts pages from the start of the file. Password-protected PDFs are refused. The work happens in Chrome, Edge, Firefox or Safari with JavaScript on.",
  ],
  steps: [
    {
      title: "Open the Split tab on Folio",
      body: "Use the Split control at the top of the toolkit, or this guide’s link to the tool. You should see a drop zone that says it takes one PDF at a time. If you landed on Merge by habit, you would be combining files, not cutting them.",
    },
    {
      title: "Drop the PDF you want to cut",
      body: `The tab checks the header for %PDF, the size (over ${MAX_PDF_MB} MB is rejected), and a page count. A password error means Folio will not ask for the password — unlock the file in Preview, Acrobat or the scanner app, then drop the unprotected copy. A non-PDF is rejected rather than ‘converted’.`,
    },
    {
      title: "Read the page count we show",
      body: "Page 1 is the first page of the file. Ignore the number printed in a header if it disagrees (many reports start at i, ii, 1). If the count is 1, split has nothing useful to do unless you only wanted a rewritten copy, which is not this tool’s job.",
    },
    {
      title: "Choose page ranges when you want one smaller PDF",
      body: "Type 1-based lists such as 1-3, 5, 8-10. That produces a single PDF containing those pages in that order — not three files. Ranges are inclusive. 10-12 on a 12-page file is valid; 10-20 is rejected. This is the mode for ‘send them pages 4–7 only’.",
    },
    {
      title: "Choose every N pages for equal chunks",
      body: "A 30-page scan that must travel as 10-page emails is an every-N job with N = 10. You get multiple PDFs in a ZIP. The last chunk can be shorter. This is not ‘split on bookmarks’ and not ‘split on blank pages’.",
    },
    {
      title: "Choose one PDF per page for a ZIP of singles",
      body: "Each page becomes its own file, named from the page number. Two or more pages download as a ZIP. Use this when a portal wants page-by-page attachments or when you will merge only some of those pages later.",
    },
    {
      title: "Tap Split and wait in this tab",
      body: "Do not close the tab. The copier runs in memory. A long document on a phone can hitch or reload Safari; that is RAM, not an upload timeout. If it fails, try a desktop browser with the same file. You still have the original — Folio never took it.",
    },
    {
      title: "Download the PDF or the ZIP",
      body: "One range group becomes one PDF. Multiple groups become a ZIP. Open the result and check the pages before you delete anything. Then keep or discard the original on your disk; Folio does not retain a shadow copy.",
    },
  ],
  after: [
    {
      h2: "If split did not work",
      p: [
        "Password or encryption: unlock locally, retry. Wrong range syntax: use 1-3, 5, 8-10 without words. Range beyond the page count: we error instead of clipping silently. Phone out of memory: fewer pages, or a laptop. Corrupt PDF: another reader will usually fail too; export again from the source app. Folio will not repair a broken xref table.",
      ],
    },
    {
      h2: "What happens when you close the tab",
      p: [
        "The bytes in memory are gone. There is no ‘job 8F3A’ on a server to retrieve. If you forgot to download, run split again from the file on disk. That is the cost of not uploading, and it is intentional.",
      ],
    },
    {
      h2: "Versus Preview, Acrobat, and upload sites",
      p: [
        "Apple Preview and Acrobat can extract pages well, on one computer, with a licence or a platform lock-in. Folio is the same class of job in a tab you can open on a borrowed PC without installing those. iLovePDF and cousins will split after an upload and often after an account; they are faster at OCR and repair, and they see the file. Use them when the document is public. Use Folio when it is not.",
      ],
    },
  ],
};

export const compressGuide = {
  title: "How to compress a PDF without uploading it",
  lede:
    "Shrink a PDF in this browser when the weight is sloppy structure, not a photograph of paper. Folio rewrites the file locally. It does not send the document to a compressor.",
  intro: [
    "Mail apps, government portals and chat tools still cap attachments. The reflex is to ‘compress PDF online’, which usually means: upload, wait, download a rasterized cousin of your file, maybe with a watermark if you are not on a plan. Folio’s compressor is narrower. It copies pages into a new PDF and can strip metadata and pack objects. It will not blur a scan into a smaller JPEG for you.",
    "That honesty is the product. If you bring a 40 MB colour scan, the after size will look like the before size. If you bring a 12 MB Word export, Balanced may actually help. Chrome, Edge, Firefox and Safari are supported. JavaScript on. Password-protected files are refused.",
  ],
  steps: [
    {
      title: "Open the Compress tab",
      body: "Use the Compress control in the toolkit. You can add one PDF or several. Several successful outputs download as a ZIP. Merge and split are different tabs; compress does not join files and does not drop pages.",
    },
    {
      title: "Drop the file and read the size we show",
      body: `Files over ${MAX_PDF_MB} MB are blocked before parse, because the tab will likely die anyway. If the PDF is a camera scan of many pages, consider whether compress is the right tool at all. A one-page digital invoice is the intended happy path.`,
    },
    {
      title: "Pick High when you want the smallest change",
      body: "High copies pages and keeps title, author, subject and keywords. It does not pack object streams. Use it when a workflow hashes documents or when a picky reviewer compares metadata. Savings are often modest. That is acceptable.",
    },
    {
      title: "Pick Balanced as the default for digital PDFs",
      body: "Balanced clears those metadata fields, labels producer as Folio, and saves with object streams. Invoices, letters, slide decks and software manuals often lose leftover objects here. Text stays selectable if it was text. Images inside the file are not recompressed.",
    },
    {
      title: "Pick Maximum only if metadata can go",
      body: "Maximum is the tightest save Folio offers with the same page-copy model. Title and author will not survive. Do not use it as a magic ‘make the scan 2 MB’ button — it is not. If Balanced did nothing, Maximum usually will not invent a new codec either.",
    },
    {
      title: "Tap Compress and watch the tab",
      body: "Work stays in memory. A phone may reload. If it does, try a laptop. An error about passwords or a corrupt file means stop; we will not ‘repair and upload’. You still have the original on disk.",
    },
    {
      title: "Read before and after sizes, then download",
      body: "If after is almost before, keep the original and try split (fewer pages) or a dedicated scan tool. If after is smaller and the pages still look right, download. Open the file and try selecting a sentence. If you still need fillable fields, discard the compressed copy and keep the original form.",
    },
    {
      title: "Send the download from your own tools",
      body: "Folio does not email the result, does not give you a sharing link, and does not keep the job. Attach the file from Gmail, Files, or Finder yourself. Close the tab when you are done.",
    },
  ],
  after: [
    {
      h2: "Five reasons compress did nothing useful",
      p: [
        "The PDF is a scan: pictures of paper, not text objects. Folio does not downsample those pictures. The file is already linearized and lean: nothing to pack. The file is encrypted: we refuse it. The tab ran out of memory: you get a failure, not a half file. You needed OCR or PDF-to-JPEG: different products, and they usually want an upload.",
      ],
    },
    {
      h2: "Forms, text, and what the new file is",
      p: [
        "Selectable text in a digital PDF should remain selectable. Interactive forms, checkboxes and JavaScript often do not, because we do not rebuild the form catalog. Annotations that are already baked into page content usually still show. Treat compressed output as a transmission copy, not a new master for print.",
      ],
    },
    {
      h2: "Versus Preview, Acrobat, and upload compressors",
      p: [
        "Preview and Acrobat can reduce file size with image downsampling when you export. They see the file because they run as apps you installed. Online compressors see the file because you uploaded it, and they often rasterize pages, which destroys selectable text. Folio sits in between: a tab, no upload, no rasterize, no miracle on scans. Pick the bargain that matches the document.",
      ],
    },
  ],
};

export const splitHowToSteps = splitGuide.steps.map((s) => `${s.title}: ${s.body}`);
export const compressHowToSteps = compressGuide.steps.map((s) => `${s.title}: ${s.body}`);
