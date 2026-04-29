import Link from "next/link";

export const metadata = {
  title: "سياسة الدفع والاسترجاع — BePrime",
  description: "سياسة الدفع والاسترجاع والإلغاء لمنصة BePrime",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0b14]">
      {/* Header */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white tracking-tight">
          Be<span className="text-accent-500">Prime</span>
        </Link>
        <Link href="/" className="text-white/40 hover:text-white/70 text-sm transition-colors flex items-center gap-1">
          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          الرئيسية
        </Link>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 pb-20">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            سياسة الدفع <span className="text-accent-500">والاسترجاع</span>
          </h1>
          <p className="text-white/30 text-sm">آخر تحديث: أبريل ٢٠٢٦</p>
        </div>

        <div className="prose-invert space-y-8 text-white/60 text-sm sm:text-base leading-relaxed">
          {/* Payment Methods */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">طرق الدفع المتاحة</h2>
            <p className="mb-3">نقبل الدفع من خلال الطرق التالية:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong className="text-white/80">فودافون كاش:</strong> التحويل على الرقم <span className="font-display text-accent-500" dir="ltr">01120920078</span></li>
              <li><strong className="text-white/80">إنستاباي:</strong> التحويل على حساب <span className="font-display text-accent-500" dir="ltr">yousseef.ah@instapay</span></li>
            </ul>
            <p className="mt-3">
              بعد إتمام التحويل، يرجى إرسال إيصال الدفع عبر واتساب لتأكيد العملية وتفعيل الاشتراك.
            </p>
          </section>

          {/* Pricing & Billing */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">الأسعار والفوترة</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>جميع الأسعار المعروضة بالجنيه المصري (ج.م) وتشمل جميع الضرائب المطبقة</li>
              <li>الاشتراكات متاحة بنظام شهري أو سنوي حسب الخطة المختارة</li>
              <li>الأسعار قابلة للتغيير مع إشعار مسبق لا يقل عن ٣٠ يومًا للمشتركين الحاليين</li>
              <li>يتم تجديد الاشتراك بعد انتهاء الفترة المحددة ما لم يتم الإلغاء قبلها</li>
            </ul>
          </section>

          {/* Activation */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">تفعيل الاشتراك</h2>
            <p>
              بعد استلام إيصال الدفع والتحقق منه، يتم تفعيل حسابك خلال أقل من ٢٤ ساعة عمل. سيتم إخطارك عبر الواتساب أو البريد الإلكتروني بمجرد التفعيل.
            </p>
          </section>

          {/* Refund Policy */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">سياسة الاسترجاع</h2>
            <div className="rounded-xl bg-accent-500/[0.05] border border-accent-500/20 p-4 mb-4">
              <p className="text-accent-500/80 font-medium text-sm">
                ✦ نهدف لضمان رضاك التام عن خدماتنا
              </p>
            </div>
            <ul className="list-disc list-inside space-y-3 mr-4">
              <li>
                <strong className="text-white/80">خلال أول ٧ أيام:</strong> يحق لك طلب استرجاع كامل للمبلغ المدفوع إذا لم تكن قد استخدمت المنصة بشكل فعلي (أي لم تقم بإضافة عملاء أو إنشاء خطط تدريبية).
              </li>
              <li>
                <strong className="text-white/80">بعد ٧ أيام:</strong> لا يتم استرجاع المبلغ، ولكن يمكنك إلغاء التجديد التلقائي ومتابعة استخدام الخدمة حتى نهاية فترة الاشتراك الحالية.
              </li>
              <li>
                <strong className="text-white/80">الاشتراكات السنوية:</strong> في حالة الاشتراك السنوي، يتم تطبيق نفس سياسة الـ ٧ أيام. بعد ذلك، لا يتم استرجاع المبلغ المتبقي.
              </li>
            </ul>
          </section>

          {/* Refund Process */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">إجراءات الاسترجاع</h2>
            <p className="mb-3">لطلب استرجاع، اتبع الخطوات التالية:</p>
            <ol className="list-decimal list-inside space-y-2 mr-4">
              <li>تواصل معنا عبر واتساب على الرقم <span className="font-display text-accent-500" dir="ltr">01120920078</span></li>
              <li>اذكر رقم الطلب واسم الحساب</li>
              <li>وضّح سبب طلب الاسترجاع</li>
              <li>سيتم مراجعة طلبك والرد عليك خلال ٤٨ ساعة عمل</li>
              <li>في حالة الموافقة، يتم تحويل المبلغ خلال ٥-٧ أيام عمل بنفس طريقة الدفع الأصلية</li>
            </ol>
          </section>

          {/* Cancellation */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">إلغاء الاشتراك</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>يمكنك إلغاء اشتراكك في أي وقت عبر التواصل معنا</li>
              <li>بعد الإلغاء، يظل حسابك نشطًا حتى نهاية فترة الاشتراك المدفوعة</li>
              <li>بياناتك تظل محفوظة لمدة ٩٠ يومًا بعد انتهاء الاشتراك</li>
              <li>يمكنك تصدير بياناتك في أي وقت قبل أو بعد الإلغاء</li>
            </ul>
          </section>

          {/* Disputes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">حل النزاعات</h2>
            <p>
              في حالة وجود أي نزاع حول الدفع أو الاسترجاع، نلتزم بحل المشكلة بشكل ودي ومباشر. إذا لم يتم التوصل لحل مرضي، يتم اللجوء للجهات المختصة وفقًا للقوانين المصرية المعمول بها.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">تواصل معنا</h2>
            <p>
              لأي استفسارات حول الدفع أو الاسترجاع، تواصل معنا عبر واتساب على الرقم{" "}
              <a href="https://wa.me/201120920078" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-400 transition-colors font-display" dir="ltr">
                01120920078
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
