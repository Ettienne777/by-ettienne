Vercel deployment guide — by-ettie

Prerequisites
- Node.js and npm installed
- A Vercel account (https://vercel.com)
- (Optional) SendGrid account if you want SendGrid for email

1) Prepare the project
- Commit all changes to your Git repo.
- Ensure `package.json` has the `build` script (already `vite build`).

2) Set environment variables on Vercel
- `VITE_BOOKING_URL` — your Calendly or SavvyCal link (e.g. https://calendly.com/yourname/discovery-call)
- `VITE_GA_MEASUREMENT_ID` — Google Analytics Measurement ID (G-XXXXXXXX)
- Email (choose one):
  - SendGrid: `SENDGRID_API_KEY`
  - SMTP: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`
- `RECEIVER_EMAIL` — where inbound contact emails should go (your inbox)

Set these in the Vercel dashboard under Project → Settings → Environment Variables, or via the Vercel CLI:

```bash
# interactive example (you'll be prompted for values)
vercel env add VITE_BOOKING_URL production
vercel env add VITE_GA_MEASUREMENT_ID production
vercel env add SENDGRID_API_KEY production
vercel env add RECEIVER_EMAIL production
```

3) Deploy to Vercel
- From the project directory run:

```bash
# first login if needed
npm i -g vercel
vercel login
# deploy (follow prompts)
vercel --prod
```

4) Verify after deploy
- Visit `https://<your-project>.vercel.app`.
- Test booking page: `https://<your-project>.vercel.app/schedule` — the inline widget should load if `VITE_BOOKING_URL` is set to a Calendly link.
- Test contact form: submit the form and check the mailbox `RECEIVER_EMAIL`.
- To view serverless logs:

```bash
vercel logs <deployment-url> --since 1h
```

5) Add custom domain (recommended)
- Buy domain from registrar, then in Vercel dashboard: Domains → Add → follow instructions to point DNS to Vercel.

6) Troubleshooting
- If `/api/contact` fails, check Vercel function logs and ensure env vars are present for the selected environment (preview/production).
- If emails fail, confirm SendGrid SMTP/API keys and `RECEIVER_EMAIL`.
- For booking widget issues, confirm `VITE_BOOKING_URL` and that the scheduler provider allows inline embeds.

If you want, I can: create the Vercel project from your repo, set the env vars for you (if you provide values or allow me to guide), and run a first production deploy and verification.
