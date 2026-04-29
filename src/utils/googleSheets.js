/**
 * Google Sheets Integration
 * ─────────────────────────
 * Sends checkout data to a Google Sheet via a deployed Apps Script Web App.
 *
 * SETUP (one-time, ~3 minutes):
 * 1. Open Google Sheets → create a new sheet
 * 2. Name the columns in Row 1:
 *    التاريخ | الاسم | الموبايل | اسم المنصة | الخطة | السعر | طريقة الدفع | رقم المرجع | الحالة
 * 3. Go to Extensions → Apps Script
 * 4. Delete everything and paste the code from google-apps-script.js (see below)
 * 5. Click Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the deployment URL and paste it in your .env.local:
 *    NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_ID/exec
 */

const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

/**
 * Submit checkout data to Google Sheets
 * @param {Object} data - The checkout data
 * @param {string} data.fullName - Customer's full name
 * @param {string} data.phone - Customer's phone number
 * @param {string} data.platformName - Desired platform name (optional)
 * @param {string} data.planName - Selected plan name
 * @param {string} data.price - Plan price
 * @param {string} data.billingCycle - monthly or yearly
 * @param {string} data.paymentMethod - Payment method name
 * @param {string} data.referenceId - Generated reference ID
 * @returns {Promise<boolean>} - Whether submission succeeded
 */
export async function submitToGoogleSheets(data) {
  if (!GOOGLE_SHEET_URL) {
    console.warn("[GoogleSheets] NEXT_PUBLIC_GOOGLE_SHEET_URL not set. Skipping.");
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
      status: "في الانتظار ⏳",
    };

    // Google Apps Script redirects POST requests, which causes fetch with
    // no-cors to lose the body. Instead, send data as URL query parameters
    // via GET request, which survives the redirect reliably.
    const params = new URLSearchParams();
    params.append("action", "write");
    for (const [key, value] of Object.entries(payload)) {
      params.append(key, value);
    }

    const url = `${GOOGLE_SHEET_URL}?${params.toString()}`;
    await fetch(url, { method: "GET", mode: "no-cors" });

    console.log("[GoogleSheets] ✅ Data submitted successfully");
    return true;
  } catch (error) {
    console.error("[GoogleSheets] ❌ Failed to submit:", error);
    return false;
  }
}
