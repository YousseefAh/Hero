import { NextResponse } from "next/server";
import {
  getPublicSiteOrigin,
  parseEgpCartTotal,
  splitCustomerName,
  invoiceInitPay,
  getFawaterakConfig,
} from "@/lib/fawaterak";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      paymentMethodId,
      fullName,
      email,
      phone,
      platformName,
      planName,
      planPrice,
      billingCycle,
    } = body;

    const cartTotal = parseEgpCartTotal(planPrice);
    if (!cartTotal) {
      return NextResponse.json(
        { error: "Invalid or unavailable plan amount" },
        { status: 400 },
      );
    }

    const { defaultPaymentMethodId } = getFawaterakConfig();
    const pmId =
      paymentMethodId != null && paymentMethodId !== ""
        ? parseInt(String(paymentMethodId), 10)
        : defaultPaymentMethodId;

    if (!Number.isFinite(pmId)) {
      return NextResponse.json({ error: "Invalid payment method" }, { status: 400 });
    }

    if (!fullName?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Missing customer name, email, or phone" }, { status: 400 });
    }

    const { first_name, last_name } = splitCustomerName(fullName);
    const origin = getPublicSiteOrigin();
    const invoiceNumber = `BP-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`.toUpperCase();

    const payload = {
      payment_method_id: pmId,
      cartTotal,
      currency: "EGP",
      invoice_number: invoiceNumber,
      customer: {
        first_name,
        last_name,
        email: email.trim(),
        phone: String(phone).replace(/\s/g, ""),
        address: (platformName && String(platformName).trim()) || "Egypt",
      },
      redirectionUrls: {
        successUrl: `${origin}/payment/success`,
        failUrl: `${origin}/payment/fail`,
        pendingUrl: `${origin}/payment/pending`,
        webhookUrl: `${origin}/api/fawaterak/webhook_json`,
      },
      cartItems: [
        {
          name: planName || "BePrime subscription",
          price: cartTotal,
          quantity: "1",
        },
      ],
      redirectOption: true,
      lang: "ar",
      payLoad: {
        fullName: fullName.trim(),
        phone: String(phone).replace(/\s/g, ""),
        email: email.trim(),
        platformName: platformName || "",
        planName: planName || "BePrime",
        price: cartTotal,
        billingCycle: billingCycle || "monthly",
        invoiceNumber,
      },
    };

    const res = await invoiceInitPay(payload);
    if (res.status !== "success" || !res.data) {
      return NextResponse.json(
        { error: res.message || "Fawaterak rejected the request", details: res },
        { status: 502 },
      );
    }

    const redirectTo = res.data.payment_data?.redirectTo;
    if (!redirectTo) {
      return NextResponse.json(
        {
          error: "No redirect URL returned (this method may require in-app codes or QR)",
          paymentData: res.data.payment_data,
          invoice_id: res.data.invoice_id,
          invoice_key: res.data.invoice_key,
        },
        { status: 422 },
      );
    }

    return NextResponse.json({
      redirectUrl: redirectTo,
      invoice_id: res.data.invoice_id,
      invoice_key: res.data.invoice_key,
    });
  } catch (e) {
    if (e.code === "MISSING_API_KEY") {
      return NextResponse.json({ error: "Payment gateway not configured" }, { status: 503 });
    }
    console.error("[fawaterak/init]", e);
    return NextResponse.json(
      { error: e.message || "Server error", details: e.data },
      { status: e.status && e.status >= 400 ? e.status : 500 },
    );
  }
}
