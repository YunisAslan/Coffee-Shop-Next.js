/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryBlack": "#1B1B1D",
        "primaryGray": "#64646A",
        "headerBg": "#EEEFF1"
      },
      boxShadow: {
        "circleShadow": "0px 12px 30px rgba(205, 209, 214, 0.28)"
      },
      screens: {
        "xl": "1350px",
        "mm": "350px"
      }


    },
  },
  plugins: [],
}

