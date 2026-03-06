"use client";

import { content } from "@/data/content";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function BeforeAfter() {
  const { title, before, after } = content.beforeAfter;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-16 max-w-[90rem]">
      <h2 className="text-center font-bold text-[2rem]/[2.5rem] text-primary-500 md:text-5xl xl:text-[3.5rem]/[4rem] tracking-tight mb-12">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-red-50 border border-red-300/40 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold text-red-400 mb-6 text-right">{before.heading}</h3>
          <ul className="space-y-4">
            {before.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="flex items-start gap-3 text-right"
              >
                <svg className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-primary-300">{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-accent-500/5 border border-accent-500/30 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold text-accent-500 mb-6 text-right">{after.heading}</h3>
          <ul className="space-y-4">
            {after.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + 0.1 * i, duration: 0.4 }}
                className="flex items-start gap-3 text-right"
              >
                <svg className="w-5 h-5 text-accent-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-primary-400">{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default BeforeAfter;
