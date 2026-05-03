# Payments Runbook — Fawaterak (BePrime / reuse in WebApp)

This document is the **single source of truth** for integrating **Fawaterak** payments exactly the same way this repo does, so you can copy the same flow into your **new WebApp** while using the **same Fawaterak account**.

It covers:
- **Redirect (Gateway) payment flow** (recommended, currently used)
- **Pay-link flow** (`/pay/create` → `/pay?...`) with custom amount + service name
- **Checkout flow** (site checkout) using Fawaterak methods only
- **Return pages** (`/payment/success|fail|pending`)
- **Webhooks** (paid status) + **HMAC verification**
- **Google Sheets logging**
- **Local vs production setup**
- Troubleshooting checklist

> This repo does **NOT** use Fawaterak IFrame. If you want IFrame later, the dashboard “IFRAME Domains” whitelist becomes required.

---

## 1) What we implemented (high level)

### A) Redirect “Gateway” flow (what you have now)
1. Client asks the server for available payment methods.
2. Client sends customer + order details to server.
3. Server calls Fawaterak `invoiceInitPay`.
4. Client redirects user to Fawaterak checkout page.
5. Fawaterak redirects back to your site:
   - `/payment/success`
   - `/payment/fail`
   - `/payment/pending`
6. Separately (recommended), Fawaterak sends a **paid webhook** to your server:
   - `/api/fawaterak/webhook_json`
7. Webhook handler verifies the request using **HMAC SHA256** + logs “paid ✅” into Google Sheets.

### B) Pay-link flow (custom amount + service name)
- **Create link**: `/pay/create`
  - You type **Service name** + **Amount**
  - It generates a link: `/pay?name=...&amount=...`
- **Pay page**: `/pay`
  - Collects **name + phone + email**
  - Loads Fawaterak methods
  - Initiates payment → redirects to Fawaterak

---

## 2) Environment variables (copy to the new WebApp)

Create `.env.local` for local dev, and add the same values in your host (Vercel / Render / etc) for production.

### Required
- `FAWATERAK_API_KEY`
  - **Bearer token**
  - Used server-side only (Route Handlers call Fawaterak)
- `FAWATERAK_API_BASE_URL`
  - Example (live): `https://app.fawaterk.com`
  - No trailing slash
- `NEXT_PUBLIC_SITE_URL`
  - Your public origin, example: `https://www.beprime.ink`
  - Used to build redirect + webhook URLs in server init handler
- `NEXT_PUBLIC_GOOGLE_SHEET_URL`
  - Your Google Apps Script “web app” URL (write-only)

### Recommended
- `FAWATERAK_VENDOR_KEY`
  - The **webhook HMAC secret** from Fawaterak dashboard
  - Needed to verify paid webhooks

### Optional
- `FAWATERAK_DEFAULT_PAYMENT_METHOD_ID`
  - Default: `2`
  - Used only if you don’t pass a method id from the client

### Example `.env.local`

```bash
# Google Sheets Integration (Write-Only)
NEXT_PUBLIC_GOOGLE_SHEET_URL="https://script.google.com/macros/s/XXXXX/exec"

# Site origin (used to build Fawaterak redirect + webhook URLs)
NEXT_PUBLIC_SITE_URL="https://www.beprime.ink"

# Fawaterak (Gateway redirect)
FAWATERAK_API_BASE_URL="https://app.fawaterk.com"
FAWATERAK_API_KEY="YOUR_BEARER_TOKEN"

# Webhook verification secret (recommended)
FAWATERAK_VENDOR_KEY="YOUR_VENDOR_KEY"

# Default payment method ID
FAWATERAK_DEFAULT_PAYMENT_METHOD_ID="2"
```

⚠️ Never commit real secrets.

---

## 3) Fawaterak dashboard configuration (production)

In the Fawaterak portal for the **same account** you will use in the new WebApp, set:

### A) Redirect URLs
- **Success redirect URL**: `https://YOUR_DOMAIN/payment/success`
- **Fail redirect URL**: `https://YOUR_DOMAIN/payment/fail`
- **Pending redirect URL**: `https://YOUR_DOMAIN/payment/pending`

> Even though our server also sends these in each init request (`redirectionUrls`), setting them in the dashboard prevents misconfig surprises.

### B) Paid webhook (JSON)
Set the paid webhook to:
- `https://YOUR_DOMAIN/api/fawaterak/webhook_json`

Fawaterak sends JSON only if the URL contains `_json` (per docs).

### C) IFrame domains (NOT needed for this implementation)
Ignore unless you intentionally switch to IFrame integration later.

---

## 4) Code map (what to copy to the new WebApp)

### Server-side
- **Helpers / config**
  - `src/lib/fawaterak.js`
  - Includes:
    - config loader
    - request wrapper
    - `invoiceInitPay`
    - webhook HMAC verification helpers

- **List payment methods**
  - `GET /api/fawaterak/payment-methods`
  - File: `src/app/api/fawaterak/payment-methods/route.js`

- **Init payment**
  - `POST /api/fawaterak/init`
  - File: `src/app/api/fawaterak/init/route.js`
  - Builds:
    - `redirectionUrls.successUrl|failUrl|pendingUrl`
    - `redirectionUrls.webhookUrl`
    - `payLoad` (custom object stored and returned in webhook)

- **Webhook receiver**
  - `POST /api/fawaterak/webhook_json`
  - File: `src/app/api/fawaterak/webhook_json/route.js`
  - Verifies `hashKey` for `invoice_status === "paid"`
  - Logs into Google Sheets as “paid ✅”

### Client-side pages
- **Pay link create**
  - `src/components/pages/PayCreatePage.jsx`
  - Route: `/pay/create`

- **Pay link payment page (Fawaterak-only)**
  - `src/components/pages/PayPageFawaterak.jsx`
  - Route: `/pay`

- **Return pages**
  - `src/components/pages/FawaterakReturnPage.jsx`
  - Routes:
    - `src/app/payment/success/page.js`
    - `src/app/payment/fail/page.js`
    - `src/app/payment/pending/page.js`

### Logging
- `src/utils/googleSheets.js`
  - `submitToGoogleSheets(data)` sends a GET request to your Apps Script URL

---

## 5) API contracts (exact payload shapes)

### A) `GET /api/fawaterak/payment-methods`
Returns:
- `configured`: boolean (false if missing API key)
- `methods`: array of Fawaterak methods
- `defaultPaymentMethodId`: number

### B) `POST /api/fawaterak/init`
Client sends:

```json
{
  "paymentMethodId": 2,
  "fullName": "Customer Name",
  "email": "customer@example.com",
  "phone": "01000000000",
  "platformName": "",
  "planName": "Service name",
  "planPrice": "1500",
  "billingCycle": "once"
}
```

Server returns (success):

```json
{
  "redirectUrl": "https://app.fawaterk.com/link/XXXXX",
  "invoice_id": 123,
  "invoice_key": "XXXXX"
}
```

Server returns (method that has no redirect URL):
- HTTP 422 with `paymentData` + invoice ids (some methods return codes/QR instead of redirect)

---

## 6) Redirect return pages (success / fail / pending)

Your app routes:
- `/payment/success`
- `/payment/fail`
- `/payment/pending`

### Query params from Fawaterak
Fawaterak commonly includes identifiers like:
- `invoice_id`
- sometimes `invoice_key`
- sometimes status-like params (depends on gateway/method)

Our return component:
- Displays a reference using `invoice_key` OR `invoice_id`
- If status-like params are present, it can **derive** success/fail even if the user lands on `/payment/pending`

> Important: You should rely on the **paid webhook** for the real “paid” source of truth.

---

## 7) Webhook verification (HMAC SHA256)

For `invoice_status: "paid"`, Fawaterak sends:
- `hashKey`
- `invoice_id`
- `invoice_key`
- `payment_method`

The expected hash is:

`HMAC_SHA256(secret, "InvoiceId={invoice_id}&InvoiceKey={invoice_key}&PaymentMethod={payment_method}")`

Where `secret` is:
- `FAWATERAK_VENDOR_KEY` (recommended)

The handler rejects invalid paid webhooks with HTTP `401`.

---

## 8) Google Sheets logging

### What gets written
On paid webhook we submit:
- `fullName`, `phone`, `platformName`
- `planName`, `price`, `billingCycle`
- `paymentMethod`: e.g. `Fawaterak (Fawry)`
- `referenceId`: invoice key / invoice id
- `status`: `مدفوع ✅`

### Where it is configured
- `NEXT_PUBLIC_GOOGLE_SHEET_URL` in env
- Code: `src/utils/googleSheets.js`

---

## 9) Local testing vs production

### Local
- Start: `npm run dev -- -p 3006`
- Your origin comes from `NEXT_PUBLIC_SITE_URL`.
  - If you set it to production domain while testing locally, redirects/webhooks still point to prod.

**Recommended for local testing webhooks/redirects:**
- Use a tunnel (ngrok / cloudflared)
- Set `NEXT_PUBLIC_SITE_URL` to that tunnel HTTPS origin
- Put the tunnel URLs in Fawaterak dashboard while testing

### Production
- Set env vars in your hosting provider
- Deploy
- Ensure these routes exist in production:
  - `/payment/success`, `/payment/fail`, `/payment/pending`
  - `/api/fawaterak/init`, `/api/fawaterak/payment-methods`, `/api/fawaterak/webhook_json`

---

## 10) Troubleshooting

### “Invalid Token or inactive vendor”
- API key is wrong, inactive, or you’re using a live key against a staging host (or vice versa).
- Fix:
  - Verify `FAWATERAK_API_KEY`
  - Verify `FAWATERAK_API_BASE_URL`

### `getaddrinfo ENOTFOUND ...`
- Your base URL is wrong.
- Fix:
  - Use the correct host (example live: `https://app.fawaterk.com`)

### Webhook returns `401 invalid hash`
- `FAWATERAK_VENDOR_KEY` is missing or wrong.
- Fix:
  - Put the exact vendor key from portal into `FAWATERAK_VENDOR_KEY`

### Return pages show 404 in production
- You deployed older build without the routes.
- Fix:
  - Deploy latest code and verify routes exist

### Port error `EADDRINUSE: 3006`
- Another process is using 3006.
- Fix:
  - `lsof -nP -iTCP:3006 -sTCP:LISTEN`
  - `kill <PID>`

---

## 11) References
- Fawaterak overview: `https://fawaterak-api.readme.io/reference/overview`
- Webhooks: `https://fawaterak-api.readme.io/reference/web-hook`
- Execute payment / responses: `https://fawaterak-api.readme.io/reference/inetail-payment-1`

