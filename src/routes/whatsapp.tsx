import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/content/Article";
import { A, H2, H3, P } from "@/components/content/RichText";
import { whatsappFaq } from "@/content/faq";
import { articleHead } from "@/lib/seo";
import { FaqSection } from "@/components/pdf/FaqSection";
import { MAX_PDF_MB } from "@/lib/site";

const HOW_TO = [
  "Decide document versus photo. A PDF must leave as a document, not a picture from the camera roll.",
  "If you can select text, compress Balanced in this tab, then attach the download in WhatsApp.",
  "If you cannot select text, split to the pages they asked for, or recapture the paper smaller.",
  "Share from Files or Documents, not from Photos. Photos rasterize the page.",
  "Keep the tab open until the download finishes. WhatsApp does not fetch the file from Folio — there is nothing on a server.",
];

export const Route = createFileRoute("/whatsapp")({
  head: () =>
    articleHead({
      title: "Send a PDF in WhatsApp without uploading it — Folio",
      description:
        "WhatsApp document sends fail at sizes that look fine in Gmail. Share as a document, not a photo. Compress a digital PDF in this tab, or split pages. No upload.",
      path: "/whatsapp",
      appName: "PDF in WhatsApp",
      includeApp: false,
      faqs: whatsappFaq,
      howToName: "How to send a PDF through WhatsApp from Folio",
      howToSteps: HOW_TO,
    }),
  component: WhatsAppPage,
});

function WhatsAppPage() {
  return (
    <Article
      title="Send a PDF in WhatsApp without turning it into a photo"
      lede="Chat apps are harsher than Gmail. Folio can compress a digital PDF or split pages in this tab. It will not send into WhatsApp for you, and it will not shrink a photograph of paper into a sticker-sized file."
      toolHref="/compress"
      toolLabel="Open compress"
      extra={{ href: "/split", label: "Split pages" }}
      related="whatsapp"
    >
      <P>
        This is not the Gmail page with the word WhatsApp pasted in. Mail caps sit around 25 MB
        and fail because of MIME. Chat fails earlier, on phones, on mobile data, and when someone
        shares a PDF through the camera roll so the other person receives a blurry image. Folio
        stays in the tab. You download. You attach in WhatsApp yourself.
      </P>
      <P>
        Gmail, Outlook and portal slots live on the <A href="/email">email size guide</A>.
        Photographs of paper live on <A href="/scan">scans</A>. Merge packets live on the{" "}
        <A href="/">homepage</A>. Keep those jobs on those URLs.
      </P>

      <H2>Document versus photo is the whole product</H2>
      <P>
        WhatsApp has two doors. Document keeps the PDF. Photo (camera roll, screenshot, “share
        image”) rasterizes the page. The other person cannot select text, cannot zoom without
        mush, and you already threw away the file. On iPhone, share from Files or the download
        shelf. On Android, share from Files or Downloads, not from Gallery. Desktop WhatsApp has
        a paperclip that wants a file. Use that.
      </P>
      <P>
        Status, stickers, voice notes and View Once are not PDF tools. A 30-second status will
        not carry a 12-page NDA. Do not screenshot each page into a chat. That is how IDs leak
        into backups.
      </P>

      <H2>Why a “small” PDF still fails in chat</H2>
      <P>
        People quote a 100 MB document limit and then fail at 12 MB on a phone. The number on a
        help page is not the number on a slow radio, an old client, or WhatsApp Business with a
        company policy. Telegram, Signal and iMessage have their own moods. Folio does not
        negotiate with any of them. It only rewrites or cuts the file you already have.
      </P>
      <P>
        Folio’s own guard is {MAX_PDF_MB} MB per input so the tab survives. That is not a
        WhatsApp cap. Do not compress “until 80” and expect a group chat to take it. Aim small.
        A two-page extract beats a 20-page deck nobody asked for.
      </P>

      <H2>If you can select text</H2>
      <P>
        Open <A href="/compress">Compress</A>. Balanced first. Read before and after. A
        PowerPoint “Save as PDF” often carries unused objects. That is the file Compress can
        help. Maximum clears title and author. It will not invent a codec. Step-by-step:{" "}
        <A href="/how-to-compress">how to compress without uploading</A>.
      </P>
      <P>
        If after-size barely moved, the deck is full of photos of slides — a scan-like file even
        if it came from PowerPoint after photographing a whiteboard. Treat it as a scan.{" "}
        <A href="/split">Split</A> to the two slides they asked for. Do not merge extra
        catalogues “so they have everything”. Chat caps punish generosity.
      </P>

      <H2>If you cannot select text</H2>
      <P>
        It is a picture of paper. Compress will barely help. That is not a WhatsApp quirk. That
        is how PDFs store photographs. Read <A href="/scan">why a scan stays heavy</A>. Split to
        the pages they named, or recapture at a smaller size in the camera’s document mode. Do
        not upload an ID to a “WhatsApp compressor”.
      </P>

      <H2>Phone, desktop, and Business</H2>
      <H3>iPhone</H3>
      <P>
        Safari may reload on a fat colour PDF. That is RAM. Keep the Folio tab in the foreground
        until the download finishes. Then Files → WhatsApp → document. AirDrop from a laptop if
        the phone tab dies. Nothing was uploaded in either case.
      </P>
      <H3>Android</H3>
      <P>
        Chrome download → Files → WhatsApp. If the share sheet offers Image and Document, pick
        Document. Gallery is the wrong room.
      </P>
      <H3>Desktop</H3>
      <P>
        Paperclip, pick the downloaded PDF, send. Desktop is usually kinder than a phone on
        mobile data. The file is still the same bytes. Compress here first if the send still
        fails.
      </P>
      <H3>WhatsApp Business</H3>
      <P>
        Some company accounts cap documents. Folio cannot see that policy. If Business rejects
        the file, split further or send a smaller recapture. We will not open a WhatsApp API.
        There is no account on this site.
      </P>

      <H2>Group chats versus a single chat</H2>
      <P>
        A group is harsher than a DM. More clients, more old phones, more “waiting” that never
        finishes. If a one-to-one send works and the group fails, split further or recapture —
        do not merge extra files “for the group archive”. Folio cannot see the group policy.
        Send the extract as a document. If two people need different pages, send two documents,
        not one deck.
      </P>
      <P>
        “Couldn’t send” and “waiting for internet” are not the same. Waiting is radio. Couldn’t
        send after a long wait is often size or type. If the share sheet offered Image and you
        tapped it, the other person got a picture. Send again as Document. Desktop paperclip is
        the boring path when a phone keeps failing.
      </P>

      <H2>What not to do</H2>
      <P>
        Do not screenshot an NDA into the chat. Do not send a passport as a photo “because
        document failed”. Do not rename .pdf to .doc. Do not loop Compress on a scan hoping the
        picture will collapse. Do not paste a Folio URL and expect the other person to download
        your PDF from us — we never had it. Do not mix this hostname with a HEIC converter.
        Photos that WhatsApp hates because they are HEIC belong on a different site. This domain
        is PDF.
      </P>
      <P>
        After a successful send, keep the original. Chat compression on the receiver side is
        their problem. Folio will not watermark the file you handed them. If they need a packet
        of several PDFs, <A href="/how-to-merge">merge first</A>, then send one document — only
        if the result still fits. Otherwise send the extracts as separate documents, not one
        bloated merge.
      </P>
      <P>
        Bugs and privacy questions: <A href="/contact">contact</A>. Do not attach the PDF in the
        first mail. More questions: <A href="/faq">FAQ</A>.
      </P>

      <H2>Telegram, Signal, iMessage — still not Gmail</H2>
      <P>
        Telegram document sends are often kinder than WhatsApp on desktop and harsher in a
        compressed-media default on phones. Signal treats a PDF as a file; it does not want a
        screenshot of each page in the thread. iMessage on iPhone will happily send a PDF from
        Files, and will equally happily send a photo of the first page if you picked the camera
        roll. The Folio job is the same: smaller honest PDF, then attach as a document. The{" "}
        <A href="/email">email guide</A> is the wrong sibling when the bounce happened in a chat.
      </P>
      <P>
        A “document” in WhatsApp Business catalogues is a storefront object. It is not this
        product. Folio will not list a PDF in a catalogue, will not open the Business API, and
        will not sit the file in a label. Download, then the paperclip. If a catalogue upload
        refuses the file, that is their cap — split further.
      </P>

      <FaqSection items={whatsappFaq} />
    </Article>
  );
}
