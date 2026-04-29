"use client";

import { content } from "@/data/content";
import { motion } from "motion/react";

const beforeIcons = [
  // phone/messages chaos
  <svg key="b1" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  // spreadsheet
  <svg key="b2" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M10 3v18M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" /></svg>,
  // money chaos
  <svg key="b3" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>,
  // clock
  <svg key="b4" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  // user disappear
  <svg key="b5" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  // exhausted
  <svg key="b6" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  // broken chart
  <svg key="b7" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>,
];

const afterIcons = [
  <svg key="a1" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  <svg key="a2" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
  <svg key="a3" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  <svg key="a4" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  <svg key="a5" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  <svg key="a6" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  <svg key="a7" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
];

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
              <div>
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-red-500/70">قبل BePrime</span>
                <h3 className="text-lg font-bold text-red-400 leading-tight">{before.heading}</h3>
              </div>
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
                  className="flex items-start gap-4 group"
                >
                  {/* Index badge */}
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500/60 text-xs font-bold mt-0.5 group-hover:bg-red-500/15 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Icon */}
                  <span className="flex-shrink-0 mt-1 text-red-500/40 group-hover:text-red-500/60 transition-colors">
                    {beforeIcons[i]}
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
              <div>
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-accent-500/70">بعد BePrime</span>
                <h3 className="text-lg font-bold text-accent-400 leading-tight">{after.heading}</h3>
              </div>
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
                  className="flex items-start gap-4 group"
                >
                  {/* Index badge */}
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-500/60 text-xs font-bold mt-0.5 group-hover:bg-accent-500/15 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Icon */}
                  <span className="flex-shrink-0 mt-1 text-accent-500/40 group-hover:text-accent-500 transition-colors">
                    {afterIcons[i]}
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
