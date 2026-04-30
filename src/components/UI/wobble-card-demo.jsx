"use client";

import React from "react";
import { WobbleCard } from "@/components/UI/wobble-card";
import { content } from '@/data/content';
import { useLanguage } from "@/contexts/LanguageContext";

export default function WobbleCardDemo() {
  const { t, isRTL } = useLanguage();
  const cards = t.whyChoose.cards;
  // Images come from content.js (non-translatable)
  const images = content.whyChooseYadora.cards;

  const textAlign = isRTL ? 'text-right' : 'text-left';
  const textPush = isRTL ? 'ml-auto' : 'mr-auto';
  const imgPosition = isRTL ? 'left-0' : 'right-0';
  const imgRound = isRTL ? 'rounded-tr-2xl' : 'rounded-tl-2xl';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">

      {/* Card 1 — wide */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-bl from-accent-600 via-accent-500 to-blue-accent min-h-[300px] lg:min-h-[360px]"
        className=""
      >
        <div className={`max-w-[55%] relative z-10 ${textPush}`}>
          <h2 className={`${textAlign} text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-primary-800`}>
            {cards[0].heading}
          </h2>
          <p className={`mt-4 ${textAlign} text-base/6 text-primary-700`}>
            {cards[0].text}
          </p>
        </div>
        <img
          src={images[0].imageSrc}
          alt={cards[0].heading}
          className={`absolute ${imgPosition} bottom-0 w-[48%] max-w-[260px] h-auto object-contain ${imgRound}`}
        />
      </WobbleCard>

      {/* Card 2 — small */}
      <WobbleCard containerClassName="col-span-1 min-h-[220px] lg:min-h-[360px] bg-gradient-to-b from-blue-accent via-blue-accent to-cyan-accent">
        <h2 className={`${textAlign} text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white`}>
          {cards[1].heading}
        </h2>
        <p className={`mt-4 ${textAlign} text-base/6 text-primary-50`}>
          {cards[1].text}
        </p>
      </WobbleCard>

      {/* Card 3 — full width */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-primary-700 via-primary-600 to-blue-accent-dark min-h-[300px] lg:min-h-[340px]">
        <div className="max-w-[55%] lg:max-w-sm relative z-10">
          <h2 className={`${textAlign} text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white`}>
            {cards[2].heading}
          </h2>
          <p className={`mt-4 ${textAlign} text-base/6 text-primary-50`}>
            {cards[2].text}
          </p>
        </div>
        <img
          src={images[2].imageSrc}
          alt={cards[2].heading}
          className={`absolute ${imgPosition} bottom-0 w-[42%] max-w-[340px] h-auto object-contain ${imgRound}`}
        />
      </WobbleCard>

    </div>
  );
}
