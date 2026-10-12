/* =============================================================================
   COMPONENT: LatestNews (home)
   Homepage band showing the three most recent news posts (shared data from
   lib/news), with a link through to the full /latest-news page. Reuses the
   `tt-blog-card` design so it matches the Latest News listing exactly. Sits
   between the Reviews and the newsletter/CTA sections.
   ============================================================================= */

import Link from "next/link";
import { getLatestPosts } from "@/lib/news";

export function LatestNews() {
  const posts = getLatestPosts(3);
  return (
    <section className="home-news">
      <div className="tt-wrap">
        <h2 className="tt-sec-title">Latest <span className="tt-hl-g">news</span></h2>
        <div className="div-block-15">
          {posts.map((p) => (
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
        <div className="home-news-more">
          <Link href="/latest-news" className="btn-primary">See all news →</Link>
        </div>
      </div>
    </section>
  );
}
