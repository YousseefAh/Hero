import { useState } from 'react';
import Image from "next/image";
import { content } from '@/data/content';

function Dashboard() {
  const { image, videoId } = content.dashboard;
  const [showVideo, setShowVideo] = useState(false);

  const handleImageClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="relative">
      <div className="bottom-0 -z-10 absolute bg-primary-500 w-full h-1/2" />
      <div 


        className="relative justify-items-center grid m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-8 md:py-16 max-w-[90rem] h-auto aspect-video cursor-pointer"
        onClick={handleImageClick}
      >
        {!showVideo && (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="block w-full h-full object-contain rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </>
        )}
        {showVideo && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&controls=0&showinfo=0&fs=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-lg object-cover"
        ></iframe>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
