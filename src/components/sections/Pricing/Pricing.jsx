"use client";

import { useState } from "react";
// import Toggle from "../../UI/Toggle"; // unused while سنوي is commented out
import PricingCard from "./PricingCard";
import { pricingCards } from "../../../utils/constants";
import { content } from "@/data/content";

function Pricing() {
  const [paymentPlan, setPaymentPlan] = useState("monthly");

  const { priceData, priceDataByProgram, currency, priceGuarantee } =
    content.pricing;

  const [planSliders, setPlanSliders] = useState({
    "بداية المشوار": 0,
    "المدرب الطموح": 2,
    "أسماك القرش": 8,
  });

  // function handlePaymentPlanChange() {
  //   setPaymentPlan((plan) => (plan === "monthly" ? "annual" : "monthly"));
  // }

  function handlePlanSliderChange(program, value) {
    setPlanSliders((prev) => ({
      ...prev,
      [program]: value,
    }));
  }

  return (
    <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-8 max-w-[90rem]">
      <div className="flex flex-col items-center">
        <h2 className="mb-6 font-bold text-[2rem]/[2.5rem] text-primary-500 md:text-5xl xl:text-[3.5rem]/[4rem] tracking-tight">
          ابدأ النهاردة<span className="text-accent-500">.</span>
        </h2>

        {/* Guarantee text kept under heading now that sliders moved into cards */}
        <p className="text-center text-accent-500 text-sm mt-2 font-medium">
          {priceGuarantee}
        </p>

        {/* سنوي (annual) commented out – pricing is monthly only */}
        <div className="flex items-center gap-x-4">
          {/* <p className="text-primary-500 xl:text-lg tracking-tight">سنوي</p>
          <Toggle
            handleToggle={handlePaymentPlanChange}
            toggleLabel="التبديل بين الخطط الشهرية والسنوية"
          /> */}
          <p className="text-primary-500 xl:text-lg tracking-tight">شهري</p>
        </div>

        <div className="gap-x-4 gap-y-4 grid grid-cols-1 pricing-break:grid-cols-2 xl:grid-cols-[32fr_34fr_32fr] my-10 lg:w-4/5 pricing-break:w-full xl:w-full">
          {pricingCards.map((card) => {
            const cardPriceData =
              priceDataByProgram[card.program] || priceData;

            return (
              <PricingCard
                card={card}
                key={card.program}
                paymentPlan={paymentPlan}
                sliderValue={planSliders[card.program]}
                onSliderChange={(value) =>
                  handlePlanSliderChange(card.program, value)
                }
                priceData={cardPriceData}
                currency={currency}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
