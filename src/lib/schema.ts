import { siteConfig } from "@/lib/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: "https://practicestack.com.au",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: "Bentleigh",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "Victoria, Australia",
};

export const serviceSchema = (service: {
  name: string;
  description: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: "https://practicestack.com.au",
  },
  areaServed: "Victoria, Australia",
});

export const faqSchema = (
  faqs: { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
