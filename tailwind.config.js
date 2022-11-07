/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,js,ts}"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        "even-outer": '0 0px 16px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
