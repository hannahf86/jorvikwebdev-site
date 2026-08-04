/* =============================================================================
   COMPONENT: Footer  (shared — every page)
   Faithful port of the Webflow footer (original: index.html <footer class="footer">).
   The original also contained an empty, hidden Webflow CMS collection list
   (rendered "No items found.") — it produced no visible output, so it is omitted.
   ============================================================================= */

import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© 2026 Jorvik Web Dev · Made in York. Powered by tea.</div>
        <ul role="list" className="footer-links">
          {FOOTER_LINKS.map((link) =>
            "external" in link && link.external ? (
              <li key={link.label}>
                <a target="_blank" rel="noopener noreferrer" href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ) : link.href.startsWith("mailto:") ? (
              <li key={link.label}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <Link href={link.href} className="footer-link">
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </footer>
  );
}
