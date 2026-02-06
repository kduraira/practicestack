import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container-wrapper grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <div>
            <p className="text-lg font-semibold text-white">
              {siteConfig.name}
            </p>
            <p className="text-sm text-slate-300">{siteConfig.tagline}</p>
          </div>
          <p className="text-sm text-slate-300">{siteConfig.description}</p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              <a className="link-underline" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a className="link-underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            <p className="text-slate-300">{siteConfig.address}</p>
            <p className="text-slate-300">{siteConfig.serviceArea}</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Explore
          </p>
          <nav className="flex flex-col gap-3 text-sm">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Existing customers
          </p>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              Client Login and support requests are handled through our secure
              helpdesk.
            </p>
            <div className="flex flex-col gap-2">
              <a
                className="btn btn-outline text-white border-white/30 hover:border-white"
                href={siteConfig.supportPortalUrl}
              >
                Client Login
              </a>
              <a
                className="btn btn-outline text-white border-white/30 hover:border-white"
                href={siteConfig.supportPortalUrl}
              >
                Raise a support request
              </a>
            </div>
            <p className="text-xs text-slate-400">
              Prospective clinics should{" "}
              <Link href="/contact" className="link-underline text-white">
                contact our team
              </Link>{" "}
              for a consult or quote.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wrapper flex flex-col items-start justify-between gap-4 py-6 text-xs text-slate-400 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
