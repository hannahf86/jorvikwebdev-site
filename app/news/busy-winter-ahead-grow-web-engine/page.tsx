/* =============================================================================
   PAGE: Busy winter ahead — Get Set GROW, the Web Engine webcast and more
         (route: /news/busy-winter-ahead-grow-web-engine)
   News/events post (dated 27 Nov 2026). Same structure as the other articles:
   hero + intro, numbered sections 01–04, a closing CTA, newsletter + final CTA.
   Uses the shared article styling.
   NOTE: the hero/cover image (york-minster-cathedral-view.webp) is a placeholder
   — swap in a GROW / event image when available.
   ============================================================================= */

import "@/styles/vendor/pages/news__webflow-editor-changes.css";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";

export const metadata = pageMetadata({
  title: "Busy Winter Ahead: GROW, the Web Engine Webcast & More | Jorvik Web Dev",
  description:
    "Where to find me this winter — the Get Set GROW launch, the Web Engine webcast, the GROW voucher scheme for website help, and Productivity through Digital Adoption days across North Yorkshire.",
  path: "/news/busy-winter-ahead-grow-web-engine",
  ogImage: "/images/york-minster-cathedral-view.webp",
});

const CALENDLY = "https://calendly.com/hannah-jwd/30min";
const GROW_LAUNCH = "https://ynygrowthhub.com/event/getsetgrow/";
const WEB_ENGINE = "https://ynygrowthhub.com/event/webinar-website-development-grow-voucher-scheme/";
const GROW_VOUCHER = "https://ynygrowthhub.com/blog/news/pre-register-for-grow-voucher-scheme/";

export default function BusyWinterPostPage() {
  return (
    <>
      {/* --- Hero + intro --- */}
      <section className="tt-hero">
        <div className="tt-wrap">
          <div className="tt-eyebrow">Events</div>
          <h1 className="tt-hero-title">
            <span className="tt-hw tt-hw-w">A busy</span>
            <span className="tt-hw tt-hw-g">winter</span>
            <span className="tt-hw tt-hw-t">ahead</span>
          </h1>
          <p className="tt-hero-sub">
            I&#x27;m going to be out and about a LOT this winter, and I couldn&#x27;t be more excited about it.
            <br /><br />
            The York and North Yorkshire Growth Hub has just launched GROW, a brand new programme of free support for local businesses. Enterprise Cube is the website development provider, and I&#x27;m part of the team delivering it. So if you&#x27;ve been meaning to sort your website out &quot;one of these days&quot;, this is your sign. Here&#x27;s where you can find me.
          </p>
          <div className="tt-hero-visual">
            <img
              src="/images/york-minster-cathedral-view.webp"
              alt="York, home of the York and North Yorkshire Growth Hub"
              className="tt-computer"
            />
          </div>
        </div>
      </section>

      {/* --- 01 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">01</div>
          <h2 className="sec-title">Get Set GROW <span className="text-span-71">launch</span></h2>
          <p className="sec-intro"><strong>Wednesday 2 December, 10am–3:30pm (coffee and networking from 9:30).</strong></p>
          <p className="sec-intro">
            First up is the big launch at York Hospitium in Museum Gardens.
          </p>
          <p className="sec-intro">Six expert providers will each give a short talk on their area:</p>
          <ul className="post-list">
            <li>AI</li>
            <li>digital tools for sales</li>
            <li>website development</li>
            <li>HR</li>
            <li>data protection and cyber security</li>
            <li>financial management</li>
          </ul>
          <p className="sec-intro">After that there&#x27;s an expert panel, and plenty of time to chat to people.</p>
          <p className="sec-intro">
            I&#x27;ll be on the Enterprise Cube table at the marketplace, over lunch and again in the afternoon. Come and say hello! Bring your website questions, your website woes, or just your curiosity. I promise I won&#x27;t judge your homepage (much).
          </p>
          <p className="sec-intro">
            👉{" "}
            <a target="_blank" rel="noopener noreferrer" href={GROW_LAUNCH} className="link-6">Book your free place at the Get Set GROW launch</a>
          </p>
        </div>
      </section>

      {/* --- 02 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">02</div>
          <h2 className="sec-title">Web Engine: Driving Your Business <span className="text-span-71">Online</span></h2>
          <p className="sec-intro"><strong>Tuesday 8 December, 10am.</strong></p>
          <p className="sec-intro">
            This one I&#x27;m really looking forward to. Richard and Laura from Enterprise Cube are hosting a live webcast, part tutorial and part podcast, and I&#x27;m one of the guests alongside Jack Barber from Hello Technology.
          </p>
          <p className="sec-intro">We&#x27;ll be getting into:</p>
          <ul className="post-list">
            <li>what actually matters in web design today</li>
            <li>things your website could be doing but probably isn&#x27;t</li>
            <li>how to drive traffic to your site</li>
            <li>how to rank higher in searches and show up in AI chats</li>
            <li>how to check how well your website is performing</li>
            <li>how to turn more of those visitors into enquiries and sales</li>
          </ul>
          <p className="sec-intro">
            My bit is all about the visitor. I&#x27;ll be talking about user experience, getting people to take action once they land on your site, and making sure your site works for everyone, on any device. Expect practical tips, a few pet peeves (I have many), and things you can go and check that same afternoon.
          </p>
          <p className="sec-intro">The best part? You can ask us questions live and get real answers there and then.</p>
          <p className="sec-intro">
            <strong>Key takeaway:</strong> Can&#x27;t make it on the day? Register anyway and you&#x27;ll get the recording of the tutorials and podcast sent to you.
          </p>
          <p className="sec-intro">
            👉{" "}
            <a target="_blank" rel="noopener noreferrer" href={WEB_ENGINE} className="link-6">Register for the Web Engine webcast</a>
          </p>
        </div>
      </section>

      {/* --- 03 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">03</div>
          <h2 className="sec-title">The GROW <span className="text-span-71">voucher scheme</span></h2>
          <p className="sec-intro"><strong>Applications 4 December to 4 January.</strong></p>
          <p className="sec-intro">
            This is the bit that gets me most excited. GROW includes a voucher scheme for one-to-one support, so eligible businesses can get expert help on the thing that&#x27;s holding them back.
          </p>
          <p className="sec-intro">For websites, that could be things like:</p>
          <ul className="post-list">
            <li>a UX and conversion review to find out why visitors aren&#x27;t getting in touch</li>
            <li>an SEO review and fixes</li>
            <li>an accessibility check</li>
            <li>adding online booking or ecommerce</li>
            <li>connecting your site to your email newsletter or CRM</li>
          </ul>
          <p className="sec-intro">These are small, focused projects with results you can actually see.</p>
          <p className="sec-intro">
            The application window opens on 4 December and closes on 4 January, so don&#x27;t let it disappear under the Christmas wrapping paper. You can register your interest now.
          </p>
          <p className="sec-intro">
            <strong>Key takeaway:</strong> Not sure whether your project would fit? Come and find me at the launch on 2 December, or get in touch, and we&#x27;ll talk it through.
          </p>
          <p className="sec-intro">
            👉{" "}
            <a target="_blank" rel="noopener noreferrer" href={GROW_VOUCHER} className="link-6">Find out more about the GROW voucher scheme</a>
          </p>
        </div>
      </section>

      {/* --- 04 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">04</div>
          <h2 className="sec-title">Coming in 2027: Productivity through <span className="text-span-71">Digital Adoption</span></h2>
          <p className="sec-intro">
            The new year is already filling up too! In February and March I&#x27;ll be joining Enterprise Cube and Jack Barber for a series of in-person Productivity through Digital Adoption days across the region:
          </p>
          <ul className="post-list">
            <li><strong>Scarborough:</strong> 16 and 23 February (venue to be confirmed)</li>
            <li><strong>Northallerton:</strong> 17 and 24 February, at Evolution Business Centre</li>
            <li><strong>York:</strong> 10 and 17 March, at Patch</li>
          </ul>
          <p className="sec-intro">
            More details on these soon, so keep an eye on my news page or sign up to my newsletter below.
          </p>
        </div>
      </section>

      {/* --- Closing (highlighted) --- */}
      <section className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">See you out there!</div>
              <h2 className="blog-title"><strong>Come and find me this winter</strong></h2>
              <div>
                <div className="blog-sub-text">
                  Honestly, I love this stuff. Helping local businesses get more from their websites is my favourite part of the job, and doing it alongside such a brilliant bunch of people makes it even better.
                  <br /><br />
                  Whether you come to the launch, tune in to the webcast or apply for a voucher, I&#x27;d love to see you there.
                  <br /><br />
                  Got questions in the meantime?{" "}
                  <a target="_blank" rel="noopener noreferrer" href={CALENDLY} className="link-6">Get in touch</a>{" "}
                  and we&#x27;ll sort something out.
                </div>
              </div>
              <div className="tt-cta-row">
                <a target="_blank" rel="noopener noreferrer" href={GROW_LAUNCH} className="tt-cta-btn">Book the Get Set GROW launch →</a>
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
            <p className="tt-cta-sub">Can&#x27;t wait for an event? If your website needs sorting now, let&#x27;s have a chat and get it moving.</p>
            <div className="tt-cta-row">
              <a target="_blank" rel="noopener noreferrer" href={CALENDLY} className="tt-cta-btn">Book a free chat →</a>
              <Link href="/resources" className="tt-cta-btn tt-cta-btn-ghost">Grab a free resource</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
