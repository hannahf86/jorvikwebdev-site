/* =============================================================================
   COMPONENT: NewsletterCta (home) — port of index.html
             <section id="contact" class="newsletter-cta-2">
   The "Want our best Tips, Tricks & Offers?" band. The original right column
   held a MailerLite embed; it's replaced here with our <NewsletterForm />.
   Webflow grid node-ids are preserved so the two-column layout matches.
   ============================================================================= */

import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterCta() {
  return (
    <section id="contact" className="newsletter-cta-2">
      <div className="cta-grid">
        <div id="w-node-_82f4caef-0837-a0cd-1794-585b36f71ddb-36f71dd9">
          <h2 className="cta-big">
            Want our best <span className="hl-green">Tips, </span>
            <span className="text-span-63">Tricks &amp;</span>
            <span className="hl-green"> </span>
            <span className="text-span-64">Offers?</span>
          </h2>
        </div>
        <div id="w-node-_82f4caef-0837-a0cd-1794-585b36f71de6-36f71dd9" className="newsletter-mailerlite">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
