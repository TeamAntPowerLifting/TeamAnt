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
        x: '422px',
      },
      width: {
        235: '14.69rem',
      },
      fontFamily: {
        sans: ['Merriweather Sans', 'sans-serif'],
      },
      fontSize: {
        mainmobile : '',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};
