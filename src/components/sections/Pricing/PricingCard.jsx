"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/contexts/CheckoutContext";

/* ── Check icon ── */
function CheckIcon({ accent, enterprise }) {
  return (
    <div
      className={`
        flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-lg
        ${enterprise
          ? "bg-blue-accent/15 text-blue-accent-light"
          : accent
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

/* ── Tier Dropdown ── */
function TierDropdown({ tiers, selectedIndex, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selected = tiers[selectedIndex];

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative mt-5">
      {/* Label */}
      <p className="text-[11px] text-accent-500/50 font-semibold tracking-wider uppercase mb-2">
        عدد العملاء
      </p>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between
          px-4 py-3 rounded-xl
          text-sm font-semibold
          bg-accent-500/[0.06] border border-accent-500/15
          text-accent-400
          hover:bg-accent-500/[0.1] hover:border-accent-500/25
          transition-all duration-300
          ${isOpen ? "ring-1 ring-accent-500/20" : ""}
        `}
      >
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 text-accent-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
          {selected.clients >= 1000
            ? `${(selected.clients / 1000).toLocaleString()}K`
            : selected.clients
          } عميل — {selected.price} ج.م/شهريًا
        </span>
        <svg
          className={`w-4 h-4 text-accent-500/50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="
            absolute z-50 top-full mt-2 w-full
            rounded-xl overflow-hidden
            border border-accent-500/15
            shadow-[0_8px_32px_rgba(0,0,0,0.5)]
            max-h-[240px] overflow-y-auto
          "
          style={{
            background: "linear-gradient(160deg, rgba(15,18,12,0.99) 0%, rgba(10,13,8,1) 100%)",
            backdropFilter: "blur(20px)",
          }}
        >
          {tiers.map((tier, i) => (
            <button
              key={tier.clients}
              type="button"
              onClick={() => {
                onChange(i);
                setIsOpen(false);
              }}
              className={`
                w-full flex items-center justify-between
                px-4 py-3 text-sm
                transition-all duration-200
                ${i === selectedIndex
                  ? "bg-accent-500/10 text-accent-400 font-semibold"
                  : "text-[#8A9A8A] hover:bg-accent-500/[0.06] hover:text-accent-400"
                }
                ${i < tiers.length - 1 ? "border-b border-accent-500/[0.06]" : ""}
              `}
            >
              <span className="flex items-center gap-2">
                {i === selectedIndex && (
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                )}
                {tier.clients >= 1000
                  ? `${(tier.clients / 1000).toLocaleString()}K`
                  : tier.clients
                } عميل
              </span>
              <span className="font-display font-bold">
                {tier.price} <span className="text-xs font-normal opacity-60">ج.م</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function PricingCard({ card, paymentPlan }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const { startCheckout } = useCheckout();
  const router = useRouter();

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 30;
    const y = (clientY - (rect.top + rect.height / 2)) / 30;
    setMousePosition({ x, y });
  };

  const isPrimary = card.primary;
  const isEnterprise = card.isEnterprise;
  const hasTiers = card.tiers && card.tiers.length > 0;
  const hasPromo = card.originalPrice && card.promoLabel;
  const isCustomPrice = card.price[paymentPlan] === "تواصل معنا";
  const hasBadge = card.badge;

  // Dynamic price for tiered cards
  const price = hasTiers
    ? card.tiers[selectedTierIndex].price
    : card.price[paymentPlan];

  const paymentPlanText = isCustomPrice
    ? ""
    : paymentPlan === "monthly"
      ? "ج.م / شهريًا"
      : "ج.م / سنويًا";

  const handleCTA = () => {
    const finalPrice = hasTiers ? card.tiers[selectedTierIndex].price : card.price[paymentPlan];
    const tierInfo = hasTiers ? ` (${card.tiers[selectedTierIndex].clients} عميل)` : "";
    startCheckout({
      name: card.program + tierInfo,
      price: finalPrice,
      billingCycle: paymentPlan,
      features: card.bullets,
      subheading: card.subheading,
    });
    router.push("/payment");
  };

  // Card-type-specific styles
  const cardBorder = isPrimary
    ? "border border-accent-500/20 shadow-[0_0_40px_rgba(198,255,0,0.06)]"
    : isEnterprise
      ? "border border-blue-accent/20 shadow-[0_0_40px_rgba(67,97,238,0.06)]"
      : "border border-white/[0.06] hover:border-white/[0.1]";

  const cardBg = isPrimary
    ? "linear-gradient(160deg, rgba(15,18,12,0.97) 0%, rgba(10,13,8,0.99) 100%)"
    : isEnterprise
      ? "linear-gradient(160deg, rgba(12,12,22,0.97) 0%, rgba(8,8,18,0.99) 100%)"
      : "linear-gradient(160deg, rgba(14,14,20,0.97) 0%, rgba(10,10,16,0.99) 100%)";

  const topLine = isPrimary
    ? "bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"
    : isEnterprise
      ? "bg-gradient-to-r from-transparent via-blue-accent/30 to-transparent"
      : "bg-gradient-to-r from-transparent via-white/10 to-transparent";

  const hoverGlow = isPrimary
    ? "radial-gradient(ellipse at top, rgba(198,255,0,0.04), transparent 60%)"
    : isEnterprise
      ? "radial-gradient(ellipse at top, rgba(67,97,238,0.04), transparent 60%)"
      : "radial-gradient(ellipse at top, rgba(255,255,255,0.02), transparent 60%)";

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
        ${cardBorder}
        transition-all duration-500
      `}
    >
      {/* ── Card background ── */}
      <div className="absolute inset-0" style={{ background: cardBg }} />

      {/* ── Top gradient line ── */}
      <div className={`absolute top-0 inset-x-0 h-px ${topLine}`} />

      {/* ── Primary card glow effects ── */}
      {isPrimary && (
        <>
          <div
            className="absolute top-0 right-0 w-[300px] h-[200px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(ellipse, #C6FF00, transparent 70%)" }}
          />
          <div
            className="absolute bottom-[20%] left-0 w-[250px] h-[200px] rounded-full opacity-[0.03]"
            style={{ background: "radial-gradient(ellipse, #4361EE, transparent 70%)" }}
          />
        </>
      )}

      {/* ── Enterprise card glow effects ── */}
      {isEnterprise && (
        <>
          <div
            className="absolute top-0 left-0 w-[300px] h-[200px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(ellipse, #4361EE, transparent 70%)" }}
          />
          <div
            className="absolute bottom-[15%] right-0 w-[250px] h-[200px] rounded-full opacity-[0.04]"
            style={{ background: "radial-gradient(ellipse, #7C3AED, transparent 70%)" }}
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
        style={{ background: hoverGlow }}
      />

      {/* ── Badge (top-right corner) ── */}
      {hasBadge && (
        <div className="absolute top-0 left-0 z-20">
          <div
            className="px-4 py-2 rounded-br-2xl text-[11px] font-bold tracking-wide"
            style={{
              background: isPrimary
                ? "linear-gradient(135deg, #C6FF00 0%, #B4E600 100%)"
                : isEnterprise
                  ? "linear-gradient(135deg, #4361EE 0%, #6B82F2 100%)"
                  : "linear-gradient(135deg, #C6FF00 0%, #B4E600 100%)",
              color: isPrimary ? "#1E1B22" : isEnterprise ? "#fff" : "#1E1B22",
            }}
          >
            {card.badge}
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
              : isEnterprise
                ? "bg-blue-accent/10 text-blue-accent-light border border-blue-accent/15"
                : "bg-white/[0.04] text-white/60 border border-white/[0.08]"
            }
          `}
        >
          {card.program}
        </div>

        {/* Price */}
        <div className="mt-7 sm:mt-8">
          {/* Promo badge for starter plan */}
          {hasPromo && (
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-accent-500/10 text-accent-400 text-[11px] font-bold border border-accent-500/15">
                🔥 {card.promoLabel}
              </span>
              <span className="text-[#5A5A6E] text-sm line-through">{card.originalPrice} ج.م</span>
            </div>
          )}

          <div className="flex items-baseline gap-2">
            {isCustomPrice ? (
              <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-white">
                {price}
              </span>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>

        {/* Subheading */}
        <p className="mt-2 text-[13px] sm:text-sm text-[#6B6B7E] leading-relaxed">
          {card.subheading}
        </p>

        {/* ── Tier dropdown for middle plan ── */}
        {hasTiers && (
          <TierDropdown
            tiers={card.tiers}
            selectedIndex={selectedTierIndex}
            onChange={setSelectedTierIndex}
          />
        )}

        {/* Separator */}
        <div
          className={`my-6 sm:my-7 h-px ${
            isPrimary
              ? "bg-gradient-to-l from-accent-500/15 via-accent-500/8 to-transparent"
              : isEnterprise
                ? "bg-gradient-to-l from-blue-accent/15 via-blue-accent/8 to-transparent"
                : "bg-gradient-to-l from-white/[0.06] via-white/[0.03] to-transparent"
          }`}
        />

        {/* Features list */}
        <ul className="flex flex-col gap-3.5 sm:gap-4 flex-1">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3 group">
              <CheckIcon accent={isPrimary} enterprise={isEnterprise} />
              <span
                className={`text-[13px] sm:text-sm leading-relaxed transition-colors duration-300 ${
                  isPrimary
                    ? "text-[#8A9A8A] group-hover:text-[#B0C8B0]"
                    : isEnterprise
                      ? "text-[#8A8AA0] group-hover:text-[#B0B0D0]"
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
          ) : isEnterprise ? (
            /* Enterprise CTA with blue glow */
            <div className="relative group/btn">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-accent via-blue-accent-light to-blue-accent opacity-60 group-hover/btn:opacity-100 transition-opacity duration-500 blur-[1px]" />
              <button
                onClick={handleCTA}
                className="
                  relative w-full py-3.5 sm:py-4 rounded-2xl
                  font-bold text-sm sm:text-[15px]
                  text-white bg-blue-accent
                  hover:bg-blue-accent-light
                  transition-all duration-300
                  shadow-[0_0_20px_rgba(67,97,238,0.15)]
                  hover:shadow-[0_0_30px_rgba(67,97,238,0.25)]
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
