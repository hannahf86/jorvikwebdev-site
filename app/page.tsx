/* =============================================================================
   PAGE: Home  (route: /)
   Faithful port of index.html. Composes the sections in the original order and
   mounts the client-side GSAP animations + the contact modal. Section styling
   comes from the vendored Webflow CSS; behaviour from HomeAnimations.
   ============================================================================= */

import { Hero } from "@/components/sections/home/Hero";
import { Marquee } from "@/components/sections/home/Marquee";
import { Pain } from "@/components/sections/home/Pain";
import { Services } from "@/components/sections/home/Services";
import { About } from "@/components/sections/home/About";
import { Why } from "@/components/sections/home/Why";
import { Process } from "@/components/sections/home/Process";
import { Reviews } from "@/components/sections/home/Reviews";
import { LatestNews } from "@/components/sections/home/LatestNews";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";
import { Faq } from "@/components/sections/home/Faq";
import { Cta } from "@/components/sections/home/Cta";
import { HomeAnimations } from "@/components/animations/HomeAnimations";
import { ContactModal } from "@/components/layout/ContactModal";
import { JsonLd } from "@/components/JsonLd";
import { homeJsonLd } from "@/lib/homeJsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <Hero />
      <Marquee />
      <Pain />
      <Services />
      <About />
      <Why />
      <Process />
      <Reviews />
      <LatestNews />
      <NewsletterCta />
      <Faq />
      <Cta />

      {/* Client-side behaviour */}
      <HomeAnimations />
      <ContactModal />
    </>
  );
}
