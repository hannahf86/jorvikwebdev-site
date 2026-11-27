"use client";

/* =============================================================================
   COMPONENT: PortfolioGallery (client)
   Renders grouped thumbnails of full-length design screenshots. Clicking a
   thumbnail opens a lightbox showing the image larger (scrollable for tall
   images); Escape, the close button or a click on the backdrop closes it.
   Images do not link anywhere — the only interaction is enlarge/close.
   ============================================================================= */

import { useCallback, useEffect, useState } from "react";

type Item = { src: string; alt: string; caption?: string };
export type PortfolioGroup = { title: string; blurb?: string; items: Item[] };

function ExpandIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </svg>
  );
}

export function PortfolioGallery({ groups }: { groups: PortfolioGroup[] }) {
  const [active, setActive] = useState<Item | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close]);

  return (
    <>
      {groups.map((group) => (
        <section key={group.title} className="pf-section">
          <div className="pf-wrap">
            <h2 className="pf-section-title">{group.title}</h2>
            {group.blurb ? <p className="pf-section-blurb">{group.blurb}</p> : null}
            <div className="pf-grid">
              {group.items.map((item) => (
                <figure className="pf-item" key={item.src}>
                  <button
                    type="button"
                    className="pf-thumb"
                    onClick={() => setActive(item)}
                    aria-label={`Enlarge design: ${item.alt}`}
                  >
                    <img src={item.src} alt={item.alt} loading="lazy" className="pf-thumb-img" />
                    <span className="pf-thumb-overlay" aria-hidden="true">
                      <ExpandIcon />
                    </span>
                  </button>
                  {item.caption ? <figcaption className="pf-caption">{item.caption}</figcaption> : null}
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      {active ? (
        <div
          className="pf-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <button type="button" className="pf-lightbox-close" onClick={close} aria-label="Close">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.src}
            alt={active.alt}
            className="pf-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
