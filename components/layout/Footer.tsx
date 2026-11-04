/* =============================================================================
   COMPONENT: Footer  (shared — every page)
   Two columns pushed to the far left and right: a main column (contact + site)
   and a legal column, each a vertical list, under the copyright line.
   ============================================================================= */

import Link from "next/link";
import { FOOTER_LINKS_MAIN, FOOTER_LINKS_LEGAL } from "@/lib/site";

type FooterLink =
  | (typeof FOOTER_LINKS_MAIN)[number]
  | (typeof FOOTER_LINKS_LEGAL)[number];

function renderFooterLink(link: FooterLink) {
  if ("external" in link && link.external) {
    return (
      <li key={link.label}>
        <a target="_blank" rel="noopener noreferrer" href={link.href} className="footer-link">
          {link.label}
        </a>
      </li>
    );
  }
  if (link.href.startsWith("mailto:")) {
    return (
      <li key={link.label}>
        <a href={link.href} className="footer-link">
          {link.label}
        </a>
      </li>
    );
  }
  return (
    <li key={link.label}>
      <Link href={link.href} className="footer-link">
        {link.label}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">© 2026 Jorvik Web Dev · Made in York. Powered by tea.</div>
        <div className="footer-cols">
          <ul role="list" className="footer-links footer-col">
            {FOOTER_LINKS_MAIN.map(renderFooterLink)}
          </ul>
          <ul role="list" className="footer-links footer-col">
            {FOOTER_LINKS_LEGAL.map(renderFooterLink)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
