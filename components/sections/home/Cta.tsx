/* =============================================================================
   COMPONENT: Cta (home) — port of index.html <section id="contact" class="sec-cta">
   The final "Ready for a website that pulls its weight?" contact section.
   Left column = copy + Calendly CTA; right column = <ContactForm /> (Resend).
   ============================================================================= */

import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/forms/ContactForm";

export function Cta() {
  return (
    <section id="contact" className="sec-cta">
      <div className="cta-grid">
        <div>
          <h2 className="cta-big">
            Ready for a website that <span className="hl-green">pulls </span>
            <span className="text-span-63">its</span>
            <span className="hl-green"> </span>
            <span className="text-span-64">weight?</span>
          </h2>
          <p className="cta-p">
            Tell us a little about what you need, or skip the typing and grab a slot in the calendar. Either way: free, friendly, zero pressure.
          </p>
          <div className="cta-btn-row">
            <a target="_blank" rel="noopener noreferrer" href={SITE.calendly} className="btn-primary">
              Book a free 30-min chat →
            </a>
          </div>
          <p className="cta-subnote">Prefer email? hello@jorvikweb.dev · We usually reply within two working days</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
