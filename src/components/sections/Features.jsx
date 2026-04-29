import { useState } from 'react';
import { content } from '@/data/content';
import Image from "next/image";

function Features() {
  const { title, description, buttonText, buttonHoverText, list } = content.features;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-14 sm:pt-20 md:pt-32 pb-16 md:pb-24 max-w-[90rem]">
      <div className="gap-y-16 md:gap-y-24 grid lg:grid-cols-2">
        <div className="w-[90%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[65%] mx-auto lg:mx-0 text-center lg:text-right">
          <h3 className="text-center inline-block mb-2 sm:mb-4 font-bold text-[2rem]/[2.5rem] text-primary-500 sm:text-4xl md:text-5xl xl:text-[3.5rem]/[4rem] tracking-tight">
            {title}
          </h3>
          <p className="mb-8 md:mb-10 xl:text-lg tracking-tight">
            {description}
          </p>
          <a
            href={content.cta.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center inline-block bg-accent-500 hover:bg-accent-400 px-8 py-4 rounded-2xl text-primary-800 font-bold xl:text-lg tracking-tight transition-all duration-300 min-h-[80px] flex items-center justify-center hover:shadow-[0_0_20px_rgba(198,255,0,0.3)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span style={{ display: 'inline-block', textAlign: 'center' }}>
              {buttonText}
              <span style={{ display: isHovered ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', marginTop: '4px' }}>
                <Image src="/socials/whatsapp.svg" alt="whatsapp" width={20} height={20} style={{ marginLeft: '8px' }} />
                {buttonHoverText}
              </span>
            </span>
          </a>
        </div>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12 md:gap-y-20">
          {list.map((feature) => (
            <li
              className="text-center sm:text-right tracking-tight hover:bg-accent-500/5 rounded-xl p-3 sm:p-4 transition-colors"
              key={feature.id}
            >
              <Image
                src={feature.icon}
                alt={feature.name}
                width={96}
                height={96}
                className="mx-auto sm:mx-0 mb-4 sm:mb-6 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
              />
              <h4 className="mb-1.5 sm:mb-2 font-bold text-lg sm:text-2xl/8 text-primary-500">
                {feature.name}
              </h4>
              <p className="text-primary-500 text-sm sm:text-base xl:text-lg tracking-tight">
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
