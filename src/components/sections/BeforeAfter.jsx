"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/* ────────────────────────────────────────────────────────────
   BeforeAfter — Premium comparison section
   • Mobile: full-width stacked cards, edge-to-edge
   • Desktop: split panels with animated vertical divider
   • Glassmorphism, micro-animations, premium feel
   ──────────────────────────────────────────────────────────── */

/* ── Animated Number Badge ── */
function StepBadge({ index, variant }) {
  const isRed = variant === "before";
  return (
    <span
      className={`
        relative z-10 flex-shrink-0 inline-flex items-center justify-center
        w-8 h-8 sm:w-9 sm:h-9
        rounded-xl text-xs font-bold
        transition-all duration-300
        ${isRed
          ? "bg-red-500/10 border border-red-500/20 text-red-400/80 group-hover:bg-red-500/20 group-hover:border-red-500/30 group-hover:text-red-400"
          : "bg-accent-500/10 border border-accent-500/20 text-accent-500/80 group-hover:bg-accent-500/20 group-hover:border-accent-500/30 group-hover:text-accent-500"
        }
      `}
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

/* ── Single step item ── */
function StepItem({ text, index, variant, totalItems, isRTL }) {
  const isRed = variant === "before";
  const isLast = index === totalItems - 1;

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        delay: 0.05 * index,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative"
    >
      {/* Connector line between steps */}
      {!isLast && (
        <div
          className={`
            absolute top-10 sm:top-11 ${isRTL ? 'right-[15px] sm:right-[17px]' : 'left-[15px] sm:left-[17px]'} w-px h-[calc(100%+4px)]
            ${isRed
              ? "bg-gradient-to-b from-red-500/15 to-transparent"
              : "bg-gradient-to-b from-accent-500/15 to-transparent"
            }
          `}
        />
      )}

      <div className="flex items-start gap-3 sm:gap-4">
        <StepBadge index={index} variant={variant} />
        <div className="flex-1 min-w-0 pt-1">
          <p
            className={`
              text-[13px] sm:text-sm md:text-[15px] leading-[1.8] sm:leading-relaxed
              transition-colors duration-300
              ${isRed
                ? "text-[#9A7575] group-hover:text-[#C09090]"
                : "text-[#759A75] group-hover:text-[#A0C8A0]"
              }
            `}
          >
            {text}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

/* ── Panel Status Tag ── */
function StatusTag({ variant, text }) {
  const isRed = variant === "before";
  return (
    <div className="flex items-center gap-2.5">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${
            isRed ? "bg-red-400" : "bg-accent-400"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            isRed ? "bg-red-500" : "bg-accent-500"
          }`}
        />
      </span>
      <span
        className={`text-[11px] sm:text-xs font-semibold tracking-wide ${
          isRed ? "text-red-400/70" : "text-accent-500/70"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

/* ── Panel Header ── */
function PanelHeader({ heading, variant }) {
  const isRed = variant === "before";
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {/* Icon container */}
      <div
        className={`
          flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12
          rounded-2xl
          transition-all duration-500
          ${isRed
            ? "bg-gradient-to-br from-red-500/15 to-red-600/5 border border-red-500/20 shadow-[0_0_20px_rgba(255,60,60,0.08)]"
            : "bg-gradient-to-br from-accent-500/15 to-accent-600/5 border border-accent-500/20 shadow-[0_0_20px_rgba(198,255,0,0.08)]"
          }
        `}
      >
        {isRed ? (
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
      </div>

      {/* Heading */}
      <div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight">
          <span className="text-white">{heading.split('|')[0]}</span>
          <span className={isRed ? "text-red-400" : "text-accent-400"}>
            {heading.split('|')[1] || ""}
          </span>
        </h3>
      </div>
    </div>
  );
}

/* ── Main Component ── */
function BeforeAfter() {
  const { t, isRTL } = useLanguage();
  const { before, after } = t.beforeAfter;
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="before-after"
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #08080C 0%, #0A0A0E 30%, #0A0A0E 70%, #08080C 100%)",
      }}
    >
      {/* ── Atmospheric background effects ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Red glow — before side */}
        <div
          className="absolute top-1/3 right-[5%] lg:right-[15%] w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #FF3B3B, transparent 70%)" }}
        />
        {/* Green glow — after side */}
        <div
          className="absolute top-1/3 left-[5%] lg:left-[15%] w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)" }}
        />
        {/* Center vertical glow line (desktop) */}
        <div
          className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-[0.08]"
          style={{ background: "linear-gradient(180deg, transparent 10%, #C6FF00 30%, #FF4444 70%, transparent 90%)" }}
        />
      </div>

      {/* ── Content container ── */}
      <div className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-28">

        {/* ── Section Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-5 sm:px-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-5 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-[#5A5A6E] to-transparent" />
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#5A5A6E]">
              {isRTL ? 'المقارنة الحقيقية' : 'The Real Comparison'}
            </p>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#5A5A6E] to-transparent" />
          </div>

          {/* Main heading */}
          <h2 className="text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.4] sm:leading-tight">
            <span className="text-[#FF4444]">{isRTL ? 'قبل' : 'Before'}</span>
            <span className="text-[#2A2A3E] mx-2 sm:mx-3">—</span>
            <span className="text-white/90">{isRTL ? 'يومك كان عذاب' : 'Your day was chaos'}</span>
            <br />
            <span className="text-accent-500">{isRTL ? 'بعد' : 'After'}</span>
            <span className="text-[#2A2A3E] mx-2 sm:mx-3">—</span>
            <span className="text-white/90">{isRTL ? 'يومك بيشتغل لصالحك' : 'Your day works for you'}</span>
          </h2>
        </motion.div>

        {/* ── Two-panel comparison grid ── */}
        <div className="px-0 sm:px-4 md:px-8 lg:px-12 xl:px-20 max-w-[90rem] mx-auto">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* ── BEFORE Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Card container */}
              <div
                className="
                  relative overflow-hidden
                  mx-0 sm:mx-2 lg:mx-0
                  rounded-none sm:rounded-3xl ${isRTL ? 'lg:rounded-none lg:rounded-r-3xl' : 'lg:rounded-none lg:rounded-l-3xl'}
                  border-y sm:border border-red-500/[0.08]
                  ${isRTL ? 'lg:border-l-0' : 'lg:border-r-0'}
                  h-full flex flex-col
                "
                style={{
                  background: "linear-gradient(160deg, rgba(25,10,10,0.95) 0%, rgba(18,8,8,0.98) 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 inset-x-0 h-px ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent via-red-500/25 to-transparent`} />

                {/* Subtle noise texture */}
                <div
                  className="absolute inset-0 opacity-[0.025]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF0000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col flex-1">
                  {/* Header */}
                  <PanelHeader heading={before.heading} variant="before" />

                  {/* Separator */}
                  <div className={`my-6 sm:my-8 h-px ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-red-500/20 via-red-500/8 to-transparent`} />

                  {/* Steps */}
                  <ul className="space-y-5 sm:space-y-6">
                    {before.items.map((item, i) => (
                      <StepItem
                        key={i}
                        text={item}
                        index={i}
                        variant="before"
                        totalItems={before.items.length}
                        isRTL={isRTL}
                      />
                    ))}
                  </ul>

                  {/* Bottom status */}
                  <div className="mt-auto pt-6 border-t border-red-500/[0.08]">
                    <div
                      className="
                        inline-flex items-center gap-2.5
                        bg-red-500/[0.06] border border-red-500/[0.12]
                        rounded-full px-4 sm:px-5 py-2.5
                        backdrop-blur-sm
                      "
                    >
                      <StatusTag variant="before" text={isRTL ? 'يوم بعد يوم — نفس الدوامة' : 'Day after day — same cycle'} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Mobile VS Divider ── */}
            <div className="lg:hidden relative flex items-center justify-center py-5 sm:py-6">
              {/* Gradient lines */}
              <div className="absolute inset-x-4 sm:inset-x-8 top-0 h-px bg-gradient-to-r from-red-500/20 via-[#2A2A3A] to-accent-500/20" />
              <div className="absolute inset-x-4 sm:inset-x-8 bottom-0 h-px bg-gradient-to-r from-red-500/20 via-[#2A2A3A] to-accent-500/20" />
              {/* VS badge */}
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0C0C10] border border-white/[0.06] shadow-[0_0_30px_rgba(198,255,0,0.05)]">
                <span className="text-sm font-black tracking-[0.15em] bg-gradient-to-br from-red-400 to-accent-400 bg-clip-text text-transparent">
                  VS
                </span>
              </div>
              {/* Side decorative dots */}
              <div className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 flex gap-1">
                <div className="w-1 h-1 rounded-full bg-red-500/30" />
                <div className="w-1 h-1 rounded-full bg-red-500/20" />
                <div className="w-1 h-1 rounded-full bg-red-500/10" />
              </div>
              <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 flex gap-1">
                <div className="w-1 h-1 rounded-full bg-accent-500/10" />
                <div className="w-1 h-1 rounded-full bg-accent-500/20" />
                <div className="w-1 h-1 rounded-full bg-accent-500/30" />
              </div>
            </div>

            {/* ── Desktop Vertical VS Divider ── */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-20 w-px">
              {/* Gradient line */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 5%, rgba(255,68,68,0.2) 25%, rgba(198,255,0,0.15) 50%, rgba(198,255,0,0.2) 75%, transparent 95%)",
                }}
              />
              {/* VS badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0C0C10] border border-white/[0.08] shadow-[0_0_40px_rgba(198,255,0,0.06)]">
                  <span className="text-xs font-black tracking-[0.2em] bg-gradient-to-br from-red-400 to-accent-400 bg-clip-text text-transparent">
                    VS
                  </span>
                  {/* Corner accents */}
                  <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-red-500/20 rounded-tr-lg" />
                  <div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-accent-500/20 rounded-bl-lg" />
                </div>
              </div>
            </div>

            {/* ── AFTER Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Card container */}
              <div
                className="
                  relative overflow-hidden
                  mx-0 sm:mx-2 lg:mx-0
                  rounded-none sm:rounded-3xl ${isRTL ? 'lg:rounded-none lg:rounded-l-3xl' : 'lg:rounded-none lg:rounded-r-3xl'}
                  border-y sm:border border-accent-500/[0.08]
                  ${isRTL ? 'lg:border-r-0' : 'lg:border-l-0'}
                  h-full flex flex-col
                "
                style={{
                  background: "linear-gradient(160deg, rgba(10,20,10,0.95) 0%, rgba(8,16,8,0.98) 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 inset-x-0 h-px ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent via-accent-500/25 to-transparent`} />

                {/* Subtle noise texture */}
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6FF00' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col flex-1">
                  {/* Header */}
                  <PanelHeader heading={after.heading} variant="after" />

                  {/* Separator */}
                  <div className={`my-6 sm:my-8 h-px ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-accent-500/20 via-accent-500/8 to-transparent`} />

                  {/* Steps */}
                  <ul className="space-y-5 sm:space-y-6">
                    {after.items.map((item, i) => (
                      <StepItem
                        key={i}
                        text={item}
                        index={i}
                        variant="after"
                        totalItems={after.items.length}
                        isRTL={isRTL}
                      />
                    ))}
                  </ul>

                  {/* Bottom status */}
                  <div className="mt-auto pt-6 border-t border-accent-500/[0.08]">
                    <div
                      className="
                        inline-flex items-center gap-2.5
                        bg-accent-500/[0.06] border border-accent-500/[0.12]
                        rounded-full px-4 sm:px-5 py-2.5
                        backdrop-blur-sm
                      "
                    >
                      <StatusTag variant="after" text={isRTL ? 'المنظومة شغالة لصالحك — كل يوم' : 'Your system works for you — every day'} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center px-5"
        >
          <span className="text-[#5A5A6E] text-xs sm:text-sm">{isRTL ? 'القرار بيدك.' : 'The choice is yours.'}</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#3A3A4E]" />
          <span className="text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {isRTL ? 'أي يوم عايز تعيشه؟' : 'Which day do you want to live?'}
          </span>
        </motion.div>
      </div>

    </section>
  );
}

export default BeforeAfter;
