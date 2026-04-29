"use client";

import { createContext, useContext, useState, useCallback } from "react";

const CheckoutContext = createContext();

const INITIAL_STATE = {
  isOpen: false,
  step: 1, // 1: Plan Summary, 2: Customer Info, 3: Payment, 4: Confirmation
  plan: null, // { name, price, billingCycle, features, subheading }
  customerInfo: {
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    clientCount: "",
  },
  payment: {
    method: "", // "vodafone_cash" | "manual_instapay" | "fawaterk" (future)
    status: "pending", // "pending" | "awaiting_confirmation" | "confirmed"
    referenceId: "",
  },
};

/**
 * Payment gateway configuration.
 * Currently: manual methods only.
 * Future: Fawaterk integration.
 *
 * FAWATERK INTEGRATION (uncomment when ready):
 * ─────────────────────────────────────────────
 * Endpoint: POST https://api.fawaterk.com/api/v2/invoiceInitPay
 * Headers:  { Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAWATERK_API_KEY}` }
 * Body: {
 *   payment_method_id: <from GET /api/v2/getPaymentmethods>,
 *   cartTotal: plan.price,
 *   currency: 'EGP',
 *   customer: { first_name, last_name, email, phone, address },
 *   cartItems: [{ name: plan.name, price: plan.price, quantity: 1 }],
 *   redirectionUrls: {
 *     successUrl: `${window.location.origin}/checkout/success`,
 *     failUrl: `${window.location.origin}/checkout/fail`,
 *     pendingUrl: `${window.location.origin}/checkout/pending`
 *   }
 * }
 */
export const PAYMENT_METHODS = {
  vodafone_cash: {
    id: "vodafone_cash",
    name: "فودافون كاش",
    nameEn: "Vodafone Cash",
    number: "01120920078",
    icon: "vodafone",
    instructions: "حوّل المبلغ على الرقم وابعتلنا إيصال الدفع",
  },
  manual_instapay: {
    id: "manual_instapay",
    name: "إنستاباي",
    nameEn: "InstaPay",
    number: "yousseef.ah@instapay",
    icon: "instapay",
    instructions: "حوّل المبلغ على حساب إنستاباي وابعتلنا إيصال الدفع",
  },
  // FAWATERK — Future payment gateway (uncomment when ready)
  // fawaterk_card: {
  //   id: "fawaterk_card",
  //   name: "بطاقة ائتمان",
  //   nameEn: "Credit Card",
  //   icon: "card",
  //   gateway: "fawaterk",
  // },
  // fawaterk_wallet: {
  //   id: "fawaterk_wallet",
  //   name: "محفظة إلكترونية",
  //   nameEn: "E-Wallet",
  //   icon: "wallet",
  //   gateway: "fawaterk",
  // },
};

export function CheckoutProvider({ children }) {
  const [checkout, setCheckout] = useState(INITIAL_STATE);

  const startCheckout = useCallback((plan) => {
    setCheckout({
      ...INITIAL_STATE,
      isOpen: true,
      step: 1,
      plan,
    });
    document.body.style.overflow = "hidden";
  }, []);

  const closeCheckout = useCallback(() => {
    setCheckout(INITIAL_STATE);
    document.body.style.overflow = "";
  }, []);

  const setStep = useCallback((step) => {
    setCheckout((prev) => ({ ...prev, step }));
  }, []);

  const nextStep = useCallback(() => {
    setCheckout((prev) => ({ ...prev, step: Math.min(prev.step + 1, 4) }));
  }, []);

  const prevStep = useCallback(() => {
    setCheckout((prev) => ({ ...prev, step: Math.max(prev.step - 1, 1) }));
  }, []);

  const updateCustomerInfo = useCallback((field, value) => {
    setCheckout((prev) => ({
      ...prev,
      customerInfo: { ...prev.customerInfo, [field]: value },
    }));
  }, []);

  const setPaymentMethod = useCallback((method) => {
    setCheckout((prev) => ({
      ...prev,
      payment: { ...prev.payment, method },
    }));
  }, []);

  const confirmPayment = useCallback(() => {
    const refId = `BP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setCheckout((prev) => ({
      ...prev,
      step: 4,
      payment: {
        ...prev.payment,
        status: "awaiting_confirmation",
        referenceId: refId,
      },
    }));
  }, []);

  return (
    <CheckoutContext.Provider
      value={{
        checkout,
        startCheckout,
        closeCheckout,
        setStep,
        nextStep,
        prevStep,
        updateCustomerInfo,
        setPaymentMethod,
        confirmPayment,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout must be used within CheckoutProvider");
  return ctx;
}
