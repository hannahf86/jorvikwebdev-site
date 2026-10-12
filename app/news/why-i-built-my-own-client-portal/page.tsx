/* =============================================================================
   PAGE: Why I built my own client portal  (route: /news/why-i-built-my-own-client-portal)
   New blog post (dated 12 Sep 2026). Laid out in the author's original structure:
   intro, five numbered sections (01–05), then "What's next". Uses the shared
   article styling; navbar/footer/newsletter come from the shared components.
   ============================================================================= */

import "@/styles/vendor/pages/news__webflow-editor-changes.css";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";

export const metadata = pageMetadata({
  title: "Why I Built My Own Client Portal | Jorvik Web Dev",
  description:
    "Why I built the JWD Client Portal — one calm place for every project, designed around how my brain actually works — and what it means for you as a client.",
  path: "/news/why-i-built-my-own-client-portal",
});

const BOOK_A_CALL_HREF = "https://calendly.com/hannah-jwd/30min";

export default function ClientPortalPostPage() {
  return (
    <>
      {/* --- Hero + intro --- */}
      <section className="tt-hero">
        <div className="tt-wrap">
          <div className="tt-eyebrow">Behind the scenes</div>
          <h1 className="tt-hero-title">
            <span className="tt-hw tt-hw-w">Why I built</span>
            <span className="tt-hw tt-hw-g">my own</span>
            <span className="tt-hw tt-hw-t">client portal</span>
          </h1>
          <p className="tt-hero-sub">
            For a long time, managing client projects at Jorvik Web Dev looked organised from the outside. Behind the scenes, it was spread across four different tools, a busy inbox and a worrying amount of my own memory.
            <br /><br />
            ClickUp and Notion are both good products. I&#x27;m not going to tell you they&#x27;re rubbish, because they aren&#x27;t. But ClickUp felt like learning to fly a plane so I could post a letter, and Notion needed so much setting up that I spent more time building the system than using it. Every new project meant bending a template that never quite fitted, and every client had to learn yet another login just to send me their logo.
            <br /><br />
            So I built my own. The JWD Client Portal is now where every project lives, and if you work with me, it&#x27;s where you&#x27;ll find everything. Here&#x27;s how it came about, why it looks the way it does, and what it actually changes for you.
          </p>
          <div className="tt-hero-visual">
            <img
              src="/images/project-client-portal.webp"
              alt="The JWD Client Portal"
              sizes="(max-width: 1366px) 100vw, 1366px"
              srcSet="/images/project-client-portal-p-500.webp 500w, /images/project-client-portal-p-800.webp 800w, /images/project-client-portal-p-1080.webp 1080w, /images/project-client-portal.webp 1366w"
              className="tt-computer"
            />
          </div>
        </div>
      </section>

      {/* --- 01 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">01</div>
          <h2 className="sec-title">The problem wasn&#x27;t the tools, it was the <span className="text-span-71">fit</span></h2>
          <p className="sec-intro">
            Most project management software is built for teams. Lots of people, lots of handoffs, lots of meetings about the meetings. I&#x27;m a one-woman studio working with small businesses, and what I needed was much simpler:
          </p>
          <ul className="post-list">
            <li>one place for each project</li>
            <li>one place for clients to send me files</li>
            <li>one place to see what&#x27;s due</li>
            <li>one place for invoices</li>
          </ul>
          <p className="sec-intro">
            What I had instead was four tools doing slightly overlapping versions of those jobs, none of them talking to each other, and me in the middle copying things from one to another.
          </p>
          <p className="sec-intro">
            The other problem was rigidity. Off-the-shelf tools love a template. Set up your workflow once, then every project follows the same steps. That sounds efficient until you realise that a five-page brochure site and a big CMS build with integrations don&#x27;t follow the same steps at all. I kept deleting stages that didn&#x27;t apply and inventing workarounds for ones that weren&#x27;t there.
          </p>
          <p className="sec-intro">
            So the brief I wrote for myself was short. One system. Flexible for each project. Simple enough that a client could use it without a tutorial.
          </p>
        </div>
      </section>

      {/* --- 02 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">02</div>
          <h2 className="sec-title">Designing it around how my brain <span className="text-span-71">actually works</span></h2>
          <p className="sec-intro">
            Here&#x27;s the bit I don&#x27;t usually say out loud on a business blog: I&#x27;m AuDHD, which means autistic and ADHD. It&#x27;s a big part of why I&#x27;m good at what I do, and a big part of why generic productivity tools never stuck for me.
          </p>
          <p className="sec-intro">Two things matter most when I&#x27;m planning work.</p>
          <p className="sec-intro">
            The first is dopamine. ADHD brains run on momentum and visible progress. If I can see that things are moving, I keep moving. If all I can see is a mountain, I freeze.
          </p>
          <p className="sec-intro">
            The second is demand avoidance. When something lands as an instruction, even one I&#x27;ve set myself, part of my brain digs its heels in. A to-do list that greets me first thing in the morning can stall the whole day before it&#x27;s started.
          </p>
          <p className="sec-intro">
            I didn&#x27;t run a formal study before building the portal, but I wasn&#x27;t guessing either. I&#x27;d spent years reading and learning about neurodivergent behaviour, including how visual reminders work for brains like mine and how the way a demand is framed changes how it feels. Put that next to the lived experience of running JWD every day, and I had a pretty clear idea of what the interface needed to do before I designed a single screen. I sketched it by hand first, worked it up in Figma, then built it one feature at a time.
          </p>
          <p className="sec-intro">A few decisions came straight out of that thinking.</p>
          <ul className="post-list">
            <li><strong>The numbers come first.</strong> When I open the dashboard, the first thing I see is a set of stats: how many projects are live, how many things are overdue. It&#x27;s information, not an instruction, so it doesn&#x27;t set off the demand-avoidance alarm. Seeing a healthy number of live projects is also a small win before anything difficult is asked of me. Momentum, not dread.</li>
            <li><strong>&quot;To do&quot; and &quot;due this week&quot; are separate.</strong> The to-do list holds everything, in date order, sometimes stretching weeks ahead. That&#x27;s useful, but a long list doesn&#x27;t grab my attention, however neatly it&#x27;s sorted. &quot;Due this week&quot; is the same information filtered down to what actually needs doing now, so I plan my days around what&#x27;s real rather than everything that&#x27;s been logged.</li>
            <li><strong>Urgent things live in a highlighted box.</strong> Executive dysfunction means time-sensitive tasks can quietly disappear in a flat list. A highlighted box registers before I&#x27;ve even read it, so nothing important depends on me reading carefully enough to spot it.</li>
            <li><strong>Status is written in words.</strong> Colour helps, but it&#x27;s never the only signal. If something is overdue, it says so.</li>
            <li><strong>Different views for different days.</strong> Kanban boards, lists and charts sit side by side. Some days I need to see a project as a board, some days as a list. The portal doesn&#x27;t make me pick one and stick with it.</li>
          </ul>
        </div>
      </section>

      {/* --- 02 callout --- */}
      <section className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">Why this matters to you</div>
              <h2 className="blog-title"><strong>Designing for brains like mine isn&#x27;t a niche. It&#x27;s just good design with the excuses taken out.</strong></h2>
              <div>
                <div className="blog-sub-text">
                  So why am I telling you all this? Because the things that help my brain help yours too. Clear priorities, plain wording, nothing urgent buried in a wall of text. You don&#x27;t need to be neurodivergent to appreciate a screen that tells you what matters without making you hunt for it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 03 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">03</div>
          <h2 className="sec-title">Four weeks from sketch to <span className="text-span-71">daily use</span></h2>
          <p className="sec-intro">I built the first working version over about four weeks.</p>
          <p className="sec-intro">
            For anyone curious about what&#x27;s under the bonnet, it&#x27;s a custom web app built with Next.js and TypeScript, with Supabase handling the database and secure logins, Resend sending the emails, and Vercel hosting it all. I used Claude Code as a coding assistant to speed up the build, but the design decisions, the structure and the reasons behind every screen were mine, worked out on paper before any code was written.
          </p>
          <p className="sec-intro">
            If none of those names mean anything to you, that&#x27;s completely fine. What matters is that it&#x27;s fast, it&#x27;s secure, and because I built it, I can change it. When a project needs something the portal doesn&#x27;t do yet, I don&#x27;t have to wait for a software company to add it to their roadmap. I just add it.
          </p>
          <p className="sec-intro">
            The most important feature didn&#x27;t look like much on a wireframe. When I set up a new project, I choose the stages and milestones it actually needs. A quick brochure site gets a short, simple path. A bigger build gets more checkpoints. Nothing is forced into a shape that doesn&#x27;t fit, which was the whole reason I started.
          </p>
        </div>
      </section>

      {/* --- 04 --- */}
      <section className="sec-pain">
        <div className="wrap">
          <div className="eyebrow">04</div>
          <h2 className="sec-title">What it means if you&#x27;re a <span className="text-span-106">client</span></h2>
          <p className="sec-intro">
            This is the part that really matters, because the portal isn&#x27;t just for me. It was built to be handed to a client from day one.
          </p>
          <ul className="post-list">
            <li><strong>You get one link, not another account to manage.</strong> I invite clients personally, project by project. There&#x27;s no public sign-up and no setting up a profile. You get an invitation, you log in, and your project is there.</li>
            <li><strong>You can see where things are.</strong> Your dashboard shows what&#x27;s done, what&#x27;s next and when it&#x27;s due. No more emailing to ask &quot;where are we with the website?&quot;, because the answer is already there.</li>
            <li><strong>You know what I need from you.</strong> Websites always need things from the client: copy, photos, logins, feedback, sign-off. These show up as clear tasks with dates, so you&#x27;re not digging through old emails to remember what I asked for.</li>
            <li><strong>Files go straight to the right place.</strong> Upload your logo, photos and documents directly to your project. No more &quot;this file is too big to email&quot; or links that expire before I&#x27;ve opened them.</li>
            <li><strong>Invoices live alongside the work.</strong> You can see and download your invoices in the same place as everything else, so you&#x27;re not searching your inbox at tax time.</li>
            <li><strong>Reminders happen automatically.</strong> Project timelines and reminders run on their own rather than relying on either of us remembering. Things don&#x27;t slip through the cracks because someone was busy that week.</li>
            <li><strong>Your information stays private.</strong> Access is role-based, which means you see your own project and nothing else. Anything that isn&#x27;t relevant to you is hidden by default. When a project finishes, its data is archived, and it&#x27;s cleared completely after two years.</li>
          </ul>
          <p className="sec-intro">
            And because the portal follows the same design thinking I described above, it&#x27;s calm to use. You won&#x27;t log in and get hit with fourteen buttons and a notification count. You&#x27;ll see what&#x27;s happening and what you need to do, and that&#x27;s it.
          </p>
        </div>
      </section>

      {/* --- 05 --- */}
      <section className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">05</div>
          <h2 className="sec-title">What&#x27;s actually <span className="text-span-71">changed</span></h2>
          <p className="sec-intro">
            The portal is now in daily use across eight live client projects. Four separate tools have become one. By my own rough estimate, it gives me back somewhere between five and ten hours a week, which is time I&#x27;d much rather spend designing and building than chasing files and updating spreadsheets.
          </p>
          <p className="sec-intro">
            Onboarding a new client is now a single guided path instead of a checklist living in my head. Communication sits in one place rather than scattered across email threads. And for the first time, the way I manage projects actually matches the way I work, rather than me constantly fighting a tool built for someone else.
          </p>
          <p className="sec-intro">
            For clients, the change is quieter but just as real. You always know where your project is, what&#x27;s next, and what&#x27;s needed from you. It&#x27;s the kind of thing you only notice when it&#x27;s missing.
          </p>
        </div>
      </section>

      {/* --- What's next --- */}
      <section className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">The road ahead</div>
              <h2 className="blog-title"><strong>What&#x27;s next</strong></h2>
              <div>
                <div className="blog-sub-text">
                  The portal will keep evolving as each new project teaches me something. And without giving too much away, building something that works this well for me has made me wonder whether other freelancers, tired of wrestling with tools designed for teams of fifty, might want something similar. More on that soon.
                  <br /><br />
                  If you&#x27;re thinking about a new website, or your current one needs some love, I&#x27;d be glad to show you how working together looks in practice.{" "}
                  <a target="_blank" rel="noopener noreferrer" href={BOOK_A_CALL_HREF} className="link-6">Book a free chat</a>{" "}
                  and I&#x27;ll walk you through it.
                </div>
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
            <p className="tt-cta-sub">Reading about how I work is one thing. Having your website sorted while you focus on running your business is another. That&#x27;s what we&#x27;re here for.</p>
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
