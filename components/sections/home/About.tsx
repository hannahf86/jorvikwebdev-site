/* ===== COMPONENT: About (home) — port of index.html <section id="about" class="sec-about"> ===== */

export function About() {
  return (
    <section id="about" className="sec-about">
      <div className="about-grid">
        <div className="about-visual"><img alt="" className="asset-tri-about" />
          <div className="sticker-about"><img src="/images/hannah-portrait.jpg" alt="Illustrated portrait of Hannah at her desk" className="about-img" />
            <div className="sticker-caption"><span className="sticker-name">Hannah</span><br />Founder · Designer · Developer · Coffee drinker</div>
          </div>
        </div>
        <div>
          <div className="eyebrow">Who you&#x27;re working with</div>
          <h2 className="sec-title-light"><span className="hw-white">Hi! My name is Hannah</span><br /><span className="hw-green">I&#x27;m a UX Engineer</span><br /><span className="hw-teal">One person</span><br /><span className="hw-orange">who does the work</span></h2>
          <p className="about-p">I&#x27;m a UX engineer which, in plain English, means I&#x27;m a user experience designer first and a full-stack developer second. So every decision starts with the person actually using your site, not the technology behind it.</p>
          <p className="about-p">I started Jorvik Web Dev because something as important as your website shouldn&#x27;t be shrouded in mystery or hidden behind technical terms. Too often, less-techy business owners get taken advantage of and end up spending money they never needed to. I wanted to build the opposite: honest, clear, and firmly on your side.</p>
          <p className="about-p">When you work with me, you work with <span className="about-strong">me</span>; start to finish.</p>
          <p className="about-p">I&#x27;m a Webflow Certified Partner, a Google-trained UX Designer and a Meta-certified Social Media Manager. My goal is simple: keep the digital side of your business running smoothly, without costing you more than it needs to.</p>
          <a target="_blank" rel="noopener noreferrer" href="https://hfdesign.co.uk" className="btn-outline-light">See my developer portfolio ↗</a>
          <div className="bio-trust">
            <div className="trust-item-sm"><span className="trust-dot"></span>Webflow Partner</div>
            <div className="trust-item-sm"><span className="trust-dot"></span>Google Approved UX Designer</div>
            <div className="trust-item-sm"><span className="trust-dot"></span>Meta Certified Social Media Manager</div>
            <div className="trust-item-sm"><span className="trust-dot"></span>Fullstack Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
