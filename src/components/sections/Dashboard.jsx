"use client";

import { MacbookScroll } from "@/components/UI/macbook-scroll";
import { content } from "@/data/content";
import { motion } from "motion/react";

function Dashboard() {
  return (
    <section className="relative overflow-hidden bg-white -mt-12 sm:mt-0">
      <MacbookScroll
        src={content.dashboard.image.src}
        showGradient={false}
        title={(() => {
          const line1 = ["شوف", "منظومتك", "الكاملة", "—"];
          const line2 = ["كل", "حاجة", "في", "مكان", "واحد"];
          const heroEnd = 2.5;   // hero trust note is at 2.1s + 0.6s duration
          const wordGap = 0.13;  // 130ms between each word
          const linePause = 0.8; // pause between line 1 and line 2

          const line1Start = heroEnd;
          const line2Start = line1Start + line1.length * wordGap + linePause;

          return (
            <span className="flex flex-col items-center gap-2">
              {/* Line 1 */}
              <span className="flex flex-wrap justify-center gap-x-2">
                {line1.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(10px)", opacity: 0, y: -20 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: line1Start + i * wordGap, ease: "easeOut" }}
                    className="inline-block font-bold text-3xl text-primary-500"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              {/* Line 2 */}
              <span className="flex flex-wrap justify-center gap-x-2">
                {line2.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: line2Start + i * wordGap, ease: "easeOut" }}
                    className="inline-block font-bold text-3xl text-accent-500 drop-shadow-[0_0_20px_rgba(198,255,0,0.3)]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </span>
          );
        })()}
      />
      {/* Smooth transition to dark section below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0C0C10)",
        }}
      />
    </section>
  );
}

export default Dashboard;
