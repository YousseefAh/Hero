"use client";

import React from "react";
import { WobbleCard } from "@/components/UI/wobble-card";
import { content } from '@/data/content';

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-primary-600 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white transition-colors duration-300">
            {content.whyChooseYadora.cards[0].heading}
          </h2>
          <p className="mt-4 text-left text-base/6 text-primary-50 transition-colors duration-300">
            {content.whyChooseYadora.cards[0].text}
          </p>
        </div>
        <img
          src="/dashboard.webp"
          width={500}
          height={500}
          alt={content.whyChooseYadora.cards[0].imageAlt}
          className="absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-accent-600">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white transition-colors duration-300">
          {content.whyChooseYadora.cards[1].heading}
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-primary-50 transition-colors duration-300">
          {content.whyChooseYadora.cards[1].text}
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-primary-700 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white transition-colors duration-300">
            {content.whyChooseYadora.cards[2].heading}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-primary-50 transition-colors duration-300">
            {content.whyChooseYadora.cards[2].text}
          </p>
        </div>
        <img
          src="/dashboard.webp"
          width={500}
          height={500}
          alt={content.whyChooseYadora.cards[2].imageAlt}
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
} 