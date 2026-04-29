"use client";

import { useCheckout, PAYMENT_METHODS } from "@/contexts/CheckoutContext";
import { useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
        copied
          ? "bg-accent-500/20 text-accent-500 border border-accent-500/30"
          : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/70"
      }`}
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          تم النسخ
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          نسخ
        </>
      )}
    </button>
  );
}

function VodafoneIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.2)]">
      <span className="text-white font-bold text-lg font-display">V</span>
    </div>
  );
}

function InstaPayIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)]">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
  );
}

export default function PaymentMethods() {
  const { checkout, setPaymentMethod, confirmPayment } = useCheckout();
  const { payment, plan } = checkout;
  const [agreedToPolicy, setAgreedToPolicy] = useState(true);

  const methods = Object.values(PAYMENT_METHODS);

  const handleConfirm = async () => {
    if (!payment.method || !agreedToPolicy) return;

    // Send notification via EmailJS (if configured)
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            to_name: "BePrime Team",
            from_name: checkout.customerInfo.fullName,
            message: `🔔 طلب اشتراك جديد!\n\n📋 الخطة: ${plan.name}\n💰 المبلغ: ${plan.price} ج.م (${plan.billingCycle === "monthly" ? "شهري" : "سنوي"})\n\n👤 الاسم: ${checkout.customerInfo.fullName}\n📱 الموبايل: ${checkout.customerInfo.phone}\n\n💳 طريقة الدفع: ${PAYMENT_METHODS[payment.method]?.name}`,
          }
        );
      }
    } catch (e) {
      console.warn("EmailJS notification failed:", e);
    }

    confirmPayment();
  };

  const selectedMethodData = payment.method ? PAYMENT_METHODS[payment.method] : null;

  return (
    <div className="max-w-xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          طريقة <span className="text-accent-500">الدفع</span>
        </h2>
        <p className="text-white/40 text-sm sm:text-base">
          اختار طريقة الدفع المناسبة ليك
        </p>
      </div>

      {/* Order summary mini */}
      <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 mb-6 flex items-center justify-between">
        <div>
          <p className="text-white/50 text-xs mb-0.5">خطة {plan?.name}</p>
          <p className="text-white/30 text-xs">
            {plan?.billingCycle === "monthly" ? "اشتراك شهري" : "اشتراك سنوي"}
          </p>
        </div>
        <div className="text-left">
          <p className="font-display font-bold text-xl text-white">{plan?.price} <span className="text-white/50 text-sm">ج.م</span></p>
        </div>
      </div>

      {/* Payment method cards */}
      <div className="flex flex-col gap-3 mb-6">
        {methods.map((method) => (
          <motion.button
            key={method.id}
            onClick={() => setPaymentMethod(method.id)}
            whileTap={{ scale: 0.98 }}
            className={`relative w-full rounded-xl p-4 sm:p-5 text-right transition-all duration-300 ${
              payment.method === method.id
                ? "bg-accent-500/[0.07] border-accent-500/40 shadow-[0_0_20px_rgba(198,255,0,0.08)]"
                : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.12]"
            } border`}
          >
            <div className="flex items-center gap-4">
              {method.id === "vodafone_cash" ? <VodafoneIcon /> : <InstaPayIcon />}

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-white text-sm sm:text-base">{method.name}</p>
                  <span className="text-white/20 text-xs">{method.nameEn}</span>
                </div>
                <p className="text-white/35 text-xs">{method.instructions}</p>
              </div>

              {/* Radio indicator */}
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                payment.method === method.id
                  ? "border-accent-500 bg-accent-500"
                  : "border-white/20"
              }`}>
                {payment.method === method.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-primary-800"
                  />
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Selected method details */}
      {selectedMethodData && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-accent-500/20 bg-accent-500/[0.04] p-5 sm:p-6 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-accent-500 font-bold text-sm">خطوات الدفع</p>
          </div>

          {/* Step 1: Copy number */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full bg-accent-500/20 text-accent-500 flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
            <div className="flex-1">
              <p className="text-white/60 text-sm mb-2">
                {selectedMethodData.id === "vodafone_cash"
                  ? "حوّل المبلغ على رقم فودافون كاش:"
                  : "حوّل المبلغ على حساب إنستاباي:"}
              </p>
              <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2.5">
                <span className="font-display font-bold text-white text-base sm:text-lg tracking-wider flex-1" dir="ltr">
                  {selectedMethodData.number}
                </span>
                <CopyButton text={selectedMethodData.number} />
              </div>
            </div>
          </div>

          {/* Step 2: Amount */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full bg-accent-500/20 text-accent-500 flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
            <div className="flex-1">
              <p className="text-white/60 text-sm">
                المبلغ المطلوب تحويله:
              </p>
              <p className="font-display font-bold text-accent-500 text-xl mt-1">{plan?.price} ج.م</p>
            </div>
          </div>

          {/* Step 3: Send receipt */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-accent-500/20 text-accent-500 flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
            <div className="flex-1">
              <p className="text-white/60 text-sm mb-2">
                بعد التحويل، ابعتلنا إيصال الدفع على واتساب:
              </p>
              <a
                href={`https://wa.me/201120920078?text=${encodeURIComponent(`مرحبًا! أنا ${checkout.customerInfo.fullName}\nحولت مبلغ ${plan?.price} ج.م لخطة ${plan?.name}\nطريقة الدفع: ${selectedMethodData.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] rounded-lg px-4 py-2 text-sm font-medium hover:bg-[#25D366]/30 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                ابعت الإيصال على واتساب
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Policy agreement */}
      <label className="flex items-start gap-3 mb-6 cursor-pointer group">
        <div className="relative mt-0.5 flex-shrink-0">
          <input
            type="checkbox"
            checked={agreedToPolicy}
            onChange={(e) => setAgreedToPolicy(e.target.checked)}
            className="sr-only"
          />
          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
            agreedToPolicy
              ? "bg-accent-500 border-accent-500"
              : "border-white/20 group-hover:border-white/40"
          }`}>
            {agreedToPolicy && (
              <svg className="w-3 h-3 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-white/40 text-xs leading-relaxed">
          أوافق على{" "}
          <a href="/refund-policy" target="_blank" className="text-accent-500/70 hover:text-accent-500 underline underline-offset-2 transition-colors">
            سياسة الدفع والاسترجاع
          </a>{" "}
          و{" "}
          <a href="/privacy-policy" target="_blank" className="text-accent-500/70 hover:text-accent-500 underline underline-offset-2 transition-colors">
            سياسة الخصوصية
          </a>{" "}
          و{" "}
          <a href="/terms" target="_blank" className="text-accent-500/70 hover:text-accent-500 underline underline-offset-2 transition-colors">
            الشروط والأحكام
          </a>
        </span>
      </label>

      {/* Confirm button */}
      <button
        onClick={handleConfirm}
        disabled={!payment.method || !agreedToPolicy}
        className="w-full relative overflow-hidden px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 group disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background: payment.method && agreedToPolicy
            ? "linear-gradient(135deg, #C6FF00 0%, #a8e600 100%)"
            : "rgba(255,255,255,0.05)",
          color: payment.method && agreedToPolicy ? "#1E1B22" : "rgba(255,255,255,0.3)",
          boxShadow: payment.method && agreedToPolicy
            ? "0 0 28px rgba(198,255,0,0.25), 0 0 56px rgba(198,255,0,0.06)"
            : "none",
        }}
      >
        {payment.method && agreedToPolicy && (
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
            style={{ background: "linear-gradient(135deg, #d4ff33 0%, #C6FF00 100%)", boxShadow: "0 0 48px rgba(198,255,0,0.4)" }}
          />
        )}
        <span className="relative flex items-center justify-center gap-2">
          تأكيد الطلب
          <svg className="relative h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </button>
    </div>
  );
}
