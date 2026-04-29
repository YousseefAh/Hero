"use client";

import { MacbookScroll } from "@/components/UI/macbook-scroll";
import { content } from "@/data/content";
import BlurText from "@/components/UI/BlurText";

function Dashboard() {
  return (
    <section className="relative overflow-hidden bg-white">
      <MacbookScroll
        src={content.dashboard.image.src}
        showGradient={false}
        title={
          <span className="flex flex-col items-center gap-1">
            <BlurText
              text="شوف منظومتك الكاملة —"
              delay={90}
              initialDelay={0}
              animateBy="words"
              direction="top"
              stepDuration={0.4}
              className="justify-center font-bold text-3xl text-primary-500"
            />
            <BlurText
              text="كل حاجة في مكان واحد"
              delay={100}
              initialDelay={0.65}
              animateBy="words"
              direction="bottom"
              stepDuration={0.4}
              className="justify-center font-bold text-3xl text-accent-500 drop-shadow-[0_0_20px_rgba(198,255,0,0.3)]"
            />
          </span>
        }
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
