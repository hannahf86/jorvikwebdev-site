import "@/styles/vendor/pages/find-my-web-design-service.css";

/* ===== PAGE: Find my web design service (/find-my-web-design-service) — port of find-my-web-design-service.html ===== */

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Find my web design service | Jorvik Web Dev",
  description:
    "Not sure which web design service you need? Answer a few quick questions and we'll point you to the right fit — website, SEO, UX, hosting, training or maintenance.",
  path: "/find-my-web-design-service",
});

export default function FindMyWebDesignServicePage() {
  return (
    <>
      <section className="fms-hero">
        <div className="tt-wrap">
          <div id="w-node-_0bb0fe83-912f-dd65-3858-a028a1abd5b0-0f36746b" className="tt-eyebrow">Tips &amp; Tricks</div>
          <h1 id="w-node-_0bb0fe83-912f-dd65-3858-a028a1abd5b4-0f36746b" className="tt-hero-title"><span className="tt-hw tt-hw-w">Plain English</span><span className="tt-hw tt-hw-g">advice for</span><span className="tt-hw tt-hw-t">real </span><span className="text-span-65">businesses.</span></h1>
          <p id="w-node-_0bb0fe83-912f-dd65-3858-a028a1abd5bd-0f36746b" className="tt-hero-sub">No &quot;leverage synergies&quot;. No &quot;disruptive paradigm shifts&quot;. Just straightforward answers to the questions small business owners actually ask — usually at 11pm on a Sunday.</p>
          <div id="w-node-_0bb0fe83-912f-dd65-3858-a028a1abd5bf-0f36746b" className="tt-cats">
            <a href="#" className="tt-cat tt-cat-all">All posts</a>
            <a href="#" className="tt-cat tt-cat-web">Web design</a>
            <a href="#" className="tt-cat tt-cat-seo">SEO</a>
            <a href="#" className="tt-cat tt-cat-ux">UX</a>
            <a href="#" className="tt-cat tt-cat-biz">Business</a>
          </div>
          <div id="w-node-_0bb0fe83-912f-dd65-3858-a028a1abd5ca-0f36746b" className="tt-hero-visual"><img src="/images/JWD---Tips.svg" alt="JWD illustrated computer" className="tt-computer" /></div>
        </div>
      </section>
      <section id="services" className="quiz">
        <div className="wrap">
          <div className="eyebrow">Find Your Service</div>
        </div>
        <div className="jwd-quiz-wrap">
          <div className="jwd-progress-bar">
            <div id="jwd-pfill" className="jwd-progress-fill"></div>
          </div>
          <div id="jwd-qbody"></div>
        </div>
      </section>
    </>
  );
}
