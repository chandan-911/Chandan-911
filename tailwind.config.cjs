/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: 'pulse 2s infinite', // Custom pulse glow effect
      },
      blur: {
        '3xl': '64px', // Deep blur used in glassmorphic backgrounds
      },
      colors: {
        dark: '#0d0d0d', // Optional: named color for dark base
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),     // For prose content
    require('@tailwindcss/forms'),          // For beautiful form elements
    require('@tailwindcss/aspect-ratio'),   // For responsive media
  ],
};
