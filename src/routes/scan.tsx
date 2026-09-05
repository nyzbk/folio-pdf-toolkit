import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/content/Article";
import { A, H2, P } from "@/components/content/RichText";
import { scanFaq } from "@/content/faq";
import { scanHowToSteps } from "@/content/guides";
import { articleHead } from "@/lib/seo";
import { FaqSection } from "@/components/pdf/FaqSection";
import { MAX_PDF_MB } from "@/lib/site";

export const Route = createFileRoute("/scan")({
  head: () =>
    articleHead({
      title: "Why a scanned PDF barely gets smaller in Folio",
      description:
        "A scan is a photograph of paper inside a PDF. Folio rewrites structure. It does not shrink those photographs, does not OCR, and does not upload the file.",
      path: "/scan",
      appName: "Scanned PDFs",
      includeApp: false,
      faqs: scanFaq,
      howToName: "What to do when a scanned PDF will not shrink",
      howToSteps: scanHowToSteps,
    }),
  component: ScanPage,
});

function ScanPage() {
  return (
    <Article
      title="Why a scanned PDF barely gets smaller in Folio"
      lede="A scan is a photograph of paper stored inside a PDF. Folio rewrites structure. It does not shrink those photographs and it does not OCR."
      toolHref="/split"
      toolLabel="Open split"
      extra={{ href: "/compress", label: "Try compress anyway" }}
      related="scan"
    >
      <P>
        People bring a 40 MB colour scan to <A href="/compress">Compress</A> and expect a 2 MB
        file. Online tools that deliver that usually re-JPEG the page on a server. Folio will not
        do that. The bargain would change: quality loss, and usually an upload. IDs, medical
        pages, payslips and marked-up contracts do not belong on that server.
      </P>
      <P>
        Use this page to decide whether split, a new photo, or a different app is the honest next
        step. <A href="/">Merge</A> will not make a scan lighter. Compress on High, Balanced or
        Maximum will not invent a codec. Gmail caps are a separate job — that is the{" "}
        <A href="/email">email size guide</A>. Chat sends are the{" "}
        <A href="/whatsapp">WhatsApp guide</A>.
      </P>

      <H2>Confirm it is a scan</H2>
      <P>
        Try to select a word. If you cannot, the page is an image. Phone scanner apps — Notes,
        Adobe Scan, CamScanner exports, a Files PDF from the iPhone camera — are usually images.
        A Word “Save as PDF” is usually text plus fonts. A hybrid exists: a digital letterhead
        with a photographed appendix. Selectable header, dead-heavy last pages. Split the
        appendix. Compress will not rescue those pages.
      </P>
      <P>
        Printed “300 dpi colour” in a scanner dialog is a warning, not a quality badge for email.
        Each page is a picture. Twenty pages is twenty pictures. The PDF wrapper is a box. Folio
        can tidy the box. It cannot shrink the pictures.
      </P>

      <H2>What Folio’s compressor actually does to a scan</H2>
      <P>
        It copies pages into a new PDF. It can drop leftover metadata and pack object streams.
        The heavy image XObjects stay. That is why before and after look alike. The FAQ line
        “scanned PDF barely gets smaller” is not a bug report. It is the product boundary. Read{" "}
        <A href="/how-to-compress">how to compress without uploading</A> if you still have a
        digital export in the same folder.
      </P>
      <P>
        pdf-lib, the library in this tab, is a page copier. It does not run a JPEG encoder on
        embedded images. It does not downsample. Sites that advertise “up to 90% smaller” on a
        scan are almost always rasterizing on a machine you do not control. Folio will not fake
        that number.
      </P>

      <H2>If you only need some pages, split</H2>
      <P>
        A 40-page scan where the portal wants pages 1 and 40 is a split job. Range mode on{" "}
        <A href="/split">Split</A> builds one PDF of those pages. The extract is smaller because
        it has fewer photographs, not because we compressed the pixels. That is the honest
        saving. Step-by-step: <A href="/how-to-split">how to split a PDF in the browser</A>.
      </P>
      <P>
        After the extract you can <A href="/">merge</A> those pages with a one-page cover letter.
        Do not merge the full 40-page scan with the letter and then ask Gmail why it bounced.
        Chat apps are even less patient — see <A href="/whatsapp">WhatsApp</A>.
      </P>

      <H2>If you need every page, recapture or use a scan tool</H2>
      <P>
        Photograph the paper again at a lower resolution, or use the scanner app’s own “document”
        mode. Black-and-white text at 150 dpi emails. Colour photos of paper at 300 dpi do not.
        A desktop tool that downsamples images will see the file because it runs as an app you
        installed. Folio will not downsample in this tab. That is not laziness. It is the line
        that keeps this site from becoming an upload farm.
      </P>
      <P>
        Files over {MAX_PDF_MB} MB are refused before parse. A phone tab will die anyway. Use a
        laptop for a 60-page colour stack, then send the result. Closing Safari discards the
        bytes in memory. Keep the original on disk.
      </P>

      <H2>OCR is a different product</H2>
      <P>
        OCR turns a picture of words into selectable text. It is useful. It is also the kind of
        job that often leaves the device. Folio will not run OCR in this tab and will not send
        the scan to an OCR API. If you already have a searchable PDF, you can merge or split it
        here like any other digital file. Searchable text is not the same as a smaller file. A
        searchable scan can still be 40 MB of pictures plus a text layer.
      </P>

      <H2>Do not upload “just this once” if it is private</H2>
      <P>
        IDs, medical pages, payslips, visas, and marked-up contracts do not belong on a
        conversion server. If the scan is a public brochure, an upload compressor is your
        choice, not Folio’s lecture. The operator inbox is on <A href="/contact">Contact</A>. Do
        not attach the scan in the first mail.
      </P>
      <P>
        Password-protected scans are refused. Unlock them in the scanner app or Acrobat, then
        drop the unprotected copy. We will not take the password. That refusal is documented in
        the <A href="/faq">FAQ</A> so a reviewer does not have to guess.
      </P>

      <H2>Notes, Adobe Scan, CamScanner, and the iPhone camera</H2>
      <P>
        Apple Notes “Scan Documents” usually writes an image PDF. Adobe Scan and CamScanner do
        the same unless you paid for a text / OCR export, which is a different file and a
        different privacy bargain. The iPhone camera roll shared as PDF is still a photograph.
        None of those become “text plus fonts” because you dropped them here. Recapture in the
        scanner app’s document preset at a lower resolution, or split to the pages a portal
        actually named.
      </P>
      <P>
        A 12-megapixel photo of an ID, saved as a one-page PDF, is often 8–20 MB by itself. The
        portal that said “PDF, 10 MB” will refuse it. Compress will not save you. Photograph the
        card farther away, in document mode, in good light, without the tablecloth. Then, if the
        portal wants the ID next to a lease, <A href="/how-to-merge">merge</A> the smaller ID with
        the lease. Do not merge first and hope the packet shrinks.
      </P>

      <H2>A diploma, a transcript, a 10 MB slot</H2>
      <P>
        HR and school portals often show one upload field. Five files feel like a merge job —
        and they are, after each piece fits. A colour photograph of a diploma is usually the
        piece that does not fit. Compressing the cover letter is theatre. Split is only useful
        if they asked for one page of the transcript. Honest path: recapture the diploma
        smaller, then merge. That packet is written out under{" "}
        <A href="/use-cases">use cases</A>.
      </P>
      <P>
        A searchable scan (OCR already run elsewhere) can still be 40 MB of pictures plus a text
        layer. Folio will merge or split that file like any other digital PDF. It will not throw
        the pictures away. Searchable is not the same as small.
      </P>

      <H2>After you have a smaller file, keep the master</H2>
      <P>
        Print shops and archives want the original. Email wants the extract. Folio is not a
        vault. Download and file both copies yourself. A shop that asked for the scan will reject
        a mashed JPEG pretending to be the same PDF. Send them the master. Send mail the extract.
      </P>

      <H2>Medical pages, payslips, visas</H2>
      <P>
        Those files are why this site exists as a tab instead of an upload. A hospital portal that
        asked for “the discharge summary, PDF, 5 MB” will not be happier if you sent the summary
        through a random compressor first. Recapture in document mode, or split to the page they
        named. Do not OCR a medical page on a website you found in an ad. Folio will not do it
        either. If a workplace asked for a payslip plus an ID in one field, recapture the ID
        first, then <A href="/how-to-merge">merge</A>. That packet is written out under{" "}
        <A href="/use-cases">use cases</A>.
      </P>
      <P>
        Colour versus grayscale matters at capture time, not here. A colour photo of a black
        letterhead is still a photograph. Switching Folio from Balanced to Maximum will not turn
        it grayscale. The scanner app’s “black and white document” preset is the right room.
      </P>

      <FaqSection items={scanFaq} />
    </Article>
  );
}
