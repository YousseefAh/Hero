"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/data/content";

function AnimatedCounter({ target, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
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
  }, [target]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-accent-500">
      {prefix}{count}{suffix}
    </span>
  );
}

function StatsStrip() {
  const { stats } = content.statsStrip;

  return (
    <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-12 max-w-[90rem]">
      <div className="bg-primary-500/5 backdrop-blur-sm border border-primary-500/10 rounded-2xl py-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix || ""}
              />
              <p className="text-primary-300 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsStrip;
