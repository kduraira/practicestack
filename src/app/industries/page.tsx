import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/components/ui/CheckIcon";
import { blurDataUrl, imageLibrary } from "@/lib/images";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Managed IT and growth services for dental practices, GP clinics, and allied health providers.",
};

export default function IndustriesPage() {
  return (
    <div>
      <section className="section section-muted">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">Industries</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Focused on healthcare clinics with real uptime demands.
            </h1>
            <p className="text-lg text-slate-600">
              We start with dental practices and are expanding to GP and allied
              health clinics. The foundation remains the same: stable systems,
              reliable support, and accountable ownership.
            </p>
            <Link href="/contact?intent=consult" className="btn btn-primary">
              Book a consult
            </Link>
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

      <section className="section section-light">
        <div className="container-wrapper grid gap-6 lg:grid-cols-2">
          <div className="card card-hover space-y-4">
            <h2 className="text-2xl font-semibold">Dental Practices</h2>
            <p className="text-sm text-slate-600">
              We specialise in dental clinic workflows, chair-side reliability,
              and vendor coordination for imaging, practice management software,
              and oral health systems.
            </p>
            <ul className="list-check">
              {[
                "Chair-side device stability",
                "Imaging system coordination",
                "Reception and call flow support",
              ].map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card card-hover space-y-4">
            <h2 className="text-2xl font-semibold">Medical & GP Clinics</h2>
            <p className="text-sm text-slate-600">
              Designed for allied health and GP clinics that need reliable
              systems, secure access, and a single accountable IT partner.
            </p>
            <ul className="list-check">
              {[
                "Secure access and MFA",
                "Practice management system support",
                "Scalable multi-site readiness",
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
    </div>
  );
}
