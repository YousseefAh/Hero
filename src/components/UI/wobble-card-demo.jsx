"use client";

import React from "react";
import { WobbleCard } from "@/components/UI/wobble-card";
import { content } from '@/data/content';

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">

      {/* Card 1 — wide: بتبني براند */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-bl from-accent-600 via-accent-500 to-blue-accent min-h-[280px]"
        className=""
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 h-full w-full">
          <div className="flex-1 text-right z-10">
            <h2 className="text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-primary-800">
              {content.whyChooseYadora.cards[0].heading}
            </h2>
            <p className="mt-4 text-base/6 text-primary-700">
              {content.whyChooseYadora.cards[0].text}
            </p>
          </div>
          <div className="w-full sm:w-[45%] lg:w-[40%] flex-shrink-0">
            <img
              src={content.whyChooseYadora.cards[0].imageSrc}
              alt={content.whyChooseYadora.cards[0].imageAlt}
              className="w-full h-44 sm:h-52 lg:h-60 object-contain rounded-xl drop-shadow-xl"
            />
          </div>
        </div>
      </WobbleCard>

      {/* Card 2 — small: عملائك بيبقوا */}
      <WobbleCard containerClassName="col-span-1 min-h-[220px] lg:min-h-[280px] bg-gradient-to-b from-blue-accent via-blue-accent to-cyan-accent">
        <h2 className="text-right text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          {content.whyChooseYadora.cards[1].heading}
        </h2>
        <p className="mt-4 text-right text-base/6 text-primary-50">
          {content.whyChooseYadora.cards[1].text}
        </p>
      </WobbleCard>

      {/* Card 3 — full width: بتعرف كل حاجة */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-primary-700 via-primary-600 to-blue-accent-dark min-h-[280px]">
        <div className="flex flex-col sm:flex-row-reverse items-center gap-6 h-full w-full">
          <div className="flex-1 text-right z-10">
            <h2 className="text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {content.whyChooseYadora.cards[2].heading}
            </h2>
            <p className="mt-4 text-base/6 text-primary-50">
              {content.whyChooseYadora.cards[2].text}
            </p>
          </div>
          <div className="w-full sm:w-[45%] lg:w-[36%] flex-shrink-0">
            <img
              src={content.whyChooseYadora.cards[2].imageSrc}
              alt={content.whyChooseYadora.cards[2].imageAlt}
              className="w-full h-44 sm:h-52 lg:h-60 object-contain rounded-xl drop-shadow-xl"
            />
          </div>
        </div>
      </WobbleCard>

    </div>
  );
}
