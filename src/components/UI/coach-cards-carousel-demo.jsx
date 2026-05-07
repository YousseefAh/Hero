"use client";

import React from "react";
import { content } from '@/data/content';
import { Carousel, Card } from "@/components/UI/apple-cards-carousel";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CoachCardsCarouselDemo() {
  const { t } = useLanguage();
  const showcaseData = content.coachShowcase;
  
  const cards = showcaseData.images.map((img, index) => {
    // Map the CoachShowcase image format to the AppleCardsCarousel Card format
    const cardData = {
      category: "لوحة التحكم",
      title: img.title,
      src: img.url,
      content: {
        title: img.title,
        description: img.description,
        image: { src: img.url, alt: img.title }
      }
    };
    return <Card key={img.url} card={cardData} index={index} />;
  });

  return (
    <div className="w-full h-full py-20">
      <div className="max-w-7xl px-4 mx-auto mb-10">
        <h2 className="text-xl md:text-5xl font-bold text-primary-500 font-sans transition-colors duration-300">
          {showcaseData.title}<span className="text-accent-500">.</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-primary-600 max-w-4xl">
          {showcaseData.description}
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
