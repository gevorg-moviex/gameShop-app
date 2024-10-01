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
        "product1330x": "1330px",
        "product1220x": "1220px",
        "product1070x": "1070px",
        "product1280x": "1280px",
        "product970x": "970px",
        "product805x": "805px",
        "product660x": "660px",
        "product560x": "560px",
        "product460x": "460px",
        "product360x": "360px",
        "product340x": "360px",
        "product335x": "335px"
      }
    },
  },
  plugins: [],
}