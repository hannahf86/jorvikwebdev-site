import "@/styles/vendor/pages/latest-news.css";

/* ===== PAGE: Latest News (/latest-news) — port of latest-news.html ===== */

import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";

export const metadata = pageMetadata({
  title: "Latest News | Web Design in York | Jorvik Web Dev",
  description:
    "Plain English web design and business growth tips from Jorvik Web Dev. No jargon, just practical advice you can actually use.",
  path: "/latest-news",
});

export default function LatestNewsPage() {
  return (
    <>
      <section className="tt-hero">
        <div className="tt-wrap">
          <div id="w-node-d6233641-cea8-3d85-f5a7-b1b8540deb9a-a2cd874e" className="tt-eyebrow">Latest News</div>
          <h1 id="w-node-d6233641-cea8-3d85-f5a7-b1b8540deba1-a2cd874e" className="tt-hero-title"><span className="tt-hw tt-hw-w">What have</span><span className="tt-hw tt-hw-g">We Been</span><span className="tt-hw tt-hw-t">Doing In</span><span className="text-span-65">North Yorkshrie</span></h1>
          <p id="w-node-d6233641-cea8-3d85-f5a7-b1b8540deba3-a2cd874e" className="tt-hero-sub">Read about our latest shenanigans in York and North Yorkshire. We train small business owners as part of larger training days and on an individual basis</p>
          <div id="w-node-_1e16198f-97ec-a0dc-1253-5f45b64037cb-a2cd874e" className="tt-hero-visual"><img src="/images/news-web-design.png" alt="JWD illustrated computer" sizes="(max-width: 2048px) 100vw, 2048px" srcSet="/images/news-web-design-p-500.png 500w, /images/news-web-design-p-800.png 800w, /images/news-web-design-p-1080.png 1080w, /images/news-web-design-p-1600.png 1600w, /images/news-web-design-p-2000.png 2000w, /images/news-web-design.png 2048w" className="tt-computer" /></div>
        </div>
      </section>
      <section className="section-2">
        <div className="tt-wrap">
          <h2 className="tt-sec-title">Latest <span className="tt-hl-g">posts</span></h2>
          <div className="div-block-15">
            <div className="tt-blog-card">
              <div className="tt-blog-thumb"><img src="/images/project-mirian.webp" loading="lazy" sizes="(max-width: 1366px) 100vw, 1366px" srcSet="/images/project-mirian-p-500.webp 500w, /images/project-mirian-p-800.webp 800w, /images/project-mirian-p-1080.webp 1080w, /images/project-mirian.webp 1366w" alt="" className="image-16" /></div>
              <div className="tt-blog-body">
                <div className="div-block-17">
                  <div className="tt-blog-date">Mon 28th Sep &#x27;26</div>
                  <div className="tt-blog-meta">Behind the scenes</div>
                </div>
                <h3 className="tt-blog-title">Mirian: Building a Debt Tracker for the Worst Day</h3>
                <p className="tt-blog-excerpt">Mirian is my own app under Sael North — a calm, shame-free debt tracker for neurodivergent people, designed for your worst day, not your best. Here&#x27;s how it came about, and what that thinking means for your website too.</p>
                <Link href="/news/mirian-building-a-debt-tracker-for-the-worst-day" className="tt-blog-footer"><span>Read more →</span></Link>
              </div>
            </div>
            <div className="tt-blog-card">
              <div className="tt-blog-thumb"><img src="/images/client-portal-cover.png" loading="lazy" alt="" className="image-16" /></div>
              <div className="tt-blog-body">
                <div className="div-block-17">
                  <div className="tt-blog-date">Sat 12th Sep &#x27;26</div>
                  <div className="tt-blog-meta">Behind the scenes</div>
                </div>
                <h3 className="tt-blog-title">Why I Built My Own Client Portal</h3>
                <p className="tt-blog-excerpt">For years my client projects lived across four tools, a busy inbox and a worrying amount of my own memory. So I built the JWD Client Portal — one calm place for every project. Here&#x27;s why, and what it means for you.</p>
                <Link href="/news/why-i-built-my-own-client-portal" className="tt-blog-footer"><span>Read more →</span></Link>
              </div>
            </div>
            <div className="tt-blog-card">
              <div className="tt-blog-thumb"><img src="/images/IMG_0045.webp" loading="lazy" sizes="(max-width: 5719px) 100vw, 5719px" srcSet="/images/IMG_0045-p-500.webp 500w, /images/IMG_0045-p-800.webp 800w, /images/IMG_0045-p-1080.webp 1080w, /images/IMG_0045-p-1600.webp 1600w, /images/IMG_0045-p-2000.webp 2000w, /images/IMG_0045-p-2600.webp 2600w, /images/IMG_0045-p-3200.webp 3200w, /images/IMG_0045.webp 5719w" alt="" className="image-16" /></div>
              <div className="tt-blog-body">
                <div className="div-block-17">
                  <div className="tt-blog-date">Tues 7th Jul &#x27;26</div>
                  <div className="tt-blog-meta">Training Day</div>
                </div>
                <h3 className="tt-blog-title">LX Foundry Experience Day</h3>
                <p className="tt-blog-excerpt">Recently, I was part of a small team who delivered some training to course providers, along with Enterprise Cube, Notch Media and Hello Technology at Patch in York</p>
                <Link href="/news/lx-foundry-experience-day-patch-york" className="tt-blog-footer"><span>Read more →</span></Link>
              </div>
            </div>
            <div className="tt-blog-card">
              <div className="tt-blog-thumb"><img src="/images/webflow-logo.svg" loading="lazy" alt="" className="image-16" /></div>
              <div className="tt-blog-body">
                <div className="div-block-17">
                  <div className="tt-blog-date">Tues 28th Jul &#x27;26</div>
                  <div className="tt-blog-meta">Platform Updates</div>
                </div>
                <h3 className="tt-blog-title">Webflow&#x27;s Editor is Changing</h3>
                <p className="tt-blog-excerpt">On August 4th, Webflow is retiring its old Editor in favour of a new roles and seats system. Your site won&#x27;t break, and for most teams this actually means better access and clearer permissions. Here&#x27;s what you need to know.</p>
                <Link href="/news/webflow-editor-changes" className="tt-blog-footer"><span>Read more →</span></Link>
              </div>
            </div>
          </div>
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
