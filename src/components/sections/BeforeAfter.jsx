"use client";

import { content } from "@/data/content";
import { motion } from "motion/react";

function BeforeAfter() {
  const { before, after } = content.beforeAfter;

  return (
    <section
      dir="rtl"
      className="relative w-full py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0C0C10 0%, #0A0A0E 50%, #0C0C10 100%)" }}
    >
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[400px] h-[500px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(ellipse, #FF3B3B, transparent 70%)" }} />
        <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[400px] h-[500px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)" }} />
      </div>

      <div className="relative z-10 m-auto px-4 sm:px-8 md:px-16 xl:px-24 max-w-[90rem]">

        {/* ── Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#5A5A6E] mb-4">المقارنة الحقيقية</p>
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-[#FF4444]">قبل</span>
            <span className="text-[#3A3A4E] mx-3">—</span>
            <span className="text-white">يومك كان عذاب</span>
            <br />
            <span className="text-accent-500">بعد</span>
            <span className="text-[#3A3A4E] mx-3">—</span>
            <span className="text-white">يومك بيشتغل لصالحك</span>
          </h2>
        </motion.div>

        {/* ── Two Panels ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/[0.06]">

          {/* ── BEFORE panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative p-8 md:p-10"
            style={{ background: "linear-gradient(135deg, #130A0A 0%, #0F0808 100%)" }}
          >
            {/* Red noise overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF0000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

            {/* Panel header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-red-400 leading-tight">{before.heading}</h3>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-l from-red-500/20 via-red-500/10 to-transparent mb-8" />

            {/* Items */}
            <ul className="space-y-5">
              {before.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-start gap-3 group"
                >
                  {/* Index badge */}
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500/60 text-xs font-bold mt-0.5 group-hover:bg-red-500/15 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Text */}
                  <p className="text-[#8A7070] text-sm md:text-base leading-relaxed group-hover:text-[#A08080] transition-colors">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Bottom tag */}
            <div className="mt-8 pt-6 border-t border-red-500/10">
              <div className="inline-flex items-center gap-2 bg-red-500/8 border border-red-500/15 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs text-red-400/70 font-medium">يوم بعد يوم — نفس الدوامة</span>
              </div>
            </div>
          </motion.div>

          {/* ── VS Divider (mobile only, horizontal) ── */}
          <div className="lg:hidden relative flex items-center justify-center py-4" style={{ background: "#0A0A0E" }}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-500/30 via-transparent to-accent-500/30" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-red-500/30 via-transparent to-accent-500/30" />
            <span className="relative z-10 text-2xl font-black text-[#2A2A3A] tracking-widest">VS</span>
          </div>

          {/* ── VS Divider (desktop, vertical) ── */}
          <div className="hidden lg:block absolute left-1/2 top-[calc(16rem+1px)] bottom-0 -translate-x-1/2 z-20" style={{ width: "1px", background: "linear-gradient(180deg, transparent 0%, rgba(198,255,0,0.15) 20%, rgba(255,68,68,0.15) 80%, transparent 100%)" }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-[#0A0A0E]">
              <span className="text-xs font-black text-[#3A3A4E] tracking-widest">VS</span>
            </div>
          </div>

          {/* ── AFTER panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative p-8 md:p-10"
            style={{ background: "linear-gradient(135deg, #0A130A 0%, #080F08 100%)" }}
          >
            {/* Green noise overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6FF00' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

            {/* Panel header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20">
                <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-accent-400 leading-tight">{after.heading}</h3>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-l from-accent-500/20 via-accent-500/10 to-transparent mb-8" />

            {/* Items */}
            <ul className="space-y-5">
              {after.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-start gap-3 group"
                >
                  {/* Index badge */}
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-500/60 text-xs font-bold mt-0.5 group-hover:bg-accent-500/15 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Text */}
                  <p className="text-[#708A70] text-sm md:text-base leading-relaxed group-hover:text-[#90AA90] transition-colors">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Bottom tag */}
            <div className="mt-8 pt-6 border-t border-accent-500/10">
              <div className="inline-flex items-center gap-2 bg-accent-500/8 border border-accent-500/15 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                <span className="text-xs text-accent-500/70 font-medium">المنظومة شغالة لصالحك — كل يوم</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <span className="text-[#5A5A6E] text-sm">القرار بيدك.</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#3A3A4E]" />
          <span className="text-white font-semibold text-sm">أي يوم عايز تعيشه؟</span>
        </motion.div>

      </div>
    </section>
  );
}

export default BeforeAfter;
