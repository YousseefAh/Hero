"use client";

import { CheckoutProvider } from "@/contexts/CheckoutContext";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

function DirectionManager({ children }) {
  const { isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";
  }, [isRTL]);

  return children;
}

export default function ClientProviders({ children }) {
  return (
    <LanguageProvider>
      <DirectionManager>
        <CheckoutProvider>
          {children}
        </CheckoutProvider>
      </DirectionManager>
    </LanguageProvider>
  );
}
