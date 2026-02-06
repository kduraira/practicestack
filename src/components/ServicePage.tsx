import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/components/ui/CheckIcon";
import { blurDataUrl, imageLibrary } from "@/lib/images";

interface ServicePageProps {
  title: string;
  summary: string;
  who: string[];
  problems: string[];
  included: string[];
  response: string[];
  pricing: string[];
  categoryLabel: string;
}

export default function ServicePage({
  title,
  summary,
  who,
  problems,
  included,
  response,
  pricing,
  categoryLabel,
}: ServicePageProps) {
  return (
    <div>
      <section className="section section-muted">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">{categoryLabel}</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="text-lg text-slate-600">{summary}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact?intent=consult" className="btn btn-primary">
                Book a consult
              </Link>
              <Link href="/contact?intent=quote" className="btn btn-outline">
                Get a quote
              </Link>
            </div>
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
        <div className="container-wrapper grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="eyebrow">Who it&apos;s for</p>
            <h2 className="text-3xl font-semibold">Designed for clinics that need calm, consistent support.</h2>
            <ul className="list-check">
              {who.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="eyebrow">Problems solved</p>
            <h2 className="text-3xl font-semibold">Remove the noise and keep your team focused on patients.</h2>
            <ul className="list-check">
              {problems.map((item) => (
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
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="eyebrow">What&apos;s included</p>
            <h2 className="text-3xl font-semibold">Clear inclusions and transparent handover.</h2>
            <ul className="list-check">
              {included.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card bg-white">
            <p className="eyebrow">Response expectations</p>
            <h3 className="text-2xl font-semibold text-slate-900">
              Predictable response without disruption.
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {response.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="eyebrow">Pricing bands</p>
            <h2 className="text-3xl font-semibold">Transparent ranges to align scope.</h2>
            <p className="text-slate-600">
              Final pricing depends on clinic size, complexity, and onboarding effort.
            </p>
            <div className="space-y-3">
              {pricing.map((item) => (
                <div key={item} className="card card-hover">
                  <p className="text-sm font-semibold text-slate-900">{item}</p>
                  <p className="text-xs text-slate-500">
                    Includes proactive monitoring and priority support.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-muted space-y-4">
            <p className="eyebrow">Next step</p>
            <h3 className="text-2xl font-semibold text-slate-900">
              Let&apos;s map your current environment.
            </h3>
            <p className="text-sm text-slate-600">
              We will scope systems, align stakeholders, and deliver a clear plan before any long-term commitment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact?intent=consult" className="btn btn-primary">
                Book a consult
              </Link>
              <Link href="/contact?intent=quote" className="btn btn-outline">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
