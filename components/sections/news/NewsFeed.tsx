"use client";

/* =============================================================================
   COMPONENT: NewsFeed  (Latest News page)
   Client-side search + category filter over the news posts. Takes the posts as
   data and renders the same `tt-blog-card` markup the page used before, so the
   visual design is unchanged — just filterable. Posts are sorted newest-first.
   ============================================================================= */

import { useMemo, useState } from "react";
import Link from "next/link";
import type { NewsPost } from "@/lib/news";

export const NEWS_CATEGORIES = ["Behind the scenes", "Events", "Design", "Development"] as const;

export function NewsFeed({ posts }: { posts: NewsPost[] }) {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => active === "All" || p.category === active)
      .filter(
        (p) =>
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
      .sort((a, b) => b.dateISO.localeCompare(a.dateISO));
  }, [posts, active, query]);

  return (
    <>
      <div className="news-filter">
        <input
          type="search"
          className="news-search"
          placeholder="Search posts…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search posts"
        />
        <div className="news-chips" role="group" aria-label="Filter posts by category">
          {["All", ...NEWS_CATEGORIES].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`news-chip${active === cat ? " is-active" : ""}`}
              aria-pressed={active === cat}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="news-empty">No posts match that search or category just yet — try another.</p>
      ) : (
        <div className="div-block-15">
          {filtered.map((p) => (
            <div className="tt-blog-card" key={p.href}>
              <div className="tt-blog-thumb">
                <img
                  src={p.img.src}
                  loading="lazy"
                  alt=""
                  className="image-16"
                  {...(p.img.srcSet ? { srcSet: p.img.srcSet, sizes: p.img.sizes } : {})}
                />
              </div>
              <div className="tt-blog-body">
                <div className="div-block-17">
                  <div className="tt-blog-date">{p.date}</div>
                  <div className="tt-blog-meta">{p.category}</div>
                </div>
                <h3 className="tt-blog-title">{p.title}</h3>
                <p className="tt-blog-excerpt">{p.excerpt}</p>
                <Link href={p.href} className="tt-blog-footer">
                  <span>Read more →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
