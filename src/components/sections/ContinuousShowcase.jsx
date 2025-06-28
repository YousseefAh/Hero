'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ContinuousShowcase = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const showcaseImages = [
    {
      url: '/testimonials/testimonial-1.webp',
      title: 'Expert Guidance',
      description: 'Learn from industry professionals'
    },{
      url: '/testimonials/testimonial-1.webp',
      // title: 'Expert Guidance',
      // description: 'Learn from industry professionals'
    },
    {
      url: '/testimonials/testimonial-2.webp',
      title: 'Community Support',
      description: 'Connect with like-minded learners'
    },
    {
      url: '/testimonials/testimonial-3.webp',
      title: 'Hands-on Practice',
      description: 'Apply your knowledge in real projects'
    },
    {
      url: '/testimonials/testimonial-4.webp',
      title: 'Flexible Learning',
      description: 'Learn at your own pace'
    },
    {
      url: '/testimonials/testimonial-5.webp',
      title: 'Career Growth',
      description: 'Advance your professional journey'
    },
    {
      url: '/testimonials/testimonial-6.webp',
      title: 'Proven Results',
      description: 'Success stories from our students'
    }
  ];

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = showcaseImages.map((image) => {
        return new Promise((resolve, reject) => {
          const img = document.createElement('img');
          img.src = image.url;
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
      spaceBetween: 30,
      speed: 8000,
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
      <section className="w-full bg-gray-900 py-20 overflow-hidden">
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
    <section className="w-full bg-gray-900 py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-center text-4xl md:text-6xl font-bold text-white mb-6">
          Knowledge and Insight
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Explore our comprehensive features and tools designed to enhance your experience
        </p>
      </div>
      
      <div className="continuous-showcase-swiper h-[600px] w-full">
        <div className="swiper-wrapper">
          {/* Triple the slides for smoother infinite loop */}
          {[...showcaseImages, ...showcaseImages, ...showcaseImages].map((image, index) => (
            <div 
              key={index} 
              className="swiper-slide !w-[500px] rounded-2xl overflow-hidden bg-gray-800 transition-transform duration-500"
              style={{ width: '500px' }} // Force width for better performance
            >
              <div className="relative h-full w-full group">
                <Image 
                  src={image.url}
                  alt={image.title}
                  fill
                  priority={index < 6} // Prioritize loading first set of images
                  className="object-cover"
                  sizes="500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-lg text-gray-300">
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

export default ContinuousShowcase; 