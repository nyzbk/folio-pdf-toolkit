import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/content/Article";
import { A, H2, H3, P } from "@/components/content/RichText";
import { splitFaq } from "@/content/faq";
import { splitGuide, splitHowToSteps } from "@/content/guides";
import { articleHead } from "@/lib/seo";
import { FaqSection } from "@/components/pdf/FaqSection";
import { MAX_PDF_MB } from "@/lib/site";

export const Route = createFileRoute("/how-to-split")({
  head: () =>
    articleHead({
      title: "How to split a PDF in the browser without uploading — Folio",
      description:
        "Extract page ranges, equal chunks, or one file per page. The source never leaves this device. No account, no watermark.",
      path: "/how-to-split",
      appName: "How to split a PDF",
      includeApp: false,
      faqs: splitFaq,
      howToName: splitGuide.title,
      howToSteps: splitHowToSteps,
    }),
  component: HowToSplitPage,
});

function HowToSplitPage() {
  return (
    <Article
      title="How to split a PDF in the browser without uploading"
      lede="Cut pages out of a PDF on this device. Folio reads the file in the tab, writes the parts in memory, and never posts the document to a splitter API."
      toolHref="/split"
      toolLabel="Open the splitter"
      extra={{ href: "/email", label: "Email size limits" }}
      related="split"
    >
      <P>
        The usual reason to split a PDF is not “I enjoy extra files”. Someone asked for page 12,
        or an inbox will not take 40 pages, or a folder should not hold the full contract. Hosted
        splitters solve that by taking the upload. That is the wrong bargain for an NDA, a
        medical scan, or a passport PDF.
      </P>
      <P>
        Folio’s splitter is a page copier. It does not crop, redact, OCR, or rename chapters from
        bookmarks. It counts pages from the start of the file. Password-protected PDFs are
        refused. After you have the pages you need, you can{" "}
        <A href="/how-to-merge">merge a different subset</A> on the homepage.
      </P>
      <P>
        A scan that is too heavy for mail is often a split job, not a compress job —{" "}
        <A href="/scan">why scans stay heavy</A>. Attachment caps: <A href="/email">email</A>.
        Chat: <A href="/whatsapp">WhatsApp</A>. Compress will not invent fewer pages. This page
        is how to cut them.
      </P>

      <H2>Three modes, three different outputs</H2>
      <H3>Page ranges → one PDF</H3>
      <P>
        Type 1-3, 5, 8-10. You get one file with those seven pages in that order — not three
        files. This is the mode for “send them pages 4–7 only” or “signature leaf plus
        definitions”. If you expected three downloads, you picked the wrong mode.
      </P>
      <H3>Every N pages → a ZIP of chunks</H3>
      <P>
        A 30-page scan that must travel as 10-page emails is N = 10. The last chunk can be
        shorter. This is not “split on bookmarks” and not “split on blank pages”. Folio does not
        read chapter names from the outline.
      </P>
      <H3>One PDF per page → a ZIP of singles</H3>
      <P>
        Each page becomes its own file, named from the page number. Use this when a portal wants
        page-by-page attachments, or when you will merge only some of those pages later. Two or
        more pages download as a ZIP. One page is just a PDF.
      </P>

      <H2>Page numbers are file order, not the footer</H2>
      <P>
        Page 1 is the first page of the file. Ignore “page 12 of 40” printed in a header if it
        disagrees. Many reports start at i, ii, 1. Ranges are 1-based and inclusive. On a 12-page
        file, 10-12 is valid and 10-20 is rejected. We error instead of clipping silently. We do
        not read “iii” or “A-4” off the page surface.
      </P>

      <H2>Steps</H2>
      <ol className="mt-5 list-decimal space-y-5 pl-5 text-sm leading-relaxed text-ink/90">
        <li>
          <h3 className="font-medium text-ink">1. Open the Split tab</h3>
          <p className="mt-2">
            Use <A href="/split">Split</A>. You should see a drop zone that takes one PDF at a
            time. If you landed on Merge by habit, you would be combining files, not cutting
            them.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">2. Drop the PDF you want to cut</h3>
          <p className="mt-2">
            The tab checks the header for %PDF, the size (over {MAX_PDF_MB} MB is rejected), and a
            page count. A password error means unlock the file in Preview, Acrobat or the scanner
            app, then drop the unprotected copy. A non-PDF is rejected rather than converted.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">3. Read the page count we show</h3>
          <p className="mt-2">
            If the count is 1, split has nothing useful to do unless you only wanted a rewritten
            copy, which is not this tool’s job. Open the original alongside and confirm which
            physical page is “the signature page” before you type a number.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">4. Pick a mode and tap Split</h3>
          <p className="mt-2">
            Keep the tab open. The copier runs in memory. A long document on a phone can hitch or
            reload Safari; that is RAM, not an upload timeout. If it fails, try a desktop browser
            with the same file. You still have the original — Folio never took it.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">5. Download the PDF or the ZIP</h3>
          <p className="mt-2">
            Open the result and check the pages before you delete anything. Then keep or discard
            the original on your disk. Folio does not retain a shadow copy. Closing the tab
            discards the bytes in memory. There is no job ID.
          </p>
        </li>
      </ol>

      <H2>If split did not work</H2>
      <P>
        Password or encryption: unlock locally, retry. Wrong range syntax: use 1-3, 5, 8-10
        without words. Range beyond the page count: we error instead of clipping silently. Phone
        out of memory: fewer pages, or a laptop. Corrupt PDF: another reader will usually fail
        too. Folio will not repair a broken xref table. More refusals: <A href="/faq">FAQ</A>.
      </P>

      <H2>Split is not redaction</H2>
      <P>
        Pages you did not extract are simply not in the new file. They are not blacked out. If
        the leftover file still sits in a shared folder, the clauses are still there. Split is
        not a legal hold and not a crop tool. It does not remove a letterhead from a page you
        kept.
      </P>
      <P>
        Do not run <A href="/how-to-compress">compress</A> on the full NDA “to make split
        faster”. Split already copies pages. A pre-pass through compress only risks forms and
        metadata you did not need to touch. If the NDA is huge because it is a scan of initials
        on every page, split will still work if the tab has RAM, but a phone may fail — use a
        laptop. That weight is explained on <A href="/scan">scans</A>.
      </P>

      <H2>Versus Preview, Acrobat, and upload sites</H2>
      <P>
        Apple Preview and Acrobat can extract pages well, on one computer, with a licence or a
        platform lock-in. Folio is the same class of job in a tab you can open on a borrowed PC
        without installing those. iLovePDF and cousins will split after an upload and often after
        an account. Use them when the document is public. Use Folio when it is not.
      </P>
      <P>
        After the extract, if the send is mail, read <A href="/email">email size</A>. If it is
        chat, read <A href="/whatsapp">WhatsApp</A>. If you still need one packet,{" "}
        <A href="/how-to-merge">merge</A> the pieces. Real examples (signature page, HR portal)
        sit on <A href="/use-cases">use cases</A>.
      </P>

      <H2>Pick ZIP versus one PDF before you tap</H2>
      <P>
        A clerk who asked for “pages 4–7 as one attachment” wants range mode. A portal with five
        empty file fields wants one-PDF-per-page, then you pick which singles to upload. A mailbox
        that caps 10 MB per message wants every-N on a 40-page scan. Switching mode after a
        failed send is fine — Folio did not keep the last job. Switching mode in your head after
        you already downloaded the wrong shape wastes a round. The three modes are not three
        names for the same button.
      </P>
      <P>
        If you then need those extracts stapled to a cover letter, that is{" "}
        <A href="/how-to-merge">merge</A>, a different tab. If the extract is still too heavy for
        Gmail, it is usually still a scan — <A href="/scan">scans</A> — not a missing fourth
        split mode.
      </P>

      <FaqSection items={splitFaq} />
    </Article>
  );
}
