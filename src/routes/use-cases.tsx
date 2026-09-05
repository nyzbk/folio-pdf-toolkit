import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/content/Article";
import { A, H2, H3, P } from "@/components/content/RichText";
import { articleHead } from "@/lib/seo";
import { MAX_PDF_MB } from "@/lib/site";

export const Route = createFileRoute("/use-cases")({
  head: () =>
    articleHead({
      title: "Folio use cases — portal packets, Gmail brochures, chat caps",
      description:
        "Six real PDF jobs: a landlord packet, a signature page, a Gmail brochure, an HR slot, a WhatsApp send, print vs mail. Local merge, split, compress. No upload.",
      path: "/use-cases",
      appName: "Folio use cases",
      includeApp: false,
    }),
  component: UseCasesPage,
});

function UseCasesPage() {
  return (
    <Article
      title="When to use Folio — six jobs that match the three tabs"
      lede="These are packets, extracts and transmission copies. They are not OCR, e-sign, Word export or a vault. If the file must leave the device, this is the wrong site."
      toolHref="/"
      toolLabel="Open the merger"
      extra={{ href: "/split", label: "Split a PDF" }}
      related="use-cases"
    >
      <P>
        Each job below names the first tab, the honest failure, and the page that is not this one.
        Gmail numbers live on the <A href="/email">email size guide</A>. Photographs of paper live
        on <A href="/scan">scans</A>. Chat sends live on <A href="/whatsapp">WhatsApp</A>. How-to
        mechanics: <A href="/how-to-merge">merge</A>, <A href="/how-to-split">split</A>,{" "}
        <A href="/how-to-compress">compress</A>. This URL is the map, not a fourth tool.
      </P>

      <H2>1. A landlord packet from three PDFs</H2>
      <P>
        You have a signed lease, a scan of an ID, and a proof-of-income letter, each saved as its
        own PDF from different apps. The portal wants one attachment. That is merge. Open the{" "}
        <A href="/">homepage</A>, drop the three files, put the lease first, download one packet.
        Nothing in that flow creates an account or sends the ID to a conversion company.
      </P>
      <P>
        If the ID is a photograph and the portal printed “PDF, 10 MB”, merge will not save you. The
        weight is the picture. Compressing the letter is theatre. Split the lease only if the
        checklist named specific clause pages. Recapture the card in document mode, then merge
        again. That honesty is the <A href="/scan">scans guide</A>, not a hidden downsample button
        on this page.
      </P>
      <H3>Order, paper size, fillable forms</H3>
      <P>
        Order mistakes are the common failure: if the ID lands in the middle of the lease, use the
        arrows before Merge, or split the lease and rebuild. Page size differences (A4 lease plus a
        phone-photo PDF) are allowed. Folio does not rescale pages to one paper size. If the portal
        asked for PDF/A, this merge will not produce PDF/A. Keep fillable official forms out of the
        packet — merge copies pages and often drops the form catalog. Flatten first, or keep that
        form as its own upload if a second field exists.
      </P>
      <P>
        Keep the three originals. Closing the tab discards the bytes. Email the download from your
        own mail app if a human still needs it. Caps after merge: <A href="/email">email size</A>.
      </P>

      <H2>2. The signature page from a 40-page NDA</H2>
      <P>
        Counsel sent a long NDA. Counterparty wants only the signature leaf on file, or you want
        page 40 without the commercial terms sitting in a shared folder. That is split, not merge.
        Open <A href="/split">Split</A>, drop the NDA, type the last page number as Folio counts
        it — file order, not the footer if those disagree. Range mode returns one PDF of that page.
      </P>
      <P>
        If you also need the definitions section, add it to the same range list: 3-5, 40 still
        produces one file. If they asked for separate attachments, switch to one-PDF-per-page and
        unzip. Do not upload the NDA to a cutter that files the document under a job ID. Folio
        never sees the clauses. Password-protected NDAs have to be unlocked in Preview or Acrobat
        first. We will not take the password.
      </P>
      <P>
        Split is not redaction. Pages you did not extract are simply not in the new file. They are
        not blacked out. If the leftover file still sits in a shared folder, the clauses are still
        there. After the extract you can <A href="/">merge</A> that leaf with a covering note.
        Compress is rarely needed for a one-page extract. Do not run compress on the full NDA “to
        make split faster”. Mechanics: <A href="/how-to-split">how to split in the browser</A>.
      </P>
      <P>
        If the NDA is huge because it is a scan of initials on every page, split still copies
        pages, but a phone tab may die. Use a laptop. That weight is a scan problem, explained on{" "}
        <A href="/scan">scans</A>.
      </P>

      <H2>3. A brochure that Gmail will not take</H2>
      <P>
        Gmail still refuses many attachments around 25 MB. MIME encoding adds about a third, so a
        22 MB file on disk can leave as a 29 MB message. A product brochure exported from InDesign
        or PowerPoint often overshoots because of unused objects, embedded fonts and metadata —
        not because every page is a photograph. Drop it on <A href="/compress">Compress</A>, start
        with Balanced, read before and after. The numbers: <A href="/email">email size guide</A>.
      </P>
      <P>
        If the file is a scan of printed pages, stop expecting a miracle. Folio will not shrink
        photos of paper. Photograph the brochure again at a lower resolution, or use a dedicated
        scan compressor you installed. If the file is a digital export and Balanced barely moved
        the needle, try Maximum once (title and author gone) and, if it is still huge,{" "}
        <A href="/split">split</A> out the pages the recipient actually named.
      </P>
      <P>
        Merge is the wrong first click unless you were asked to combine the brochure with a price
        list. Do not merge extra catalogues into the same attachment and wonder why Gmail still
        refuses it. Keep the InDesign or PPT source. Folio output is for sending, not for going
        back to layout. A print shop that asked for the master should get the master — that job
        is case 6 below, not this one.
      </P>
      <P>
        iPhone: if Safari reloads, the file is too heavy for that tab. Try a laptop. The brochure
        never left the device in either case. Folio’s own {MAX_PDF_MB} MB guard is RAM, not
        Gmail’s cap. Do not “compress until 80” and expect mail to smile. Presets:{" "}
        <A href="/how-to-compress">High, Balanced, Maximum</A>.
      </P>

      <H2>4. A school or HR portal with one upload slot</H2>
      <P>
        Five files: a diploma scan, a transcript, an ID page, a signed disclosure, a one-page
        cover letter. The portal shows a single PDF field. That is a merge job — after each piece
        fits. Open the homepage, drop the five files, put the cover letter first if they asked for
        it, download one packet.
      </P>
      <P>
        The diploma photograph is usually the piece that does not fit. An 18 MB colour photo into
        a 10 MB slot will fail whether you merge or not. Compressing the cover letter is theatre.
        Split is only useful if they asked for one page of the transcript. Honest path: recapture
        the diploma smaller in the scanner app’s document preset, then merge. Details sit on{" "}
        <A href="/scan">scans</A> because this is a picture-of-paper problem, not a metadata
        problem.
      </P>
      <P>
        Keep fillable HR forms out of this merge if you still need to type into them. Flatten the
        official form first, or upload that form in a second field if the portal allows it. Order
        mistakes are common. If the ID lands between diploma pages, use the arrows. Page sizes
        will not be normalized. Portals rarely care. Print shops do. This packet is for the
        portal, not a plotter.
      </P>
      <P>
        Do not upload the ID “to a better merger” because Folio felt slow on a phone. A slow tab
        is RAM. Use a laptop. If after merge the portal still rejects size, read{" "}
        <A href="/email">email size</A> even when the slot is not mail — the same MIME-shaped
        numbers show up as “10 MB PDF”. Do not loop Compress on the merged packet hoping the
        picture will collapse.
      </P>

      <H2>5. WhatsApp or Telegram will not send the PDF</H2>
      <P>
        This is not the Gmail case with the word WhatsApp pasted in. Chat fails earlier, on
        phones, on mobile data, and when someone shares a PDF through the camera roll so the
        other person receives a blurry image. Folio does not send into WhatsApp. You compress or
        split here, download, then attach as a <em>document</em> from Files, not from Photos. The
        full walkthrough is <A href="/whatsapp">send a PDF in WhatsApp</A>.
      </P>
      <P>
        If you can select text in the deck, open Compress, Balanced first. If after-size barely
        moved, the deck is full of photos of slides — treat it as a scan. If they only asked for
        two pages of notes, split. Range mode, one PDF. Do not merge extra catalogues “so they
        have everything”. Chat caps punish generosity. A group is harsher than a DM.
      </P>
      <P>
        Status, stickers and View Once are not PDF tools. Do not screenshot an NDA into the chat.
        Do not send a passport as a photo “because document failed”. Live Photos and HEIC files
        are the wrong site — this domain is PDF only. iPhone Safari: keep the tab in the
        foreground until the download finishes, then Files → WhatsApp → document. AirDrop from a
        laptop if the phone tab dies. Nothing was uploaded in either case.
      </P>
      <P>
        Telegram, Signal and iMessage have their own moods. Folio does not negotiate with any of
        them. WhatsApp Business may cap documents by company policy. We cannot see that policy
        and we will not open a WhatsApp API. There is no account on this site.
      </P>

      <H2>6. A print shop wants the original, a client wants an email copy</H2>
      <P>
        Those are two files. The shop asked for the InDesign or Acrobat export. The client asked
        for something that fits in mail. Compress the digital export for mail. Do not hand the
        shop the compressed copy as a new master. Folio does not downsample images and does not
        produce PDF/X.
      </P>
      <P>
        A scan of a printed brochure will not become an email file here. Re-export from layout
        with smaller images, or screenshot less. Then, if the wrapper is still sloppy, Balanced
        can trim leftover objects. Merge is the wrong first click unless the client also wanted a
        price list stapled to the brochure. Split is useful if they only needed pages 2–5 of a
        20-page lookbook.
      </P>
      <P>
        Forms, optional content groups and printer’s marks may not survive compress. Treat Folio
        output as a transmission copy. Keep the press PDF on disk with a name that says MASTER.
        If the shop’s machine rejects the email copy later, that is expected: you sent them the
        wrong file. Send the master. Folio did not convert colour spaces. Related:{" "}
        <A href="/email">email</A>, <A href="/scan">scans</A>,{" "}
        <A href="/how-to-compress">how to compress</A>.
      </P>

      <H2>Jobs this site will not pretend to do</H2>
      <P>
        OCR. E-sign. PDF to Word or Excel. Unlock a password. Host a file for a sharing link.
        Mint PDF/A or PDF/X. Downsample a photograph of an ID “just this once”. Those products
        exist elsewhere and they change the privacy bargain. If Folio cannot do the job, the page
        should say so. That refusal is the product, not a defect. Short answers:{" "}
        <A href="/faq">FAQ</A>. Operator: <A href="/about">about Folio</A>. Inbox:{" "}
        <A href="/contact">contact</A> — do not attach the PDF in the first mail.
      </P>
    </Article>
  );
}
