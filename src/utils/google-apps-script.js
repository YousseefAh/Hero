/**
 * =============================================
 * Google Apps Script — BePrime Checkout Logger
 * =============================================
 *
 * HOW TO USE:
 * ────────────
 * 1. Open Google Sheets (sheets.google.com) and create a new spreadsheet
 *
 * 2. In Row 1, add these column headers (right to left):
 *    A: التاريخ
 *    B: الاسم
 *    C: الموبايل
 *    D: اسم المنصة
 *    E: الخطة
 *    F: السعر
 *    G: الدورة
 *    H: طريقة الدفع
 *    I: رقم المرجع
 *    J: الحالة
 *
 * 3. Go to: Extensions → Apps Script
 *
 * 4. Delete everything in the editor and paste ALL the code below
 *
 * 5. Click: Deploy → New Deployment
 *    - Click the gear icon → select "Web app"
 *    - Description: "BePrime Checkout"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy"
 *
 * 6. Copy the Web App URL (looks like: https://script.google.com/macros/s/XXXXX/exec)
 *
 * 7. In your project, add to .env.local:
 *    NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/XXXXX/exec
 *
 * 8. Restart your dev server (npm run dev)
 *
 * That's it! Every checkout will now appear in your Google Sheet ✅
 */

// ─── Paste this into Google Apps Script ───

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.date,
      data.fullName,
      data.phone,
      data.platformName,
      data.planName,
      data.price,
      data.billingCycle,
      data.paymentMethod,
      data.referenceId,
      data.status
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "BePrime Checkout Logger is running!" }))
    .setMimeType(ContentService.MimeType.JSON);
}
