/* =============================================================================
   PAGE: Terms & Conditions  (route: /legal/terms-conditions-jorvik-web-dev)
   Faithful port of legal/terms-conditions-jorvik-web-dev.html. Main content only
   — the shared layout supplies the navbar and footer. Includes the page's
   JSON-LD.
   ============================================================================= */

import "@/styles/vendor/pages/legal__terms-conditions-jorvik-web-dev.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions | Jorvik Web Dev",
  description:
    "Read Jorvik Web Dev's terms and conditions governing website use, intellectual property, service information, and GDPR data protection policies.",
  path: "/legal/terms-conditions-jorvik-web-dev",
});

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms & Conditions",
  url: "https://jorvikweb.dev/legal/terms-conditions-jorvik-web-dev",
  inLanguage: "en",
  description:
    "Terms and conditions governing the use of Jorvik Web Dev website, including website use policies, intellectual property rights, service information, and GDPR data protection statement.",
  about: {
    "@type": "Organization",
    name: "Jorvik Web Dev",
    url: "https://jorvikweb.dev/",
    logo: {
      "@type": "ImageObject",
      url: "https://cdn.prod.website-files.com/69a5814c0b7dbd384048041e/69a5926cebd7c363f7668328_Logo-Text.webp",
      caption: "Jorvik Web Dev Logo which is an outline of a decorative viking helmet",
    },
    email: "hello@jorvikweb.dev",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61562515362932",
      "https://www.instagram.com/jorvikwebdev",
      "https://www.linkedin.com/in/hannah-feehan/",
      "https://www.youtube.com/@JorvikWebDev",
    ],
  },
  publisher: {
    "@type": "Organization",
    name: "Jorvik Web Dev",
    logo: {
      "@type": "ImageObject",
      url: "https://cdn.prod.website-files.com/69a5814c0b7dbd384048041e/69a5926cebd7c363f7668328_Logo-Text.webp",
    },
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <section className="section">
        <div className="w-richtext">
          <h1>Terms &amp; Conditions</h1>
          <p><strong>Last updated:</strong> 9 March 2026</p>
          <p>These terms govern your use of the Jorvik Web website.</p>
          <p>By using this website you agree to these terms.</p>
          <h2>1. Website Use</h2>
          <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
          <ul role="list">
            <li>Infringe the rights of others</li>
            <li>Restrict or inhibit others from using the site</li>
            <li>Attempt to compromise website security</li>
          </ul>
          <h2>2. Intellectual Property</h2>
          <p>All content on this website, including:</p>
          <ul role="list">
            <li>Text</li>
            <li>Graphics</li>
            <li>Branding</li>
            <li>Images</li>
            <li>Design elements</li>
          </ul>
          <p>is the property of <strong>Jorvik Web</strong> unless otherwise stated.</p>
          <p>You may not reproduce or redistribute content without permission.</p>
          <h2>3. Service Information</h2>
          <p>Information about services on this website is provided for general guidance only.</p>
          <p>Prices, packages, and service details may change without notice.</p>
          <h2>4. External Links</h2>
          <p>This website may contain links to third-party websites.</p>
          <p>We are not responsible for the content, policies, or practices of those websites.</p>
          <h2>5. Limitation of Liability</h2>
          <p>While we aim to ensure all information is accurate, we do not guarantee:</p>
          <ul role="list">
            <li>completeness</li>
            <li>accuracy</li>
            <li>availability of the website at all times</li>
          </ul>
          <p>Jorvik Web shall not be liable for any loss arising from the use of this website.</p>
          <h2>6. Governing Law</h2>
          <p>These terms are governed by the laws of <strong>England and Wales</strong>.</p>
          <p>Any disputes shall be subject to the jurisdiction of the courts of England and Wales.</p>
          <h1>GDPR / Data Protection Statement</h1>
          <p>Jorvik Web is committed to protecting personal data and complying with the <strong>UK General Data Protection Regulation</strong> and <strong>Data Protection Act 2018</strong>.</p>
          <p>We follow key data protection principles:</p>
          <ul role="list">
            <li>Lawfulness, fairness and transparency</li>
            <li>Purpose limitation</li>
            <li>Data minimisation</li>
            <li>Accuracy</li>
            <li>Storage limitation</li>
            <li>Integrity and confidentiality</li>
          </ul>
          <p>Personal data is only collected where necessary and is never sold to third parties.</p>
          <p>Where we rely on consent, individuals have the right to withdraw consent at any time.</p>
          <p>We ensure that any third-party service providers handling data on our behalf meet appropriate security and compliance standards.</p>
          <p>If you wish to access, correct, or delete your personal data, you may contact us at:</p>
          <p>
            <a href="#">hello@jorvikweb.co.uk</a>
          </p>
          <p>‍</p>
        </div>
      </section>
    </>
  );
}
