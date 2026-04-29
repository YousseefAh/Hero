"use client";

import { useCheckout, PAYMENT_METHODS } from "@/contexts/CheckoutContext";
import { motion } from "motion/react";

export default function PaymentConfirmation() {
  const { checkout, closeCheckout } = useCheckout();
  const { payment, plan, customerInfo } = checkout;
  const methodData = PAYMENT_METHODS[payment.method];

  return (
    <div className="max-w-xl mx-auto text-center">
      {/* Success animation */}
      <div className="relative mb-8">
        {/* Outer glow ring */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center"
          style={{
            background: "radial-gradient(circle, rgba(198,255,0,0.15) 0%, transparent 70%)",
            boxShadow: "0 0 60px rgba(198,255,0,0.2), 0 0 120px rgba(198,255,0,0.05)",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent-500 flex items-center justify-center"
            style={{ boxShadow: "0 0 30px rgba(198,255,0,0.4)" }}
          >
            <motion.svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-primary-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5],
              x: Math.cos((i * 60 * Math.PI) / 180) * 80,
              y: Math.sin((i * 60 * Math.PI) / 180) * 80,
            }}
            transition={{ delay: 0.6 + i * 0.1, duration: 1, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-accent-500"
          />
        ))}
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl sm:text-3xl font-bold text-white mb-3"
      >
        تم استلام <span className="text-accent-500">طلبك</span> بنجاح! 🎉
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-white/40 text-sm sm:text-base mb-8 max-w-md mx-auto"
      >
        فريقنا هيراجع الدفع ويفعّلك الحساب خلال أقل من ٢٤ ساعة. هنبعتلك رسالة على الواتساب أو الإيميل.
      </motion.p>

      {/* Order details card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5 sm:p-6 mb-6 text-right"
      >
        <p className="text-white/30 text-xs font-medium uppercase tracking-widest mb-4 text-center">
          تفاصيل الطلب
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <span className="text-white/40 text-sm">رقم الطلب</span>
            <span className="font-display font-bold text-accent-500 text-sm tracking-wider" dir="ltr">
              {payment.referenceId}
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <span className="text-white/40 text-sm">الخطة</span>
            <span className="text-white text-sm font-medium">{plan?.name}</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <span className="text-white/40 text-sm">المبلغ</span>
            <span className="font-display font-bold text-white text-sm">{plan?.price} ج.م</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <span className="text-white/40 text-sm">طريقة الدفع</span>
            <span className="text-white text-sm">{methodData?.name}</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <span className="text-white/40 text-sm">الاسم</span>
            <span className="text-white text-sm">{customerInfo.fullName}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-white/40 text-sm">الإيميل</span>
            <span className="text-white text-sm" dir="ltr">{customerInfo.email}</span>
          </div>
        </div>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col gap-3"
      >
        {/* WhatsApp */}
        <a
          href={`https://wa.me/201120920078?text=${encodeURIComponent(`مرحبًا! أنا ${customerInfo.fullName}\nرقم الطلب: ${payment.referenceId}\nالخطة: ${plan?.name}\nالمبلغ: ${plan?.price} ج.م\nطريقة الدفع: ${methodData?.name}\n\nمحتاج أبعت إيصال الدفع`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl text-base transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          ابعت إيصال الدفع على واتساب
        </a>

        {/* Return home */}
        <button
          onClick={closeCheckout}
          className="w-full py-4 rounded-xl text-white/50 font-medium text-base border border-white/10 hover:bg-white/5 hover:text-white/70 transition-all duration-300"
        >
          رجوع للصفحة الرئيسية
        </button>
      </motion.div>

      {/* Support note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-white/20 text-xs mt-6"
      >
        لو عندك أي سؤال أو مشكلة — كلمنا على واتساب{" "}
        <span className="font-display" dir="ltr">01120920078</span>
      </motion.p>
    </div>
  );
}
