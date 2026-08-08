"use client";

/* =============================================================================
   COMPONENT: Navbar  (shared — every page)
   -----------------------------------------------------------------------------
   Faithful port of the Webflow "spark" mega-menu takeover nav
   (original: index.html <div class="hannah-s-nav-bar-2 w-nav">).
   The menu is collapsed at ALL breakpoints and opened by the hamburger button
   as a full-screen takeover. Webflow's runtime did this by toggling
   `data-nav-menu-open` on the menu + `w--open` on the button — reimplemented
   here as React state so we don't need Webflow's 1.5MB webflow.js.
   ============================================================================= */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { NAV_LINKS, NAV_CARD_LINKS, SITE } from "@/lib/site";

/** Repeated chevron icon used on every mega-nav link. */
function NavLinkChevron() {
  return (
    <div className="spark-icon spark-large-icon w-embed">
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z" fill="currentColor" />
      </svg>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  // Lock body scroll while the takeover menu is open (matches Webflow behaviour).
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Animate the takeover menu IN when it opens, with GSAP. Show/hide (display)
  // is driven by React via the `data-nav-menu-open` attribute below — reliable
  // and impossible to leave stuck — while GSAP just layers a fade + slide + a
  // staggered reveal of the links on top. Closing is immediate (React removes
  // the attribute). prefers-reduced-motion skips the animation entirely.
  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    if (!menu) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = menu.querySelectorAll(".spark-mega-nav-link-2, .spark-hold-card-links > a");
    gsap.killTweensOf([menu, ...items]);
    const tl = gsap.timeline();
    tl.fromTo(menu, { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" });
    tl.fromTo(
      items,
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.05, ease: "power3.out" },
      "-=0.28"
    );
    return () => {
      tl.kill();
      gsap.set([menu, ...items], { clearProps: "opacity,visibility,transform" });
    };
  }, [open]);

  return (
    <div
      data-collapse="all"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="hannah-s-nav-bar-2 w-nav"
    >
      <div className="spark-square-menu-inner spark-full-width-nav">
        {/* --- Logo --- */}
        <div id="home" className="div-block-13">
          <img loading="lazy" src="/images/Logo-white-bg.png" alt="" className="image-12" />
          <Link href="/" aria-current="page" className="nav-logo w--current">
            JORVIK <span className="nav-logo-accent">WEB.DEV</span>
          </Link>
        </div>

        {/* --- Mega-menu takeover (shown when `open`) --- */}
        <nav
          ref={menuRef}
          role="navigation"
          className="spark-mega-menu-take-over-2 w-nav-menu"
          {...(open ? { "data-nav-menu-open": "" } : {})}
        >
          <div className="spark-container-2 spark-flexed">
            <div className="spark-mega-nav-link-list">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="spark-mega-nav-link-2 w-inline-block"
                  onClick={() => setOpen(false)}
                >
                  <p className="spark-mega-nav-link-label">{link.label}</p>
                  <NavLinkChevron />
                </Link>
              ))}
            </div>
            <div className="spark-hold-card-links">
              {NAV_CARD_LINKS.map((card) => (
                <Link
                  key={card.label}
                  href={card.href}
                  className={`${card.className} w-inline-block`}
                  onClick={() => setOpen(false)}
                >
                  <p className="spark-sub-text-in-card-link-2">{card.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* --- Right side: Calendly CTA + hamburger --- */}
        <div className="div-block-14">
          <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary w-button">
            Book a call
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`spark-simple-menu-button-3 w-nav-button${open ? " w--open" : ""}`}
          >
            <div className="spark-line-7 spark-simple-line" />
            <div className="spark-line-8 spark-simple-line" />
            <div className="spark-line-3 spark-simple-line" />
          </button>
        </div>
      </div>
    </div>
  );
}
