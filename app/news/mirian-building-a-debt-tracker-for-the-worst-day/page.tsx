/* =============================================================================
   PAGE: Mirian — building a debt tracker for the worst day
         (route: /news/mirian-building-a-debt-tracker-for-the-worst-day)
   Blog post (dated 28 Sep 2026). Kept in the author's original structure:
   intro, numbered sections 01–07, a "Want to help shape it?" CTA, and a source
   citation. Uses the shared article styling.
   NOTE: the Mirian beta signup link is a placeholder (MIRIAN_BETA_URL) — swap in
   the real URL when available.
   ============================================================================= */

import "@/styles/vendor/pages/news__webflow-editor-changes.css";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";

export const metadata = pageMetadata({
  title: "Mirian: Building a Debt Tracker for the Worst Day | Jorvik Web Dev",
  description:
    "Why I built Mirian — a calm, shame-free debt tracker for neurodivergent people, designed for your worst day, not your best — and what that thinking means for your website.",
  path: "/news/mirian-building-a-debt-tracker-for-the-worst-day",
  ogImage: "/images/project-mirian.webp",
});

const MIRIAN_BETA_URL = "https://www.mirian-debt-tracker.app/";
const CALENDLY = "https://calendly.com/hannah-jwd/30min";

export default function MirianPostPage() {
  return (
    <>
      {/* --- Hero + intro --- */}
      <section className="tt-hero">
        <div className="tt-wrap">
          <div className="tt-eyebrow">Behind the scenes</div>
          <h1 className="tt-hero-title">
            <span className="tt-hw tt-hw-w">Mirian</span>
            <span className="tt-hw tt-hw-g">built for the</span>
            <span className="tt-hw tt-hw-t">worst day</span>
          </h1>
          <p className="tt-hero-sub">
            Most of what I build at Jorvik Web Dev is for clients. Mirian is different. It&#x27;s one of my own apps, made under Sael North, the name I use for the products I design and build myself. It&#x27;s a debt tracker for neurodivergent people, and it&#x27;s now in beta testing with real users.
            <br /><br />
            I want to tell you how it came about. Partly because it&#x27;s the project I&#x27;m proudest of, and partly because the thinking behind it applies to almost every website and app out there, including yours.
          </p>
          <div className="tt-hero-visual">
            <img
              src="/images/project-mirian.webp"
              alt="The Mirian debt tracker app"
              sizes="(max-width: 1366px) 100vw, 1366px"
              srcSet="/images/project-mirian-p-500.webp 500w, /images/project-mirian-p-800.webp 800w, /images/project-mirian-p-1080.webp 1080w, /images/project-mirian.webp 1366w"
              className="tt-computer"
            />
          </div>
        </div>
      </section>

      {/* --- 01 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">01</div>
          <h2 className="sec-title">Where it <span className="text-span-71">started</span></h2>
          <p className="sec-intro">Mirian didn&#x27;t start with market research. It started with me.</p>
          <p className="sec-intro">
            I&#x27;m AuDHD, which means autistic and ADHD, and like a lot of people with brains like mine, money admin has never been my strong point. Not because I don&#x27;t understand it. I understand it perfectly well. The trouble is executive function: the part of your brain that starts tasks, remembers dates and keeps you going when something feels uncomfortable. When money is tight, that part of the brain gets less reliable, not more, at exactly the moment you need it most.
          </p>
          <p className="sec-intro">
            So I went looking for a debt tracker that would help. What I found were apps built for people who already feel fine about their debt. Big red totals. Streaks you could break. Notifications that told me off. Everything assumed I was organised, calm and on top of things, and if I wasn&#x27;t, the app made sure I knew about it.
          </p>
          <p className="sec-intro">I didn&#x27;t need an app to tell me I was behind. I needed one I could bear to open.</p>
        </div>
      </section>

      {/* --- 02 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">02</div>
          <h2 className="sec-title">The gap isn&#x27;t awareness, it&#x27;s <span className="text-span-71">shame</span></h2>
          <p className="sec-intro">
            It turns out I&#x27;m not alone. In 2025, StepChange and Equifax published research on neurodivergent people with problem debt, and the numbers are stark:
          </p>
          <ul className="post-list">
            <li>97% said being neurodivergent made their debt harder to manage</li>
            <li>64% never asked their creditors for help</li>
            <li>Only 32% of those who reached debt advice told the service they were neurodivergent at all</li>
          </ul>
          <p className="sec-intro">
            The top reasons people gave for not asking for help were feeling overwhelmed (73%), anxiety (72%) and stigma (60%).
          </p>
          <p className="sec-intro">
            Read that again. People know they&#x27;re struggling. They know help exists. They go quiet anyway, because reaching out feels unbearable. The problem isn&#x27;t information. It&#x27;s shame.
          </p>
          <p className="sec-intro">
            For people with a PDA profile (pathological demand avoidance, or a persistent drive for autonomy, as many prefer to call it), there&#x27;s an extra layer. Demands themselves trigger anxiety. So the harder an app pushes &quot;pay now&quot;, the more likely it is to be ignored. A notification designed to motivate can end up making things worse.
          </p>
          <p className="sec-intro">
            That changed the whole brief. Mirian couldn&#x27;t just be a tidier spreadsheet. It had to lower the demand, not raise it.
          </p>
        </div>
      </section>

      {/* --- 03 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">03</div>
          <h2 className="sec-title">Designing for the <span className="text-span-71">worst day</span></h2>
          <p className="sec-intro">
            Every decision in Mirian started from one question: what does this app do on someone&#x27;s worst day?
          </p>
          <p className="sec-intro">
            Not the day you&#x27;ve just been paid and you&#x27;re feeling organised. The day you&#x27;ve missed a payment, you&#x27;ve got a letter you haven&#x27;t opened, and the last thing you want is to look at a number. If the app works on that day, it&#x27;ll work on the good ones too.
          </p>
          <p className="sec-intro">Here&#x27;s what that question led to.</p>
          <ul className="post-list">
            <li><strong>Payments aren&#x27;t just paid or unpaid.</strong> Almost every tracker I tried had a simple tick box. Paid, or not paid. But real life isn&#x27;t binary. Sometimes you pay late. Sometimes you pay less than you meant to. Sometimes you manage a bit extra. With a tick box, a part payment either looks like failure or doesn&#x27;t get logged at all. Mirian lets you record a payment as on time, late, short or overpaid, so an imperfect month still gets recorded honestly. You can add a note if you want to, but you never have to.</li>
            <li><strong>The app remembers so you don&#x27;t have to.</strong> Each debt has its own due date logged in the app. That sounds small, but for an ADHD brain, every date held in your head is a weight you&#x27;re carrying. Mirian carries it instead.</li>
            <li><strong>The goal moves towards you.</strong> Most debt apps put the amount you owe front and centre. It&#x27;s accurate, but it&#x27;s also a number that feels enormous and barely changes from week to week. Mirian puts a live &quot;debt free by&quot; date in its place. Every payment you log pulls that date a little closer. Research on ADHD motivation shows goals feel more achievable when you can see progress and reachable wins, and a date that moves is a win you can actually see. You can still see the total. It just doesn&#x27;t greet you every time you open the app.</li>
            <li><strong>Arrangements have a middle state.</strong> If you&#x27;ve ever set up a payment plan with a creditor, you&#x27;ll know it&#x27;s rarely a clean yes or no. Mirian tracks each arrangement as in place, needs setting up, or awaiting response. Most real debt sits somewhere in the middle, unresolved, and the app reflects that instead of pretending otherwise.</li>
            <li><strong>Creditor contacts live with the debt.</strong> There&#x27;s a field for each creditor&#x27;s email address, because when you finally feel ready to get in touch, the last thing you need is twenty minutes of digging to find out how.</li>
          </ul>
        </div>
      </section>

      {/* --- 04 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">04</div>
          <h2 className="sec-title">Nothing is allowed to <span className="text-span-71">punish</span></h2>
          <p className="sec-intro">
            The rule I was strictest about was simple: nothing in the interface is allowed to punish you.
          </p>
          <p className="sec-intro">
            That means no red. No streaks to break. No scolding copy when you log a late payment. Shame doesn&#x27;t get people to pay. It gets them to stop opening the app, and an app nobody opens can&#x27;t help anyone.
          </p>
          <p className="sec-intro">
            The look and feel came from the same thinking. Debt apps tend to use harsh contrast and alarm colours. Mirian uses jade green and peach, which feel calm and hopeful rather than urgent. Everything is set in Atkinson Hyperlegible, a typeface designed specifically to be easy to read, which matters when you&#x27;re stressed and your eyes are skimming. The logo is a leaf, a symbol of growth rather than debt.
          </p>
          <p className="sec-intro">
            Even the name was a design decision. &quot;Mirian&quot; is a word from Tolkien&#x27;s Sindarin, the Elvish language, for a coin used in Gondor. It comes from &quot;mîr&quot;, meaning jewel or precious thing. I liked the idea of money being framed as something precious rather than something to dread. I did play with giving every feature an Elvish name too, but I stopped myself. A stressed user shouldn&#x27;t have to learn a new vocabulary to find the debt tracker. So the name carries the character, and everything inside the app is in plain English.
          </p>
        </div>
      </section>

      {/* --- 05 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">05</div>
          <h2 className="sec-title">Building <span className="text-span-71">it</span></h2>
          <p className="sec-intro">
            I designed and built Mirian myself, from start to finish. Under the bonnet, it&#x27;s a web app built with Next.js, TypeScript and Tailwind, with Supabase for the database and NextAuth for logins. Financial information is about as personal as data gets, so each user&#x27;s data is locked down with row-level security, which means nobody can see anyone else&#x27;s records.
          </p>
          <p className="sec-intro">
            I also made a lot of decisions about what not to build. Gamification, AI-drafted emails to creditors and a login for support workers were all ideas I liked, and I parked all of them. None of them would matter if the basic job of logging a payment didn&#x27;t work on a hard day. Building on my own, with no outside funding, every feature had to earn its place. That turned out to be a really useful discipline.
          </p>
        </div>
      </section>

      {/* --- 06 — the lesson for you (highlighted) --- */}
      <section className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">06 — Why this is on a web design blog</div>
              <h2 className="blog-title"><strong>What this has to do with your website</strong></h2>
              <div>
                <div className="blog-sub-text">
                  You might be wondering why a debt app is on a web design blog. Here&#x27;s why.
                  <br /><br />
                  The question that shaped Mirian, &quot;what does this do on someone&#x27;s worst day?&quot;, works for almost anything you put online. What does your booking form do when someone makes a mistake? What does your website say to someone who&#x27;s anxious about getting in touch? Does your checkout scold people for a missing field, or help them fix it?
                  <br /><br />
                  Most of your customers aren&#x27;t having their worst day when they find you. But some of them are, and the ones who are will remember how you made them feel. Designing for them doesn&#x27;t make things worse for anyone else. It just makes everything a bit kinder and a lot clearer.
                  <br /><br />
                  That&#x27;s the same thinking I bring to every client project, whether it&#x27;s a five-page site for a local business or a full custom build.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 07 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">07</div>
          <h2 className="sec-title">What&#x27;s next for <span className="text-span-71">Mirian</span></h2>
          <p className="sec-intro">
            Mirian is in beta now, with real users logging real payments, and I&#x27;m learning a lot from them. Here&#x27;s what&#x27;s on the list.
          </p>
          <ul className="post-list">
            <li><strong>A creditor contact directory.</strong> There&#x27;s no single place to find contact details for banks and utility companies, and no API for it either, so I&#x27;m building one myself, starting with the main high-street banks and utility providers. Plenty of utilities only offer a phone number, and for a lot of neurodivergent people a phone call is the hardest possible way to ask for help. That needs to change, and this is a small start.</li>
            <li><strong>A clearer view of overdrafts.</strong> Bank apps often show your balance and your overdraft as one combined number, which can make money look like it&#x27;s yours when it&#x27;s actually borrowed. A future version of Mirian will show the two separately, so you can see at a glance what&#x27;s really yours.</li>
            <li><strong>Mobile as well as web.</strong> Mirian is a web app at the moment. The plan is to make it available as a mobile app too, so it&#x27;s there in your pocket when you need it.</li>
            <li><strong>Paid plans.</strong> There&#x27;ll be paid tiers in time, so Mirian can keep going and keep improving. I&#x27;ll share more on that when it&#x27;s ready.</li>
          </ul>
        </div>
      </section>

      {/* --- Get involved CTA --- */}
      <section className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">Get involved</div>
              <h2 className="blog-title"><strong>Want to help shape it?</strong></h2>
              <div>
                <div className="blog-sub-text">
                  If you&#x27;re neurodivergent, or you just find money admin hard, I&#x27;d love you to try Mirian and tell me what you think. Beta testers get early access and a real say in what gets built next.
                  <br /><br />
                  And if you&#x27;d like your own website built with the same care,{" "}
                  <a target="_blank" rel="noopener noreferrer" href={CALENDLY} className="link-6">book a free chat</a>{" "}
                  and we&#x27;ll talk it through.
                </div>
              </div>
              <div className="tt-cta-row">
                <a target="_blank" rel="noopener noreferrer" href={MIRIAN_BETA_URL} className="tt-cta-btn">Join the Mirian beta →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Source citation --- */}
      <section className="wrap">
        <p className="tt-cta-sub" style={{ opacity: 0.75 }}>
          Source:{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://www.stepchange.org/about-us/impact-report-2025/equifax.aspx">
            StepChange and Equifax, 2025
          </a>
        </p>
      </section>

      <NewsletterCta />

      <section className="tt-cta">
        <div className="tt-wrap">
          <div className="tt-cta-inner">
            <h2 className="tt-cta-title">Want someone to just <span className="tt-cta-hl">do it for you?</span></h2>
            <p className="tt-cta-sub">Reading about thoughtful design is one thing. Having your website built with that same care is another. That&#x27;s what we&#x27;re here for.</p>
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
