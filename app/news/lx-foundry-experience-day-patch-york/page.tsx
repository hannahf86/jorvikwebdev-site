/* =============================================================================
   PAGE: LX Foundry Experience Day at Patch, York
         (route: /news/lx-foundry-experience-day-patch-york)
   Faithful port of news/lx-foundry-experience-day-patch-york.html. Main content
   only — the shared layout supplies the navbar and footer. The MailerLite
   newsletter band is replaced with the shared <NewsletterCta />.
   ============================================================================= */

import "@/styles/vendor/pages/news__lx-foundry-experience-day-patch-york.css";
import { pageMetadata } from "@/lib/seo";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";

export const metadata = pageMetadata({
  title: "LX foundry Experience Day at Patch, York | Jorvik Web Dev",
  description:
    "Highlights from the LX Foundry experience day at Patch, York — what it was like and what small businesses can take from it.",
  path: "/news/lx-foundry-experience-day-patch-york",
});

export default function LxFoundryExperienceDayPatchYorkPage() {
  return (
    <>
      <section className="tt-hero">
        <div className="tt-wrap">
          <div id="w-node-fc03a087-addd-9825-bb2d-325f0334a025-dcf47a64" className="tt-eyebrow">Training Days</div>
          <h1 id="w-node-fc03a087-addd-9825-bb2d-325f0334a029-dcf47a64" className="tt-hero-title"><span className="tt-hw tt-hw-w">LX Foundry</span><span className="tt-hw tt-hw-g">Experience</span><span className="tt-hw tt-hw-t">Day with</span><span className="text-span-65">Enterprise Cube</span></h1>
          <p id="w-node-fc03a087-addd-9825-bb2d-325f0334a032-dcf47a64" className="tt-hero-sub">Behind the scenes at the LX Foundry Experience Day: sound, setups, and the questions people are too embarrassed to ask</p>
          <div id="w-node-fc03a087-addd-9825-bb2d-325f0334a034-dcf47a64" className="tt-hero-visual"><img src="/images/IMG_0047.webp" alt="JWD illustrated computer" sizes="(max-width: 3843px) 100vw, 3843px" srcSet="/images/IMG_0047-p-500.webp 500w, /images/IMG_0047-p-800.webp 800w, /images/IMG_0047-p-1080.webp 1080w, /images/IMG_0047-p-1600.webp 1600w, /images/IMG_0047-p-2000.webp 2000w, /images/IMG_0047-p-2600.webp 2600w, /images/IMG_0047-p-3200.webp 3200w, /images/IMG_0047.webp 3843w" className="tt-computer" /></div>
        </div>
      </section>
      <section className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">Teaching people how to teach</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>What happens when you put </strong></span><strong>OBS</strong><span className="text-span-70"><strong> and a </strong></span><strong className="po-teal">microphone</strong><span className="text-span-70"><strong> in front of </strong></span><span className="text-span-101"><strong>20+ course creators</strong></span></h2>
              <div>
                <div className="blog-sub-text">On Tuesday 7th July, I spent the day at Patch in York running audio, camera and OBS sessions for the <a target="_blank" rel="noopener noreferrer" href="https://ynygrowthhub.com/event/lx-foundry-experience-day-a-micro-conference-for-online-learning-tech/"><span className="text-span-100">LX Foundry Experience Day</span></a> — a micro-conference by <a target="_blank" rel="noopener noreferrer" href="https://enterprisecube.org/"><span className="text-span-99">Enterprise CUBE</span></a><span> </span>that puts affordable streaming and recording tech into the hands of course creators and small training providers.If the phrase &quot;micro-conference&quot; makes you think of a cramped room with bad coffee and someone reading PowerPoint slides at you, this was the opposite. LX Foundry deliberately keeps numbers small so attendees actually get their hands on equipment instead of just watching someone else use it.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">Who was there</div>
          <h2 className="sec-title">The Team that made the day <span className="text-span-102">and me</span></h2>
          <p className="sec-intro">I was there as part of the LX Foundry helpdesk crew, and I have to shout out the organisers because they absolutely nailed it.<br /><br />‍<strong>Richard Lanning</strong> and <strong>Laura Mumford</strong> run <a target="_blank" rel="noopener noreferrer" href="https://enterprisecube.org/">Enterprise CUBE</a> and honestly, the whole day is a testament to how well they know their audience. <br /><br />Richard has this rare gift for making streaming and instructional design feel accessible rather than overwhelming. He&#x27;s the reason people who were terrified of tech left the room actually wanting to try it. Laura&#x27;s background in course design and digital training at scale means nothing at these events is accidental; every session is planned so attendees leave with skills they can use immediately, not just inspiration they&#x27;ll forget by Monday. Together they&#x27;ve built something genuinely valuable for York and North Yorkshire&#x27;s training community, and it shows in how engaged and well looked-after everyone was.<br /><br />My fellow crew members on the day were:<br /><br />‍<strong>Jack Barber</strong> of <a target="_blank" rel="noopener noreferrer" href="https://hellotechnology.co.uk/">Hello Technology</a> — full-stack developer, camera wizard, and the person you want around when you&#x27;re trying to figure out multi-cam setups without crying. He&#x27;s one of those rare developers who actually understands what non-technical people need, which made the camera and lighting sessions run so smoothly.<br /><br />‍<strong>Anja Richards</strong> of <a target="_blank" rel="noopener noreferrer" href="https://notchmedia.co.uk/">Notch Media</a> — brand designer, illustrator, and the 2025 UK Small Business Awards first place winner (which absolutely tracks if you&#x27;ve seen her work). She handled set design and graphics, and her sessions on making a small space look intentional rather than apologetic were genuinely brilliant. She has this way of making design feel achievable rather than exclusive, which is exactly what nervous course creators need to hear.<br /><br />My brief covered the bits people usually skip over because they seem complicated: sound, microphones, and OBS.</p>
        </div>
      </section>
      <section className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <h2 className="blog-title"><span className="text-span-70"><strong>&quot;You can forgive dodgy lighting. You </strong></span><span><strong>cannot</strong></span><span className="text-span-70"><strong> forgive </strong></span><span className="text-span-103"><strong>audio</strong></span><span className="text-span-70"><strong> that sounds like you&#x27;re broadcasting from a </strong></span><span className="text-span-104"><strong>toilet cubicle</strong></span><span className="text-span-70"><strong>.&quot;</strong></span></h2>
            </div>
          </div>
        </div>
      </section>
      <section id="ux-laws" className="sec-pain">
        <div className="wrap">
          <div className="eyebrow">Introduction</div>
          <h2 className="sec-title">My 3 <span className="text-span-106">top tips</span></h2>
          <p className="sec-intro">We began the day with an epic introduction from Richard, and then each of the support crew gave their top 3 tips for their specialist area. Here are mine!</p>
          <div className="pain-grid">
            <div className="pain-card">
              <div>
                <h3 className="card-no-01">#01</h3>
              </div>
              <h3 className="card-h">Control Your Environment</h3>
              <p className="card-p"><strong className="bold-text-2">Before you spend money on a fancy microphone, look at the room you are recording in. Hard, flat surfaces like bare walls, wooden floors, and glass tables bounce sound around and create echo that makes even the best mic sound cheap. Soft materials absorb those reflections, so throw down a rug, close thick curtains, or hang a duvet behind your setup to create a &quot;dead&quot; space. It is the single biggest improvement you can make to your audio quality without spending a penny.</strong></p>
            </div>
            <div className="pain-card">
              <div>
                <h3 className="card-no-02">#02</h3>
              </div>
              <h3 className="card-h">Set your levels properly</h3>
              <p className="card-p"><strong className="bold-text-3">Setting your microphone gain too high is one of the most common mistakes I see — it causes &quot;clipping,&quot; where your voice distorts every time you get enthusiastic or raise your pitch. In your recording software, watch the level meter and aim to keep your voice bouncing in the yellow zone at the top of the green range. If you hit the red, you have gone too far, and that distortion is almost impossible to fix cleanly in editing. It is much better to record slightly quieter and boost the volume afterwards than to try and rescue a clipped, crunchy take.</strong></p>
            </div>
            <div className="pain-card">
              <div>
                <h3 className="card-no-03">#03</h3>
              </div>
              <h3 className="card-h">Match the mic to the job</h3>
              <p className="card-p"><strong className="bold-text-9">Voice mics like the Rode Wireless GO are optimized for speech — they compress music, cut low-end frequencies, and kill the sustain of instruments like singing bowls and gongs. Recording instruments or capturing room ambience? Use a condenser microphone. Recording voice in an untreated room with lots of background noise? Use a dynamic microphone instead. The right mic in the right room at the right level is what separates amateur audio from professional sound.</strong></p>
            </div>
          </div>
        </div>
      </section>
      <section id="jakobs-law" className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">#01 - SOUND</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>Good </strong></span><span><strong>Quality</strong></span><span className="text-span-70"><strong> </strong></span><span className="text-span-107"><strong>Sound</strong></span></h2><img src="/images/JWD-line.svg" loading="lazy" alt="" className="image-15" />
              <div>
                <div className="blog-sub-text"><strong>My first sessions focused on audio setup and mic choice — arguably the most under-invested area of home recording.<br /><br />I ran mic booth trials throughout the day, testing different setups with attendees and talking through what works for which scenario. <br /><br />A lot of people had already bought a Rode Wireless GO or similar and wanted to know if it was the right tool for their specific content — online courses, live sound baths, recorded training, podcast-style delivery.<br /><br />The answer, as always, is &quot;it depends on your room and your use case,&quot; but most people just need someone to confirm they&#x27;re not about to waste £200 on the wrong thing.</strong></div>
              </div>
              <h4 className="h4-blog">Key takeaway...</h4>
              <div className="blog-sub-text">Room acoustics matter more than your mic. Several attendees had been struggling with background noise and didn&#x27;t realise how much of it could be fixed by moving a rug or closing a curtain. Sometimes the best audio upgrade costs zero pounds.</div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">#02 - OBS Studio</div>
          <h2 className="sec-title">The free software nobody teaches you to use</h2>
          <p className="sec-intro"><strong>I also ran sessions on live production using OBS Studio — the free open-source tool that handles streaming and recording. <br /><br />Most people know OBS exists. Almost nobody knows how to set it up properly without wanting to throw their laptop out of a window.I walked attendees through the fundamentals: <br />- creating scenes<br />- switching between camera and screen share views<br />- setting up audio sources<br />- configuring recording settings that won&#x27;t corrupt if OBS crashes.</strong></p>
          <h4 className="h4-blog">Key takeaway...</h4>
          <div className="sec-intro">Record in MKV, then remux to MP4 later. If OBS crashes during an MP4 recording, you lose the whole file. MKV is crash-safe — you&#x27;re welcome.<br /><br />We covered streaming to YouTube and Twitch, though most course creators were more interested in local recording for on-demand content. I showed them how to set up a &quot;Starting Soon&quot; scene, how to arrange sources without accidentally broadcasting their email inbox to the world, and how to export their settings so they don&#x27;t have to rebuild everything from scratch when they get a new laptop.<br /><br />Ahead of the day, I&#x27;d put together a full beginner&#x27;s OBS guide and slide deck in LX Foundry branding, which seemed to land well — there&#x27;s a big difference between &quot;I watched a YouTube tutorial&quot; and &quot;someone actually sat with me and showed me which button does what.&quot;</div>
        </div>
      </section>
      <NewsletterCta />
      <section className="tt-cta">
        <div className="tt-wrap">
          <div className="tt-cta-inner">
            <h2 className="tt-cta-title">Want <span className="text-span-109">training</span> for your <span className="text-span-110">own setup</span>?</h2>
            <p className="tt-cta-sub-wide">If you came to the LX Experience Day, I&#x27;ll honour a free one-hour training session with Jorvik Web Dev to help you implement what you learned — whether that&#x27;s getting OBS configured properly, choosing the right mic for your content, or just making your home studio look less like a crime scene.<br /><br />Drop me an email on hannah@jorvikweb.dev and we&#x27;ll book it in.If you missed the day but you&#x27;re a course creator or small business owner trying to produce better audio and video content, I run training sessions on OBS setup, microphone choice, and basic studio design. <br /><br />It&#x27;s not about buying expensive gear — it&#x27;s about knowing what you actually need and how to use it properly. Get in touch and we&#x27;ll sort something out.</p>
            <div className="tt-cta-row">
              <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/hannah-jwd/30min" className="tt-cta-btn">Book a free chat →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
