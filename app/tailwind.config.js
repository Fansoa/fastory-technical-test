/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      display: "Orbitron",
      body: "Electrolize"
    },
    extend: {
      colors: {
        primary: "#43edf8",
        secondary: "rgba(0, 38, 87, 0.65)",
        searchInputBackground: "rgba(27,75,140,0.35)",
        darken: "rgba(0, 0, 0, 0.6)"
      }
    },
  },
  plugins: [],
}

