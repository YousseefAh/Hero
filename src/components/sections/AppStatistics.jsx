"use client";

import ArabicContent from "./ArabicContent";
import { content } from "@/data/content";

function AppStatistics() {
  return (
    <section className="relative -mt-[1px] overflow-hidden" style={{ background: "linear-gradient(180deg, #0C0C10 0%, #101017 50%, #0C0C10 100%)" }}>
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #C6FF00, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, #4361EE, transparent 70%)" }} />

      <div className="relative z-10 flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20 m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-16 md:pt-24 pb-16 sm:pb-24 md:pb-32 max-w-[90rem]">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4 text-white">
            {content.arabicFeatures.title}<span className="text-accent-500">.</span>
          </h2>
        </div>

        <ArabicContent />
      </div>
    </section>
  );
}

export default AppStatistics;
