/* =============================================================================
   News posts — single source of truth for the Latest News page feed AND the
   homepage "Latest news" band. Add/retag posts here; `category` must be one of
   NEWS_CATEGORIES (see NewsFeed) for the filter chips to match. You still create
   the article page itself under app/news/<slug>/ or app/blog/<slug>/.
   ============================================================================= */

export type NewsPost = {
  title: string;
  excerpt: string;
  href: string;
  /** Display date, e.g. "Mon 28th Sep '26". */
  date: string;
  /** ISO date for sorting, e.g. "2026-09-28". */
  dateISO: string;
  /** One of NEWS_CATEGORIES. */
  category: string;
  img: { src: string; srcSet?: string; sizes?: string };
};

export const NEWS_POSTS: NewsPost[] = [
  {
    title: "Mirian: Building a Debt Tracker for the Worst Day",
    excerpt:
      "Mirian is my own app under Sael North — a calm, shame-free debt tracker for neurodivergent people, designed for your worst day, not your best. Here's how it came about, and what that thinking means for your website too.",
    href: "/news/mirian-building-a-debt-tracker-for-the-worst-day",
    date: "Mon 28th Sep '26",
    dateISO: "2026-09-28",
    category: "Behind the scenes",
    img: { src: "/images/mirian-cover.png" },
  },
  {
    title: "Why I Built My Own Client Portal",
    excerpt:
      "For years my client projects lived across four tools, a busy inbox and a worrying amount of my own memory. So I built the JWD Client Portal — one calm place for every project. Here's why, and what it means for you.",
    href: "/news/why-i-built-my-own-client-portal",
    date: "Sat 12th Sep '26",
    dateISO: "2026-09-12",
    category: "Behind the scenes",
    img: { src: "/images/client-portal-cover.png" },
  },
  {
    title: "Webflow's Editor is Changing",
    excerpt:
      "On August 4th, Webflow is retiring its old Editor in favour of a new roles and seats system. Your site won't break, and for most teams this actually means better access and clearer permissions. Here's what you need to know.",
    href: "/news/webflow-editor-changes",
    date: "Tues 28th Jul '26",
    dateISO: "2026-07-28",
    category: "Development",
    img: { src: "/images/webflow-logo.svg" },
  },
  {
    title: "LX Foundry Experience Day",
    excerpt:
      "Recently, I was part of a small team who delivered some training to course providers, along with Enterprise Cube, Notch Media and Hello Technology at Patch in York",
    href: "/news/lx-foundry-experience-day-patch-york",
    date: "Tues 7th Jul '26",
    dateISO: "2026-07-07",
    category: "Events",
    img: {
      src: "/images/IMG_0045.webp",
      sizes: "(max-width: 5719px) 100vw, 5719px",
      srcSet:
        "/images/IMG_0045-p-500.webp 500w, /images/IMG_0045-p-800.webp 800w, /images/IMG_0045-p-1080.webp 1080w, /images/IMG_0045-p-1600.webp 1600w, /images/IMG_0045-p-2000.webp 2000w, /images/IMG_0045-p-2600.webp 2600w, /images/IMG_0045-p-3200.webp 3200w, /images/IMG_0045.webp 5719w",
    },
  },
];

/** The N most recent posts, newest first. */
export function getLatestPosts(n: number): NewsPost[] {
  return [...NEWS_POSTS].sort((a, b) => b.dateISO.localeCompare(a.dateISO)).slice(0, n);
}
