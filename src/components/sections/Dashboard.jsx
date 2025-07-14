import Image from "next/image";
import { content } from '@/data/content';

function Dashboard() {
  const { image } = content.dashboard;
  return (
    <section className="relative">
      <div className="bottom-0 -z-10 absolute bg-primary-500 w-full h-1/2" />
      <div className="relative justify-items-center grid m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-8 md:py-16 max-w-[90rem] h-auto aspect-[2/1]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="block w-full h-full object-contain"
        />
      </div>
    </section>
  );
}

export default Dashboard;
