import { createClient } from "@libsql/client";

export interface LeadRecord {
  intent: string;
  fullName: string;
  email: string;
  phone: string;
  practiceName: string;
  role?: string;
  serviceInterest?: string;
  message?: string;
}

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const insertLead = async (lead: LeadRecord) => {
  const result = await client.execute({
    sql: `
      INSERT INTO leads (
        intent,
        full_name,
        email,
        phone,
        practice_name,
        role,
        service_interest,
        message,
        created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `,
    args: [
      lead.intent,
      lead.fullName,
      lead.email,
      lead.phone,
      lead.practiceName,
      lead.role ?? null,
      lead.serviceInterest ?? null,
      lead.message ?? null,
      new Date().toISOString(),
    ],
  });

  return result.lastInsertRowid;
};
