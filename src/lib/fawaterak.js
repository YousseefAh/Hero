import crypto from "crypto";

/**
 * Fawaterak server-side helpers.
 * @see https://fawaterak-api.readme.io/reference/overview
 */

export function getFawaterakConfig() {
  const apiKey = process.env.FAWATERAK_API_KEY;
  const baseUrl = (process.env.FAWATERAK_API_BASE_URL || "https://staging.fawaterk.com").replace(
    /\/$/,
    "",
  );
  const vendorKey = process.env.FAWATERAK_VENDOR_KEY || "";
  const defaultPaymentMethodId = parseInt(
    process.env.FAWATERAK_DEFAULT_PAYMENT_METHOD_ID || "2",
    10,
  );
  return { apiKey, baseUrl, vendorKey, defaultPaymentMethodId };
}

export function getPublicSiteOrigin() {
  const u = process.env.NEXT_PUBLIC_SITE_URL;
  if (u) return u.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3006";
}

/**
 * Parse displayed plan price (e.g. "1,000" or Arabic digits) into EGP decimal string.
 */
export function parseEgpCartTotal(price) {
  if (price == null) return null;
  const normalized = String(price).replace(/\u0660/g, "0").replace(/\u0661/g, "1")
    .replace(/\u0662/g, "2").replace(/\u0663/g, "3").replace(/\u0664/g, "4")
    .replace(/\u0665/g, "5").replace(/\u0666/g, "6").replace(/\u0667/g, "7")
    .replace(/\u0668/g, "8").replace(/\u0669/g, "9");
  const s = normalized.replace(/,/g, "").replace(/[^\d.]/g, "");
  if (!s) return null;
  const n = parseFloat(s);
  if (!Number.isFinite(n) || n <= 0) return null;
  return String(n);
}

export function splitCustomerName(fullName) {
  const t = (fullName || "").trim();
  if (!t) return { first_name: "Customer", last_name: "BePrime" };
  const i = t.indexOf(" ");
  // Fawaterak validates last_name format; avoid symbols like "—"
  if (i === -1) return { first_name: t.slice(0, 80), last_name: "BePrime" };
  return {
    first_name: t.slice(0, i).slice(0, 80),
    last_name: (t.slice(i + 1).trim() || "BePrime").slice(0, 80),
  };
}

export async function fawaterakRequest(path, init = {}) {
  const { apiKey, baseUrl } = getFawaterakConfig();
  if (!apiKey) {
    const err = new Error("FAWATERAK_API_KEY is not configured");
    err.code = "MISSING_API_KEY";
    throw err;
  }
  const url = `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    const err = new Error(
      typeof data?.message === "string" ? data.message : text || `HTTP ${res.status}`,
    );
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export async function getPaymentMethods() {
  return fawaterakRequest("/api/v2/getPaymentmethods", { method: "GET" });
}

/**
 * @param {object} payload - invoiceInitPay body
 */
export async function invoiceInitPay(payload) {
  return fawaterakRequest("/api/v2/invoiceInitPay", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/**
 * Paid / failed invoice webhook HMAC (hex).
 * @see https://fawaterak-api.readme.io/reference/web-hook
 */
export function computePaidInvoiceHash(invoice_id, invoice_key, payment_method, secret) {
  const queryParam = `InvoiceId=${invoice_id}&InvoiceKey=${invoice_key}&PaymentMethod=${payment_method}`;
  return crypto.createHmac("sha256", secret).update(queryParam).digest("hex");
}

export function verifyPaidInvoiceWebhook(body, secret) {
  if (!secret) return { ok: true, skipped: true };
  const { hashKey, invoice_id, invoice_key, payment_method } = body;
  if (!hashKey || invoice_id == null || !invoice_key || !payment_method) {
    return { ok: false, reason: "missing_fields" };
  }
  const expected = computePaidInvoiceHash(invoice_id, invoice_key, payment_method, secret);
  return { ok: hashKey === expected };
}
