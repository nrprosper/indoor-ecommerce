/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-blue":  "#377DFF",
        "theme-green":  "#38CB89",
        "theme-orange": "#FFAB00",
        "theme-red": "#FF5630",
        "theme-neutral": {
          7: "#141718",
          6: "#232627",
          5: "#343839",
          4: "#6C7275",
          3: "#E8ECEF",
          2: "#F3F5F7",
          1: "#FEFEFE"
        }
      }
    },
  },
  plugins: [],
}

