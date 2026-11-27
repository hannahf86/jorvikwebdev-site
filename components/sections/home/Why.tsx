/* ===== COMPONENT: Why (home) — port of index.html <section id="why" class="sec-why"> ===== */

export function Why() {
  return (
    <section id="why" className="sec-why">
      <div className="wrap">
        <div className="eyebrow">Why Jorvik Web Dev</div>
        <h2 className="sec-title">The bits that make us, <span className="hl-teal">us</span></h2>
        <div className="why-list">
          <div className="why-row">
            <div className="why-head">
              <div className="why-title"><span className="why-num">01</span>I train you</div>
              <div className="why-chev">⌄</div>
            </div>
            <div className="why-body">
              <div className="why-body-inner">
                <div className="mini-icon-service-div"><img src="/images/video.svg" loading="lazy" alt="" /></div>
                <p className="why-p">Video tutorials and a PDF manual with every build. You&#x27;ll be able to edit your own site without breaking out in a cold sweat — and you&#x27;ll never be held hostage by your own website.</p>
              </div>
            </div>
          </div>
          <div className="why-row">
            <div className="why-head">
              <div className="why-title"><span className="why-num">02</span>Neurodivergent friendly</div>
              <div className="why-chev">⌄</div>
            </div>
            <div className="why-body">
              <div className="why-body-inner">
                <div className="mini-icon-service-div"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" /></svg></div>
                <p className="why-p">Clear communication, structured processes, no overwhelming jargon-dumps. I work the way brains actually work — including the wonderfully wired ones.</p>
              </div>
            </div>
          </div>
          <div className="why-row">
            <div className="why-head">
              <div className="why-title"><span className="why-num">03</span>Honest by default</div>
              <div className="why-chev">⌄</div>
            </div>
            <div className="why-body">
              <div className="why-body-inner">
                <div className="why-icon icon-hand"></div>
                <p className="why-p">No jargon, a plain-English terms PDF in your welcome pack, and no upselling — I keep your business&#x27;s interests at heart, not my own.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
