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
        // Primary
        "primary-800": "#1E1B22",
        "primary-700": "#221F26",
        "primary-600": "#27232B",
        "primary-500": "#2B2730",
        "primary-400": "#403D45",
        "primary-300": "#555259",
        "primary-200": "#6B686E",
        "primary-50": "#AAA9AC",

        // Accent
        "accent-800": "#b38135",
        "accent-700": "#cc933d",
        "accent-600": "#e6a644",
        "accent-500": "#FFB84C",
        "accent-400": "#ffbf5e",
        "accent-300": "#ffc670",
        "accent-200": "#FFCD82",

        "white-shade": "#F6F6F6",
      },
      keyframes: {
        "translate-x-reverse": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "translate-x-reverse": "translate-x-reverse 50s linear infinite",
        "translate-x-reverse-slowed": "translate-x-reverse 30s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151', // gray-700
            strong: {
              color: '#111827', // gray-900
            },
            em: {
              color: '#4B5563', // gray-600
            },
            h1: {
              color: '#111827', // gray-900
            },
            h2: {
              color: '#111827', // gray-900
            },
            h3: {
              color: '#111827', // gray-900
            },
            h4: {
              color: '#111827', // gray-900
            },
            p: {
              color: '#374151', // gray-700
            },
            li: {
              color: '#374151', // gray-700
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

