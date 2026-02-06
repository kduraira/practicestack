import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blurDataUrl, imageLibrary } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founder-led managed services for clinics that value reliability, clarity, and accountability.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="section section-muted">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">About PracticeStack</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Founder-led, operator mindset.
            </h1>
            <p className="text-lg text-slate-600">
              PracticeStack is built for clinics that want calm, accountable IT.
              We work closely with owners and practice managers to stabilise,
              secure, and grow their operations.
            </p>
            <Link href="/contact?intent=consult" className="btn btn-primary">
              Book a consult
            </Link>
          </div>
          <div className="card-muted">
            <Image
              src={imageLibrary.consult.src}
              alt={imageLibrary.consult.alt}
              width={imageLibrary.consult.width}
              height={imageLibrary.consult.height}
              className="h-full w-full rounded-2xl object-cover"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Reliability",
              description:
                "We reduce downtime and prevent incidents through proactive care.",
            },
            {
              title: "Clarity",
              description:
                "Plain-language reporting, documented systems, and clear ownership.",
            },
            {
              title: "Accountability",
              description:
                "One point of contact across IT, web, and vendor coordination.",
            },
          ].map((value) => (
            <div key={value.title} className="card card-hover">
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-wrapper grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="eyebrow">How we work</p>
            <h2 className="text-3xl font-semibold">Structured, calm delivery.</h2>
            <p className="text-slate-600">
              Every engagement starts with discovery and stabilisation. We then
              establish security baselines, document the environment, and build a
              roadmap aligned to clinic goals.
            </p>
          </div>
          <div className="card card-hover">
            <p className="text-sm text-slate-600">
              We are not a break-fix provider. Our work is designed for long-term
              reliability and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper grid gap-6 lg:grid-cols-2">
          <div className="card card-hover">
            <h3 className="text-2xl font-semibold">Standards</h3>
            <p className="mt-3 text-sm text-slate-600">
              MFA everywhere, tested backups, least-privilege access, and
              documented changes. These are non-negotiable.
            </p>
          </div>
          <div className="card card-hover">
            <h3 className="text-2xl font-semibold">Boundaries</h3>
            <p className="mt-3 text-sm text-slate-600">
              Clinical software remains vendor-owned. PracticeStack coordinates
              resolution and keeps accountability centralised.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
