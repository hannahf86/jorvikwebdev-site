# Deploying the Jorvik Web Dev site to Vercel (preview)

The app is complete and `next build` passes. It just needs pushing to your Vercel
account (which requires your login — it couldn't be done from the build agent).

## Fastest path — Vercel CLI (one command)

From this folder (`jorvikweb-next`):

```bash
npx vercel
```

- First run asks you to log in and links/creates the project (accept the defaults;
  framework auto-detects as Next.js).
- It uploads everything (including the 18MB of images) and gives you a **preview URL**.
- This is a **preview**, not production — it will NOT touch your domain or DNS.

To redeploy later after changes, just run `npx vercel` again. (`npx vercel --prod`
would promote to production — don't run that until you've compared side-by-side and
set up the domain yourself.)

## Alternative — GitHub + Vercel dashboard

1. Create a new repo and push this folder to it.
2. In the Vercel dashboard → **Add New → Project → Import** that repo.
3. Vercel auto-detects Next.js. Deploy. Future pushes auto-deploy.

## Environment variables to set in Vercel

Project → Settings → Environment Variables. Values for the first three are in your
local `.env.local` (which is git-ignored and NOT committed):

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Contact + newsletter email delivery |
| `CONTACT_TO_EMAIL` | Where enquiries are sent (`hannah@jorvikweb.dev`) |
| `CONTACT_FROM_EMAIL` | Verified Resend sender (`website@jorvikweb.dev` — must be a verified domain in Resend) |
| `ZAPIER_NEWSLETTER_WEBHOOK_URL` | Newsletter → MailerLite bridge |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile (spam) — add when ready |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret — add when ready |

Forms work without the Turnstile keys (protection just isn't active until they're set).

## Do NOT (per the migration brief)

- Do not change DNS `A`/`CNAME` records or add the custom domain yet.
- **Never touch `MX` records** — the domain also runs the business email.
- Keep the live Webflow site running until you're happy with the side-by-side comparison.
