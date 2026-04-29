import Link from "next/link";

export const metadata = {
  title: "سياسة الخصوصية — BePrime",
  description: "سياسة الخصوصية وحماية البيانات لمنصة BePrime",
};

export default function PrivacyPolicyPage() {
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
            سياسة <span className="text-accent-500">الخصوصية</span>
          </h1>
          <p className="text-white/30 text-sm">آخر تحديث: أبريل ٢٠٢٦</p>
        </div>

        <div className="prose-invert space-y-8 text-white/60 text-sm sm:text-base leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">مقدمة</h2>
            <p>
              نحن في BePrime نلتزم بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وتخزين وحماية معلوماتك عند استخدامك لمنصتنا وخدماتنا.
            </p>
            <p className="mt-2">
              باستخدامك لمنصة BePrime، فإنك توافق على جمع واستخدام المعلومات وفقًا لهذه السياسة.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">المعلومات التي نجمعها</h2>
            <p className="mb-3">نقوم بجمع الأنواع التالية من المعلومات:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong className="text-white/80">المعلومات الشخصية:</strong> الاسم الكامل، البريد الإلكتروني، رقم الهاتف، واسم النشاط التجاري عند التسجيل أو الاشتراك.</li>
              <li><strong className="text-white/80">معلومات الدفع:</strong> طريقة الدفع المختارة ومعلومات الفاتورة. لا نقوم بتخزين بيانات البطاقات المصرفية مباشرة.</li>
              <li><strong className="text-white/80">معلومات الاستخدام:</strong> بيانات حول كيفية استخدامك للمنصة لتحسين تجربتك.</li>
              <li><strong className="text-white/80">المعلومات التقنية:</strong> عنوان IP، نوع المتصفح، ونظام التشغيل لأغراض أمنية وتحليلية.</li>
            </ul>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">كيف نستخدم معلوماتك</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>تقديم وإدارة خدمات المنصة وتفعيل حسابك</li>
              <li>معالجة المدفوعات والفواتير</li>
              <li>التواصل معك بخصوص حسابك والتحديثات المهمة</li>
              <li>تحسين وتطوير خدماتنا بناءً على أنماط الاستخدام</li>
              <li>إرسال عروض ترويجية (يمكنك إلغاء الاشتراك في أي وقت)</li>
              <li>حماية حسابك ومنع الاحتيال</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">حماية البيانات</h2>
            <p>
              نتخذ إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الاستخدام أو الإفصاح. تشمل هذه الإجراءات التشفير وتقييد الوصول والمراقبة المستمرة.
            </p>
          </section>

          {/* Third Party Sharing */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">مشاركة المعلومات مع أطراف ثالثة</h2>
            <p className="mb-3">لا نبيع معلوماتك الشخصية لأي طرف ثالث. قد نشارك معلوماتك فقط في الحالات التالية:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong className="text-white/80">مقدمي خدمات الدفع:</strong> لمعالجة المعاملات المالية بشكل آمن</li>
              <li><strong className="text-white/80">خدمات البريد الإلكتروني:</strong> لإرسال الإشعارات والتنبيهات</li>
              <li><strong className="text-white/80">متطلبات قانونية:</strong> إذا كان ذلك مطلوبًا بموجب القانون</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">ملفات تعريف الارتباط (Cookies)</h2>
            <p>
              نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل استخدام الموقع. يمكنك تعديل إعدادات ملفات تعريف الارتباط في متصفحك، علمًا بأن تعطيلها قد يؤثر على بعض وظائف الموقع.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">حقوقك</h2>
            <p className="mb-3">لديك الحق في:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>الوصول إلى بياناتك الشخصية والاطلاع عليها</li>
              <li>طلب تصحيح أو تحديث معلوماتك</li>
              <li>طلب حذف حسابك وبياناتك</li>
              <li>الاعتراض على معالجة بياناتك لأغراض تسويقية</li>
              <li>تصدير بياناتك في أي وقت</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">الاحتفاظ بالبيانات</h2>
            <p>
              نحتفظ ببياناتك الشخصية طالما كان حسابك نشطًا أو حسب الحاجة لتقديم خدماتنا. بعد إلغاء حسابك، نحتفظ ببياناتك لمدة ٩٠ يومًا قبل الحذف النهائي، ما لم يكن هناك التزام قانوني يتطلب الاحتفاظ بها لفترة أطول.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">تحديث السياسة</h2>
            <p>
              قد نقوم بتحديث هذه السياسة من وقت لآخر. سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار داخل المنصة.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">تواصل معنا</h2>
            <p>
              إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر واتساب على الرقم{" "}
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
