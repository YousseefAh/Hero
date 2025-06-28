"use client";
import Image from "next/image";
import Link from "next/link";
import { links } from "utils/constants";
import Hamurger from "./Hamurger";
import { useState } from "react";
import { UseModalContext } from "../../../contexts/ModalContext";

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
          <Image
            src="/logo.svg"
            alt="Yadora logo"
            width={100}
            height={28}
            className="inline-block mr-8 h-7 w-auto"
          />
        </Link>

        <ul className="inline-flex gap-8 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="lg:block hidden text-primary-500 xl:text-lg hover:text-accent-500 transition-all duration-100"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:flex items-center hidden ml-auto">
        <button 
          onClick={handleContact}
          className="bg-primary-500 hover:bg-accent-500 px-8 hover:px-9 py-4 rounded-2xl text-white xl:text-lg transition-all duration-200"
        >
          Contact Us
        </button>
      </div>

      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
        <Hamurger />
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary-500 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Yadora logo"
                width={100}
                height={28}
                className="h-7 w-auto"
              />
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
              className="w-full bg-accent-500 hover:bg-accent-400 px-8 py-4 rounded-2xl text-white text-xl transition-all duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
