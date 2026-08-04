/* =============================================================================
   COMPONENT: Analytics  (shared — root layout)
   Google Analytics 4 (gtag.js) + the Webflow "developer_id" tag, carried over
   verbatim from the original site's <head>. Loaded after the page is interactive.
   ============================================================================= */

import Script from "next/script";
import { SITE } from "@/lib/site";

export function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('set', 'developer_id.${SITE.gaDeveloperId}', true);
gtag('js', new Date());
gtag('config', '${SITE.gaId}');`}
      </Script>
    </>
  );
}
