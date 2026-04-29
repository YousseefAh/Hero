"use client";

import React from "react";
import { WobbleCard } from "@/components/UI/wobble-card";
import { content } from '@/data/content';

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">

      {/* Card 1 — wide: بتبني براند */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-bl from-accent-600 via-accent-500 to-blue-accent min-h-[300px] lg:min-h-[360px]"
        className=""
      >
        <div className="max-w-[55%] relative z-10 ml-auto">
          <h2 className="text-right text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-primary-800">
            {content.whyChooseYadora.cards[0].heading}
          </h2>
          <p className="mt-4 text-right text-base/6 text-primary-700">
            {content.whyChooseYadora.cards[0].text}
          </p>
        </div>
        <img
          src={content.whyChooseYadora.cards[0].imageSrc}
          alt={content.whyChooseYadora.cards[0].imageAlt}
          className="absolute left-0 bottom-0 w-[48%] max-w-[260px] h-auto object-contain rounded-tr-2xl"
        />
      </WobbleCard>

      {/* Card 2 — small: عملائك بيبقوا */}
      <WobbleCard containerClassName="col-span-1 min-h-[220px] lg:min-h-[360px] bg-gradient-to-b from-blue-accent via-blue-accent to-cyan-accent">
        <h2 className="text-right text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          {content.whyChooseYadora.cards[1].heading}
        </h2>
        <p className="mt-4 text-right text-base/6 text-primary-50">
          {content.whyChooseYadora.cards[1].text}
        </p>
      </WobbleCard>

      {/* Card 3 — full width: بتعرف كل حاجة */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-primary-700 via-primary-600 to-blue-accent-dark min-h-[300px] lg:min-h-[340px]">
        <div className="max-w-[55%] lg:max-w-sm relative z-10">
          <h2 className="text-right text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {content.whyChooseYadora.cards[2].heading}
          </h2>
          <p className="mt-4 text-right text-base/6 text-primary-50">
            {content.whyChooseYadora.cards[2].text}
          </p>
        </div>
        <img
          src={content.whyChooseYadora.cards[2].imageSrc}
          alt={content.whyChooseYadora.cards[2].imageAlt}
          className="absolute left-0 bottom-0 w-[42%] max-w-[340px] h-auto object-contain rounded-tr-2xl"
        />
      </WobbleCard>

    </div>
  );
}
