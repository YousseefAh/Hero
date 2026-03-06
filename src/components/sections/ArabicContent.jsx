import React from 'react';
import { content } from '@/data/content';

const ArabicContent = () => {
  const { sections } = content.arabicFeatures;

  return (
    <div dir="rtl" className="flex flex-col gap-y-8 text-right text-primary-500">
      {sections.map((item, index) => (
        <div key={index} className="border-r-4 border-accent-500 pr-6 hover:bg-accent-500/5 rounded-lg py-3 transition-colors">
          <h3 className="text-2xl font-bold mb-2 text-accent-400">{item.title}</h3>
          <p className="text-lg">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ArabicContent;
