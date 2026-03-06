"use client";

import { content } from '@/data/content';
import { motion } from "motion/react";

function Hero() {
  const { title, title2, highlightedText } = content.hero;

  const words = title.split(" ");

  return (
    <section className="pt-24 md:pt-28 pb-8 md:pb-16">
      <div className="flex flex-nowrap justify-center">
        <div className="max-w-[50rem]">
          <h2 className="mb-16 sm:mb-4 font-bold text-3xl text-primary-500 sm:text-4xl md:text-5xl/[3.5rem] lg:text-6xl/[4rem] xl:text-7xl/[5rem] tracking-tight text-center">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="inline-block ml-2"
              >
                {word}
              </motion.span>
            ))}{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: words.length * 0.1, duration: 0.5 }}
              className="inline-block text-accent-500 drop-shadow-[0_0_20px_rgba(198,255,0,0.3)]"
            >
              {highlightedText}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (words.length + 1) * 0.1, duration: 0.5 }}
              className="inline-block ml-2"
            >
              {title2}
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (words.length + 2) * 0.1, duration: 0.6 }}
            className="text-center text-primary-200 text-lg md:text-xl mt-6"
          >
            BePrime بيحوّل شغلك لمنظومة احترافية كاملة — من البراندينج لحد ما العميل يجدد اشتراكه.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (words.length + 3) * 0.1, duration: 0.5 }}
            className="flex justify-center mt-8"
          >
            <a
              href={content.cta.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-500 text-primary-800 font-bold px-10 py-4 rounded-2xl text-lg hover:shadow-[0_0_30px_rgba(198,255,0,0.4)] transition-all duration-300 hover:scale-105"
            >
              ابدأ مجانًا — جهّز منظومتك في أقل من ٢٤ ساعة
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
