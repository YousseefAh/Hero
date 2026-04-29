"use client";

import { useCheckout, PAYMENT_METHODS } from "@/contexts/CheckoutContext";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function PaymentConfirmation() {
  const { checkout, closeCheckout } = useCheckout();
  const router = useRouter();
  const { payment, plan, customerInfo } = checkout;
  const methodData = PAYMENT_METHODS[payment.method];

  const handleGoHome = () => {
    closeCheckout();
    router.push("/");
  };

  const details = [
    { label: "رقم الطلب", value: payment.referenceId, dir: "ltr", accent: true },
    { label: "الخطة", value: plan?.name },
    { label: "المبلغ", value: plan?.price !== "تواصل معنا" ? `${plan?.price} ج.م` : plan?.price, bold: true },
    { label: "الدفع", value: methodData?.name },
    { label: "الاسم", value: customerInfo.fullName },
    { label: "الموبايل", value: customerInfo.phone, dir: "ltr" },
  ].filter(d => d.value);

  return (
    <div className="max-w-lg mx-auto text-center">

      {/* ── Success celebration ── */}
      <div className="relative mb-5 flex items-center justify-center" style={{ height: "100px" }}>
        {/* Outer glow pulse */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute w-24 h-24 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(198,255,0,0.12) 0%, rgba(198,255,0,0.03) 50%, transparent 70%)",
            boxShadow: "0 0 60px rgba(198,255,0,0.15), 0 0 100px rgba(198,255,0,0.05)",
          }}
        />

        {/* Inner circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, duration: 0.4, type: "spring", stiffness: 200, damping: 12 }}
          className="relative w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center z-10"
          style={{ boxShadow: "0 0 30px rgba(198,255,0,0.4), 0 4px 20px rgba(198,255,0,0.2)" }}
        >
          <motion.svg
            className="w-7 h-7 text-primary-800"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <motion.path
              strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            />
          </motion.svg>
        </motion.div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0.3],
              x: Math.cos((i * 45 * Math.PI) / 180) * (55 + (i % 3) * 10),
              y: Math.sin((i * 45 * Math.PI) / 180) * (55 + (i % 3) * 10),
            }}
            transition={{ delay: 0.5 + i * 0.06, duration: 0.9, ease: "easeOut" }}
            className={`absolute w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? "bg-accent-500" : i % 3 === 1 ? "bg-accent-400" : "bg-cyan-accent"}`}
          />
        ))}
      </div>

      {/* ── Title ── */}
      <motion.h2
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
        className="text-xl sm:text-2xl font-bold text-white mb-1.5"
      >
        تم استلام <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">طلبك</span> بنجاح! 🎉
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
        className="text-white/30 text-xs sm:text-sm mb-5 max-w-xs mx-auto leading-relaxed"
      >
        هنفعّلك الحساب خلال أقل من ٢٤ ساعة وهنبعتلك رسالة على واتساب
      </motion.p>

      {/* ── Order details — premium card ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
        className="relative rounded-2xl overflow-hidden mb-4"
      >
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/15 via-transparent to-blue-accent/10 p-[1px]">
          <div className="w-full h-full rounded-2xl" style={{ background: "linear-gradient(160deg, #101218 0%, #0D0F15 100%)" }} />
        </div>

        {/* Top glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />

        <div className="relative p-4 sm:p-5">
          <p className="text-white/20 text-[10px] font-semibold uppercase tracking-[0.2em] mb-3 text-center">
            تفاصيل الطلب
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {details.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.05 }}
                className="flex flex-col"
              >
                <span className="text-white/20 text-[10px] mb-0.5">{d.label}</span>
                <span
                  dir={d.dir || "rtl"}
                  className={`text-xs sm:text-[13px] leading-snug ${
                    d.accent
                      ? "text-accent-500 font-display font-bold tracking-wider"
                      : d.bold
                        ? "text-white font-display font-bold"
                        : "text-white/60"
                  }`}
                >
                  {d.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Actions ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
        className="flex flex-col gap-2.5"
      >
        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/201120920078?text=${encodeURIComponent(`مرحبًا! أنا ${customerInfo.fullName}\nرقم الطلب: ${payment.referenceId}\nالخطة: ${plan?.name}\nالمبلغ: ${plan?.price} ج.م\nطريقة الدفع: ${methodData?.name}\n\nمحتاج أبعت إيصال الدفع`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl text-base transition-all duration-300 active:scale-[0.985]"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          ابعت إيصال الدفع على واتساب
        </a>

        {/* Home */}
        <button
          onClick={handleGoHome}
          className="w-full py-4 rounded-xl text-white/50 font-medium text-base border border-white/10 hover:bg-white/5 hover:text-white/70 transition-all duration-300 active:scale-[0.985]"
        >
          رجوع للصفحة الرئيسية
        </button>
      </motion.div>

      {/* Support whisper */}
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        className="text-white/12 text-[10px] mt-3"
      >
        محتاج مساعدة؟ كلمنا على واتساب <span className="font-display" dir="ltr">01120920078</span>
      </motion.p>
    </div>
  );
}
