const EASTERN_ARABIC_ZERO = "٠".charCodeAt(0);
const PERSIAN_ZERO = "۰".charCodeAt(0);

export function normalizePhoneDigits(value) {
  return String(value ?? "").replace(/[\u0660-\u0669\u06f0-\u06f9]/g, (digit) => {
    const code = digit.charCodeAt(0);
    if (code >= EASTERN_ARABIC_ZERO && code <= EASTERN_ARABIC_ZERO + 9) {
      return String(code - EASTERN_ARABIC_ZERO);
    }
    return String(code - PERSIAN_ZERO);
  });
}

export function normalizePhoneForRecords(value) {
  return normalizePhoneDigits(value).trim().replace(/\s+/g, " ");
}

export function normalizePhoneForGateway(value) {
  return normalizePhoneDigits(value).replace(/\D/g, "");
}

export function isUsablePhoneNumber(value) {
  const readable = normalizePhoneForRecords(value);
  if (!readable) return false;
  if (!/^[\d\s()+.-]+$/.test(readable)) return false;

  const digits = normalizePhoneForGateway(readable);
  return digits.length >= 7 && digits.length <= 15;
}
