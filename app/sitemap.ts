/* =============================================================================
   sitemap.xml — canonical, indexable URLs only (apex host). The /policies/*
   pages are omitted: they canonicalize to their richer /legal/* equivalents.
   ============================================================================= */

import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const PATHS = [
  "/",
  "/find-my-web-design-service",
  "/latest-news",
  "/app-development",
  "/resources",
  "/tips-tricks",
  "/blog/ux-design-for-small-business-owners",
  "/news/lx-foundry-experience-day-patch-york",
  "/news/webflow-editor-changes",
  "/news/why-i-built-my-own-client-portal",
  "/news/mirian-building-a-debt-tracker-for-the-worst-day",
  "/legal/privacy-policy",
  "/legal/terms-conditions-jorvik-web-dev",
  "/legal/cookie-policy-jorvik-web-dev",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({
    url: `${SITE.url}${p === "/" ? "" : p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));
}
