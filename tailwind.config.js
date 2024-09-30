/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "grid4xauto": "repeat(4, auto)"
      },
      screens: {
        "section885x": "885px",
        "product1220x": "1220px",
        "product970x": "970px",
        "product660x": "660px"
      }
    },
  },
  plugins: [],
}