/* ===== COMPONENT: Faq (home) — port of index.html <section class="sec-faq"> ===== */

export function Faq() {
  return (
    <section className="sec-faq">
      <div className="wrap">
        <div className="eyebrow">Questions, answered honestly</div>
        <h2 className="sec-title">The stuff you&#x27;re <span className="hl-teal">wondering</span></h2>
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-q">How long does a website take to build?<span className="faq-plus">+</span></div>
            <div className="faq-a">
              <p className="faq-a-p">FastTrack sites go live within 7 working days. Brochure builds typically take 2–4 weeks; custom projects 4–8 weeks depending on features. You&#x27;ll get an honest timeline upfront — and we stick to it.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Will I be able to update the site myself?<span className="faq-plus">+</span></div>
            <div className="faq-a">
              <p className="faq-a-p">Yes — that&#x27;s the whole point. The Webflow tutorial is free with every Brochure package or above, and we build in Webflow because its editor is genuinely friendly for non-techy humans.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is SEO really included, or is that a sneaky upsell?<span className="faq-plus">+</span></div>
            <div className="faq-a">
              <p className="faq-a-p">Really included. Structured headings, schema markup, image optimisation, meta titles and descriptions come as standard with every build. We don&#x27;t think you should pay extra for the basics being done properly.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if I just need help with my existing website?<span className="faq-plus">+</span></div>
            <div className="faq-a">
              <p className="faq-a-p">Lovely — start with a UX Snapshot (£195) for a friendly second opinion, or SEO Repair (from £345) if Google&#x27;s ignoring you. You don&#x27;t need to rebuild from scratch to work with us.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Do you only work with businesses in York?<span className="faq-plus">+</span></div>
            <div className="faq-a">
              <p className="faq-a-p">Not at all — we&#x27;re York-based and love our local community, but we work with small businesses across the UK. Video calls work just as well as coffee shops (almost).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
