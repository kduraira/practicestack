import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for PracticeStack.",
};

export default function TermsPage() {
  return (
    <section className="section section-light">
      <div className="container-wrapper space-y-4">
        <h1 className="text-3xl font-semibold">Terms</h1>
        <p className="text-slate-600">
          These terms are a placeholder summary for pre-launch use and should be
          replaced with formal service terms.
        </p>
        <p className="text-slate-600">
          Project work is scoped separately from managed services. Clinical
          software is owned by third-party vendors; PracticeStack coordinates
          resolution but does not control vendor response times.
        </p>
      </div>
    </section>
  );
}
