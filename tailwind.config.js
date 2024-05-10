/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "helvetica neue", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          300: "#ACACAC",
          400: "#EDEDEA",
          600: "#66615B",
          900: "#252422",
        },
        "background-light": "#F4F3EF",
        "theme-orange": "#EF8157",
        "theme-blue": "#51CBCE",
      },
    },
  },
  plugins: [],
};
