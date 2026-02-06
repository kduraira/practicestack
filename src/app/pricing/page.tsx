import type { Metadata } from "next";
import Link from "next/link";
import CheckIcon from "@/components/ui/CheckIcon";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for managed IT services, web retainers, and project work for clinics.",
};

const tiers = [
  {
    name: "Essential",
    price: "From $1,200/mo",
    description: "Foundational monitoring and support for single-site clinics.",
    features: [
      "Business hours support",
      "Core monitoring and patching",
      "Vendor coordination",
      "Monthly reporting",
    ],
  },
  {
    name: "Plus",
    price: "From $2,100/mo",
    description: "Expanded coverage and proactive security baselines.",
    features: [
      "Priority response windows",
      "Security baselines + MFA",
      "Backup verification",
      "Quarterly optimisation",
    ],
  },
  {
    name: "Premium",
    price: "From $3,400/mo",
    description: "Multi-site readiness and deeper strategic support.",
    features: [
      "After-hours incident response",
      "Dedicated success lead",
      "Advanced security monitoring",
      "Strategic technology roadmap",
    ],
  },
];

const growthPlans = [
  {
    name: "Website care plan",
    price: "From $490/mo",
    includes: ["Content updates", "Performance monitoring", "Security patches"],
  },
  {
    name: "SEO retainer",
    price: "From $1,200/mo",
    includes: ["Local SEO", "Technical fixes", "Content planning"],
  },
  {
    name: "Google Ads management",
    price: "From $900/mo + ad spend",
    includes: ["Campaign optimisation", "Landing page insights", "Reporting"],
  },
];

export default function PricingPage() {
  return (
    <div>
      <section className="section section-muted">
        <div className="container-wrapper space-y-6">
          <p className="eyebrow">Pricing</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Transparent ranges for calm, accountable support.
          </h1>
          <p className="text-lg text-slate-600">
            Pricing scales with clinic size and complexity. We scope every engagement
            so you know exactly what is included.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper space-y-8">
          <div>
            <p className="eyebrow">Managed services tiers</p>
            <h2 className="text-3xl font-semibold">Choose the level of coverage.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className="card card-hover space-y-4">
                <div>
                  <p className="text-xl font-semibold">{tier.name}</p>
                  <p className="text-sm text-slate-600">{tier.description}</p>
                </div>
                <p className="text-2xl font-semibold text-slate-900">{tier.price}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact?intent=quote" className="btn btn-outline">
                  Request pricing
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-wrapper space-y-8">
          <div>
            <p className="eyebrow">Web & Growth retainers</p>
            <h2 className="text-3xl font-semibold">Support that compounds.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {growthPlans.map((plan) => (
              <div key={plan.name} className="card card-hover space-y-4">
                <p className="text-lg font-semibold">{plan.name}</p>
                <p className="text-xl font-semibold text-slate-900">{plan.price}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper grid gap-6 lg:grid-cols-2">
          <div className="card card-hover">
            <h3 className="text-2xl font-semibold">Projects</h3>
            <p className="mt-3 text-sm text-slate-600">
              One-time upgrades, migrations, or new builds scoped with fixed
              deliverables and timelines.
            </p>
          </div>
          <div className="card card-hover">
            <h3 className="text-2xl font-semibold">Managed services</h3>
            <p className="mt-3 text-sm text-slate-600">
              Ongoing ownership, monitoring, and continuous improvement with a
              single point of accountability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
