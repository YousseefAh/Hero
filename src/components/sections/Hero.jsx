import { reviewImgs } from "utils/constants";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="pt-24 md:pt-28 sm:pb-8 md:pb-16">
      <div className="flex flex-nowrap justify-between md:gap-x-24 lg:gap-x-14">
        <div className="max-w-[50rem]">
          <h1 className="mb-16 sm:mb-4 font-bold text-3xl text-primary-500 sm:text-4xl md:text-5xl/[3.5rem] lg:text-6xl/[4rem] xl:text-7xl/[5rem] tracking-tight">
            Learn from your favorite creators about{" "}
            <span className="bg-clip-text bg-gradient-to-t from-accent-500 to-accent-200 text-transparent">
              fantasy reports
            </span>
          </h1>
          <div className="flex flex-col gap-6">
            <div className="flex sm:flex-row flex-col items-start sm:items-center gap-4">
              <ul className="flex">
                {reviewImgs.map((headshot) => (
                  <li className="-mr-4 last:-mr-0" key={headshot.id}>
                    <Image
                      src={headshot.image}
                      alt={headshot.name}
                      width={48}
                      height={48}
                      className="border-4 border-white rounded-full h-10 w-10 sm:h-12 sm:w-12"
                    />
                  </li>
                ))}
              </ul>
              <p className="font-medium text-primary-500 sm:text-lg">
                <span className="font-bold text-accent-500">5000+</span> satisfied
                clients in 2024
              </p>
            </div>
            <Link 
              href="/explore" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-accent-500 border border-transparent rounded-md hover:bg-accent-600 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Explore Features
            </Link>
          </div>
        </div>
        <figure>
          <div className="lg:flex justify-center items-center hidden xl:mr-8 rounded-full w-52 h-52 outline outline-1 outline-primary-500">
            <div className="flex flex-col justify-center items-center bg-primary-500 rounded-full w-44 h-44">
              <p className="font-bold text-5xl text-white">1:1</p>
              <p className="font-bold text-white text-xl">Service</p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
