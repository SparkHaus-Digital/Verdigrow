// tailwind.config.cjs
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFFF5",
        primary: "#054C2E",
        secondary: "#E47839",
      },
      fontFamily: {
        h1: ["var(--font-sohne-breit)", ...fontFamily.sans],
        heading: ["var(--font-titillium-web)", ...fontFamily.sans],
        body: ["var(--font-open-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        "custom-lg": "1rem",
      },
    },
  },
  plugins: [],
};