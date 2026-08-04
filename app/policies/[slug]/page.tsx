/* =============================================================================
   PAGE: Policy detail  (route: /policies/[slug])
   Renders a policy from the CMS content (content/policies/*.md) using the same
   minimal template the Webflow site used (a .w-richtext body). These URLs exist
   on the live site, so they're preserved — with the canonical pointing at the
   richer /legal/* equivalent to resolve the duplicate-content overlap.
   ============================================================================= */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicy, getPolicySlugs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

// Map each /policies/* slug to its canonical /legal/* page.
const LEGAL_CANONICAL: Record<string, string> = {
  "privacy-policy": "/legal/privacy-policy",
  "cookie-policy": "/legal/cookie-policy-jorvik-web-dev",
  "terms-and-conditions": "/legal/terms-conditions-jorvik-web-dev",
};

export function generateStaticParams() {
  return getPolicySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/policies/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const policy = getPolicy(slug);
  if (!policy) return {};
  const meta = pageMetadata({ title: `${policy.title} | Jorvik Web Dev`, path: `/policies/${slug}` });
  return { ...meta, alternates: { canonical: LEGAL_CANONICAL[slug] ?? `/policies/${slug}` } };
}

export default async function PolicyPage(props: PageProps<"/policies/[slug]">) {
  const { slug } = await props.params;
  const policy = getPolicy(slug);
  if (!policy) notFound();

  return (
    <section className="section-3">
      <div className="padding-global">
        <div className="container-medium">
          <div className="w-richtext" dangerouslySetInnerHTML={{ __html: policy.html }} />
        </div>
      </div>
    </section>
  );
}
