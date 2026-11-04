import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The old /policies/* pages were removed; 301 them to the canonical /legal/* pages.
    return [
      { source: "/policies/privacy-policy", destination: "/legal/privacy-policy", permanent: true },
      { source: "/policies/cookie-policy", destination: "/legal/cookie-policy-jorvik-web-dev", permanent: true },
      { source: "/policies/terms-and-conditions", destination: "/legal/terms-conditions-jorvik-web-dev", permanent: true },
    ];
  },
};

export default nextConfig;
