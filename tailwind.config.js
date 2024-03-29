/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,js,ts}"],
  variants: {
    width: ["responsive", "hover", "focus"],
  },
  theme: {
    fontFamily: {
      serif: ["Lara", "serif"],
      sans: ["Yantramanav", "sans-serif"],
    },
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      boxShadow: {
        "even-outer": "0 0px 16px 0px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
