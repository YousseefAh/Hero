'use client';

import { useEffect } from 'react';
import { content } from '@/data/content';
import Image from 'next/image';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ContinuousShowcase = () => {
  const { title, description, images: showcaseImages } = content.continuousShowcase;

  useEffect(() => {
    const swiper = new Swiper('.continuous-showcase-swiper', {
      modules: [Autoplay],
      slidesPerView: 'auto',
      spaceBetween: 30,
      speed: 10000,
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
    <section className="w-full bg-black min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden">
      <div className="container mx-auto px-4 pt-20">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
          {title}
        </h2>
        <p className="text-center text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          {description}
        </p>
      </div>
      
      <div className="continuous-showcase-swiper w-full">
        <div className="swiper-wrapper">
          {[...showcaseImages, ...showcaseImages, ...showcaseImages].map((image, index) => (
            <div 
              key={index} 
              className="swiper-slide w-[200px] sm:w-[250px] md:w-[320px] lg:w-[400px] xl:w-[450px] aspect-video rounded-lg md:rounded-2xl overflow-hidden bg-gray-800 transition-all duration-300"
            >
              <div className="relative h-full w-full group">
                {image.isLocal ? (
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover object-center"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
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
//one
export default ContinuousShowcase; 