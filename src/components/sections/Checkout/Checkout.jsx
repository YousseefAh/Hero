"use client";

import { useCheckout } from "@/contexts/CheckoutContext";
import { motion, AnimatePresence } from "motion/react";
import PlanSummary from "./PlanSummary";
import CustomerInfoForm from "./CustomerInfoForm";
import PaymentMethods from "./PaymentMethods";
import PaymentConfirmation from "./PaymentConfirmation";

const STEPS = [
  { id: 1, label: "الخطة" },
  { id: 2, label: "بياناتك" },
  { id: 3, label: "الدفع" },
  { id: 4, label: "تأكيد" },
];

function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8 sm:mb-10" dir="ltr">
      {STEPS.map((step, i) => (
        <div key={step.id} className="flex items-center gap-1 sm:gap-2">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-500 ${
                currentStep === step.id
                  ? "bg-accent-500 text-primary-800 shadow-[0_0_20px_rgba(198,255,0,0.4)]"
                  : currentStep > step.id
                    ? "bg-accent-500/20 text-accent-500 border border-accent-500/40"
                    : "bg-white/5 text-white/30 border border-white/10"
              }`}
            >
              {currentStep > step.id ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                step.id
              )}
            </div>
            <span
              className={`text-[10px] sm:text-xs font-medium transition-colors duration-300 ${
                currentStep >= step.id ? "text-accent-500/80" : "text-white/25"
              }`}
            >
              {step.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div className="relative w-8 sm:w-16 h-[2px] mb-5">
              <div className="absolute inset-0 bg-white/10 rounded-full" />
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent-500/60 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: currentStep > step.id ? "100%" : "0%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Checkout() {
  const { checkout, closeCheckout, prevStep } = useCheckout();

  if (!checkout.isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
        style={{ background: "linear-gradient(160deg, #0a0b14 0%, #0d1117 50%, #0a0f0d 100%)" }}
      >
        {/* Ambient blurs */}
        <div className="pointer-events-none fixed top-[-10%] right-[5%] w-[500px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(67,97,238,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
        <div className="pointer-events-none fixed bottom-[-5%] left-[10%] w-[400px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(198,255,0,0.08) 0%, transparent 70%)", filter: "blur(30px)" }}
        />

        <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 min-h-screen flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            {checkout.step > 1 && checkout.step < 4 ? (
              <button
                onClick={prevStep}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                رجوع
              </button>
            ) : (
              <div />
            )}

            <span className="font-bold text-lg sm:text-xl text-white tracking-tight">
              Be<span className="text-accent-500">Prime</span>
            </span>

            {checkout.step < 4 ? (
              <button
                onClick={closeCheckout}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            ) : (
              <div />
            )}
          </div>

          {/* Step indicator */}
          <StepIndicator currentStep={checkout.step} />

          {/* Step content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={checkout.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {checkout.step === 1 && <PlanSummary />}
                {checkout.step === 2 && <CustomerInfoForm />}
                {checkout.step === 3 && <PaymentMethods />}
                {checkout.step === 4 && <PaymentConfirmation />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer trust strip */}
          {checkout.step < 4 && (
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/25 text-xs">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                بياناتك محمية ومشفرة
              </span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <a href="/privacy-policy" target="_blank" className="hover:text-white/50 transition-colors underline underline-offset-2">
                سياسة الخصوصية
              </a>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <a href="/refund-policy" target="_blank" className="hover:text-white/50 transition-colors underline underline-offset-2">
                سياسة الاسترجاع
              </a>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <a href="/terms" target="_blank" className="hover:text-white/50 transition-colors underline underline-offset-2">
                الشروط والأحكام
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
