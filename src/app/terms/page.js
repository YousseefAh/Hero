import Link from "next/link";

export const metadata = {
  title: "الشروط والأحكام — BePrime",
  description: "الشروط والأحكام لاستخدام منصة BePrime",
};

export default function TermsPage() {
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
            الشروط <span className="text-accent-500">والأحكام</span>
          </h1>
          <p className="text-white/30 text-sm">آخر تحديث: أبريل ٢٠٢٦</p>
        </div>

        <div className="prose-invert space-y-8 text-white/60 text-sm sm:text-base leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">مقدمة</h2>
            <p>
              مرحبًا بك في BePrime. تحكم هذه الشروط والأحكام استخدامك لمنصة BePrime وجميع الخدمات المقدمة من خلالها. باستخدامك للمنصة أو اشتراكك فيها، فإنك توافق على الالتزام بهذه الشروط.
            </p>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">وصف الخدمة</h2>
            <p className="mb-3">
              BePrime هي منصة متكاملة لإدارة أعمال التدريب الرياضي والتغذية، تقدم الخدمات التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>تطبيق مخصص بإسم المدرب وهويته البصرية</li>
              <li>موقع إلكتروني احترافي</li>
              <li>أدوات إدارة العملاء والبرامج التدريبية والتغذوية</li>
              <li>نظام أتمتة المتابعة والتواصل مع العملاء</li>
              <li>تحليلات وتقارير ذكية</li>
              <li>أدوات تسويق واكتساب عملاء</li>
            </ul>
          </section>

          {/* User Obligations */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">التزامات المستخدم</h2>
            <p className="mb-3">بتسجيلك واستخدامك لمنصة BePrime، فإنك تلتزم بما يلي:</p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>تقديم معلومات صحيحة ودقيقة عند التسجيل والاشتراك</li>
              <li>الحفاظ على سرية بيانات حسابك وعدم مشاركتها مع آخرين</li>
              <li>استخدام المنصة بما يتوافق مع القوانين والأنظمة المعمول بها</li>
              <li>عدم استخدام المنصة لأي غرض غير قانوني أو ضار</li>
              <li>عدم محاولة اختراق أو تعطيل أنظمة المنصة</li>
              <li>احترام حقوق الملكية الفكرية للمنصة والمحتوى المقدم</li>
            </ul>
          </section>

          {/* Account */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">الحساب والاشتراك</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>يجب أن يكون عمرك ١٨ عامًا على الأقل لإنشاء حساب</li>
              <li>أنت مسؤول عن جميع الأنشطة التي تتم من خلال حسابك</li>
              <li>يجب إخطارنا فورًا في حالة أي استخدام غير مصرح به لحسابك</li>
              <li>نحتفظ بحق تعليق أو إلغاء أي حساب ينتهك هذه الشروط</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">الملكية الفكرية</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>جميع حقوق الملكية الفكرية لمنصة BePrime محفوظة لنا</li>
              <li>المحتوى الذي تنشئه على المنصة يظل ملكًا لك</li>
              <li>تمنحنا ترخيصًا غير حصري لاستخدام محتواك بهدف تقديم الخدمة</li>
              <li>لا يحق لك نسخ أو تعديل أو توزيع أي جزء من كود المنصة أو تصميمها</li>
            </ul>
          </section>

          {/* Liability */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">حدود المسؤولية</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>نقدم المنصة &quot;كما هي&quot; ونسعى لضمان أعلى مستوى من الجودة والاستقرار</li>
              <li>لا نتحمل مسؤولية أي خسائر غير مباشرة ناتجة عن استخدام المنصة</li>
              <li>لا نتحمل مسؤولية أي انقطاع مؤقت في الخدمة بسبب الصيانة أو ظروف خارجة عن إرادتنا</li>
              <li>مسؤوليتنا الإجمالية لا تتجاوز إجمالي المبالغ المدفوعة في آخر ١٢ شهرًا</li>
            </ul>
          </section>

          {/* Data Ownership */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">ملكية البيانات</h2>
            <p>
              بياناتك ملك لك ١٠٠٪. يمكنك تصدير جميع بياناتك في أي وقت. نحن نعمل كأمين على بياناتك ونستخدمها فقط لتقديم الخدمة وتحسينها وفقًا لسياسة الخصوصية الخاصة بنا.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">تعديل الشروط</h2>
            <p>
              نحتفظ بحق تعديل هذه الشروط والأحكام في أي وقت. سنقوم بإخطارك بأي تغييرات جوهرية قبل ٣٠ يومًا من تطبيقها. استمرارك في استخدام المنصة بعد التعديل يعني موافقتك على الشروط الجديدة.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">القانون الحاكم</h2>
            <p>
              تخضع هذه الشروط والأحكام للقوانين المعمول بها في جمهورية مصر العربية. أي نزاع ينشأ عن هذه الشروط يخضع للاختصاص القضائي للمحاكم المصرية المختصة.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">تواصل معنا</h2>
            <p>
              لأي استفسارات حول الشروط والأحكام، تواصل معنا عبر واتساب على الرقم{" "}
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
