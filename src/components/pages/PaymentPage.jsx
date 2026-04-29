"use client";

import { useCheckout } from "@/contexts/CheckoutContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import CustomerInfoForm from "@/components/sections/Checkout/CustomerInfoForm";
import PaymentMethods from "@/components/sections/Checkout/PaymentMethods";
import PaymentConfirmation from "@/components/sections/Checkout/PaymentConfirmation";

const STEPS = [
  { id: 1, label: "بياناتك" },
  { id: 2, label: "الدفع" },
  { id: 3, label: "تأكيد" },
];

function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-5 sm:mb-6" dir="ltr">
      {STEPS.map((step, i) => (
        <div key={step.id} className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-bold transition-all duration-500 ${
                currentStep === step.id
                  ? "bg-accent-500 text-primary-800 shadow-[0_0_15px_rgba(198,255,0,0.4)]"
                  : currentStep > step.id
                    ? "bg-accent-500/20 text-accent-500 border border-accent-500/40"
                    : "bg-white/5 text-white/30 border border-white/10"
              }`}
            >
              {currentStep > step.id ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : step.id}
            </div>
            <span className={`text-[9px] sm:text-[10px] font-medium transition-colors ${currentStep >= step.id ? "text-accent-500/80" : "text-white/25"}`}>
              {step.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div className="relative w-8 sm:w-14 h-[2px] mb-4">
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

export default function PaymentPage() {
  const { checkout, closeCheckout, prevStep } = useCheckout();
  const router = useRouter();

  // If no plan selected, redirect back to home
  useEffect(() => {
    if (!checkout.plan) {
      router.replace("/");
    }
  }, [checkout.plan, router]);

  const handleClose = () => {
    closeCheckout();
    router.push("/");
  };

  const handleBack = () => {
    if (checkout.step === 1) {
      handleClose();
    } else {
      prevStep();
    }
  };

  if (!checkout.plan) return null;

  return (
    <div
      className="min-h-[100dvh] flex items-start justify-center"
      style={{ background: "linear-gradient(160deg, #08080C 0%, #0B0C14 40%, #0A0D0B 100%)" }}
    >
      {/* Ambient effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)" }}
        />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[300px] rounded-full opacity-[0.025]"
          style={{ background: "radial-gradient(ellipse, #4361EE, transparent 70%)" }}
        />
      </div>

      <div className="relative w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 sm:py-5 min-h-[100dvh] flex flex-col" dir="rtl">
        {/* ── Top bar ── */}
        <div className="relative flex items-center justify-center mb-4 sm:mb-5">
          {/* Back button */}
          {checkout.step < 3 && (
            <button
              onClick={handleBack}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1 text-white/40 hover:text-white/70 transition-colors text-xs sm:text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {checkout.step === 1 ? "الرئيسية" : "رجوع"}
            </button>
          )}

          {/* Centered logo */}
          <Image
            src="https://res.cloudinary.com/dgqwtzgwo/image/upload/v1771000992/branding/pwa-icon/dibvx80cvmgpnmsh1irl.png"
            alt="BePrime"
            width={100}
            height={36}
            className="w-auto h-7 sm:h-8 object-contain"
          />

          {/* Close button */}
          {checkout.step < 3 && (
            <button
              onClick={handleClose}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/[0.08] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Step indicator */}
        <StepIndicator currentStep={checkout.step} />

        {/* Step content */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={checkout.step}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {checkout.step === 1 && <CustomerInfoForm />}
              {checkout.step === 2 && <PaymentMethods />}
              {checkout.step === 3 && <PaymentConfirmation />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer trust */}
        {checkout.step < 3 && (
          <div className="mt-3 pt-3 border-t border-white/[0.04] flex items-center justify-center gap-x-3 text-white/15 text-[10px]">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 text-accent-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              بياناتك محمية
            </span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <a href="/privacy-policy" target="_blank" className="hover:text-white/30 transition-colors underline underline-offset-2">الخصوصية</a>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <a href="/terms" target="_blank" className="hover:text-white/30 transition-colors underline underline-offset-2">الشروط</a>
          </div>
        )}
      </div>
    </div>
  );
}
