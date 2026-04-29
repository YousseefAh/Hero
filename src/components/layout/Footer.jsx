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
    ],
  },
];

function Footer() {
  return (
    <footer className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-16 pb-8 sm:pb-12 md:pb-28 max-w-[90rem]">
      <div className="gap-y-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-[2fr_repeat(4,1fr)] grid-rows-3 md:grid-rows-2 xl:grid-rows-1">
        <div className="flex flex-col justify-start content-between row-start-3 md:row-start-2 lg:row-start-1">
          <span className="mb-8 md:mb-auto font-bold text-2xl text-primary-500 tracking-tight pl-10">
            Be<span className="text-accent-500">Prime</span>
          </span>
          <ul className="flex gap-x-2">
            {footerSocials.map((logo) => (
              <li key={logo.id}>
                <a href="#">
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {footerColumns.map((column) => (
          <div key={column.id}>
            <p className="mb-4 font-bold text-lg/6 text-primary-500 xl:text-xl">
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
                      className="text-primary-500 xl:text-lg hover:text-accent-500 transition-all duration-100"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-primary-500 xl:text-lg hover:text-accent-500 transition-all duration-100"
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

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-primary-400/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-primary-200 text-sm">
          © {new Date().getFullYear()} BePrime. جميع الحقوق محفوظة.
        </p>
        <div className="flex items-center gap-4 text-xs text-primary-200">
          <Link href="/privacy-policy" className="hover:text-accent-500 transition-colors">
            الخصوصية
          </Link>
          <span className="w-1 h-1 rounded-full bg-primary-300" />
          <Link href="/refund-policy" className="hover:text-accent-500 transition-colors">
            الاسترجاع
          </Link>
          <span className="w-1 h-1 rounded-full bg-primary-300" />
          <Link href="/terms" className="hover:text-accent-500 transition-colors">
            الشروط
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
