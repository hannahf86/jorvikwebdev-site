/* =============================================================================
   PAGE: Privacy Policy  (route: /legal/privacy-policy)
   Faithful port of legal/privacy-policy.html. Main content only — the shared
   layout supplies the navbar and footer. Includes the page's JSON-LD.
   ============================================================================= */

import "@/styles/vendor/pages/legal__privacy-policy.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy | Jorvik Web Dev",
  description:
    "Learn how Jorvik Web Dev collects, uses, and protects your personal information. UK GDPR compliant privacy policy for our web design services.",
  path: "/legal/privacy-policy",
});

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: "https://jorvikweb.dev/legal/privacy-policy",
  inLanguage: "en",
  description:
    "Privacy policy explaining how Jorvik Web Dev collects, uses, and protects your information when you visit our website.",
  about: {
    "@type": "Organization",
    name: "Jorvik Web Dev",
    alternateName: "Jorvik Web",
    email: "hello@jorvikweb.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "York",
      addressCountry: "GB",
    },
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <section className="section">
        <div className="w-richtext">
          <h1>Privacy Policy</h1>
          <p><strong>Last updated:</strong> 9 March 2026</p>
          <p>Welcome to the website of <strong>Jorvik Web</strong>. Your privacy is important to us, and we are committed to protecting your personal data in accordance with UK data protection law.</p>
          <p>This privacy policy explains how we collect, use, and protect your information when you visit our website.</p>
          <p>‍</p>
          <h2>1. Who We Are</h2>
          <p>Jorvik Web is a web design and digital services provider based in York, United Kingdom.</p>
          <p>If you have any questions about this policy or how your data is handled, please contact:</p>
          <p><strong>Email:</strong>
            <a href="#">hello@jorvikweb.co.uk</a>
          </p>
          <p>‍</p>
          <h2>2. What Information We Collect</h2>
          <p>We may collect the following types of personal data:</p>
          <h3>Information you provide directly</h3>
          <p>You may provide information when you:</p>
          <ul role="list">
            <li>Fill in a contact form</li>
            <li>Book a consultation</li>
            <li>Subscribe to a newsletter</li>
            <li>Enquire about services</li>
            <li>Become a client</li>
          </ul>
          <p>This may include:</p>
          <ul role="list">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Website URL</li>
            <li>Any information you include in your message</li>
          </ul>
          <h3>Information collected automatically</h3>
          <p>When you visit our website we may collect:</p>
          <ul role="list">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Referral source</li>
          </ul>
          <p>This information helps us understand how visitors use the site and improve our services.</p>
          <h2>3. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul role="list">
            <li>Respond to enquiries</li>
            <li>Deliver services you request</li>
            <li>Manage client relationships</li>
            <li>Send newsletters or marketing communications (only with consent)</li>
            <li>Improve our website and services</li>
            <li>Maintain security and prevent fraud</li>
          </ul>
          <h2>4. Legal Basis for Processing</h2>
          <p>Under UK GDPR, we rely on the following lawful bases:</p>
          <p><strong>Consent</strong><br />For email marketing and newsletter subscriptions.</p>
          <p><strong>Contract</strong><br />When processing data necessary to provide services you have requested.</p>
          <p><strong>Legitimate Interests</strong><br />To operate and improve our business and website.</p>
          <h2>5. Cookies</h2>
          <p>Our website may use cookies and similar technologies to:</p>
          <ul role="list">
            <li>Analyse website traffic</li>
            <li>Improve user experience</li>
            <li>Remember preferences</li>
          </ul>
          <p>You can control cookies through your browser settings.</p>
          <h2>6. Third Party Services</h2>
          <p>We may use trusted third-party services to operate our website and business, such as:</p>
          <ul role="list">
            <li>Website hosting providers</li>
            <li>Email marketing platforms</li>
            <li>Analytics tools</li>
            <li>Payment processors</li>
          </ul>
          <p>These providers process data on our behalf and are required to comply with data protection laws.</p>
          <h2>7. Data Storage and Security</h2>
          <p>We take reasonable technical and organisational measures to protect your personal data from:</p>
          <ul role="list">
            <li>Unauthorised access</li>
            <li>Loss or misuse</li>
            <li>Alteration or disclosure</li>
          </ul>
          <p>However, no internet transmission is completely secure.</p>
          <h2>8. How Long We Keep Your Data</h2>
          <p>We retain personal data only for as long as necessary to:</p>
          <ul role="list">
            <li>Provide services</li>
            <li>Meet legal obligations</li>
            <li>Resolve disputes</li>
          </ul>
          <p>Marketing data is kept until you unsubscribe.</p>
          <h2>9. Your Rights</h2>
          <p>Under UK GDPR you have the right to:</p>
          <ul role="list">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Restrict processing</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>
          <p>To exercise these rights, please contact us.</p>
          <h2>10. Complaints</h2>
          <p>If you are unhappy with how your data is handled, you may contact the UK regulator:</p>
          <p>Information Commissioner&#x27;s Office</p>
          <p>Website: <a target="_new" href="https://ico.org.uk">https://ico.org.uk</a>
          </p>
          <h2>11. Changes to this Policy</h2>
          <p>We may update this policy from time to time. Updates will be posted on this page.</p>
          <p>‍</p>
        </div>
      </section>
    </>
  );
}
