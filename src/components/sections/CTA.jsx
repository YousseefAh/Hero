"use client";

import { UseModalContext } from "../../contexts/ModalContext";
import { useLanguage } from "@/contexts/LanguageContext";

function CTA() {
  const { t, isRTL } = useLanguage();
  const { title, subtitle, contactButton, whatsappButton } = t.cta;
  const { setCurrentModal } = UseModalContext();

  const handleWhatsApp = () => {
    window.open('https://wa.me/201120920078', '_blank');
  };

  return (
    <section className="w-full sm:px-6 md:px-12 xl:px-20 sm:py-20 max-w-[90rem] mx-auto bg-[#0C0C10] sm:bg-transparent">

      {/* ─── Card ─── */}
      <div className="relative overflow-hidden sm:rounded-[2rem] bg-[#0C0C10] sm:bg-primary-800">

        {/* ── Layered background mesh ── */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-800" />

        {/* ── Blue orb — top-left ── */}
        <div
          className="pointer-events-none absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full opacity-40 hidden sm:block"
          style={{ background: "radial-gradient(circle, rgba(67,97,238,0.35) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        {/* ── Green orb — bottom-right ── */}
        <div
          className="pointer-events-none absolute -bottom-24 -right-16 w-[360px] h-[360px] rounded-full opacity-50 hidden sm:block"
          style={{ background: "radial-gradient(circle, rgba(198,255,0,0.22) 0%, transparent 65%)", filter: "blur(36px)" }}
        />
        {/* ── Blue tint — center ── */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-20 hidden sm:block"
          style={{ background: "radial-gradient(ellipse, rgba(67,97,238,0.3) 0%, transparent 70%)", filter: "blur(50px)" }}
        />

        {/* ── Subtle dot grid ── */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] hidden sm:block"
          style={{ backgroundImage: "radial-gradient(circle, #C6FF00 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        {/* ── Top shimmer line ── */}
        <div
          className="absolute top-0 inset-x-0 h-px hidden sm:block"
          style={{ background: "linear-gradient(90deg, transparent 5%, rgba(67,97,238,0.6) 30%, rgba(198,255,0,0.9) 55%, transparent 95%)" }}
        />

        {/* ─── Content ─── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 sm:px-12 sm:py-20 lg:py-28 lg:px-20 gap-6">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/8 px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse shrink-0" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-accent-500/80">
              {isRTL ? 'ابدأ رحلتك اليوم' : 'Start Your Journey Today'}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-extrabold text-[1.85rem] sm:text-4xl md:text-5xl xl:text-[3.25rem] leading-[1.15] tracking-tight text-white max-w-2xl">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-primary-50/70 text-base sm:text-lg leading-relaxed max-w-lg">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-2">

            {/* Primary CTA */}
            <button
              onClick={() => setCurrentModal("more-information")}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base text-primary-800 bg-accent-500 hover:bg-accent-400 transition-all duration-200 shadow-glow-green hover:shadow-[0_0_32px_rgba(198,255,0,0.4)]"
            >
              <span>{contactButton}</span>
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${isRTL ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={isRTL ? "M11 17l-5-5m0 0l5-5m-5 5h12" : "M13 7l5 5m0 0l-5 5m5-5H6"} />
              </svg>
            </button>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsApp}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-base text-white border border-white/10 hover:border-blue-accent/50 hover:bg-blue-accent/15 transition-all duration-200"
            >
              <span>{whatsappButton}</span>
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-2">
            <span className="flex items-center gap-1.5 text-xs sm:text-sm text-primary-50/50">
              <svg className="w-3.5 h-3.5 text-accent-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {isRTL ? 'بدون تعقيد' : 'No complexity'}
            </span>
            <span className="w-px h-3 bg-white/10 hidden sm:block" />
            <span className="flex items-center gap-1.5 text-xs sm:text-sm text-primary-50/50">
              <svg className="w-3.5 h-3.5 text-blue-accent-light shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {isRTL ? 'جاهز في أقل من ٢٤ ساعة' : 'Ready in less than 24h'}
            </span>
            <span className="w-px h-3 bg-white/10 hidden sm:block" />
            <span className="flex items-center gap-1.5 text-xs sm:text-sm text-primary-50/50">
              <svg className="w-3.5 h-3.5 text-blue-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {isRTL ? 'دعم عربي كامل' : 'Full support'}
            </span>
          </div>

        </div>

        {/* ── Bottom shimmer line ── */}
        <div
          className="absolute bottom-0 inset-x-0 h-px hidden sm:block"
          style={{ background: "linear-gradient(90deg, transparent 5%, rgba(198,255,0,0.4) 40%, rgba(67,97,238,0.5) 70%, transparent 95%)" }}
        />
      </div>
    </section>
  );
}

export default CTA;
