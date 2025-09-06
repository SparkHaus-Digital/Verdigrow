// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        h1: ["var(--font-soehne-breit)", ...fontFamily.sans],
        heading: ["var(--font-titillium)", ...fontFamily.sans],
        body: ["var(--font-open-sans)", ...fontFamily.sans],
      },

    },
  },
  plugins: [],
};
