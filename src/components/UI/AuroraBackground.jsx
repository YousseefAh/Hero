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
            "radial-gradient(circle, rgba(198,255,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          zIndex: 1,
        }}
      />

      {/* ── Orb 1 — Large neon green, top-right ── */}
      <div
        className="aurora-orb aurora-orb-1"
        style={{
          position: "absolute",
          top: "-8%",
          right: "10%",
          width: "45vw",
          height: "45vw",
          maxWidth: "700px",
          maxHeight: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, rgba(198,255,0,0.12) 0%, rgba(198,255,0,0.04) 50%, transparent 70%)",
          filter: "blur(60px)",
          willChange: "transform",
        }}
      />

      {/* ── Orb 2 — Blue accent, left side ── */}
      <div
        className="aurora-orb aurora-orb-2"
        style={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: "35vw",
          height: "35vw",
          maxWidth: "550px",
          maxHeight: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 60% 60%, rgba(67,97,238,0.10) 0%, rgba(67,97,238,0.03) 50%, transparent 70%)",
          filter: "blur(50px)",
          willChange: "transform",
        }}
      />

      {/* ── Orb 3 — Small green, bottom-left ── */}
      <div
        className="aurora-orb aurora-orb-3"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "15%",
          width: "25vw",
          height: "25vw",
          maxWidth: "400px",
          maxHeight: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(198,255,0,0.08) 0%, rgba(198,255,0,0.02) 50%, transparent 70%)",
          filter: "blur(45px)",
          willChange: "transform",
        }}
      />

      {/* ── Orb 4 — Cyan, center-right ── */}
      <div
        className="aurora-orb aurora-orb-4"
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          width: "20vw",
          height: "20vw",
          maxWidth: "320px",
          maxHeight: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(76,201,240,0.07) 0%, rgba(76,201,240,0.02) 50%, transparent 70%)",
          filter: "blur(40px)",
          willChange: "transform",
        }}
      />

      {/* ── Orb 5 — Mixed green-blue, top-center ── */}
      <div
        className="aurora-orb aurora-orb-5"
        style={{
          position: "absolute",
          top: "10%",
          left: "40%",
          width: "30vw",
          height: "30vw",
          maxWidth: "480px",
          maxHeight: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 70%, rgba(198,255,0,0.06) 0%, rgba(67,97,238,0.05) 40%, transparent 70%)",
          filter: "blur(55px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
