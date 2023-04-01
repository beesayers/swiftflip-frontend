/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        purp: "#574B90",
        purplight: "#8d83be",
        purpmid: "#6e61ad",
        purpdark: "#433a6e",
        light: "#FFFFFF",
        lightmid: "#e6e6e6",
        dark: "#000000",
        darkmid: "#111111",
        darklight: "#2a2a2a",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
