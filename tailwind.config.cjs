/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: 'pulse 2s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
