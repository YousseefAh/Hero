"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Extended color arrays for more variety
  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
    "#2d1b69", // purple
    "#221F26", // primary-700
    "#1a1a2e", // dark blue
    "#16213e", // navy
    "#2d1b69", // purple
  ];
  
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
    "linear-gradient(to bottom right, #FFB84C, #FFCD82)", // accent-500 to accent-200
    "linear-gradient(to bottom right, #e6a644, #ffc670)", // accent-600 to accent-300
    "linear-gradient(to bottom right, #8b5cf6, #a78bfa)", // violet-500 to violet-400
    "linear-gradient(to bottom right, #ef4444, #f87171)", // red-500 to red-400
    "linear-gradient(to bottom right, #06b6d4, #67e8f9)", // cyan-500 to cyan-300
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex flex-col lg:flex-row h-screen lg:h-[80vh] justify-center lg:space-x-10 overflow-y-auto p-4 sm:p-6 lg:p-10"
      ref={ref}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Text Content - Restored sticky scroll structure */}
      <div className="relative flex items-start px-2 lg:px-4">
        <div className="w-full max-w-full lg:max-w-3xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 sm:my-20 lg:my-32">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-slate-100 mb-4 lg:mb-8"
                transition={{ duration: 0.4 }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4 lg:mt-10 max-w-full lg:max-w-2xl text-slate-300 leading-relaxed"
                transition={{ duration: 0.4 }}
              >
                {item.description}
              </motion.p>
              
              {/* Mobile Image - Shows under each text section on mobile only */}
              <div className="block lg:hidden mt-6">
                <motion.div 
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="h-64 sm:h-80 w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg"
                  transition={{ duration: 0.4 }}
                >
                  <div className="h-full w-full">
                    {item.content}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
          <div className="h-32 lg:h-96" />
        </div>
      </div>
      
      {/* Desktop Sticky Image Container - Restored original sticky behavior */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden lg:block h-[60vh] xl:h-[70vh] w-full lg:w-80 xl:w-96 overflow-hidden rounded-lg bg-white shadow-2xl",
          contentClassName,
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full relative z-10"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.div>
  );
}; 