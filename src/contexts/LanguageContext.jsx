"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { ar } from "@/translations/ar";
import { en } from "@/translations/en";

const LanguageContext = createContext();

const translations = { ar, en };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");
  const [mounted, setMounted] = useState(false);

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem("bp_lang");
    if (saved && translations[saved]) {
      setLang(saved);
    }
    setMounted(true);
  }, []);

  // Update HTML dir and lang attributes
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    html.setAttribute("lang", lang);
  }, [lang, mounted]);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === "ar" ? "en" : "ar";
      localStorage.setItem("bp_lang", next);
      return next;
    });
  }, []);

  const t = translations[lang] || translations.ar;
  const isRTL = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, isRTL, t, toggleLanguage, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
