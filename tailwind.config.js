import { plugin } from "postcss";

const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // required for HeroUI styles
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
  plugins: {
    "@tailwindcss/postcss": {},
  },
  
};