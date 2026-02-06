import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy practices for PracticeStack.",
};

export default function PrivacyPage() {
  return (
    <section className="section section-light">
      <div className="container-wrapper space-y-4">
        <h1 className="text-3xl font-semibold">Privacy</h1>
        <p className="text-slate-600">
          PracticeStack respects patient and clinic privacy. This page is a
          placeholder summary for pre-launch use and should be replaced with a
          formal privacy policy.
        </p>
        <p className="text-slate-600">
          We only collect information necessary to respond to enquiries and
          deliver services. For privacy questions, contact
          hello@practicestack.com.au.
        </p>
      </div>
    </section>
  );
}
