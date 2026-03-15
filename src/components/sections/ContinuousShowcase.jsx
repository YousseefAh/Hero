'use client';

import { content } from '@/data/content';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';

const MARQUEE_IMAGES = [
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/animated-testimonials.webp',
  'https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png',
  'https://assets.aceternity.com/github-globe.png',
  'https://assets.aceternity.com/glare-card.png',
  'https://assets.aceternity.com/layout-grid.png',
  'https://assets.aceternity.com/flip-text.png',
  'https://assets.aceternity.com/hero-highlight.png',
  'https://assets.aceternity.com/carousel.webp',
  'https://assets.aceternity.com/placeholders-and-vanish-input.png',
  'https://assets.aceternity.com/shooting-stars-and-stars-background.png',
  'https://assets.aceternity.com/signup-form.png',
  'https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png',
  'https://assets.aceternity.com/spotlight-new.webp',
  'https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png',
  'https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png',
  'https://assets.aceternity.com/tabs.png',
  'https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png',
  'https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png',
  'https://assets.aceternity.com/glowing-effect.webp',
  'https://assets.aceternity.com/hover-border-gradient.png',
  'https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png',
  'https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png',
  'https://assets.aceternity.com/macbook-scroll.png',
  'https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png',
  'https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png',
  'https://assets.aceternity.com/multi-step-loader.png',
  'https://assets.aceternity.com/vortex.png',
  'https://assets.aceternity.com/wobble-card.png',
  'https://assets.aceternity.com/world-map.webp',
];

const ContinuousShowcase = () => {
  const { title, description } = content.continuousShowcase;

  // Photo carousel commented out – keeping only title and description
  // useEffect(() => {
  //   const swiper = new Swiper('.continuous-showcase-swiper', {
  //     modules: [Autoplay],
  //     slidesPerView: 'auto',
  //     spaceBetween: 30,
  //     speed: 10000,
  //     autoplay: {
  //       delay: 1,
  //       disableOnInteraction: false,
  //     },
  //     loop: true,
  //     loopAdditionalSlides: 4,
  //     allowTouchMove: false,
  //     grabCursor: false,
  //     watchSlidesProgress: true,
  //     freeMode: {
  //       enabled: true,
  //       momentum: false,
  //     },
  //     slideToClickedSlide: false,
  //     preventInteractionOnTransition: true,
  //     updateOnWindowResize: true,
  //     observer: true,
  //     observeParents: true
  //   });
  //   return () => {
  //     if (swiper) swiper.destroy();
  //   };
  // }, []);

  return (
    <section className="w-full bg-gradient-to-b from-primary-700 via-primary-600 to-primary-700 py-20 flex flex-col items-center justify-center relative overflow-x-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
          {title}
        </h2>
        <p className="text-center text-base md:text-lg text-primary-50 max-w-3xl mx-auto mb-8">
          {description}
        </p>
      </div>

      <div className="mx-auto my-10 w-full max-w-7xl px-4 rounded-3xl bg-primary-500/10 p-2 ring-1 ring-primary-400/20">
        <ThreeDMarquee images={MARQUEE_IMAGES} />
      </div>

      {/* Photo carousel commented out
      <div className="continuous-showcase-swiper w-full">
        <div className="swiper-wrapper">
          {[...showcaseImages, ...showcaseImages, ...showcaseImages].map((image, index) => (
            <div
              key={index}
              className="swiper-slide w-[200px] sm:w-[250px] md:w-[320px] lg:w-[400px] xl:w-[450px] aspect-video rounded-lg md:rounded-2xl overflow-hidden bg-primary-500 transition-all duration-300"
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
                    <p className="text-sm md:text-base text-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      */}
    </section>
  );
};
//one
export default ContinuousShowcase; 