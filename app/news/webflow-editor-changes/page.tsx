/* =============================================================================
   PAGE: Webflow Editor Changes  (route: /news/webflow-editor-changes)
   Faithful port of news/webflow-editor-changes.html. Main content only — the
   shared layout supplies the navbar and footer. The MailerLite newsletter band
   is replaced with the shared <NewsletterCta />.
   ============================================================================= */

import "@/styles/vendor/pages/news__webflow-editor-changes.css";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";

export const metadata = pageMetadata({
  title: "Webflow Editor Changes | Jorvik Web Dev",
  description:
    "What the latest Webflow Editor changes mean for you and how you manage your website.",
  path: "/news/webflow-editor-changes",
});

// The source authored this "book a call" href with an entire article paragraph
// pasted into it (a clear content error). Pointed at the Calendly booking link,
// matching every other "Book a call" CTA on the site.
const BOOK_A_CALL_HREF = "https://calendly.com/hannah-jwd/30min";

export default function WebflowEditorChangesPage() {
  return (
    <>
      <section className="tt-hero">
        <div className="tt-wrap">
          <div id="w-node-f5e4af8a-15f2-8948-82c0-fbf709dec889-948aa495" className="tt-eyebrow">News</div>
          <h1 id="w-node-f5e4af8a-15f2-8948-82c0-fbf709dec88d-948aa495" className="tt-hero-title"><span className="tt-hw tt-hw-w">Webflow&#x27;s</span><span className="tt-hw tt-hw-g">Editor</span><span className="tt-hw tt-hw-t">Changing </span></h1>
          <p id="w-node-f5e4af8a-15f2-8948-82c0-fbf709dec896-948aa495" className="tt-hero-sub">If your website is built on Webflow, you&#x27;ve probably received an email recently about &quot;legacy Editor deprecation,&quot; &quot;client seats,&quot; and something happening on August 4th. If your eyes glazed over at that sentence, you&#x27;re not alone. Platform update emails are usually written for developers, not for the people who actually run the businesses on those websites.</p>
          <div id="w-node-f5e4af8a-15f2-8948-82c0-fbf709dec898-948aa495" className="tt-hero-visual"><img src="/images/webflow-logo.svg" alt="JWD illustrated computer" className="tt-computer" /></div>
        </div>
      </section>
      <section id="services" className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">What&#x27;s Happening?</div>
          <h2 className="sec-title">What is actually <span className="text-span-71">Changing?</span></h2>
          <p className="sec-intro">Since roughly 2014, Webflow had a separate, simplified editing screen called the Editor. If you&#x27;ve ever logged into your site to tweak some text or swap out a photo, you&#x27;ve probably used it. <br /><br />It was basic, a bit clunky, but it <span className="text-span-111">did the job</span>: you couldn&#x27;t accidentally delete your entire website because the safeguards were robust.<br /><br />On 4th August 2026, that Editor is being switched off.<br /><br />In its place, Webflow is moving everyone to a system of <strong>roles and seats</strong> inside the main Designer dashboard. Instead of one generic &quot;Editor&quot; login, your team members will be invited as specific user types:<br />- <strong>Content Editor</strong> - Can update text, images, and CMS content (blog posts, portfolio items, etc.)<br />- <strong>Marketer</strong> - Can do everything a Content Editor does, plus build new pages using approved templates and components<br />- <strong>Reviewer</strong> - Can view the site and leave comments, but can&#x27;t change anything<br /><br />Your web designer or developer (that&#x27;s me) sits at the top with Owner or Admin permissions, and everyone else gets a role that matches what they actually need to do.</p>
        </div>
      </section>
      <section className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">Sooooo....?</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>What does this </strong></span><span className="text-span-69"><strong className="bold-text-16">actually mean</strong></span><strong> for your site and how you interact with it?</strong></h2>
              <div>
                <div className="blog-sub-text">Look, I&#x27;ll be straight with you. The old Editor had one massive flaw: <span className="text-span-112">it treated everyone the same</span>. <br /><br />Whether you were a director who just needed to approve a page, a marketing manager who needed to publish weekly blogs, or an intern updating event listings - you all got the same login and the same limited capabilities.<br /><br />For small sites with one person doing updates, that was fine. But for larger client teams? It was a nightmare.<br /><br />I can&#x27;t count the number of times I&#x27;ve had clients say something like: &quot;Our marketing assistant needs to publish blogs, but our Managing Director also wants to review them before they go live, and our events coordinator needs to update the What&#x27;s On section. Can we give them all different access?&quot;<br /><br />Under the old system, the answer was basically no. Everyone got the same key, and it either opened the door or it didn&#x27;t.<br /><br />The new roles fix this properly. Your social media manager can draft and publish blog posts. Your director can review and comment without fear of accidentally breaking the navigation. Your sales manager can update case studies. Everyone gets the right level of access, and - crucially - nobody can accidentally delete your CSS or rearrange your page structure because the permissions actually mean something now.If you have a larger team, or you plan to grow, this is a genuine improvement. <br /><br />Roles allow for flexibility and proper workflow in a way the old Editor simply never could.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">So far so good.... right?</div>
          <h2 className="sec-title">The <span className="text-span-71">Elephant </span>in the room</h2>
          <p className="sec-intro">OK, so here&#x27;s the part where I tell you what I really think.<br /><br />Is this change partly about Webflow making money? Yes. Of course it is. The old Editor was essentially free and separate from Webflow&#x27;s paid seat structure. <br /><br />Now, ongoing client access sits inside their broader workspace pricing. For some smaller businesses that only had one person occasionally updating a phone number, this means the landscape has shifted.<br /><br />But - and this is important - if you already had Editor access before May 2026, Webflow is migrating you to a free client seat or limited seat automatically. You shouldn&#x27;t see a sudden bill on August 5th. <br /><br />The pain is mostly for new setups and agencies managing multiple clients, not for existing website owners.<br /><br />As a Webflow Partner, I see the backend benefits of this daily. The collaboration tools are better. The security is tighter. The permission system actually makes sense. And from my perspective as someone who has to clean up the mess when clients accidentally break things, having proper role boundaries is a genuine relief.<br /><br />Could Webflow have handled the communication better? Absolutely. <br /><br />These emails have sent a lot of my clients into a mild panic because they sound like something is being taken away. In reality, for most of you, very little changes day-to-day.</p>
        </div>
      </section>
      <section id="ux-laws" className="sec-pain">
        <div className="wrap">
          <div className="eyebrow">Reality Check</div>
          <h2 className="sec-title">What this really means for you, <span className="text-span-106">Practically</span></h2>
          <p className="sec-intro">Let me break this down by the three main types of clients I have:</p>
          <div className="pain-grid-wide">
            <div className="pain-card">
              <div>
                <h3 className="card-no-01">#01</h3>
              </div>
              <h3 className="card-h"><strong>&quot;I never touch my website - Hannah does everything&quot;</strong></h3>
              <p className="card-p"><strong className="bold-text-2">Nothing changes. I already have the access I need. You don&#x27;t need to do anything, learn anything, or pay anything extra. Your site will keep working exactly as it does now.</strong></p>
            </div>
            <div className="pain-card">
              <div>
                <h3 className="card-no-02">#02</h3>
              </div>
              <h3 className="card-h"><strong>&quot;I log in occasionally to update a blog post or change some text&quot;</strong></h3>
              <p className="card-p"><strong className="bold-text-3">You&#x27;ll be migrated to a Content Editor role automatically. The screen will look a bit different, but the buttons you press to edit text and swap images will be in basically the same places. I&#x27;ll send you a quick walkthrough if you need it.</strong></p>
            </div>
            <div className="pain-card">
              <div>
                <h3 className="card-no-03">#03</h3>
              </div>
              <h3 className="card-h"><strong>&quot;I have a team - marketing, sales, operations - who all need different access&quot;</strong></h3>
              <p className="card-p"><strong className="bold-text-9">This is where the change actually helps you. We can set up proper roles for everyone. Your marketing person gets Marketer access. Your operations manager gets Content Editor access. Your CEO gets Reviewer access so they can approve things without accidentally breaking anything. It&#x27;s actually more flexible than what you had before.</strong></p>
            </div>
            <div className="pain-card">
              <div>
                <h3 className="card-no-04">#04</h3>
              </div>
              <h3 className="card-h"><strong>&quot;I&#x27;m about to start a new project or rebuild&quot;</strong></h3>
              <p className="card-p"><strong className="bold-text-9">This affects how I set up your site and your team. The good news is that modern Webflow builds are designed with these roles in mind from day one, so your workflow will be cleaner than it would have been two years ago.</strong></p>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">Sooooo....?</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>What </strong></span><span className="text-span-69"><strong className="bold-text-16">happens</strong></span><strong> next?</strong></h2>
              <div>
                <div className="blog-sub-text">I&#x27;m handling the transition for all JWD clients. Over the next week, if you&#x27;re someone who edits your own site, you&#x27;ll get an individual email from me with:<br />- Your new login details<br />- A quick screenshot walkthrough of where everything lives now<br />- My phone number if you get stuck and need me to talk you through it<br /><br />If you never log in, you won&#x27;t get anything except this reassurance: <br /><span className="text-span-113">your site is fine, I&#x27;m on top of it, and you don&#x27;t need to worry.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">My honest take</div>
          <h2 className="sec-title">This is definitely <span className="text-span-71">Better! </span></h2>
          <p className="sec-intro">I don&#x27;t love platform changes that make small business owners feel anxious. Your website should be a tool that helps you, not another subscription to stress about. <br /><br />But I also don&#x27;t miss the old Editor. <br /><br />It was limiting, frustrating for teams, and caused more support headaches than it was worth.If Webflow had called this &quot;Editor Pro with Team Roles,&quot; everyone would be cheering. The fact that it feels like a removal rather than an upgrade is a communication failure, not a product failure.<br /><br />For my clients with larger teams - especially enterprises, charities with multiple content contributors, or growing businesses with marketing departments - this change genuinely makes your life easier. <br /><br />For my smaller clients, it&#x27;s mostly neutral. <br /><br />And for everyone, I&#x27;m here to make sure the transition is painless.Because at the end of the day, my job isn&#x27;t to defend Webflow&#x27;s business decisions. <br /><br />My job is to make sure your website keeps working for your business without you having to think about the platform politics.If you&#x27;ve got questions about your specific setup, or you&#x27;re worried about access for your team, just <a target="_blank" rel="noopener noreferrer" href={BOOK_A_CALL_HREF} className="link-6">book a call</a>. I&#x27;ll give you a straight answer.</p>
        </div>
      </section>
      <NewsletterCta />
      <section className="tt-cta">
        <div className="tt-wrap">
          <div className="tt-cta-inner">
            <h2 className="tt-cta-title">Want someone to just <span className="tt-cta-hl">do it for you?</span></h2>
            <p className="tt-cta-sub">Reading about UX design and SEO is one thing. Having it sorted while you focus on running your business is another. That&#x27;s what we&#x27;re here for.</p>
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
