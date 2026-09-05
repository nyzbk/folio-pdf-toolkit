import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/content/Article";
import { A, H2, H3, P } from "@/components/content/RichText";
import { compressFaq } from "@/content/faq";
import { compressGuide, compressHowToSteps } from "@/content/guides";
import { articleHead } from "@/lib/seo";
import { FaqSection } from "@/components/pdf/FaqSection";
import { MAX_PDF_MB } from "@/lib/site";

export const Route = createFileRoute("/how-to-compress")({
  head: () =>
    articleHead({
      title: "How to compress a PDF without uploading it — Folio",
      description:
        "Shrink a digital PDF in this browser. Folio rewrites the file locally. It does not downsample scans and does not send the document to a compressor.",
      path: "/how-to-compress",
      appName: "How to compress a PDF",
      includeApp: false,
      faqs: compressFaq,
      howToName: compressGuide.title,
      howToSteps: compressHowToSteps,
    }),
  component: HowToCompressPage,
});

function HowToCompressPage() {
  return (
    <Article
      title="How to compress a PDF without uploading it"
      lede="Shrink a PDF in this browser when the weight is sloppy structure, not a photograph of paper. Folio rewrites the file locally. It does not send the document to a compressor."
      toolHref="/compress"
      toolLabel="Open the compressor"
      extra={{ href: "/scan", label: "If it is a scan" }}
      related="compress"
    >
      <P>
        Mail apps, government portals and chat tools still cap attachments. The reflex is to
        “compress PDF online”, which usually means: upload, wait, download a rasterized cousin of
        your file, maybe with a watermark if you are not on a plan. Folio’s compressor is
        narrower. It copies pages into a new PDF and can strip metadata and pack objects. It will
        not blur a scan into a smaller JPEG for you.
      </P>
      <P>
        That honesty is the product. If you bring a 40 MB colour scan, the after size will look
        like the before size — <A href="/scan">why scans stay heavy</A>. If you bring a 12 MB Word
        export, Balanced may actually help. Chrome, Edge, Firefox and Safari are supported.
        JavaScript on. Password-protected files are refused.
      </P>
      <P>
        Gmail and Outlook numbers, including MIME overhead, live on the{" "}
        <A href="/email">email size guide</A>. Chat sends: <A href="/whatsapp">WhatsApp</A>. Merge
        is a different tab — compress does not join files. Split if you only need some pages:{" "}
        <A href="/how-to-split">how to split</A>. This page is the mechanical how-to for the
        compressor.
      </P>

      <H2>What High, Balanced and Maximum actually change</H2>
      <H3>High</H3>
      <P>
        Copies pages and keeps title, author, subject and keywords. It does not pack object
        streams. Use it when a workflow hashes documents or when a picky reviewer compares
        metadata. Savings are often modest. That is acceptable. It is the smallest behaviour
        change, not the smallest file.
      </P>
      <H3>Balanced</H3>
      <P>
        Clears those metadata fields, labels producer as Folio, and saves with object streams.
        Invoices, letters, slide decks and software manuals often lose leftover objects here.
        Text stays selectable if it was text. Images inside the file are not recompressed. This
        is the default for a digital export.
      </P>
      <H3>Maximum</H3>
      <P>
        The tightest save Folio offers with the same page-copy model. Title and author will not
        survive. Do not use it as a magic “make the scan 2 MB” button — it is not. If Balanced
        did nothing, Maximum usually will not invent a new codec either. It is not a third
        algorithm. It is a tighter save of the same copy.
      </P>

      <H2>Steps</H2>
      <ol className="mt-5 list-decimal space-y-5 pl-5 text-sm leading-relaxed text-ink/90">
        <li>
          <h3 className="font-medium text-ink">1. Confirm you can select text</h3>
          <p className="mt-2">
            Open the PDF and try to highlight a sentence. If you cannot, leave this sequence. The{" "}
            <A href="/scan">scans guide</A> is the honest next page. Looping High / Balanced /
            Maximum on a photograph of paper wastes time and does not change the pixels.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">2. Open Compress and drop the file</h3>
          <p className="mt-2">
            Use <A href="/compress">the compress tab</A>. You can add one PDF or several. Several
            successful outputs download as a ZIP. Each file still has to pass the {MAX_PDF_MB} MB
            size guard on its own. That guard is RAM for the tab, not Gmail’s cap.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">3. Start with Balanced</h3>
          <p className="mt-2">
            Read before and after sizes. If Balanced helps, download. If you need metadata to
            survive, use High instead and accept a smaller saving. If Balanced barely moved a
            digital export and title/author do not matter, try Maximum once — not in a loop.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">4. Keep the tab open, then inspect the download</h3>
          <p className="mt-2">
            Work stays in memory. A phone may reload. If it does, try a laptop. Open the new file
            and try selecting a sentence. If you still need fillable fields, discard the
            compressed copy and keep the original form. Treat the output as a transmission copy,
            not a new print master.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">5. Send it from your own tools</h3>
          <p className="mt-2">
            Folio does not email the result, does not give you a sharing link, and does not keep
            the job. Attach the file from Gmail, Files, or Finder yourself. Caps:{" "}
            <A href="/email">email</A>. Chat: <A href="/whatsapp">WhatsApp</A>. Close the tab when
            you are done.
          </p>
        </li>
      </ol>

      <H2>Five reasons compress did nothing useful</H2>
      <P>
        The PDF is a scan: pictures of paper, not text objects. Folio does not downsample those
        pictures. The file is already linearized and lean: nothing to pack. The file is
        encrypted: we refuse it. The tab ran out of memory: you get a failure, not a half file.
        You needed OCR or PDF-to-JPEG: different products, and they usually want an upload.
      </P>
      <P>
        A hybrid file — selectable captions plus full-page screenshots — will shrink only the
        wrapper. Split the screenshot pages if the remaining file is still over a cap. Compress
        does not drop pages. <A href="/how-to-split">Split</A> does.
      </P>

      <H2>Forms, text, and what the new file is</H2>
      <P>
        Selectable text in a digital PDF should remain selectable. Interactive forms, checkboxes
        and JavaScript often do not, because we do not rebuild the form catalog. Annotations that
        are already baked into page content usually still show. More on forms:{" "}
        <A href="/faq">FAQ</A>. If a portal hashes the official file, send the master another way
        and use Folio only for a courtesy copy.
      </P>

      <H2>Versus Preview, Acrobat, and upload compressors</H2>
      <P>
        Preview and Acrobat can reduce file size with image downsampling when you export. They
        see the file because they run as apps you installed. Online compressors see the file
        because you uploaded it, and they often rasterize pages, which destroys selectable text.
        Folio sits in between: a tab, no upload, no rasterize, no miracle on scans. Pick the
        bargain that matches the document.
      </P>
      <P>
        Packets after a shrink: <A href="/how-to-merge">merge</A> only if you still need one file
        and each piece already fits. Real jobs (Gmail brochure, print shop vs mail copy) are on{" "}
        <A href="/use-cases">use cases</A>. Operator: <A href="/about">about Folio</A>.
      </P>

      <H2>When High is the right first click</H2>
      <P>
        A reviewer who hashes documents, a court clerk who compares metadata, a workflow that
        still reads title and author — start on High. Savings are often modest. That is the
        point. Balanced and Maximum clear those fields and label producer as Folio. If the
        recipient’s script checks producer, they will notice. Say so in the email if you send a
        Balanced copy as a courtesy and the master another way.
      </P>
      <P>
        High is not “the quality preset”. Folio does not recompress JPEGs on any of the three.
        People who pick Maximum because it sounds like “high compression” are reading a different
        product. Real packets: <A href="/use-cases">use cases</A>. If the send is chat, stop
        treating this as mail — <A href="/whatsapp">WhatsApp</A>.
      </P>

      <FaqSection items={compressFaq} />
    </Article>
  );
}
