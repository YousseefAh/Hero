import { footerSocials } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    id: 1,
    heading: "عن BePrime",
    links: [
      { label: "كيف يعمل", href: "/#features" },
      { label: "الأسعار", href: "/#pricing" },
      { label: "الدعم والمساعدة", href: "/#cta" },
    ],
  },
  {
    id: 2,
    heading: "للمدربين",
    links: [
      { label: "طرق الدفع", href: "/refund-policy" },
      { label: "بدء الاستخدام", href: "/#pricing" },
    ],
  },
  {
    id: 3,
    heading: "قانوني",
    links: [
      { label: "سياسة الخصوصية", href: "/privacy-policy" },
      { label: "سياسة الاسترجاع", href: "/refund-policy" },
      { label: "الشروط والأحكام", href: "/terms" },
    ],
  },
  {
    id: 4,
    heading: "تواصل معنا",
    links: [
      { label: "واتساب", href: "https://wa.me/201120920078", external: true },
      { label: "صفحة التواصل", href: "/contact" },
    ],
  },
];

function Footer() {
  return (
    <footer className="w-full px-5 sm:px-8 md:px-16 xl:px-24 pt-12 pb-8 sm:pb-12 md:pb-20 max-w-[90rem] mx-auto">

      {/* ── Top section ── */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 pb-10 border-b border-primary-400/15">

        {/* Brand block — full width on mobile, fixed width on desktop */}
        <div className="flex flex-col gap-4 lg:w-64 shrink-0">
          <Link href="/">
            <Image
              src="/beprime-logo.png"
              alt="BePrime Logo"
              width={160}
              height={160}
              className="w-auto h-12 sm:h-14 object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
          <p className="text-primary-300 text-sm leading-relaxed max-w-xs">
            شريكك التقني لبناء منظومة تدريب متكاملة. علامتك التجارية، تطبيقك، ونجاحك، في مكان واحد.
          </p>
          {/* Socials */}
          <ul className="flex items-center gap-2.5 mt-1">
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

        {/* Nav columns — 2-col grid on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
          {footerColumns.map((column) => (
            <div key={column.id}>
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
          © {new Date().getFullYear()} BePrime. جميع الحقوق محفوظة.
        </p>
        <div className="flex items-center gap-3 text-xs text-primary-200">
          <Link href="/privacy-policy" className="hover:text-accent-500 transition-colors">الخصوصية</Link>
          <span className="w-px h-3 bg-primary-400/30" />
          <Link href="/refund-policy" className="hover:text-accent-500 transition-colors">الاسترجاع</Link>
          <span className="w-px h-3 bg-primary-400/30" />
          <Link href="/terms" className="hover:text-accent-500 transition-colors">الشروط</Link>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
