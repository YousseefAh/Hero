# Fawaterak integration (BePrime)

This site uses [Fawaterak](https://fawaterak-api.readme.io/reference/overview) **Gateway** flow: the server calls `invoiceInitPay`, then the customer is redirected to Fawaterak to pay. Optional **webhooks** update Google Sheets when an invoice is paid.

## Dashboard checklist (Fawaterak portal)

1. **API key** — used server-side only (`FAWATERAK_API_KEY`). Rotate any key that was exposed in chat or commits.
2. **Success / Fail redirect URLs** — set to your public origin (must match what the app uses):
   - Success: `https://YOUR_DOMAIN/payment/success`
   - Fail: `https://YOUR_DOMAIN/payment/fail`
   - Optional pending (Fawry / Aman / Masary style flows): `https://YOUR_DOMAIN/payment/pending`  
   The app also sends these on each `invoiceInitPay` request via `redirectionUrls`, but aligning the dashboard avoids confusion.
3. **Paid webhook (JSON)** — Fawaterak requires `_json` in the path for JSON payloads. Set:
   - `https://YOUR_DOMAIN/api/fawaterak/webhook_json`  
   See [Web Hook](https://fawaterak-api.readme.io/reference/web-hook).
4. **IFRAME domains** — only needed if you use the IFrame product instead of redirect. This implementation uses **redirect**, not IFrame.
5. **Staging vs live** — use the API host your account mode expects (see env vars below).

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `FAWATERAK_API_KEY` | Yes (for live online pay) | Bearer token for `getPaymentmethods` and `invoiceInitPay`. |
| `FAWATERAK_API_BASE_URL` | No | Default: `https://staging.fawaterk.com`. For production, set your live base URL from Fawaterak (no trailing slash). |
| `FAWATERAK_VENDOR_KEY` | Recommended | Secret for **HMAC-SHA256** verification of paid webhooks. If omitted, the app falls back to `FAWATERAK_API_KEY` for verification (may or may not match your portal — set explicitly if webhooks return `401 invalid hash`). |
| `FAWATERAK_DEFAULT_PAYMENT_METHOD_ID` | No | Default `2` (cards). Used only if the payment-methods API is empty. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public site origin, e.g. `https://beprime.example` — used for `successUrl` / `failUrl` / `webhookUrl` in init. On Vercel, `VERCEL_URL` is used as a fallback when this is unset. |

Never commit real secrets. Use `.env.local` (gitignored) or your host’s secret store.

## Local development

- Default redirect fallback: `http://localhost:3006` (see `getPublicSiteOrigin` in `src/lib/fawaterak.js`). Fawaterak may not accept localhost in the dashboard; use a tunnel (e.g. ngrok) if redirects fail during testing.
- Add **test** keys and staging base URL while developing; switch to live URL and keys for production.

## Code map

| Piece | Path |
|-------|------|
| Config + helpers | `src/lib/fawaterak.js` |
| List methods | `GET /api/fawaterak/payment-methods` |
| Start payment | `POST /api/fawaterak/init` |
| Paid webhook | `POST /api/fawaterak/webhook_json` |
| Checkout UI | `src/components/sections/Checkout/PaymentMethods.jsx`, `CustomerInfoForm.jsx` |
| Return pages | `src/app/payment/success`, `fail`, `pending` |

## Webhook verification

For `invoice_status: "paid"`, the payload includes `hashKey`. The expected value is **HMAC-SHA256** (hex) of:

`InvoiceId={invoice_id}&InvoiceKey={invoice_key}&PaymentMethod={payment_method}`

using your vendor secret — see Fawaterak’s webhook documentation. Mismatched secrets cause `401` from `webhook_json` (by design).

## MailChimp

Not wired to Fawaterak in this repo. To subscribe customers after payment, add a server action from the webhook handler (needs MailChimp API key + audience/list ID).

## References

- [Overview](https://fawaterak-api.readme.io/reference/overview)
- [Get payment methods](https://fawaterak-api.readme.io/reference/initiatepayment)
- [Execute payment](https://fawaterak-api.readme.io/reference/inetail-payment-1)
- [Web Hook](https://fawaterak-api.readme.io/reference/web-hook)
