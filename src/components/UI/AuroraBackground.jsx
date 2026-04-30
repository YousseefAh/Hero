"use client";

/**
 * AuroraBackground — Premium animated background layer
 *
 * Pure CSS, GPU-accelerated (transform-only animations).
 * 5 soft gradient orbs float slowly behind content.
 * Subtle dot-grid overlay adds depth.
 * Respects prefers-reduced-motion.
 */
export default function AuroraBackground() {
  return (
    <div
      className="aurora-bg"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* ── Dot grid overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(198,255,0,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          zIndex: 1,
        }}
      />

      {/* ── Orb 1 — Large neon green, top-right ── */}
      <div
        className="aurora-orb aurora-orb-1"
        style={{
          position: "absolute",
          top: "-5%",
          right: "5%",
          width: "50vw",
          height: "50vw",
          maxWidth: "800px",
          maxHeight: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, rgba(198,255,0,0.35) 0%, rgba(198,255,0,0.12) 40%, transparent 65%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />

      {/* ── Orb 2 — Blue accent, left side ── */}
      <div
        className="aurora-orb aurora-orb-2"
        style={{
          position: "absolute",
          top: "15%",
          left: "-8%",
          width: "40vw",
          height: "40vw",
          maxWidth: "650px",
          maxHeight: "650px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 60% 60%, rgba(67,97,238,0.30) 0%, rgba(67,97,238,0.10) 40%, transparent 65%)",
          filter: "blur(70px)",
          willChange: "transform",
        }}
      />

      {/* ── Orb 3 — Green, bottom-left ── */}
      <div
        className="aurora-orb aurora-orb-3"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "10%",
          width: "35vw",
          height: "35vw",
          maxWidth: "550px",
          maxHeight: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(198,255,0,0.25) 0%, rgba(198,255,0,0.08) 40%, transparent 65%)",
          filter: "blur(60px)",
          willChange: "transform",
        }}
      />

      {/* ── Orb 4 — Cyan, center-right ── */}
      <div
        className="aurora-orb aurora-orb-4"
        style={{
          position: "absolute",
          top: "45%",
          right: "0%",
          width: "30vw",
          height: "30vw",
          maxWidth: "480px",
          maxHeight: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(76,201,240,0.22) 0%, rgba(76,201,240,0.07) 40%, transparent 65%)",
          filter: "blur(55px)",
          willChange: "transform",
        }}
      />

      {/* ── Orb 5 — Mixed green-blue, top-center ── */}
      <div
        className="aurora-orb aurora-orb-5"
        style={{
          position: "absolute",
          top: "8%",
          left: "35%",
          width: "35vw",
          height: "35vw",
          maxWidth: "550px",
          maxHeight: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 70%, rgba(198,255,0,0.18) 0%, rgba(67,97,238,0.15) 40%, transparent 65%)",
          filter: "blur(65px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
