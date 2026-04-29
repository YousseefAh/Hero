"use client";

import { useCheckout } from "@/contexts/CheckoutContext";
import { CiCircleCheck } from "react-icons/ci";

export default function PlanSummary() {
  const { checkout, nextStep } = useCheckout();
  const { plan } = checkout;

  if (!plan) return null;

  return (
    <div className="max-w-xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          ملخص <span className="text-accent-500">الخطة</span>
        </h2>
        <p className="text-white/40 text-sm sm:text-base">
          راجع تفاصيل خطتك قبل ما تكمل
        </p>
      </div>

      {/* Plan card */}
      <div className="relative rounded-2xl overflow-hidden">
        {/* Glow border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/20 via-transparent to-blue-accent/20 p-[1px]">
          <div className="w-full h-full rounded-2xl bg-[#111318]" />
        </div>

        <div className="relative p-6 sm:p-8">
          {/* Plan badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-xs font-semibold text-accent-500 tracking-wide">
              {plan.name}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3 mb-2">
            <span className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
              {plan.price}
            </span>
            <span className="text-white/40 text-base sm:text-lg mb-1.5">
              {plan.billingCycle === "monthly" ? "ج.م / شهريًا" : "ج.م / سنويًا"}
            </span>
          </div>

          <p className="text-white/50 text-sm mb-8">{plan.subheading}</p>

          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-l from-transparent via-white/10 to-transparent mb-6" />

          {/* Features */}
          <div className="mb-8">
            <p className="text-white/30 text-xs font-medium uppercase tracking-widest mb-4">
              المميزات المشمولة
            </p>
            <ul className="flex flex-col gap-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CiCircleCheck className="w-5 h-5 text-accent-500 stroke-1 flex-shrink-0" />
                  <span className="text-white/70 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={nextStep}
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
              متابعة إلى بياناتك
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
