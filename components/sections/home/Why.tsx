/* ===== COMPONENT: Why (home) — port of index.html <section id="why" class="sec-why"> ===== */

export function Why() {
  return (
    <section id="why" className="sec-why">
      <div className="wrap">
        <div className="eyebrow">Why Jorvik Web Dev</div>
        <h2 className="sec-title">The bits that make us <span className="hl-teal">us</span></h2>
        <div className="why-list">
          <div className="why-row">
            <div className="why-head">
              <div className="why-title"><span className="why-num">01</span>We train you, free</div>
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
              <div className="why-title"><span className="why-num">02</span>100% eco hosting</div>
              <div className="why-chev">⌄</div>
            </div>
            <div className="why-body">
              <div className="why-body-inner">
                <div className="mini-icon-service-div"><img src="/images/leaf-1.svg" loading="lazy" alt="" /></div>
                <p className="why-p">Green hosting through Krystal — they plant a tree for every domain registered. Your website gives back to the planet instead of just taking from it.</p>
              </div>
            </div>
          </div>
          <div className="why-row">
            <div className="why-head">
              <div className="why-title"><span className="why-num">03</span>Neurodivergent friendly</div>
              <div className="why-chev">⌄</div>
            </div>
            <div className="why-body">
              <div className="why-body-inner">
                <div className="mini-icon-service-div"></div>
                <p className="why-p">Clear communication, structured processes, no overwhelming jargon-dumps. We work the way brains actually work — including the wonderfully wired ones.</p>
              </div>
            </div>
          </div>
          <div className="why-row">
            <div className="why-head">
              <div className="why-title"><span className="why-num">04</span>Honest by default</div>
              <div className="why-chev">⌄</div>
            </div>
            <div className="why-body">
              <div className="why-body-inner">
                <div className="why-icon icon-hand"></div>
                <p className="why-p">SEO basics included as standard, prices on the website, and we&#x27;ll tell you when you don&#x27;t need something. Revolutionary, we know.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
