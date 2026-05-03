"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";
import { submitToGoogleSheets } from "@/utils/googleSheets";

const CheckoutContext = createContext();

const INITIAL_STATE = {
  isOpen: false,
  step: 1, // 1: Info + Plan, 2: Payment, 3: Confirmation
  plan: null, // { name, price, billingCycle, features, subheading }
  customerInfo: {
    fullName: "",
    phone: "",
    email: "",
    platformName: "",
  },
  payment: {
    method: "", // "vodafone_cash" | "manual_instapay" | "fawaterak"
    fawaterakPaymentMethodId: null,
    status: "pending", // "pending" | "awaiting_confirmation" | "confirmed"
    referenceId: "",
    fawaterakInvoiceKey: "",
  },
};

/** Manual transfer methods. Online checkout uses Fawaterak via /api/fawaterak/init. */
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
  fawaterak: {
    id: "fawaterak",
    name: "دفع إلكتروني",
    nameEn: "Online payment",
    instructions: "",
  },
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
  }, []);

  const closeCheckout = useCallback(() => {
    setCheckout(INITIAL_STATE);
  }, []);

  const setStep = useCallback((step) => {
    setCheckout((prev) => ({ ...prev, step }));
  }, []);

  const nextStep = useCallback(() => {
    setCheckout((prev) => ({ ...prev, step: Math.min(prev.step + 1, 3) }));
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

  const setPaymentMethod = useCallback((method, fawaterakPaymentMethodId = null) => {
    setCheckout((prev) => ({
      ...prev,
      payment: {
        ...prev.payment,
        method,
        fawaterakPaymentMethodId:
          method === "fawaterak" && fawaterakPaymentMethodId != null
            ? Number(fawaterakPaymentMethodId)
            : null,
      },
    }));
  }, []);

  const lastSubmittedRef = useRef(null);

  const confirmPayment = useCallback(() => {
    const refId = `BP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    setCheckout((prev) => {
      if (lastSubmittedRef.current !== refId) {
        lastSubmittedRef.current = refId;
        submitToGoogleSheets({
          fullName: prev.customerInfo.fullName,
          phone: prev.customerInfo.phone,
          platformName: prev.customerInfo.platformName,
          planName: prev.plan?.name || "—",
          price: prev.plan?.price || "—",
          billingCycle: prev.plan?.billingCycle || "monthly",
          paymentMethod: PAYMENT_METHODS[prev.payment.method]?.name || prev.payment.method,
          referenceId: refId,
        });
      }

      return {
        ...prev,
        step: 3,
        payment: {
          ...prev.payment,
          status: "awaiting_confirmation",
          referenceId: refId,
        },
      };
    });
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
