# DTI Public Website

Next.js website for the Developmental Theatre Initiative: organization content, projects, news, donations, contact/newsletter forms, public volunteer applications, and volunteer ID verification.

## Local setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`.

## Environment

The complete contract is in `.env.example`:

- `NEXT_PUBLIC_SITE_URL` — canonical public origin
- `NEXT_PUBLIC_API_URL` — DTI API base including `/api`
- Paystack public/secret keys — donation checkout and server verification
- Brevo API/list settings — contact and newsletter flows
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional; analytics is disabled when omitted

## Commands

| Command             | Purpose                                    |
| ------------------- | ------------------------------------------ |
| `pnpm dev`          | Start the local Next.js server             |
| `pnpm lint`         | ESLint                                     |
| `pnpm format:check` | Verify formatting                          |
| `pnpm build`        | Production build and TypeScript validation |
| `pnpm start`        | Run the production build                   |

## Key routes

- `/volunteer` — public application
- `/verify/[volunteerId]` — limited public ID verification, marked `noindex`
- `/donate` — Paystack donation flow
- `/projects`, `/blogs`, `/gallery` — public program content

Deploy the API verification endpoint before releasing QR codes that point to `/verify/...`.
