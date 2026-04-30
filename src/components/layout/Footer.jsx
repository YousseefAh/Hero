"use client";

import { footerSocials } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full px-5 sm:px-8 md:px-16 xl:px-24 pt-12 pb-8 sm:pb-12 md:pb-20 max-w-[90rem] mx-auto">

      {/* ── Top section ── */}
      <div className="pb-10 border-b border-primary-400/15">

        {/* Logo */}
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/beprime-logo.png"
              alt="BePrime Logo"
              width={160}
              height={160}
              className="w-auto h-12 sm:h-14 object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        {/* Tagline + Nav columns — all on one row */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-x-10 gap-y-8">
          {/* Tagline + socials as first column (wider) */}
          <div className="col-span-2">
            <p className="text-primary-300 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <ul className="flex items-center gap-2.5 mt-4">
              {footerSocials.map((social) => (
                <li key={social.id}>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white border border-primary-400/15 flex items-center justify-center hover:bg-accent-500 hover:border-accent-500 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm hover:shadow-glow-green"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.logo}
                      alt={social.name}
                      width={16}
                      height={16}
                      className="opacity-50 group-hover:opacity-90 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          {t.footer.columns.map((column, idx) => (
            <div key={idx}>
              <p className="mb-3 font-bold text-sm text-primary-400 uppercase tracking-wider">
                {column.heading}
              </p>
              <ul className="flex flex-col gap-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-300 hover:text-accent-500 transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-primary-300 hover:text-accent-500 transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-primary-200 text-xs">
          © {new Date().getFullYear()} BePrime. {t.footer.copyright}
        </p>
        <div className="flex items-center gap-3 text-xs text-primary-200">
          <Link href="/privacy-policy" className="hover:text-accent-500 transition-colors">{t.footer.bottomLinks.privacy}</Link>
          <span className="w-px h-3 bg-primary-400/30" />
          <Link href="/refund-policy" className="hover:text-accent-500 transition-colors">{t.footer.bottomLinks.refund}</Link>
          <span className="w-px h-3 bg-primary-400/30" />
          <Link href="/terms" className="hover:text-accent-500 transition-colors">{t.footer.bottomLinks.terms}</Link>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
