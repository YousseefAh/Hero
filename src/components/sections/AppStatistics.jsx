import Image from "next/image";
import { RxCaretRight } from "react-icons/rx";
import { content } from '@/data/content';

function AppStatistics() {
  const { title1, title2, marketplaceText, images, stats } = content.appStatistics;
  return (
    <section className="bg-primary-500 -mt-[1px]">
      <div className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-24 xl:gap-y-28 m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-10 md:pt-16 pb-16 sm:pb-24 md:pb-32 max-w-[90rem]">
        <div>
          <h2 className="bg-clip-text bg-gradient-to-t from-accent-500 to-accent-200 sm:font-bold text-3xl text-transparent sm:text-4xl md:text-5xl/[3.5rem] lg:text-6xl/[4.6rem] xl:text-7xl/[5.6rem] tracking-tight">
            {title1}
          </h2>
          <h2 className="sm:font-bold text-3xl text-white sm:text-4xl md:text-5xl/[3.5rem] lg:text-6xl/[4rem] xl:text-7xl/[5rem] tracking-tight">
            {title2}
          </h2>
        </div>
        <div className="gap-x-4 gap-y-4 md:gap-x-5 lg:gap-x-7 xl:gap-x-9 grid grid-cols-1 sm:grid-cols-3">
          {images.map((img) => (
            <div
              className="group relative mx-auto aspect-[4/3] w-full h-full"
              key={img.id}
            >
              <p className="group-hover:visible top-0 right-0 bottom-0 left-0 absolute bg-primary-800 bg-opacity-40 opacity-0 group-hover:opacity-100 px-6 py-8 text-sm text-white lg:text-lg tracking-tight transition-all duration-200 invisible z-10">
                {img.description}
              </p>
              <Image
                key={img.name}
                alt={img.name}
                src={img.image}
                fill
                className="rounded-xl md:rounded-2xl object-cover"
              />
              <p className="bottom-6 md:bottom-8 left-4 md:left-6 absolute bg-white bg-opacity-20 opacity-100 group-hover:opacity-0 backdrop-blur-sm px-2 py-1 rounded-lg text-sm text-white lg:text-base xl:text-lg transition-all duration-200 group-hover:invisible z-10">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between items-end gap-x-4 sm:gap-x-8 pl-[20px]">
          <ul className="flex flex-row gap-4 sm:gap-8 lg:gap-16 xl:gap-24">
            {stats.map((stat) => (
              <li key={stat.id}>
                <p className="font-bold text-2xl sm:text-[2.5rem]/[3rem] text-accent-500 text-center sm:text-left md:text-5xl lg:text-6xl xl:text-7xl/[5rem] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[2rem]/[2.5rem] text-white text-center sm:text-left">
                  {stat.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex items-end gap-2 sm:gap-4 md:gap-6">
            <p className="text-sm sm:text-lg text-white md:text-xl lg:text-2xl xl:text-[2rem]/[2.5rem]">
              {marketplaceText.split(' ').slice(0, 2).join(' ')} <br className="sm:block hidden" /> {marketplaceText.split(' ').slice(2).join(' ')}
            </p>
            <button
              aria-label="Explore the marketplace"
              className="group flex justify-center items-center bg-gradient-to-t from-accent-500 to-accent-200 mb-1 rounded-full w-6 h-6 sm:w-8 sm:h-8 lg:w-16 lg:h-16 transition-all duration-200"
            >
              <RxCaretRight className="group-hover:text-white w-8 h-8 sm:w-12 sm:h-12 text-primary-500 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppStatistics;
