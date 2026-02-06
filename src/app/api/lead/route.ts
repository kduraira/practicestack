import { NextResponse } from "next/server";
import { insertLead } from "@/lib/db";
import { sendLeadEmail } from "@/lib/email";

export const runtime = "nodejs";

const validatePayload = (payload: Record<string, unknown>) => {
  const requiredFields = ["fullName", "email", "phone", "practiceName"];
  const errors: string[] = [];

  requiredFields.forEach((field) => {
    if (!payload[field] || String(payload[field]).trim().length === 0) {
      errors.push(`${field} is required`);
    }
  });

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.email))) {
    errors.push("email must be valid");
  }

  const intent = payload.intent;
  if (!["consult", "quote", "contact"].includes(String(intent))) {
    errors.push("intent must be consult, quote, or contact");
  }

  return errors;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const errors = validatePayload(payload);
    if (errors.length > 0) {
      return NextResponse.json(
        { ok: false, errors },
        { status: 400 }
      );
    }

    const lead = {
      intent: String(payload.intent),
      fullName: String(payload.fullName),
      email: String(payload.email),
      phone: String(payload.phone),
      practiceName: String(payload.practiceName),
      role: payload.role ? String(payload.role) : "",
      serviceInterest: payload.serviceInterest ? String(payload.serviceInterest) : "",
      message: payload.message ? String(payload.message) : "",
    };

    const id = insertLead(lead);
    await sendLeadEmail(lead);

    return NextResponse.json({ ok: true, id });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json(
      { ok: false, message: "Unable to process request" },
      { status: 500 }
    );
  }
}
