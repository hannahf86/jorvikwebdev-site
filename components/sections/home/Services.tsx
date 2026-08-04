/* ===== COMPONENT: Services (home) — port of index.html <section id="services" class="sec-services"> ===== */

export function Services() {
  return (
    <section id="services" className="sec-services">
      <div className="wrap">
        <div className="eyebrow">Services &amp; pricing</div>
        <h2 className="sec-title">Honest prices, <span className="hl-green">on the website</span></h2>
        <p className="sec-intro">Like it&#x27;s totally normal. Because it should be. Pick a category and be confident in knowing every package comes with plain-English advice and zero pressure.</p>
        <div className="service-tabs">
          <div className="tab-btn tab-active tab-web">Web Design</div>
          <div className="tab-btn tab-ux">User Experience</div>
          <div className="tab-btn tab-seo">SEO</div>
          <div className="tab-btn tab-host">Hosting &amp; Admin</div>
          <div className="tab-btn tab-train">Training</div>
          <div className="tab-btn tab-maint">Maintenance</div>
        </div>
        <div className="tab-panels">
          <div className="tab-panel panel-active panel-web">
            <p className="panel-strap">From a speedy launch to a fully bespoke build, websites that look great and actually do their job.</p>
            <div className="price-grid-3">
              <div className="price-card">
                <h3 className="price-name">FastTrack</h3>
                <p className="price-blurb">Need a site live in a week? This is the one.</p>
                <div className="price-row"><span className="price-from">From</span><span className="price-value">£495</span></div>
                <p className="price-note">50% deposit · balance on launch</p>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Live within 7 working days</li>
                  <li className="price-li"><span className="tick-1">✓</span>Up to 4 pages, one clear call-to-action</li>
                  <li className="price-li"><span className="tick-1">✓</span>On-page &amp; technical SEO basics</li>
                  <li className="price-li"><span className="tick-1">✓</span>Image optimisation + meta titles &amp; descriptions</li>
                  <li className="price-li"><span className="tick-1">✓</span>Schema markup baked in</li>
                  <li className="price-li-x"><span className="dash">—</span>Copywriting &amp; content (you provide it we build the moment it lands)</li>
                </ul>
                <a href="#contact" className="btn-outline-ink svc-website">Choose FastTrack</a>
              </div>
              <div className="price-featured">
                <div className="price-tag">Most popular</div>
                <h3 className="price-name-g">Brochure</h3>
                <p className="price-blurb">For small businesses who want the site working for them.</p>
                <div className="price-row"><span className="price-from">From</span><span className="price-value">£695</span></div>
                <p className="price-note">Total divided over 2-3 months, no big deposit due</p>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Everything in FastTrack, plus...</li>
                  <li className="price-li"><span className="tick-1">✓</span>Up to 7 pages</li>
                  <li className="price-li"><span className="tick-1">✓</span>Easy CMS — blog, team, services &amp; more</li>
                  <li className="price-li"><span className="tick-1">✓</span>Simple integrations (e.g. MailerLite)</li>
                  <li className="price-li"><span className="tick-1">✓</span>Keyword research, done with you</li>
                  <li className="price-li"><span className="tick-1">✓</span>Free Webflow tutorial included</li>
                </ul>
                <a href="#contact" className="btn-card-primary svc-website">Choose Brochure</a>
              </div>
              <div className="price-card">
                <h3 className="price-name">Custom</h3>
                <p className="price-blurb">E-commerce or something bigger and bolder? Let&#x27;s build it.</p>
                <div className="price-row"><span className="price-from">GET In Touch</span></div>
                <p className="price-note">Scoped &amp; quoted to your project</p>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Larger, fully bespoke sites</li>
                  <li className="price-li"><span className="tick-1">✓</span>E-commerce ready</li>
                  <li className="price-li"><span className="tick-1">✓</span>Google Analytics &amp; Search Console set up</li>
                  <li className="price-li"><span className="tick-1">✓</span>Custom integrations &amp; custom code</li>
                  <li className="price-li"><span className="tick-1">✓</span>Full CMS for everything you publish</li>
                  <li className="price-li"><span className="tick-1">✓</span>Built to grow with you</li>
                </ul>
                <a href="#contact" className="btn-outline-ink svc-website">Choose Custom</a>
              </div>
            </div>
          </div>
          <div className="tab-panel panel-ux">
            <p className="panel-strap">Understand what your visitors really do — and make it easier for them to say yes.</p>
            <div className="price-grid-2">
              <div className="price-card">
                <h3 className="price-name">UX Snapshot</h3>
                <p className="price-blurb">A friendly second opinion on your current site.</p>
                <div className="price-row"><span className="price-from">From</span><span className="price-value">£195</span></div>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Personalised report you can actually action</li>
                  <li className="price-li"><span className="tick-1">✓</span>Clear, prioritised fixes</li>
                  <li className="price-li"><span className="tick-1">✓</span>Honest advice — never a sales pitch</li>
                </ul>
                <a href="#contact" className="btn-outline-ink svc-ux">Choose UX Snapshot</a>
              </div>
              <div className="price-card">
                <h3 className="price-name">UX Deep Dive</h3>
                <p className="price-blurb">When you need real answers about your users.</p>
                <div className="price-row"><span className="price-from">From</span><span className="price-value">£600</span></div>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Competitor &amp; keyword analysis</li>
                  <li className="price-li"><span className="tick-1">✓</span>User research, journeys &amp; empathy maps</li>
                  <li className="price-li"><span className="tick-1">✓</span>User flows &amp; pain-point mapping</li>
                  <li className="price-li"><span className="tick-1">✓</span>Personalised report with next steps</li>
                  <li className="price-li"><span className="tick-1">✓</span>Advice only — no upsell</li>
                </ul>
                <a href="#contact" className="btn-teal svc-ux">Choose UX Deep Dive</a>
              </div>
            </div>
          </div>
          <div className="tab-panel panel-seo">
            <p className="panel-strap">Get found by the people already looking for you — with honest fixes, not jargon.</p>
            <div className="price-grid-2">
              <div className="price-card">
                <h3 className="price-name">SEO Repair</h3>
                <p className="price-blurb">Find out why it&#x27;s not ranking — then fix it.</p>
                <div className="price-row"><span className="price-from">From</span><span className="price-value">£345</span></div>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>On &amp; off-page SEO repaired</li>
                  <li className="price-li"><span className="tick-1">✓</span>Semantic headings &amp; schema markup</li>
                  <li className="price-li"><span className="tick-1">✓</span>Meta titles &amp; descriptions tidied</li>
                  <li className="price-li"><span className="tick-1">✓</span>Report with clear next steps</li>
                  <li className="price-li"><span className="tick-1">✓</span>No selling, just fixes</li>
                </ul>
                <a href="#contact" className="btn-teal svc-seo">Choose SEO Repair</a>
              </div>
              <div className="price-card">
                <h3 className="price-name">Keyword Research</h3>
                <p className="price-blurb">Target exactly the people you want to reach.</p>
                <div className="price-row"><span className="price-value">£195</span></div>
                <p className="price-note">Fixed price</p>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Keyword &amp; long-tail phrase list</li>
                  <li className="price-li"><span className="tick-1">✓</span>Competitor analysis</li>
                  <li className="price-li"><span className="tick-1">✓</span>Personalised, ready-to-use report</li>
                </ul>
                <a href="#contact" className="btn-outline-ink svc-seo">Choose Keyword Research</a>
              </div>
            </div>
          </div>
          <div className="tab-panel panel-host">
            <p className="panel-strap">Looked-after, eco-friendly hosting, domains sorted properly, and hands-on help with the fiddly setup jobs that never quite behave themselves.</p>
            <div className="mini-grid">
              <div className="mini-card">
                <div className="mini-icon-service-div"><img src="/images/leaf-1.svg" loading="lazy" alt="" className="mini-icon-service" /></div>
                <h4 className="mini-h">Eco Hosting</h4>
                <p className="mini-price">£12 / month</p>
                <p className="card-p">Green, reliable hosting at a price that&#x27;s fixed forever — unless our own costs go up, and we&#x27;ll always tell you why.</p>
                <a href="#contact" className="btn-card-primary svc-hosting">Get hosting sorted →</a>
              </div>
              <div className="mini-card">
                <div className="mini-icon-service-div"><img src="/images/domain.svg" loading="lazy" alt="" className="mini-icon-service" /></div>
                <h4 className="mini-h">Domain Setup</h4>
                <p className="mini-price">£20 / year</p>
                <p className="card-p">Sorted through Krystal.io, with a tree planted in your name. Tidy, eco-friendly, and one less thing to worry about.</p>
                <a href="#contact" className="btn-card-primary svc-hosting">Grab your domain →</a>
              </div>
              <div className="mini-card">
                <div className="mini-icon-service-div"><img src="/images/repair.svg" loading="lazy" alt="" className="mini-icon-service" /></div>
                <h4 className="mini-h">Admin &amp; IT Fixes</h4>
                <p className="mini-price">Get a quote for your job</p>
                <p className="card-p">Setup and untangling for Google Analytics, Search Console, HubSpot and the rest of the tools.</p>
                <a href="#contact" className="btn-card-primary svc-hosting">L →</a>
              </div>
            </div>
          </div>
          <div className="tab-panel panel-train">
            <p className="panel-strap">Prefer to take the wheel? Friendly, practical training so you can run things yourself.</p>
            <div className="mini-grid">
              <div className="mini-card">
                <div className="mini-icon-service-div"><img src="/images/webflow.svg" loading="lazy" alt="" className="mini-icon-service" /></div>
                <h4 className="mini-h">Webflow Tutorial</h4>
                <p className="mini-price">£79</p>
                <p className="card-p">Learn to run your own Webflow site with confidence. Free when you choose a Brochure package or above.</p>
              </div>
              <div className="mini-card">
                <div className="mini-icon-service-div"><img src="/images/design-setting.svg" loading="lazy" alt="" className="mini-icon-service" /></div>
                <h4 className="mini-h">Web Design Basics</h4>
                <p className="mini-price">£360</p>
                <p className="card-p">Four hands-on hours for small businesses who want to design and tweak their own pages.</p>
              </div>
              <div className="mini-card">
                <div className="mini-icon-service-div"><img src="/images/shopify.svg" loading="lazy" alt="" className="mini-icon-service" /></div>
                <h4 className="mini-h">Shopify Setup &amp; Launch</h4>
                <p className="mini-price">£650</p>
                <p className="card-p">Two four-hour sessions to get your shop built, stocked and live — with you driving by the end.</p>
              </div>
            </div>
            <a href="#contact" className="btn-card-primary svc-training">Book a training session →</a>
          </div>
          <div className="tab-panel panel-maint">
            <p className="panel-strap">Need to keep your website active but don&#x27;t have time to do it yourself? We can do that for you!</p>
            <div className="price-grid-3">
              <div className="price-card">
                <h3 className="price-name">Watch</h3>
                <p className="price-blurb">No active work done on the site but access to JWD for priority work.</p>
                <div className="price-row"><span className="price-value">£25</span></div>
                <p className="price-note">paid monthly</p>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Uptime monitoring</li>
                  <li className="price-li"><span className="tick-1">✓</span>Peace of mind check-ins</li>
                  <li className="price-li"><span className="tick-1">✓</span>3 day response time</li>
                  <li className="price-li"><span className="tick-1">✓</span>Security monitoring and updates</li>
                </ul>
                <a href="#contact" className="btn-outline-ink svc-website">Choose Watch</a>
              </div>
              <div className="price-featured">
                <div className="price-tag">Most popular</div>
                <h3 className="price-name-g">Maintain</h3>
                <p className="price-blurb">Small monthly updates (events and bookings, product updates etc).</p>
                <div className="price-row"><span className="price-value">£55</span></div>
                <p className="price-note">paid monthly</p>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Everything in WATCH, plus...</li>
                  <li className="price-li"><span className="tick-1">✓</span>1 hour of updates per month</li>
                  <li className="price-li"><span className="tick-1">✓</span>Monthly summary of work complete</li>
                </ul>
                <a href="#contact" className="btn-card-primary svc-website">Choose Maintain</a>
              </div>
              <div className="price-card">
                <h3 className="price-name">Grow</h3>
                <p className="price-blurb">Continous and substantial website updates and monitoring.</p>
                <div className="price-row"><span className="price-value">£95</span></div>
                <p className="price-note">paid monthly</p>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Everything in MAINTAIN, plus...</li>
                  <li className="price-li"><span className="tick-1">✓</span>3 hours of updates</li>
                  <li className="price-li"><span className="tick-1">✓</span>Priority response time</li>
                  <li className="price-li"><span className="tick-1">✓</span>Monthly performance report</li>
                  <li className="price-li"><span className="tick-1">✓</span>Quarterly strategy chat</li>
                </ul>
                <a href="#contact" className="btn-outline-ink svc-website">Choose Grow</a>
              </div>
            </div>
            <a href="#contact" className="btn-card-primary svc-maint">Get covered →</a>
          </div>
        </div>
        <p className="panel-footnote">Not sure which fits? <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/hannah-jwd/30min" className="kicker-link">Book a free chat</a> — we&#x27;ll point you at the cheapest thing that solves your problem. Yes, really.</p>
      </div>
    </section>
  );
}
