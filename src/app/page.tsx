import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/forms/LeadForm";
import JsonLd from "@/components/seo/JsonLd";
import CheckIcon from "@/components/ui/CheckIcon";
import { blurDataUrl, imageLibrary } from "@/lib/images";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
};

const faqItems = [
  {
    question: "Do you only work with dental practices?",
    answer:
      "We start with dental practices and are expanding to GP and allied health clinics. The focus remains on healthcare environments with strict uptime and privacy needs.",
  },
  {
    question: "How fast do you respond to support requests?",
    answer:
      "Critical issues are acknowledged within 30 minutes and triaged immediately. Lower priority requests are scheduled with clear timelines.",
  },
  {
    question: "Do you provide after-hours support?",
    answer:
      "Yes. After-hours coverage is included for urgent incidents, and planned maintenance happens outside clinic hours.",
  },
  {
    question: "Can you work with our software vendors?",
    answer:
      "Yes. We coordinate directly with clinical software and hardware vendors to resolve issues without finger-pointing.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "The first 90 days include discovery, stabilisation, security baselining, and documentation with clear milestones.",
  },
  {
    question: "Do you offer project work as well as managed services?",
    answer:
      "Yes. Projects are scoped separately, while managed services provide ongoing support, monitoring, and accountability.",
  },
];

export default function Home() {
  return (
    <div>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="section section-dark bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="container-wrapper grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="pill bg-white/10 text-white/80">
              Serving clinics across Victoria
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              IT that keeps your practice running.
            </h1>
            <p className="text-lg text-slate-200">
              PracticeStack delivers managed IT, security, and growth services for
              dental practices. Calm, accountable support with a single point of
              ownership.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact?intent=consult" className="btn btn-primary">
                Book a consult
              </Link>
              <Link
                href="/contact?intent=quote"
                className="btn btn-outline text-white border-white/30 hover:border-white"
              >
                Get a quote
              </Link>
              <a href={siteConfig.supportPortalUrl} className="btn btn-ghost">
                Client Login
              </a>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                "Premium support for healthcare workflows",
                "Vendor coordination handled end-to-end",
                "Security-first, compliance-ready operations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="card-muted bg-white/5">
            <Image
              src={imageLibrary.hero.src}
              alt={imageLibrary.hero.alt}
              width={imageLibrary.hero.width}
              height={imageLibrary.hero.height}
              className="h-full w-full rounded-2xl object-cover"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper space-y-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Trusted by growing clinics</p>
              <h2 className="text-3xl font-semibold">
                Social proof (placeholders)
              </h2>
            </div>
            <p className="text-sm text-slate-500">
              Replace with client logos and outcomes once available.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Dental group (3 sites)",
              "Boutique oral health clinic",
              "Specialist practice",
            ].map((label) => (
              <div key={label} className="card card-hover text-sm text-slate-600">
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-wrapper grid gap-8 lg:grid-cols-2">
          {[
            {
              title: "Managed IT for Clinics",
              description:
                "Reliable infrastructure, security baselines, and support that keeps your day running smoothly.",
              href: "/services",
            },
            {
              title: "Websites, SEO & Growth for Clinics",
              description:
                "Modern web experiences and marketing systems designed to convert and scale.",
              href: "/services",
            },
          ].map((pillar) => (
            <div key={pillar.title} className="card card-hover">
              <h3 className="text-2xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-slate-600">{pillar.description}</p>
              <Link
                href={pillar.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-700"
              >
                Explore services →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">What we take off your plate</p>
            <h2 className="text-3xl font-semibold">
              Clinic teams need focus. We remove the background noise.
            </h2>
            <ul className="list-check">
              {[
                "Vendor coordination",
                "After-hours incidents handled without disruption",
                "Planned maintenance outside clinic hours",
                "One accountable owner",
              ].map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-muted">
            <Image
              src={imageLibrary.ops.src}
              alt={imageLibrary.ops.alt}
              width={imageLibrary.ops.width}
              height={imageLibrary.ops.height}
              className="h-full w-full rounded-2xl object-cover"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-wrapper space-y-10">
          <div className="space-y-3">
            <p className="eyebrow">How support works</p>
            <h2 className="text-3xl font-semibold">
              A calm, predictable response every time.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              "Issue logged",
              "Triage and priority",
              "Resolution or workaround",
              "Root cause addressed and documented",
            ].map((step, index) => (
              <div key={step} className="card card-hover">
                <p className="text-sm text-emerald-700">Step {index + 1}</p>
                <p className="mt-3 text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
          <div className="card-muted flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-slate-900">
                Existing customers
              </p>
              <p className="text-sm text-slate-600">
                Log issues directly in the PracticeStack support portal.
              </p>
            </div>
            <a href={siteConfig.supportPortalUrl} className="btn btn-outline">
              Raise a support request
            </a>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="card-muted">
            <Image
              src={imageLibrary.network.src}
              alt={imageLibrary.network.alt}
              width={imageLibrary.network.width}
              height={imageLibrary.network.height}
              className="h-full w-full rounded-2xl object-cover"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
          </div>
          <div className="space-y-4">
            <p className="eyebrow">Security and reliability baseline</p>
            <h2 className="text-3xl font-semibold">
              Non-negotiables for healthcare environments.
            </h2>
            <ul className="list-check">
              {[
                "MFA everywhere",
                "Backups tested, not assumed",
                "Least-privilege access",
                "Documented environments and changes",
              ].map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-wrapper space-y-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="eyebrow">Single point of accountability</p>
              <h2 className="text-3xl font-semibold">
                One owner across IT, web, and vendors.
              </h2>
              <p className="text-slate-600">
                We coordinate all parties so your team is not stuck mediating
                between IT providers, web teams, and vendors.
              </p>
            </div>
            <div className="card card-hover">
              <p className="text-sm text-slate-600">
                No finger-pointing. Clear ownership, documented changes, and
                accountable delivery.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Your first 90 days",
                steps: [
                  "Week 1: discovery and stabilisation",
                  "Weeks 2–4: baseline security and backups",
                  "Months 2–3: optimisation and documentation",
                ],
              },
              {
                title: "Not for everyone",
                steps: [
                  "We are not a price-only or break-fix provider.",
                  "Our clients value long-term reliability and accountability.",
                  "If you want the cheapest bid, we are not the right fit.",
                ],
              },
              {
                title: "Quiet growth signal",
                steps: [
                  "Designed for single-site clinics today.",
                  "Structured to scale for multi-site practices tomorrow.",
                ],
              },
            ].map((card) => (
              <div key={card.title} className="card card-hover">
                <p className="text-lg font-semibold">{card.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {card.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper space-y-10">
          <div className="space-y-3">
            <p className="eyebrow">Service boundaries</p>
            <h2 className="text-3xl font-semibold">Clear scope, plain language.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card card-hover">
              <h3 className="text-xl font-semibold">Managed services</h3>
              <p className="mt-3 text-sm text-slate-600">
                Ongoing monitoring, support, and optimisation under a monthly
                agreement. We stay accountable for reliability and outcomes.
              </p>
            </div>
            <div className="card card-hover">
              <h3 className="text-xl font-semibold">Projects</h3>
              <p className="mt-3 text-sm text-slate-600">
                Scoped upgrades, migrations, and new builds delivered as fixed
                projects with clear milestones and handover.
              </p>
            </div>
            <div className="card card-hover lg:col-span-2">
              <h3 className="text-xl font-semibold">Clinical software ownership</h3>
              <p className="mt-3 text-sm text-slate-600">
                Core clinical software is owned by the vendor. PracticeStack
                coordinates resolution and ensures accountability without
                passing you around.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-wrapper space-y-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Services overview</p>
              <h2 className="text-3xl font-semibold">What we deliver.</h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-emerald-700"
            >
              View full service list →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Managed IT Support",
              "Network & WiFi",
              "Cyber Security",
              "Backups & Disaster Recovery",
              "Website Design & Development",
              "SEO for Clinics",
            ].map((service) => (
              <div key={service} className="card card-hover">
                <p className="text-sm font-semibold">{service}</p>
                <p className="mt-2 text-xs text-slate-500">
                  Structured delivery with a single point of accountability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper space-y-10">
          <div className="space-y-3">
            <p className="eyebrow">Case studies</p>
            <h2 className="text-3xl font-semibold">Results (placeholders)</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "3-site dental group stabilised in 30 days",
                outcome: "98.6% uptime after infrastructure refresh",
              },
              {
                title: "Boutique clinic cut ticket volume by 40%",
                outcome: "After-hours incidents resolved in under 2 hours",
              },
              {
                title: "Website rebuild lifted consult bookings 32%",
                outcome: "Conversion-focused pages and tracking",
              },
            ].map((caseStudy) => (
              <div key={caseStudy.title} className="card card-hover space-y-4">
                <Image
                  src={imageLibrary.caseStudy.src}
                  alt={imageLibrary.caseStudy.alt}
                  width={imageLibrary.caseStudy.width}
                  height={imageLibrary.caseStudy.height}
                  className="h-40 w-full rounded-2xl object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                />
                <div>
                  <p className="text-sm font-semibold">{caseStudy.title}</p>
                  <p className="mt-2 text-xs text-slate-500">
                    {caseStudy.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <p className="eyebrow">Frequently asked</p>
            <h2 className="text-3xl font-semibold">
              Clear answers before you commit.
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <div key={faq.question} className="card card-hover">
                  <p className="text-sm font-semibold text-slate-900">
                    {faq.question}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-muted space-y-4">
            <p className="eyebrow">Ready to talk</p>
            <h3 className="text-2xl font-semibold text-slate-900">
              Book a consult or request a quote.
            </h3>
            <p className="text-sm text-slate-600">
              We work with practice owners, managers, and lead clinicians to map
              priorities and build a calm support plan.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact?intent=consult" className="btn btn-primary">
                Book a consult
              </Link>
              <Link href="/contact?intent=quote" className="btn btn-outline">
                Get a quote
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              Prefer to speak now? Call{" "}
              <a className="link-underline" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phone}
              </a>
              .
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow text-emerald-200">Final step</p>
            <h2 className="text-3xl font-semibold text-white">
              Tell us about your clinic.
            </h2>
            <p className="text-slate-200">
              We respond within one business day with a clear next step. Existing
              customers should log support requests in the portal.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              Phone:{" "}
              <a
                className="link-underline text-white"
                href={`tel:${siteConfig.phone}`}
              >
                {siteConfig.phone}
              </a>
              <br />
              Email:{" "}
              <a
                className="link-underline text-white"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
          <div className="card bg-white">
            <LeadForm intent="consult" ctaLabel="Book a consult" />
          </div>
        </div>
      </section>
    </div>
  );
}
