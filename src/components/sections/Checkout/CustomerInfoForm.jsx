"use client";

import { useCheckout } from "@/contexts/CheckoutContext";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CustomerInfoForm() {
  const { checkout, updateCustomerInfo, nextStep } = useCheckout();
  const { t, isRTL } = useLanguage();
  const c = t.checkout.customerInfo;
  const { customerInfo, plan } = checkout;
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!customerInfo.fullName.trim()) newErrors.fullName = isRTL ? "الاسم مطلوب" : "Name is required";
    if (!customerInfo.phone.trim()) {
      newErrors.phone = isRTL ? "رقم الموبايل مطلوب" : "Phone number is required";
    } else if (!/^01[0-9]{9}$/.test(customerInfo.phone.replace(/\s/g, ""))) {
      newErrors.phone = isRTL ? "رقم موبايل غير صحيح" : "Invalid phone number";
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

  const inputBase = "w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/15 outline-none transition-all duration-300 focus:bg-white/[0.05]";
  const inputOk = "border-white/[0.07] focus:border-accent-500/40 focus:shadow-[0_0_0_3px_rgba(198,255,0,0.04)]";
  const inputErr = "border-red-500/50 focus:border-red-500";

  return (
    <div className="max-w-lg mx-auto">
      {/* Inline plan card */}
      {plan && (
        <div className="relative rounded-xl overflow-hidden mb-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/[0.04] to-transparent" />
          <div className="relative flex items-center justify-between p-4 border border-accent-500/10 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent-500/10 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <p className="text-white/80 text-sm font-semibold">{plan.name}</p>
                <p className="text-white/25 text-[11px]">{plan.subheading}</p>
              </div>
            </div>
            {plan.price !== "تواصل معنا" && plan.price !== "Contact Us" && (
              <div className="text-left">
                <p className="font-display font-bold text-lg text-accent-500">{plan.price}</p>
                <p className="text-white/25 text-[10px]">{isRTL ? 'ج.م/شهريًا' : 'EGP/mo'}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Form card */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-[1px]">
          <div className="w-full h-full rounded-2xl" style={{ background: "linear-gradient(160deg, #101218 0%, #0D0F15 100%)" }} />
        </div>

        <div className="relative p-5 sm:p-6">
          <div className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="block text-white/40 text-[11px] font-medium mb-1.5 tracking-wide">
                {c.fullName} <span className="text-accent-500">*</span>
              </label>
              <input
                type="text" autoComplete="name" placeholder={isRTL ? 'مثال: أحمد محمد' : 'e.g. Ahmed Mohamed'}
                value={customerInfo.fullName}
                onChange={(e) => updateCustomerInfo("fullName", e.target.value)}
                onBlur={() => handleBlur("fullName")}
                className={`${inputBase} ${touched.fullName && errors.fullName ? inputErr : inputOk}`}
              />
              {touched.fullName && errors.fullName && (
                <p className="text-red-400 text-[10px] mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white/40 text-[11px] font-medium mb-1.5 tracking-wide">
                {c.phone} <span className="text-accent-500">*</span>
              </label>
              <input
                type="tel" dir="ltr" autoComplete="tel" placeholder="01xxxxxxxxx"
                value={customerInfo.phone}
                onChange={(e) => updateCustomerInfo("phone", e.target.value)}
                onBlur={() => handleBlur("phone")}
                className={`${inputBase} ${touched.phone && errors.phone ? inputErr : inputOk}`}
              />
              {touched.phone && errors.phone && (
                <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Platform name */}
            <div>
              <label className="block text-white/40 text-[11px] font-medium mb-1.5 tracking-wide">
                {c.platformName} <span className="text-white/15">{isRTL ? '(اختياري)' : '(optional)'}</span>
              </label>
              <input
                type="text" autoComplete="organization" placeholder={isRTL ? 'مثال: FitZone' : 'e.g. FitZone'}
                value={customerInfo.platformName}
                onChange={(e) => updateCustomerInfo("platformName", e.target.value)}
                className={`${inputBase} ${inputOk}`}
              />
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleSubmit}
            className="w-full mt-5 relative overflow-hidden py-3.5 rounded-xl font-bold text-sm text-primary-800 transition-all duration-300 group active:scale-[0.985]"
            style={{
              background: "linear-gradient(135deg, #C6FF00 0%, #a8e600 100%)",
              boxShadow: "0 0 24px rgba(198,255,0,0.2)",
            }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              style={{ background: "linear-gradient(135deg, #d4ff33 0%, #C6FF00 100%)" }}
            />
            <span className="relative flex items-center justify-center gap-2">
              {c.next}
              <svg className={`h-4 w-4 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M11 17l-5-5m0 0l5-5m-5 5h12" : "M13 7l5 5m0 0l-5 5m5-5H6"} />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
