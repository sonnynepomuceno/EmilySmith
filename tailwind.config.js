/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#c8956c",
          dark: "#a87550",
          light: "#f5ede4",
        },
        brand: {
          bg: "#ffffff",
          "bg-light": "#faf9f7",
          text: "#2c2c2c",
          muted: "#6b6b6b",
          border: "#e8e4df",
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "background-shine": "background-shine 2s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease forwards",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: 0, transform: "scale(0.9) translateY(-72px) translateX(-60px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(-72px) translateX(-60px)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
        "background-shine": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
