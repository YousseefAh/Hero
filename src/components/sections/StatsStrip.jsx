"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { content } from "@/data/content";

function AnimatedCounter({ target, suffix = "", prefix = "", display }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (display) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, display]);

  return (
    <span ref={ref} className={`font-display font-bold bg-gradient-to-br from-accent-500 via-accent-400 to-cyan-accent bg-clip-text text-transparent leading-tight ${
      display
        ? "text-xl sm:text-2xl md:text-2xl"
        : "text-4xl sm:text-5xl md:text-6xl"
    }`}>
      {display ? display : `${prefix}${count}${suffix}`}
    </span>
  );
}

const statIcons = [
  // Retention (heart)
  <svg key="r" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  // Time (clock)
  <svg key="t" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  // Cost (wallet)
  <svg key="c" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
  // Speed (bolt)
  <svg key="s" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
];

function StatsStrip() {
  const { stats } = content.statsStrip;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative w-full py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0C0C10 0%, #0E0E18 50%, #0C0C10 100%)" }}>
      {/* Ambient green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)" }} />

      <div className="relative z-10 m-auto px-4 sm:px-8 md:px-16 xl:px-24 max-w-[90rem]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative flex flex-col items-center text-center gap-4 rounded-2xl p-6 md:p-8 border border-white/[0.05] bg-white/[0.02] hover:border-accent-500/20 hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Icon circle */}
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-500/10 text-accent-500 group-hover:bg-accent-500/15 transition-colors duration-300">
                {statIcons[index]}
              </div>

              {/* Number */}
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix || ""}
                display={stat.display}
              />

              {/* Label */}
              <p className="text-[#7B7B8E] text-sm md:text-base group-hover:text-[#9B9BAE] transition-colors duration-300">{stat.label}</p>

              {/* Subtle top glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(198, 255, 0, 0.03), transparent 60%)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsStrip;
