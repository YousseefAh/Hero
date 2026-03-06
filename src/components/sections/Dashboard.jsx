"use client";

import { MacbookScroll } from "@/components/UI/macbook-scroll";
import { content } from "@/data/content";

function Dashboard() {
  return (
    <section className="relative overflow-hidden bg-white">
      <MacbookScroll
        src={content.dashboard.image.src}
        showGradient={false}
        title={
          <span className="text-primary-500">
            شوف منظومتك الكاملة —{" "}
            <span className="text-accent-500 drop-shadow-[0_0_20px_rgba(198,255,0,0.3)]">
              كل حاجة في مكان واحد
            </span>
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
