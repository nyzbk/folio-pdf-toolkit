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

export const mergeGuide = {
  title: "How to merge PDF files in the browser without uploading",
  lede:
    "Join two or more PDFs on this device. Folio copies pages in the tab and never posts the packet to a merge API.",
  intro: [
    "The usual reason to merge is a portal that wants one attachment: a lease plus an ID, an invoice plus a PO, a deck plus an appendix. Hosted mergers solve that by taking the upload. That is the wrong bargain when the files include an ID scan or a signed contract.",
    "Folio concatenates whole files in the order you set. It does not interleave pages from two documents on its own. It does not delete a page in the middle of one file. If you need pieces, split first, then merge the pieces. Password-protected PDFs are refused. JavaScript must be on. Chrome, Edge, Firefox and Safari are the intended browsers.",
  ],
  steps: [
    {
      title: "Open Folio’s merge page",
      body: "The homepage is merge. You should see a drop zone for two or more PDFs. If you landed on Split or Compress, you are on a different job.",
    },
    {
      title: "Drop the files that should become one packet",
      body: `Each file is checked in the tab: PDF signature, size under ${MAX_PDF_MB} MB, a page count if we can read one. A password error means unlock the file in Preview or Acrobat first. Folio will not ask for that password.`,
    },
    {
      title: "Put them in order with the arrows",
      body: "The merged PDF is first file, then the next, top to bottom. If the ID should not sit in the middle of the lease, move it before you tap Merge. Folio does not guess a ‘cover then appendix’ order.",
    },
    {
      title: "Tap Merge and keep the tab open",
      body: "pdf-lib copies page content into a new document in memory. A phone tab can reload on a fat colour scan. If it does, use a laptop. Nothing was uploaded, so nothing is waiting on a server.",
    },
    {
      title: "Download the combined PDF",
      body: "There is no watermark. Open the file and flip through every page before you submit it to a portal. Then keep the originals on disk. Closing this tab discards the bytes in memory.",
    },
  ],
  after: [
    {
      h2: "If merge did not work",
      p: [
        "Only one file: add a second PDF. Password: unlock locally. Over the size guard: compress a digital export first, or split a scan into fewer pages. Forms that must stay fillable: stop — merge copies pages and often drops the form catalog. Corrupt PDF: export again from the source app. Folio will not repair a broken xref table.",
      ],
    },
    {
      h2: "When merge is the wrong first click",
      p: [
        "You need pages 4–7 of a 40-page file: that is Split. Gmail refuses 28 MB: that is Compress for a digital brochure, or Split if the extra pages are optional. A photograph of paper will not collapse because you merged it with a one-page letter. See the Email and Scans guides.",
      ],
    },
    {
      h2: "Versus Preview, Acrobat, and upload mergers",
      p: [
        "Preview and Acrobat merge well on one computer you already trust. Folio is the same class of job in a tab on a borrowed PC. iLovePDF and cousins merge after an upload and often after an account. Use them when the document is public. Use Folio when it is not.",
      ],
    },
  ],
};
export const mergeHowToSteps = mergeGuide.steps.map((s) => `${s.title}: ${s.body}`);

export const emailGuide = {
  title: "How to get a PDF through Gmail, Outlook and portal caps",
  lede:
    "Mail apps still reject large PDFs. Folio can compress a digital export or split pages in this tab. It will not pretend a scan became 2 MB.",
  intro: [
    "Gmail’s practical attachment ceiling is still around 25 MB for many accounts. Outlook and government portals vary, but the pattern is the same: the file is ‘too large’, and the reflex is an online compressor that uploads the document. Folio stays in the tab.",
    "Two honest paths. If the PDF was exported from Word, InDesign, PowerPoint or an invoicing app, try Compress (Balanced). If the PDF is a photograph of paper, compress will barely move the needle — split out the pages the recipient actually needs, or re-scan at a lower resolution in the camera app. Folio does not downsample those photos and does not OCR.",
  ],
  steps: [
    {
      title: "Look at what the PDF actually is",
      body: "Open it and try to select a sentence. If you can highlight words, it is probably a digital export. If you can only select the whole page as a picture, it is a scan. That one test decides the next click.",
    },
    {
      title: "Digital export: open Compress, start with Balanced",
      body: `Drop the file. Stay under ${MAX_PDF_MB} MB per file. Read before and after sizes. If Balanced helps, download and attach from your mail app. Folio does not send the email for you.`,
    },
    {
      title: "If it is still over the cap, try Maximum or split",
      body: "Maximum clears title/author and packs streams. It is not a new codec. If the file is still huge, open Split and keep only the pages the recipient asked for. Then attach that extract. Do not merge extra catalogues into the same file and wonder why Gmail still refuses it.",
    },
    {
      title: "Scan: do not expect Compress to save you",
      body: "A 300 dpi colour scan is heavy because of the pictures, not the PDF wrapper. Split to the pages that matter, or photograph the paper again at a smaller size. A dedicated scan compressor is a different product and usually wants an upload.",
    },
    {
      title: "Keep a transmission copy and a master",
      body: "The file you email can be the compressed or split copy. Keep the original for print or for a portal that hashes documents. Closing Folio does not archive either copy.",
    },
  ],
  after: [
    {
      h2: "Caps people actually hit",
      p: [
        "Gmail: many accounts fail near 25 MB. Google Drive links are a different product — Folio will not mint one. Outlook / Microsoft 365: often 20–35 MB depending on the tenant. WhatsApp document sends are smaller than people think; a 15 MB brochure can fail on a phone. Government portals sometimes say 10 MB. None of those caps are Folio’s invention. We only rewrite or cut the file you already have.",
      ],
    },
    {
      h2: "What will not help",
      p: [
        "Renaming .pdf to .zip. Merging a tiny cover letter onto a 40 MB scan. Running High/Balanced/Maximum in a loop on a scan. Uploading to a random ‘PDF compressor’ if the file is an ID or a medical page. Asking Folio to OCR so the scan ‘becomes text’ — we do not.",
      ],
    },
    {
      h2: "Forms and portals",
      p: [
        "If the portal still needs a fillable form, do not compress or merge that form here. Folio copies pages and often drops the form catalog. Flatten or keep the official file. Merge only static pages around it.",
      ],
    },
  ],
};
export const emailHowToSteps = emailGuide.steps.map((s) => `${s.title}: ${s.body}`);

export const scanGuide = {
  title: "Why a scanned PDF barely gets smaller in Folio",
  lede:
    "A scan is a photograph of paper stored inside a PDF. Folio rewrites structure. It does not shrink those photographs and it does not OCR.",
  intro: [
    "People bring a 40 MB colour scan to Compress and expect a 2 MB file. Online tools that deliver that usually rasterize or re-JPEG the page on a server. Folio will not do that, because that is a different bargain: quality loss, and usually an upload.",
    "Use this page to decide whether Split, a new photo, or a different app is the honest next step. Merge will not make a scan lighter. Compress on High/Balanced/Maximum will not invent a codec.",
  ],
  steps: [
    {
      title: "Confirm it is a scan",
      body: "Try to select a word. If you cannot, the page is an image. Phone scanner apps (Notes, Adobe Scan, CamScanner exports) are usually images. A Word ‘Save as PDF’ is usually text plus fonts.",
    },
    {
      title: "If you only need some pages, Split",
      body: "A 40-page scan where the portal wants pages 1 and 40 is a split job. Range mode builds one PDF of those pages. The extract is smaller because it has fewer photographs, not because we compressed the pixels.",
    },
    {
      title: "If you need every page, re-capture or use a scan tool",
      body: "Photograph the paper again at a lower resolution, or use the scanner app’s own ‘document’ mode. A desktop tool that downsamples images will see the file because it runs as an app you installed. Folio will not downsample in this tab.",
    },
    {
      title: "Do not upload the scan ‘just this once’ if it is private",
      body: "IDs, medical pages, payslips and marked-up contracts do not belong on a conversion server. If the scan is a public brochure, an upload compressor is your choice, not Folio’s lecture.",
    },
    {
      title: "After you have a smaller file, keep the master",
      body: "Print shops and archives want the original. Email wants the extract. Folio is not a vault. Download and file both copies yourself.",
    },
  ],
  after: [
    {
      h2: "What Folio’s compressor actually does to a scan",
      p: [
        "It copies pages into a new PDF. It can drop leftover metadata and pack object streams. The heavy image XObjects stay. That is why before and after look alike. The FAQ line ‘scanned PDF barely gets smaller’ is not a bug report. It is the product boundary.",
      ],
    },
    {
      h2: "OCR",
      p: [
        "OCR turns a picture of words into selectable text. It is useful and it is a different product. It is also the kind of job that often leaves the device. Folio will not run OCR in this tab and will not send the scan to an OCR API. If you already have a searchable PDF, you can merge or split it here like any other digital file.",
      ],
    },
    {
      h2: "Password-protected scans",
      p: [
        "Encrypted files are refused. Unlock them in the scanner app or Acrobat, then drop the unprotected copy. We will not take the password.",
      ],
    },
  ],
};
export const scanHowToSteps = scanGuide.steps.map((s) => `${s.title}: ${s.body}`);

