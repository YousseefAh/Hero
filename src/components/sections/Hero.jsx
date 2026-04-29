"use client";

import { content } from '@/data/content';
import { motion } from "motion/react";
import BlurText from "@/components/UI/BlurText";

function Hero() {
  const { subtitle, ctaText, highlightedText, title2 } = content.hero;

  return (
    <section className="relative pt-[9svh] sm:pt-20 md:pt-24 px-5 sm:px-10 overflow-hidden">

      {/* ── Ambient glow ── */}
      <div
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.10]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(67,97,238,0.6) 0%, rgba(198,255,0,0.2) 55%, transparent 72%)",
          filter: "blur(50px)"
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">

        {/* ═══════════════════════════════════════════════
            ACT 1 — THE STATEMENT
            Three beats. Fast, confident, no hesitation.
            Each line overlaps the tail of the previous
            so the heading feels like ONE continuous thought.
        ═══════════════════════════════════════════════ */}
        <div className="flex flex-col items-center gap-0">

          {/* Beat 1 — WHO YOU ARE (instant, no wait) */}
          <BlurText
            text="أنت مدرب عالمي."
            delay={40}
            initialDelay={0}
            animateBy="words"
            direction="top"
            stepDuration={0.3}
            className="justify-center font-black text-[clamp(1.5rem,6.5vw,1.75rem)] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.3] text-primary-800"
          />

          {/* Beat 2 — THE PAIN (green punch — overlaps beat 1's tail) */}
          <BlurText
            text={highlightedText}
            delay={55}
            initialDelay={0.18}
            animateBy="words"
            direction="top"
            stepDuration={0.32}
            className="justify-center font-black text-[clamp(1.5rem,6.5vw,1.75rem)] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.3] text-accent-500"
          />

          {/* Beat 3 — THE ENEMY (rapid, matter-of-fact) */}
          <BlurText
            text={title2}
            delay={50}
            initialDelay={0.5}
            animateBy="words"
            direction="top"
            stepDuration={0.28}
            className="justify-center font-black text-[clamp(1.5rem,6.5vw,1.75rem)] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.3] text-primary-800"
          />
        </div>

        {/* ═══════════════════════════════════════════════
            ACT 2 — THE SOLUTION
            Gentle, weightless. Contrast the heavy heading.
        ═══════════════════════════════════════════════ */}

        {/* Subtitle — floats in softly */}
        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-[3svh] sm:mt-8 text-primary-300 text-[clamp(0.8rem,3.5vw,0.95rem)] sm:text-base md:text-lg leading-[1.8] max-w-lg"
        >
          {subtitle}
        </motion.p>

        {/* CTA — springs in with confidence */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.0,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="mt-[3svh] sm:mt-9"
        >
          <a
            href={content.cta.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-[clamp(1.25rem,5vw,2.25rem)] sm:px-9 py-[clamp(0.6rem,1.5vw,0.875rem)] sm:py-3.5 rounded-xl font-bold text-[clamp(0.75rem,3.2vw,0.875rem)] sm:text-[0.95rem] text-primary-800 bg-accent-500 hover:bg-accent-400 transition-all duration-300 shadow-glow-green hover:shadow-[0_0_40px_rgba(198,255,0,0.35)] hover:-translate-y-px active:scale-[0.985] whitespace-nowrap"
          >
            <span>{ctaText}</span>
            <svg
              className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
          </a>
        </motion.div>

        {/* Trust — whisper, barely there */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-[1.5svh] sm:mt-3 text-[11px] text-primary-200/40 tracking-[0.04em]"
        >
          بدون بطاقة ائتمان · جاهز في أقل من ٢٤ ساعة
        </motion.p>

      </div>
    </section>
  );
}

export default Hero;
