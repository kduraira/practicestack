import Link from "next/link";
import { siteConfig } from "@/lib/site";

const primaryCtas = [
  { label: "Book a consult", href: "/contact?intent=consult", variant: "primary" },
  { label: "Client Login", href: siteConfig.supportPortalUrl, variant: "outline" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-wrapper flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-semibold text-white">
              PS
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">
                {siteConfig.name}
              </p>
              <p className="text-xs text-slate-500">{siteConfig.tagline}</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {primaryCtas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={`btn ${cta.variant === "primary" ? "btn-primary" : "btn-outline"}`}
            >
              {cta.label}
            </Link>
          ))}
        </div>

        <details className="relative md:hidden">
          <summary className="btn btn-outline cursor-pointer list-none">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
            <nav className="flex flex-col gap-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-emerald-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2">
              {primaryCtas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={`btn w-full ${
                    cta.variant === "primary" ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
