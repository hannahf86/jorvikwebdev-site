/* ===== PAGE: Portfolio (/portfolio) ===== */

import { pageMetadata } from "@/lib/seo";
import { PortfolioGallery, type PortfolioGroup } from "@/components/sections/PortfolioGallery";

export const metadata = pageMetadata({
  title: "Portfolio | Jorvik Web Dev",
  description:
    "A look at recent website and app designs by Jorvik Web Dev. Click any design to see it full length.",
  path: "/portfolio",
});

/**
 * Portfolio groups. Each item is a full-length screenshot; clicking it opens a
 * lightbox. To add a design, drop its image in /public/images and add an entry.
 */
const GROUPS: PortfolioGroup[] = [
  {
    title: "Brochure websites",
    blurb: "Sites built to tell a story and bring people through the door.",
    items: [
      {
        src: "/images/portfolio-marginalia.webp",
        alt: "Marginalia bookshop and café landing page design",
        caption: "Marginalia — independent bookshop & café",
      },
      {
        src: "/images/portfolio-ninefold.webp",
        alt: "Ninefold gin distillery landing page design",
        caption: "Ninefold — small-batch gin distillery",
      },
      {
        src: "/images/portfolio-hollow-ash.webp",
        alt: "Hollow Ash dark sky glamping landing page design",
        caption: "Hollow Ash — dark sky glamping",
      },
      {
        src: "/images/portfolio-feelgood.webp",
        alt: "Feel Good Menopause landing page design",
        caption: "Feel Good Menopause — menopause education & training",
      },
      {
        src: "/images/portfolio-lucent.webp",
        alt: "Lucent biopharma medical affairs landing page design",
        caption: "Lucent — specialist medical expertise for biopharma",
      },
      {
        src: "/images/portfolio-youwillbe.webp",
        alt: "You Will Be CIC community arts landing page design",
        caption: "You Will Be CIC — creative community projects",
      },
      {
        src: "/images/portfolio-wardrobe.webp",
        alt: "The Beautiful Wardrobe Company landing page design",
        caption: "The Beautiful Wardrobe Company — bespoke fitted furniture",
      },
    ],
  },
  {
    title: "Dashboards & apps",
    blurb: "Calm, usable tools for the day-to-day — built around how people actually work.",
    items: [
      {
        src: "/images/portfolio-dash-enyn.webp",
        alt: "Enyn client and project dashboard design",
        caption: "Enyn — client & project dashboard",
      },
      {
        src: "/images/portfolio-dash-mirian.webp",
        alt: "Mirian debt tracker app design",
        caption: "Mirian — debt tracker app",
      },
      {
        src: "/images/portfolio-dash-lindon.webp",
        alt: "Lindon music teaching studio dashboard design",
        caption: "Lindon — music studio dashboard",
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="tt-hero">
        <div className="tt-wrap">
          <div className="tt-eyebrow">Portfolio</div>
          <h1 className="tt-hero-title">
            <span className="tt-hw tt-hw-w">A look at</span>
            <span className="tt-hw tt-hw-g">the work.</span>
          </h1>
          <p className="tt-hero-sub">
            A few recent website and app designs. Click any one to see it full length.
          </p>
        </div>
      </section>

      <PortfolioGallery groups={GROUPS} />
    </>
  );
}
