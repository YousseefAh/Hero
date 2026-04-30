"use client";
import Image from "next/image";
import Link from "next/link";
import Hamurger from "@/components/layout/Navigation/Hamurger";
import { useState } from "react";
import { UseModalContext } from "@/contexts/ModalContext";
import { useLanguage } from "@/contexts/LanguageContext";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setCurrentModal } = UseModalContext();
  const { t, toggleLanguage, isRTL } = useLanguage();

  const navLinks = [
    { name: t.nav.features, href: "/features" },
    { name: t.nav.explore, href: "/#dashboard" },
    { name: t.nav.pricing, href: "/#pricing" },
    { name: t.nav.support, href: "/#cta" },
  ];

  const handleContact = () => {
    setIsMenuOpen(false);
    setCurrentModal("more-information");
  };

  return (
    <section className="flex justify-between relative z-50">
      <nav className="flex items-center">
        <Link href="/">
          <Image src="/beprime-logo.png" alt="BePrime Logo" width={120} height={40} priority className={`w-auto h-8 lg:h-10 object-contain ${isRTL ? "ml-8" : "mr-8"}`} />
        </Link>

        <ul className="inline-flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="lg:block hidden xl:text-lg hover:text-accent-500 transition-all duration-100 text-primary-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`lg:flex items-center hidden ${isRTL ? "mr-auto" : "ml-auto"} gap-3`}>
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="px-4 py-2.5 rounded-xl border border-primary-400/20 text-primary-500 font-bold text-sm hover:border-accent-500/40 hover:text-accent-500 transition-all duration-200"
        >
          {t.nav.langSwitch}
        </button>

        <button
          onClick={handleContact}
          className="bg-accent-500 hover:bg-accent-400 px-5 py-2.5 rounded-xl text-primary-800 font-bold text-sm transition-all duration-200 hover:shadow-[0_0_15px_rgba(198,255,0,0.3)]"
        >
          {t.nav.contact}
        </button>
      </div>

      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
        <Hamurger />
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary-500 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : isRTL ? '-translate-x-full' : 'translate-x-full'} lg:hidden`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <Link href="/">
              <Image src="/beprime-logo.png" alt="BePrime Logo" width={120} height={40} className="w-auto h-8 object-contain filter brightness-0 invert" />
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="p-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-8 mb-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-2xl font-medium hover:text-accent-500 transition-all duration-100"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3">
            {/* Language Toggle — Mobile */}
            <button
              onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
              className="w-full py-3.5 rounded-2xl border-2 border-white/20 text-white font-bold text-lg hover:border-accent-500/50 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {t.nav.langSwitch}
            </button>

            <button
              onClick={handleContact}
              className="w-full bg-accent-500 hover:bg-accent-400 px-8 py-3.5 rounded-2xl text-primary-800 font-bold text-lg transition-all duration-200"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
