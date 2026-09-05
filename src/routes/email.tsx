import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/content/Article";
import { A, H2, H3, P } from "@/components/content/RichText";
import { emailFaq } from "@/content/faq";
import { emailHowToSteps } from "@/content/guides";
import { articleHead } from "@/lib/seo";
import { FaqSection } from "@/components/pdf/FaqSection";
import { MAX_PDF_MB } from "@/lib/site";

export const Route = createFileRoute("/email")({
  head: () =>
    articleHead({
      title: "Fit a PDF under Gmail and Outlook size caps — Folio",
      description:
        "Gmail still rejects many attachments around 25 MB. MIME overhead eats more. Compress a digital PDF in this tab, or split pages. Scans of paper will not magically shrink. No upload.",
      path: "/email",
      appName: "PDF email size",
      includeApp: false,
      faqs: emailFaq,
      howToName: "How to get a PDF through Gmail and Outlook size caps",
      howToSteps: emailHowToSteps,
    }),
  component: EmailPage,
});

function EmailPage() {
  return (
    <Article
      title="How to get a PDF through Gmail, Outlook and portal caps"
      lede="Mail apps still reject large PDFs. Folio can compress a digital export or split pages in this tab. It will not pretend a scan became 2 MB, and it will not send the email for you."
      toolHref="/compress"
      toolLabel="Open compress"
      extra={{ href: "/split", label: "Split pages" }}
      related="email"
    >
      <P>
        Gmail’s practical attachment ceiling is still around 25 MB for many personal accounts. That
        number is not the size of the file on disk. Mail encodes attachments in MIME, which adds
        roughly a third. A 22 MB PDF on your desktop can fail as a 29 MB message. Aim under 18–19 MB
        if you want the send to be boring. Folio does not change MIME. It rewrites or cuts the PDF
        you already have, in this tab. Nothing is uploaded.
      </P>
      <P>
        Outlook and Microsoft 365 are a different ceiling. Some tenants allow 35 MB. Some lock
        attachments at 10 or 20. A government portal may say 2 MB or 10 MB in a help page you
        already ignored. WhatsApp is not mail — that job lives on the{" "}
        <A href="/whatsapp">WhatsApp PDF guide</A>, because chat clients fail for other reasons.
        This page is inboxes and upload slots.
      </P>
      <P>
        The reflex after a bounce is “compress PDF online”. That usually means: upload the
        contract, wait, download a rasterized cousin, maybe with a watermark. Folio stays on the
        device. If the PDF was exported from Word, InDesign, PowerPoint or an invoicing app, start
        on <A href="/compress">Compress</A> with Balanced. If it is a photograph of paper, stop
        expecting that button to save you — read <A href="/scan">why scans stay heavy</A>.
      </P>

      <H2>The one test that decides the next click</H2>
      <P>
        Open the PDF and try to select a sentence. If you can highlight words, it is probably a
        digital export. Fonts and leftover objects are the weight. Balanced can help. If you can
        only select the whole page as a picture, it is a scan. Compress will barely move the
        needle. Split out the pages the recipient actually asked for, or photograph the paper
        again at a smaller size in the camera app. Folio does not downsample those photos and does
        not OCR.
      </P>
      <P>
        A hybrid file exists: a Word export that also embeds full-page screenshots. Selectable
        captions, dead-heavy pages. Compress the wrapper, then{" "}
        <A href="/split">split</A> the screenshot pages if the remaining file is still over the
        cap. Do not merge extra catalogues into the same attachment and wonder why Gmail still
        refuses it.
      </P>

      <H2>Steps for a digital export</H2>
      <ol className="mt-5 list-decimal space-y-5 pl-5 text-sm leading-relaxed text-ink/90">
        <li>
          <h3 className="font-medium text-ink">1. Confirm you can select text</h3>
          <p className="mt-2">
            If you cannot, leave this sequence. The{" "}
            <A href="/scan">scans guide</A> is the honest next page.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">2. Open Compress, start with Balanced</h3>
          <p className="mt-2">
            Drop the file on <A href="/compress">the compress tab</A>. Stay under {MAX_PDF_MB} MB
            per file — that is a memory guard for the tab, not Gmail’s cap. Read before and after
            sizes. If Balanced helps, download and attach from your mail app. Folio does not send
            the email.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">3. If it is still over the cap, try Maximum or split</h3>
          <p className="mt-2">
            Maximum clears title and author and packs streams. It is not a new codec. If the file
            is still huge, open <A href="/split">Split</A> and keep only the pages the recipient
            named. Then attach that extract. A 40-page brochure where they asked for pages 2–5 is
            a split job, not a third compress pass.
          </p>
        </li>
        <li>
          <h3 className="font-medium text-ink">4. Keep a transmission copy and a master</h3>
          <p className="mt-2">
            The file you email can be the compressed or split copy. Keep the original for print or
            for a portal that hashes documents. Closing Folio does not archive either copy. There
            is no “job ID” to retrieve tomorrow.
          </p>
        </li>
      </ol>

      <H2>Caps people actually hit</H2>
      <H3>Gmail</H3>
      <P>
        Many accounts fail near 25 MB of message size, not 25 MB of PDF. Count MIME. Google Drive
        links are a different product. Folio will not mint one, will not sit a file in Drive, and
        will not paste a sharing URL into the compose window. If the recipient must have a cloud
        link, you make that link yourself after the download. That is the privacy bargain on this
        hostname.
      </P>
      <H3>Outlook / Microsoft 365</H3>
      <P>
        Exchange Online’s default maximum send size is often 35 MB, but a tenant admin can set 10,
        20, or something odd. Shared mailboxes and on-prem leftovers are worse. If Outlook says
        the attachment is too large, believe the tenant, not a blog post that quotes 35. Compress
        or split here, then attach again from Outlook. Folio does not talk to Microsoft.
      </P>
      <H3>Portals</H3>
      <P>
        Courts, universities, visa sites and landlord portals often print “PDF, 10 MB” or “PDF, 2
        MB” next to a single file field. Merge three documents only after each piece will fit. A
        9 MB ID scan plus a 3 MB lease is already over a 10 MB slot —{" "}
        <A href="/">merge</A> will not save you. Recapture the ID or split the lease. Details for
        packets live in <A href="/use-cases">use cases</A>.
      </P>
      <H3>Yahoo, iCloud, Proton, and the rest</H3>
      <P>
        Consumer inboxes besides Gmail and Outlook still cap attachments. The number changes.
        The test does not: select text, then compress or split. Folio does not have a preset per
        provider. If the bounce names a size, aim under that size on disk, then remember MIME
        will add about a third in transit. Drive, iCloud links and Proton “share a folder” are
        not this product.
      </P>

      <H3>Not this page</H3>
      <P>
        WhatsApp, Telegram and iMessage document sends fail at sizes that look small next to
        Gmail. A 12 MB slide deck can die on mobile data. That is the{" "}
        <A href="/whatsapp">WhatsApp guide</A>. Folio’s own {MAX_PDF_MB} MB guard is so a phone
        tab survives. It is not an email cap. Do not “compress until 80” and expect Gmail to
        smile.
      </P>

      <H2>What will not help</H2>
      <P>
        Renaming .pdf to .zip. Gmail often inspects the contents, and a zip of one PDF is still
        large. Merging a tiny cover letter onto a 40 MB scan. Running High, Balanced and Maximum
        in a loop on a scan — read <A href="/how-to-compress">how compress actually works</A>.
        Uploading an ID to a random compressor. Asking Folio to OCR so the scan “becomes text”.
        We do not.
      </P>
      <P>
        Base64 in the message is why a file that “is 25 MB” still bounces. Folio cannot strip
        MIME. Only a smaller PDF, or a link you create yourself, fixes that.
      </P>

      <H2>Forms, portals, and fillable fields</H2>
      <P>
        If the portal still needs a fillable form, do not compress or merge that form here. Folio
        copies pages and often drops the form catalog. Flatten in Preview or Acrobat, or keep the
        official file. Merge only static pages around it. The{" "}
        <A href="/how-to-merge">merge how-to</A> covers order and passwords. The{" "}
        <A href="/faq">FAQ</A> covers forms in one place.
      </P>
      <P>
        A hashed “do not alter this PDF” workflow and a Gmail cap are enemies. If a reviewer
        compares checksums, send the master another way and use Folio only for the courtesy copy.
        Say so in the email. Folio will not keep both files for you.
      </P>

      <H2>iPhone Mail and Android Gmail</H2>
      <P>
        On iPhone, Mail and the Gmail app inherit the same size rules as desktop Gmail. Safari
        may reload if the PDF is a fat colour scan — that is RAM, not an upload timeout. Move the
        file to a laptop, compress or split there, AirDrop the result back. Nothing was sent to
        Folio in either case. On Android, Files → Gmail attach is the same job. Do not “share as
        image”. That rasterizes the page. Stay on PDF.
      </P>
      <P>
        After a successful attach, open the sent item and preview the PDF. A truncated download
        from a killed tab is worse than a bounce. Keep the tab open until the browser’s download
        shelf shows a finished file. Then compose.
      </P>

      <H2>After the bounce, read the words</H2>
      <P>
        Gmail often says the message is too large, or that the attachment could not be sent.
        Outlook may quote a maximum send size set by the tenant. A portal may just flash “file too
        large” next to the field. Those are size. They are not “wrong PDF version”. Do not convert
        the file to Word. Do not rename .pdf to .zip. Do the select-text test, then compress or
        split. If the bounce arrived after a WhatsApp share, you are on the wrong page —{" "}
        <A href="/whatsapp">document versus photo</A>.
      </P>
      <P>
        Google Drive, OneDrive and iCloud links are not this product. Folio will not mint a
        sharing URL. If the recipient must have a cloud link, you create that link after the
        download. That is the privacy bargain on this hostname. A Drive link also does not prove
        the file shrank. It only parked the bytes somewhere else.
      </P>

      <FaqSection items={emailFaq} />
    </Article>
  );
}
