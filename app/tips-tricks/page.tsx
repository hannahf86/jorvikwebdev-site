import "@/styles/vendor/pages/tips-tricks.css";

/* ===== PAGE: Tips & Tricks (/tips-tricks) — port of tips-tricks.html ===== */

import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";

export const metadata = pageMetadata({
  title: "Tips & Tricks — Web Design Advice for Small Businesses | Jorvik Web Dev",
  description:
    "Plain English web design and business growth tips from Jorvik Web Dev. No jargon, just practical advice you can actually use.",
  path: "/tips-tricks",
});

export default function TipsTricksPage() {
  return (
    <>
      <section className="tt-hero">
        <div className="tt-wrap">
          <div id="w-node-d6233641-cea8-3d85-f5a7-b1b8540deb9a-320dbded" className="tt-eyebrow">Tips &amp; Tricks</div>
          <h1 id="w-node-d6233641-cea8-3d85-f5a7-b1b8540deba1-320dbded" className="tt-hero-title"><span className="tt-hw tt-hw-w">Plain English</span><span className="tt-hw tt-hw-g">advice for</span><span className="tt-hw tt-hw-t">real </span><span className="text-span-65">businesses.</span></h1>
          <p id="w-node-d6233641-cea8-3d85-f5a7-b1b8540deba3-320dbded" className="tt-hero-sub">No &quot;leverage synergies&quot;. No &quot;disruptive paradigm shifts&quot;. Just straightforward answers to the questions small business owners actually ask — usually at 11pm on a Sunday.</p>
          <div id="w-node-d6233641-cea8-3d85-f5a7-b1b8540debae-320dbded" className="tt-cats">
            <a href="#" className="tt-cat tt-cat-all">All posts</a>
            <a href="#" className="tt-cat tt-cat-web">Web design</a>
            <a href="#" className="tt-cat tt-cat-seo">SEO</a>
            <a href="#" className="tt-cat tt-cat-ux">UX</a>
            <a href="#" className="tt-cat tt-cat-biz">Business</a>
          </div>
          <div id="w-node-_1e16198f-97ec-a0dc-1253-5f45b64037cb-320dbded" className="tt-hero-visual"><img src="/images/JWD---Tips.svg" alt="JWD illustrated computer" className="tt-computer" /></div>
        </div>
      </section>
      <section className="tt-sec">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming-youtube">
              <div className="tt-coming-copy">
                <div className="tt-coming-eyebrow">Also on YouTube</div>
                <h2 className="tt-coming-title">Watch it if reading<br />isn&#x27;t your thing</h2>
                <p className="tt-coming-p">Same advice, less scrolling. Hannah covers web design, SEO, and growing a small business online — with the same zero-nonsense energy you&#x27;d expect from someone who bills by the hour and doesn&#x27;t like wasting yours.</p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@jorvikwebdev" className="tt-coming-yt">▶ Watch on YouTube</a>
              </div><img src="/images/Steps-into-Digital-17-1024x576.png" loading="lazy" sizes="(max-width: 1024px) 100vw, 1024px" srcSet="/images/Steps-into-Digital-17-1024x576-p-500.png 500w, /images/Steps-into-Digital-17-1024x576-p-800.png 800w, /images/Steps-into-Digital-17-1024x576.png 1024w" alt="Image of Hannah Feehan delivering a webinar on web design for York Growth HUb" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="tt-wrap">
          <h2 className="tt-sec-title">Latest <span className="tt-hl-g">posts</span></h2>
          <div className="div-block-15">
            <div className="tt-blog-card">
              <div className="tt-blog-thumb"><img src="/images/ux-design---no-bg.webp" loading="lazy" sizes="(max-width: 2048px) 100vw, 2048px" srcSet="/images/ux-design---no-bg-p-500.webp 500w, /images/ux-design---no-bg-p-800.webp 800w, /images/ux-design---no-bg-p-1080.webp 1080w, /images/ux-design---no-bg-p-1600.webp 1600w, /images/ux-design---no-bg-p-2000.webp 2000w, /images/ux-design---no-bg.webp 2048w" alt="" className="image-16" /></div>
              <div className="tt-blog-body">
                <div className="tt-blog-meta">UX Design</div>
                <h3 className="tt-blog-title">UX Design for Small Business Owners</h3>
                <p className="tt-blog-excerpt">Think your website is &quot;fine&quot;? <br /><br />These 10 no-fluff UX rules explain why your visitors are leaving confused (and empty-handed). <br /><br />Grab a cuppa and let&#x27;s fix it.</p>
                <Link href="/blog/ux-design-for-small-business-owners" className="tt-blog-footer"><span>Read more →</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsletterCta />
      <section className="tt-cta">
        <div className="tt-wrap">
          <div className="tt-cta-inner">
            <h2 className="tt-cta-title">Want someone to just <span className="tt-cta-hl">do it for you?</span></h2>
            <p className="tt-cta-sub">Reading about SEO is one thing. Having it sorted while you focus on running your business is another. That&#x27;s what we&#x27;re here for.</p>
            <div className="tt-cta-row">
              <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/hannah-jwd/30min" className="tt-cta-btn">Book a free chat →</a>
              <Link href="/resources" className="tt-cta-btn tt-cta-btn-ghost">Grab a free resource</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
