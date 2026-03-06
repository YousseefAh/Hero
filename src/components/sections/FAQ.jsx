"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { motion, AnimatePresence } from "motion/react";

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-primary-500/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-right"
      >
        <span className={`font-bold text-lg md:text-xl tracking-tight transition-colors duration-200 ${isOpen ? 'text-accent-500' : 'text-primary-500'}`}>
          {question}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-6 text-accent-500 flex-shrink-0 mr-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-primary-300 text-lg leading-relaxed text-right">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const { title, items } = content.faq;
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-16 max-w-[90rem]">
      <h2 className="text-center font-bold text-[2rem]/[2.5rem] text-primary-500 md:text-5xl xl:text-[3.5rem]/[4rem] tracking-tight mb-12">
        {title}
      </h2>
      <div className="max-w-3xl mx-auto">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
