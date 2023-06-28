/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        vanPalette: "rgba(255, 247, 237, 1)",
        heroBtn: "rgba(255, 140, 56, 1)",
        cusrOrange: "rgba(255, 204, 141, 1)",
        filterbtn: "rgba(255, 234, 208, 1)",
        simpleVan: "rgba(225, 118, 84, 1)",
        ruggedVan: "rgba(17, 94, 89, 1)",
        luxuryVan: "rgba(22, 22, 22, 1)"
      },
      backgroundSize: {
        "120": "150%"
      },
      backgroundPosition: {
        left: "50%"
      }
    },
  },
  plugins: [],
}

