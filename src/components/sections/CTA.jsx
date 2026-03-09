"use client";

import { UseModalContext } from "../../contexts/ModalContext";
import { content } from '@/data/content';

function CTA() {
  const { title, subtitle, contactButtonText, whatsappButtonText, whatsappLink } = content.cta;
  const { setCurrentModal } = UseModalContext();

  const handleWhatsApp = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-16 max-w-[90rem]">
      <div className="relative flex flex-col items-center px-8 py-16 sm:py-24 lg:py-32 rounded-3xl overflow-hidden"
        style={{ background: "linear-gradient(160deg, #060810 0%, #080C1A 40%, #06100A 100%)" }}
      >

        {/* ── Aurora glow layers ── */}
        {/* Green bloom — top center */}
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(198,255,0,0.18) 0%, rgba(198,255,0,0.06) 40%, transparent 70%)", filter: "blur(20px)" }}
        />
        {/* Blue bloom — bottom left */}
        <div className="pointer-events-none absolute bottom-[-5%] left-[-5%] w-[500px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(67,97,238,0.22) 0%, rgba(67,97,238,0.08) 45%, transparent 70%)", filter: "blur(24px)" }}
        />
        {/* Blue bloom — bottom right */}
        <div className="pointer-events-none absolute bottom-[-5%] right-[-5%] w-[500px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(67,97,238,0.18) 0%, rgba(67,97,238,0.06) 45%, transparent 70%)", filter: "blur(24px)" }}
        />
        {/* Cyan bridge — center */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(76,201,240,0.07) 0%, transparent 70%)", filter: "blur(30px)" }}
        />

        {/* ── Grid texture overlay ── */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(198,255,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,0,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        {/* ── Top gradient bar ── */}
        <div className="absolute top-0 inset-x-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent 0%, #4361EE 20%, #4CC9F0 50%, #C6FF00 80%, transparent 100%)" }}
        />

        {/* ── Bottom gradient bar ── */}
        <div className="absolute bottom-0 inset-x-0 h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(67,97,238,0.4) 30%, rgba(198,255,0,0.4) 70%, transparent 100%)" }}
        />

        {/* ── Corner accents ── */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent-500/30 rounded-tr-lg" />
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-accent/30 rounded-tl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-accent/30 rounded-br-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent-500/30 rounded-bl-lg" />

        {/* ── Eyebrow label ── */}
        <div className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
          style={{ borderColor: "rgba(198,255,0,0.2)", background: "rgba(198,255,0,0.05)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-500/80">ابدأ رحلتك</span>
        </div>

        {/* ── Heading ── */}
        <h3 className="relative z-10 mb-5 font-bold text-center text-[2rem]/[2.5rem] sm:text-4xl md:text-5xl xl:text-[3.5rem]/[4.2rem] tracking-tight text-white max-w-3xl">
          {title}
        </h3>

        {/* ── Subtitle ── */}
        <p className="relative z-10 mb-10 text-center text-[#8A8AA0] xl:text-lg tracking-tight max-w-xl leading-relaxed">
          {subtitle}
        </p>

        {/* ── Buttons ── */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={() => setCurrentModal("more-information")}
            className="w-full sm:w-auto relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-lg text-[#060810] transition-all duration-300 flex items-center justify-center gap-2 group"
            style={{ background: "linear-gradient(135deg, #C6FF00 0%, #a3e600 100%)", boxShadow: "0 0 24px rgba(198,255,0,0.25), 0 0 48px rgba(198,255,0,0.08)" }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #d1ff33 0%, #C6FF00 100%)", boxShadow: "0 0 40px rgba(198,255,0,0.4)" }}
            />
            <span className="relative">{contactButtonText}</span>
            <svg className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
          </button>

          {/* WhatsApp button */}
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto relative overflow-hidden px-8 py-4 rounded-2xl text-white text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group border"
            style={{ background: "rgba(67,97,238,0.12)", borderColor: "rgba(67,97,238,0.35)", boxShadow: "0 0 20px rgba(67,97,238,0.1)" }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(67,97,238,0.22)", boxShadow: "0 0 30px rgba(67,97,238,0.2)" }}
            />
            <span className="relative">{whatsappButtonText}</span>
            <svg className="relative h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </button>
        </div>

        {/* ── Trust line ── */}
        <div className="relative z-10 mt-8 flex items-center gap-4 text-[#4A4A5E] text-sm">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            بدون تعقيد
          </span>
          <span className="w-1 h-1 rounded-full bg-[#2A2A3E]" />
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            جاهز في أقل من ٢٤ ساعة
          </span>
          <span className="w-1 h-1 rounded-full bg-[#2A2A3E]" />
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-cyan-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            دعم عربي كامل
          </span>
        </div>

      </div>
    </section>
  );
}

export default CTA;
