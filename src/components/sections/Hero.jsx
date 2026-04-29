"use client";

import { content } from '@/data/content';
import { motion } from "motion/react";
import BlurText from "@/components/UI/BlurText";

function Hero() {
  const { subtitle, ctaText, highlightedText, title2 } = content.hero;

  // ──────────────────────────────────────────────────────────────
  //  MOBILE LAYOUT STRATEGY: 100% viewport-proportional.
  //
  //  Every vertical gap uses `svh` so the layout is a fixed
  //  RATIO of the screen — identical proportions on every phone
  //  from iPhone SE (667px) to iPhone 15 Pro Max (932px).
  //
  //  Font sizes use clamp(min, vw, max) for horizontal scaling.
  //  Gaps use svh for vertical scaling.
  //  → The two axes scale independently = perfect on any phone.
  //
  //  DESKTOP: sm: breakpoints override everything with fixed
  //  values. No svh on desktop.
  // ──────────────────────────────────────────────────────────────

  return (
    <section className="relative pt-[8svh] sm:pt-20 md:pt-24 px-5 sm:px-10 overflow-hidden">

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

        {/* ═══ HEADING ═══
            Font: clamp scales with screen WIDTH (vw)
            Lines stack with zero gap — leading handles breathing
        */}
        <div className="flex flex-col items-center gap-0">
          <BlurText
            text="أنت مدرب عالمي."
            delay={70}
            initialDelay={0.1}
            animateBy="words"
            direction="top"
            stepDuration={0.35}
            className="justify-center font-black text-[clamp(1.5rem,6.5vw,1.75rem)] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.3] text-primary-800"
          />

          <BlurText
            text={highlightedText}
            delay={80}
            initialDelay={0.45}
            animateBy="words"
            direction="top"
            stepDuration={0.35}
            className="justify-center font-black text-[clamp(1.5rem,6.5vw,1.75rem)] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.3] text-accent-500"
          />

          <BlurText
            text={title2}
            delay={80}
            initialDelay={0.95}
            animateBy="words"
            direction="top"
            stepDuration={0.35}
            className="justify-center font-black text-[clamp(1.5rem,6.5vw,1.75rem)] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.3] text-primary-800"
          />
        </div>

        {/* ═══ SUBTITLE ═══
            Gap from heading: 3svh (proportional to screen height)
        */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
          className="mt-[3svh] sm:mt-8 text-primary-300 text-[clamp(0.8rem,3.5vw,0.95rem)] sm:text-base md:text-lg leading-[1.8] max-w-lg"
        >
          {subtitle}
        </motion.p>

        {/* ═══ CTA ═══
            Gap from subtitle: 3svh
        */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.7, ease: "easeOut" }}
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

        {/* ═══ TRUST ═══
            Gap from CTA: 1.5svh
        */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="mt-[1.5svh] sm:mt-3 text-[11px] text-primary-200/40 tracking-[0.04em]"
        >
          بدون بطاقة ائتمان · جاهز في أقل من ٢٤ ساعة
        </motion.p>

      </div>
    </section>
  );
}

export default Hero;
