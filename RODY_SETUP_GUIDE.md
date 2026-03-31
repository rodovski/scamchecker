# ScamCheck — Setup Guide for Rody
## Estimated time: 25-35 minutes. Do this once. Then hands off.

---

## STEP 1 — Get your Anthropic API key (5 min)
The AI that analyses scam messages.

1. Go to: https://console.anthropic.com
2. Sign up with your email
3. Go to "API Keys" in the left menu
4. Click "Create Key" → copy the key (starts with `sk-ant-...`)
5. Save it somewhere safe — you only see it once

**Cost:** You start with $5 free credit. Each analysis costs ~$0.001.
That's 5,000 free analyses before you pay anything.
After that: top up as needed. At scale, still only cents per analysis.

---

## STEP 2 — Get your Stripe keys (8 min)
This is how you receive payments.

1. Go to: https://stripe.com → click "Start now"
2. Sign up and verify your email
3. Complete your business details (you can use your personal name)
4. Go to: Developers → API Keys
5. Copy your **Secret key** (starts with `sk_live_...`)

**Important:** Make sure you're in LIVE mode (not test mode) before copying.

**Stripe fee:** ~1.4% + €0.25 per transaction. On a €9 sale, you keep ~€8.50.

**Bank payout:** Stripe pays out to your bank automatically every 7 days.

---

## STEP 3 — Buy a domain (5 min)
Recommended: namecheap.com or godaddy.com

Good options (check availability):
- scamcheck.io
- checkthatmessage.com
- isitascam.net
- scamdetector.io
- messagechecker.io

Cost: usually €10-15/year. Pick one and buy it.

---

## STEP 4 — Deploy on Vercel (10 min)
Vercel hosts your website for free.

1. Go to: https://vercel.com → sign up (use GitHub if you have it, or email)
2. Click "Add New Project"
3. Upload the project folder I built for you (drag & drop)
   OR connect your GitHub if you prefer
4. Before clicking Deploy, go to "Environment Variables" and add:

   | Name | Value |
   |------|-------|
   | ANTHROPIC_API_KEY | your key from Step 1 |
   | STRIPE_SECRET_KEY | your key from Step 2 |
   | NEXT_PUBLIC_BASE_URL | https://yourdomain.com |

5. Click **Deploy** — Vercel builds and launches automatically

**Cost:** Free on Vercel's Hobby plan. You only need to upgrade if you get
millions of visitors (a good problem to have).

---

## STEP 5 — Connect your domain (5 min)

1. In Vercel: go to your project → Settings → Domains
2. Add your domain (e.g. scamcheck.io)
3. Vercel shows you DNS records to add
4. Go to your domain registrar (Namecheap etc.) → DNS settings
5. Add the records Vercel shows you
6. Wait 5-30 minutes for it to activate

---

## DONE ✓

Once deployed, send me (Claude) a message saying it's live.
I'll run a test, check everything works, and set up the daily automation.

From that point:
- Every morning: I generate new SEO pages automatically
- Every week: I send you a performance report
- You spend: ~2-3 minutes a day reviewing it

---

## Quick troubleshooting

**"Error: Invalid API key"** → Double-check you copied the full key with no spaces

**"Payment not working"** → Make sure Stripe is in LIVE mode, not test mode

**"Domain not connecting"** → DNS changes take up to 24 hours, be patient

**Any other issue** → Tell me (Claude) exactly what you see and I'll fix it
