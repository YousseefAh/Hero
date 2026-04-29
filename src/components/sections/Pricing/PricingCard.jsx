"use client";

import { useState } from "react";
import { useCheckout } from "@/contexts/CheckoutContext";

/* ── Check icon ── */
function CheckIcon({ accent }) {
  return (
    <div
      className={`
        flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-lg
        ${accent
          ? "bg-accent-500/15 text-accent-400"
          : "bg-white/[0.06] text-white/50"
        }
      `}
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function PricingCard({ card, paymentPlan }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { startCheckout } = useCheckout();

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 30;
    const y = (clientY - (rect.top + rect.height / 2)) / 30;
    setMousePosition({ x, y });
  };

  const isPrimary = card.primary;

  const price =
    card.price[paymentPlan] === "Free"
      ? card.price[paymentPlan]
      : `${card.price[paymentPlan]}`;

  const paymentPlanText =
    card.price[paymentPlan] === "Free"
      ? ""
      : paymentPlan === "monthly"
        ? "ج.م / شهريًا"
        : "ج.م / سنويًا";

  const handleCTA = () => {
    startCheckout({
      name: card.program,
      price: card.price[paymentPlan],
      billingCycle: paymentPlan,
      features: card.bullets,
      subheading: card.subheading,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `perspective(1200px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale3d(1.015, 1.015, 1)`
          : "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: "transform 0.2s ease-out",
      }}
      className={`
        relative overflow-hidden rounded-2xl sm:rounded-3xl h-full
        flex flex-col
        ${isPrimary
          ? "border border-accent-500/20 shadow-[0_0_40px_rgba(198,255,0,0.06)]"
          : "border border-white/[0.06] hover:border-white/[0.1]"
        }
        transition-all duration-500
      `}
    >
      {/* ── Card background ── */}
      <div
        className="absolute inset-0"
        style={{
          background: isPrimary
            ? "linear-gradient(160deg, rgba(15,18,12,0.97) 0%, rgba(10,13,8,0.99) 100%)"
            : "linear-gradient(160deg, rgba(14,14,20,0.97) 0%, rgba(10,10,16,0.99) 100%)",
        }}
      />

      {/* ── Top gradient line ── */}
      <div
        className={`absolute top-0 inset-x-0 h-px ${
          isPrimary
            ? "bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"
            : "bg-gradient-to-r from-transparent via-white/10 to-transparent"
        }`}
      />

      {/* ── Primary card glow effects ── */}
      {isPrimary && (
        <>
          <div
            className="absolute top-0 right-0 w-[300px] h-[200px] rounded-full opacity-[0.06]"
            style={{
              background: "radial-gradient(ellipse, #C6FF00, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[20%] left-0 w-[250px] h-[200px] rounded-full opacity-[0.03]"
            style={{
              background: "radial-gradient(ellipse, #4361EE, transparent 70%)",
            }}
          />
        </>
      )}

      {/* ── Hover glow overlay ── */}
      <div
        className={`
          absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none
          transition-opacity duration-500
          ${isHovering ? "opacity-100" : "opacity-0"}
        `}
        style={{
          background: isPrimary
            ? "radial-gradient(ellipse at top, rgba(198,255,0,0.04), transparent 60%)"
            : "radial-gradient(ellipse at top, rgba(255,255,255,0.02), transparent 60%)",
        }}
      />

      {/* ── Popular badge ── */}
      {isPrimary && (
        <div className="absolute top-0 right-0 z-20">
          <div className="relative">
            <div
              className="px-4 py-2 rounded-bl-2xl text-[11px] font-bold text-primary-800 tracking-wide"
              style={{
                background: "linear-gradient(135deg, #C6FF00 0%, #B4E600 100%)",
              }}
            >
              الأكثر شعبية
            </div>
          </div>
        </div>
      )}

      {/* ── Card content ── */}
      <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-7 md:p-8">
        {/* Plan name chip */}
        <div
          className={`
            inline-flex self-start items-center gap-2
            px-3.5 py-1.5 rounded-xl
            text-[13px] font-semibold
            ${isPrimary
              ? "bg-accent-500/10 text-accent-400 border border-accent-500/15"
              : "bg-white/[0.04] text-white/60 border border-white/[0.08]"
            }
          `}
        >
          {card.program}
        </div>

        {/* Price */}
        <div className="mt-7 sm:mt-8 flex items-baseline gap-2">
          <span
            className={`
              font-display font-bold text-4xl sm:text-5xl tracking-tight
              ${isPrimary
                ? "bg-gradient-to-br from-accent-400 via-accent-500 to-accent-300 bg-clip-text text-transparent"
                : "text-white"
              }
            `}
          >
            {price}
          </span>
          {paymentPlanText && (
            <span className="text-[#5A5A6E] text-sm font-medium">
              {paymentPlanText}
            </span>
          )}
        </div>

        {/* Subheading */}
        <p className="mt-2 text-[13px] sm:text-sm text-[#6B6B7E] leading-relaxed">
          {card.subheading}
        </p>

        {/* Separator */}
        <div
          className={`my-6 sm:my-7 h-px ${
            isPrimary
              ? "bg-gradient-to-l from-accent-500/15 via-accent-500/8 to-transparent"
              : "bg-gradient-to-l from-white/[0.06] via-white/[0.03] to-transparent"
          }`}
        />

        {/* Features list */}
        <ul className="flex flex-col gap-3.5 sm:gap-4 flex-1">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3 group">
              <CheckIcon accent={isPrimary} />
              <span
                className={`text-[13px] sm:text-sm leading-relaxed transition-colors duration-300 ${
                  isPrimary
                    ? "text-[#8A9A8A] group-hover:text-[#B0C8B0]"
                    : "text-[#7B7B8E] group-hover:text-[#A0A0B2]"
                }`}
              >
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          {isPrimary ? (
            /* Primary CTA with glow border */
            <div className="relative group/btn">
              {/* Glow behind button */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 opacity-70 group-hover/btn:opacity-100 transition-opacity duration-500 blur-[1px]" />
              <button
                onClick={handleCTA}
                className="
                  relative w-full py-3.5 sm:py-4 rounded-2xl
                  font-bold text-sm sm:text-[15px]
                  text-primary-800 bg-accent-500
                  hover:bg-accent-400
                  transition-all duration-300
                  shadow-[0_0_20px_rgba(198,255,0,0.15)]
                  hover:shadow-[0_0_30px_rgba(198,255,0,0.25)]
                  active:scale-[0.985]
                "
              >
                {card.cta}
              </button>
            </div>
          ) : (
            /* Secondary CTA */
            <button
              onClick={handleCTA}
              className="
                w-full py-3.5 sm:py-4 rounded-2xl
                font-bold text-sm sm:text-[15px]
                text-white/80 bg-white/[0.04]
                border border-white/[0.08]
                hover:bg-white/[0.08] hover:border-white/[0.12]
                hover:text-white
                transition-all duration-300
                active:scale-[0.985]
              "
            >
              {card.cta}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
