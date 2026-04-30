"use client";

import PricingCard from "./PricingCard";
import { pricingCards } from "../../../utils/constants";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";

function Pricing() {
  const { t, isRTL } = useLanguage();
  const paymentPlan = "monthly";

  // Merge translated text with pricing data
  const translatedCards = pricingCards.map((card, i) => {
    const translated = t.pricing.cards[i];
    if (!translated) return card;
    return {
      ...card,
      program: translated.program,
      subheading: translated.subheading,
      bullets: translated.bullets,
      cta: translated.cta,
      badge: translated.badge || card.badge,
      promoLabel: translated.promoLabel || card.promoLabel,
    };
  });

  return (
    <section
      className="relative w-full overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32"
      style={{
        background:
          "linear-gradient(180deg, #08080C 0%, #0B0B12 30%, #0B0B12 70%, #08080C 100%)",
      }}
    >
      {/* ── Atmospheric background effects ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Center green glow */}
        <div
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] lg:w-[900px] lg:h-[500px] rounded-full opacity-[0.035]"
          style={{
            background:
              "radial-gradient(ellipse, #C6FF00, transparent 70%)",
          }}
        />
        {/* Blue accent glow */}
        <div
          className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full opacity-[0.025]"
          style={{
            background:
              "radial-gradient(ellipse, #4361EE, transparent 70%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center mb-14 sm:mb-16 lg:mb-20"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-[#5A5A6E] to-transparent" />
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#5A5A6E]">
              {isRTL ? 'الأسعار' : 'PRICING'}
            </p>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#5A5A6E] to-transparent" />
          </div>

          {/* Title */}
          <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight">
            <span className="text-white/90">{t.pricing.title}</span>
            <span className="text-accent-500">.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#7B7B8E] max-w-xl mx-auto leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 pricing-break:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 xl:gap-8 pricing-break:w-full xl:w-full mx-auto lg:w-[90%]">
          {translatedCards.map((card, index) => (
            <motion.div
              key={card.program}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: 0.08 * index,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <PricingCard card={card} paymentPlan={paymentPlan} />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom guarantee ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center"
        >
          {/* Guarantee badges */}
          <div className="flex items-center gap-2 text-[#5A5A6E]">
            <svg className="w-4 h-4 text-accent-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span className="text-xs sm:text-sm">{isRTL ? 'بدون بطاقة ائتمان' : 'No credit card needed'}</span>
          </div>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#3A3A4E]" />
          <div className="flex items-center gap-2 text-[#5A5A6E]">
            <svg className="w-4 h-4 text-accent-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span className="text-xs sm:text-sm">{t.pricing.priceGuarantee}</span>
          </div>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#3A3A4E]" />
          <div className="flex items-center gap-2 text-[#5A5A6E]">
            <svg className="w-4 h-4 text-accent-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <span className="text-xs sm:text-sm">{isRTL ? 'جاهز في أقل من ٢٤ ساعة' : 'Ready in less than 24 hours'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
