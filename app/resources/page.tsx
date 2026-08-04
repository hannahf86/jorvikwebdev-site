import "@/styles/vendor/pages/resources.css";

/* ===== PAGE: Resources (/resources) — port of resources.html ===== */

import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";

export const metadata = pageMetadata({
  title: "Free Resources for Small Business Owners | Jorvik Web Dev",
  description:
    "Free templates, guides and tools from Jorvik Web Dev to help your website work harder. No sign-up required.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <section className="res-hero">
        <div className="res-wrap">
          <div id="w-node-c15c81ef-e192-88ef-86dc-3701f5896667-b17a5a36" className="res-eyebrow">Free resources</div>
          <h1 id="w-node-c15c81ef-e192-88ef-86dc-3701f589666e-b17a5a36" className="res-hero-title"><span className="res-hw res-hw-w">Stuff that</span><span className="res-hw res-hw-g">actually</span><span className="res-hw res-hw-t">helps.</span></h1>
          <p id="w-node-c15c81ef-e192-88ef-86dc-3701f5896670-b17a5a36" className="res-hero-sub">No email required. No &quot;just subscribe first&quot;. No drip campaign you&#x27;ll regret. Just genuinely useful resources from someone who&#x27;s spent years doing this and wants you to benefit from it.</p>
          <div id="w-node-c15c81ef-e192-88ef-86dc-3701f589667a-b17a5a36" className="res-trust">
            <div className="res-trust-item"><span className="res-trust-dot"></span>Free, forever</div>
            <div className="res-trust-item"><span className="res-trust-dot"></span>No sign-up required</div>
            <div className="res-trust-item"><span className="res-trust-dot"></span>Because we like to help</div>
          </div>
          <div id="w-node-_9e5c8604-e514-c9e3-5acf-7a40b0434fb8-b17a5a36" className="res-hero-visual"><img src="/images/JWD---Computer.png" alt="JWD checklist clipboard illustration" sizes="(max-width: 2000px) 100vw, 2000px" srcSet="/images/JWD---Computer-p-500.png 500w, /images/JWD---Computer-p-800.png 800w, /images/JWD---Computer-p-1080.png 1080w, /images/JWD---Computer-p-1600.png 1600w, /images/JWD---Computer.png 2000w" className="res-clipboard" /></div>
        </div>
      </section>
      <section className="res-sec">
        <div className="res-wrap">
          <div className="res-eyebrow">Download for free</div>
          <h2 id="w-node-_333bcf05-6336-7562-ed83-0511159dab13-b17a5a36" className="res-sec-title">Tools that save you <span className="res-hl-t">actual time</span></h2>
          <p id="w-node-_333bcf05-6336-7562-ed83-0511159dab15-b17a5a36" className="res-intro">Spreadsheets and workbooks I built because I needed them and couldn&#x27;t find a decent version anywhere. You&#x27;re welcome.</p>
          <div id="w-node-_333bcf05-6336-7562-ed83-0511159dab5a-b17a5a36" className="res-grid">
            <div id="w-node-_333bcf05-6336-7562-ed83-0511159dab36-b17a5a36" className="res-card">
              <div className="res-header">
                <div className="res-card-tag">PDF Workbook</div><img src="/images/workbook.svg" loading="lazy" alt="" className="workbook-icon" />
              </div>
              <h3 className="res-card-title">Website workbook</h3>
              <p className="res-card-desc">The whole web design process, from &quot;I have an idea&quot; to &quot;it&#x27;s live and Google can find it&quot;, written for humans, not developers. Covers UX laws, SEO foundations, content planning, and the decisions most people make too late.</p>
              <ul role="list" className="res-card-includes">
                <li className="res-card-li"><span className="res-card-tick">✓</span>Full web design process, start to finish</li>
                <li className="res-card-li"><span className="res-card-tick">✓</span>UX laws explained without the PhD</li>
                <li className="res-card-li"><span className="res-card-tick">✓</span>SEO basics you can actually action today</li>
                <li className="res-card-li"><span className="res-card-tick">✓</span>Content planning templates &amp; prompts</li>
                <li className="res-card-li"><span className="res-card-tick">✓</span>Decision checklists for every stage</li>
              </ul>
              <a target="_blank" rel="noopener noreferrer" href="documents/Webinar-Workbook.pdf" className="res-btn-dl res-btn-dl-g">Download free PDF ↓</a>
            </div>
            <div id="w-node-_333bcf05-6336-7562-ed83-0511159dab59-b17a5a36" className="res-card">
              <div className="res-header">
                <div className="res-card-tag">PDF Workbook</div><img src="/images/workbook.svg" loading="lazy" alt="" className="workbook-icon" />
              </div>
              <h3 className="res-card-title">KPI tracker</h3>
              <p className="res-card-desc">Stop guessing whether your website is working. This tracker helps you set the right metrics, monitor them without losing your mind, and spot the patterns that actually tell you something useful. Customisable sheets included, no formulas broken by accident.</p>
              <ul role="list" className="res-card-includes">
                <li className="res-card-li"><span className="res-card-tick res-card-tick-t">✓</span>Pre-built KPI sheets for small businesses</li>
                <li className="res-card-li"><span className="res-card-tick res-card-tick-t">✓</span>Customisable categories &amp; metrics</li>
                <li className="res-card-li"><span className="res-card-tick res-card-tick-t">✓</span>Monthly &amp; quarterly views</li>
                <li className="res-card-li"><span className="res-card-tick res-card-tick-t">✓</span>Works in Google Sheets &amp; Excel</li>
                <li className="res-card-li"><span className="res-card-tick res-card-tick-t">✓</span>Notes column so you remember why the spike happened</li>
              </ul>
              <a target="_blank" rel="noopener noreferrer" href="documents/KPI-Tracker.pdf" className="res-btn-dl">Download free PDF ↓</a>
            </div>
            <div id="w-node-_53848c25-616d-5773-7347-3da2926e95be-b17a5a36" className="res-card">
              <div className="res-header">
                <div className="res-card-notion-tag">Notion Template</div><img src="/images/template.svg" loading="lazy" alt="" className="workbook-icon" />
              </div>
              <h3 className="res-card-title">Website Content Hub</h3>
              <p className="res-card-desc">The fill-in-the-blanks workbook that stops you from staring at a blank page when it&#x27;s time to write your website.No more &quot;I&#x27;ll do the content later&quot; — gather your brand bits, map out your pages, and know exactly what to say before you build (or before you hire someone like me).</p>
              <ul role="list" className="res-card-includes">
                <li className="res-card-li"><span className="res-card-tick">✓</span>Dashboard for your keywords, colours, logins and brand assets</li>
                <li className="res-card-li"><span className="res-card-tick">✓</span>Image dump sections so photos don&#x27;t end up scattered</li>
                <li className="res-card-li"><span className="res-card-tick">✓</span>Homepage, About, Services &amp; Contact templates with prompts</li>
                <li className="res-card-li"><span className="res-card-tick">✓</span>Checklists to tick off before you go live</li>
              </ul>
              <a target="_blank" rel="noopener noreferrer" href="https://elegant-spleen-6f2.notion.site/Website-Content-Hub-38f83ce7bf638013bbcecc456072e477?source=copy_link" className="res-btn-dl res-btn-dl-g">Free Notion Template &gt;</a>
              <p className="res-card-cta">Prefer to hand write these things? Download the PDF version <a href="documents/Website-Content-Prep-Workbook-by-Jorvik-Web-Dev---Google-Docs.pdf">here</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="tt-sec">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
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
      <section className="res-cta">
        <div className="cta-wrap">
          <div className="res-cta-inner">
            <h2 className="res-cta-title">Want something <span className="res-hl-g">built properly?</span></h2>
            <p className="res-cta-sub">The workbook tells you what to do. We can do it for you. Free chat, no pressure, genuinely useful even if you don&#x27;t hire us.</p>
            <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/hannah-jwd/30min" className="res-cta-btn">Book a free chat →</a>
          </div>
        </div>
      </section>
    </>
  );
}
