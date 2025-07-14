'use client';

import { useEffect, useState } from 'react';
import { content } from '@/data/content';
import Image from 'next/image';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ContinuousShowcase = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { title, description, images: showcaseImages } = content.continuousShowcase;

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = showcaseImages.map((image) => {
        return new Promise((resolve, reject) => {
          const img = document.createElement('img');
          img.src = image.isLocal ? `${window.location.origin}${image.url}` : image.url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const swiper = new Swiper('.continuous-showcase-swiper', {
      modules: [Autoplay],
      slidesPerView: 'auto',
      spaceBetween: 15,
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
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <section className="w-full bg-gray-900 min-h-screen flex items-center">
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-center text-4xl md:text-6xl font-bold text-white mb-6">
            Knowledge and Insight
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Loading amazing content...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-black min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
          {title}
        </h2>
        <p className="text-center text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          {description}
        </p>
      </div>
      
      <div className="continuous-showcase-swiper h-full w-full">
        <div className="swiper-wrapper">
          {[...showcaseImages, ...showcaseImages, ...showcaseImages].map((image, index) => (
            <div 
              key={index} 
              className="swiper-slide h-full w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[600px] rounded-lg md:rounded-2xl overflow-hidden bg-gray-800 transition-all duration-300"
            >
              <div className="relative h-full w-full group">
                {image.isLocal ? (
                  <Image 
                    src={image.url}
                    alt={image.title}
                    fill
                    priority={index < 6}
                    className="object-cover"
                    sizes="(min-width: 1280px) 600px, (min-width: 1024px) 550px, (min-width: 768px) 450px, (min-width: 640px) 350px, 280px"
                  />
                ) : (
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
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