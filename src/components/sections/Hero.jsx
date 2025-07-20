import { reviewImgs } from "@/utils/constants";
import { content } from '@/data/content';
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const { title,title2, highlightedText, satisfiedClients, exploreButtonText, serviceDescription } = content.hero;
  return (
    <section className="pt-24 md:pt-28 pb-8 md:pb-16">
      <div className="flex flex-nowrap justify-center md:gap-x-24 lg:gap-x-14">
        <div className="max-w-[50rem]">
          <h2 className="mb-16 sm:mb-4 font-bold text-3xl text-primary-500 sm:text-4xl md:text-5xl/[3.5rem] lg:text-6xl/[4rem] xl:text-7xl/[5rem] tracking-tight text-center">
            {title}{" "}
            <span className="text-yellow-500">
              {`${highlightedText}`}
            </span>
            {` ${title2} `}
          </h2>
        </div>
        {/* <figure>
          <div className="lg:flex justify-center items-center hidden xl:mr-8 rounded-full w-52 h-52 outline outline-1 outline-primary-500">
            <div className="flex flex-col justify-center items-center bg-primary-500 rounded-full w-44 h-44">
              <p className="font-bold text-5xl text-white">{serviceDescription.mainText}</p>
              <p className="font-bold text-white text-xl">{serviceDescription.subText}</p>
            </div>
          </div>
        </figure> */}
      </div>
    </section>
  );
}

export default Hero;
