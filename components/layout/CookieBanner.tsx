/* =============================================================================
   COMPONENT: CookieBanner  (shared — root layout)
   Loads the same third-party cookie-consent widget the Webflow site used.
   NOTE: this widget is configured by domain on the provider's side, so it may
   need re-pointing to the new domain before go-live — flagged for review.
   ============================================================================= */

import Script from "next/script";

export function CookieBanner() {
  return (
    <Script
      src="https://cookie-consent-cdn-prod.pages.dev/cookie-consent/3.0.33/cookie-consent.js"
      integrity="sha384-hID7SQtXLqNKM1f6agvO2qhK2radQn5wf+Su4pAEM5ElgJ/FmSWXrmcaYP4/D3E0"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
