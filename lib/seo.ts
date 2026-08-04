/* =============================================================================
   SEO helper — builds a consistent Next.js Metadata object per page.
   Handles canonical URL, Open Graph and Twitter cards from a few inputs, so
   every page gets complete, correct social/SEO tags (the Webflow site was
   missing canonical + og:image site-wide — fixed here).
   ============================================================================= */

import type { Metadata } from "next";
import { SITE } from "./site";

export function pageMetadata(opts: {
  title: string;
  description?: string;
  /** Root-relative path, e.g. "/resources". */
  path: string;
  ogImage?: string;
}): Metadata {
  const description = opts.description ?? SITE.defaultDescription;
  const image = opts.ogImage ?? SITE.ogImage;
  return {
    title: opts.title,
    description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      url: opts.path,
      title: opts.title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description,
      images: [image],
    },
  };
}
