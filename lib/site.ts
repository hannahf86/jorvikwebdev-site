/* =============================================================================
   SITE CONSTANTS — single source of truth for site-wide values.
   Pull shared strings/URLs from here instead of hardcoding them per component.
   ============================================================================= */

export const SITE = {
  name: "Jorvik Web Dev",
  /** Canonical host — apex (www 301-redirects to apex on the live site). */
  url: "https://jorvikweb.dev",
  defaultTitle: "Web Design for Small Businesses | Jorvik Web Dev",
  defaultDescription:
    "York-based web design studio building fast, eco-friendly Webflow websites for small businesses. Training included. No jargon, no surprise invoices.",
  /** Public-facing email (standardised to .dev — the old site had a stray .co.uk in some JSON-LD). */
  email: "hello@jorvikweb.dev",
  /** Where contact-form submissions are emailed. */
  contactInbox: "hannah@jorvikweb.dev",
  /** Default social share image (og:image / twitter:image). */
  ogImage: "/images/JWD-Nav-Cover-1.png",
  /** Google Analytics 4 measurement id (carried over from the Webflow site). */
  gaId: "G-BH2VS891S8",
  /** Webflow "developer_id" analytics tag (preserved from the original). */
  gaDeveloperId: "dZGVlNj",
  calendly: "https://calendly.com/hannah-jwd/30min",
  developerPortfolio: "https://hfdesign.co.uk",
} as const;

/** Primary mega-menu links (was absolute https://jorvikweb.dev/#… on Webflow —
 *  converted to root-relative so they work on any deploy domain). */
export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Who Are We", href: "/#about" },
  { label: "Why Us", href: "/#why" },
  { label: "How It Works", href: "/#process" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Latest News", href: "/latest-news" },
  { label: "Get In Touch", href: "/#contact" },
] as const;

/** Secondary "card" links in the mega-menu. */
export const NAV_CARD_LINKS = [
  { label: "Resources", href: "/resources", className: "spark-large-card-link-2" },
  { label: "Tips & Tricks", href: "/tips-tricks", className: "spark-large-card-link-1 is-2" },
] as const;

/** Footer links (mirrors the original footer). */
export const FOOTER_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Developer portfolio", href: SITE.developerPortfolio, external: true },
  { label: SITE.email, href: `mailto:${SITE.email}` },
] as const;
