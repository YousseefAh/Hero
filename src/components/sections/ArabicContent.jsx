import React from 'react';
import { content } from '@/data/content';

const ArabicContent = () => {
  const { sections } = content.arabicFeatures;

  return (
    <div dir="rtl" className="flex flex-col gap-y-8 text-right text-white">
      {sections.map((item, index) => (
        <div key={index}>
          <h3 className="text-2xl font-bold mb-2 text-accent-400">{item.emoji} {item.title}</h3>
          <p className="text-lg">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ArabicContent;
