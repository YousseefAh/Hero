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
      <div className="relative justify-items-center grid m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-8 md:py-16 max-w-[90rem] h-auto aspect-[2/1]">
        {!showVideo ? (
          <div onClick={handleImageClick} className="cursor-pointer w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="block w-full h-full object-contain rounded-lg"
            />
          </div>
        ) : (
          <div className="aspect-video w-full h-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
