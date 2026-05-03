"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Suspense } from "react";

function ReturnInner({ variant }) {
  const { t, isRTL } = useLanguage();
  const tr = t.checkout.fawaterakReturn;
  const sp = useSearchParams();
  const invoiceKey = sp.get("invoice_key") || sp.get("invoiceKey") || "";

  const copy =
    variant === "success"
      ? { title: tr.successTitle, body: tr.successBody, tone: "success" }
      : variant === "fail"
        ? { title: tr.failTitle, body: tr.failBody, tone: "fail" }
        : { title: tr.pendingTitle, body: tr.pendingBody, tone: "pending" };

  return (
    <div
      className="min-h-[100dvh] flex flex-col items-center justify-center px-4 py-10"
      style={{ background: "linear-gradient(160deg, #08080C 0%, #0B0C14 40%, #0A0D0B 100%)" }}
    >
      <Image
        src="https://res.cloudinary.com/dgqwtzgwo/image/upload/v1771000992/branding/pwa-icon/dibvx80cvmgpnmsh1irl.png"
        alt="BePrime"
        width={100}
        height={36}
        className="w-auto h-8 object-contain mb-8"
      />

      <div
        className={`max-w-md w-full rounded-2xl border p-8 text-center ${
          copy.tone === "success"
            ? "border-accent-500/30 bg-accent-500/[0.06]"
            : copy.tone === "fail"
              ? "border-red-500/25 bg-red-500/[0.05]"
              : "border-amber-500/25 bg-amber-500/[0.05]"
        }`}
      >
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-3">{copy.title}</h1>
        <p className="text-white/55 text-sm leading-relaxed mb-6">{copy.body}</p>
        {invoiceKey ? (
          <p className="text-white/35 text-xs mb-6" dir="ltr">
            {tr.referenceLabel}: {invoiceKey}
          </p>
        ) : null}
        <Link
          href="/"
          className="inline-flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm text-primary-800 transition-all"
          style={{
            background: "linear-gradient(135deg, #C6FF00 0%, #a8e600 100%)",
            boxShadow: "0 0 24px rgba(198,255,0,0.15)",
          }}
        >
          {isRTL ? "الرجوع للرئيسية" : "Back to home"}
        </Link>
      </div>
    </div>
  );
}

export default function FawaterakReturnPage({ variant }) {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-[100dvh] flex items-center justify-center text-white/40 text-sm"
          style={{ background: "linear-gradient(160deg, #08080C 0%, #0B0C14 40%, #0A0D0B 100%)" }}
        >
          …
        </div>
      }
    >
      <ReturnInner variant={variant} />
    </Suspense>
  );
}
