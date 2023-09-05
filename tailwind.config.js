/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        green: "#4d9434",
        red: "#d72f3f",
        black: "#1d2125",
        white: "#fafafa",
        orange: "#fc7312",
      },
    },
  },
  plugins: [],
};
