import { NextResponse } from "next/server";
import { fawaterakRequest } from "@/lib/fawaterak";
import { submitToGoogleSheets } from "@/utils/googleSheets";

export async function POST(request) {
  try {
    const { invoiceId } = await request.json();

    if (!invoiceId) {
      return NextResponse.json(
        { error: "معرف الفاتورة (Invoice ID) مطلوب" },
        { status: 400 }
      );
    }

    // Call Fawaterak to retrieve transaction data
    let resData;
    try {
      resData = await fawaterakRequest(`/api/v2/getInvoiceData/${invoiceId}`, {
        method: "GET",
      });
    } catch (apiErr) {
      console.error("[fawaterak/sync-status] Fawaterak request failed:", apiErr);
      return NextResponse.json(
        { error: `فشل الاتصال بفواتيرك: ${apiErr.message || "خطأ غير معروف"}` },
        { status: 502 }
      );
    }

    if (resData.status !== "success" || !resData.data) {
      return NextResponse.json(
        { error: "فشل استرجاع بيانات الفاتورة من فواتيرك" },
        { status: 404 }
      );
    }

    const invoice = resData.data;
    // Check if paid: paid can be 1, true, or status could be paid
    const isPaid =
      invoice.paid === 1 ||
      invoice.paid === true ||
      String(invoice.invoice_status).toLowerCase() === "paid";

    if (!isPaid) {
      return NextResponse.json({
        success: true,
        paid: false,
        message: "هذه الفاتورة لم تُدفع بعد في نظام فواتيرك.",
        invoice: {
          id: invoice.invoice_id,
          key: invoice.invoice_key,
          customer: invoice.customer_email,
          total: invoice.total,
          currency: invoice.currency,
          paid: invoice.paid,
        },
      });
    }

    // Extract payload details sent during checkout
    const plData = invoice.pay_load;
    const pl =
      plData && typeof plData === "object"
        ? plData
        : plData && typeof plData === "string"
          ? (() => {
              try {
                return JSON.parse(plData);
              } catch {
                return {};
              }
            })()
          : {};

    const sheetSuccess = await submitToGoogleSheets({
      fullName: pl.fullName || invoice.customer_name || "—",
      phone: pl.phone || "—",
      platformName: pl.platformName || "—",
      planName: pl.planName || "BePrime",
      price: pl.price != null ? String(pl.price) : (invoice.total != null ? String(invoice.total) : "—"),
      billingCycle: pl.billingCycle === "annual" ? "annual" : "monthly",
      paymentMethod: `Fawaterak (${invoice.payment_method || "Paid"} - سحب يدوي)`,
      referenceId: String(invoice.invoice_key || invoice.invoice_id || invoiceId),
      status: "مدفوع ✅",
    });

    if (!sheetSuccess) {
      return NextResponse.json(
        {
          success: true,
          paid: true,
          message: "الفاتورة مدفوعة، ولكن فشل تسجيلها في Google Sheets. يرجى التحقق من لوحة تحكم Google Sheets.",
          invoice,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      paid: true,
      message: "تم التحقق بنجاح! الفاتورة مدفوعة وتم تسجيل البيانات في Google Sheets.",
      invoice: {
        id: invoice.invoice_id,
        key: invoice.invoice_key,
        customer: pl.fullName || invoice.customer_name,
        total: invoice.total,
        currency: invoice.currency,
        paid_at: invoice.paid_at,
      },
    });
  } catch (error) {
    console.error("[fawaterak/sync-status]", error);
    return NextResponse.json(
      { error: "حدث خطأ داخلي في الخادم" },
      { status: 500 }
    );
  }
}
