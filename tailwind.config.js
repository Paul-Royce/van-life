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
        cusrOrange: "rgba(255, 204, 141, 1)"
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

