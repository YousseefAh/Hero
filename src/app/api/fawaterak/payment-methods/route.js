import { NextResponse } from "next/server";
import { getPaymentMethods, getFawaterakConfig } from "@/lib/fawaterak";

export async function GET() {
  try {
    const res = await getPaymentMethods();
    if (res.status !== "success") {
      return NextResponse.json(
        { error: "Unexpected Fawaterak response", details: res },
        { status: 502 },
      );
    }
    const list = Array.isArray(res.data) ? res.data : [];
    const { defaultPaymentMethodId } = getFawaterakConfig();
    return NextResponse.json({
      configured: true,
      methods: list,
      defaultPaymentMethodId,
    });
  } catch (e) {
    if (e.code === "MISSING_API_KEY") {
      return NextResponse.json({
        configured: false,
        methods: [],
        defaultPaymentMethodId: parseInt(
          process.env.FAWATERAK_DEFAULT_PAYMENT_METHOD_ID || "2",
          10,
        ),
      });
    }
    console.error("[fawaterak/payment-methods]", e);
    return NextResponse.json({ error: e.message || "Server error" }, { status: 500 });
  }
}
