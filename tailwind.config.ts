import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#071521", gold: "#c8954c", cream: "#f7f5f0", mist: "#eef1f0" },
      fontFamily: { sans: ["var(--font-inter)"], display: ["var(--font-playfair)"] }
    }
  },
  plugins: []
};
export default config;
