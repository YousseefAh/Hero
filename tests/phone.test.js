import test from "node:test";
import assert from "node:assert/strict";

import {
  isUsablePhoneNumber,
  normalizePhoneForGateway,
  normalizePhoneForRecords,
} from "../src/lib/phone.js";

test("accepts international phone numbers with country codes and separators", () => {
  assert.equal(isUsablePhoneNumber("+1 (415) 555-2671"), true);
  assert.equal(isUsablePhoneNumber("+971 50 123 4567"), true);
  assert.equal(isUsablePhoneNumber("0044 7700 900123"), true);
});

test("keeps the original phone readable for internal records", () => {
  assert.equal(normalizePhoneForRecords("  +971 50 123 4567  "), "+971 50 123 4567");
});

test("sends Fawaterak a digits-only phone value", () => {
  assert.equal(normalizePhoneForGateway("+971 50 123 4567"), "971501234567");
  assert.equal(normalizePhoneForGateway("٠١٠ ١٢٣٤ ٥٦٧٨"), "01012345678");
});

test("rejects empty, alphabetic, and impossible-length phone values", () => {
  assert.equal(isUsablePhoneNumber(""), false);
  assert.equal(isUsablePhoneNumber("call me"), false);
  assert.equal(isUsablePhoneNumber("123"), false);
  assert.equal(isUsablePhoneNumber("+1234567890123456"), false);
});
