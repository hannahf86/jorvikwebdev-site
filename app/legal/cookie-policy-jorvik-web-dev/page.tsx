/* =============================================================================
   PAGE: Cookie Policy  (route: /legal/cookie-policy-jorvik-web-dev)
   Faithful port of legal/cookie-policy-jorvik-web-dev.html. Main content only —
   the shared layout supplies the navbar and footer. Includes the page's JSON-LD.
   ============================================================================= */

import "@/styles/vendor/pages/legal__cookie-policy-jorvik-web-dev.css";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy | Jorvik Web Dev",
  description:
    "Learn how Jorvik Web Dev uses cookies to improve website functionality, analytics, and user experience. Manage your cookie preferences and consent.",
  path: "/legal/cookie-policy-jorvik-web-dev",
});

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cookie Policy",
  url: "https://jorvikweb.dev/legal/cookie-policy-jorvik-web-dev",
  inLanguage: "en",
  description:
    "Cookie Policy for Jorvik Web Dev explaining how cookies are used on the website, types of cookies, and how to manage cookie preferences.",
  dateModified: "2025-01-01",
  about: {
    "@type": "Organization",
    name: "Jorvik Web Dev",
    alternateName: "Jorvik Web",
    email: "hello@jorvikweb.dev",
    logo: {
      "@type": "ImageObject",
      url: "https://cdn.prod.website-files.com/69a5814c0b7dbd384048041e/69a5926cebd7c363f7668328_Logo-Text.webp",
      caption: "Jorvik Web Dev Logo which is an outline of a decorative viking helmet",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61562515362932",
      "https://www.instagram.com/jorvikwebdev",
      "https://www.linkedin.com/in/hannah-feehan/",
      "https://www.youtube.com/@JorvikWebDev",
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Legal",
        item: "/legal",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cookie Policy",
        item: "/legal/cookie-policy-jorvik-web-dev",
      },
    ],
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <section className="section">
        <div className="w-richtext">
          <h1>Cookie Policy</h1>
          <p><strong>Last updated:</strong> 9 March 2026</p>
          <p>This Cookie Policy explains how <strong>Jorvik Web</strong> uses cookies and similar technologies on our website.</p>
          <p>By continuing to browse or use our website, you agree to our use of cookies as described in this policy.</p>
          <h2>What Are Cookies?</h2>
          <p>Cookies are small text files placed on your device when you visit a website.</p>
          <p>They help websites function properly, remember preferences, and collect information about how visitors interact with the site.</p>
          <p>Cookies cannot run programs or install viruses on your device.</p>
          <h2>How We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul role="list">
            <li>Ensure the website functions correctly</li>
            <li>Understand how visitors use the website</li>
            <li>Improve website performance</li>
            <li>Remember user preferences</li>
            <li>Support marketing and analytics</li>
          </ul>
          <h2>Types of Cookies We Use</h2>
          <h3>Essential Cookies</h3>
          <p>These cookies are necessary for the website to function properly.</p>
          <p>They may include cookies that:</p>
          <ul role="list">
            <li>enable security features</li>
            <li>manage sessions</li>
            <li>allow forms to work correctly</li>
          </ul>
          <p>Without these cookies, some parts of the website may not work properly.</p>
          <h3>Analytics Cookies</h3>
          <p>Analytics cookies help us understand how visitors use our website so we can improve it.</p>
          <p>These cookies may collect information such as:</p>
          <ul role="list">
            <li>pages visited</li>
            <li>time spent on the site</li>
            <li>traffic sources</li>
            <li>device and browser type</li>
          </ul>
          <p>Analytics data is aggregated and does not personally identify visitors.</p>
          <p>Analytics services may include tools such as:</p>
          <ul role="list">
            <li><strong>Google Analytics</strong></li>
          </ul>
          <h3>Marketing and Advertising Cookies</h3>
          <p>Marketing cookies help us understand the effectiveness of advertising and marketing campaigns.</p>
          <p>They may track interactions with ads and help us reach people who may be interested in our services.</p>
          <p>These may include services such as:</p>
          <ul role="list">
            <li><strong>Meta Pixel</strong></li>
          </ul>
          <p>These cookies may collect information about your browsing behaviour across websites.</p>
          <h3>Functional Cookies</h3>
          <p>These cookies allow the website to remember choices you make, such as:</p>
          <ul role="list">
            <li>form preferences</li>
            <li>saved settings</li>
            <li>other usability features</li>
          </ul>
          <p>This helps provide a more personalised experience.</p>
          <h2>Third-Party Cookies</h2>
          <p>Some cookies may be placed by third-party services used on our website.</p>
          <p>These providers may include:</p>
          <ul role="list">
            <li>website analytics providers</li>
            <li>email marketing services</li>
            <li>payment processors</li>
            <li>social media platforms</li>
          </ul>
          <p>These third parties may collect and process data according to their own privacy policies.</p>
          <h2>Managing Cookies</h2>
          <p>You can control or delete cookies through your browser settings.</p>
          <p>Most browsers allow you to:</p>
          <ul role="list">
            <li>block cookies</li>
            <li>delete existing cookies</li>
            <li>receive alerts before cookies are stored</li>
          </ul>
          <p>Please note that disabling some cookies may affect how the website functions.</p>
          <h2>Cookie Consent</h2>
          <p>When you first visit our website, you may be shown a cookie banner allowing you to accept or manage cookies.</p>
          <p>Non-essential cookies will only be used after consent has been provided.</p>
          <h2>Changes to This Policy</h2>
          <p>We may update this Cookie Policy from time to time.</p>
          <p>Updates will be posted on this page.</p>
          <h2>Contact</h2>
          <p>If you have any questions about this Cookie Policy or how cookies are used, please contact:</p>
          <p><strong>Jorvik Web</strong><br />Email: <a href="#">hello@jorvikweb.co.uk</a>
          </p>
          <p>‍</p>
        </div>
      </section>
    </>
  );
}
