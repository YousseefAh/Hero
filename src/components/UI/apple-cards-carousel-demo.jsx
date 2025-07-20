"use client";

import React from "react";
import { content } from '@/data/content';
import { Carousel, Card } from "@/components/UI/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const { title, cards: cardData } = content.appleCarousel;
  const cards = cardData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-primary-500 font-sans transition-colors duration-300">
        {title}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}