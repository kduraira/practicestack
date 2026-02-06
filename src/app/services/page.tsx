import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blurDataUrl, imageLibrary } from "@/lib/images";
import { growthServices, itServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Managed IT, cybersecurity, and growth services for dental and healthcare clinics across Victoria.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="section section-muted">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">Services</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Managed IT and growth systems built for clinics.
            </h1>
            <p className="text-lg text-slate-600">
              Two pillars: operational reliability and growth. We align both under a
              single accountable owner.
            </p>
          </div>
          <div className="card-muted">
            <Image
              src={imageLibrary.support.src}
              alt={imageLibrary.support.alt}
              width={imageLibrary.support.width}
              height={imageLibrary.support.height}
              className="h-full w-full rounded-2xl object-cover"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper space-y-8">
          <div className="space-y-2">
            <p className="eyebrow">IT Services</p>
            <h2 className="text-3xl font-semibold">Operational reliability</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {itServices.map((service) => (
              <div key={service.slug} className="card card-hover">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
                <Link
                  href={`/services/it/${service.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-700"
                >
                  View service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-wrapper space-y-8">
          <div className="space-y-2">
            <p className="eyebrow">Web & Growth</p>
            <h2 className="text-3xl font-semibold">Visibility and demand</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {growthServices.map((service) => (
              <div key={service.slug} className="card card-hover">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
                <Link
                  href={`/services/web/${service.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-700"
                >
                  View service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
