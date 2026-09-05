import type { CopySection } from "@/components/content/Sections";
import { CONTACT_EMAIL, MAX_PDF_MB } from "@/lib/site";

export const mergeIntro: string[] = [
  "Folio merges PDF files in this browser. Drop two or more documents, put them in order, and download one file. The pages are copied on your device. They are not posted to a conversion server, parked in a ‘recent files’ locker, or held for a download link that expires tomorrow.",
  "Use it when you already have separate PDFs and need a single packet: a signed lease plus an ID scan, an invoice plus a purchase order, a deck plus an appendix. Reordering is the whole product on this page — first file, then the next, top to bottom.",
  "This is not an editor. You cannot delete a page in the middle of one file here, you cannot rearrange pages inside a single PDF, and you cannot overlay a signature. Split a file first if you need pieces, then merge the pieces. Compress lives on its own tab and does not run as part of merge.",
];

export const mergeSections: CopySection[] = [
  {
    h2: "How merge works on this page",
    p: [
      "You add PDFs with the drop zone or the file picker. Each file is checked in the tab: it must start with a PDF signature, it must be under the size guard, and we try to read a page count. A password-protected file is refused with a message. Nothing is uploaded during that check.",
      "Use the arrows to change order. Merge concatenates pages: every page of file A, then every page of file B, and so on. If B should sit inside A, split A into the parts you need, then merge those parts with B. When you tap Merge, pdf-lib copies page content into a new document in memory and Folio offers that file as a download. Closing the tab drops the bytes.",
    ],
  },
  {
    h2: "Limits, browsers, and what never leaves the device",
    p: [
      `The per-file ceiling is ${MAX_PDF_MB} MB. That is a memory guard for phones and older laptops, not a pricing tier. Two valid PDFs are enough to merge; there is no maximum count besides RAM. Chrome, Edge, Firefox and Safari (including iOS) are the intended browsers. JavaScript must be on.`,
      "Your PDFs never go to Folio’s server. The host only serves this page’s HTML, scripts and fonts. Server logs may record that the page was requested (IP, user-agent), which is ordinary HTTPS traffic and is not the contents of the document. Ads, when they eventually go live after Google review, load from Google and do not receive your PDF either.",
      "Password-protected files, encrypted files, and non-PDF uploads are rejected. Interactive forms may not stay fillable after a merge, because we copy pages into a new file and do not rebuild a form catalog. Keep the original if you still need to type into fields.",
    ],
  },
  {
    h2: "How this differs from iLovePDF, Smallpdf and similar sites",
    p: [
      "Those products are useful, and they are a different bargain. You create an account or accept an upload, the file travels to their cloud, and the free tier is often limited by daily jobs or a watermark. Folio has no account, no watermark as a condition of using merge, and no job counter. The trade-off is also honest: we do not OCR, we do not convert to Word, we do not e-sign, and a huge colour scan may exhaust a phone tab.",
      "If you need a cloud link to send a colleague, Folio will not give you one — download the merged PDF and send it yourself. If you need Adobe’s preflight or a print shop’s PDF/X profile, this is the wrong tool. If you need a packet of already-good PDFs joined without an account, this is the page.",
    ],
  },
  {
    h2: "When to split or compress instead",
    p: [
      "Extract pages or cut a report into chapters on the Split tab. Range mode builds one PDF of the pages you listed; ‘one PDF per page’ writes a ZIP. After a split you can return here and merge a different subset.",
      "If Gmail or a portal refuses the merged file for size, open [Compress](/compress). Expect savings on digital exports (Word, invoices, slides). Do not expect a 40 MB photograph of paper to collapse — Folio does not recompress those images. Guides: [how to split a PDF](/how-to-split), and [how to compress without uploading](/how-to-compress).",
      "Gmail still refuses many packets around 25 MB — that job is [email size limits](/email). A photograph of paper will not shrink here — [why scans barely shrink](/scan). Step-by-step merge: [how to merge PDF files](/how-to-merge).",
    ],
  },
];

export const splitIntro: string[] = [
  "Split a PDF in this tab when you need some of the pages and not the rest: a signature leaf from a 40-page NDA, chapters out of a handbook, or one attachment that must stay under an email cap. The source file is read locally. We do not keep a copy.",
  "Three modes. Page ranges build one PDF that contains only the pages you listed (1-based, inclusive). Every N pages cuts the document into equal chunks. One PDF per page writes each page as its own file and zips them when there is more than one.",
];

export const splitSections: CopySection[] = [
  {
    h2: "When cutting a PDF is the right job",
    p: [
      "Portals often want ‘the signed page only’. Banks want a passport scan without the covering letter. A teacher wants pages 4–7 of a worksheet, not the answer key. Those are split jobs. Merge would make a bigger file. Compress would keep every page.",
      "Range mode is the usual path: type 1-3, 5, 8-10 and you get one PDF with those seven pages in that order — not three files. If you expected three files, switch mode. Printed headers that say ‘page 12 of 40’ are ignored; we count file order, starting at 1.",
    ],
  },
  {
    h2: "What split does not do",
    p: [
      "It does not crop a page, redact a paragraph, or remove a letterhead. It does not read bookmarks as chapter names. It does not unlock a password. A one-page PDF has nothing to split; you will get an error or a single-page result depending on the mode.",
      `Files over ${MAX_PDF_MB} MB are refused. Very large page counts can exhaust a phone. If Safari reloads, use a desktop browser. After you download, close the tab — the original and the parts are gone from Folio’s memory because they only ever lived there.`,
      "A scan that is too heavy for mail is often a split job, not a compress job — [why scanned PDFs barely shrink](/scan). Attachment caps: [email size](/email). After you have the pages you need, [merge them on the homepage](/).",
    ],
  },
];

export const compressIntro: string[] = [
  "Compress a PDF here when a mailbox, a government upload, or a chat app rejects the file for size — and the PDF is a digital export, not a fat photograph of paper. Rewriting happens in the tab. Nothing is sent to a compression farm.",
  "Three presets. High copies pages and leaves title, author and keywords. Balanced and Maximum strip those fields and save with object streams, which often trims sloppy exports. Compare the sizes before you download. If the new file is barely smaller, keep the original; Folio will not invent savings by blurring scans.",
];

export const compressSections: CopySection[] = [
  {
    h2: "What compression can and cannot change",
    p: [
      "A PDF is a container: pages, fonts, images, leftover objects, metadata. Folio copies the pages into a new file. That can drop unused objects and pack streams. It does not downsample images, it does not run a JPEG encoder on photos of paper, and it does not OCR. A 300 dpi colour scan stays heavy because the weight is the pictures, not the wrapper.",
      "Text that was already text stays selectable. Fillable fields often do not survive, because we do not rebuild the form catalog. If you still need to type into the PDF, do not compress it here. Password-protected files are refused; remove the password in the original app first.",
    ],
  },
  {
    h2: "Choosing High, Balanced or Maximum",
    p: [
      "High is the conservative rewrite: keep metadata, skip object streams. Use it when a picky portal hashes files or when you want the smallest behaviour change. Balanced is the default for invoices, letters and slide decks. Maximum is the same rewrite as Balanced for page content, with metadata cleared — pick it when title/author do not matter and you want the tightest save Folio offers.",
      "You can drop several PDFs and get a ZIP of compressed copies. Each file still has to pass the size guard on its own. If a phone tab dies, do one file on a laptop instead of five on the phone.",
      "Gmail and Outlook caps: [email size](/email). If before and after look alike, the file is probably a scan — [scans](/scan). Compress does not merge files; that is the [homepage](/).",
    ],
  },
];

export const aboutSections: CopySection[] = [
  {
    p: [
      "Folio exists because the common way to ‘just merge a PDF’ is to upload it. Contracts, IDs, medical scans and payslips do not belong on a conversion server you will never see. A local-first tool keeps the bytes in the tab that you opened. That idea is shared with other small utilities we publish. The work on this domain is specifically PDF: merge, split, compress.",
      "Merge concatenates files you already have. Split extracts ranges, equal chunks, or one file per page. Compress rewrites structure and metadata; it does not pretend to be a scan optimizer. All three refuse password-protected PDFs rather than asking for the password. All three stay free of an account wall and of a watermark on the download.",
      "We deliberately do not build PDF-to-Word, e-sign, OCR, cloud storage, or ‘unlock this file’. Those products exist elsewhere and they change the privacy bargain. If Folio cannot do the job, the page should say so instead of hiding an upload behind a button that looks local.",
      "The operator is an independent publisher, not a PDF suite company. Contact: " +
        CONTACT_EMAIL +
        ". Write the URL, the browser, and what you expected. Do not send the document unless we ask. There is no phone line and no chat widget sitting on top of the drop zone.",
      "Ads, when Google approves the site, will sit after success and in the footer. They will not cover Merge. Please do not click them as a favour. Other local tools we make are separate sites with their own text; this page is only Folio.",
      "The live operations are only the three tabs you can click: merge, split, compress. Merge is the homepage. There is no hidden ‘AI suite’, no promised OCR, and no ‘coming soon’ wall. If a file is password-protected, over 80 MB, or not a PDF, the tab tells you and stops. That refusal is part of the product, not a defect to paper over with an upload.",
      "Folio is English-first in the UI because the PDF jobs (packets, NDAs, attachment caps) are described in the same language as the error messages. Legal pages name the operator email. They do not claim a registered company if there isn’t one. The toolkit runs without creating an account, which also means there is no dashboard of past jobs to breach.",
      "Folio is one domain and one job. The three tabs — merge, split, compress — are the product. Guides on this hostname exist so a person and a crawler can tell what the tool will refuse: passwords, OCR, Word export, cloud links, and miracle shrinkage of photographs of paper.",
      "We publish other local utilities on other hostnames. They are not a toolkit inside this header. This site does not catalogue HEIC converters, invoice generators or QR codes. If you followed a link from a portfolio hub, you should still land on a PDF job, not a storefront.",
      "The operator email is the same inbox as the ads-account contact. A broken PDF or a policy question should reach a human. There is no ticket robot and no chat overlay on the drop zone. Do not attach the document in the first mail.",
      "This content layer was expanded on 3 September 2026 with an email-size guide, a scans guide, and a merge how-to. On 5 September 2026 those articles gained in-body links to each other so a person and a crawler can move between jobs without guessing. The merge, split and compress engines did not change. Advertisement slots stay placeholders until Google marks the site Ready. Please do not click them as a test.",
      "If Folio cannot do the job, the page should say so. That refusal is part of the product. A site that pretends every PDF problem is a button is the kind of site Program policies call low-value. We would rather be small and true.",
      "Password-protected PDFs are refused rather than unlocked. Files over 80 MB are refused rather than half-processed. There is no OCR in this tab and no API that would send a scan off the device. Those three refusals are documented on the [scans guide](/scan) and in the [FAQ](/faq) so a reviewer does not have to guess.",
    ],
  },
];

export const contactSections: CopySection[] = [
  {
    p: [
      "Email " +
        CONTACT_EMAIL +
        " for a bug, a file type that should have worked, or a privacy question about this PDF toolkit.",
      "Include: the page URL (merge, split, compress, or a guide), the browser and device, and what you expected to happen. If you saw an error message, paste it. Do not attach the PDF in the first email — Folio is built so documents stay on your device, and an inbox is still someone else’s server.",
      "We do not take feature commissions through this address, we do not unlock passwords, and we do not store files for you. For custom websites and brand work, the Agency note in the footer is the right door, not this inbox.",
    ],
  },
];

export const useCaseSections: CopySection[] = [
  {
    h2: "A landlord packet from three PDFs",
    p: [
      "You have a signed lease, a scan of an ID, and a proof-of-income letter, each saved as its own PDF from different apps. The portal wants one attachment. Open Folio’s merge tab, drop the three files, put the lease first, and download a single packet. Nothing in that flow creates an account or sends the ID to a conversion company.",
      "If the ID scan is a photograph and the portal has a 10 MB cap, compress will probably not save you — the weight is the picture. Split is the wrong tool unless the lease PDF also contains pages the portal forbids (draft clauses, a second property). In that case split the lease to the pages they asked for, then merge those pages with the ID and the letter.",
      "Keep the three originals. Merge does not archive them for you. If the portal rejects the packet because a form field must stay fillable, stop: Folio’s merge copies pages and may drop interactivity. Flatten or keep the official form as-is and only merge documents that are already static.",
      "This use case is merge-first. It is not OCR, not e-sign, and not a place to store the packet. When you close the tab, Folio has nothing left to leak. Email the download from your own mail app if a human still needs it.",
      "Order mistakes are the common failure: if the ID lands in the middle of the lease, use the arrows before you tap Merge, or split the lease and rebuild. Page size differences (A4 lease + phone photo PDF) are allowed; Folio does not rescale pages to a single paper size. If the portal is picky about PDF/A, this merge will not produce PDF/A. Download, open the packet on your phone, and confirm all pages are there before you submit.",
      "Skip compress on this packet unless an upload cap hits you after merge. Compressing first can drop form fields you still needed. Split only the lease if the portal’s checklist names specific clause pages. The ID and the letter should stay whole files in the drop zone, not photographed again into the merge.",
    ],
  },
  {
    h2: "The signature page from a 40-page NDA",
    p: [
      "Counsel sent a long NDA. Counterparty wants only the signature page on file, or you want to keep page 40 without the commercial terms sitting in a shared folder. Open Split, drop the NDA, and type the last page number (if the file has 40 pages, that is 40, not ‘the number printed in the footer’ if those differ).",
      "Range mode returns one PDF of that page. If you also need the definitions section, add it to the same range list: 3-5, 40 still produces one file. If you need each extracted page as its own attachment, use one-PDF-per-page and unzip.",
      "Do not upload the NDA to a ‘PDF cutter’ that files your document under a job ID. Folio never sees the clauses. Password-protected NDAs have to be unlocked in Preview or Acrobat first; we will not take the password.",
      "After the extract, you can merge that signature page with a covering note on the merge tab. Compress is rarely needed for a one-page extract. Keep the full NDA elsewhere — split is not a redaction tool, and pages you did not extract are simply not in the new file, not blacked out.",
      "If the NDA uses ‘page 1 of 40’ in the footer starting after a cover, trust the file order Folio shows, not the footer. Open the extract immediately; if you grabbed page 39 by mistake, run split again from the original. Nothing is cached on a server to undo. For a set of exhibits (pages 20–24 plus 40), stay in range mode so you get one PDF, not a ZIP of singles, unless the counterparty asked for separate attachments.",
      "Do not run compress on the full NDA ‘to make split faster’. Split already copies pages; a pre-pass through compress only risks forms and metadata you did not need to touch. If the NDA is 80 MB because it is a scan of initials on every page, split will still work if the tab has RAM, but a phone may fail — use a laptop.",
    ],
  },
  {
    h2: "A brochure that Gmail will not take",
    p: [
      "Gmail still refuses many attachments around 25 MB. A product brochure exported from InDesign or PowerPoint often overshoots because of unused objects, embedded fonts and metadata, not because every page is a photograph. Drop it on Compress, start with Balanced, and read the before/after sizes.",
      "If the file is a scan of printed pages, stop expecting a miracle. Folio will not shrink photos of paper. Photograph the brochure again at a lower resolution in the camera app, or use a dedicated scan compressor. If the file is a digital export and Balanced barely moved the needle, try Maximum (metadata gone) and, if it is still huge, split out the pages the recipient actually needs.",
      "Merge is the wrong first click unless you were asked to combine the brochure with a price list. After a successful compress, download and attach from your mail app. If a print shop needs the original, keep it — compressed output is for transmission, not for a new master.",
      "Forms, JavaScript and optional content groups may not survive. A brochure that is only pages and images is the intended input. Password-protected press PDFs are refused. iPhone users: if Safari reloads, the file is too heavy for that tab; try a laptop. The brochure never left the device in either case.",
      "A practical sequence: compress Balanced → check size → if still over the cap, split to the pages the recipient asked for → merge those pages with a one-page price list if needed. Do not merge extra catalogues into the same file and then wonder why Gmail still refuses it. Keep the InDesign or PPT source; Folio output is for sending, not for going back to layout.",
      "If after-size barely moved, the PDF is almost certainly pictures. Re-export from the layout tool with downsampled images, or screenshot less. Folio will not pretend it rasterized the pages. That is the same honesty as the compressor guide: digital exports yes, scans no.",
    ],
  },
  {
    h2: "A school or HR portal with one upload slot",
    p: [
      "You have five files: a diploma scan, a transcript, an ID page, a signed disclosure, and a one-page cover letter. The portal shows a single PDF field. That is a merge job. Open Folio’s homepage, drop the five files, put the cover letter first if they asked for it, and download one packet. Nothing in that flow creates an account.",
      "The diploma scan is often the problem. If it is 18 MB of colour photograph and the portal cap is 10 MB, merge will not save you. Compressing the cover letter is theatre. Split is only useful if they asked for one page of the transcript, not the whole thing. Honest path: recapture the diploma at a smaller size in the scanner app, then merge again.",
      "Keep fillable HR forms out of this merge if you still need to type into them. Folio copies pages and often drops the form catalog. Flatten the official form first, or upload that form in a second field if the portal allows it.",
      "Order mistakes are common. If the ID lands between diploma pages, use the arrows before Merge. Page sizes will not be normalized: an A4 transcript plus a phone-photo ID may look uneven. Portals rarely care. Print shops do. This packet is for the portal, not for a plotter.",
      "Do not upload the ID ‘to a better merger’ because Folio felt slow on a phone. A slow tab is RAM. Use a laptop. Closing the tab discards the bytes. Keep the five originals; Folio is not an archive.",
      "If after merge the portal still rejects size, open the [email size guide](/email). If the weight is the diploma photograph, open the [scans guide](/scan). Do not loop Compress on the merged packet hoping the picture will collapse.",
    ],
  },
  {
    h2: "WhatsApp or Telegram will not send the PDF",
    p: [
      "Chat apps are harsher than Gmail. A 12 MB slide deck can fail on mobile data. A 4 MB scan of handwritten notes can fail because the other person’s client is old. Folio does not send into WhatsApp. You [compress](/compress) or [split](/split) here, download, then attach in the chat app yourself.",
      "If you can select text in the deck, open [Compress](/compress), Balanced first. Read before/after. If it barely moved, the deck is full of photos of slides — that is a scan-like file even if it came from PowerPoint with ‘save as PDF’ after photographing a whiteboard. See [why scans barely shrink](/scan).",
      "If they only asked for two pages of notes, Split. Range mode, one PDF. Do not merge extra catalogues ‘so they have everything’ and then fail the send. Chat caps punish generosity.",
      "Password-protected lecture notes are refused. Unlock in Preview, then drop. Live Photos and HEIC files are the wrong site — this domain is PDF only.",
      "iPhone Safari: keep the tab in the foreground. If it reloads, the file is too heavy for that phone. Try a laptop, then AirDrop the result back. Nothing was uploaded in either case.",
      "After a successful send, keep the original. Chat compression on the receiver side is their problem. Folio will not watermark the file you handed them.",
    ],
  },
  {
    h2: "A print shop wants the original, a client wants an email copy",
    p: [
      "Those are two files. The shop asked for the InDesign or Acrobat export. The client asked for something that fits in mail. Compress the digital export for mail. Do not hand the shop the compressed copy as a new master.",
      "Folio does not downsample images and does not produce PDF/X. A scan of a printed brochure will not become an email file here. Re-export from layout with smaller images, or screenshot less. Then, if the wrapper is still sloppy, Balanced can trim leftover objects.",
      "Merge is the wrong first click unless the client also wanted a price list stapled to the brochure. Split is useful if they only needed pages 2–5 of a 20-page lookbook.",
      "Forms, optional content groups and printer’s marks may not survive compress. Treat Folio output as a transmission copy. Keep the press PDF on disk with a name that says MASTER.",
      "If the shop’s machine rejects the email copy later, that is expected: you sent them the wrong file. Send the master. Folio did not convert colour spaces.",
      "Related guides: [email size](/email), [scans](/scan), [how to compress](/how-to-compress). This use case is not e-sign and not a cloud proofing loop.",
    ],
  },
];

