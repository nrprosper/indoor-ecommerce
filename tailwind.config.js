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
      },
      animation: {
        'slide-up': 'slideUp 1s ease-out',
        'slide-left': 'slideInLeft 1s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

