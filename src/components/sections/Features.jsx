import { content } from '@/data/content';
import Image from "next/image";

function Features() {
  const { title, description, buttonText, list } = content.features;
  return (
    <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-14 sm:pt-20 md:pt-32 pb-16 md:pb-24 max-w-[90rem]">
      <div className="gap-y-16 md:gap-y-24 grid lg:grid-cols-2">
        <div className="w-[90%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[65%] mx-auto lg:mx-0 text-center lg:text-left">
          <h3 className="text-center inline-block mb-2 sm:mb-4 font-bold text-[2rem]/[2.5rem] text-primary-500 sm:text-4xl md:text-5xl xl:text-[3.5rem]/[4rem] tracking-tight">
            {title}
          </h3>
          <p className="mb-8 md:mb-10 xl:text-lg tracking-tight">
            {description}
          </p>
          <a href={content.cta.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-center inline-block bg-primary-500 hover:bg-green-500 px-8 py-4 rounded-2xl text-white xl:text-lg tracking-tight transition-all duration-200">
            {buttonText}
          </a>
        </div>
        <ul className="flex flex-col items-center gap-y-12 sm:grid sm:justify-items-start sm:gap-x-8 md:gap-y-20 sm:grid-cols-2 sm:grid-rows-2">
          {list.map((feature) => (
            <li
              className="w-[80%] xl:w-5/6 text-center sm:text-start tracking-tight"
              key={feature.id}
            >
              <Image
                src={feature.icon}
                alt={feature.name}
                width={96}
                height={96}
                className="sm:place-self-start mb-6 w-24 md:w-auto h-24 md:h-auto place-self-center"
              />
              <h4 className="mb-2 font-bold text-2xl/8 text-primary-500">
                {feature.name}
              </h4>
              <p className="text-primary-500 xl:text-lg tracking-tight">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
