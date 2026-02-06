import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";
import type { LeadRecord } from "@/lib/db";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT
  ? Number(process.env.SMTP_PORT)
  : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM ?? siteConfig.email;
const smtpTo = process.env.SMTP_TO ?? siteConfig.email;

const isConfigured = Boolean(smtpHost && smtpPort && smtpUser && smtpPass);

export const sendLeadEmail = async (lead: LeadRecord) => {
  if (!isConfigured) {
    console.info("SMTP not configured. Lead captured:", lead);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `New ${lead.intent} request from ${lead.practiceName}`;
  const text = `
Name: ${lead.fullName}
Practice: ${lead.practiceName}
Email: ${lead.email}
Phone: ${lead.phone}
Role: ${lead.role || "-"}
Service interest: ${lead.serviceInterest || "-"}
Message: ${lead.message || "-"}
Intent: ${lead.intent}
`;

  await transporter.sendMail({
    from: smtpFrom,
    to: smtpTo,
    subject,
    text,
  });
};
