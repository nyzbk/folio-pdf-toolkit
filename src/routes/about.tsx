import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/components/content/Article";
import { A, H2, P } from "@/components/content/RichText";
import { articleHead } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    articleHead({
      title: "About Folio — local PDF merge, split and compress",
      description:
        "Folio is a browser PDF toolkit. Files stay on the device. No account, no watermark, no conversion server.",
      path: "/about",
      appName: "About Folio",
      includeApp: false,
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Article
      title="About Folio"
      lede="A local-first PDF toolkit. Merge, split and compress run in this tab. The file is not posted to a conversion server."
      toolHref="/"
      toolLabel="Merge PDFs"
      extra={{ href: "/faq", label: "FAQ" }}
    >
      <P>
        Folio exists because the common way to “just merge a PDF” is to upload it. Contracts, IDs,
        medical scans and payslips do not belong on a conversion server you will never see. A
        local-first tool keeps the bytes in the tab you opened. The work on this domain is
        specifically PDF: merge, split, compress. It is not a catalogue of HEIC converters,
        invoice generators or QR codes.
      </P>
      <P>
        Merge concatenates files you already have. Split extracts ranges, equal chunks, or one
        file per page. Compress rewrites structure and metadata; it does not pretend to be a scan
        optimizer. All three refuse password-protected PDFs rather than asking for the password.
        All three stay free of an account wall and of a watermark on the download.
      </P>

      <H2>What Folio is not</H2>
      <P>
        We deliberately do not build PDF-to-Word, e-sign, OCR, cloud storage, or “unlock this
        file”. Those products exist elsewhere and they change the privacy bargain. If Folio cannot
        do the job, the page should say so instead of hiding an upload behind a button that looks
        local. Password-protected PDFs are refused. Files over 80 MB are refused rather than
        half-processed. There is no OCR in this tab and no API that would send a scan off the
        device. Those refusals are documented on the <A href="/scan">scans guide</A> and in the{" "}
        <A href="/faq">FAQ</A> so a reviewer does not have to guess.
      </P>
      <P>
        The live operations are only the three tabs: merge, split, compress. Merge is the
        homepage. There is no hidden “AI suite”, no promised OCR, and no “coming soon” wall. Step
        by step: <A href="/how-to-merge">how to merge</A>, <A href="/how-to-split">how to split</A>
        , <A href="/how-to-compress">how to compress</A>. Pain pages:{" "}
        <A href="/email">email size</A>, <A href="/scan">scans</A>,{" "}
        <A href="/whatsapp">WhatsApp</A>. Packets: <A href="/use-cases">use cases</A>.
      </P>

      <H2>Who runs this, and ads</H2>
      <P>
        The operator is an independent publisher, not a PDF suite company. Contact:{" "}
        <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>. Write the URL, the browser, and
        what you expected. Do not send the document unless we ask. There is no phone line and no
        chat widget sitting on top of the drop zone. The same inbox is the ads-account contact.
      </P>
      <P>
        Ads, when Google approves the site, will sit after success and in the footer. They will
        not cover Merge. Please do not click them as a favour. Until Google marks the site Ready
        they are placeholders. Other local utilities we publish live on other hostnames. They are
        not a toolkit inside this header.
      </P>
      <P>
        Folio is English-first in the UI because the PDF jobs — packets, NDAs, attachment caps —
        are described in the same language as the error messages. Legal pages name the operator
        email. They do not claim a registered company if there isn’t one. The toolkit runs without
        creating an account, which also means there is no dashboard of past jobs to breach.
      </P>
      <P>
        This content layer was expanded on 6 September 2026 with unique article bodies, a WhatsApp
        document guide, and inline related links. The merge, split and compress engines did not
        change. A site that pretends every PDF problem is a button is the kind of site Program
        policies call low-value. We would rather be small and true.
      </P>
    </Article>
  );
}
