import { NextResponse } from "next/server";
import { verifyPaidInvoiceWebhook, getFawaterakConfig } from "@/lib/fawaterak";
import { submitToGoogleSheets } from "@/utils/googleSheets";

/**
 * Fawaterak paid (and related) webhooks — JSON body.
 * Dashboard URL must include `_json` per Fawaterak docs.
 * @see https://fawaterak-api.readme.io/reference/web-hook
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { vendorKey } = getFawaterakConfig();
    const secret = vendorKey || process.env.FAWATERAK_API_KEY || "";

    if (body.invoice_status === "paid") {
      const v = verifyPaidInvoiceWebhook(body, secret);
      if (!v.ok && !v.skipped) {
        console.warn("[fawaterak/webhook_json] Invalid HMAC for paid invoice", body.invoice_id);
        return NextResponse.json({ error: "invalid hash" }, { status: 401 });
      }

      const pl =
        body.pay_load && typeof body.pay_load === "object"
          ? body.pay_load
          : body.pay_load && typeof body.pay_load === "string"
            ? (() => {
                try {
                  return JSON.parse(body.pay_load);
                } catch {
                  return {};
                }
              })()
            : {};

      await submitToGoogleSheets({
        fullName: pl.fullName || "—",
        phone: pl.phone || "—",
        platformName: pl.platformName || "—",
        planName: pl.planName || "BePrime",
        price: pl.price != null ? String(pl.price) : "—",
        billingCycle: pl.billingCycle === "annual" ? "annual" : "monthly",
        paymentMethod: `Fawaterak (${body.payment_method || "paid"})`,
        referenceId: String(body.invoice_key || body.referenceNumber || body.invoice_id || ""),
        status: "مدفوع ✅",
      });
    }

    if (body.errorMessage || body.response?.gatewayCode) {
      console.info("[fawaterak/webhook_json] failure notification", {
        invoice_id: body.invoice_id,
        errorMessage: body.errorMessage,
        gatewayCode: body.response?.gatewayCode,
      });
    }

    return NextResponse.json({ received: true });
  } catch (e) {
    console.error("[fawaterak/webhook_json]", e);
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
}
