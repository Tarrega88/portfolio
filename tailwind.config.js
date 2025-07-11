/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Archia", "sans-serif"],
      },
      screens: {
        "3xl": "1800px"
      }
    },
  },
  plugins: [],
};
