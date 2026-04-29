"use client";

import { content } from '@/data/content';
import { motion } from "motion/react";
import BlurText from "@/components/UI/BlurText";

function Hero() {
  const { subtitle, ctaText, highlightedText, title2 } = content.hero;

  return (
    <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 px-5 sm:px-8 overflow-hidden">

      {/* ── Subtle background glow ── */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[340px] opacity-20"
        style={{
          background: "radial-gradient(ellipse, rgba(67,97,238,0.5) 0%, rgba(198,255,0,0.15) 50%, transparent 75%)",
          filter: "blur(48px)"
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-6 sm:gap-8">

        {/* ── Eyebrow badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/8 px-4 py-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse shrink-0" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent-600">
            منصة تدريب عالمية
          </span>
        </motion.div>

        {/* ── Main heading: "أنت مدرب عالمي." ── */}
        <h1 className="font-extrabold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-primary-800 text-center">
          <BlurText
            text="أنت مدرب عالمي."
            delay={80}
            animateBy="words"
            direction="top"
            stepDuration={0.4}
            className="justify-center font-extrabold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-primary-800"
          />

          {/* Highlighted line */}
          <BlurText
            text={highlightedText}
            delay={100}
            animateBy="words"
            direction="top"
            stepDuration={0.4}
            className="justify-center font-extrabold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-accent-500 drop-shadow-[0_0_24px_rgba(198,255,0,0.25)] mt-1"
          />

          <BlurText
            text={title2}
            delay={100}
            animateBy="words"
            direction="top"
            stepDuration={0.4}
            className="justify-center font-extrabold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-primary-800 mt-1"
          />
        </h1>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-primary-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
        >
          {subtitle}
        </motion.p>

        {/* ── CTA Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="w-full sm:w-auto"
        >
          <a
            href={content.cta.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-10 py-4 rounded-2xl font-bold text-base sm:text-lg text-primary-800 bg-accent-500 hover:bg-accent-400 transition-all duration-300 shadow-glow-green hover:shadow-[0_0_40px_rgba(198,255,0,0.45)] hover:-translate-y-0.5 active:scale-[0.98]"
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

        {/* ── Small trust note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-xs text-primary-50/40 tracking-wide"
        >
          بدون بطاقة ائتمان · جاهز في أقل من ٢٤ ساعة
        </motion.p>

      </div>
    </section>
  );
}

export default Hero;
