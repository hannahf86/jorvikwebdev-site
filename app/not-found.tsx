/* ===== PAGE: 404 Not Found — port of 404.html main content ===== */

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="utility_component">
      <div className="utility_form-block w-form"><img src="https://d3e54v103j8qbb.cloudfront.net/static/page-not-found.211a85e40c.svg" alt="" className="utility_image" />
        <h3>Page Not Found</h3>
        <div className="padding-xxsmall"></div>
        <div>The page you are looking for doesn&#x27;t exist or has been moved</div>
        <div className="padding-xxsmall"></div>
        <Link href="/" className="secondary-btn w-button">Go Home</Link>
      </div>
    </div>
  );
}
