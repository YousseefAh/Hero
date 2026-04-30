"use client";

import { CheckoutProvider } from "@/contexts/CheckoutContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function ClientProviders({ children }) {
  return (
    <LanguageProvider>
      <CheckoutProvider>
        {children}
      </CheckoutProvider>
    </LanguageProvider>
  );
}
