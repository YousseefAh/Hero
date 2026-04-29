"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { PAYMENT_METHODS } from "@/contexts/CheckoutContext";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /* fallback */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${copied ? "bg-accent-500/20 text-accent-500 border border-accent-500/30" : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10"}`}>
      {copied ? "✓ تم" : "نسخ"}
    </button>
  );
}

function PayContent() {
  const params = useSearchParams();
  const name = params.get("name");
  const amount = params.get("amount");
  const [step, setStep] = useState(1); // 1=info, 2=payment, 3=done
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedMethod, setSelectedMethod] = useState("");
  const [refId] = useState(`BP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2,6).toUpperCase()}`);

  if (!name || !amount) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center" dir="rtl" style={{ background: "#08080C" }}>
        <p className="text-white/30 text-sm">رابط غير صالح</p>
      </div>
    );
  }

  const validate = () => {
    const e = {};
    if (!fullName.trim()) e.fullName = true;
    if (!phone.trim() || !/^01[0-9]{9}$/.test(phone.replace(/\s/g, ""))) e.phone = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmitInfo = () => { if (validate()) setStep(2); };

  const handleConfirm = async () => {
    if (!selectedMethod) return;
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, {
          to_name: "BePrime Team",
          from_name: fullName,
          message: `🔔 دفع مخصص!\n\n🏷️ الخدمة: ${name}\n💰 المبلغ: ${amount} ج.م\n👤 الاسم: ${fullName}\n📱 الموبايل: ${phone}\n💳 الدفع: ${PAYMENT_METHODS[selectedMethod]?.name}\n🔑 رقم: ${refId}`,
        });
      }
    } catch (e) { console.warn("EmailJS failed:", e); }
    setStep(3);
  };

  const methods = Object.values(PAYMENT_METHODS);
  const methodData = PAYMENT_METHODS[selectedMethod];
  const inputCls = (err) => `w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/15 outline-none transition-all focus:bg-white/[0.05] ${err ? "border-red-500/50" : "border-white/[0.07] focus:border-accent-500/40"}`;

  return (
    <div className="min-h-[100dvh] flex items-start justify-center px-4" dir="rtl" style={{ background: "linear-gradient(160deg, #08080C 0%, #0B0C14 40%, #0A0D0B 100%)" }}>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)" }} />
      </div>

      <div className="relative w-full max-w-lg py-5 min-h-[100dvh] flex flex-col">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <Image src="https://res.cloudinary.com/dgqwtzgwo/image/upload/v1771000992/branding/pwa-icon/dibvx80cvmgpnmsh1irl.png" alt="BePrime" width={100} height={36} className="w-auto h-7 object-contain" />
        </div>

        {/* Service card */}
        <div className="rounded-xl bg-white/[0.03] border border-accent-500/10 p-4 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-500/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <p className="text-white/70 text-sm font-semibold">{name}</p>
          </div>
          <p className="font-display font-bold text-lg text-accent-500">{Number(amount).toLocaleString()} <span className="text-xs text-white/30">ج.م</span></p>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div key={step} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>

            {/* Step 1: Info */}
            {step === 1 && (
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-[1px]"><div className="w-full h-full rounded-2xl" style={{ background: "#101218" }} /></div>
                <div className="relative p-5 sm:p-6">
                  <h2 className="text-lg font-bold text-white mb-1">بيانات <span className="text-accent-500">التواصل</span></h2>
                  <p className="text-white/30 text-xs mb-5">هنحتاج اسمك ورقمك</p>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-white/40 text-[11px] font-medium mb-1.5">الاسم الكامل <span className="text-accent-500">*</span></label>
                      <input type="text" placeholder="مثال: أحمد محمد" value={fullName} onChange={e => setFullName(e.target.value)} className={inputCls(errors.fullName)} />
                    </div>
                    <div>
                      <label className="block text-white/40 text-[11px] font-medium mb-1.5">رقم الموبايل <span className="text-accent-500">*</span></label>
                      <input type="tel" dir="ltr" placeholder="01xxxxxxxxx" value={phone} onChange={e => setPhone(e.target.value)} className={inputCls(errors.phone)} />
                    </div>
                  </div>
                  <button onClick={handleSubmitInfo} className="w-full mt-5 py-3.5 rounded-xl font-bold text-sm text-primary-800 active:scale-[0.985] transition-all" style={{ background: "linear-gradient(135deg, #C6FF00 0%, #a8e600 100%)", boxShadow: "0 0 20px rgba(198,255,0,0.2)" }}>
                    متابعة إلى الدفع
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div>
                <div className="flex flex-col gap-3 mb-5">
                  {methods.map(m => (
                    <button key={m.id} onClick={() => setSelectedMethod(m.id)} className={`w-full rounded-xl p-4 text-right transition-all border ${selectedMethod === m.id ? "bg-accent-500/[0.07] border-accent-500/40" : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.05]"}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold ${m.id === "vodafone_cash" ? "bg-gradient-to-br from-red-500 to-red-600" : "bg-gradient-to-br from-amber-500 to-orange-600"}`}>
                          {m.id === "vodafone_cash" ? "V" : "⚡"}
                        </div>
                        <div className="flex-1"><p className="font-bold text-white text-sm">{m.name}</p><p className="text-white/30 text-xs">{m.instructions}</p></div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === m.id ? "border-accent-500 bg-accent-500" : "border-white/20"}`}>
                          {selectedMethod === m.id && <div className="w-2 h-2 rounded-full bg-primary-800" />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {methodData && (
                  <div className="rounded-xl border border-accent-500/20 bg-accent-500/[0.04] p-5 mb-5">
                    <p className="text-accent-500 font-bold text-sm mb-3">خطوات الدفع</p>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-6 rounded-full bg-accent-500/20 text-accent-500 flex items-center justify-center text-xs font-bold">1</div>
                      <div className="flex-1">
                        <p className="text-white/60 text-sm mb-2">{methodData.id === "vodafone_cash" ? "حوّل المبلغ على:" : "حوّل على حساب إنستاباي:"}</p>
                        <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2.5">
                          <span className="font-display font-bold text-white text-base tracking-wider flex-1" dir="ltr">{methodData.number}</span>
                          <CopyButton text={methodData.number} />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-500/20 text-accent-500 flex items-center justify-center text-xs font-bold">2</div>
                      <div><p className="text-white/60 text-sm">المبلغ:</p><p className="font-display font-bold text-accent-500 text-xl mt-1">{Number(amount).toLocaleString()} ج.م</p></div>
                    </div>
                  </div>
                )}

                <button onClick={handleConfirm} disabled={!selectedMethod} className="w-full py-3.5 rounded-xl font-bold text-sm transition-all active:scale-[0.985] disabled:opacity-30" style={{ background: selectedMethod ? "linear-gradient(135deg, #C6FF00 0%, #a8e600 100%)" : "rgba(255,255,255,0.05)", color: selectedMethod ? "#1E1B22" : "rgba(255,255,255,0.3)" }}>
                  تأكيد الطلب
                </button>
                <button onClick={() => setStep(1)} className="w-full mt-2 py-2.5 text-white/30 text-sm hover:text-white/50 transition-colors">رجوع</button>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="text-center">
                <div className="relative mb-5 flex justify-center" style={{ height: 90 }}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 12 }} className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center z-10" style={{ boxShadow: "0 0 40px rgba(198,255,0,0.3)" }}>
                    <svg className="w-7 h-7 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </motion.div>
                </div>
                <h2 className="text-xl font-bold text-white mb-1.5">تم استلام <span className="text-accent-500">طلبك</span> بنجاح! 🎉</h2>
                <p className="text-white/30 text-xs mb-5">هنفعّلك خلال أقل من ٢٤ ساعة</p>

                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 mb-4 text-right">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                    <div><span className="text-white/20 text-[10px]">رقم الطلب</span><br/><span className="text-accent-500 font-display font-bold text-xs tracking-wider" dir="ltr">{refId}</span></div>
                    <div><span className="text-white/20 text-[10px]">الخدمة</span><br/><span className="text-white/60 text-xs">{name}</span></div>
                    <div><span className="text-white/20 text-[10px]">المبلغ</span><br/><span className="text-white font-bold text-xs">{Number(amount).toLocaleString()} ج.م</span></div>
                    <div><span className="text-white/20 text-[10px]">الاسم</span><br/><span className="text-white/60 text-xs">{fullName}</span></div>
                  </div>
                </div>

                <a href={`https://wa.me/201120920078?text=${encodeURIComponent(`مرحبًا! أنا ${fullName}\nرقم الطلب: ${refId}\nالخدمة: ${name}\nالمبلغ: ${amount} ج.م\nالدفع: ${methodData?.name}\n\nمحتاج أبعت إيصال الدفع`)}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl text-base transition-all active:scale-[0.985]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  ابعت إيصال الدفع على واتساب
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function PayPage() {
  return <Suspense fallback={<div className="min-h-screen" style={{ background: "#08080C" }} />}><PayContent /></Suspense>;
}
