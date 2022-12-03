/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '3.5xl': ['2rem', {lineHeight: '2.5rem'}],
      },
      spacing: {
        '15': '3.75rem',
      },
      borderWidth: {
        '1': '1px',
      },
      colors: {
        white: '#F9F7F4',
        black: '#373737',
      },
      fontFamily: {
        sans: ['var(--scto-grotesk-a)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
