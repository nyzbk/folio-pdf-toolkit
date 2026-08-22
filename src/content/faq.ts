import type { FaqItem } from "@/components/pdf/FaqSection";

export const sharedFaq: FaqItem[] = [
  {
    q: "Is this PDF toolkit really free?",
    a: "Yes. Completely free. No account, no watermark, no daily limits. The tool is supported by non-intrusive ads that appear only after you finish an action and in the footer.",
  },
  {
    q: "Do you upload my PDFs to a server?",
    a: "No. All processing (merge, split, compress) happens locally in your browser. Your files never leave your device.",
  },
  {
    q: "Is there a file size or page limit?",
    a: "There is no artificial product limit. Practical limits come only from your device’s available memory. Very large files may fail on low-memory phones — we show a clear message instead of crashing.",
  },
  {
    q: "Can I merge or split password-protected PDFs?",
    a: "Not in this version. Password-protected PDFs cannot be processed purely in the browser without the password, and we do not ask for or store passwords.",
  },
  {
    q: "Does it work on iPhone and Android?",
    a: "Yes. It works in modern mobile browsers (Safari, Chrome). For large files a desktop browser usually has more memory.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. Core actions never require signup. You can merge, split and compress without providing an email.",
  },
  {
    q: "Is there a watermark on the output?",
    a: "No. Output files are clean. No watermark and no added branding.",
  },
  {
    q: "Who built this tool?",
    a: "This free tool is built by Agency. We also create $10k websites, brand identity systems and custom web applications.",
  },
];

export const mergeFaq: FaqItem[] = [
  ...sharedFaq.slice(0, 3),
  {
    q: "Can I reorder files before merging?",
    a: "Yes. Use the up and down buttons next to each file. The merged PDF follows that order from top to bottom.",
  },
  ...sharedFaq.slice(3),
];

export const splitFaq: FaqItem[] = [
  ...sharedFaq.slice(0, 3),
  {
    q: "Can I split a PDF into single pages?",
    a: "Yes. Choose “One PDF per page”. You will get a ZIP containing each page as a separate PDF.",
  },
  {
    q: "How do page ranges work?",
    a: "Type ranges like 1-3, 5, 8-10. Pages are 1-based. Multiple outputs download as a ZIP; a single range can download as one PDF.",
  },
  ...sharedFaq.slice(3),
];

export const compressFaq: FaqItem[] = [
  ...sharedFaq.slice(0, 3),
  {
    q: "Will compression reduce quality?",
    a: "High quality rewrites the file with almost no visual change. Balanced and Maximum strip extra metadata and unused objects, which often reduces size. Text stays selectable. Heavily image-based scans may not shrink as much as rasterizing tools.",
  },
  ...sharedFaq.slice(3),
];
