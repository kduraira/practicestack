export const siteConfig = {
  name: "PracticeStack",
  tagline: "IT that keeps your practice running.",
  description:
    "PracticeStack provides managed IT, security, and growth services for dental and healthcare clinics across Victoria. Calm, accountable support that keeps your practice running.",
  phone: "1300 782 548",
  email: "hello@practicestack.com.au",
  address: "5 Tucker Rd, Bentleigh VIC 3204, Australia",
  serviceArea: "Serving practices across Victoria",
  businessHours: "Mon–Fri, 8:30am–6:00pm AEST",
  supportPortalUrl:
    process.env.NEXT_PUBLIC_SUPPORT_PORTAL_URL ??
    "https://support.practicestack.com.au",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
