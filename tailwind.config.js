// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";  // Changed to default import

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        h1: ["var(--font-soehne-breit)", ...defaultTheme.fontFamily.sans],  // Now accessing via defaultTheme
        heading: ['var(--font-titillium)', ...defaultTheme.fontFamily.sans],
        body: ['var(--font-open-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};