/* =============================================================================
   sitemap.xml — reproduces the live site's 14 URLs (apex host), including both
   the /legal/* and /policies/* policy sets.
   ============================================================================= */

import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const PATHS = [
  "/",
  "/find-my-web-design-service",
  "/latest-news",
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
  "/policies/privacy-policy",
  "/policies/terms-and-conditions",
  "/policies/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({
    url: `${SITE.url}${p === "/" ? "" : p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));
}
