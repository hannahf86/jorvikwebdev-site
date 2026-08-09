/* ===== COMPONENT: About (home) — port of index.html <section id="about" class="sec-about"> ===== */

export function About() {
  return (
    <section id="about" className="sec-about">
      <div className="about-grid">
        <div className="about-visual"><img alt="" className="asset-tri-about" />
          <div className="sticker-about"><img src="/images/hannah-portrait.jpg" alt="Illustrated portrait of Hannah at her desk" className="about-img" />
            <div className="sticker-caption">Hannah<br />founder · designer · developer<br />tea drinker</div>
          </div>
        </div>
        <div>
          <div className="eyebrow">Who you&#x27;re working with</div>
          <h2 className="sec-title-light">Hi! <br />My name is <span className="text-span-98">Hannah.</span><br /><span className="text-span-62">One person who </span><span className="hl-green">actually does the work</span></h2>
          <p className="about-p">I&#x27;ve spent years building websites which is long enough to know what matters and what&#x27;s just noise. When you hire Jorvik Web Dev, you work directly with <span className="about-strong">me</span>, start to finish.</p>
          <p className="about-p">That means honest advice, clear timelines, and a site built by someone who&#x27;ll still be here when you fancy a change next year. No account managers, no hand-offs, no robotic ticket queues, just a friendly human who likes getting this stuff right.<br /><br />Looking for app development or something more codey?</p>
          <a target="_blank" rel="noopener noreferrer" href="https://hfdesign.co.uk" className="btn-outline-light">See my developer portfolio ↗</a>
          <div className="bio-trust">
            <div className="trust-item-sm"><span className="trust-dot"></span>Webflow Partner</div>
            <div className="trust-item-sm"><span className="trust-dot"></span>Google Approved UX Designer</div>
            <div className="trust-item-sm"><span className="trust-dot"></span>Fullstack Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
