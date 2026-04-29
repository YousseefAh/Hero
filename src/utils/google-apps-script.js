/**
 * ═══════════════════════════════════════════════════════
 *   BePrime — Google Apps Script (WRITE-ONLY + Auto-Setup)
 * ═══════════════════════════════════════════════════════
 *
 * PASTE THIS ENTIRE CODE into your Apps Script editor.
 *
 * FIRST TIME? Run the "setupSheet" function once:
 *   1. Paste this code
 *   2. Select "setupSheet" from the function dropdown (top bar)
 *   3. Click ▶ Run
 *   4. Authorize when prompted
 *   5. Your sheet is now formatted with headers, dropdowns, colors!
 *
 * THEN DEPLOY:
 *   1. Deploy → New deployment → Web app
 *   2. Execute as: Me
 *   3. Who has access: Anyone
 *   4. Deploy → Copy URL → paste in your .env.local
 *
 * ═══════════════════════════════════════════════════════
 */

// ─── WRITE ONLY — receives data from checkout ───
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var p = e.parameter;
  
  // Only append — no read, no update
  sheet.appendRow([
    p.date,
    p.fullName,
    p.phone,
    p.platformName,
    p.planName,
    p.price,
    p.billingCycle,
    p.paymentMethod,
    p.referenceId,
    p.status || "في الانتظار ⏳",
    p.contacted || "لم يتم ❌"
  ]);
  
  // Apply dropdown validation to the new row
  var lastRow = sheet.getLastRow();
  
  // Status dropdown (column J = 10)
  var statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(["في الانتظار ⏳", "تم الدفع ✅", "ملغي ❌"])
    .setAllowInvalid(false)
    .build();
  sheet.getRange(lastRow, 10).setDataValidation(statusRule);
  
  // Contacted dropdown (column K = 11)
  var contactedRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(["لم يتم ❌", "تم التواصل ✅", "لا يرد 📵"])
    .setAllowInvalid(false)
    .build();
  sheet.getRange(lastRow, 11).setDataValidation(contactedRule);
  
  // Color the status cell based on value
  colorStatusCell(sheet, lastRow, 10);
  colorStatusCell(sheet, lastRow, 11);
  
  return ContentService.createTextOutput("ok");
}

// ─── Color cells based on emoji status ───
function colorStatusCell(sheet, row, col) {
  var cell = sheet.getRange(row, col);
  var val = cell.getValue().toString();
  
  if (val.indexOf("✅") > -1) {
    cell.setBackground("#d4edda").setFontColor("#155724");
  } else if (val.indexOf("❌") > -1) {
    cell.setBackground("#fff3cd").setFontColor("#856404");
  } else if (val.indexOf("⏳") > -1) {
    cell.setBackground("#fff3cd").setFontColor("#856404");
  } else if (val.indexOf("📵") > -1) {
    cell.setBackground("#f8d7da").setFontColor("#721c24");
  }
}

// ─── RUN THIS ONCE to set up the sheet ───
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  // Rename sheet
  sheet.setName("طلبات BePrime");
  
  // Set RTL
  sheet.setRightToLeft(true);
  
  // Headers
  var headers = [
    "التاريخ",
    "الاسم", 
    "الموبايل",
    "اسم المنصة",
    "الخطة",
    "السعر",
    "الدورة",
    "طريقة الدفع",
    "رقم المرجع",
    "الحالة",
    "التواصل"
  ];
  
  // Write headers
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);
  
  // Style headers
  headerRange
    .setBackground("#1a1a2e")
    .setFontColor("#ffffff")
    .setFontWeight("bold")
    .setFontSize(11)
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle")
    .setBorder(true, true, true, true, true, true, "#333366", SpreadsheetApp.BorderStyle.SOLID);
  
  // Set row height for header
  sheet.setRowHeight(1, 40);
  
  // Set column widths
  var widths = [140, 160, 130, 140, 140, 90, 80, 120, 140, 130, 130];
  for (var i = 0; i < widths.length; i++) {
    sheet.setColumnWidth(i + 1, widths[i]);
  }
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Set alternating colors for data area
  sheet.getRange(2, 1, 998, headers.length)
    .setBackground("#ffffff")
    .setFontSize(10)
    .setVerticalAlignment("middle");
  
  // Add conditional formatting for Status column (J)
  addConditionalFormatting(sheet, "J2:J1000");
  
  // Add conditional formatting for Contacted column (K) 
  addConditionalFormatting(sheet, "K2:K1000");
  
  // Set number format for price column
  sheet.getRange("F2:F1000").setNumberFormat("#,##0");
  
  // Set phone column to plain text (prevent scientific notation)
  sheet.getRange("C2:C1000").setNumberFormat("@");
  
  SpreadsheetApp.flush();
  
  // Show success
  SpreadsheetApp.getUi().alert(
    "✅ تم إعداد الشيت بنجاح!\n\n" +
    "الخطوة التالية:\n" +
    "1. اضغط Deploy → New deployment\n" +
    "2. اختار Web app → Anyone\n" +
    "3. انسخ الرابط وحطه في .env.local"
  );
}

// ─── Conditional formatting helper ───
function addConditionalFormatting(sheet, range) {
  var r = sheet.getRange(range);
  
  // Green for ✅
  var ruleGreen = SpreadsheetApp.newConditionalFormatRule()
    .whenTextContains("✅")
    .setBackground("#d4edda")
    .setFontColor("#155724")
    .setRanges([r])
    .build();
  
  // Yellow for ⏳
  var ruleYellow = SpreadsheetApp.newConditionalFormatRule()
    .whenTextContains("⏳")
    .setBackground("#fff3cd")
    .setFontColor("#856404")
    .setRanges([r])
    .build();
  
  // Red-ish for ❌
  var ruleRed = SpreadsheetApp.newConditionalFormatRule()
    .whenTextContains("❌")
    .setBackground("#f8d7da")
    .setFontColor("#721c24")
    .setRanges([r])
    .build();
    
  // Orange for 📵
  var ruleOrange = SpreadsheetApp.newConditionalFormatRule()
    .whenTextContains("📵")
    .setBackground("#ffe0b2")
    .setFontColor("#e65100")
    .setRanges([r])
    .build();
  
  var rules = sheet.getConditionalFormatRules();
  rules.push(ruleGreen, ruleYellow, ruleRed, ruleOrange);
  sheet.setConditionalFormatRules(rules);
}
