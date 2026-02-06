"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type Intent = "consult" | "quote" | "contact";

interface LeadFormProps {
  intent: Intent;
  ctaLabel?: string;
}

interface LeadFormState {
  fullName: string;
  email: string;
  phone: string;
  practiceName: string;
  role: string;
  serviceInterest: string;
  message: string;
}

const initialState: LeadFormState = {
  fullName: "",
  email: "",
  phone: "",
  practiceName: "",
  role: "",
  serviceInterest: "",
  message: "",
};

export default function LeadForm({ intent, ctaLabel }: LeadFormProps) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Name is required.";
    if (!form.practiceName.trim())
      nextErrors.practiceName = "Practice name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    return nextErrors;
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    setStatus("submitting");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, intent }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="fullName">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
            placeholder="Dr Alex Morgan"
            autoComplete="name"
            required
          />
          {errors.fullName ? (
            <p className="text-xs text-rose-600">{errors.fullName}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-slate-700"
            htmlFor="practiceName"
          >
            Practice name
          </label>
          <input
            id="practiceName"
            name="practiceName"
            value={form.practiceName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
            placeholder="Bentleigh Dental Care"
            required
          />
          {errors.practiceName ? (
            <p className="text-xs text-rose-600">{errors.practiceName}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
            placeholder="alex@practice.com.au"
            autoComplete="email"
            required
          />
          {errors.email ? (
            <p className="text-xs text-rose-600">{errors.email}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
            placeholder="04xx xxx xxx"
            autoComplete="tel"
            required
          />
          {errors.phone ? (
            <p className="text-xs text-rose-600">{errors.phone}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="role">
            Your role
          </label>
          <input
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
            placeholder="Practice manager / Owner"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-slate-700"
            htmlFor="serviceInterest"
          >
            Service interest
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={form.serviceInterest}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="Managed IT Support">Managed IT Support</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Network & WiFi">Network & WiFi</option>
            <option value="Telephony / VoIP">Telephony / VoIP</option>
            <option value="Backups & Disaster Recovery">
              Backups & Disaster Recovery
            </option>
            <option value="Website Design & Development">
              Website Design & Development
            </option>
            <option value="SEO for Clinics">SEO for Clinics</option>
            <option value="Google Ads Management">Google Ads Management</option>
            <option value="AI for Clinics">AI for Clinics</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700" htmlFor="message">
          Tell us about your practice and priorities
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
          placeholder="Locations, systems in place, and what you need help with."
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "submitting"}
        >
          {ctaLabel ?? "Send request"}
        </button>
        <p className="text-xs text-slate-500">
          We respond within one business day.
        </p>
      </div>

      {status === "success" ? (
        <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Thanks! Your request has been received. We will be in touch shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Something went wrong. Please try again or call us directly.
        </p>
      ) : null}
    </form>
  );
}
