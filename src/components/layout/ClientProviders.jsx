"use client";

import { CheckoutProvider } from "@/contexts/CheckoutContext";

export default function ClientProviders({ children }) {
  return (
    <CheckoutProvider>
      {children}
    </CheckoutProvider>
  );
}
