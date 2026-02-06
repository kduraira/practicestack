# PracticeStack Website

Modern, conversion-focused marketing site for PracticeStack (Australian MSP for
healthcare clinics). Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- SQLite (local lead storage)
- Nodemailer (SMTP email placeholder)
- Markdown content in `/content/blog`

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` file with:

```bash
# Site + support
NEXT_PUBLIC_SITE_URL=https://practicestack.com.au
NEXT_PUBLIC_SUPPORT_PORTAL_URL=https://support.practicestack.com.au
NEXT_PUBLIC_SUPPORT_WIDGET_ENABLED=false
NEXT_PUBLIC_SUPPORT_WIDGET_ID=YOUR_FRESHDESK_WIDGET_ID

# Analytics (optional)
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_META_PIXEL_ID=

# SMTP (optional, for lead email notifications)
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=hello@practicestack.com.au
SMTP_TO=hello@practicestack.com.au
```

If SMTP variables are not provided, lead submissions will still be stored in
SQLite and logged to the server console.

## Lead storage

Lead submissions are stored in `data/practicestack.db`. This file is created on
first submission and is ignored by git. If you deploy to serverless platforms,
use a persistent database in production.

## Content

- Blog posts live in `/content/blog` (Markdown with frontmatter).
- Image placeholders live in `/public/images`. See `/public/images/README.md`
  for sourcing guidance.

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Set environment variables from the list above.
4. Deploy.

## Key files

- `src/app/page.tsx` – Home page with conversion-focused sections
- `src/app/services` – Services index and detail pages
- `src/app/resources` – Blog index and article template
- `src/components/SupportWidget.tsx` – Freshdesk widget toggle
- `src/app/api/lead/route.ts` – Lead capture API (SQLite + email)
- `src/lib/services.ts` – Service content data
- `src/lib/blog.ts` – Markdown loader
