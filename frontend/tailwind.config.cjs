/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#A7010E',
        grays: '#1F1F1F',
      },
      screens: {
        xs: '280px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
