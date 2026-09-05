import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/content/Article";
import { A, H2, H3, P } from "@/components/content/RichText";
import { mergeFaq } from "@/content/faq";
import { mergeGuide, mergeHowToSteps } from "@/content/guides";
import { articleHead } from "@/lib/seo";
import { FaqSection } from "@/components/pdf/FaqSection";
import { MAX_PDF_MB } from "@/lib/site";

export const Route = createFileRoute("/how-to-merge")({
  head: () =>
    articleHead({
      title: "How to merge PDF files in the browser without uploading — Folio",
      description:
        "Join two or more PDFs on this device. Reorder whole files, download one packet, no account, no watermark, no conversion server.",
      path: "/how-to-merge",
      appName: "How to merge PDFs",
      includeApp: false,
      faqs: mergeFaq,
      howToName: mergeGuide.title,
      howToSteps: mergeHowToSteps,
    }),
  component: HowToMergePage,
});

function HowToMergePage() {
  return (
    <Article
      title="How to merge PDF files in the browser without uploading"
      lede="Join two or more PDFs on this device. Folio copies pages in the tab and never posts the packet to a merge API."
      toolHref="/"
      toolLabel="Open the merger"
      extra={{ href: "/email", label: "Email size limits" }}
      related="merge"
    >
      <P>
        The usual reason to merge is a portal that wants one attachment: a lease plus an ID, an
        invoice plus a PO, a deck plus an appendix. Hosted mergers solve that by taking the
        upload. That is the wrong bargain when the files include an ID scan or a signed contract.
      </P>
      <P>
        Folio concatenates whole files in the order you set. It does not interleave pages from two
        documents on its own. It does not delete a page in the middle of one file. If you need
        pieces, <A href="/how-to-split">split first</A>, then merge the pieces. Password-protected
        PDFs are refused. JavaScript must be on. Chrome, Edge, Firefox and Safari are the intended
        browsers.
      </P>
      <P>
        Merge does not shrink anything. If Gmail then refuses the packet, that is size —{" "}
        <A href="/email">email caps</A>. If the weight is a photograph of paper,{" "}
        <A href="/scan">scans</A>. If the send is a chat, <A href="/whatsapp">WhatsApp</A>. Those
        are different URLs on purpose. This page is only how to join files.
      </P>

      <H2>What “merge” means on this site</H2>
      <P>
        File A’s pages, then file B’s pages, then file C, top to bottom. That is the entire
        product. There is no “insert B after page 4 of A” button. There is no thumbnail grid of
        every page. If B must sit inside A, split A into the part before B and the part after B,
        then merge those three pieces in order. That is two tools, not one clever click.
      </P>
      <P>
        Page sizes are not normalized. An A4 lease plus a phone-photo ID will look uneven. Portals
        rarely care. Print shops do. Folio does not produce PDF/A or PDF/X. If a court clerk asked
        for PDF/A, this is the wrong site. If a landlord portal asked for “one PDF”, this is the
        page.
      </P>

      <H2>Steps</H2>
      <ol className="mt-5 list-decimal space-y-5 pl-5 text-sm leading-relaxed text-ink/90">
        <li>
          <h3 className="font-medium text-ink">1. Open the merge page</h3>
          <p className="mt-2">
            The <A href="/">homepage</A> is merge. You should see a drop zone for two or more PDFs.
            If you landed on Split or Compress, you are on a different job. This article is the
            long version of that homepage, not a second merger.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">2. Drop the files that should become one packet</h3>
          <p className="mt-2">
            Each file is checked in the tab: PDF signature, size under {MAX_PDF_MB} MB, a page
            count if we can read one. A password error means unlock the file in Preview or Acrobat
            first. Folio will not ask for that password. A non-PDF is rejected rather than
            converted.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">3. Put them in order with the arrows</h3>
          <p className="mt-2">
            The merged PDF is first file, then the next, top to bottom. If the ID should not sit
            in the middle of the lease, move it before you tap Merge. Folio does not guess a
            “cover then appendix” order. Order mistakes are the common failure on this tool, not
            “the merge engine is broken”.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">4. Tap Merge and keep the tab open</h3>
          <p className="mt-2">
            pdf-lib copies page content into a new document in memory. A phone tab can reload on a
            fat colour scan. If it does, use a laptop. Nothing was uploaded, so nothing is waiting
            on a server. Do not close Safari to “speed it up”.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">5. Download and flip through every page</h3>
          <p className="mt-2">
            There is no watermark. Open the file before you submit it to a portal. Then keep the
            originals on disk. Closing this tab discards the bytes in memory. There is no job ID
            to retrieve tomorrow.
          </p>
        </li>
      </ol>

      <H2>If merge did not work</H2>
      <P>
        Only one file: add a second PDF. Password: unlock locally. Over the {MAX_PDF_MB} MB size
        guard: <A href="/how-to-compress">compress</A> a digital export first, or{" "}
        <A href="/how-to-split">split</A> a scan into fewer pages. Forms that must stay fillable:
        stop — merge copies pages and often drops the form catalog. Corrupt PDF: export again from
        the source app. Folio will not repair a broken xref table. Short answers:{" "}
        <A href="/faq">FAQ</A>.
      </P>

      <H2>When merge is the wrong first click</H2>
      <H3>You need pages 4–7 of a 40-page file</H3>
      <P>
        That is <A href="/split">Split</A>, not merge. Merge would make a bigger file. Extract the
        range, then come back here only if those pages must travel with something else.
      </P>
      <H3>Gmail refuses 28 MB</H3>
      <P>
        Merge did not cause the cap and will not lift it. A digital brochure may shrink on{" "}
        <A href="/compress">Compress</A>. Extra pages you do not need to send should be split off.
        The numbers and MIME overhead are on the <A href="/email">email size guide</A>.
      </P>
      <H3>The ID is a photograph</H3>
      <P>
        Joining a 1-page letter onto an 18 MB ID does not make the ID smaller. Recapture the ID,
        or accept the portal’s cap. That honesty is the <A href="/scan">scans guide</A>. Real
        packets (landlord, HR, NDA) are written out under <A href="/use-cases">use cases</A>.
      </P>

      <H2>Forms and fillable fields</H2>
      <P>
        Folio copies page content into a new PDF. Fillable fields, checkboxes, dropdowns and
        JavaScript actions often belong to a form catalog that is not rebuilt. A form you still
        need to type into should not be merged here. Flatten it first, or keep the official file
        as its own upload if the portal allows a second field. Marks that are already baked into
        the page (a signed appearance, a stamp) usually still show, because those are page
        content. They may no longer be editable.
      </P>

      <H2>Versus Preview, Acrobat, and upload mergers</H2>
      <P>
        Preview and Acrobat merge well on one computer you already trust. Folio is the same class
        of job in a tab on a borrowed PC. iLovePDF and cousins merge after an upload and often
        after an account. Use them when the document is public. Use Folio when it is not. We do
        not OCR, e-sign, or mint a cloud link. More: <A href="/about">about Folio</A>.
      </P>
      <P>
        After a successful merge, if the send is WhatsApp rather than mail, stop treating this as
        an email problem. Chat clients fail earlier and rasterize PDFs that leave through the
        camera roll. That walkthrough is <A href="/whatsapp">send a PDF in WhatsApp</A>.
      </P>

      <H2>Two packets people get wrong</H2>
      <H3>Lease, then ID, then letter</H3>
      <P>
        Put the lease first. An ID in the middle of clause 12 looks like a broken file to a clerk
        who is skimming thumbnails. If the ID is 18 MB of colour photograph, merge will not rescue
        the portal’s 10 MB field — recapture, then merge. That is the landlord job on{" "}
        <A href="/use-cases">use cases</A>, not a different merger.
      </P>
      <H3>Cover letter plus five exhibits</H3>
      <P>
        Cover first, then exhibits in the order the checklist named. If exhibit C is a 40-page
        scan and they asked for the signature page, <A href="/split">split</A> that exhibit first.
        Merging the full scan “so they have everything” is how Gmail bounces and how WhatsApp
        sits on “waiting”. Chat: <A href="/whatsapp">WhatsApp</A>. Mail:{" "}
        <A href="/email">email size</A>.
      </P>

      <FaqSection items={mergeFaq} />
    </Article>
  );
}
