"use client";

import React, { useRef } from "react";
import { content } from "@/data/content";
import { motion, useInView } from "motion/react";

const sectionIcons = [
  // 1 - Automation (cog)
  <svg key="system" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  // 2 - Self-selling (rocket)
  <svg key="rocket" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
  // 3 - Retention (heart)
  <svg key="heart" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  // 4 - Data (cpu chip)
  <svg key="ai" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>,
  // 5 - Scale (chart trending up)
  <svg key="scale" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
  // 6 - Cost savings (banknotes)
  <svg key="cost" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
];

function FeatureCard({ item, index, isInView }) {
  const isLast = index === content.arabicFeatures.sections.length - 1;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative rounded-2xl p-6 md:p-8 transition-all duration-500 border ${
        isLast
          ? "bg-gradient-to-br from-accent-500/10 via-accent-500/5 to-blue-accent/10 border-accent-500/20 hover:border-accent-500/40 hover:shadow-[0_0_40px_rgba(198,255,0,0.08)]"
          : "bg-white/[0.03] border-white/[0.06] hover:border-accent-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(198,255,0,0.05)]"
      }`}
    >
      {/* Number badge + icon row */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-display font-bold ${
            isLast
              ? "bg-accent-500 text-[#0C0C10]"
              : "bg-accent-500/10 text-accent-500"
          }`}>
            {num}
          </span>
          <div className={`text-accent-500/60 group-hover:text-accent-500 transition-colors duration-300`}>
            {sectionIcons[index]}
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className={`text-xl md:text-2xl font-bold mb-3 text-right transition-colors duration-300 ${
        isLast ? "text-accent-400" : "text-white group-hover:text-accent-400"
      }`}>
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-[#8B8B9E] text-base md:text-lg leading-relaxed text-right group-hover:text-[#A5A5B8] transition-colors duration-300">
        {item.text}
      </p>

      {/* Subtle corner accent on hover */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at top right, rgba(198, 255, 0, 0.06), transparent 70%)" }} />
    </motion.div>
  );
}

const ArabicContent = () => {
  const { sections } = content.arabicFeatures;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} dir="rtl" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      {sections.map((item, index) => (
        <FeatureCard key={index} item={item} index={index} isInView={isInView} />
      ))}
    </div>
  );
};

export default ArabicContent;
