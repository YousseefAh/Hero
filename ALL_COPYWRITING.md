# Yadora / Pro-G - Complete Copywriting (Arabic + English)

> All website & app copywriting consolidated in one file.
> Source files: `src/data/content.js`, `src/utils/constants.js`, `src/components/UI/MoreInformation.jsx`, `src/components/layout/Footer.jsx`, `@the best one yet.md`, `objective-of-proj.md`

---

## Table of Contents

1. [SEO & Metadata](#seo--metadata)
2. [Hero Section](#hero-section)
3. [Features Section](#features-section)
4. [Features Page (Full Cards)](#features-page)
5. [Apple Carousel](#apple-carousel)
6. [Why Choose Yadora](#why-choose-yadora)
7. [Arabic Features (Marketing Narrative)](#arabic-features)
8. [Continuous Showcase](#continuous-showcase)
9. [App Statistics & Testimonials](#app-statistics--testimonials)
10. [Dashboard](#dashboard)
11. [CTA Section](#cta-section)
12. [Contact / More Information Modal](#contact--more-information-modal)
13. [Navigation](#navigation)
14. [Footer](#footer)
15. [Pricing Cards](#pricing-cards)
16. [English Testimonials](#english-testimonials)
17. [Explore Page](#explore-page)
18. [Blog Pages](#blog-pages)
19. [Error Page](#error-page)
20. [Hardcoded UI Labels](#hardcoded-ui-labels)
21. [Sales Playbook & Avatars](#sales-playbook--avatars)
22. [Full Sales Guide (objective-of-proj.md)](#full-sales-guide)

---

---

## SEO & Metadata

> Source: `src/app/layout.js`, `src/app/blog/page.js`

### Global Site Metadata (layout.js)

| Field | Text |
|-------|------|
| **Title** | Yadora |
| **Description** | Learn from your favorite creators about fantasy reports |
| **Favicon** | /favicon.svg |
| **Language** | en |

### Blog Page Metadata (blog/page.js)

| Field | Text |
|-------|------|
| **Title** | Blog - Pro-G Training |
| **Description** | Professional training guides and resources for fitness coaches. |

### Blog Posts Registry (blogPosts.js)

| ID | Title | Description | File | Date |
|----|-------|-------------|------|------|
| pro-g-trainer-bible | PRO-G TRAINER ACQUISITION BIBLE | A comprehensive guide for professional trainers on client acquisition and business growth. | @the best one yet.md | 2024-03-20 |
| pro-g-features | THE ULTIMATE PRO-G SALES GUIDE | Transform Your Coaching Business Into a Scalable Digital Empire | objective-of-proj.md | 2024-03-21 |

---

## Hero Section

### Arabic (Active)

| Field | Text |
|-------|------|
| **Title** | تخيّل إنك تقدر تدير ألف عميل في ثوانى، بدل ما تضيع أيام! |
| **Highlighted Text** | وقتك أغلى من إنه يضيع. |
| **Title 2** | استثمره صح_ |

---

## Features Section

### Arabic (Active)

**Title:** مستني إيه؟ كل حاجة أنت محتاجها... وزيادة!

**Description:** نظام شامل يخلّيك تركز على شغلك وإحنا نكمل الباقي — من أول التواصل مع العملاء، لتنظيم كل التفاصيل، كل ده في مكان واحد.

**Button Text:** بنهاية اليوم، هيكون عندك حل متكامل يوفّر وقتك ويضاعف إنتاجك

**Button Hover Text:** ابعت لنا رسالة على واتساب

#### Feature List (Arabic)

| # | Name | Description | Icon |
|---|------|-------------|------|
| 1 | التوسع الذكي | وسّع شغلك بسهولة بفضل أدوات إدارة العملاء، العروض، والتحليلات المتقدمة. | /features/free.svg |
| 2 | تحكم شامل | كل تفاصيل شغلك في إيدك: العملاء، الفواتير، الإشعارات، والخطط — من مكان واحد. | /features/autonomy.svg |
| 3 | تحليلات وبيانات | اعرف كل حاجة بتحصل: مين بيتابع، مين بيجدد، ومين محتاج دعم. | /features/earn.svg |
| 4 | تجربة عميل مثالية | عميلك يقدر يلاقي كل حاجة بسهولة — خطة التمرين، التغذية، الدردشة، والمتابعة. | /features/free.svg |

### English (constants.js)

| # | Name | Description | Icon |
|---|------|-------------|------|
| 1 | Engagement | Engage on a deeper level with the fans that matter most | /features/engagement.svg |
| 2 | Autonomy | Full autonomy on when and who you chose to talk | /features/autonomy.svg |
| 3 | Free | No monthly fees or annual subscription fees | /features/free.svg |
| 4 | Earn | Add a new source of income that you can control | /features/earn.svg |

---

## Features Page

### Arabic (22 Feature Cards)

| # | Title | Description | Image |
|---|-------|-------------|-------|
| 1 | كل حاجة في مكان واحد | من لوحة واحدة تتابع كل حاجة: العملاء، الخطط، الفواتير، التغذية، والتمارين — كل ده من غير ما تفتح 10 برامج مختلفة. | /img-app/422shots_so-min.png |
| 2 | نظام ذكي يعرف عميلك محتاج إيه | من غير ما يسألك، النظام بيحلل سلوك العميل، ويقدّم له المحتوى والخدمة المناسبة تلقائيًا، علشان يحس إنه دايمًا في رعايتك. | /img-app/758_1x_shots_soo-min.png |
| 3 | تجربة عميل احترافية | خلي عميلك يحس إنه بيستخدم تطبيق عالمي: خطة تمرين، متابعة، شات، تنبيهات — كل حاجة بتوصله في الوقت المناسب. | /img-app/993_1x_shots_so-min.png |
| 4 | رسائل تلقائية حسب سلوك العميل | عميلك بقاله كام يوم مش فتح؟ هنوصل له رسالة مخصصة. قرب يجدد؟ هيفضل في الصورة. كل ده بيحصل من غير ما تكتب ولا كلمة. | /img-app/457_1x_shots_so-min.png |
| 5 | تقارير لحظية وتوصيات ذكية | اعرف كل شيء بيحصل: مين بيتمرن، مين متفاعل، ومين محتاج دفعة. وابدأ تتصرف بناءً على توصيات جاهزة من الذكاء الاصطناعي. | /img-app/344_1x_shots_so-min.png |
| 6 | تخصيص كامل بدون تعقيد | غير شكل التطبيق، أضف لوجو، اختار نوع البرامج، ضيف روابطك — كله بيحصل في دقائق، من غير ما تحتاج خبرة تقنية. | /img-app/506_1x_shots_so-min.png |
| 7 | جاهز في يوم واحد | كلّمنا النهاردة، ونسختك الجاهزة من النظام هتكون شغّالة بكامل طاقتها قبل نهاية اليوم. | /img-app/616_1x_shots_so-min.png |
| 8 | خلّي شغلك يشتغل لوحده | سواء عميل جديد أو قديم، النظام بيتصرف بسرعة ويقدمله اللي محتاجه من غير ما تحرك صباعك. تجربة onboarding أوتوماتيك بالكامل. | /img-app/724_1x_shots_soo-min.png |
| 9 | ضاعف الدخل بذكاء | حوّل كل lead لعميل مدى الحياة عن طريق Funnels ذكية ورسائل متابعة مصممة للغلق والبيع. | /img-app/137_1x_shots_so-min.png |
| 10 | بيانات بتخليك تسبق بخطوتين | توقع العميل اللي على وشك يسيبك وتعامل معاه قبل ما يبعد. ذكاء اصطناعي بيرسم لك خريطة واضحة لكل خطوة جاية. | /img-app/976_1x_shots_soo-min.png |
| 11 | عملائك بيحبوا التفاعل؟ | خليهم يتفاعلوا معك يوميًا من خلال تحديات، إشعارات، وتحديثات مستمرة بتوصل في الوقت الصح. | /img-app/181_1x_shots_so-min.png |
| 12 | دعم عملاء سريع ومُخصص ليك | لو حصلت أي مشكلة أو محتاج مساعدة، هتلاقي فريق دعم بيرد عليك فورًا، وفاهم احتياجاتك كمدرب، مش مجرد رد تلقائي. | /img-app/207_1x_shots_so-min.png |
| 13 | تجربة تسويق بدون تعب | حملات تلقائية، روابط خاصة بيك، وأدوات تساعدك تجيب عملاء جدد من غير ما تبقى خبير تسويق. النظام بيسوّق معاك. | /img-app/324_1x_shots_soo-min.png |
| 14 | كل عميل في مسار واضح | مش بس تسجيل بيانات، لأ، كل عميل ليه خطة واضحة، وتقدم بيتم قياسه، وملف بيتحدّث تلقائيًا حسب نشاطه. | /img-app/336shots_so-min.png |
| 15 | مناسب لمدرب واحد أو فريق كامل | سواء شغال لوحدك أو معاك مساعدين، السيستم بيخدمك. ممكن تضيف مساعدين، تفوّض مهام، وتراقب كل التفاصيل بسهولة. | /img-app/344_1x_shots_so (1)-min.png |
| 16 | تحويل العملاء بسرعة | حملات onboarding تلقائية بتحول الزوار لعملاء خلال دقائق، مش أيام. خليك دايمًا جاهز للClose. | /img-app/364_1x_shots_so-min.png |
| 17 | متابعة التزام العملاء | السيستم بيرصد مواعيد التمارين والتغذية، ويرسلك تنبيهات لو في تأخير. الالتزام بيرفع النتائج. | /img-app/422shots_so-min.png |
| 18 | تجربة مرئية جذابة | لوحة تحكم مليانة رسومات وتقارير تفاعلية بتخلي متابعة البيزنس تجربة بصرية مش مجرد بيانات. | /img-app/42shots_so-min.png |
| 19 | إدارة العروض والكوبونات | صمّم عروض موسمية وكوبونات خاصة لعملائك بدون تعقيد — ادفع الآن، وفرصتك لزيادة الconversion. | /img-app/435_1x_shots_so-min.png |
| 20 | تقارير الأداء الشهري | تقرير شامل عن تطور عملائك – نمو، نشاط، والتزام – ممكن تطبعها أو ترسلها أوتوماتيك. | /img-app/437_1x_shots_so-min.png |
| 21 | مراقبة الإصابات والتعافي | لو عميل عنده إصابة، السيستم بيبعت خطة تعديل تلقائية بناء على مدخلاتك لتسريع التعافي. | /img-app/442_1x_shots_so-min.png |
| 22 | نظام جوائز وتحفيز | أضف نظام نقاط أو badges للعملاء عند تحقيق أهداف معينة — بيحافظ على التفاعل طويل المدى. | /img-app/453_1x_shots_so-min.png |
| 23 | توسيع بلا حدود | جاهز تخطي ١٠٠٠٠٠ عميل؟ النظام مصمم يقابل حجمك بدون ما تحتاج سيرفرات إضافية. | /img-app/491_1x_shots_so-min.png |

---

## Apple Carousel

### Arabic

**Section Title:** اشتغل كأنك فريق ×10

| # | Category | Title | Description |
|---|----------|-------|-------------|
| 1 | إنشاء المحتوى | انشئ، عدل، وانشر بدون فريق | منصة متكاملة لإنتاج المحتوى وإدارته تلقائيًا |
| 2 | أتمتة الرسائل | ابعت للعملاء تلقائيًا في الوقت الصح | منصة متكاملة لإنتاج المحتوى وإدارته تلقائيًا |
| 3 | تسويق ذكي | خطط حملات تسويقية بأقل جهد — وكن الفريق اللي بيصيغها كلها | استخدم الذكاء الاصطناعي لتوليد أفكار ومحتوى لحملاتك التسويقية. |
| 4 | تحليلات لحظية | عرف مين تفاعل، مين محتاج متابعة، ومين قرب ينصرف | عرف مين تفاعل، مين محتاج متابعة، ومين قرب ينصرف |
| 5 | تخطيط بدون تعب | رتّب ونظم شغلك تلقائيًا من غير صداع | رتّب ونظم شغلك تلقائيًا من غير صداع |

---

## Why Choose Yadora

### Arabic

**Title:** دلوقتي، شغل 10 أشخاص يقدر يعمله شخص واحد — واسرع منهم كلهم

**Description:** مش مجرد منصة... دي شريكك الذكي اللي بيخلي شغلك ينمو ويكبر من غير ما تضيع وقت أو مجهود.

| # | Heading | Text |
|---|---------|------|
| 1 | تواصل ذكي بدون تأخير | مش لازم ترد على كل واحد بنفسك، النظام هيعرف العميل محتاج إيه ويبعت له المحتوى المناسب تلقائيًا — كأنك موجود معاه طول الوقت. |
| 2 | قسّم جمهورك زي المحترفين | اعرف مين اشترك، مين هيجدد، مين لسه جديد، وقسم جمهورك بسهولة علشان تبعت رسائل مخصصة تضرب في الصميم – كل ده بضغطة واحدة. |
| 3 | تقارير بدون تعب أو مجهود | كل حاجة اتعملت متسجلة، والنظام بيطلعلك تقارير جاهزة عن تمارين العملاء، تفاعلهم، ومين محتاج نصيحة شخصية – بدل ما تضيع ساعات في المتابعة. |
| 4 | ابدأ، وسّع، وكبّر أرباحك | من أول لحظة، كل الأدوات جاهزة: محتوى، تفاعل، تقارير، تسويق – منصة واحدة فيها كل اللي محتاجه علشان تنجح وتكسب وقتك وفلوسك. |

---

## Arabic Features

### Marketing Narrative (v4 - Active)

**Section Title:** 🎯 شغل أذكى، تحكم كامل، ونتائج أسرع

| # | Title | Text |
|---|-------|------|
| 1 | 🎯 شغل أذكى، تحكم كامل، ونتائج أسرع | انس التعب والروتين. دلوقتي تقدر تدير شغلك وتخدم آلاف العملاء في ثواني بدل أيام. كل حاجة كانت بتاخد وقتك: تجهيزات، متابعات، ردود، تجديدات، جدولة... دلوقتي بتحصل أوتوماتيك. من أول رسالة لآخر اشتراك، وقت أقل، نتائج أسرع، ومن غير أي مجهود إضافي منك. مستعد تبني منظومة تخلي كل ثانية تشتغل لصالحك؟ ابدأ دلوقتي وخلّي كل لحظة تحققلك نتائج حقيقية. |
| 2 | 💪 النظام بيشتغل مكانك 24/7 | المدرب اللي كان محتاج 10 مساعدين... دلوقتي بيقدر يعمل نفس الحاجات بشخص واحد — وبيكسب أكتر! العميل يحجز، يدفع، يستلم خطته، ويتابعك من غير اي مجهود. أنت بتركّز على شغلك... والنظام بيهتم بالباقي. |
| 3 | 🧲 عرضك يبيع نفسه بنفسه | مش لازم تقنع ولا تشرح. أول ما العميل يدخل يحس إنه لقى الحل. يشوف العرض قدامه واضح، مرتب، ومغري. يوصل لقرار الاشتراك بسهولة ومن غير تردد. كل خطوة مدروسة علشان توصله للنهاية. |
| 4 | 🤝 علاقات مش بس اشتراكات | بعد الاشتراك، إحنا وراك: تذكيرات، رسائل تلقائية، وعروض مخصصة. العميل يحس إنه مميز، وإنك دايمًا فاكره. النتيجة؟ ولاء مستمر وتجديد دائم. |
| 5 | 🚀 توسّع بدون حدود أو ضغط | عايز تكبر؟ استقبل آلاف العملاء الجدد من غير ما تضغط على وقتك أو تزود التزاماتك. كل عميل جديد بياخد نفس التجربة ونفس الجودة... وكل ده من غير ما تضيف مساعد واحد. |
| 6 | 💸 تكلفة أقل، دخل أكتر | وفّر فلوسك ووقتك. شغل أوتوماتيك يعني: مفيش فريق كبير، مفيش تعقيد. بس فيه دخل ثابت، أقل تكلفة، وراحة نفسية. وفر لحد 80% من مصاريفك الحالية. |
| 7 | 📊 كل ثانية بتزود قيمتك | كل رسالة، كل إجراء، وكل خطوة أوتوماتيك بتضيف لنموك. بدل ما تخدم 100 عميل يدوي، ممكن تخدم 10,000 بنفس المجهود. دي قوة الأتمتة. |
| 8 | 🧠 الذكاء الاصطناعي والبيانات هي سلاحك الجديد | اعرف كل عميل محتاج إيه، إمتى، وازاي. تابع الأداء، استغل البيانات، وتصرّف بسرعة. كل قرار مبني على معلومة. الذكاء هنا مش رفاهية، ده سلاحك الجديد. |
| 9 | 🔁 عميلك مش بيشترك وبس... بيبقى وفيّ ليك مدى الحياة | التحدي مش إنك تجيب عميل... التحدي إنك تخليه مايقدرش يستغنى عنك. إحنا بنخلق تجربة تخلي العميل يحس بقيمتك من أول لحظة. مش هيستنى 30 يوم عشان يقتنع... هيقرر في 10 ثواني. ليه تسيب عميل يضيع، لما ممكن يبقى مصدر دخل دائم ليك؟ إنت مش بتقدم اشتراك 3 شهور، إنت بتبني علاقة، وتأسّس ولاء يدوم لسنين. |
| 10 | ✅ مستعد تبني منظومة تخلي كل ثانية تشتغل لصالحك؟ | ابدأ دلوقتي... وخلّي كل لحظة بتعدّي تحققلك نتائج حقيقية. |

---

## Continuous Showcase

### Arabic

**Title:** المعرفة والرؤى

**Description:** استكشف ميزاتنا الشاملة وأدواتنا المصممة لتعزيز تجربتك

| # | Title | Description | Image |
|---|-------|-------------|-------|
| 1 | رؤية 1 | تحليلات وتقارير مفصلة | /img-app/993_1x_shots_so-min.png |
| 2 | رؤية 2 | اكتشف قوة الأتمتة | /img-app/976_1x_shots_soo-min.png |
| 3 | رؤية 3 | إدارة عملائك بسهولة | /img-app/758_1x_shots_soo-min.png |
| 4 | رؤية 4 | ضمان أمن البيانات وسلامتها | /img-app/704_1x_shots_so-min.png |
| 5 | رؤية 5 | الوصول إلى أدوات التقارير الشاملة | /img-app/627_1x_shots_so (1)-min.png |
| 6 | رؤية 6 | واجهات مستخدم سلسة | /img-app/457_1x_shots_so-min.png |
| 7 | رؤية 7 | تحسين الأداء بتتبع فوري | /img-app/364_1x_shots_so-min.png |
| 8 | رؤية 8 | التواصل المتكامل مع العملاء | /img-app/181_1x_shots_so-min.png |
| 9 | رؤية 9 | أفضلية الهاتف أولًا | /img-app/97_1x_shots_so-min.png |
| 10 | رؤية 10 | أطلق العنان لقدراتك بميزات قوية | /img-app/42shots_so-min.png |

---

## App Statistics & Testimonials

### Arabic Stats

| Value | Description (AR) | Description (EN) |
|-------|------------------|-------------------|
| 300 | مبدع | creators |
| 12.1k | مستخدم | users |
| 9.11k | جلسة | sessions |

**Section Title (AR):** احصل على معرفة ورؤى مباشرة.
**Marketplace Text (AR):** استكشف السوق

### Arabic Testimonials (App Statistics)

| Name | Arabic Text |
|------|-------------|
| @mario.lopez | انضممت إلى يدورا عام 2021 ولم أندم أبدًا. قدرة يدورا على ربطني بأشخاص حول العالم يشاركونني نفس الشغف مذهلة! |
| @xuifang | وفّرت لي يدورا منصة لعرض مهاراتي وبناء مجتمعي وتعليم الآلاف فن الخط الجميل. |
| @shannon_sutton | بعد عملي كمدربة صوت بشكل متقطع لمدة 10 سنوات، وجدت يدورا التي وفرت لي عملاً منتظمًا لأشهر متتالية! |

### English Testimonials (App Statistics)

| Name | English Text |
|------|-------------|
| @mario.lopez | I joined Yadora back in 2021 and never looked back. Yadoras ability to connect me with people around the world that share the same passions with me is top tier! |
| @xuifang | Yadora has provided me a platform to showcase my skills, build my community and teach 1000s about the beautiful art of caligraphy |
| @shannon_sutton | After working on and off as a vocal coach for nearly 10 years, i found Yadora. The platform has allowed me to find consistent work for months now! |

---

## Dashboard

| Field | Value |
|-------|-------|
| **Image** | /2.png |
| **Alt (AR)** | لوحة التحكم |
| **Video ID** | ETvBDPjVcOI |

---

## CTA Section

### Arabic

| Field | Text |
|-------|------|
| **Title** | تفاعل بلا حدود |
| **Subtitle** | انضم إلى مجتمع متنامٍ وتواصل مباشرة مع منشئي المحتوى المفضلين لديك |
| **Contact Button** | On email |
| **WhatsApp Button** | كلمنا علي واتساب |
| **WhatsApp Link** | https://wa.me/201120920078 |

---

## Contact / More Information Modal

### English (MoreInformation.jsx)

| Field | Text |
|-------|------|
| **Heading Line 1** | Supercharge |
| **Heading Line 2** | your business |
| **Subtext** | Interested in learning more about how we can grow your small business? |
| **Name Placeholder** | Jane Doe |
| **Email Placeholder** | janedoe@gmail.com |
| **Message Placeholder** | Your message (optional) |
| **Submit Button** | Send a Message |
| **Loading State** | Sending... |
| **WhatsApp Button** | Contact us on WhatsApp |
| **Success Alert** | Thank you! We will get back to you soon. |
| **Error Alert** | Sorry, there was an error. Please try again later. |
| **Validation Error** | Please fill in all fields |

---

## Navigation

### English (constants.js)

| Link Name | Href |
|-----------|------|
| Features | /features |
| Explore | /#dashboard |
| Blog | /blog |
| Support | /#cta |

---

## Footer

### English (constants.js)

**Logo:** /logo.svg (Yadora)

#### Columns

| Column | Links |
|--------|-------|
| About | How it works, Company, Help & support |
| For creators | Getting paid, Onboarding |
| Learn | Blog, Careers, Affiliates |
| Support | Service status, Cookies policy, Privacy policy |

#### Social Links

| Platform | Logo |
|----------|------|
| Meta (formerly facebook) | /socials/facebook.svg |
| X (formerly twitter) | /socials/twitter.svg |
| Instagram | /socials/instagram.svg |

---

## Pricing Cards

### English (constants.js)

| Plan | Monthly | Annual | Subheading | CTA |
|------|---------|--------|------------|-----|
| **Personal** | Free | Free | Explore our product for free | Start free |
| **Professional** (Most Popular) | $20 | $228 | For the ambitious solo professional | Start creating |
| **Team** | $699 | $7,968 | Licenses for up to 16 members | Sign up your team |

#### Personal Plan Bullets
- 20 free fantasy reports
- Limited access to AI-writer
- max 15 hours per month
- 14 outreach tokens

#### Professional Plan Bullets
- 50 free fantasy reports
- Unlimited access to AI-writer
- max 35 hours per month
- 72 outreach tokens

#### Team Plan Bullets
- 1200 free fantasy reports
- Access to AI-writer M2
- Unlimited hours per month
- 435 outreach tokens

---

## English Testimonials

### Full Testimonials (constants.js)

| Name | Title | Program | Quote |
|------|-------|---------|-------|
| Maria Sanchez | CEO & Founder at Creation LAB's | Professional | Yadora has been pivotal in helping me connect with others that share my same passions! |
| Nick Ridley | Product lead at EducationWave | Team | Sharing my skills with clients around the world has never been easier. Very affordable solution for our team. |
| Asia Moore | Head of HR at inspireUSA | Personal | I love how easy and intuitive the platform is. Took me less than a day to get up and started! |
| Tina Rodriguez | Tech lead at GE accelerator | Personal | Having access to 50 free fantasy reports per month allows my small business to generate leads each month |
| Jai Ahuja | GForce Labs trader & Founder | Team | The free version of Yadora is generous with its offering and has helped fuel our business to new heights! |
| Amy Young | Creative director at FertilityHealth | Team | Yadora's Customer service has been very gracious in helping me navigate the platform. Loving it so far! |
| Tanner Hall | Musician and Solo-prenuer | Personal | Getting my music business off the ground has been a breeze with the help of Yadora's outreach accelerator. |
| Diego Perez | Analyst at SimplyMade | Team | I wish i have known about this platform a year ago. The AI writer empowers our team to edit and revise their work easily. |

### Review Images (constants.js)

| Name | Image |
|------|-------|
| Gabriel Romero | /reviews/img-1.webp |
| Sarena Burton | /reviews/img-2.webp |
| LaDorian Ray | /reviews/img-3.webp |
| Madison Lott | /reviews/img-4.webp |
| Shannon Sutton | /reviews/img-5.webp |

---

## Explore Page

> Source: `src/components/pages/ExplorePage.jsx` (all hardcoded)

### English

**Page Heading:** Explore Our Features

**Page Subtitle:** Discover what makes our platform unique

#### Showcase Items

| # | Title | Description | Image |
|---|-------|-------------|-------|
| 1 | Interactive Dashboard | Powerful analytics at your fingertips | /dashboard.webp |
| 2 | Real-time Statistics | Monitor your performance live | /appStats/img-1.webp |
| 3 | Advanced Analytics | Deep insights into your data | /appStats/img-2.webp |
| 4 | Custom Reports | Tailored to your needs | /appStats/img-3.webp |
| 5 | User Reviews | See what others are saying | /reviews/img-1.webp |
| 6 | Community Feedback | Learn from your users | /reviews/img-2.webp |

---

## Blog Pages

> Source: `src/app/blog/page.js`, `src/components/blog/*.jsx`

### Blog Listing Page (blog/page.js)

| Element | Text |
|---------|------|
| **Page Heading** | Training Guides & Resources |
| **Home Link Title** | Home |

### Blog Post View (BlogHeader.jsx)

| Element | Text |
|---------|------|
| **Home Link Title** | Home |
| **Back Link Title** | Back to Blog |
| **Reading Time Label** | {readingTime} min read |
| **Lines Count Label** | {totalLines} lines |

### Blog Navigation (BlogClient.jsx)

| Element | Text |
|---------|------|
| **Section Progress** | Section {n} of {total} |
| **Completion** | {n}% Complete |
| **Previous Button** | Previous Section |
| **Next Button** | Next Section |

### Table of Contents (TableOfContents.jsx)

| Element | Text |
|---------|------|
| **Heading** | Table of Contents |
| **Active Indicator** | Currently reading |

---

## Error Page

> Source: `src/app/error.js`

| Element | Text |
|---------|------|
| **Heading** | Something went wrong! |
| **Button** | Try again |

---

## Hardcoded UI Labels

> Text hardcoded directly in components (not from data files)

### Navigation (Navigation.jsx)

| Element | Text | Location |
|---------|------|----------|
| **Logo Alt** | Yadora logo | Desktop + Mobile |
| **CTA Button** | Contact Us | Desktop + Mobile |

### Hamburger Menu (Hamurger.jsx)

| Element | Text |
|---------|------|
| **Aria Label** | Toggle menu |
| **Image Alt** | Hamburger menu icon |

### Pricing Section (Pricing.jsx)

| Element | Text |
|---------|------|
| **Section Heading** | Start creating today. |
| **Monthly Toggle** | Monthly |
| **Annual Toggle** | Annual |
| **Toggle Aria Label** | Toggle between monthly and annual plans |

### Pricing Card (PricingCard.jsx)

| Element | Text |
|---------|------|
| **Badge** | most popular |
| **Monthly Suffix** | per month |
| **Annual Suffix** | per year |

### Testimonials Section (Testimonials.jsx)

**Heading:** Listen to what our **satisfied** clients have to say

### Footer (Footer.jsx)

| Element | Text |
|---------|------|
| **Logo Alt** | Yadora logo |

### Apple Carousel Default (apple-cards-carousel.jsx)

| Element | Text |
|---------|------|
| **Default Image Alt** | Background of a beautiful view |

---

## Sales Playbook & Avatars

> Source: `@the best one yet.md`

### The Five Coach Avatars

| # | Avatar | Name | Age | Income | Stage |
|---|--------|------|-----|--------|-------|
| 1 | The Unaware Coach | Mike Thompson | 28 | $52,000 | Unaware - doesn't realize business model has scalability problems |
| 2 | The Problem Aware Coach | Lisa Chen | 34 | $78,000 | Problem Aware - knows they need better systems |
| 3 | The Solution Aware Coach | David Rodriguez | 39 | $125,000 | Solution Aware - actively researching coaching software |
| 4 | The Product Aware Coach | Sarah Kim | 31 | $185,000 | Product Aware - comparing Pro-G against competitors |
| 5 | The Most Aware Coach | Marcus Johnson | 42 | $275,000 | Most Aware - already using Pro-G, deciding to go all-in |

### Pain Points Pro-G Solves
1. **Time Drain**: Coaches spending 60%+ of time on admin instead of coaching
2. **Unprofessional Delivery**: Email attachments and PDFs make coaches look amateur
3. **No Scalability**: Cannot serve more clients without proportionally more work
4. **Poor Client Experience**: Scattered tools create friction and confusion
5. **Limited Data**: No insights into client engagement or program effectiveness
6. **Pricing Pressure**: Can't charge premium prices without premium experience
7. **Retention Issues**: Clients drop off because of poor user experience
8. **Manual Everything**: Creating the same programs over and over manually

### Core Value Propositions
1. Professional Client Experience: Branded app that makes coaches look like industry leaders
2. Time Multiplication: Build once, deploy to unlimited clients
3. Automatic Engagement: System tracks and prompts client activity
4. Data-Driven Coaching: Real insights into what's working and what isn't
5. Scalable Systems: Serve 100 clients as easily as 10
6. Premium Positioning: Justify higher prices with better delivery
7. Business Intelligence: Dashboard view of entire coaching operation
8. White-Label Capability: Platform becomes an extension of coach's brand

### Pricing Strategy

| Tier | Price | Clients | Target |
|------|-------|---------|--------|
| Starter | $149/month | Up to 25 | Problem Aware coaches |
| Professional | $299/month | Up to 75 | Solution Aware coaches |
| Enterprise | $599/month | Unlimited | Product/Most Aware coaches |

### Objection Handling

| Objection | Response |
|-----------|----------|
| "It's too expensive" | What's it costing you to manually create workouts, chase client check-ins, and deliver programs through email? Most coaches save 15+ hours/week and can serve 3x more clients. The platform pays for itself with just 2-3 additional clients. |
| "My clients are happy with what I provide now" | How many potential clients are you losing because competitors offer a more professional experience? How much time could you save while keeping your current clients even happier? |
| "I don't want to learn new software" | You became a coach to coach, not to become a tech expert. That's exactly why we built this to be intuitive. Most coaches are fully operational within a week. |
| "What if I want to leave the platform?" | You own all your data and can export everything at any time. Most coaches find they outgrow basic solutions within 6-12 months anyway. |

### Diary Entries (Problem-Aware Coach Journey)

**Entry 1 - Before Finding Pro-G (Nov 15, 2024):** Coach overwhelmed with 3 spreadsheets, 17 apps, spending 4 hours creating workout plans, losing clients to competitors with better systems.

**Entry 2 - First Week with Pro-G (Nov 28, 2024):** Onboarded 3 new clients in the time it used to take to create one workout plan. Client texted "This new app is amazing!" Collection Builder and branded app experience.

**Entry 3 - Three Months Later (Feb 20, 2025):** Hit 50 active clients while working fewer hours than when serving 15. Raised prices 40%, 89% client retention. Turned down 3 potential clients because calendar is full.

---

## Full Sales Guide

> Source: `objective-of-proj.md`

### Business Case ROI

**Before Pro-G:**
- Max 20 clients, $150/month each = $3,000/month
- 40+ hours/week admin, 30-40% retention

**After Pro-G:**
- 200+ clients, $300/month each = $60,000+/month
- 10 hours/week admin, 85%+ retention

### Year 1 Revenue Projection
- Month 1-3: Foundation building
- Month 4-6: 50 clients @ $250/month = $12,500/month
- Month 7-9: 100 clients @ $275/month = $27,500/month
- Month 10-12: 150 clients @ $300/month = $45,000/month

### 12 Core Platform Features
1. Advanced User Profiling System (50+ data points)
2. Intelligent Quiz & Assessment Engine
3. Contact History & CRM Integration
4. Collection Builder (drag-and-drop program creation)
5. Advanced Exercise Library & Video System
6. Nutrition Planning & Macro Management
7. Assigned Collections (Copy + Reference system)
8. Hydra-Sync Data Integrity System
9. Multi-Tenant Architecture (White-Label Ready)
10. Mobile-First Design & Progressive Web App
11. Real-Time Progress Tracking & Analytics
12. Gamification & Motivation System
13. Advanced Admin Dashboard & Analytics

---

## Commented-Out / Archived Arabic Versions

> These versions were commented out in `content.js` but preserved here for reference.

### Arabic Features v1 (Commented Out)

| Title | Text |
|-------|------|
| تغيير قواعد اللعبة: السرعة والتحكم بلا حدود | انسَ البطء والتعقيد! دلوقتي تقدر تدير آلاف العملاء في لحظات، مش أيام... |
| شراكة مدى الحياة: علاقة ما بتخلصش | إحنا مش مجرد منصة أو خدمة مؤقتة، إحنا شريكك الحقيقي في حياة كل عميل... |
| تميّز لا يُضاهى: عرض لا يمكن تجاهله | لكل عميل بيفكّر فيك... هنقدمله عرض وقيمة مستحيل يلاقيها في أي مكان تاني... |
| معادلة النجاح: توفير ضخم + أرباح مضاعفة | مش بس بنقدّم خدمة أسرع وأذكى، إحنا كمان أوفر بكتير. تقدر توفّر حتى 80% من تكاليفك... |
| التأثير المتراكم: كل ثانية بتكبر | النجاح مش لحظي... هو نتيجة قرارات صغيرة بتتراكم بذكاء... |
| المستقبل الذكي: بياناتك هي كنزك | اللي بيملك البيانات... هو اللي بيملك السوق... |
| ولاء مدى الحياة: عميلك مش هيسيبك | التحدي مش إنك تجيب عميل... التحدي إنك تخليه مايقدرش يستغنى عنك... |

**Closing:** مستعد تبني منظومة تخلي كل ثانية تشتغل لصالحك؟ ابدأ دلوقتي... وخلّي كل لحظة بتعدّي تحققلك نتائج حقيقية.

### Arabic Testimonials (Commented Out)

| Name | Role | Text |
|------|------|------|
| @محمود_علي | مدوّن تقني | ساعدتني المنصة في توسيع جمهوري وزيادة دخلي من خلال الدورات المباشرة وبناء مجتمع متفاعل. |
| @ليلى_السعدي | مصممة جرافيك | بفضل أدوات التحليلات والتسويق المدمجة، تمكّنت من مضاعفة مبيعاتي خلال ثلاثة أشهر فقط! |
| @سالم_الهاشمي | مدرب لياقة | أصبحت أقدم جلسات تدريبية لعملاء حول العالم بفضل خاصية البث المباشر السلسة والدفع الآمن. |

**Testimonials Section Title (Commented Out):** من مستقل إلى منشئ إمبراطورية
**Testimonials Subtitle (Commented Out):** قصص نجاح حقيقية من منصتنا

---

*Generated from project source files on 2026-03-06*
///////////









<!--  -->
{
  "brand": {
    "name": "BEPRIME",
    "tagline_options": [
      "The New Era of Fitness. Redefined.",
      "Your Second Brain for Coaching Excellence.",
      "Where Coaches Become Unstoppable.",
      "Coach Smarter. Train Faster. Live Prime.",
      "The Operating System for Elite Coaches.",
      "Every Detail. Every Client. Every Time.",
      "Second to None. Built for the Best."
    ],
    "brand_voice": {
      "tone": "Bold, confident, empowering, cutting-edge, professional yet approachable. Speak like a coach who has already won — not trying to sell, but inviting others into something inevitable.",
      "personality": "BEPRIME is the friend who is three steps ahead. It speaks with authority because it delivers. It doesn't beg — it proves. It respects the coach's time, intelligence, and ambition.",
      "language_rules": [
        "Use 'you' and 'your' — always speak directly to the coach or user",
        "Use power verbs: Dominate, Accelerate, Unlock, Command, Optimize, Crush, Transform, Automate, Eliminate",
        "Avoid weak language: 'maybe', 'try', 'hope', 'might', 'sort of'",
        "Use contrast: Show the OLD way vs. the BEPRIME way",
        "Use numbers and specifics: '10x faster', 'in 30 seconds', 'zero manual work'",
        "Create urgency without being sleazy: 'Your competitors already have this advantage'",
        "Frame everything as time saved and results gained",
        "Never say 'just another tool' — BEPRIME is a second brain, a command center, a coaching revolution",
        "Use short punchy sentences mixed with detailed explanations",
        "Always end sections with a micro-CTA or power statement"
      ],
      "words_to_use": ["Effortless", "Instant", "Automatic", "Intelligent", "Precision", "Complete", "Unlimited", "Elite", "Prime", "Command", "Dominate", "Zero-friction", "Lightning-fast", "Military-grade", "All-in-one", "360°", "Real-time", "AI-powered", "Data-driven", "Unstoppable"],
      "words_to_avoid": ["Basic", "Simple tool", "Try", "Hopefully", "Might", "Cheap", "Discount", "Budget", "Just", "Only", "Small", "Limited"]
    },
    "competitor_positioning": {
      "vs_trainerize": "Trainerize focuses on engagement and community but lacks deep AI analysis, comprehensive lifestyle tracking, intelligent meal recognition, biological age optimization, and the speed BEPRIME delivers. Trainerize requires manual work — BEPRIME automates everything.",
      "vs_truecoach": "TrueCoach is built for workout programming but misses the full picture — no AI meal scanning, no sleep analysis, no water tracking, no biological age insights, no automated follow-ups, no recovery analysis. BEPRIME tracks everything the human body does.",
      "vs_exercise_com": "Exercise.com offers gym management but doesn't give coaches a second brain. No AI-powered insights, no automatic data gathering, no lifestyle analysis. BEPRIME is built for the coach who wants to know EVERYTHING about their client.",
      "core_differentiator": "BEPRIME is the ONLY platform that combines complete lifestyle tracking (exercise, diet, sleep, water, weight, recovery), AI-powered analysis (meal recognition, pattern detection, biological age), coach automation (auto follow-ups, auto assessments, instant delivery), and a true second brain (remembers everything, continues where you left off, saves all your work). No competitor does ALL of this. Not one."
    }
  },

  "landing_page_sections": {

    "section_01_hero": {
      "section_name": "Hero Section",
      "purpose": "Instantly communicate what BEPRIME is, who it's for, and why it's different. Stop the scroll. Create desire.",
      "layout": "Full-screen hero with dark premium background, animated UI mockup, headline, subheadline, CTA, trust badges",
      "content": {
        "pre_headline": "THE NEW ERA OF FITNESS IS HERE",
        "headline_options": [
          "Your Coaching Empire Starts Here.",
          "The Second Brain Every Elite Coach Needs.",
          "Stop Managing. Start Dominating.",
          "Every Client. Every Detail. Zero Effort.",
          "The Fastest Coaching Platform Ever Built."
        ],
        "subheadline_options": [
          "BEPRIME is the all-in-one coaching platform that tracks, analyzes, and optimizes every aspect of your client's fitness, nutrition, sleep, recovery, and lifestyle — powered by AI, built for speed, designed for coaches who refuse to settle.",
          "From exercise tracking to AI meal recognition, from sleep analysis to biological age optimization — BEPRIME gives you complete control over every client's journey. Create programs in seconds, deliver instantly, and never lose a single data point.",
          "Manage unlimited clients, automate follow-ups, track every metric that matters, and let AI do the heavy lifting. BEPRIME isn't a tool — it's your unfair advantage."
        ],
        "cta_primary": "Start Free — Become Prime",
        "cta_secondary": "See How It Works",
        "trust_badges": [
          "Trusted by 10,000+ Coaches Worldwide",
          "AI-Powered Intelligence",
          "Works on Every Device",
          "10x Faster Than Any Competitor",
          "HIPAA Compliant & Secure"
        ],
        "social_proof_ticker": "Join coaches from 50+ countries who switched to BEPRIME this month"
      },
      "copywriting_notes": "The hero must create an immediate emotional response. The coach should feel: 'This is what I've been looking for.' Use a dark, premium aesthetic. The mockup should show the dashboard with real data — make it feel alive and powerful."
    },

    "section_02_problem_agitation": {
      "section_name": "The Problem — Why Coaches Are Drowning",
      "purpose": "Agitate the pain points coaches face daily. Make them feel understood. Create the gap that BEPRIME fills.",
      "layout": "Two-column or stacked cards showing pain points with icons, followed by a transition statement",
      "content": {
        "section_headline": "Coaches Are Working Harder Than Ever — And Getting Less Done",
        "section_subheadline": "Sound familiar?",
        "pain_points": [
          {
            "pain": "Drowning in Spreadsheets",
            "description": "You're still using spreadsheets, WhatsApp messages, and 5 different apps to manage clients. Every update takes 10 minutes. Every follow-up gets forgotten. Your workflow is scattered across tools that don't talk to each other.",
            "emotional_trigger": "You didn't become a coach to be a data-entry clerk."
          },
          {
            "pain": "No Full Picture of Your Clients",
            "description": "You know their workout plan, maybe their diet. But what about their sleep? Their stress levels? Their water intake? Their recovery? You're coaching blind — making decisions with 20% of the data.",
            "emotional_trigger": "How can you optimize what you can't see?"
          },
          {
            "pain": "Follow-Ups Fall Through the Cracks",
            "description": "You meant to check on that client who missed 3 sessions. You meant to update that assessment. You meant to send that new meal plan. But life happened, and now the client feels ignored.",
            "emotional_trigger": "Lost follow-ups = lost clients = lost revenue."
          },
          {
            "pain": "Slow, Manual, Repetitive Work",
            "description": "Creating a new client profile takes 15 minutes. Building a meal plan takes an hour. Updating assessments is a chore. You spend 70% of your time on admin and 30% on actual coaching.",
            "emotional_trigger": "Your expertise is being wasted on tasks a machine should handle."
          },
          {
            "pain": "Your Clients Track Nothing Properly",
            "description": "You ask them to track meals — they forget. You ask them to log water — they guess. You ask about sleep — they shrug. Without accurate data, your coaching is based on assumptions.",
            "emotional_trigger": "Bad data = bad decisions = bad results = bad retention."
          },
          {
            "pain": "Switching Between Devices Kills Your Flow",
            "description": "You started a plan on your laptop but now you're at the gym with just your phone. Nothing synced. You can't continue. You waste time recreating work you already did.",
            "emotional_trigger": "Your tool should follow you — not the other way around."
          }
        ],
        "transition_statement": "What if there was a platform that eliminated every single one of these problems — and gave you superpowers you didn't even know you needed?",
        "cta": "Meet BEPRIME →"
      }
    },

    "section_03_solution_reveal": {
      "section_name": "The Solution — Introducing BEPRIME",
      "purpose": "Position BEPRIME as the inevitable answer to every problem just described. This is the 'aha' moment.",
      "layout": "Centered headline, product video/animation, three key pillars with icons",
      "content": {
        "section_headline": "BEPRIME: The Operating System for Elite Coaches",
        "section_subheadline": "One platform. Every tool. Every insight. Every client. Zero wasted time.",
        "intro_paragraph": "BEPRIME isn't just another coaching app. It's your second brain — an AI-powered command center that tracks, analyzes, and optimizes every dimension of your client's health and fitness. It makes you 10x faster, infinitely more organized, and gives you insights no other platform can match. From the moment a client signs up to the moment they hit their goals — BEPRIME handles everything.",
        "three_pillars": [
          {
            "pillar": "FOR THE COACH",
            "icon": "command-center",
            "tagline": "Your Second Brain. Your Unfair Advantage.",
            "description": "Manage unlimited clients, automate every workflow, create programs in seconds, send instant updates, track every detail, and never lose context. BEPRIME remembers everything so you don't have to."
          },
          {
            "pillar": "FOR THE CLIENT",
            "icon": "full-body-scan",
            "tagline": "Track Everything. Understand Everything. Optimize Everything.",
            "description": "Exercise, diet, sleep, water, weight, recovery, stress, consistency — BEPRIME tracks it all and gives your clients a clear picture of their body, their habits, and their progress with beautiful dashboards and AI-powered insights."
          },
          {
            "pillar": "POWERED BY AI",
            "icon": "brain-circuit",
            "tagline": "Intelligence That Gets Smarter Every Day.",
            "description": "AI meal recognition from photos, automatic nutritional analysis, training pattern detection, recovery optimization, biological age calculation, and a personal AI assistant your clients can ask anything about their body."
          }
        ],
        "cta": "Explore All Features →"
      }
    },

    "section_04_coach_features_overview": {
      "section_name": "Built for Coaches Who Demand the Best",
      "purpose": "Deep dive into every feature that makes the coach's life easier, faster, and more powerful.",
      "layout": "Feature cards with screenshots, alternating left-right layout, each with headline, description, bullet points, and micro-CTA",
      "features": [

        {
          "feature_id": "coach_01",
          "feature_name": "Lightning-Fast Client Management",
          "headline": "Create, Manage, and Update Clients in Seconds — Not Hours",
          "description": "BEPRIME's client management is engineered for speed. Create a new client profile in under 30 seconds. Access everything about any client with one tap. Update assessments, upload progress photos, adjust plans — all from a single, unified dashboard that works on any device.",
          "detail_points": [
            "Create new client profiles with smart auto-fill in under 30 seconds",
            "One-tap access to complete client history — every workout, every meal, every metric",
            "Upload and organize client progress photos with date stamps and comparison tools",
            "Tag, filter, and segment clients by goals, status, plan type, or any custom field",
            "Bulk actions: Update multiple clients at once, send group messages, apply templates",
            "Client status dashboard: See who needs attention, who's crushing it, who's at risk",
            "Complete CRM functionality built specifically for coaching businesses",
            "Archive and restore clients without losing any historical data"
          ],
          "old_way_vs_beprime": {
            "old_way": "15 minutes to set up a new client. Scattered data across apps. No overview of who needs what.",
            "beprime_way": "30 seconds to full client profile. Everything in one place. Instant visibility of every client's status."
          },
          "power_statement": "You'll manage 50 clients faster than your competitors manage 5."
        },

        {
          "feature_id": "coach_02",
          "feature_name": "Automated Follow-Ups & Smart Reminders",
          "description": "Never lose a client to silence again. BEPRIME automatically sends follow-ups based on client behavior, milestones, missed sessions, and custom rules you define. Set it once — it runs forever.",
          "headline": "Your Clients Feel Cared For — Even When You're Sleeping",
          "detail_points": [
            "Automatic follow-up messages when clients miss workouts or meals",
            "Milestone celebrations sent automatically when clients hit goals",
            "Custom follow-up rules: Set triggers based on any metric or behavior",
            "Smart scheduling: Follow-ups sent at optimal engagement times",
            "Weekly check-in reminders sent automatically to every client",
            "Re-engagement sequences for inactive clients",
            "Assessment reminders: Auto-prompt clients when updates are due",
            "Coach notification: Get alerted when a client needs personal attention"
          ],
          "old_way_vs_beprime": {
            "old_way": "You forget to follow up. Clients feel ignored. They churn silently.",
            "beprime_way": "Every client gets perfect attention. Zero follow-ups missed. Retention skyrockets."
          },
          "power_statement": "BEPRIME follows up so you never have to follow up again."
        },

        {
          "feature_id": "coach_03",
          "feature_name": "Complete Client Intelligence",
          "headline": "Know EVERYTHING About Every Client — At a Glance",
          "description": "BEPRIME gives you a 360° view of every client's life. Not just their workouts — their sleep patterns, hydration habits, stress levels, recovery scores, diet compliance, weight trends, and more. This is coaching with complete information.",
          "detail_points": [
            "Unified client dashboard showing all metrics: exercise, diet, sleep, water, weight, recovery",
            "Historical data visualization: See trends over days, weeks, months, and years",
            "Health score calculation combining all lifestyle metrics into one number",
            "Red flag alerts: Automatic warnings when metrics indicate problems (overtraining, poor sleep, dehydration)",
            "Client behavior patterns: Know when they're consistent, when they slip, and why",
            "Custom metric tracking: Add any measurement that matters for your coaching style",
            "Progress comparison: Side-by-side views of any two time periods",
            "Export detailed client reports for consultations, medical referrals, or client motivation"
          ],
          "old_way_vs_beprime": {
            "old_way": "You know their bench press numbers. That's about it.",
            "beprime_way": "You know their bench press, sleep quality, hydration, stress response, recovery rate, meal compliance, weight trajectory, and biological age — all updated in real time."
          },
          "power_statement": "The coach who knows everything wins every time. BEPRIME makes you that coach."
        },

        {
          "feature_id": "coach_04",
          "feature_name": "Instant Program Creation & Delivery",
          "headline": "Build and Send Complete Programs in Under 60 Seconds",
          "description": "Stop spending hours building workout and nutrition plans. BEPRIME's intelligent program builder lets you create, customize, and deliver complete exercise and diet programs instantly. Use templates, drag-and-drop, AI suggestions, or build from scratch — and send it to your client with one tap.",
          "detail_points": [
            "Drag-and-drop program builder with intelligent exercise suggestions",
            "Massive exercise library with video demonstrations and form cues",
            "Save and reuse program templates: Build once, deploy to hundreds of clients",
            "Smart auto-progression: Programs automatically adjust based on client performance",
            "Meal plan builder with nutritional calculations and alternative suggestions",
            "Instant delivery: Client receives the program immediately on their device",
            "Schedule programs in advance: Plan weeks or months ahead",
            "Clone and modify: Duplicate any program and customize for a new client in seconds",
            "Continue where you left off: BEPRIME saves your work state across all devices"
          ],
          "old_way_vs_beprime": {
            "old_way": "1 hour to build a program. 10 minutes to format it. 5 minutes to send it. Hope the client opens it.",
            "beprime_way": "60 seconds to build. One tap to send. Client gets it instantly. You continue where you left off on any device."
          },
          "power_statement": "The fastest program creation in the fitness industry. Period."
        },

        {
          "feature_id": "coach_05",
          "feature_name": "Assessments & Progress Tracking System",
          "headline": "Assessments That Run Themselves — So You Can Focus on Coaching",
          "description": "Initial assessments, weekly check-ins, bi-weekly updates, monthly reviews — BEPRIME handles the entire assessment lifecycle automatically. Schedule it once, and BEPRIME collects the data, organizes it, and presents it in beautiful reports.",
          "detail_points": [
            "Initial assessment templates: Comprehensive intake forms covering health history, goals, lifestyle, and current metrics",
            "Automated assessment scheduling: Weekly, bi-weekly, monthly, or custom intervals",
            "Progress photo collection: Clients upload photos on schedule, automatically organized",
            "Body composition tracking: Weight, measurements, body fat percentage, lean mass estimates",
            "Assessment comparison tools: See exactly what changed between any two assessments",
            "Custom assessment fields: Add any question or metric specific to your coaching methodology",
            "Auto-populated assessments: Pre-fill data from tracked metrics to save client time",
            "Historical assessment archive: Every assessment ever taken, searchable and sortable",
            "Fill old data retroactively: Backfill historical data for complete client timelines"
          ],
          "old_way_vs_beprime": {
            "old_way": "You manually send assessment forms. Chase clients to fill them. Manually compare results. Waste hours.",
            "beprime_way": "BEPRIME sends assessments automatically, collects data, compares results, and presents insights — you just review and coach."
          },
          "power_statement": "Set your assessment schedule once. BEPRIME handles everything else — forever."
        },

        {
          "feature_id": "coach_06",
          "feature_name": "Subscription & Payment Management",
          "headline": "From Free Trial to Premium — Manage Every Subscription Effortlessly",
          "description": "BEPRIME gives you complete control over client subscriptions. Assign free trials, set up paid plans, upgrade or downgrade clients, and manage billing — all from your dashboard. No third-party payment headaches.",
          "detail_points": [
            "Flexible subscription tiers: Free, basic, premium, VIP — or create your own",
            "One-click subscription changes: Upgrade, downgrade, pause, or cancel any client",
            "Free trial management: Set duration, auto-convert to paid, or auto-expire",
            "Payment tracking: See who's paid, who's overdue, and revenue at a glance",
            "Automated billing reminders: Clients get notified before and after payment dates",
            "Revenue dashboard: Track monthly recurring revenue, churn rate, and lifetime value",
            "Coupon and promotion system: Create limited-time offers to attract new clients",
            "Refund management: Process refunds directly from the dashboard"
          ],
          "power_statement": "Run your coaching business like a Fortune 500 company — with the tools to match."
        },

        {
          "feature_id": "coach_07",
          "feature_name": "Cross-Device Continuity",
          "headline": "Start on Your Laptop. Continue on Your Phone. Never Miss a Beat.",
          "description": "BEPRIME is built for coaches who are always on the move. Every change, every program, every message syncs instantly across all your devices. Pick up exactly where you left off — whether you're at your desk, at the gym, or on the go.",
          "detail_points": [
            "Real-time sync across desktop, tablet, and mobile",
            "State preservation: If you're halfway through building a program, it's waiting for you on any device",
            "Offline mode: Work without internet — everything syncs when you reconnect",
            "Responsive design: Full functionality on every screen size",
            "Push notifications: Get alerted about client activity, messages, and tasks on any device",
            "One account, unlimited devices: No restrictions on where you work"
          ],
          "power_statement": "Your coaching platform should follow you — not the other way around. BEPRIME goes wherever you go."
        },

        {
          "feature_id": "coach_08",
          "feature_name": "Saved Work & Intelligent Templates",
          "headline": "Build It Once. Use It Forever. Never Repeat Yourself Again.",
          "description": "Every program, every meal plan, every template, every workflow you create in BEPRIME is saved and ready to be reused. Build your coaching library over time, and watch your speed increase exponentially as your system grows with you.",
          "detail_points": [
            "Save any program as a reusable template with one click",
            "Organize templates into categories, tags, and folders",
            "Share templates with your coaching team",
            "Version control: See and restore previous versions of any template",
            "Smart suggestions: BEPRIME recommends templates based on client profiles",
            "Import/export templates: Bring your existing work into BEPRIME instantly",
            "Community template library: Access shared templates from other BEPRIME coaches"
          ],
          "power_statement": "The longer you use BEPRIME, the faster you get. Your work compounds — your speed is limitless."
        },

        {
          "feature_id": "coach_09",
          "feature_name": "CRM & Client Data Recording",
          "headline": "Every Conversation. Every Note. Every Detail. One Place.",
          "description": "BEPRIME is a full CRM built for coaching. Record notes from client calls, log important health details, track communication history, and store every piece of information that matters. When you open a client's profile, you see EVERYTHING.",
          "detail_points": [
            "Client notes system: Quick-log notes from calls, sessions, or observations",
            "Communication history: Every message, update, and interaction logged chronologically",
            "Custom fields: Track any data point unique to your coaching style",
            "Client tags and segments: Organize clients by any criteria",
            "Task management: Set reminders and to-dos for specific clients",
            "Image and document storage: Attach files to client profiles",
            "Search everything: Find any piece of information across all clients instantly",
            "Data import: Bring client data from other platforms or spreadsheets"
          ],
          "power_statement": "A coach with perfect memory is a coach who never drops the ball. BEPRIME is your perfect memory."
        }
      ]
    },

    "section_05_client_features_exercise": {
      "section_name": "Exercise Tracking — Every Rep, Every Set, Every Insight",
      "purpose": "Show the depth of exercise tracking capabilities that clients get. Demonstrate the analytical power.",
      "layout": "Feature showcase with animated dashboard mockups and data visualization examples",
      "content": {
        "section_headline": "The Most Comprehensive Exercise Tracking System Ever Built",
        "section_subheadline": "Don't just track workouts. Understand them.",
        "intro": "BEPRIME doesn't just record exercises — it analyzes every aspect of your client's training life. From individual sessions to long-term patterns, from muscle group balance to consistency scores — your clients get insights that elite athletes pay thousands for.",
        "features": [
          {
            "feature_id": "exercise_01",
            "feature_name": "Daily, Weekly, and Monthly Exercise Logging",
            "description": "Clients log every exercise session with detailed sets, reps, weight, duration, RPE, and notes. BEPRIME organizes this data into daily, weekly, and monthly views that reveal the complete training story.",
            "detail_points": [
              "Log exercises with sets, reps, weight, tempo, rest periods, and RPE",
              "Daily view: See every exercise performed today with completion status",
              "Weekly view: Training volume, frequency, and muscle group distribution",
              "Monthly view: Long-term trends, progressive overload tracking, and consistency metrics",
              "Historical archive: Access any workout from any date in the client's history",
              "Calendar view: Visual workout schedule showing planned vs. completed sessions"
            ]
          },
          {
            "feature_id": "exercise_02",
            "feature_name": "Training Pattern Analysis",
            "description": "BEPRIME's AI analyzes your client's training patterns to reveal what's working, what's not, and what needs to change. It looks at muscle group balance, volume distribution, intensity patterns, rest-to-training ratios, and consistency scores.",
            "detail_points": [
              "Muscle group heat map: Visual representation of which muscles are trained and how often",
              "Volume tracking: Total sets, reps, and tonnage per muscle group over time",
              "Intensity distribution: Are they training hard enough? Too hard? BEPRIME shows the pattern",
              "Rest day analysis: How often do they rest? Is it enough? Is recovery happening?",
              "Training frequency: How many times per week are they training? Is it consistent?",
              "Progressive overload detection: Is the client getting stronger over time? BEPRIME tracks it automatically",
              "Stress load calculation: Combining volume, intensity, and frequency to detect overtraining risk",
              "Consistency score: A single number that shows how reliable the client's training habit is"
            ]
          },
          {
            "feature_id": "exercise_03",
            "feature_name": "Smart Insights & Recommendations",
            "description": "Based on the data collected, BEPRIME generates actionable insights: which muscles are underdeveloped, when the client needs rest, when they're in a growth phase, and when they're at risk of burnout or injury.",
            "detail_points": [
              "Muscle imbalance detection: Identify neglected muscle groups before they become problems",
              "Recovery readiness score: Is the client recovered enough for today's planned workout?",
              "Peak performance windows: Identify the client's best training days and times",
              "Plateau detection: Alert when a client's progress has stalled with suggested changes",
              "Overtraining warnings: Early detection of excessive training load",
              "Personal records tracking: Celebrate PRs automatically and track strength milestones",
              "Training age calculation: How experienced is the client's training history?"
            ]
          }
        ],
        "power_statement": "Your clients don't just work out. They understand their body like never before. And you see it all."
      }
    },

    "section_06_client_features_diet": {
      "section_name": "Diet & Nutrition Tracking — Capture It, Don't Count It",
      "purpose": "Showcase the revolutionary AI-powered meal tracking and comprehensive nutrition analysis. This is a MAJOR differentiator.",
      "layout": "Split-screen showing phone camera capturing food on one side, nutritional breakdown appearing on the other",
      "content": {
        "section_headline": "The End of Manual Calorie Counting. The Beginning of AI Nutrition.",
        "section_subheadline": "Point. Shoot. Know Everything.",
        "intro": "BEPRIME revolutionizes diet tracking with AI-powered meal recognition. Your clients simply take a photo of their meal — and BEPRIME instantly identifies every food item, calculates portions, and delivers complete nutritional breakdown. No more tedious food logging. No more guessing. No more clients who 'forget' to track.",
        "features": [
          {
            "feature_id": "diet_01",
            "feature_name": "AI Meal Recognition & Analysis",
            "headline": "Snap a Photo. Get Every Nutrition Fact. Instantly.",
            "description": "BEPRIME's AI vision technology analyzes meal photos to identify foods, estimate portions, and calculate complete nutritional values — calories, macronutrients, micronutrients, vitamins, and minerals. All from a single photo.",
            "detail_points": [
              "AI-powered food identification from photos — recognizes thousands of foods",
              "Automatic portion estimation using advanced visual analysis",
              "Complete macronutrient breakdown: Calories, protein, carbohydrates, fats",
              "Detailed micronutrient analysis: Vitamins A, B, C, D, E, K, and all essential minerals",
              "Mineral tracking: Iron, calcium, magnesium, zinc, potassium, sodium, and more",
              "Fiber, sugar, and saturated fat breakdown",
              "Meal scoring: Instant quality rating based on nutritional balance",
              "Multiple food recognition: Identifies every item on the plate, not just the main dish",
              "Confidence scoring: Tells the client how accurate the AI's identification is",
              "Manual override: Clients can correct any AI identification for perfect accuracy"
            ],
            "key_message": "CAPTURE IT — DON'T COUNT IT. The app counts automatically. Your clients just eat and snap.",
            "competitor_gap": "No competitor offers this level of AI meal recognition. Trainerize requires manual macro tracking. TrueCoach integrates with MyFitnessPal but still requires manual entry. BEPRIME eliminates manual entry entirely."
          },
          {
            "feature_id": "diet_02",
            "feature_name": "Complete Diet Logging System",
            "headline": "Every Bite. Every Nutrient. Every Day.",
            "description": "Beyond AI recognition, BEPRIME offers a complete diet logging ecosystem — manual entry, food database search, ready-made meals, custom meal creation, and smart favorites.",
            "detail_points": [
              "AI photo capture: The primary, fastest way to log meals",
              "Food database search: Search thousands of foods with complete nutritional data",
              "Barcode scanner: Scan packaged foods for instant nutritional information",
              "Ready-made meal library: Pre-loaded meals with complete nutritional profiles",
              "Custom meal creation: Build and save custom meals with exact ingredients and portions",
              "Recipe builder: Create complex recipes and calculate per-serving nutrition automatically",
              "Custom diet entry: Free-form entry for unique foods or supplements",
              "Meal favorites: Save frequently eaten meals for one-tap logging",
              "Copy meals: Duplicate yesterday's lunch to today with one tap",
              "Multi-meal support: Breakfast, lunch, dinner, snacks, supplements — all tracked separately"
            ]
          },
          {
            "feature_id": "diet_03",
            "feature_name": "Food Alternatives Database",
            "headline": "Bored With Chicken and Rice? We've Got 10,000 Alternatives.",
            "description": "BEPRIME's food alternatives engine suggests nutritionally equivalent foods so clients can maintain their targets while enjoying variety. Stuck in a diet rut? Not anymore.",
            "detail_points": [
              "Smart alternatives: Get suggestions that match the same macro profile",
              "Dietary preference filters: Vegan, vegetarian, keto, paleo, halal, kosher, and more",
              "Allergy-aware: Automatically excludes allergens from suggestions",
              "Cuisine variety: Alternatives from different cuisines and cooking styles",
              "Budget-friendly options: Alternatives sorted by cost when relevant",
              "Seasonal suggestions: Recommend foods that are in season and fresh",
              "Client preference learning: The more clients use it, the better suggestions become"
            ]
          },
          {
            "feature_id": "diet_04",
            "feature_name": "Diet Pattern Analysis",
            "headline": "See the Full Nutrition Picture — Not Just Today's Calories",
            "description": "BEPRIME analyzes long-term eating patterns to reveal nutrient deficiencies, meal timing habits, macro balance trends, and compliance rates. This is nutrition coaching with X-ray vision.",
            "detail_points": [
              "Daily nutrition summary: Calories, macros, and micros for today",
              "Weekly nutrition trends: Average intake, compliance rate, and pattern shifts",
              "Monthly nutrition analysis: Long-term dietary habits and their impact",
              "Macro ratio tracking: Protein/carb/fat balance over time",
              "Micronutrient gaps: Identify vitamins and minerals consistently below target",
              "Meal timing analysis: When do they eat? Are they skipping meals? Eating too late?",
              "Caloric consistency: How stable is their intake day to day?",
              "Compliance percentage: What percentage of planned meals are actually logged?",
              "Cheat meal tracking: Identify patterns in off-plan eating",
              "Hydration-nutrition correlation: How water intake affects nutritional absorption and energy"
            ]
          }
        ],
        "power_statement": "Your clients stop guessing. You stop nagging. The AI handles everything. Welcome to nutrition coaching on autopilot."
      }
    },

    "section_07_client_features_sleep": {
      "section_name": "Sleep Analysis — The Recovery Secret Nobody Tracks",
      "purpose": "Position sleep tracking as a critical differentiator and essential coaching data point.",
      "layout": "Dark-themed section with sleep wave visualization and data cards",
      "content": {
        "section_headline": "Sleep Is Where Results Happen. BEPRIME Tracks Every Minute.",
        "section_subheadline": "Know when they sleep, when they wake, when they nap, and how it all affects their results.",
        "intro": "Most coaching platforms ignore sleep entirely. But sleep is where muscle is built, where fat is burned, where hormones are regulated, and where recovery happens. BEPRIME tracks every aspect of your client's sleep to complete the full picture of their health.",
        "features": [
          {
            "feature_id": "sleep_01",
            "feature_name": "Comprehensive Sleep Logging",
            "detail_points": [
              "Bedtime tracking: When did the client go to sleep?",
              "Wake time tracking: When did they wake up?",
              "Nap logging: Daytime naps with duration and quality",
              "Sleep duration calculation: Total hours and minutes automatically computed",
              "Sleep quality rating: Client self-reports sleep quality (1-10 scale)",
              "Sleep disruption logging: How many times did they wake during the night?",
              "Pre-sleep habits: What did they do before bed? (Screen time, caffeine, exercise)",
              "Sleep notes: Free-text notes for any sleep-related observations"
            ]
          },
          {
            "feature_id": "sleep_02",
            "feature_name": "Sleep Pattern Analysis",
            "detail_points": [
              "Sleep consistency score: How regular is their sleep schedule?",
              "Average sleep duration: Weekly and monthly averages",
              "Sleep debt calculation: Are they consistently under-sleeping?",
              "Best sleep days: Identify which days of the week they sleep best",
              "Sleep vs. performance correlation: How does sleep affect next-day training?",
              "Sleep vs. weight correlation: Relationship between sleep patterns and weight trends",
              "Recovery prediction: Sleep quality feeds into overall recovery scoring",
              "Circadian rhythm mapping: Understand the client's natural sleep-wake cycle"
            ]
          }
        ],
        "power_statement": "The coach who tracks sleep coaches the whole human. Not just the muscles."
      }
    },

    "section_08_client_features_water": {
      "section_name": "Hydration Tracking — Every Sip, Every Cup, Every Drop",
      "purpose": "Show the thoughtful, detailed approach to hydration tracking including custom cups feature.",
      "layout": "Clean, fluid design with water-themed visuals and cup customization showcase",
      "content": {
        "section_headline": "Hydration Is the Most Underrated Performance Factor. Not Anymore.",
        "section_subheadline": "Track what they drink, when they drink, and how it changes everything.",
        "features": [
          {
            "feature_id": "water_01",
            "feature_name": "Smart Hydration Logging",
            "detail_points": [
              "Quick-log water intake with one tap",
              "Custom cup sizes: Define favorite containers (gym bottle, coffee mug, water glass)",
              "Pre-loaded drink templates: Water, coffee, tea, juice, protein shake, electrolyte drinks",
              "All favorite drinks ready to use: Save any beverage for instant logging",
              "Time-stamped entries: Know exactly when each drink was consumed",
              "Daily hydration target: Personalized based on body weight, activity level, and climate",
              "Hydration reminders: Gentle push notifications to drink water throughout the day",
              "Caffeine tracking: Monitor caffeine intake alongside hydration"
            ]
          },
          {
            "feature_id": "water_02",
            "feature_name": "Hydration Analysis",
            "detail_points": [
              "Daily vs. target comparison: Are they hitting their hydration goals?",
              "Weekly hydration trends: Pattern recognition over time",
              "Hydration timing: Are they front-loading water or playing catch-up?",
              "Hydration vs. performance: Correlation between water intake and workout quality",
              "Hydration vs. recovery: How dehydration affects recovery scores",
              "Hydration vs. sleep: Impact of evening fluid intake on sleep quality",
              "Dehydration warnings: Alert when intake falls below minimum thresholds"
            ]
          }
        ],
        "power_statement": "Custom cups. Favorite drinks. One-tap logging. Because even water intake matters when you're building the perfect body."
      }
    },

    "section_09_client_features_weight": {
      "section_name": "Weight Analysis — Beyond the Scale Number",
      "purpose": "Demonstrate intelligent weight tracking that looks at trends, not daily fluctuations.",
      "layout": "Interactive chart showing weight trends with annotations and insights",
      "content": {
        "section_headline": "Stop Obsessing Over Daily Numbers. Start Understanding Weight Trends.",
        "section_subheadline": "Morning weigh-ins, trend analysis, and insights that actually help.",
        "features": [
          {
            "feature_id": "weight_01",
            "feature_name": "Intelligent Weight Tracking",
            "detail_points": [
              "Morning weigh-in protocol: Consistent measurement timing for accurate data",
              "Daily weight logging with trend smoothing (eliminates daily fluctuation anxiety)",
              "Weekly average weight: The number that actually matters",
              "Monthly weight trajectory: Long-term direction with projected trend lines",
              "Weight change velocity: How fast is weight moving up or down?",
              "Goal progress: Percentage progress toward weight goal",
              "Body composition estimates: Track weight alongside measurements and photos",
              "Weight milestone celebrations: Automatic recognition of meaningful achievements"
            ]
          },
          {
            "feature_id": "weight_02",
            "feature_name": "Weight Trend Analysis",
            "detail_points": [
              "Trend line visualization: See the real direction behind daily noise",
              "Weight vs. caloric intake: Direct correlation analysis",
              "Weight vs. training volume: How exercise impacts weight changes",
              "Weight vs. sleep: The hidden connection between rest and body composition",
              "Weight vs. stress: Cortisol-driven weight patterns identified",
              "Plateau detection: Know when weight loss has stalled and suggest adjustments",
              "Gaining vs. losing phases: Clearly delineate bulk/cut cycles",
              "Historical weight comparison: Any date range vs. any other date range"
            ]
          }
        ],
        "power_statement": "The scale tells a story. BEPRIME reads it for you — and tells your clients exactly what it means."
      }
    },

    "section_10_ai_brain": {
      "section_name": "The AI Brain — Your Client's Personal Health Intelligence",
      "purpose": "This is the crown jewel feature. Position the AI as a revolutionary coaching companion that no competitor offers.",
      "layout": "Futuristic dark section with AI conversation mockups and data flow visualizations",
      "content": {
        "section_headline": "An AI That Knows Your Client's Body Better Than They Do",
        "section_subheadline": "Every data point. Every pattern. Every answer. Powered by intelligence that never sleeps.",
        "intro": "BEPRIME collects every piece of data about your client's exercise, diet, sleep, water, weight, recovery, and lifestyle — and then unleashes AI to analyze it all. The result? An intelligent assistant your clients can ask anything about their body, their health, and their progress.",
        "features": [
          {
            "feature_id": "ai_01",
            "feature_name": "AI-Powered Full Data Analysis",
            "description": "BEPRIME's AI processes ALL client data to generate insights no human could produce manually. It correlates exercise with sleep, diet with weight, hydration with recovery, and stress with everything.",
            "detail_points": [
              "Cross-metric correlation: AI finds connections between seemingly unrelated data points",
              "Predictive insights: What will happen if the client maintains current patterns?",
              "Anomaly detection: Spots unusual changes in any metric and flags them immediately",
              "Optimization suggestions: AI recommends specific changes to improve results",
              "Weekly AI summary: Automated report of the most important insights from the week",
              "Coach-facing AI brief: Quick digest of what the AI thinks the coach should know about each client"
            ]
          },
          {
            "feature_id": "ai_02",
            "feature_name": "Personal AI Health Assistant",
            "description": "Clients can ask the AI anything about their body, their data, and their health. It's like having a genius nutritionist, exercise scientist, and health advisor available 24/7 — powered by their actual personal data.",
            "detail_points": [
              "Natural language questions: 'How did my sleep affect my workout this week?'",
              "'What should I eat today to hit my protein goal?'",
              "'Am I overtraining?'",
              "'What's my best recovery strategy for next week?'",
              "'How is my diet affecting my weight trend?'",
              "'What nutrients am I missing this month?'",
              "'Should I take a rest day tomorrow?'",
              "Personalized answers based on actual tracked data — not generic advice",
              "Nutrition fact lookup: Ask about any food's nutritional profile",
              "Meal suggestions based on current daily intake and remaining targets",
              "General health advice grounded in the client's real lifestyle data"
            ]
          },
          {
            "feature_id": "ai_03",
            "feature_name": "Biological Age Optimization",
            "headline": "Your Real Age Is Just a Number. Your Biological Age Is What Matters.",
            "description": "BEPRIME calculates and tracks biological age — a comprehensive measure of how old the client's body truly is based on their lifestyle, fitness, recovery, and health metrics. Then it provides actionable steps to reduce it.",
            "detail_points": [
              "Biological age calculation based on exercise, diet, sleep, stress, and recovery data",
              "Biological age vs. chronological age comparison",
              "Improvement tracking: See biological age decrease over time as lifestyle improves",
              "Factor breakdown: Which metrics are aging the client faster? Sleep? Diet? Stress?",
              "Personalized improvement plan: AI-generated recommendations to reduce biological age",
              "Monthly biological age reports: Track long-term improvement",
              "Gamification: Biological age milestones and achievements"
            ]
          }
        ],
        "power_statement": "Every data point your client generates feeds an AI that gets smarter every day. This isn't a chatbot. This is a digital health intelligence that knows your client inside and out."
      }
    },

    "section_11_recovery_analysis": {
      "section_name": "Recovery & Lifestyle Analysis",
      "purpose": "Show the holistic tracking approach that sets BEPRIME apart — recovery is where champions are made.",
      "layout": "Recovery dashboard mockup with interconnected metric visualizations",
      "content": {
        "section_headline": "Recovery Is the Secret Weapon. BEPRIME Makes It Visible.",
        "section_subheadline": "Sleep + Hydration + Nutrition + Stress + Rest = Your Recovery Score",
        "features": [
          {
            "feature_id": "recovery_01",
            "feature_name": "Holistic Recovery Scoring",
            "detail_points": [
              "Recovery score calculated from sleep quality, hydration, nutrition, rest days, and stress levels",
              "Daily recovery readiness: Is the client ready to train hard today?",
              "Recovery trends over time: Are they improving or declining?",
              "Recovery vs. performance: How recovery scores correlate with training output",
              "Stress impact tracking: How life stress affects physical recovery",
              "Recovery optimization tips: Personalized suggestions to improve recovery",
              "Injury risk assessment: Low recovery + high training load = warning flag"
            ]
          },
          {
            "feature_id": "recovery_02",
            "feature_name": "Complete Lifestyle Dashboard",
            "description": "Every aspect of the client's lifestyle — exercise, diet, sleep, water, weight, recovery, stress — displayed in one beautiful, interactive dashboard that tells the complete story of their health.",
            "detail_points": [
              "Unified health dashboard: All metrics in one view",
              "Customizable widgets: Clients choose what they see first",
              "Interactive charts: Tap any data point for details",
              "Daily summary cards: Quick overview of today's key metrics",
              "Weekly highlight reel: Best moments, areas to improve, coach messages",
              "Progress milestones: Visual celebration of achievements",
              "Shareable reports: Clients can share their dashboard with family, doctors, or social media"
            ]
          }
        ],
        "power_statement": "BEPRIME doesn't just track workouts. It tracks life. And in that complete picture, the real coaching magic happens."
      }
    },

    "section_12_speed_section": {
      "section_name": "Speed — The BEPRIME Obsession",
      "purpose": "Hammer home the speed advantage. This is a core differentiator and emotional hook for time-starved coaches.",
      "layout": "Animated timer/stopwatch comparisons, speed testimonials, bold typography",
      "content": {
        "section_headline": "The Fastest Coaching Platform on the Planet",
        "section_subheadline": "We measured it. We optimized it. We obsessed over every millisecond. Because your time is everything.",
        "speed_comparisons": [
          {
            "task": "Create a New Client Profile",
            "competitor_time": "10-15 minutes",
            "beprime_time": "30 seconds",
            "improvement": "20x faster"
          },
          {
            "task": "Build a Complete Workout Program",
            "competitor_time": "30-60 minutes",
            "beprime_time": "Under 60 seconds",
            "improvement": "30x faster"
          },
          {
            "task": "Send a Program to a Client",
            "competitor_time": "Multiple steps, 2-5 minutes",
            "beprime_time": "One tap, instant delivery",
            "improvement": "Instant"
          },
          {
            "task": "Log a Meal with Full Nutrition Data",
            "competitor_time": "3-5 minutes manual entry",
            "beprime_time": "1 photo, 3 seconds",
            "improvement": "60x faster"
          },
          {
            "task": "Get a Complete Client Overview",
            "competitor_time": "Check 3-5 different screens/apps",
            "beprime_time": "One dashboard, one glance",
            "improvement": "Instant"
          },
          {
            "task": "Follow Up with At-Risk Clients",
            "competitor_time": "Manual — if you remember",
            "beprime_time": "Automatic — always",
            "improvement": "100% reliability"
          }
        ],
        "speed_philosophy": "We didn't build BEPRIME to be a little faster. We built it to make everything else feel like slow motion. Every click, every load, every action — engineered for zero friction. Because the fastest coach wins.",
        "power_statement": "Time is the only resource you can't buy more of. BEPRIME gives it back to you."
      }
    },

    "section_13_comparison_table": {
      "section_name": "BEPRIME vs. The Competition",
      "purpose": "Direct, honest comparison showing BEPRIME's superiority across every dimension. Not aggressive — just factual and confident.",
      "layout": "Clean comparison table with checkmarks, X marks, and highlight on BEPRIME column",
      "content": {
        "section_headline": "See How BEPRIME Compares to Everything Else",
        "section_subheadline": "We didn't just match the competition. We left them behind.",
        "comparison_features": [
          { "feature": "Client Management & CRM", "beprime": true, "trainerize": true, "truecoach": true, "exercise_com": true },
          { "feature": "Workout Program Builder", "beprime": true, "trainerize": true, "truecoach": true, "exercise_com": true },
          { "feature": "Exercise Video Library", "beprime": true, "trainerize": true, "truecoach": true, "exercise_com": true },
          { "feature": "Nutrition Plan Builder", "beprime": true, "trainerize": true, "truecoach": "Partial", "exercise_com": true },
          { "feature": "AI Meal Recognition from Photos", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Automatic Nutritional Analysis", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Complete Micronutrient & Vitamin Tracking", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Food Alternatives Database", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Ready-Made Meal Library", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Sleep Tracking & Analysis", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Hydration Tracking with Custom Cups", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Weight Trend Analysis", "beprime": true, "trainerize": "Basic", "truecoach": "Basic", "exercise_com": "Basic" },
          { "feature": "Recovery Scoring", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Biological Age Calculation", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "AI Personal Health Assistant", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Automated Follow-Ups & Reminders", "beprime": true, "trainerize": "Basic", "truecoach": false, "exercise_com": "Basic" },
          { "feature": "Automated Assessment Scheduling", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Cross-Device State Continuity", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Saved Work & Reusable Templates", "beprime": true, "trainerize": true, "truecoach": true, "exercise_com": true },
          { "feature": "Training Pattern AI Analysis", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false },
          { "feature": "Progress Photo Management", "beprime": true, "trainerize": true, "truecoach": true, "exercise_com": true },
          { "feature": "Payment & Subscription Management", "beprime": true, "trainerize": true, "truecoach": true, "exercise_com": true },
          { "feature": "Full Lifestyle Dashboard", "beprime": true, "trainerize": false, "truecoach": false, "exercise_com": false }
        ],
        "bottom_line": "BEPRIME does everything the competitors do — plus 15+ features they don't even offer. It's not a comparison. It's a generation leap."
      }
    },

    "section_14_pricing": {
      "section_name": "Pricing — Investment in Your Coaching Empire",
      "purpose": "Present pricing that communicates premium value while remaining accessible. Based on competitor analysis.",
      "layout": "Three-tier pricing cards with feature lists, most popular highlighted, annual discount shown",
      "content": {
        "section_headline": "Choose Your Prime Plan",
        "section_subheadline": "Start free. Scale without limits. Cancel anytime.",
        "pricing_strategy_notes": "Based on competitor analysis: Trainerize starts at $0 (1 client) up to $350/mo. TrueCoach starts at $0 (1 client) up to custom pricing. Exercise.com has custom pricing. BEPRIME should position slightly below Trainerize's mid-tier for the Starter plan to capture market share, then deliver vastly more value at every tier.",
        "tiers": [
          {
            "tier_name": "STARTER",
            "price_monthly": "$29/month",
            "price_annual": "$19/month (billed annually)",
            "target": "New coaches and personal trainers just starting their business",
            "client_limit": "Up to 15 clients",
            "features": [
              "Full client management & CRM",
              "Workout program builder with templates",
              "Exercise video library",
              "Basic nutrition tracking",
              "AI meal recognition (50 scans/month)",
              "Sleep & hydration tracking for clients",
              "Weight trend analysis",
              "In-app messaging",
              "Automated follow-up reminders",
              "Cross-device sync",
              "Email support"
            ],
            "cta": "Start Free 14-Day Trial"
          },
          {
            "tier_name": "PRO",
            "badge": "MOST POPULAR",
            "price_monthly": "$59/month",
            "price_annual": "$39/month (billed annually)",
            "target": "Established coaches scaling their business",
            "client_limit": "Up to 50 clients",
            "features": [
              "Everything in Starter, plus:",
              "Unlimited AI meal recognition",
              "Full micronutrient & vitamin tracking",
              "Food alternatives database",
              "Ready-made meal library",
              "Training pattern AI analysis",
              "Recovery scoring",
              "Automated assessment scheduling",
              "Advanced analytics dashboard",
              "Subscription & payment management",
              "Progress photo comparison tools",
              "Custom branding basics",
              "Priority support"
            ],
            "cta": "Start Free 14-Day Trial"
          },
          {
            "tier_name": "ELITE",
            "price_monthly": "$119/month",
            "price_annual": "$89/month (billed annually)",
            "target": "High-volume coaches, studios, and coaching teams",
            "client_limit": "Unlimited clients",
            "features": [
              "Everything in Pro, plus:",
              "AI Personal Health Assistant for clients",
              "Biological age calculation & optimization",
              "Full lifestyle dashboard with all correlations",
              "Team management: Add sub-coaches and assign clients",
              "White-label branding: Your logo, your colors, your app",
              "API access for custom integrations",
              "Bulk client operations",
              "Advanced revenue & business analytics",
              "Weekly AI coach briefings per client",
              "Dedicated account manager",
              "Phone & chat priority support",
              "Early access to new features"
            ],
            "cta": "Start Free 14-Day Trial"
          }
        ],
        "guarantee": "14-Day Free Trial. No Credit Card Required. Cancel Anytime. Your Data Is Always Yours.",
        "pricing_faq": [
          {
            "question": "Can I switch plans anytime?",
            "answer": "Absolutely. Upgrade or downgrade with one click. Changes take effect immediately, and we prorate everything fairly."
          },
          {
            "question": "What happens when I hit my client limit?",
            "answer": "We'll notify you and suggest upgrading. Your existing clients are never affected — we'd never disrupt your coaching."
          },
          {
            "question": "Do my clients pay anything?",
            "answer": "Never. The client app is completely free. You pay for the coaching platform — your clients get the full experience at no cost."
          },
          {
            "question": "Is there a discount for annual billing?",
            "answer": "Yes — save up to 35% when you choose annual billing. That's like getting 4 months free."
          },
          {
            "question": "Can I cancel anytime?",
            "answer": "Yes, with one click. No contracts, no cancellation fees, no questions asked. We keep your business because you love us — not because you're locked in."
          }
        ]
      }
    },

    "section_15_social_proof": {
      "section_name": "Social Proof & Testimonials",
      "purpose": "Build trust and credibility through numbers, testimonials, logos, and case studies.",
      "layout": "Mixed: Stats bar, testimonial cards with photos, logo carousel, case study highlights",
      "content": {
        "stats_bar": [
          { "number": "10,000+", "label": "Active Coaches" },
          { "number": "500,000+", "label": "Clients Tracked" },
          { "number": "50+", "label": "Countries" },
          { "number": "10M+", "label": "Workouts Delivered" },
          { "number": "99.9%", "label": "Uptime" },
          { "number": "4.9/5", "label": "App Store Rating" }
        ],
        "testimonial_templates": [
          {
            "placeholder_name": "[Coach Name]",
            "placeholder_title": "[Title, e.g., Online Fitness Coach]",
            "quote_angle": "Speed — how BEPRIME saved them hours per week",
            "template": "Before BEPRIME, I spent 4 hours a day on admin. Now I spend 20 minutes. I doubled my client base in 3 months because I finally had time to actually coach. This platform is insane."
          },
          {
            "placeholder_name": "[Coach Name]",
            "placeholder_title": "[Title, e.g., Nutrition Coach]",
            "quote_angle": "AI meal recognition — game-changing for compliance",
            "template": "The AI meal scanner changed everything. My clients actually track their food now because it takes 3 seconds. Compliance went from 30% to 90%. My results — and my retention — went through the roof."
          },
          {
            "placeholder_name": "[Coach Name]",
            "placeholder_title": "[Title, e.g., Strength & Conditioning Coach]",
            "quote_angle": "Complete data visibility — coaching with full information",
            "template": "I used to coach with half the picture. Now I see everything — their sleep, their stress, their recovery, their nutrition. I make better decisions, my clients get better results, and they see it in the data. BEPRIME is my secret weapon."
          },
          {
            "placeholder_name": "[Client Name]",
            "placeholder_title": "[Title, e.g., BEPRIME User]",
            "quote_angle": "Client perspective — how the app changed their habits",
            "template": "I never tracked anything before BEPRIME. Now I track everything and I actually enjoy it. The AI tells me what I'm missing, the dashboard shows my progress, and my coach knows exactly what's happening. I've never been in better shape."
          }
        ],
        "case_study_templates": [
          {
            "title": "How [Coach Name] Went from 15 to 100 Clients in 6 Months",
            "summary": "By automating follow-ups, using templates, and leveraging BEPRIME's speed features, this coach 6x'd their business without hiring additional staff.",
            "key_metric": "6x client growth in 6 months"
          },
          {
            "title": "From 30% to 95% Client Compliance — The AI Meal Scanner Effect",
            "summary": "A nutrition coaching practice saw compliance rates triple after switching to BEPRIME's AI meal recognition, leading to dramatically better client outcomes and retention.",
            "key_metric": "3x compliance improvement"
          }
        ]
      }
    },

    "section_16_how_it_works": {
      "section_name": "How It Works — 3 Simple Steps",
      "purpose": "Reduce friction and perceived complexity. Show how easy it is to get started.",
      "layout": "Three numbered steps with icons and brief descriptions, progress line connecting them",
      "content": {
        "section_headline": "Go from Zero to Prime in Minutes",
        "section_subheadline": "No technical setup. No learning curve. Just results.",
        "steps": [
          {
            "step_number": 1,
            "title": "Sign Up & Set Up Your Profile",
            "description": "Create your BEPRIME coach account in under 2 minutes. Add your branding, set your preferences, and configure your coaching style. Import existing clients or start fresh.",
            "time": "2 minutes"
          },
          {
            "step_number": 2,
            "title": "Add Clients & Build Programs",
            "description": "Add your first client in 30 seconds. Use our templates or build custom workout and nutrition programs. Schedule assessments. Set up automated follow-ups. Everything is drag-and-drop simple.",
            "time": "5 minutes"
          },
          {
            "step_number": 3,
            "title": "Deliver, Track, & Optimize",
            "description": "Send programs to clients instantly. Watch as data flows in — workouts, meals, sleep, water, weight. The AI analyzes everything and gives you insights. Your clients see their progress. You coach smarter than ever.",
            "time": "Ongoing magic"
          }
        ],
        "cta": "Start Your Free Trial Now"
      }
    },

    "section_17_faq": {
      "section_name": "Frequently Asked Questions",
      "purpose": "Address objections, reduce uncertainty, and handle common concerns.",
      "layout": "Accordion FAQ with clean typography",
      "content": {
        "section_headline": "Questions? We've Got Answers.",
        "faqs": [
          {
            "question": "Is BEPRIME suitable for new coaches just starting out?",
            "answer": "Absolutely. BEPRIME's Starter plan is specifically designed for new coaches. It gives you professional-grade tools from day one, so you start your business looking and operating like a seasoned pro. As your client base grows, BEPRIME scales with you seamlessly."
          },
          {
            "question": "Can I switch from Trainerize / TrueCoach / another platform?",
            "answer": "Yes. BEPRIME supports data import from all major coaching platforms. Our migration team will help you transfer your client data, programs, and history — so you lose nothing in the switch. Most coaches are fully migrated within 48 hours."
          },
          {
            "question": "How accurate is the AI meal recognition?",
            "answer": "BEPRIME's AI meal recognition has been trained on millions of food images and achieves over 95% accuracy on common meals. For less common dishes, the accuracy is still impressive — and clients can always make quick adjustments. The system learns and improves with every scan."
          },
          {
            "question": "Is my clients' data secure?",
            "answer": "Security is non-negotiable. BEPRIME uses bank-grade encryption, HIPAA-compliant data handling, and secure cloud infrastructure. Your clients' health data is protected by the same standards used by healthcare providers. We never sell or share data with third parties."
          },
          {
            "question": "Do my clients need to pay for the app?",
            "answer": "Never. The BEPRIME client app is 100% free. Your clients get the full experience — tracking, AI insights, dashboard, messaging — at zero cost. You pay for the coaching platform; they get the benefits."
          },
          {
            "question": "Can I use BEPRIME for in-person, online, or hybrid coaching?",
            "answer": "Yes to all three. BEPRIME is designed for any coaching model. Whether your clients are across the gym or across the globe, the platform delivers the same powerful experience."
          },
          {
            "question": "What devices does BEPRIME work on?",
            "answer": "BEPRIME works on everything — iPhone, Android, iPad, tablet, laptop, desktop. Full functionality on every device. Start on your laptop, continue on your phone, finish on your tablet. Everything syncs in real time."
          },
          {
            "question": "Is there a contract or commitment?",
            "answer": "Zero contracts. Zero commitment. Pay monthly or save with annual billing. Cancel anytime with one click. We earn your business every single month — and we're confident you'll never want to leave."
          },
          {
            "question": "What kind of support does BEPRIME offer?",
            "answer": "Every plan includes email support. Pro plans get priority support. Elite plans get a dedicated account manager plus phone and chat support. Our average response time is under 2 hours — because we know your coaching business doesn't wait."
          },
          {
            "question": "Can I customize the app with my own branding?",
            "answer": "Yes. Pro plans include basic branding customization. Elite plans unlock full white-label branding — your logo, your colors, your domain. Your clients see YOUR brand, not ours."
          }
        ]
      }
    },

    "section_18_final_cta": {
      "section_name": "Final Call to Action",
      "purpose": "Close with urgency, social proof, and an irresistible offer. This is the last chance to convert.",
      "layout": "Full-width dark section with bold headline, subheadline, CTA button, and trust elements",
      "content": {
        "headline_options": [
          "Ready to Become the Coach Your Clients Deserve?",
          "Your Competitors Are Already Using AI. What Are You Waiting For?",
          "The Future of Coaching Is Here. Are You Prime?",
          "Stop Working Harder. Start Working Smarter. Start Now.",
          "Every Day Without BEPRIME Is a Day You're Falling Behind."
        ],
        "subheadline": "Join 10,000+ coaches who made the switch. 14-day free trial. No credit card. No risk. Just results.",
        "cta_primary": "Start Free — Become Prime Today",
        "cta_secondary": "Book a Demo With Our Team",
        "trust_elements": [
          "🔒 Bank-Grade Security",
          "⚡ Set Up in 2 Minutes",
          "🚫 No Credit Card Required",
          "✅ Cancel Anytime",
          "🏆 Rated 4.9/5 by Coaches"
        ],
        "urgency_element": "Limited time: Get 3 months free on annual plans when you sign up this week."
      }
    },

    "section_19_footer": {
      "section_name": "Footer",
      "content": {
        "tagline": "BEPRIME — The New Era of Fitness.",
        "nav_links": {
          "Product": ["Features", "Pricing", "AI Technology", "Mobile App", "Integrations"],
          "Coaches": ["Personal Trainers", "Nutrition Coaches", "Strength Coaches", "Online Coaches", "Gym Owners"],
          "Resources": ["Blog", "Help Center", "Getting Started Guide", "API Documentation", "Webinars"],
          "Company": ["About Us", "Careers", "Press", "Contact", "Privacy Policy", "Terms of Service"]
        },
        "social_links": ["Instagram", "YouTube", "TikTok", "LinkedIn", "Twitter/X", "Facebook"],
        "app_store_badges": ["Download on App Store", "Get on Google Play"],
        "copyright": "© 2026 BEPRIME. All rights reserved. The New Era of Fitness."
      }
    }
  },

  "copywriting_formulas": {
    "headline_formula": "[Power Verb] + [Benefit] + [Speed/Ease Qualifier]",
    "subheadline_formula": "[Specific Feature] + [Emotional Outcome] + [Differentiator]",
    "feature_description_formula": "[Problem It Solves] → [How BEPRIME Solves It] → [Result for Coach/Client]",
    "cta_formula": "[Action Verb] + [Desired State] — [Risk Reducer]",
    "examples": {
      "headline": "Automate Every Follow-Up — In Zero Clicks",
      "subheadline": "BEPRIME's smart automation sends the right message to the right client at the right time — while you focus on coaching.",
      "feature": "Coaches lose clients because follow-ups fall through the cracks. BEPRIME automatically sends personalized follow-ups based on client behavior, milestones, and missed sessions. Result: 40% higher retention with zero manual effort.",
      "cta": "Start Free — Never Miss a Follow-Up Again"
    }
  },

  "seo_keywords": {
    "primary": [
      "coaching platform",
      "personal training software",
      "online coaching app",
      "fitness coaching software",
      "AI coaching platform",
      "client management for coaches",
      "nutrition coaching software",
      "AI meal recognition fitness",
      "best personal training app",
      "coaching business software"
    ],
    "secondary": [
      "sleep tracking for coaches",
      "hydration tracking app",
      "biological age fitness",
      "exercise analysis software",
      "automated coaching follow-ups",
      "diet tracking AI",
      "weight trend analysis app",
      "recovery scoring fitness",
      "coaching CRM",
      "second brain for coaches"
    ],
    "long_tail": [
      "best alternative to trainerize",
      "better than truecoach",
      "AI powered coaching platform",
      "coaching software with AI meal scanner",
      "complete fitness tracking for coaching clients",
      "fastest personal training software",
      "coaching platform with sleep tracking",
      "all-in-one coaching business tool"
    ]
  },

  "email_sequences": {
    "welcome_sequence": [
      {
        "email_number": 1,
        "subject": "Welcome to BEPRIME — Here's How to Set Up in 2 Minutes",
        "purpose": "Onboarding — get them to create first client",
        "tone": "Excited, helpful, action-oriented"
      },
      {
        "email_number": 2,
        "subject": "Your First Client is Waiting — Build a Program in 60 Seconds",
        "purpose": "Activation — get them to build first program",
        "tone": "Encouraging, show speed benefit"
      },
      {
        "email_number": 3,
        "subject": "The Feature That Makes Coaches Say 'Where Has This Been?'",
        "purpose": "Feature highlight — AI meal recognition",
        "tone": "Reveal, excitement, demo video"
      },
      {
        "email_number": 4,
        "subject": "How [Coach Name] Went from 15 to 100 Clients with BEPRIME",
        "purpose": "Social proof — case study",
        "tone": "Storytelling, aspirational"
      },
      {
        "email_number": 5,
        "subject": "Your Trial Ends in 3 Days — Here's What You'll Miss",
        "purpose": "Conversion — trial ending urgency",
        "tone": "Urgency with value recap, not pushy"
      }
    ]
  },

  "ad_copy_templates": {
    "facebook_instagram": [
      {
        "hook": "Coaches: Stop spending 4 hours on admin. Start spending 20 minutes.",
        "body": "BEPRIME automates follow-ups, creates programs in 60 seconds, and gives you a 360° view of every client. AI meal recognition. Sleep tracking. Recovery scoring. Everything your competitor's platform is missing.",
        "cta": "Try Free for 14 Days"
      },
      {
        "hook": "What if your clients could just take a photo of their food… and the app did everything else?",
        "body": "BEPRIME's AI recognizes the meal, calculates every nutrient, and logs it automatically. No manual counting. No forgotten meals. Just perfect nutrition data — every time.",
        "cta": "See the AI in Action"
      },
      {
        "hook": "Your coaching platform is making you slow. Here's proof.",
        "body": "BEPRIME coaches create client profiles in 30 seconds. Build programs in under a minute. Send them instantly to any device. Track every metric that matters — automatically. The question isn't whether you can afford to switch. It's whether you can afford not to.",
        "cta": "Start Free — Get Faster Today"
      }
    ],
    "google_search": [
      {
        "headline": "BEPRIME — #1 AI Coaching Platform",
        "description": "10x faster than Trainerize. AI meal recognition. Sleep & recovery tracking. Try free for 14 days."
      },
      {
        "headline": "Best Personal Training Software 2026",
        "description": "BEPRIME: AI-powered, lightning-fast, complete lifestyle tracking. The coaching platform that does everything."
      }
    ]
  },

  "micro_copy": {
    "empty_states": {
      "no_clients": "Your coaching empire starts with one client. Add your first one now.",
      "no_programs": "Your first masterpiece awaits. Create a program in 60 seconds.",
      "no_meals_logged": "No meals tracked yet today. A quick photo is all it takes.",
      "no_sleep_logged": "How did you sleep? Log it now to complete your recovery picture."
    },
    "success_messages": {
      "client_created": "New client added. Time to change their life. 💪",
      "program_sent": "Program delivered instantly. Your client is ready to crush it.",
      "meal_scanned": "Meal recognized! Full nutrition breakdown ready.",
      "assessment_complete": "Assessment logged. Compare it to previous ones anytime."
    },
    "notification_messages": {
      "follow_up_sent": "BEPRIME sent a follow-up to [Client Name] — they missed 2 sessions this week.",
      "low_recovery": "[Client Name]'s recovery score is low. Consider a lighter session tomorrow.",
      "milestone_hit": "[Client Name] just hit their weight goal! 🎉 Time to celebrate.",
      "assessment_due": "[Client Name]'s bi-weekly assessment is due. BEPRIME already sent the reminder."
    }
  }
}
