"use client";

import { useCheckout, PAYMENT_METHODS } from "@/contexts/CheckoutContext";
import { useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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

function OnlinePayIcon({ logoUrl }) {
  if (logoUrl) {
    return (
      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoUrl} alt="" className="w-10 h-10 object-contain" />
      </div>
    );
  }
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    </div>
  );
}

export default function PaymentMethods() {
  const { checkout, setPaymentMethod } = useCheckout();
  const { payment, plan, customerInfo } = checkout;
  const { t, isRTL } = useLanguage();
  const tp = t.checkout.payment;

  const [agreedToPolicy, setAgreedToPolicy] = useState(true);
  const [gateway, setGateway] = useState(null);
  const [fawaterakError, setFawaterakError] = useState("");
  const [fawaterakSubmitting, setFawaterakSubmitting] = useState(false);

  const isCustomPrice =
    plan?.price === "تواصل معنا" || plan?.price === "Contact Us";

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const r = await fetch("/api/fawaterak/payment-methods");
        const j = await r.json();
        if (!cancelled) setGateway(j);
      } catch {
        if (!cancelled) setGateway({ configured: false, methods: [] });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!gateway?.configured || !gateway.methods?.length) return;
    if (checkout.payment.method !== "") return;
    const withRedirect = gateway.methods.filter(
      (m) => m.redirect === "true" || m.redirect === true,
    );
    const row = withRedirect[0] || gateway.methods[0];
    const pid = row?.paymentId;
    if (pid == null) return;
    setPaymentMethod("fawaterak", pid);
  }, [gateway, checkout.payment.method, setPaymentMethod]);

  const handleFawaterakPay = async () => {
    if (!agreedToPolicy || payment.method !== "fawaterak") return;
    if (payment.fawaterakPaymentMethodId == null) return;
    if (!customerInfo.email?.trim()) {
      setFawaterakError(isRTL ? "أكمل البريد في الخطوة السابقة." : "Add your email in the previous step.");
      return;
    }

    setFawaterakError("");
    setFawaterakSubmitting(true);
    try {
      const res = await fetch("/api/fawaterak/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethodId: payment.fawaterakPaymentMethodId,
          fullName: customerInfo.fullName,
          email: customerInfo.email,
          phone: customerInfo.phone,
          platformName: customerInfo.platformName,
          planName: plan?.name,
          planPrice: plan?.price,
          billingCycle: plan?.billingCycle,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setFawaterakError(data.error || tp.fawaterakError);
        return;
      }
      if (data.redirectUrl) {
        window.location.assign(data.redirectUrl);
        return;
      }
      setFawaterakError(tp.fawaterakError);
    } catch (e) {
      console.error(e);
      setFawaterakError(tp.fawaterakError);
    } finally {
      setFawaterakSubmitting(false);
    }
  };

  const showOnline =
    !isCustomPrice && gateway?.configured && Array.isArray(gateway.methods) && gateway.methods.length > 0;

  const primaryDisabled =
    !showOnline ||
    payment.method !== "fawaterak" ||
    !agreedToPolicy ||
    payment.fawaterakPaymentMethodId == null ||
    fawaterakSubmitting;

  const handlePrimaryClick = () => {
    handleFawaterakPay();
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {isRTL ? (
            <>
              طريقة <span className="text-accent-500">الدفع</span>
            </>
          ) : (
            <>
              <span className="text-accent-500">Payment</span> method
            </>
          )}
        </h2>
        <p className="text-white/40 text-sm sm:text-base">
          {isRTL ? "اختار طريقة الدفع المناسبة ليك" : "Choose how you want to pay"}
        </p>
      </div>

      <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 mb-6 flex items-center justify-between">
        <div>
          <p className="text-white/50 text-xs mb-0.5">
            {isRTL ? `خطة ${plan?.name}` : `Plan: ${plan?.name}`}
          </p>
          <p className="text-white/30 text-xs">
            {plan?.billingCycle === "monthly"
              ? isRTL
                ? "اشتراك شهري"
                : "Monthly"
              : isRTL
                ? "اشتراك سنوي"
                : "Annual"}
          </p>
        </div>
        <div className="text-left">
          <p className="font-display font-bold text-xl text-white">
            {plan?.price}{" "}
            {!isCustomPrice ? (
              <span className="text-white/50 text-sm">{isRTL ? "ج.م" : "EGP"}</span>
            ) : null}
          </p>
        </div>
      </div>

      {gateway === null ? (
        <p className="text-white/35 text-sm mb-6 text-center">{tp.fawaterakLoading}</p>
      ) : null}

      {showOnline ? (
        <div className="mb-8">
          <p className="text-white/50 text-xs font-semibold tracking-wide uppercase mb-3">
            {tp.fawaterakHeading}
          </p>
          <p className="text-white/35 text-xs mb-3">{tp.fawaterakHint}</p>
          <div className="flex flex-col gap-3">
            {gateway.methods.map((m) => {
              const selected =
                payment.method === "fawaterak" && payment.fawaterakPaymentMethodId === m.paymentId;
              const label = isRTL ? m.name_ar || m.name_en : m.name_en || m.name_ar;
              return (
                <motion.button
                  key={m.paymentId}
                  type="button"
                  onClick={() => setPaymentMethod("fawaterak", m.paymentId)}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full rounded-xl p-4 sm:p-5 transition-all duration-300 border ${
                    selected
                      ? "bg-accent-500/[0.07] border-accent-500/40 shadow-[0_0_20px_rgba(198,255,0,0.08)]"
                      : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.12]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <OnlinePayIcon logoUrl={m.logo} />
                    <div className="flex-1 min-w-0 text-right">
                      <p className="font-bold text-white text-sm sm:text-base text-start">{label}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        selected ? "border-accent-500 bg-accent-500" : "border-white/20"
                      }`}
                    >
                      {selected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-primary-800"
                        />
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      ) : !isCustomPrice && gateway?.configured === false ? (
        <p className="text-amber-500/70 text-sm mb-6 text-center">{tp.fawaterakUnavailable}</p>
      ) : null}

      {payment.method === "fawaterak" && fawaterakError ? (
        <p className="text-red-400/90 text-sm mb-4 text-center">{fawaterakError}</p>
      ) : null}

      <label className="flex items-start gap-3 mb-6 cursor-pointer group">
        <div className="relative mt-0.5 flex-shrink-0">
          <input
            type="checkbox"
            checked={agreedToPolicy}
            onChange={(e) => setAgreedToPolicy(e.target.checked)}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
              agreedToPolicy
                ? "bg-accent-500 border-accent-500"
                : "border-white/20 group-hover:border-white/40"
            }`}
          >
            {agreedToPolicy && (
              <svg className="w-3 h-3 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-white/40 text-xs leading-relaxed">
          {isRTL ? "أوافق على " : "I agree to the "}
          <a
            href="/refund-policy"
            target="_blank"
            className="text-accent-500/70 hover:text-accent-500 underline underline-offset-2 transition-colors"
          >
            {isRTL ? "سياسة الدفع والاسترجاع" : "refund policy"}
          </a>
          {isRTL ? " و" : ", "}
          <a
            href="/privacy-policy"
            target="_blank"
            className="text-accent-500/70 hover:text-accent-500 underline underline-offset-2 transition-colors"
          >
            {isRTL ? "سياسة الخصوصية" : "privacy policy"}
          </a>
          {isRTL ? " و" : ", and "}
          <a
            href="/terms"
            target="_blank"
            className="text-accent-500/70 hover:text-accent-500 underline underline-offset-2 transition-colors"
          >
            {isRTL ? "الشروط والأحكام" : "terms"}
          </a>
        </span>
      </label>

      <button
        type="button"
        onClick={handlePrimaryClick}
        disabled={primaryDisabled}
        className="w-full relative overflow-hidden px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 group disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background:
            payment.method && agreedToPolicy && !fawaterakSubmitting
              ? "linear-gradient(135deg, #C6FF00 0%, #a8e600 100%)"
              : "rgba(255,255,255,0.05)",
          color:
            payment.method && agreedToPolicy && !fawaterakSubmitting
              ? "#1E1B22"
              : "rgba(255,255,255,0.3)",
          boxShadow:
            payment.method && agreedToPolicy && !fawaterakSubmitting
              ? "0 0 28px rgba(198,255,0,0.25), 0 0 56px rgba(198,255,0,0.06)"
              : "none",
        }}
      >
        {payment.method && agreedToPolicy && !fawaterakSubmitting && (
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
            style={{
              background: "linear-gradient(135deg, #d4ff33 0%, #C6FF00 100%)",
              boxShadow: "0 0 48px rgba(198,255,0,0.4)",
            }}
          />
        )}
        <span className="relative flex items-center justify-center gap-2">
          {fawaterakSubmitting
            ? isRTL
              ? "جاري التحويل…"
              : "Redirecting…"
            : payment.method === "fawaterak"
              ? tp.fawaterakPay
              : tp.confirm}
          {!fawaterakSubmitting && (
            <svg className="relative h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
