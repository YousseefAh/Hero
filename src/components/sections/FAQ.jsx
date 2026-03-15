"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { motion, AnimatePresence } from "motion/react";

function FAQItem({ question, answer, index, isOpen, onToggle }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-5 py-7 text-right focus:outline-none"
      >
        {/* Number */}
        <span className={`flex-shrink-0 font-display text-sm font-bold tabular-nums mt-1 transition-colors duration-300 ${
          isOpen ? "text-accent-500" : "text-[#2E2E40] group-hover:text-[#3E3E55]"
        }`}>
          {num}
        </span>

        {/* Question */}
        <span className={`flex-1 font-bold text-lg md:text-xl leading-snug text-right transition-colors duration-300 ${
          isOpen ? "text-accent-400" : "text-white/85 group-hover:text-white"
        }`}>
          {question}
        </span>

        {/* Toggle icon */}
        <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 mt-0.5 ${
          isOpen
            ? "bg-accent-500/10 border-accent-500/40 text-accent-500"
            : "bg-white/[0.04] border-white/[0.08] text-white/40 group-hover:border-white/20 group-hover:text-white/60"
        }`}>
          <motion.svg
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </motion.svg>
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pr-[3.25rem]">
              <div className="relative pr-5 border-r-2 border-accent-500/30">
                <p className="text-[#8888A0] text-base md:text-lg leading-relaxed text-right">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Separator */}
      <div className={`h-px transition-all duration-300 ${
        isOpen ? "bg-accent-500/10" : "bg-white/[0.05] group-hover:bg-white/[0.08]"
      }`} />
    </motion.div>
  );
}

function FAQ() {
  const { title, items } = content.faq;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      dir="rtl"
      className="relative w-full py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0C0C10 0%, #09090E 100%)" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full opacity-[0.045]"
        style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)", filter: "blur(40px)" }} />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[250px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(ellipse, #1535FF, transparent 70%)", filter: "blur(40px)" }} />

      <div className="relative z-10 m-auto px-4 sm:px-8 md:px-16 xl:px-24 max-w-[90rem]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20 items-start">

          {/* ── Sticky intro column ── */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-accent-500/50" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-500/70">
                الأسئلة الشائعة
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight mb-5">
              {title}
            </h2>

            {/* Description */}
            <p className="text-[#6868808] text-base md:text-lg leading-relaxed text-[#66667A] mb-8">
              لو عندك سؤال مش موجود هنا — كلمنا على واتساب وهنرد عليك في ثواني.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/201120920078"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300 text-sm font-semibold"
              style={{
                background: "rgba(21,53,255,0.08)",
                borderColor: "rgba(21,53,255,0.25)",
                color: "rgba(150,160,255,0.85)"
              }}
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              اسألنا على واتساب
            </a>

            {/* Decorative count */}
            <div className="hidden lg:block mt-16">
              <span className="font-display text-[8rem] font-bold leading-none select-none"
                style={{ color: "rgba(255,255,255,0.025)" }}>
                FAQ
              </span>
            </div>
          </div>

          {/* ── Accordion column ── */}
          <div className="lg:col-span-3">
            {/* Top rule */}
            <div className="h-px mb-2 bg-gradient-to-l from-accent-500/20 via-white/5 to-transparent" />

            {items.map((item, index) => (
              <FAQItem
                key={index}
                index={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;
