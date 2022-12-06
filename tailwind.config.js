/** @type {import('tailwindcss').Config} */
const {fontFamily, transitionProperty} = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '3-1/2xl': ['2rem', {lineHeight: '2.5rem'}], // 32px
        '4-1/2xl': ['2.5rem', {lineHeight: '3rem'}], // 40px
        '6-1/2xl': ['4rem', {lineHeight: '1'}], // 64px
      },
      spacing: {
        '3/16': '0.1875rem', // 3px
        15: '3.75rem', // 60px
        30: '7.5rem', // 120px
        68: '17rem', // 272px
        94: '23rem', // 368px
        98: '25rem', // 400px
      },
      borderColor: {
        'dark-white': '#f9f7f41a',
      },
      minWidth: {
        16: '4rem',
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
      transitionProperty: {
        top: `top, ${transitionProperty.colors}`,
        toggle: `${transitionProperty.transform}, ${transitionProperty.colors}`,
      },
      rotate: {
        360: '360deg',
      },
    },
  },
  plugins: [],
};
