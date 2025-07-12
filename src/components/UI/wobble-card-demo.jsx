"use client";

import React from "react";
import { WobbleCard } from "@/components/UI/wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-primary-600 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white transition-colors duration-300">
            Connect with top creators worldwide
          </h2>
          <p className="mt-4 text-left text-base/6 text-primary-50 transition-colors duration-300">
            With over 300 verified creators and 12.1k active users, Yadora is the most 
            trusted platform for fantasy sports insights and creator content.
          </p>
        </div>
        <img
          src="/dashboard.webp"
          width={500}
          height={500}
          alt="Yadora dashboard interface"
          className="absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-accent-600">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white transition-colors duration-300">
          Premium insights at your fingertips.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-primary-50 transition-colors duration-300">
          Get exclusive fantasy reports, coaching sessions, and direct access to your favorite creators.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-primary-700 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white transition-colors duration-300">
            Start your creator journey today with Yadora's powerful platform
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-primary-50 transition-colors duration-300">
            Join thousands of creators who have already built their communities and monetized their expertise through our innovative platform.
          </p>
        </div>
        <img
          src="/dashboard.webp"
          width={500}
          height={500}
          alt="Creator dashboard features"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
} 