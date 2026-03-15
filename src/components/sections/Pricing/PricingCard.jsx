"use client";

import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { motion } from "motion/react";

function PricingCard({
  card,
  paymentPlan,
  sliderValue,
  onSliderChange,
  priceData,
  currency,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointerOnSlider, setIsPointerOnSlider] = useState(false);

  const handleMouseMove = (event) => {
    if (isPointerOnSlider) return;
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 25;
    const y = (clientY - (rect.top + rect.height / 2)) / 25;
    setMousePosition({ x, y });
  };

  const pclass = {
    container: card.primary ? "pb-12 lg:pb-14" : "pb-10 lg:my-2",
    bulletColor: card.primary ? "stroke-accent-500" : "stroke-white",
    cta: card.primary
      ? "bg-accent-500 text-primary-800 font-bold hover:shadow-[0_0_20px_rgba(198,255,0,0.4)]"
      : "bg-white text-primary-500 hover:bg-accent-500 hover:text-primary-800",
    ctaWrapper: card.primary
      ? "bg-gradient-to-b from-accent-500 to-accent-300 p-[.125rem] rounded-2xl drop-shadow-[0_0px_35px_rgba(198,255,0,0.20)] hover:drop-shadow-[0_0px_35px_rgba(198,255,0,0.35)]"
      : "",
  };

  const isStarter = card.program === "بداية المشوار";
  const isSharks = card.program === "أسماك القرش";
  const isAmbitious = card.program === "المدرب الطموح";

  const maxIndex = priceData ? priceData.length - 1 : 0;
  const clampedValue =
    maxIndex >= 0 ? Math.max(0, Math.min(sliderValue, maxIndex)) : 0;

  const currentPoint =
    !isStarter && priceData
      ? priceData[clampedValue] || priceData[0]
      : null;

  const basePrice =
    card.price[paymentPlan] === "Free"
      ? card.price[paymentPlan]
      : `${card.price[paymentPlan]}`;

  let effectivePrice = currentPoint?.price ?? null;

  if (
    effectivePrice != null &&
    paymentPlan === "annual" &&
    (isSharks || isAmbitious)
  ) {
    effectivePrice = effectivePrice * 12;
  }

  const price =
    card.price[paymentPlan] === "Free" || isStarter || !currentPoint
      ? basePrice
      : effectivePrice.toLocaleString();

  const paymentPlanText =
    card.price[paymentPlan] === "Free"
      ? ""
      : paymentPlan === "monthly"
        ? "ج.م / شهريًا"
        : "ج.م / سنويًا";

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering && !isPointerOnSlider
          ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale3d(1.02, 1.02, 1)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: "transform 0.15s ease-out",
      }}
      className={`bg-primary-500 px-8 pt-8 rounded-2xl relative overflow-hidden ${pclass.container}`}
    >
      {/* Absolutely positioned elements */}
      {card.primary && (
        <>
          <div className="top-0 left-0 z-10 absolute bg-gradient-to-b from-accent-500 to-accent-300 py-[.125rem] rounded-tl-2xl rounded-br-2xl">
            <p className="bg-accent-500 px-4 py-2 rounded-tl-xl rounded-br-2xl text-xs text-primary-800 font-bold">
              الأكثر شعبية
            </p>
          </div>
          <div className="right-[-20%] absolute bg-gradient-to-r from-accent-500/20 to-transparent blur-2xl rounded-[50%] w-[30rem] h-28 -rotate-45 pointer-events-none" />
          <div className="top-[30%] right-[30%] absolute bg-gradient-to-r from-blue-accent/20 to-transparent blur-2xl rounded-[50%] w-[30rem] h-28 -rotate-45 pointer-events-none" />
        </>
      )}

      <p className="opacity-80 mb-12 px-6 py-2 border rounded-2xl max-w-min text-sm text-white whitespace-nowrap">
        {card.program}
      </p>
      {!isStarter && currentPoint && (
        <div
          className="mb-4"
          onMouseEnter={() => setIsPointerOnSlider(true)}
          onMouseLeave={() => setIsPointerOnSlider(false)}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-primary-50 text-xs">عدد العملاء</span>
            <span className="font-display font-semibold text-accent-500 text-sm">
              {currentPoint.clients} عميل
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={priceData.length - 1}
            value={clampedValue}
            onChange={(e) => onSliderChange(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gradient-to-l from-accent-500 via-accent-500/60 to-blue-accent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-500 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(198,255,0,0.5)] [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>
      )}
      <div className="flex items-end gap-x-2 mb-2">
        <p className="font-display font-bold text-4xl text-white md:text-5xl xl:text-[3.5rem]/[4rem] tracking-tight">
          {price}
        </p>
        <span className="opacity-50 mb-1 xl:mb-2 text-white">
          {paymentPlanText || currency}
        </span>
      </div>
      <p className="text-white">{card.subheading}</p>
      <ul className="flex flex-col gap-y-3 sm:gap-y-4 my-10">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-x-2">
            <CiCircleCheck
              className={`w-6 h-6 text-white stroke-1 ${pclass.bulletColor}`}
            />
            <p className="text-white">{bullet}</p>
          </li>
        ))}
      </ul>
      <div className={pclass.ctaWrapper}>
        <button
          className={`py-4 w-full rounded-2xl transition-all duration-200 ${pclass.cta}`}
        >
          {card.cta}
        </button>
      </div>
    </motion.div>
  );
}

export default PricingCard;
