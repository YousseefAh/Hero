"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0, cardWidth = 320 }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const gap = isMobile() ? 4 : 8; // This might be pixel gaps or tailwind units, actually gap-4 is 16px.
      // But the original code was (cardWidth + gap) * (index + 1)
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return typeof window !== 'undefined' && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full" dir="ltr">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth pt-4 pb-16 [scrollbar-width:none] md:pt-8 md:pb-24"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          />

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-4">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 disabled:opacity-50 hover:bg-accent-400 hover:shadow-glow-green transition-all duration-200"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-primary-800" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 disabled:opacity-50 hover:bg-accent-400 hover:shadow-glow-green transition-all duration-200"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-primary-800" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
  cardWidth = 320,
  aspectRatio = "4/5",
  className,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-6xl rounded-[2.5rem] md:rounded-[3rem] bg-white p-6 font-sans md:p-12 shadow-2xl"
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 md:top-8 md:right-8 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-primary-100/80 hover:bg-primary-200 transition-colors shadow-sm"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-primary-800" />
              </button>

              {/* Header Text */}
              <div className="mb-8 md:mb-12 max-w-4xl pt-4">
                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-sm md:text-base font-bold text-accent-500 uppercase tracking-widest mb-3"
                >
                  {card.category}
                </motion.p>
                <motion.p
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="text-3xl md:text-5xl font-black text-primary-800 leading-[1.2]"
                >
                  {card.title}
                </motion.p>
                {card.content?.description && (
                  <p className="mt-4 text-lg md:text-xl text-primary-500 leading-relaxed max-w-3xl">
                    {card.content.description}
                  </p>
                )}
              </div>

              {/* Huge Image Showcase */}
              <div className="relative w-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] bg-primary-50/50 border border-black/5">
                <img
                  src={card.content?.image?.src || card.src}
                  alt={card.title}
                  className="w-full h-auto object-cover max-h-[80vh] md:max-h-[85vh] scale-[1.02]"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className={cn("relative z-10 flex flex-col items-start justify-start overflow-hidden rounded-3xl bg-primary-300 shrink-0", className)}
        style={{ width: cardWidth, aspectRatio: aspectRatio }}
      >
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover scale-[1.03]"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    // Handle already-cached images (onLoad won't fire)
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setLoading(false);
    }
    // Fallback: force visible after 3s no matter what
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <img
      ref={imgRef}
      className={cn(
        "h-full w-full transition-opacity duration-500 ease-out",
        isLoading ? "opacity-0" : "opacity-100",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width || 640}
      height={height || 800}
      loading="eager"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
}; 