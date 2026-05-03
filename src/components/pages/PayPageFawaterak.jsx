"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

function PayContent() {
  const params = useSearchParams();
  const serviceName = params.get("name")?.trim() || "";
  const amountStr = params.get("amount")?.trim() || "";

  const amount = useMemo(() => {
    const n = Number(String(amountStr).replace(/,/g, ""));
    return Number.isFinite(n) && n > 0 ? String(n) : "";
  }, [amountStr]);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const [gateway, setGateway] = useState(null);
  const [paymentMethodId, setPaymentMethodId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const r = await fetch("/api/fawaterak/payment-methods");
        const j = await r.json();
        if (cancelled) return;
        setGateway(j);
        if (j?.configured && Array.isArray(j.methods) && j.methods.length > 0) {
          const redirectList = j.methods.filter((m) => m.redirect === "true" || m.redirect === true);
          setPaymentMethodId((redirectList[0] || j.methods[0]).paymentId);
        }
      } catch {
        if (!cancelled) setGateway({ configured: false, methods: [] });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!serviceName || !amount) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center px-4" dir="rtl" style={{ background: "#08080C" }}>
        <p className="text-white/40 text-sm">رابط غير صالح</p>
      </div>
    );
  }

  const validate = () => {
    const e = {};
    if (!fullName.trim()) e.fullName = "الاسم مطلوب";
    if (!phone.trim()) e.phone = "رقم الموبايل مطلوب";
    else if (!/^01[0-9]{9}$/.test(phone.replace(/\s/g, ""))) e.phone = "رقم موبايل غير صحيح";
    const em = email.trim();
    if (!em) e.email = "البريد مطلوب";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) e.email = "بريد غير صالح";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePay = async () => {
    if (submitting) return;
    if (!validate()) return;
    if (!paymentMethodId) return;

    setApiError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/fawaterak/init", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          paymentMethodId,
          fullName,
          email,
          phone,
          platformName: "",
          planName: serviceName,
          planPrice: amount,
          billingCycle: "once",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setApiError(data.error || "تعذر بدء الدفع. حاول مرة أخرى.");
        return;
      }
      if (!data.redirectUrl) {
        setApiError("لم يتم استلام رابط الدفع. حاول مرة أخرى.");
        return;
      }
      window.location.assign(data.redirectUrl);
    } catch {
      setApiError("تعذر بدء الدفع. حاول مرة أخرى.");
    } finally {
      setSubmitting(false);
    }
  };

  const methods = gateway?.configured && Array.isArray(gateway.methods) ? gateway.methods : [];

  const inputBase =
    "w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/15 outline-none transition-all duration-300 focus:bg-white/[0.05]";
  const inputOk =
    "border-white/[0.07] focus:border-accent-500/40 focus:shadow-[0_0_0_3px_rgba(198,255,0,0.04)]";
  const inputErr = "border-red-500/50 focus:border-red-500";

  return (
    <div
      className="min-h-[100dvh] flex items-start justify-center px-4"
      dir="rtl"
      style={{ background: "linear-gradient(160deg, #08080C 0%, #0B0C14 40%, #0A0D0B 100%)" }}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)" }}
        />
      </div>

      <div className="relative w-full max-w-lg py-5 min-h-[100dvh] flex flex-col">
        <div className="flex justify-center mb-5">
          <Image
            src="https://res.cloudinary.com/dgqwtzgwo/image/upload/v1771000992/branding/pwa-icon/dibvx80cvmgpnmsh1irl.png"
            alt="BePrime"
            width={100}
            height={36}
            className="w-auto h-7 object-contain"
          />
        </div>

        <div className="rounded-xl bg-white/[0.03] border border-accent-500/10 p-4 mb-5 flex items-center justify-between">
          <div className="min-w-0">
            <p className="text-white/70 text-sm font-semibold truncate">{serviceName}</p>
            <p className="text-white/25 text-[11px] mt-0.5">دفع إلكتروني عبر Fawaterak</p>
          </div>
          <p className="font-display font-bold text-lg text-accent-500">
            {Number(amount).toLocaleString()} <span className="text-xs text-white/30">ج.م</span>
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-[1px]">
                <div className="w-full h-full rounded-2xl" style={{ background: "#101218" }} />
              </div>

              <div className="relative p-5 sm:p-6">
                <h2 className="text-lg font-bold text-white mb-1">
                  بيانات <span className="text-accent-500">الدفع</span>
                </h2>
                <p className="text-white/30 text-xs mb-5">أدخل بياناتك ثم سيتم تحويلك لصفحة الدفع الآمنة</p>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-white/40 text-[11px] font-medium mb-1.5">الاسم الكامل</label>
                    <input
                      type="text"
                      placeholder="مثال: أحمد محمد"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`${inputBase} ${errors.fullName ? inputErr : inputOk}`}
                    />
                    {errors.fullName ? <p className="text-red-400 text-[10px] mt-1">{errors.fullName}</p> : null}
                  </div>

                  <div>
                    <label className="block text-white/40 text-[11px] font-medium mb-1.5">رقم الموبايل</label>
                    <input
                      type="tel"
                      dir="ltr"
                      placeholder="01xxxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`${inputBase} ${errors.phone ? inputErr : inputOk}`}
                    />
                    {errors.phone ? <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p> : null}
                  </div>

                  <div>
                    <label className="block text-white/40 text-[11px] font-medium mb-1.5">البريد الإلكتروني</label>
                    <input
                      type="email"
                      dir="ltr"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                    />
                    {errors.email ? <p className="text-red-400 text-[10px] mt-1">{errors.email}</p> : null}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-white/35 text-xs mb-2">اختار طريقة الدفع</p>

                  {gateway === null ? (
                    <p className="text-white/35 text-sm text-center py-3">جاري تحميل طرق الدفع…</p>
                  ) : gateway?.configured === false ? (
                    <p className="text-amber-500/70 text-sm text-center py-3">الدفع الإلكتروني غير متاح حاليًا.</p>
                  ) : (
                    <div className="flex flex-col gap-2">
                      {methods.map((m) => (
                        <button
                          key={m.paymentId}
                          type="button"
                          onClick={() => setPaymentMethodId(m.paymentId)}
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-white flex items-center justify-between transition-colors ${
                            paymentMethodId === m.paymentId
                              ? "border-accent-500/60 bg-accent-500/10"
                              : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                          }`}
                        >
                          <span>{m.name_ar || m.name_en}</span>
                          <span className="text-white/25 text-xs">{m.name_en && m.name_ar ? m.name_en : ""}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {apiError ? <p className="text-red-400 text-sm mt-4 text-center">{apiError}</p> : null}

                <button
                  onClick={handlePay}
                  disabled={submitting || gateway?.configured !== true || !paymentMethodId}
                  className="w-full mt-5 relative overflow-hidden py-3.5 rounded-xl font-bold text-sm transition-all duration-300 group active:scale-[0.985] disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #C6FF00 0%, #a8e600 100%)",
                    color: "#1E1B22",
                    boxShadow: "0 0 20px rgba(198,255,0,0.2)",
                  }}
                >
                  <span className="relative flex items-center justify-center gap-2">
                    {submitting ? "جاري التحويل…" : "المتابعة للدفع الآمن"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function PayPageFawaterak() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ background: "#08080C" }} />}>
      <PayContent />
    </Suspense>
  );
}

