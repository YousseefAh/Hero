"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isMobile) {
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
    }
  });

  // Mobile scroll detection
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const sections = Array.from(ref.current?.querySelectorAll('[data-section]') || []);
      if (!sections.length) return;

      const viewportHeight = window.innerHeight;
      const containerTop = ref.current?.getBoundingClientRect().top || 0;

      let activeIndex = 0;
      let maxVisibility = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibilityRatio = visibleHeight / rect.height;

        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          activeIndex = index;
        }
      });

      setActiveCard(activeIndex);
    };

    const container = ref.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Also listen to window scroll for cases where the container is affected by viewport scroll
      window.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      container?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

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
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
    "linear-gradient(to bottom right, #FFB84C, #FFCD82)",
    "linear-gradient(to bottom right, #e6a644, #ffc670)",
    "linear-gradient(to bottom right, #8b5cf6, #a78bfa)",
    "linear-gradient(to bottom right, #ef4444, #f87171)",
    "linear-gradient(to bottom right, #06b6d4, #67e8f9)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      style={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex flex-col lg:flex-row min-h-screen lg:h-[30rem] lg:justify-center lg:space-x-10 overflow-y-auto p-4 sm:p-6 lg:p-10"
      ref={ref}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Text Content */}
      <div className="relative flex items-start px-2 lg:px-4 w-full lg:w-auto">
        <div className="w-full max-w-full lg:max-w-3xl">
          {content.map((item, index) => (
            <div 
              key={item.title + index} 
              data-section={index} 
              className={cn(
                'py-8 sm:py-12 lg:py-32',
                'min-h-[60vh] lg:min-h-0',
                'flex flex-col justify-center'
              )}
            >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-100 mb-2 lg:mb-8">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2 lg:mt-10 max-w-full lg:max-w-2xl text-slate-300 leading-relaxed">
                {item.description}
              </p>
              
              {/* Mobile Image */}
              <div className="block lg:hidden mt-4">
                <div className="h-48 sm:h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg">
                  <div className="h-full w-full">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="h-16 lg:h-96" />
        </div>
      </div>
      
      {/* Desktop Sticky Image Container */}
      <div
        className={cn(
          "sticky top-10 hidden lg:block h-[85vh] w-full lg:w-[45%] xl:w-[50%] overflow-hidden rounded-lg bg-gray-900 shadow-2xl",
          contentClassName,
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ 
            duration: 0.5, 
            ease: "easeInOut",
            opacity: { duration: 0.3 }
          }}
          className="h-full w-full"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.div>
  );
}; 