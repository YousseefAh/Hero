'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ExplorePage = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Autoplay],
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 8000,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      loop: true,
      allowTouchMove: false,
      grabCursor: false,
      freeMode: {
        enabled: true,
        momentum: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  const showcaseImages = [
    {
      url: '/dashboard.webp',
      title: 'Interactive Dashboard',
      description: 'Powerful analytics at your fingertips'
    },
    {
      url: '/appStats/img-1.webp',
      title: 'Real-time Statistics',
      description: 'Monitor your performance live'
    },
    {
      url: '/appStats/img-2.webp',
      title: 'Advanced Analytics',
      description: 'Deep insights into your data'
    },
    {
      url: '/appStats/img-3.webp',
      title: 'Custom Reports',
      description: 'Tailored to your needs'
    },
    {
      url: '/reviews/img-1.webp',
      title: 'User Reviews',
      description: 'See what others are saying'
    },
    {
      url: '/reviews/img-2.webp',
      title: 'Community Feedback',
      description: 'Learn from your users'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-center text-4xl font-bold text-white mb-4">
          Explore Our Features
        </h1>
        <p className="text-center text-xl text-gray-400">
          Discover what makes our platform unique
        </p>
      </div>
      
      <div className="swiper h-[600px] w-full">
        <div className="swiper-wrapper">
          {/* Triple the slides for smoother infinite loop */}
          {[...showcaseImages, ...showcaseImages, ...showcaseImages].map((image, index) => (
            <div 
              key={index} 
              className="swiper-slide !w-[500px] rounded-2xl overflow-hidden bg-gray-800 transition-transform duration-500"
            >
              <div className="relative h-full w-full group">
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
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
    </div>
  );
};

export default ExplorePage; 