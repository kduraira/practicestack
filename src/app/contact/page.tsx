import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/forms/LeadForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consult or request a quote from PracticeStack. Managed IT and growth services for clinics.",
};

const resolveIntent = (value?: string) => {
  if (value === "consult" || value === "quote" || value === "contact") {
    return value;
  }
  return "contact";
};

type SearchParams = {
  intent?: string;
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) ?? {};
  const intent = resolveIntent(sp.intent);

  return (
    <div>
      <section className="section section-muted">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="eyebrow">Contact</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s map your clinic&apos;s next step.
            </h1>
            <p className="text-lg text-slate-600">
              Book a consult or request a quote. We respond within one business
              day with a clear path forward.
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Phone:</span>{" "}
                <a className="link-underline" href={`tel:${siteConfig.phone}`}>
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a className="link-underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Address:</span>{" "}
                {siteConfig.address}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Hours:</span>{" "}
                {siteConfig.businessHours}
              </p>
            </div>
            <div className="card card-hover text-sm text-slate-600">
              Emergency support is available for managed services customers. Please
              use the support portal for urgent requests.
            </div>
          </div>

          <div className="card bg-white">
            <LeadForm
              intent={intent}
              ctaLabel={
                intent === "consult"
                  ? "Book a consult"
                  : intent === "quote"
                  ? "Request a quote"
                  : "Send message"
              }
            />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper grid gap-6 lg:grid-cols-2">
          <div className="card card-hover">
            <h2 className="text-2xl font-semibold">Existing customers</h2>
            <p className="mt-3 text-sm text-slate-600">
              Raise support requests and access client resources through our
              dedicated portal.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={siteConfig.supportPortalUrl} className="btn btn-outline">
                Client Login
              </a>
              <a href={siteConfig.supportPortalUrl} className="btn btn-primary">
                Raise a support request
              </a>
            </div>
          </div>
          <div className="card card-hover">
            <h2 className="text-2xl font-semibold">Prospective clinics</h2>
            <p className="mt-3 text-sm text-slate-600">
              Not sure which service fits? Book a consult and we will map your
              priorities and options.
            </p>
            <Link href="/contact?intent=consult" className="btn btn-outline mt-4">
              Book a consult
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
