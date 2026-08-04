/* =============================================================================
   Homepage JSON-LD — the rich ProfessionalService graph carried over verbatim
   from the Webflow site (services + prices + reviews + rating). Only change vs
   the original: the page `url` is now absolute (was "/").
   ============================================================================= */

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Web Design for Small Businesses | Jorvik Web Dev",
  description:
    "York-based web design studio building fast, eco-friendly Webflow websites for small businesses. Training included. No jargon, no surprise invoices.",
  url: "https://jorvikweb.dev/",
  inLanguage: "en",
  about: {
    "@type": "ProfessionalService",
    name: "Jorvik Web Dev",
    description:
      "York-based web design studio building fast, eco-friendly Webflow websites for small businesses. Training included. No jargon, no surprise invoices.",
    address: { "@type": "PostalAddress", addressLocality: "York", addressCountry: "GB" },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    founder: {
      "@type": "Person",
      name: "Hannah",
      jobTitle: "Founder, Designer, Developer",
      image: "https://cdn.prod.website-files.com/69a5814c0b7dbd384048041e/6a2a834581f2f6cdf88d7977_hannah-portrait.jpg",
      url: "https://hfdesign.co.uk",
    },
    email: "hello@jorvikweb.dev",
    priceRange: "££",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "FastTrack Website", description: "Need a site live in a week? Live within 7 working days. Up to 4 pages with on-page & technical SEO basics, schema markup, and image optimisation." }, price: "495", priceCurrency: "GBP" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brochure Website", description: "For small businesses who want the site working for them. Up to 7 pages with easy CMS, keyword research, and free Webflow tutorial included." }, price: "695", priceCurrency: "GBP" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Website", description: "E-commerce or something bigger and bolder. Larger, fully bespoke sites with custom integrations, full CMS, and built to grow with you." }, price: "1200", priceCurrency: "GBP" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UX Snapshot", description: "A friendly second opinion on your current site with personalised report and clear, prioritised fixes." }, price: "195", priceCurrency: "GBP" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UX Deep Dive", description: "Real answers about your users with competitor analysis, user research, journeys, empathy maps, and user flows." }, price: "600", priceCurrency: "GBP" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Repair", description: "Find out why it's not ranking then fix it. On & off-page SEO repaired with semantic headings, schema markup, and meta titles & descriptions." }, price: "345", priceCurrency: "GBP" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Keyword Research", description: "Target exactly the people you want to reach with keyword & long-tail phrase list and competitor analysis." }, price: "195", priceCurrency: "GBP" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Eco Hosting", description: "Green, reliable hosting at a price that's fixed forever." }, price: "12", priceCurrency: "GBP" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Webflow Tutorial", description: "Learn to run your own Webflow site with confidence. Free when you choose a Brochure package or above." }, price: "79", priceCurrency: "GBP" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design Basics", description: "Four hands-on hours for small businesses who want to design and tweak their own pages." }, price: "360", priceCurrency: "GBP" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Setup & Launch", description: "Two four-hour sessions to get your shop built, stocked and live — with you driving by the end." }, price: "650", priceCurrency: "GBP" },
      ],
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "4" },
    review: [
      { "@type": "Review", author: { "@type": "Person", name: "Emily" }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Hannah is so lovely to work with and really knows what she is talking about. She goes above and beyond with what you ask of her and I have definitely seen an improvement since her services." },
      { "@type": "Review", author: { "@type": "Person", name: "Simon" }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Hannah was so lovely to work with and really helped to improve our website. She is very knowledgeable and was very happy to help me learn a few things along the way. We have definitely seen an improvement with our response to the website. I will definitely be using Hannah again!" },
      { "@type": "Review", author: { "@type": "Person", name: "Paul" }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Efficient, professional, friendly and all at a reasonable price. Hannah was very easy to work with and did exactly what was required." },
      { "@type": "Review", author: { "@type": "Person", name: "Mike" }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Thanks for help with my new website from start to finish. Hannah was really helpful and made the whole process really easy… would highly recommend." },
    ],
  },
} as const;
