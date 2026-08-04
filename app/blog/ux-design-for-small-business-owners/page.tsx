/* =============================================================================
   PAGE: UX Design for Small Business Owners
         (route: /blog/ux-design-for-small-business-owners)
   Faithful port of blog/ux-design-for-small-business-owners.html. Main content
   only — the shared layout supplies the navbar and footer. The MailerLite
   newsletter band is replaced with the shared <NewsletterCta />.
   ============================================================================= */

import "@/styles/vendor/pages/blog__ux-design-for-small-business-owners.css";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";

export const metadata = pageMetadata({
  title: "UX Design for Small Business Owners | Jorvik Web Dev",
  description:
    "A plain-English guide to UX design for small business owners — the simple principles that turn website visitors into customers.",
  path: "/blog/ux-design-for-small-business-owners",
});

export default function UxDesignForSmallBusinessOwnersPage() {
  return (
    <>
      <section className="tt-hero">
        <div className="tt-wrap">
          <div id="w-node-_32283c19-dfab-8616-ccd6-f5909a2809b1-76d8ccd9" className="tt-eyebrow">Tips &amp; Tricks</div>
          <h1 id="w-node-_32283c19-dfab-8616-ccd6-f5909a2809b5-76d8ccd9" className="tt-hero-title"><span className="tt-hw tt-hw-w">UX Design</span><span className="tt-hw tt-hw-g">For Small</span><span className="tt-hw tt-hw-t">Business </span><span className="text-span-65">Owners</span></h1>
          <p id="w-node-_32283c19-dfab-8616-ccd6-f5909a2809be-76d8ccd9" className="tt-hero-sub">No &quot;leverage synergies&quot;. No &quot;disruptive paradigm shifts&quot;. Just straightforward answers to the questions small business owners actually ask — usually at 11pm on a Sunday.</p>
          <div id="w-node-_32283c19-dfab-8616-ccd6-f5909a2809cb-76d8ccd9" className="tt-hero-visual"><img src="/images/ux-design---no-bg.webp" alt="JWD illustrated computer" sizes="(max-width: 2048px) 100vw, 2048px" srcSet="/images/ux-design---no-bg-p-500.webp 500w, /images/ux-design---no-bg-p-800.webp 800w, /images/ux-design---no-bg-p-1080.webp 1080w, /images/ux-design---no-bg-p-1600.webp 1600w, /images/ux-design---no-bg-p-2000.webp 2000w, /images/ux-design---no-bg.webp 2048w" className="tt-computer" /></div>
        </div>
      </section>
      <section className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">Is Your Website annoying People?</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>10 </strong></span><span className="text-span-69"><strong className="bold-text-16">Simple Laws</strong></span><strong> to Fix It Before They Leave Forever</strong></h2>
              <div>
                <div className="blog-sub-text">Look, I get it. You’re trying to run a business. You’ve got taxes to file, a team to manage, and probably your kid&#x27;s gymnastics practice to get to in twenty minutes. The last thing you want to do is spend your Saturday night arguing with a website builder about where the &quot;Contact Us&quot; button should go. I’ve been there. <br /><br />My first business website looked like a neon-green fever dream from 1997 because I thought being &quot;unique&quot; was the same thing as being &quot;good.&quot; <br /><br />Honestly, it wasn&#x27;t. It was just a great way to make sure nobody ever bought anything.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">Today&#x27;s Topic</div>
          <h2 className="sec-title">We&#x27;re going to talk<br />about <span className="text-span-71">UX</span></h2>
          <p className="sec-intro">It stands for <strong className="bold-text">User Experience</strong>, which is just a fancy, slightly pretentious way of saying &quot;how someone feels when they’re using your site&quot;. If they feel confused, they leave. If they feel smart, they stay.<br /><br />The goal here isn&#x27;t to turn you into a professional designer or a corporate consultant. <br />‍<br />You don&#x27;t need a degree to stop annoying your customers. Whether you’re DIY-ing your site on a Tuesday night or briefing a designer you’re paying actual money for, these 10 laws will keep you from making the mistakes I did.<br /><br />Grab a tea or coffee. Let’s do this.</p>
        </div>
      </section>
      <section id="ux-laws" className="sec-pain">
        <div className="wrap">
          <div className="eyebrow">How We Break it All Down</div>
          <h2 className="sec-title">The 10, arguably best,<br /><span className="text-span-72">Laws of UX Design</span></h2>
          <p className="sec-intro">Let&#x27;s start with a summary, because who has time to read a full blog post these days. That being said... if you click on the card for each law, it will take you to its section to show you visual examples for each; what works, what doesn&#x27;t work and how to get it right.</p>
          <div className="pain-grid">
            <a href="#jakobs-law" className="ux-card-link w-inline-block">
              <div className="pain-card">
                <div className="mini-icon-service-div"><img src="/images/fast.svg" loading="lazy" alt="" /></div>
                <h3 className="card-h">Jakob&#x27;s Law</h3>
                <p className="card-p"><strong className="bold-text-2">Users spend most of their time on other sites, so they prefer your site to work like the ones they already know.</strong></p>
              </div>
            </a>
            <a href="#hicks-law" className="ux-card-link w-inline-block">
              <div className="pain-card">
                <div className="mini-icon-service-div"><img src="/images/decision.svg" loading="lazy" alt="" /></div>
                <h3 className="card-h">Hicks Law</h3>
                <p className="card-p"><strong className="bold-text-3">The time it takes to make a decision increases with the number and complexity of choices.</strong></p>
              </div>
            </a>
            <a href="#millers-law" className="ux-card-link w-inline-block">
              <div className="pain-card">
                <div className="mini-icon-service-div"><img src="/images/memory.svg" loading="lazy" alt="" /></div>
                <h3 className="card-h">Miller&#x27;s Law</h3>
                <p className="card-p"><strong className="bold-text-9">The average person can only keep about 7 items in their working memory at once.</strong></p>
              </div>
            </a>
          </div>
          <div className="pain-grid">
            <a href="#law-of-proximity" className="ux-card-link w-inline-block">
              <div className="pain-card">
                <div className="mini-icon-service-div"><img src="/images/prox-icon.svg" loading="lazy" alt="" /></div>
                <h3 className="card-h">Law of Proximity</h3>
                <p className="card-p"><strong className="bold-text-10">Things that are close together are perceived as being related.</strong></p>
              </div>
            </a>
            <a href="#cognitive-load" className="ux-card-link w-inline-block">
              <div className="pain-card">
                <div className="mini-icon-service-div"><img src="/images/cognitive-training.svg" loading="lazy" alt="" /></div>
                <h3 className="card-h">Cognitive Load</h3>
                <p className="card-p"><strong className="bold-text-8">The amount of mental effort it takes to use your site should be as low as possible.</strong></p>
              </div>
            </a>
            <a href="#fitts-law" className="ux-card-link w-inline-block">
              <div className="pain-card">
                <div className="mini-icon-service-div"><img src="/images/target.svg" loading="lazy" alt="" /></div>
                <h3 className="card-h">Fitt&#x27;s Law</h3>
                <p className="card-p"><strong className="bold-text-7">The time to acquire a target is a function of the distance to and size of the target.</strong></p>
              </div>
            </a>
          </div>
          <div className="pain-grid">
            <a href="#von-restorff-effect" className="ux-card-link w-inline-block">
              <div className="pain-card">
                <div className="mini-icon-service-div"><img src="/images/von-icon.svg" loading="lazy" alt="" /></div>
                <h3 className="card-h"><strong>Von Restorff Effect</strong></h3>
                <p className="card-p"><strong className="bold-text-4">When multiple similar objects are present, the one that differs from the rest is most likely to be remembered.</strong></p>
              </div>
            </a>
            <a href="#serial-position-effect" className="ux-card-link w-inline-block">
              <div className="pain-card">
                <div className="mini-icon-service-div"><img src="/images/list.svg" loading="lazy" alt="" /></div>
                <h3 className="card-h">Serial Position Effect</h3>
                <p className="card-p"><strong className="bold-text-5">People remember the first and last items in a list better than the middle ones.</strong></p>
              </div>
            </a>
            <a href="#aesthetic-usability-effect" className="ux-card-link w-inline-block">
              <div className="pain-card">
                <div className="mini-icon-service-div"><img src="/images/flower-1.svg" loading="lazy" alt="" /></div>
                <h3 className="card-h"><strong>Aesthetic-Usability Effect</strong></h3>
                <p className="card-p"><strong className="bold-text-11">People perceive &quot;pretty&quot; things as being easier to use.</strong></p>
              </div>
            </a>
          </div>
          <div className="pain-grid">
            <a href="#occums-razor" className="ux-card-link w-inline-block">
              <div className="pain-card">
                <div className="mini-icon-service-div"><img src="/images/best-1.svg" loading="lazy" alt="" className="image-14" /></div>
                <h3 className="card-h">Occum&#x27;s Razor</h3>
                <p className="card-p"><strong className="bold-text-6">The simplest solution is usually the best one.</strong></p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="jakobs-law" className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">#01</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>Jakob&#x27;s</strong></span><strong> Law</strong></h2><img src="/images/JWD-line.svg" loading="lazy" alt="" className="image-15" />
              <h3 className="h3-blog">Users spend <span className="text-span-73">most of their time on other sites</span>, so they prefer <span className="text-span-75">your site</span> to <span className="text-span-74">work like the ones they already know</span>.</h3>
              <div>
                <div className="blog-sub-text"><strong>‍</strong>Here’s the thing: people don&#x27;t come to your website to admire your revolutionary take on navigation menus. They come to find a phone number, buy a candle, or book a service. <br /><br />Because they spend 99% of their time on sites like Amazon, Google, or Instagram, they’ve already been &quot;trained&quot; on how a website should work.<br /><br />If you decide to put your search bar at the bottom of the page or make your logo link to your Instagram instead of your homepage, you’re just making them work harder. <br /><br />And trust me, nobody wants to work hard to give you money</div>
              </div>
              <h4 className="h4-blog">The &#x27;so what?&#x27; for you...</h4>
              <div className="blog-sub-text"><span className="text-span-77"><strong className="bold-text-12">Don&#x27;t reinvent the wheel. </strong></span><strong className="bold-text-13"><br /><br />If you try to be too &quot;creative&quot; with the basic layout, people will feel lost and hit the back button faster than you can say &quot;missed conversion&quot;.<br /><br />Honest Truth: Innovation is for your product, not your &quot;Add to Cart&quot; button.<br /><br /></strong><span className="text-span-78"><strong className="try-text">Try this right now:</strong></span><strong className="bold-text-13"> <br />- Open your site on your phone. <br />- Is your logo in the top left? <br />- Is there a &quot;hamburger&quot; menu (those three little lines) in the top right? <br />- Is your contact info easy to find? <br /><br />If you answered &quot;no&quot; to any of these because you wanted to be &quot;different,&quot; change it back.</strong></div>
              <a href="#ux-laws" className="btn-ghost w-button">Back to all the laws</a>
            </div>
          </div>
        </div>
      </section>
      <section id="hicks-law" className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">#02</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>Hick&#x27;s</strong></span><strong> Law</strong></h2><img src="/images/JWD-line.svg" loading="lazy" alt="" className="image-15" />
              <h3 className="h3-blog"><strong>The </strong><span className="text-span-79"><strong>time it takes</strong></span><strong> to </strong><span className="text-span-80"><strong>make a decision</strong></span><strong> increases with the </strong><span className="text-span-81"><strong className="bold-text-15">number and complexity of choices</strong></span><strong>.</strong></h3>
              <div>
                <div className="blog-sub-text"><strong className="bold-text-14">We’ve all seen that one restaurant menu that’s basically a 50-page novel. <br /><br />You sit there for twenty minutes, get overwhelmed, and then just order the same burger you always get. <br /><br />That’s Hick’s Law in action.<br /><br />On a website, &quot;analysis paralysis&quot; is real. If your homepage has 15 different buttons and a menu with 20 sub-items, your visitor is going to get &quot;choice fatigue&quot; and just close the tab.</strong></div>
              </div>
              <h4 className="h4-blog">The &#x27;so what?&#x27; for you...</h4>
              <div className="blog-sub-text"><strong className="bold-text-12">Every extra option you give a customer is another chance for them to say &quot;I&#x27;ll think about this later&quot; (which we both know means &quot;never&quot;).</strong><span className="text-span-78"><strong className="try-text"><br /><br />Try this right now:</strong></span><strong className="bold-text-13"> <br />Count the items in your main navigation menu. If it’s more than seven, you’re pushing it. <br />- Can you group those services under one &quot;Services&quot; tab? <br /><br />If you have three different &quot;Buy Now&quot; buttons for the same thing on one page, pick the best one and kill the rest.</strong></div>
              <a href="#ux-laws" className="btn-ghost w-button">Back to all the laws</a>
            </div>
          </div>
        </div>
      </section>
      <section id="millers-law" className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">#03</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>Miller&#x27;s</strong></span><strong> Law</strong></h2><img src="/images/JWD-line.svg" loading="lazy" alt="" className="image-15" />
              <h3 className="h3-blog"><strong>The average person can only keep about </strong><span className="text-span-82"><strong className="bold-text-18">7 items</strong></span><strong> in their </strong><span className="text-span-83"><strong>working memory at once</strong></span><strong>.</strong></h3>
              <div>
                <div className="blog-sub-text"><strong className="bold-text-14">This is related to Hick’s Law, but it’s specifically about how our brains handle information. <br /><br />Our &quot;working memory&quot; (the brain’s sticky note) is tiny. If you give someone a wall of text with 15 bullet points, they’ll remember the first two and the last one, and the rest is just white noise.<br /><br />This is why we &quot;chunk&quot; information. It&#x27;s why phone numbers are written as 555-0199 instead of 5550199. It’s easier to digest.</strong></div>
              </div>
              <h4 className="h4-blog">The &#x27;so what?&#x27; for you...</h4>
              <div className="blog-sub-text"><strong className="bold-text-12">If you’re listing your &quot;12 Reasons to Work With Us,&quot; nobody is reading past number five. Group your info into small, bite-sized &quot;chunks&quot; so people actually absorb it. Just like this blog!</strong><span className="text-span-78"><strong className="try-text"><br /><br />Try this right now:</strong></span><strong className="bold-text-13"> <br />Look at your &quot;Services&quot; or &quot;Features&quot; section. <br /><br />- Is it a massive list? <br />- Try grouping them into 3 or 4 categories with icons. <br /><br />It’ll look cleaner and actually get read.</strong></div>
              <a href="#ux-laws" className="btn-ghost w-button">Back to all the laws</a>
            </div>
          </div>
        </div>
      </section>
      <section id="law-of-proximity" className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">#04</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>Law of Proximity</strong></span></h2><img src="/images/JWD-line.svg" loading="lazy" alt="" className="image-15" />
              <h3 className="h3-blog"><strong>Things that are </strong><span className="text-span-85"><strong className="bold-text-17">close together</strong></span><strong> are </strong><span className="text-span-84"><strong>perceived as being related.</strong></span></h3>
              <div>
                <div className="blog-sub-text"><strong className="bold-text-14">Our brains are lazy. <br /><br />If we see a photo and a caption right under it, we assume they go together. If there’s a massive gap between them, we get confused. <br /><br />I once had a site where the &quot;Sign Up&quot; button was so far away from the &quot;Join Our Newsletter&quot; header that people thought the button was part of the footer. <br /><br />Oops.</strong></div>
              </div>
              <h4 className="h4-blog">The &#x27;so what?&#x27; for you...</h4>
              <div className="blog-sub-text"><strong className="bold-text-12">Use whitespace (the empty space between elements) intentionally. Use it to separate different sections, but keep related things, like a product image and its price, hugging each other.<br /><br />‍</strong><span><strong className="bold-text-19">Honest Truth:</strong> </span><span className="text-span-78">Whitespace isn&#x27;t &quot;wasted&quot; space. It&#x27;s the &quot;breathing room&quot; that keeps your customers from feeling claustrophobic.<br />‍</span><span><strong className="bold-text-13"> <br />‍</strong></span><span className="text-span-86"><strong className="try-text">Try this now:</strong></span><strong className="bold-text-13"><br />- Look at your contact form. <br />- Are the labels (like &quot;Email Name&quot;) sitting right on top of the boxes they belong to? <br /><br />If they&#x27;re floating halfway between two boxes, your customers are going to put their names in the email box. Not ideal</strong></div>
              <a href="#ux-laws" className="btn-ghost w-button">Back to all the laws</a>
            </div>
          </div>
        </div>
      </section>
      <section id="cognitive-load" className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">#05</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>Cognitive Load</strong></span></h2><img src="/images/JWD-line.svg" loading="lazy" alt="" className="image-15" />
              <h3 className="h3-blog"><strong>The amount of </strong><span className="text-span-87"><strong className="bold-text-20">mental effort it takes</strong></span><strong> to use your site should be as </strong><span className="text-span-88"><strong className="bold-text-21">low as possible</strong></span><strong>.</strong></h3>
              <div>
                <div className="blog-sub-text"><strong className="bold-text-14">Every time a user has to ask, &quot;What does this button do?&quot; or &quot;Where did the menu go?&quot; you are burning their mental battery. <br /><br />This is called Cognitive Load. <br /><br />Think of your customer’s brain like a phone battery. If your site is &quot;heavy&quot; and confusing, that battery hits 0% real fast, and they leave.</strong></div>
              </div>
              <h4 className="h4-blog">The &#x27;so what?&#x27; for you...</h4>
              <div className="blog-sub-text"><strong className="bold-text-12">Don&#x27;t make them think. Use plain language. Avoid jargon (technical industry talk that makes you sound smart but makes them feel dumb).<br />‍</strong><span><strong className="bold-text-13"> <br />‍</strong></span><span className="text-span-86"><strong className="try-text">Try this now:</strong></span><strong className="bold-text-13"><br />Read your homepage aloud to someone who doesn&#x27;t work in your industry (your mum, your neighbor, the person at the coffee shop). <br /><br />If they have to ask what a sentence means, rewrite it in plain English. <br /><br />If you use a word like &quot;synergistic,&quot; delete it immediately.</strong></div>
              <a href="#ux-laws" className="btn-ghost w-button">Back to all the laws</a>
            </div>
          </div>
        </div>
      </section>
      <section id="fitts-law" className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">#06</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>Fitt&#x27;s Law</strong></span></h2><img src="/images/JWD-line.svg" loading="lazy" alt="" className="image-15" />
              <h3 className="h3-blog"><strong>The </strong><span className="text-span-89"><strong className="bold-text-22">time to acquire a target </strong></span><strong>is a function of the </strong><span className="text-span-90"><strong>distance to and size of the target</strong></span><strong>.</strong></h3>
              <div>
                <div className="blog-sub-text"><strong className="bold-text-14">In plain English: make your important buttons big and put them where people’s mouse or thumb already is. <br /><br />If you want someone to &quot;Book Now,&quot; don&#x27;t make that link a tiny, underlined piece of text in the middle of a paragraph. <br /><br />Make it a big, juicy button.</strong></div>
              </div>
              <h4 className="h4-blog">The &#x27;so what?&#x27; for you...</h4>
              <div className="blog-sub-text"><strong className="bold-text-12">On mobile, people use their thumbs. If your &quot;Submit&quot; button is tiny and right next to a &quot;Cancel&quot; button, they’re going to hit the wrong one and get annoyed.<br />‍</strong><span><strong className="bold-text-13"> <br />‍</strong></span><span className="text-span-86"><strong className="try-text">Try this now:</strong></span><strong className="bold-text-13"><br />Open your site on your mobile phone. <br />- Can you easily click your main call-to-action button with your thumb without accidentally clicking something else? <br /><br />If you have to zoom in to click a link, your button is too small.</strong></div>
              <a href="#ux-laws" className="btn-ghost w-button">Back to all the laws</a>
            </div>
          </div>
        </div>
      </section>
      <section id="von-restorff-effect" className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">#07</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>Von Restorff Effect</strong></span></h2><img src="/images/JWD-line.svg" loading="lazy" alt="" className="image-15" />
              <h3 className="h3-blog"><strong>When </strong><span className="text-span-91"><strong>multiple similar objects are present</strong></span><strong>, the one that differs from the rest is </strong><span className="text-span-92"><strong>most likely to be remembered</strong></span><strong>.</strong></h3>
              <div>
                <div className="blog-sub-text"><strong className="bold-text-14">This is the &quot;stand out&quot; rule. If everything on your page is blue, and you have one bright orange button, people are going to look at that orange button. <br /><br />This is great for your &quot;Buy Now&quot; button, but terrible if you’ve used that same bright orange for five different things that aren&#x27;t important.</strong></div>
              </div>
              <h4 className="h4-blog">The &#x27;so what?&#x27; for you...</h4>
              <div className="blog-sub-text"><strong className="bold-text-12">You should have one primary goal for every page. If you want them to subscribe, make that button the thing that pops. If everything is &quot;popping,&quot; then nothing is.<br /><br />Honest Truth: If your website looks like a bag of Skittles exploded on it, nobody knows where to look. Pick one &quot;action colour&quot; and stick to it.<br />‍</strong><span><strong className="bold-text-13"> <br />‍</strong></span><span className="text-span-86"><strong className="try-text">Try this now:</strong></span><strong className="bold-text-13"><br />Open your site on your mobile phone. <br />- Can you easily click your main call-to-action button with your thumb without accidentally clicking something else? <br /><br />If you have to zoom in to click a link, your button is too small.</strong></div>
              <a href="#ux-laws" className="btn-ghost w-button">Back to all the laws</a>
            </div>
          </div>
        </div>
      </section>
      <section id="serial-position-effect" className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">#08</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>Serial Position Effect</strong></span></h2><img src="/images/JWD-line.svg" loading="lazy" alt="" className="image-15" />
              <h3 className="h3-blog"><strong>People remember </strong><span><strong className="bold-text-23">the first</strong></span><strong> and </strong><span><strong className="bold-text-24">last items</strong></span><strong> in a list better than the middle ones.</strong></h3>
              <div>
                <div className="blog-sub-text"><strong className="bold-text-14">Our brains are like a sandwich. We love the bread, but we get a bit hazy on what was in the middle. <br /><br />If you’re listing your services or your menu items, put the most important ones at the very beginning and the very end.</strong></div>
              </div>
              <h4 className="h4-blog">The &#x27;so what?&#x27; for you...</h4>
              <div className="blog-sub-text"><strong className="bold-text-12">Don&#x27;t hide your best-selling product or your &quot;Contact&quot; link in the middle of a long list. It&#x27;ll get lost in the &quot;memory gap&quot;.<br />‍</strong><span><strong className="bold-text-13"> <br />‍</strong></span><span className="text-span-86"><strong className="try-text">Try this now:</strong></span><strong className="bold-text-13"><br />Check your navigation menu. Is &quot;Home&quot; first? Good. Is &quot;Contact&quot; or &quot;Book&quot; last? <br /><br />Excellent. <br /><br />If your most important service is buried in the middle of a five-item list, move it to the first or second spot.</strong></div>
              <a href="#ux-laws" className="btn-ghost w-button">Back to all the laws</a>
            </div>
          </div>
        </div>
      </section>
      <section id="aesthetic-usability-effect" className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">#09</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>Aesthetic-Usability Effect</strong></span></h2><img src="/images/JWD-line.svg" loading="lazy" alt="" className="image-15" />
              <h3 className="h3-blog"><strong>People perceive </strong><span className="text-span-93"><strong>&quot;pretty&quot;</strong></span><strong> things as </strong><span className="text-span-94"><strong>being easier to use</strong></span><strong>.</strong></h3>
              <div>
                <div className="blog-sub-text"><strong className="bold-text-14">This one is a bit unfair, but it’s true. If your site looks clean, modern, and professional, people will be more patient with it. <br /><br />If it looks like it hasn&#x27;t been updated since 2005, they’ll assume your business is also outdated or worse, unreliable.<br /><br />A &quot;pretty&quot; design buys you forgiveness for small mistakes.</strong></div>
              </div>
              <h4 className="h4-blog">The &#x27;so what?&#x27; for you...</h4>
              <div className="blog-sub-text"><strong className="bold-text-12">You don&#x27;t need to be a designer, but you do need to be clean. High-quality photos and consistent fonts go a long way. <br /><br />Use a free tool like </strong>
                <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="link-4"><strong className="bold-text-12">Google PageSpeed Insights </strong></a><strong className="bold-text-12">or </strong>
                <a href="https://www.seoptimer.com/" target="_blank" rel="noopener noreferrer" className="link-3"><strong className="bold-text-12">SEOptimer</strong></a><strong className="bold-text-12"> to make sure your &quot;pretty&quot; site isn&#x27;t also a &quot;slow&quot; site, because people hate waiting.<br />‍</strong><span><strong className="bold-text-13"> <br />‍</strong></span><span className="text-span-86"><strong className="try-text">Try this now:</strong></span><strong className="bold-text-13"><br />Look at your fonts. <br /><br />- Are you using five different ones? Stick to two. <br /><br />- Are your photos blurry? <br /><br />Replace them with high-res shots (even from your phone!). It&#x27;s a cheap way to look expensive. You can convert them to webp files, which are best for web optimisation, for FREE at </strong>
                <a href="https://squoosh.app/" target="_blank" rel="noopener noreferrer" className="link-5"><strong className="bold-text-13">Squoosh</strong></a>
              </div>
              <a href="#ux-laws" className="btn-ghost w-button">Back to all the laws</a>
            </div>
          </div>
        </div>
      </section>
      <section id="occums-razor" className="blog-sec-01">
        <div className="tt-wrap-copy">
          <div className="tt-sec-inner">
            <div className="tt-coming">
              <div className="tt-eyebrow-lg">#10</div>
              <h2 className="blog-title"><span className="text-span-70"><strong>Occum&#x27;s Razor</strong></span></h2><img src="/images/JWD-line.svg" loading="lazy" alt="" className="image-15" />
              <h3 className="h3-blog"><strong>The </strong><span className="text-span-95"><strong>simplest solution</strong></span><strong> is usually </strong><span className="text-span-96"><strong>the best one</strong></span><strong>.</strong></h3>
              <div>
                <div className="blog-sub-text"><strong className="bold-text-14">We often think that more &quot;features&quot; mean a better website. We want a pop-up, a scrolling ticker, a chatbot, and a video that plays automatically. <br /><br />Occam’s Razor says: stop it.<br /><br />The more &quot;stuff&quot; you add, the more chances you have to confuse someone or break your site. <br /><br />Simplicity is the ultimate &quot;pro&quot; move.</strong></div>
              </div>
              <h4 className="h4-blog">The &#x27;so what?&#x27; for you...</h4>
              <div className="blog-sub-text"><strong className="bold-text-12">If you can’t justify why a button or a section is there, delete it. <br /><br />Your site isn&#x27;t finished when there’s nothing left to add; it’s finished when there’s nothing left to take away.<br /><br /></strong><span className="text-span-97"><strong className="bold-text-12">Honest Truth: </strong></span><strong className="bold-text-12">Nobody ever left a website because it was &quot;too easy to use&quot;.<br />‍</strong><span><strong className="bold-text-13"> <br />‍</strong></span><span className="text-span-86"><strong className="try-text">Try this now:</strong></span><strong className="bold-text-13"><br />Find one thing on your homepage, whether that&#x27;s a widget, a social media feed, a paragraph of text, that you haven&#x27;t looked at in a month. If it doesn&#x27;t help someone buy from you, delete it.</strong></div>
              <a href="#ux-laws" className="btn-ghost w-button">Back to all the laws</a>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="blog-sec-02">
        <div className="wrap">
          <div className="eyebrow">The Coffee Finish Wrap Up</div>
          <h2 className="sec-title">You&#x27;ve done it!</h2>
          <p className="sec-intro">If you’ve made it this far, nice one! You officially know more about website design than 90% of your competitors.<br /><br />You don&#x27;t need to nail all 10 of these today. <br /><br />Honestly, if you just fix your &quot;thumb-sized&quot; buttons (<strong>Fitts&#x27;s Law</strong>) and stop trying to be &quot;creative&quot; with your menu (<strong>Jakob&#x27;s Law</strong>), you’re already winning.<br /><br />Your website is a tool, not an art project. Its job is to make your life easier and your customers&#x27; lives better. <br /><br />&gt; Don&#x27;t get in their way. <br />&gt;Keep it simple, keep it familiar, and for the love of all that is holy, make the buttons big enough to click.<br /><br />Now go finish that tea or coffee and go fix one thing. You’ve got this.</p>
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
