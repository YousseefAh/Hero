"use client";

import { content } from '@/data/content';
import { motion } from "motion/react";
import BlurText from "@/components/UI/BlurText";

function Hero() {
  const { subtitle, ctaText, highlightedText, title2 } = content.hero;

  return (
    <section className="relative pt-16 sm:pt-20 md:pt-24 px-5 sm:px-10 overflow-hidden">

      {/* ── Ghost glow ── */}
      <div
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.10]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(67,97,238,0.6) 0%, rgba(198,255,0,0.2) 55%, transparent 72%)",
          filter: "blur(50px)"
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* HEADING — 3 lines, each its own beat */}
        <div className="flex flex-col items-center gap-0">

          <BlurText
            text="أنت مدرب عالمي."
            delay={70}
            initialDelay={0.1}
            animateBy="words"
            direction="top"
            stepDuration={0.35}
            className="justify-center font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.35] text-primary-800"
          />

          <BlurText
            text={highlightedText}
            delay={80}
            initialDelay={0.45}
            animateBy="words"
            direction="top"
            stepDuration={0.35}
            className="justify-center font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.35] text-accent-500"
          />

          <BlurText
            text={title2}
            delay={80}
            initialDelay={0.95}
            animateBy="words"
            direction="top"
            stepDuration={0.35}
            className="justify-center font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.35] text-primary-800"
          />
        </div>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
          className="mt-6 sm:mt-8 text-primary-300 text-sm sm:text-base md:text-lg leading-[1.9] max-w-lg"
        >
          {subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.7, ease: "easeOut" }}
          className="mt-7 sm:mt-9"
        >
          <a
            href={content.cta.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 sm:px-9 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-[0.95rem] text-primary-800 bg-accent-500 hover:bg-accent-400 transition-all duration-300 shadow-glow-green hover:shadow-[0_0_40px_rgba(198,255,0,0.35)] hover:-translate-y-px active:scale-[0.985]"
          >
            <span>{ctaText}</span>
            <svg
              className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5 rtl:rotate-0"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
          </a>
        </motion.div>

        {/* TRUST NOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="mt-4 text-[11px] text-primary-200/40 tracking-[0.04em]"
        >
          بدون بطاقة ائتمان · جاهز في أقل من ٢٤ ساعة
        </motion.p>

      </div>
    </section>
  );
}

export default Hero;
