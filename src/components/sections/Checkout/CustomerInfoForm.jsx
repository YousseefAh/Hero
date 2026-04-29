"use client";

import { useCheckout } from "@/contexts/CheckoutContext";
import { useState } from "react";

const FIELDS = [
  { key: "fullName", label: "الاسم الكامل", type: "text", placeholder: "مثال: أحمد محمد", required: true, autoComplete: "name" },
  { key: "email", label: "البريد الإلكتروني", type: "email", placeholder: "example@email.com", required: true, dir: "ltr", autoComplete: "email" },
  { key: "phone", label: "رقم الموبايل", type: "tel", placeholder: "01xxxxxxxxx", required: true, dir: "ltr", autoComplete: "tel" },
  { key: "businessName", label: "اسم الجيم / البيزنس (اختياري)", type: "text", placeholder: "مثال: FitZone", required: false, autoComplete: "organization" },
];

export default function CustomerInfoForm() {
  const { checkout, updateCustomerInfo, nextStep } = useCheckout();
  const { customerInfo } = checkout;
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!customerInfo.fullName.trim()) {
      newErrors.fullName = "الاسم مطلوب";
    }

    if (!customerInfo.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = "بريد إلكتروني غير صحيح";
    }

    if (!customerInfo.phone.trim()) {
      newErrors.phone = "رقم الموبايل مطلوب";
    } else if (!/^01[0-9]{9}$/.test(customerInfo.phone.replace(/\s/g, ""))) {
      newErrors.phone = "رقم موبايل غير صحيح (مثال: 01120920078)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    // Mark all as touched
    const allTouched = {};
    FIELDS.forEach((f) => { if (f.required) allTouched[f.key] = true; });
    setTouched(allTouched);

    if (validate()) {
      nextStep();
    }
  };

  const handleBlur = (key) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    validate();
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          بيانات <span className="text-accent-500">التواصل</span>
        </h2>
        <p className="text-white/40 text-sm sm:text-base">
          هنحتاج شوية معلومات عشان نفعّلك الحساب
        </p>
      </div>

      {/* Form card */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-[1px]">
          <div className="w-full h-full rounded-2xl bg-[#111318]" />
        </div>

        <div className="relative p-6 sm:p-8">
          <div className="flex flex-col gap-5">
            {FIELDS.map((field) => (
              <div key={field.key} className="relative">
                <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
                  {field.label}
                  {field.required && <span className="text-accent-500 mr-1">*</span>}
                </label>
                <input
                  type={field.type}
                  dir={field.dir || "rtl"}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  value={customerInfo[field.key]}
                  onChange={(e) => updateCustomerInfo(field.key, e.target.value)}
                  onBlur={() => handleBlur(field.key)}
                  className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3.5 text-white text-sm sm:text-base placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-white/[0.06] ${
                    touched[field.key] && errors[field.key]
                      ? "border-red-500/60 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
                      : "border-white/10 focus:border-accent-500/50 focus:shadow-[0_0_0_3px_rgba(198,255,0,0.06)]"
                  }`}
                />
                {touched[field.key] && errors[field.key] && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors[field.key]}
                  </p>
                )}
              </div>
            ))}

            {/* Client count (auto-filled from plan if available) */}
            <div>
              <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
                عدد العملاء المتوقع (اختياري)
              </label>
              <input
                type="number"
                dir="ltr"
                placeholder="مثال: 50"
                value={customerInfo.clientCount}
                onChange={(e) => updateCustomerInfo("clientCount", e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm sm:text-base placeholder:text-white/20 outline-none transition-all duration-300 focus:border-accent-500/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(198,255,0,0.06)]"
              />
            </div>
          </div>

          {/* Privacy notice */}
          <div className="mt-6 mb-6 flex items-start gap-2.5 text-white/25 text-xs leading-relaxed">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>
              بالمتابعة، أنت موافق على{" "}
              <a href="/privacy-policy" target="_blank" className="text-accent-500/60 hover:text-accent-500 underline underline-offset-2 transition-colors">
                سياسة الخصوصية
              </a>{" "}
              و{" "}
              <a href="/terms" target="_blank" className="text-accent-500/60 hover:text-accent-500 underline underline-offset-2 transition-colors">
                الشروط والأحكام
              </a>
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={handleSubmit}
            className="w-full relative overflow-hidden px-8 py-4 rounded-xl font-bold text-base sm:text-lg text-primary-800 transition-all duration-300 group"
            style={{
              background: "linear-gradient(135deg, #C6FF00 0%, #a8e600 100%)",
              boxShadow: "0 0 28px rgba(198,255,0,0.25), 0 0 56px rgba(198,255,0,0.06)",
            }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              style={{ background: "linear-gradient(135deg, #d4ff33 0%, #C6FF00 100%)", boxShadow: "0 0 48px rgba(198,255,0,0.4)" }}
            />
            <span className="relative flex items-center justify-center gap-2">
              متابعة إلى الدفع
              <svg className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
