"use client";

import { content } from '@/data/content';
import { motion } from "motion/react";
import BlurText from "@/components/UI/BlurText";

// ─── Timing map ──────────────────────────────────────────────────
// Line 1: "أنت مدرب عالمي."           3 words × 80ms  → ends ~0.64s
// Line 2: "وقتك أغلى من إنه يضيع"    5 words × 90ms  → starts 0.45s, ends ~1.25s
// Line 3: "على Excel و WhatsApp_"      4 words × 90ms  → starts 1.0s,  ends ~1.7s
// Subtitle                                               → starts 1.5s
// Button                                                 → starts 1.8s
// Trust                                                  → starts 2.0s
// ─────────────────────────────────────────────────────────────────

function Hero() {
  const { subtitle, ctaText, highlightedText, title2 } = content.hero;

  return (
    <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 px-5 sm:px-8 overflow-hidden">

      {/* ── Background glow ── */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] opacity-[0.15]"
        style={{
          background: "radial-gradient(ellipse, rgba(67,97,238,0.6) 0%, rgba(198,255,0,0.2) 55%, transparent 75%)",
          filter: "blur(56px)"
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-5 sm:gap-7">

        {/* ── 1. Eyebrow badge — first to appear ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/8 px-4 py-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse shrink-0" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent-600">
            منصة تدريب عالمية
          </span>
        </motion.div>

        {/* ── 2. Main heading — 3-line narrative ── */}
        <div className="flex flex-col items-center gap-0.5 sm:gap-1">

          {/* Hook: who you are */}
          <BlurText
            text="أنت مدرب عالمي."
            delay={80}
            initialDelay={0.2}
            animateBy="words"
            direction="top"
            stepDuration={0.38}
            className="justify-center font-extrabold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-primary-800"
          />

          {/* Pain: your time is worth more */}
          <BlurText
            text={highlightedText}
            delay={90}
            initialDelay={0.55}
            animateBy="words"
            direction="top"
            stepDuration={0.38}
            className="justify-center font-extrabold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-accent-500 drop-shadow-[0_0_28px_rgba(198,255,0,0.22)]"
          />

          {/* Specificity: the exact enemy */}
          <BlurText
            text={title2}
            delay={90}
            initialDelay={1.05}
            animateBy="words"
            direction="top"
            stepDuration={0.38}
            className="justify-center font-extrabold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-primary-800"
          />
        </div>

        {/* ── 3. Subtitle — solution statement ── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.55, ease: "easeOut" }}
          className="text-primary-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
        >
          {subtitle}
        </motion.p>

        {/* ── 4. CTA — the action ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 1.85, ease: "easeOut" }}
          className="w-full sm:w-auto"
        >
          <a
            href={content.cta.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-10 py-4 rounded-2xl font-bold text-base sm:text-lg text-primary-800 bg-accent-500 hover:bg-accent-400 transition-all duration-300 shadow-glow-green hover:shadow-[0_0_44px_rgba(198,255,0,0.45)] hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span>{ctaText}</span>
            <svg
              className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
          </a>
        </motion.div>

        {/* ── 5. Trust note — last, quietest ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="text-xs text-primary-50/35 tracking-wide"
        >
          بدون بطاقة ائتمان · جاهز في أقل من ٢٤ ساعة
        </motion.p>

      </div>
    </section>
  );
}

export default Hero;
