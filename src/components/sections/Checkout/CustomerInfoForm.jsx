"use client";

import { useCheckout } from "@/contexts/CheckoutContext";
import { useState } from "react";

export default function CustomerInfoForm() {
  const { checkout, updateCustomerInfo, nextStep } = useCheckout();
  const { customerInfo, plan } = checkout;
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!customerInfo.fullName.trim()) newErrors.fullName = "الاسم مطلوب";
    if (!customerInfo.phone.trim()) {
      newErrors.phone = "رقم الموبايل مطلوب";
    } else if (!/^01[0-9]{9}$/.test(customerInfo.phone.replace(/\s/g, ""))) {
      newErrors.phone = "رقم موبايل غير صحيح";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    setTouched({ fullName: true, phone: true });
    if (validate()) nextStep();
  };

  const handleBlur = (key) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    validate();
  };

  const inputClass = (key) =>
    `w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-white/[0.06] ${
      touched[key] && errors[key]
        ? "border-red-500/60 focus:border-red-500"
        : "border-white/10 focus:border-accent-500/50 focus:shadow-[0_0_0_3px_rgba(198,255,0,0.06)]"
    }`;

  return (
    <div className="max-w-lg mx-auto">
      {/* Inline plan summary */}
      {plan && (
        <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 mb-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
              <p className="text-white/70 text-sm font-semibold">{plan.name}</p>
            </div>
            <p className="text-white/30 text-xs">{plan.subheading}</p>
          </div>
          <div className="text-left">
            {plan.price === "تواصل معنا" ? (
              <p className="font-display font-bold text-lg text-white">{plan.price}</p>
            ) : (
              <p className="font-display font-bold text-xl text-white">
                {plan.price} <span className="text-white/40 text-xs">ج.م/شهريًا</span>
              </p>
            )}
          </div>
        </div>
      )}

      {/* Form */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-[1px]">
          <div className="w-full h-full rounded-2xl bg-[#111318]" />
        </div>

        <div className="relative p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
            بيانات <span className="text-accent-500">التواصل</span>
          </h2>
          <p className="text-white/30 text-xs mb-5">هنحتاج اسمك ورقمك عشان نفعّلك الحساب</p>

          <div className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="block text-white/50 text-xs font-medium mb-1.5">
                الاسم الكامل <span className="text-accent-500">*</span>
              </label>
              <input
                type="text"
                autoComplete="name"
                placeholder="مثال: أحمد محمد"
                value={customerInfo.fullName}
                onChange={(e) => updateCustomerInfo("fullName", e.target.value)}
                onBlur={() => handleBlur("fullName")}
                className={inputClass("fullName")}
              />
              {touched.fullName && errors.fullName && (
                <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white/50 text-xs font-medium mb-1.5">
                رقم الموبايل <span className="text-accent-500">*</span>
              </label>
              <input
                type="tel"
                dir="ltr"
                autoComplete="tel"
                placeholder="01xxxxxxxxx"
                value={customerInfo.phone}
                onChange={(e) => updateCustomerInfo("phone", e.target.value)}
                onBlur={() => handleBlur("phone")}
                className={inputClass("phone")}
              />
              {touched.phone && errors.phone && (
                <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleSubmit}
            className="w-full mt-5 relative overflow-hidden px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-primary-800 transition-all duration-300 group active:scale-[0.985]"
            style={{
              background: "linear-gradient(135deg, #C6FF00 0%, #a8e600 100%)",
              boxShadow: "0 0 20px rgba(198,255,0,0.2)",
            }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              style={{ background: "linear-gradient(135deg, #d4ff33 0%, #C6FF00 100%)" }}
            />
            <span className="relative flex items-center justify-center gap-2">
              متابعة إلى الدفع
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
