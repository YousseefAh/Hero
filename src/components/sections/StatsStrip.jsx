"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/data/content";

function AnimatedCounter({ target, suffix = "", prefix = "", display }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (display) return; // skip animation for display-only stats

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
    <span ref={ref} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-accent-500 drop-shadow-[0_0_20px_rgba(198,255,0,0.4)]">
      {display ? display : `${prefix}${count}${suffix}`}
    </span>
  );
}

const statIcons = [
  // Retention icon (heart with pulse)
  <svg key="retention" className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  // Time saving icon (clock)
  <svg key="time" className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  // Cost saving icon (currency)
  <svg key="cost" className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  // Speed icon (lightning)
  <svg key="speed" className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
];

function StatsStrip() {
  const { stats } = content.statsStrip;

  return (
    <section className="w-full bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 py-16">
      <div className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 max-w-[90rem]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3 relative">
              {statIcons[index]}
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix || ""}
                display={stat.display}
              />
              <p className="text-primary-50 text-sm md:text-base">{stat.label}</p>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-primary-400/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsStrip;
