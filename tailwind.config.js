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
        '4.5xl': ['2.5rem', {lineHeight: '3rem'}],
        '6.5xl': ['4rem', {lineHeight: '1'}],
      },
      spacing: {
        15: '3.75rem',
        30: '7.5rem',
        98: '25rem',
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        white: '#F9F7F4',
        black: '#373737',
      },
      fontFamily: {
        sans: ['var(--scto-grotesk-a)', ...fontFamily.sans],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      textUnderlineOffset: {
        6: '6px',
      },
    },
  },
  plugins: [],
};
