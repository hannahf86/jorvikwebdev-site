/* =============================================================================
   ROOT LAYOUT — wraps every page.
   - Self-hosts Anton (headings) + Lato (body) via next/font (no external
     Google request; matches the "fast, eco-friendly" brand ethos).
   - Provides the shared Navbar + Footer + CookieBanner shell, plus Vercel
     Web Analytics + Speed Insights (replaced the old Google Analytics).
   - Sets site-wide default metadata (title/description/OG/Twitter/icons).
   ============================================================================= */

import type { Metadata } from "next";
import { Anton, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE } from "@/lib/site";

// Anton — display/headings (single weight 400).
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

// Lato — body (weights + italics used across the site).
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.defaultTitle, template: "%s" },
  description: SITE.defaultDescription,
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/webclip.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: [{ url: SITE.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: [SITE.ogImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${lato.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
