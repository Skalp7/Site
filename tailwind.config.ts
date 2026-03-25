import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        sand: "var(--sand)",
        ivory: "var(--ivory)",
        line: "var(--line)",
        accent: "var(--accent)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      boxShadow: {
        panel: "0 20px 60px rgba(15, 23, 42, 0.08)",
        glow: "0 24px 80px rgba(144, 109, 73, 0.16)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
