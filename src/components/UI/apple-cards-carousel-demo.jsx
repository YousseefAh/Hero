"use client";

import React from "react";
import { content } from '@/data/content';
import { Carousel, Card } from "@/components/UI/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const { title, cards: cardData } = content.appleCarousel;
  const cards = cardData.map((card, index) => (
    <Card key={card.src} card={{ ...card, content: <DummyContent /> }} index={index} />
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

const DummyContent = () => {
  const { dummyContent } = content.appleCarousel;
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-white-shade p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-primary-500 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-primary-500">
                {dummyContent.boldText}
              </span>{" "}
              {dummyContent.text.replace(dummyContent.boldText, '')}
            </p>
            <img
              src={dummyContent.image.src}
              alt={dummyContent.image.alt}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg"
            />
          </div>
        );
      })}
    </>
  );
};