'use client';

import { useEffect } from 'react';
import { content } from '@/data/content';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const CoachShowcase = () => {
  const { title, description, images: showcaseImages } = content.coachShowcase;

  useEffect(() => {
    const swiper = new Swiper('.coach-showcase-swiper', {
      modules: [Autoplay],
      slidesPerView: 'auto',
      spaceBetween: 40,
      speed: 12000, // Slower speed for larger images to be readable
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      loop: true,
      loopAdditionalSlides: 4,
      allowTouchMove: false,
      grabCursor: false,
      watchSlidesProgress: true,
      freeMode: {
        enabled: true,
        momentum: false,
      },
      slideToClickedSlide: false,
      preventInteractionOnTransition: true,
      updateOnWindowResize: true,
      observer: true,
      observeParents: true
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <section className="w-full relative z-10 py-[10svh] overflow-x-hidden flex flex-col items-center justify-center">
      
      {/* Background glow to blend with Hero */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] opacity-[0.05]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(67,97,238,0.5) 0%, rgba(198,255,0,0.1) 50%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />

      <div className="container mx-auto px-4 mb-10 md:mb-16 relative z-10">
        <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-black text-black mb-4 md:mb-6">
          {title}
        </h2>
        <p className="text-center text-lg md:text-xl text-primary-600 max-w-4xl mx-auto">
          {description}
        </p>
      </div>
      
      <div className="coach-showcase-swiper w-full">
        <div className="swiper-wrapper flex items-center">
          {[...showcaseImages, ...showcaseImages].map((image, index) => (
            <div 
              key={index} 
              className="swiper-slide w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1000px] aspect-[4/3] md:aspect-[16/10] rounded-xl md:rounded-3xl overflow-hidden bg-primary-800 transition-all duration-500 shadow-2xl shadow-black/50 border border-white/5"
            >
              <div className="relative h-full w-full group">
                {image.isLocal ? (
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover object-top"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-500/20 border border-accent-500/30 backdrop-blur-md">
                      <span className="text-accent-400 font-bold text-sm tracking-wider uppercase">
                        Coach UI
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-3">
                      {image.title}
                    </h3>
                    <p className="text-base md:text-xl text-primary-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-2xl">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachShowcase; 
