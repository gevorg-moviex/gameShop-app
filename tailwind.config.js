/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "grid4xauto": "repeat(4, 350px)"
      },
      screens: {
        "section885x": "885px",
        "product1770x": "1770px",
        "product1770x": "1455px",
        "product1520x": "1520px",
        "product1455x": "1330px",
        "product1220x": "1220px",
        "product1070x": "1070px",
        "product1280x": "1280px",
        "product1000x": "1000px",
        "product970x": "970px",
        "product805x": "805px",
        "product660x": "660px",
        "product560x": "560px",
        "product460x": "460px",
        "product390x": "390px",
        "product380x": "380px",
        "product360x": "360px",
        "product340x": "360px",
        "product3440x": "340px",
        "product335x": "335px"
      },
      boxShadow: {
        'customShadow': '0 3px 8px rgba(0, 0, 0, 0.24)',
        "custom-2-shadow": "0 0 5px 5px #03BFA9",
        "inputsShadow": "#03BFA9 0px 5px 15px;"
      },
    },
  },
  plugins: [],
}