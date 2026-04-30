"use client";

import React from "react";
import { content } from '@/data/content';
import { Carousel, Card } from "@/components/UI/apple-cards-carousel";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AppleCardsCarouselDemo() {
  const { t } = useLanguage();
  const cardData = content.appleCarousel.cards;
  const cards = cardData.map((card, index) => {
    const translated = t.appleCarousel?.cards?.[index];
    const mergedCard = translated ? { ...card, ...translated } : card;
    return <Card key={card.src} card={mergedCard} index={index} />;
  });

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pr-4 mx-auto text-xl md:text-5xl font-bold text-primary-500 font-sans transition-colors duration-300">
        {t.appleCarousel?.title || content.appleCarousel.title}<span className="text-accent-500">.</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}