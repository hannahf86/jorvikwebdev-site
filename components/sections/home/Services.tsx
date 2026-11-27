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
          <div className="tab-btn tab-maint">Maintenance</div>
        </div>
        <div className="tab-panels">
          <div className="tab-panel panel-active panel-web">
            <p className="panel-strap">From a speedy launch to a fully bespoke build, websites that look great and actually do their job.</p>
            <div className="pay-intro">
              <h3 className="pay-intro-h">Choose how you pay</h3>
              <p className="pay-intro-p">Spread the cost across 2-6 months depending on the size of the project, no 50% deposit up front.</p>
            </div>
            <div className="price-grid-3">
              <div className="price-card">
                <h3 className="price-name">FastTrack</h3>
                <p className="price-blurb">Need a site live in a week? This is the one.</p>
                <div className="price-row"><span className="price-from">From</span><span className="price-value">£495</span></div>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Up to 5 pages</li>
                  <li className="price-li"><span className="tick-1">✓</span>On-page &amp; technical SEO</li>
                  <li className="price-li"><span className="tick-1">✓</span>Image optimisation</li>
                  <li className="price-li"><span className="tick-1">✓</span>One contact form</li>
                  <li className="price-li price-li-note">Copywriting &amp; content (you provide it, I build the moment it lands)</li>
                </ul>
                <a href="#contact" className="btn-outline-ink svc-website">Choose FastTrack</a>
              </div>
              <div className="price-featured">
                <div className="price-tag">Most popular</div>
                <h3 className="price-name-g">Brochure</h3>
                <p className="price-blurb">For small businesses who want the site working for them.</p>
                <div className="price-row"><span className="price-from">From</span><span className="price-value">£795</span></div>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Everything in FastTrack, plus...</li>
                  <li className="price-li"><span className="tick-1">✓</span>8 pages</li>
                  <li className="price-li"><span className="tick-1">✓</span>Easy content management system (blog, team, services etc)</li>
                  <li className="price-li"><span className="tick-1">✓</span>Integrations (MailerLite and HubSpot)</li>
                </ul>
                <a href="#contact" className="btn-card-primary svc-website">Choose Brochure</a>
              </div>
              <div className="price-card">
                <h3 className="price-name">Custom</h3>
                <p className="price-blurb">This could include web apps and e-commerce, priced and scoped per project</p>
                <div className="price-row"><span className="price-cta">Get in touch</span></div>
                <ul role="list" className="price-list">
                  <li className="price-li"><span className="tick-1">✓</span>Larger, bespoke sites</li>
                  <li className="price-li"><span className="tick-1">✓</span>Web apps</li>
                  <li className="price-li"><span className="tick-1">✓</span>E-commerce sites</li>
                  <li className="price-li"><span className="tick-1">✓</span>Custom code and integrations</li>
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
                <a href="#contact" className="btn-outline-ink svc-ux">Choose UX Deep Dive</a>
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
                <a href="#contact" className="btn-outline-ink svc-seo">Choose SEO Repair</a>
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
          <div className="tab-panel panel-maint">
            <p className="panel-strap">Need to keep your website active but don&#x27;t have time to do it yourself? I can do that for you!</p>
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
      </div>
    </section>
  );
}
