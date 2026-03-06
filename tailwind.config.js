/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "pricing-break": "840px",
      },
      colors: {
        // Primary (dark text/backgrounds for sections)
        "primary-800": "#1E1B22",
        "primary-700": "#221F26",
        "primary-600": "#27232B",
        "primary-500": "#2B2730",
        "primary-400": "#403D45",
        "primary-300": "#555259",
        "primary-200": "#6B686E",
        "primary-50": "#AAA9AC",

        // Accent — Neon Green (replaces gold)
        "accent-800": "#8fb300",
        "accent-700": "#a3cc00",
        "accent-600": "#b4e600",
        "accent-500": "#C6FF00",
        "accent-400": "#d1ff33",
        "accent-300": "#dbff5c",
        "accent-200": "#e6ff85",

        // Blue accent
        "blue-accent": "#4361EE",
        "blue-accent-light": "#6B82F2",
        "blue-accent-dark": "#3451D1",

        // Cyan accent
        "cyan-accent": "#4CC9F0",

        "white-shade": "#F6F6F6",
      },
      boxShadow: {
        "glow-green": "0 0 20px rgba(198, 255, 0, 0.3), 0 0 60px rgba(198, 255, 0, 0.1)",
        "glow-blue": "0 0 20px rgba(67, 97, 238, 0.3), 0 0 60px rgba(67, 97, 238, 0.1)",
        "glow-mixed": "0 0 20px rgba(198, 255, 0, 0.2), 0 0 40px rgba(67, 97, 238, 0.15)",
      },
      keyframes: {
        "translate-x-reverse": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-15px)" },
        },
        "counter-up": {
          from: { "--num": "0" },
          to: { "--num": "var(--target)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(198, 255, 0, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(198, 255, 0, 0.5), 0 0 80px rgba(198, 255, 0, 0.2)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "translate-x-reverse": "translate-x-reverse 50s linear infinite",
        "translate-x-reverse-slowed": "translate-x-reverse 30s linear infinite",
        "float-slow": "float-slow 20s ease-in-out infinite",
        "float-slower": "float-slow 25s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-noto-kufi)"],
        display: ["var(--font-space-grotesk)"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            strong: {
              color: '#111827',
            },
            em: {
              color: '#4B5563',
            },
            h1: {
              color: '#111827',
            },
            h2: {
              color: '#111827',
            },
            h3: {
              color: '#111827',
            },
            h4: {
              color: '#111827',
            },
            p: {
              color: '#374151',
            },
            li: {
              color: '#374151',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
