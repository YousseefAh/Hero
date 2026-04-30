"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

function ContactCard({ icon, label, value, href, dir }) {
  const cardContent = (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-[1px]">
        <div className="w-full h-full rounded-2xl bg-[#0d0f15]" />
      </div>
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(ellipse at center, rgba(198,255,0,0.03), transparent 70%)" }} />
      <div className="relative p-6 sm:p-7 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C6FF00]/10 to-[#C6FF00]/[0.02] border border-[#C6FF00]/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#C6FF00]/25 transition-colors duration-500">
          <span className="text-xl">{icon}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-white/30 text-[11px] font-medium tracking-wide mb-1.5">{label}</p>
          <p className={`text-white/80 text-sm sm:text-base font-medium group-hover:text-white transition-colors ${dir === "ltr" ? "font-display" : ""}`} dir={dir || undefined}>
            {value}
          </p>
        </div>
        {href && (
          <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C6FF00]/10 group-hover:border-[#C6FF00]/20 transition-all duration-500 mt-1">
            <svg className="w-4 h-4 text-white/20 group-hover:text-[#C6FF00] transition-colors duration-500 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{cardContent}</a>;
  }
  return cardContent;
}

export default function ContactContent() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #08080C 0%, #0B0C14 40%, #0A0D0B 100%)" }}>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-[0.035]"
          style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)" }} />
        <div className="absolute bottom-[-15%] right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.02]"
          style={{ background: "radial-gradient(ellipse, #4361EE, transparent 70%)" }} />
      </div>

      <nav className="relative max-w-5xl mx-auto px-4 sm:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dgqwtzgwo/image/upload/v1771000992/branding/pwa-icon/dibvx80cvmgpnmsh1irl.png"
            alt="BePrime" width={120} height={40}
            className="w-auto h-7 sm:h-8 object-contain"
          />
        </Link>
        <Link href="/" className="text-white/40 hover:text-white/70 text-sm transition-colors flex items-center gap-1.5">
          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {c.back}
        </Link>
      </nav>

      <main className="relative max-w-5xl mx-auto px-4 sm:px-8 pb-20">
        <div className="text-center mb-14 sm:mb-16 pt-4 sm:pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6FF00]/[0.06] border border-[#C6FF00]/10 text-[#C6FF00]/70 text-[11px] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00] animate-pulse" />
            {c.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            {c.title} <span className="text-[#C6FF00]">{c.titleAccent}</span>
          </h1>
          <p className="text-white/35 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            {c.subtitle}
            <br className="hidden sm:block" />
            {c.subtitleLine2}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto mb-16">
          <ContactCard icon="✉️" label={c.email.label} value="yousseef.ah@gmail.com" href="mailto:yousseef.ah@gmail.com" dir="ltr" />
          <ContactCard icon="📱" label={c.phone.label} value="01120920078" href="tel:+201120920078" dir="ltr" />
          <ContactCard icon="💬" label={c.whatsapp.label} value="01120920078" href="https://wa.me/201120920078" dir="ltr" />
          <ContactCard icon="📍" label={c.address.label} value="23 Rabaa Adawya St, Haram, Giza" href="https://maps.google.com/?q=23+rabaa+adawya+st+haram+giza" dir="ltr" />
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="h-px bg-gradient-to-l from-transparent via-white/[0.06] to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C6FF00]/[0.04] to-transparent" />
            <div className="absolute inset-0 border border-[#C6FF00]/[0.08] rounded-2xl" />
            <div className="relative px-6 sm:px-12 py-10 sm:py-14">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {c.ctaTitle} <span className="text-[#C6FF00]">{c.ctaTitleAccent}</span>?
              </h2>
              <p className="text-white/30 text-sm sm:text-base mb-8 max-w-md mx-auto">{c.ctaSubtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://wa.me/201120920078" target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]"
                  style={{ background: "#25D366", color: "#fff" }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  {c.ctaWhatsapp}
                </a>
                <a href="mailto:yousseef.ah@gmail.com"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white/60 border border-white/[0.08] hover:border-white/[0.15] hover:text-white/80 hover:bg-white/[0.03] transition-all duration-300">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {c.ctaEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/10 text-xs">
            © {new Date().getFullYear()} BePrime — {c.copyright}
          </p>
        </div>
      </main>
    </div>
  );
}
