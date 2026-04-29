"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export default function PayCreatePage() {
  const [serviceName, setServiceName] = useState("");
  const [amount, setAmount] = useState("");
  const [copied, setCopied] = useState(false);

  const isValid = serviceName.trim() && amount.trim() && !isNaN(Number(amount));

  const generatedLink = isValid
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/pay?name=${encodeURIComponent(serviceName.trim())}&amount=${encodeURIComponent(amount.trim())}`
    : "";

  const handleCopy = useCallback(async () => {
    if (!generatedLink) return;
    try {
      await navigator.clipboard.writeText(generatedLink);
    } catch {
      const el = document.createElement("textarea");
      el.value = generatedLink;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }, [generatedLink]);

  return (
    <div
      className="min-h-[100dvh] flex items-center justify-center px-4"
      dir="rtl"
      style={{ background: "linear-gradient(160deg, #08080C 0%, #0B0C14 40%, #0A0D0B 100%)" }}
    >
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)" }}
        />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="https://res.cloudinary.com/dgqwtzgwo/image/upload/v1771000992/branding/pwa-icon/dibvx80cvmgpnmsh1irl.png"
            alt="BePrime"
            width={100}
            height={36}
            className="w-auto h-8 object-contain"
          />
        </div>

        {/* Card */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/10 via-transparent to-blue-accent/5 p-[1px]">
            <div className="w-full h-full rounded-2xl" style={{ background: "linear-gradient(160deg, #101218 0%, #0D0F15 100%)" }} />
          </div>
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />

          <div className="relative p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">إنشاء رابط دفع</h1>
                <p className="text-white/30 text-xs">حدد الخدمة والمبلغ وانسخ الرابط</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Service name */}
              <div>
                <label className="block text-white/40 text-[11px] font-medium mb-1.5">اسم الخدمة</label>
                <input
                  type="text"
                  placeholder="مثال: اشتراك 3 شهور"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/15 outline-none transition-all duration-300 focus:bg-white/[0.05] focus:border-accent-500/40 focus:shadow-[0_0_0_3px_rgba(198,255,0,0.04)]"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-white/40 text-[11px] font-medium mb-1.5">المبلغ (ج.م)</label>
                <input
                  type="number"
                  dir="ltr"
                  placeholder="5000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/15 outline-none transition-all duration-300 focus:bg-white/[0.05] focus:border-accent-500/40 focus:shadow-[0_0_0_3px_rgba(198,255,0,0.04)]"
                />
              </div>
            </div>

            {/* Preview */}
            {isValid && (
              <div className="mt-5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/30 text-[10px] uppercase tracking-wider font-semibold">معاينة الرابط</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
                    <span className="text-accent-500/70 text-[10px] font-medium">جاهز</span>
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg px-3 py-2.5 mb-3">
                  <p className="text-white/40 text-[11px] font-mono break-all leading-relaxed" dir="ltr">
                    {generatedLink}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/20">
                    {serviceName} — <span className="font-display font-bold text-accent-500">{Number(amount).toLocaleString()}</span> ج.م
                  </span>
                </div>
              </div>
            )}

            {/* Copy button */}
            <button
              onClick={handleCopy}
              disabled={!isValid}
              className="w-full mt-5 relative overflow-hidden py-3.5 rounded-xl font-bold text-sm transition-all duration-300 group active:scale-[0.985] disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                background: isValid
                  ? "linear-gradient(135deg, #C6FF00 0%, #a8e600 100%)"
                  : "rgba(255,255,255,0.05)",
                color: isValid ? "#1E1B22" : "rgba(255,255,255,0.3)",
                boxShadow: isValid ? "0 0 24px rgba(198,255,0,0.2)" : "none",
              }}
            >
              {isValid && (
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ background: "linear-gradient(135deg, #d4ff33 0%, #C6FF00 100%)" }}
                />
              )}
              <span className="relative flex items-center justify-center gap-2">
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    تم نسخ الرابط!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    نسخ الرابط
                  </>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white/10 text-[10px] mt-6">
          هذه الصفحة مخفية ومتاحة للأدمن فقط
        </p>
      </div>
    </div>
  );
}
