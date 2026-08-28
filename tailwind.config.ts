import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        washi: "#f5f0eb",
        tatami: "#e8e0d8",
        card: "#ffffff",
        elevated: "#faf8f5",
        line: "#d4ccc4",
        divider: "#c8bdb5",
        ink: "#1a1a1a",
        charcoal: "#4a4a4a",
        stone: "#7a7a7a",
        muted: "#a8a09a",
        vermilion: "#c41e3a",
        "vermilion-dark": "#8b1a2b",
        indigo: "#1a2a3a",
        gold: "#c9a84c",
        bamboo: "#5a7a5a",
        sakura: "#f5a0b0",
        "hover-washi": "#f0e8e0",
        "active-washi": "#e0d8d0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "var(--font-inter)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "frame-fadein": "frameFade 2.4s ease-in-out infinite",
        "sakura-fall": "sakuraFall 4s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
      },
      keyframes: {
        frameFade: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        sakuraFall: {
          "0%": { transform: "translateY(-10%) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(26, 26, 26, 0.08)",
        card: "0 4px 20px rgba(26, 26, 26, 0.06)",
        raised: "0 20px 50px rgba(26, 26, 26, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
