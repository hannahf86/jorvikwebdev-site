/* ===== PAGE: App Development (/app-development) ===== */

import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";

export const metadata = pageMetadata({
  title: "App Development — Apps built by Jorvik Web Dev",
  description:
    "A growing collection of apps designed and built by Jorvik Web Dev — some live, some still in development.",
  path: "/app-development",
});

/**
 * One entry per app. To finish a card, fill in:
 *  - purpose : the short line shown where a blog card shows its category/date (what the app is for)
 *  - intro   : a sentence or two describing the app
 *  - image   : path under /public/images (leave null for the placeholder thumbnail)
 *  - srcSet  : optional responsive srcSet string for the image
 *  - href    : the app's link. Leave null and the card shows "App in development".
 *              Use `external: true` for an off-site app link.
 */
const APPS: {
  name: string;
  purpose: string;
  intro: string;
  image: string | null;
  srcSet?: string;
  href: string | null;
  external?: boolean;
}[] = [
  {
    name: "Mirian",
    purpose: "Shame-free debt tracker",
    intro:
      "My own app under Sael North — a calm, shame-free debt tracker for neurodivergent people, designed for your worst day, not your best.",
    image: "/images/project-mirian.webp",
    srcSet:
      "/images/project-mirian-p-500.webp 500w, /images/project-mirian-p-800.webp 800w, /images/project-mirian-p-1080.webp 1080w, /images/project-mirian.webp 1366w",
    href: null,
  },
  {
    name: "Lindon",
    purpose: "Coming soon",
    intro: "Details coming soon.",
    image: null,
    href: null,
  },
  {
    name: "Enyn",
    purpose: "Coming soon",
    intro: "Details coming soon.",
    image: null,
    href: null,
  },
  {
    name: "Tiro",
    purpose: "Coming soon",
    intro: "Details coming soon.",
    image: null,
    href: null,
  },
  {
    name: "Mereth",
    purpose: "Coming soon",
    intro: "Details coming soon.",
    image: null,
    href: null,
  },
];

export default function AppDevelopmentPage() {
  return (
    <>
      <section className="tt-hero">
        <div className="tt-wrap">
          <div className="tt-eyebrow">App Development</div>
          <h1 className="tt-hero-title">
            <span className="tt-hw tt-hw-w">Apps built</span>
            <span className="tt-hw tt-hw-g">with care.</span>
          </h1>
          <p className="tt-hero-sub">
            A growing collection of apps I&#x27;ve designed and built — some live, some still in
            development. Calm, useful tools made the same way I build websites: for real people, not edge cases.
          </p>
        </div>
      </section>

      <section className="section-2">
        <div className="tt-wrap">
          <h2 className="tt-sec-title">The <span className="tt-hl-g">apps</span></h2>
          <div className="div-block-15">
            {APPS.map((app) => (
              <div className="tt-blog-card" key={app.name}>
                <div className="tt-blog-thumb">
                  {app.image ? (
                    <img
                      src={app.image}
                      loading="lazy"
                      srcSet={app.srcSet}
                      alt={`${app.name} app by Jorvik Web Dev`}
                      className="image-16"
                    />
                  ) : null}
                </div>
                <div className="tt-blog-body">
                  <div className="tt-blog-meta">{app.purpose}</div>
                  <h3 className="tt-blog-title">{app.name}</h3>
                  <p className="tt-blog-excerpt">{app.intro}</p>
                  {app.href ? (
                    app.external ? (
                      <a
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tt-blog-footer"
                      >
                        <span>Open app →</span>
                      </a>
                    ) : (
                      <Link href={app.href} className="tt-blog-footer">
                        <span>Open app →</span>
                      </Link>
                    )
                  ) : (
                    <span className="tt-blog-footer tt-blog-footer-dev">App in development</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterCta />
    </>
  );
}
