"use client";

import { useState } from "react";
import Toggle from "../../UI/Toggle";
import PricingCard from "./PricingCard";
import { pricingCards } from "../../../utils/constants";
import { content } from "@/data/content";

function Pricing() {
  const [paymentPlan, setPaymentPlan] = useState("monthly");
  const [sliderValue, setSliderValue] = useState(4);

  const { priceData, currency, priceGuarantee } = content.pricing;

  function handlePaymentPlanChange() {
    setPaymentPlan((plan) => (plan === "monthly" ? "annual" : "monthly"));
  }

  const currentPricePoint = priceData[sliderValue] || priceData[0];

  return (
    <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-8 max-w-[90rem]">
      <div className="flex flex-col items-center">
        <h2 className="mb-6 font-bold text-[2rem]/[2.5rem] text-primary-500 md:text-5xl xl:text-[3.5rem]/[4rem] tracking-tight">
          ابدأ النهاردة<span className="text-accent-500">.</span>
        </h2>

        {/* Client slider */}
        <div className="w-full max-w-md mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-primary-200 text-sm">عدد العملاء</span>
            <span className="font-display font-bold text-2xl text-accent-500">
              {currentPricePoint.clients} عميل
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={priceData.length - 1}
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-500 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(198,255,0,0.5)] [&::-webkit-slider-thumb]:cursor-pointer"
          />
          <div className="flex justify-between items-center mt-4">
            <span className="text-primary-200 text-sm">السعر الشهري</span>
            <span className="font-display font-bold text-3xl text-primary-500">
              {currentPricePoint.price.toLocaleString()} <span className="text-lg">{currency}</span>
            </span>
          </div>
          <p className="text-center text-accent-500 text-sm mt-2 font-medium">{priceGuarantee}</p>
        </div>

        <div className="flex items-center gap-x-4">
          <p className="text-primary-500 xl:text-lg tracking-tight">شهري</p>
          <Toggle
            handleToggle={handlePaymentPlanChange}
            toggleLabel="التبديل بين الخطط الشهرية والسنوية"
          />
          <p className="text-primary-500 xl:text-lg tracking-tight">سنوي</p>
        </div>

        <div className="gap-x-4 gap-y-4 grid grid-cols-1 pricing-break:grid-cols-2 xl:grid-cols-[32fr_34fr_32fr] my-10 lg:w-4/5 pricing-break:w-full xl:w-full">
          {pricingCards.map((card) => (
            <PricingCard
              card={card}
              key={card.program}
              paymentPlan={paymentPlan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
