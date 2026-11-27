/* ===== COMPONENT: Hero (home) — port of index.html <section id="home" class="hero"> ===== */

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-edge-l"><img src="/images/JWD---triangles.svg" alt="decorative triangles" className="edge-tri-l" /></div><img alt="" className="asset-asterisk-hero" /><img alt="" className="asset-burst-hero" />
      <div className="hero-grid">
        <div>
          <div className="hero-eyebrow">Web design studio · York, UK</div>
          <h1 className="hero-title"><span className="hero-line"><span className="hw-white">Websites</span></span><span className="hero-line"><span className="hw-green">that work</span></span><span className="hero-line"><span className="hw-teal">for</span> <span className="hw-orange">you</span></span></h1>
          <p className="hero-sub">I&#x27;m a York based UX engineer which means I design and build websites that help customers reach their goals on your site quickly and I create workflows for your business that make digital life that much easier.</p>
          <div className="hero-actions">
            <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/hannah-jwd/30min" className="btn-primary">Book a free chat →</a>
            <a href="#services" className="btn-ghost">See pricing</a>
          </div>
        </div>
        <div id="w-node-_346abe23-4d98-cc90-e4f4-d3d5b06553e2-08658532" className="hero-trust">
          <div className="trust-item"><span className="trust-dot"></span>Training always included</div>
          <div className="trust-item"><span className="trust-dot"></span>UX and SEO practices baked in</div>
          <div className="trust-item"><span className="trust-dot"></span>Zero jargon</div>
        </div>
        <div id="w-node-_346abe23-4d98-cc90-e4f4-d3d5b06553e9-08658532" className="hero-visual">
          <div className="sticker">
            <div className="reel-viewport">
              <div className="reel-track"><img src="/images/project-feel-good-menopause.png" alt="Feel Good Menopause website by Jorvik Web Dev" sizes="(max-width: 540px) 100vw, 540px" srcSet="/images/project-feel-good-menopause-p-500.png 500w, /images/project-feel-good-menopause.png 540w" className="reel-img" /><img src="/images/reel-marginalia.webp" alt="Marginalia bookshop website design by Jorvik Web Dev" className="reel-img" /><img src="/images/project-tbwc.webp" alt="The Beautiful Wardrobe Company website redesign by Jorvik Web Dev" sizes="(max-width: 1366px) 100vw, 1366px" srcSet="/images/project-tbwc-p-500.webp 500w, /images/project-tbwc-p-800.webp 800w, /images/project-tbwc-p-1080.webp 1080w, /images/project-tbwc.webp 1366w" className="reel-img" /><img src="/images/reel-ninefold.webp" alt="Ninefold gin distillery website design by Jorvik Web Dev" className="reel-img" /><img src="/images/reel-hollow-ash.webp" alt="Hollow Ash glamping website design by Jorvik Web Dev" className="reel-img" /></div>
            </div>
            <div className="sticker-caption">Launch-ready. Planet-friendly. Actually yours.</div>
          </div><img alt="" className="asset-tri-hero" />
        </div>
      </div>
      <div className="hero-edge-r"><img src="/images/JWD---triangles.svg" alt="" className="edge-tri-r" /></div>
    </section>
  );
}
