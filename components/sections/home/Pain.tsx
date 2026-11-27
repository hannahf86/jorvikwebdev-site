/* ===== COMPONENT: Pain (home) — port of index.html <section class="sec-pain"> ===== */

export function Pain() {
  return (
    <section className="sec-pain">
      <div className="wrap">
        <div className="eyebrow">How I can help you</div>
        <h2 className="sec-title">Your website shouldn&#x27;t feel like a <span className="hl-teal">second job</span></h2>
        <div className="pain-grid">
          <div className="pain-card-home">
            <div className="mini-icon-service-div"><img src="/images/fast.svg" loading="lazy" alt="" /></div>
            <h3 className="card-h">&quot;I don&#x27;t have time for this&quot;</h3>
            <p className="card-p">Most of us wear too many hats already, web designer shouldn&#x27;t be one of them</p>
          </div>
          <div className="pain-card-home">
            <div className="mini-icon-service-div"><img src="/images/custom.svg" loading="lazy" alt="" className="pain-icon-code" /></div>
            <h3 className="card-h">&quot;I don&#x27;t speak developer&quot;</h3>
            <p className="card-p">With handover training, we make sure you understand your website entirely</p>
          </div>
          <div className="pain-card-home">
            <div className="mini-icon-service-div"><img src="/images/top-brand.svg" loading="lazy" alt="" /></div>
            <h3 className="card-h">&quot;Why is everything an upsell?&quot;</h3>
            <p className="card-p">SEO, UX and accessibility best practices always included</p>
          </div>
        </div>
        <p className="pain-kicker">If you nodded at any of those, <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/hannah-jwd/30min" className="kicker-link">let&#x27;s have a chat</a>. It&#x27;s free.</p>
      </div>
    </section>
  );
}
