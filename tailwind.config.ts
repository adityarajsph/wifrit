import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB",
          50: "#EFF4FF",
          100: "#DCE7FF",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        ink: {
          900: "#0B1120",
          950: "#050816",
        },
        slate2: "#64748B",
        bg2: "#F8FAFC",
        border2: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 40px -18px rgba(15,23,42,.18)",
        cardHover: "0 28px 56px -20px rgba(15,23,42,.26)",
        glowBtn: "0 8px 24px -10px rgba(37,99,235,.55)",
        glowBtnHover: "0 16px 40px -10px rgba(37,99,235,.75)",
        glowBlue: "0 0 40px 8px rgba(37,99,235,.18)",
        glowBlueStrong: "0 0 60px 16px rgba(37,99,235,.28)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 0.8, 0.24, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
