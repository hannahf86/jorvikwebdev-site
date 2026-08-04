/* ===== COMPONENT: Pain (home) — port of index.html <section class="sec-pain"> ===== */

export function Pain() {
  return (
    <section className="sec-pain">
      <div className="wrap">
        <div className="eyebrow">Sound familiar?</div>
        <h2 className="sec-title">Your website shouldn&#x27;t feel like a <span className="hl-teal">second job</span></h2>
        <p className="sec-intro">You started your business to do the thing you love, not to spend Sunday nights googling &quot;why is my website slow&quot; with a cold cup of tea.</p>
        <div className="pain-grid">
          <div className="pain-card-home">
            <div className="mini-icon-service-div"><img src="/images/fast.svg" loading="lazy" alt="" /></div>
            <h3 className="card-h">&quot;I don&#x27;t have time for this&quot;</h3>
            <p className="card-p">Between actual work, family, and the 47 other hats you wear as a small business owner, the website always lands at the bottom of the list. We get it, that&#x27;s literally why we exist.</p>
          </div>
          <div className="pain-card-home">
            <div className="mini-icon-service-div"><img src="/images/custom.svg" loading="lazy" alt="" /></div>
            <h3 className="card-h">&quot;I don&#x27;t speak developer&quot;</h3>
            <p className="card-p">Schemas? Meta tags? Hreflang?? <br /><br />We translate everything into plain English and train you up, so you&#x27;re never held hostage by your own website.</p>
          </div>
          <div className="pain-card-home">
            <div className="mini-icon-service-div"><img src="/images/top-brand.svg" loading="lazy" alt="" /></div>
            <h3 className="card-h">&quot;Why is everything an upsell?&quot;</h3>
            <p className="card-p">Proper SEO basics shouldn&#x27;t cost extra. With us they&#x27;re baked into every build; structured headings, alt text, meta descriptions, the lot. Comes as standard.</p>
          </div>
        </div>
        <p className="pain-kicker">If you nodded at any of those — <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/hannah-jwd/30min" className="kicker-link">let&#x27;s have a chat</a>. It&#x27;s free, and we&#x27;re nice.</p>
      </div>
    </section>
  );
}
