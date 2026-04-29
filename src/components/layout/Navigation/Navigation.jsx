"use client";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/utils/constants";
import Hamurger from "@/components/layout/Navigation/Hamurger";
import { useState } from "react";
import { UseModalContext } from "@/contexts/ModalContext";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setCurrentModal } = UseModalContext();

  const handleContact = () => {
    setIsMenuOpen(false);
    setCurrentModal("more-information");
  };

  return (
    <section className="flex justify-between relative z-50">
      <nav className="flex items-center">
        <Link href="/">
          <Image src="/beprime-logo.png" alt="BePrime Logo" width={120} height={40} priority className="w-auto h-8 lg:h-10 object-contain ml-8" />
        </Link>

        <ul className="inline-flex gap-8 font-medium">
          {links.map((link) => (
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

      <div className="lg:flex items-center hidden mr-auto">
        <button
          onClick={handleContact}
          className="bg-accent-500 hover:bg-accent-400 px-8 hover:px-9 py-4 rounded-2xl text-primary-800 font-bold xl:text-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(198,255,0,0.3)]"
        >
          تواصل معنا
        </button>
      </div>

      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
        <Hamurger />
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary-500 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
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
            {links.map((link) => (
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

          <div className="mt-auto">
            <button
              onClick={handleContact}
              className="w-full bg-accent-500 hover:bg-accent-400 px-8 py-4 rounded-2xl text-primary-800 font-bold text-xl transition-all duration-200"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
