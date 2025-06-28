'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ExplorePage = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Autoplay],
      slidesPerView: 6,
      spaceBetween: 30,
      speed: 3000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      loop: true,
      allowTouchMove: false,
      freeMode: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 30
        }
      }
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  const logos = [
    {
      name: 'Google',
      url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    },
    {
      name: 'Microsoft',
      url: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'
    },
    {
      name: 'Apple',
      url: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg'
    },
    {
      name: 'Amazon',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    {
      name: 'Meta',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
    },
    {
      name: 'Netflix',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
    },
    {
      name: 'Tesla',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png'
    },
    {
      name: 'Samsung',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg'
    },
    {
      name: 'Intel',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg'
    },
    {
      name: 'IBM',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
    },
    {
      name: 'Oracle',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg'
    },
    {
      name: 'Cisco',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-16">
          Trusted by Leading Companies
        </h1>
        
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Double the slides for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="swiper-slide flex items-center justify-center h-24">
                <img 
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage; 