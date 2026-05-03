/**
 * Google Sheets Integration (Write-Only — Secure)
 * ─────────────────────────────────────────────────
 * Sends checkout data to a Google Sheet via Apps Script.
 * No read or update access — data only goes IN, never comes OUT.
 */

const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

export async function submitToGoogleSheets(data) {
  if (!GOOGLE_SHEET_URL) {
    console.warn("[GoogleSheets] URL not set. Skipping.");
    return false;
  }

  try {
    const payload = {
      date: new Date().toLocaleString("ar-EG", {
        timeZone: "Africa/Cairo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
      fullName: data.fullName,
      phone: data.phone,
      platformName: data.platformName || "—",
      planName: data.planName,
      price: data.price,
      billingCycle: data.billingCycle === "monthly" ? "شهري" : "سنوي",
      paymentMethod: data.paymentMethod,
      referenceId: data.referenceId,
      status: data.status ?? "في الانتظار ⏳",
      contacted: "لم يتم ❌",
    };

    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(payload)) {
      params.append(key, value);
    }

    const url = `${GOOGLE_SHEET_URL}?${params.toString()}`;
    await fetch(url, { method: "GET", mode: "no-cors" });

    console.log("[GoogleSheets] ✅ Submitted");
    return true;
  } catch (error) {
    console.error("[GoogleSheets] ❌ Failed:", error);
    return false;
  }
}
