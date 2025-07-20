import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { content } from '@/data/content';

function Dashboard() {
  const { image, videoId } = content.dashboard;
  const [showVideo, setShowVideo] = useState(false);
  const playerRef = useRef(null);
  const videoContainerRef = useRef(null);

  const handleImageClick = () => {
    setShowVideo(true);
  };

  useEffect(() => {
    if (!showVideo) {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
      return;
    }

    const createPlayer = () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          controls: 0,
          showinfo: 0,
          fs: 0,
        },
        events: {
          onReady: (event) => event.target.playVideo(),
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = createPlayer;
    } else {
      createPlayer();
    }
  }, [showVideo, videoId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
          playerRef.current.pauseVideo();
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentRef = videoContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [showVideo]);

  return (
    <section className="relative">
      <div className="bottom-0 -z-10 absolute bg-primary-500 w-full h-1/2" />
      <div
        ref={videoContainerRef}
        className="relative justify-items-center grid m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-8 md:py-16 max-w-[90rem] h-auto aspect-video cursor-pointer"
        onClick={!showVideo ? handleImageClick : undefined}
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
        {showVideo && <div id="youtube-player" className="absolute inset-0 w-full h-full rounded-lg object-cover"></div>}
      </div>
    </section>
  );
}

export default Dashboard;
