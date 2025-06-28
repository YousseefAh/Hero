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
      url: '/my-images/758_1x_shots_soo.png', // High quality image (2.1MB)
      title: 'Creative Design',
      description: 'Innovative design solutions for modern challenges',
      isLocal: true
    },
    {
      url: '/my-images/22_1x_shots_so.png', // High quality image (2.2MB)
      title: 'Modern Architecture',
      description: 'Contemporary architectural masterpieces',
      isLocal: true
    },
    {
      url: '/my-images/437_1x_shots_so.png', // Good quality (1.7MB)
      title: 'Digital Innovation',
      description: 'Pushing boundaries in digital space',
      isLocal: true
    },
    {
      url: '/my-images/708_1x_shots_so.png', // Nice balanced image (1.2MB)
      title: 'User Experience',
      description: 'Crafting seamless user interactions',
      isLocal: true
    },
    {
      url: '/my-images/167_1x_shots_so.png', // Good size (1.2MB)
      title: 'Visual Storytelling',
      description: 'Compelling visual narratives',
      isLocal: true
    },
    {
      url: '/my-images/785_1x_shots_so.png', // Well balanced (1MB)
      title: 'Creative Solutions',
      description: 'Innovative approaches to design challenges',
      isLocal: true
    },
    {
      url: '/my-images/226_1x_shots_so.png', // Good quality (991KB)
      title: 'Design Systems',
      description: 'Cohesive and scalable design frameworks',
      isLocal: true
    },
    {
      url: '/my-images/369_1x_shots_so.png', // Detailed image (989KB)
      title: 'Technical Excellence',
      description: 'Precision in every pixel',
      isLocal: true
    },
    {
      url: '/my-images/904_1x_shots_so.png', // Clear quality (942KB)
      title: 'Product Design',
      description: 'From concept to reality',
      isLocal: true
    },
    {
      url: '/my-images/690_1x_shots_so.png', // Good resolution (962KB)
      title: 'Creative Direction',
      description: 'Leading through design innovation',
      isLocal: true
    }
  ];

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
                {image.isLocal ? (
                  // Local images use Next.js Image component
                  <Image 
                    src={image.url}
                    alt={image.title}
                    fill
                    priority={index < 6} // Prioritize loading first set of images
                    className="object-cover"
                    sizes="500px"
                  />
                ) : (
                  // External URLs use regular img tag
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                )}
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