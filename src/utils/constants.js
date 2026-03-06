const links = [
  { name: "المميزات", href: "/features" },
  { name: "استكشف", href: "/#dashboard" },
  { name: "الأسعار", href: "/#pricing" },
  { name: "الدعم", href: "/#cta" }
];

const reviewImgs = [
  { id: 1, name: "م. أحمد", image: "/reviews/img-1.webp" },
  { id: 2, name: "هـ. سارة", image: "/reviews/img-2.webp" },
  { id: 3, name: "ك. محمد", image: "/reviews/img-3.webp" },
  { id: 4, name: "ن. ياسمين", image: "/reviews/img-4.webp" },
  { id: 5, name: "عمرو", image: "/reviews/img-5.webp" },
];

const appStatsImgs = [
  {
    id: 1,
    name: "م. أحمد",
    description: "كنت بخدم ١٥ عميل وحاسس إني هنهار. دلوقتي عندي ١٢٠ عميل وبشتغل ساعات أقل.",
    image: "/appStats/img-1.webp",
  },
  {
    id: 2,
    name: "هـ. سارة",
    description: "أول حاجة العملاء بيقولوها: التطبيق ده شكله رهيب! الاحترافية بتفرق.",
    image: "/appStats/img-2.webp",
  },
  {
    id: 3,
    name: "ك. محمد",
    description: "رفعت سعري ٤٠٪ ومحدش اعترض — لأن التجربة اللي بيحصلوا عليها تستاهل أكتر.",
    image: "/appStats/img-3.webp",
  },
];

const appStats = [
  { id: 1, value: "85%+", description: "استبقاء عملاء" },
  { id: 2, value: "70%", description: "توفير وقت" },
  { id: 3, value: "80%", description: "توفير تكاليف" },
];

const features = [
  {
    id: 1,
    name: "براندينج احترافي",
    description: "تطبيق بإسمك وموقع جاهز — عميلك يحس بالثقة من أول لحظة",
    icon: "/features/engagement.svg",
  },
  {
    id: 2,
    name: "أتمتة شاملة",
    description: "كل المهام الإدارية بتحصل أوتوماتيك — ٢٤ ساعة في اليوم",
    icon: "/features/autonomy.svg",
  },
  {
    id: 3,
    name: "أدوات مجانية",
    description: "أدوات اكتساب عملاء واستبقاء بدون أي تكلفة إضافية",
    icon: "/features/free.svg",
  },
  {
    id: 4,
    name: "نمو مضاعف",
    description: "ضاعف دخلك وعملائك بأقل مجهود ووقت",
    icon: "/features/earn.svg",
  },
];

const footerCols = [
  {
    id: 1,
    heading: "عن BePrime",
    links: ["كيف يعمل", "عن الشركة", "الدعم والمساعدة"],
  },
  {
    id: 2,
    heading: "للمدربين",
    links: ["طرق الدفع", "بدء الاستخدام"],
  },
  {
    id: 3,
    heading: "تعلم",
    links: ["المدونة", "الوظائف", "الشراكات"],
  },
  {
    id: 4,
    heading: "الدعم",
    links: ["حالة الخدمة", "سياسة الخصوصية", "الشروط والأحكام"],
  },
];

const footerSocials = [
  { id: 1, name: "فيسبوك", logo: "/socials/facebook.svg" },
  { id: 2, name: "إكس (تويتر سابقًا)", logo: "/socials/twitter.svg" },
  { id: 3, name: "إنستجرام", logo: "/socials/instagram.svg" },
];

const pricingCards = [
  {
    mostPopular: false,
    program: "بداية المشوار",
    price: {
      monthly: "1,000",
      annual: "10,000",
    },
    subheading: "للمدرب اللي لسه بيبدأ — لحد ١٠٠ عميل",
    bullets: [
      "تطبيق بإسمك",
      "موقع احترافي",
      "أدوات اكتساب عملاء مجانية",
      "أتمتة شاملة ٢٤/٧",
      "دعم بالعربي",
    ],
    cta: "ابدأ دلوقتي",
  },
  {
    primary: true,
    mostPopular: true,
    program: "المدرب الطموح",
    price: {
      monthly: "2,500",
      annual: "25,000",
    },
    subheading: "للمدرب اللي عايز يكبّر — ١٥٠ لحد ٤٠٠ عميل",
    bullets: [
      "كل مميزات بداية المشوار",
      "تحليلات وتقارير ذكية",
      "نظام استبقاء متقدم",
      "أدوات تسويق أوتوماتيكية",
      "تقسيم الجمهور (Segments)",
      "دعم أولوية",
    ],
    cta: "ابدأ دلوقتي",
  },
  {
    mostPopular: false,
    program: "أسماك القرش",
    price: {
      monthly: "5,000",
      annual: "50,000",
    },
    subheading: "للمدرب اللي بيدير إمبراطورية — ٥٠٠+ عميل",
    bullets: [
      "كل مميزات المدرب الطموح",
      "عملاء غير محدودين",
      "إدارة فريق كاملة",
      "API مخصص",
      "تقارير مخصصة",
      "مدير حساب مخصص",
    ],
    cta: "كلمنا",
  },
];

const testimonials = [
  {
    program: "بداية المشوار",
    description: "كنت بخدم ١٥ عميل وحاسس إني هنهار. دلوقتي عندي ١٢٠ عميل وبشتغل ساعات أقل.",
    image: "/testimonials/testimonial-7.webp",
    name: "م. أحمد",
    title: "مدرب لياقة، القاهرة",
  },
  {
    program: "المدرب الطموح",
    description: "أول حاجة العملاء بيقولوها: التطبيق ده شكله رهيب! الاحترافية بتفرق.",
    image: "/testimonials/testimonial-6.webp",
    name: "هـ. سارة",
    title: "مدربة تغذية، الإسكندرية",
  },
  {
    program: "أسماك القرش",
    description: "رفعت سعري ٤٠٪ ومحدش اعترض — لأن التجربة اللي بيحصلوا عليها تستاهل أكتر.",
    image: "/testimonials/testimonial-10.webp",
    name: "ك. محمد",
    title: "مدرب أونلاين، الرياض",
  },
  {
    program: "بداية المشوار",
    description: "كنت بدفع لـ ٥ أدوات مختلفة. دلوقتي كل حاجة في مكان واحد وبوفّر أكتر من ٣٠٠٠ جنيه شهريًا.",
    image: "/testimonials/testimonial-2.webp",
    name: "ن. ياسمين",
    title: "مدربة يوجا، دبي",
  },
  {
    program: "المدرب الطموح",
    description: "النظام خلاني أركز على التدريب بس. كل حاجة تانية بتحصل لوحدها — المتابعة، الفواتير، والتسويق.",
    image: "/testimonials/testimonial-3.webp",
    name: "عمرو حسن",
    title: "مدرب لياقة، جدة",
  },
  {
    program: "أسماك القرش",
    description: "من أول أسبوع حسيت بالفرق. العملاء مبسوطين أكتر وأنا مرتاح أكتر.",
    image: "/testimonials/testimonial-1.webp",
    name: "مريم خالد",
    title: "مدربة تأهيل إصابات",
  },
  {
    program: "بداية المشوار",
    description: "لو كنت عارف إن ده موجود من سنة كانت حياتي اتغيرت بدري. أحسن استثمار عملته.",
    image: "/testimonials/testimonial-5.webp",
    name: "أحمد فوزي",
    title: "مدرب شخصي",
  },
  {
    program: "المدرب الطموح",
    description: "العملاء بيتعاملوا معايا كأني شركة كبيرة — والسبب إن التطبيق بإسمي والموقع شكله رهيب.",
    image: "/testimonials/testimonial-8.webp",
    name: "لينا محمود",
    title: "مدربة تغذية رياضية",
  },
];

export {
  links,
  reviewImgs,
  appStatsImgs,
  appStats,
  features,
  footerCols,
  footerSocials,
  pricingCards,
  testimonials,
};
