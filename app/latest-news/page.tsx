import "@/styles/vendor/pages/latest-news.css";

/* ===== PAGE: Latest News (/latest-news) — port of latest-news.html,
   with a client-side search + category filter (see NewsFeed). ===== */

import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";
import { NewsFeed } from "@/components/sections/news/NewsFeed";
import { NEWS_POSTS } from "@/lib/news";

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
          <NewsFeed posts={NEWS_POSTS} />
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
