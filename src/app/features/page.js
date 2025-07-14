"use client";
"use client";
import React from "react";
import { StickyScroll } from "@/components/UI/sticky-scroll-reveal";
import Link from "next/link";
import content from "../../data/content";

const { pageContent } = content.featuresPage;

// Transform the configurable content into the format needed by StickyScroll
const contentData = pageContent.map((item, index) => ({
  title: item.text,
  description: item.description,
  content: (
    <img
      src={item.img}
      className="h-full w-full object-cover"
      alt={item.text}
    />
  ),
}));

export default function FeaturesPage() {
  return (
    <>
      <Link 
        href="/" 
        className="fixed top-4 left-4 z-50 w-10 h-10 flex items-center justify-center opacity-40 hover:opacity-80 transition-all duration-200 active:scale-90 bg-black/10 rounded-full backdrop-blur-sm"
        aria-label="Back to home"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          className="w-6 h-6 text-white"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
      </Link>
      <StickyScroll content={content} />
    </>
  );
} 