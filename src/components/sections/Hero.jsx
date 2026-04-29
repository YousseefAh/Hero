"use client";

import { content } from '@/data/content';
import { motion } from "motion/react";
import BlurText from "@/components/UI/BlurText";

function Hero() {
  const { subtitle, ctaText, highlightedText, title2 } = content.hero;

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90svh] pt-24 sm:pt-28 pb-20 sm:pb-28 px-5 sm:px-10 overflow-hidden">

      {/* ── Ghost glow — top-center, barely there ── */}
      <div
        className="pointer-events-none absolute top-[-8%] left-1/2 -translate-x-1/2 w-[800px] h-[420px] opacity-[0.12]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(67,97,238,0.7) 0%, rgba(198,255,0,0.25) 50%, transparent 72%)",
          filter: "blur(64px)"
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[52rem] mx-auto">

        {/* ═══════════════════════════════
            HEADING BLOCK
            3 beats. Tight. One idea each.
        ═══════════════════════════════ */}
        <div className="flex flex-col items-center">

          {/* Beat 1 — Identity */}
          <BlurText
            text="أنت مدرب عالمي."
            delay={75}
            initialDelay={0.15}
            animateBy="words"
            direction="top"
            stepDuration={0.36}
            className="justify-center font-black text-[2.15rem] sm:text-[3.25rem] md:text-[4.25rem] lg:text-[5.25rem] leading-[1.2] tracking-[-0.01em] text-primary-800"
          />

          {/* Beat 2 — Pain (green, the emotional hook) */}
          <BlurText
            text={highlightedText}
            delay={85}
            initialDelay={0.5}
            animateBy="words"
            direction="top"
            stepDuration={0.36}
            className="justify-center font-black text-[2.15rem] sm:text-[3.25rem] md:text-[4.25rem] lg:text-[5.25rem] leading-[1.2] tracking-[-0.01em] text-accent-700"
          />

          {/* Beat 3 — The named enemy */}
          <BlurText
            text={title2}
            delay={85}
            initialDelay={1.0}
            animateBy="words"
            direction="top"
            stepDuration={0.36}
            className="justify-center font-black text-[2.15rem] sm:text-[3.25rem] md:text-[4.25rem] lg:text-[5.25rem] leading-[1.2] tracking-[-0.01em] text-primary-800"
          />
        </div>

        {/* ═══════════════════════════════
            SUBTITLE
            Generous top margin. Breathe.
        ═══════════════════════════════ */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
          className="mt-9 sm:mt-12 text-primary-300 text-[0.95rem] sm:text-lg leading-[1.8] max-w-[36rem] tracking-[0.01em]"
        >
          {subtitle}
        </motion.p>

        {/* ═══════════════════════════════
            CTA
            Inline pill. Confident. Still.
        ═══════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 1.8, ease: "easeOut" }}
          className="mt-10 sm:mt-12"
        >
          <a
            href={content.cta.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl font-bold text-[0.95rem] sm:text-base text-primary-800 bg-accent-500 hover:bg-accent-400 transition-all duration-300 shadow-glow-green hover:shadow-[0_0_48px_rgba(198,255,0,0.4)] hover:-translate-y-px active:scale-[0.985]"
          >
            <span>{ctaText}</span>
            <svg
              className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
          </a>
        </motion.div>

        {/* ═══════════════════════════════
            TRUST NOTE
            Barely there. Last whisper.
        ═══════════════════════════════ */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2.1 }}
          className="mt-4 text-[0.72rem] text-primary-50/30 tracking-[0.06em]"
        >
          بدون بطاقة ائتمان · جاهز في أقل من ٢٤ ساعة
        </motion.p>

      </div>
    </section>
  );
}

export default Hero;
