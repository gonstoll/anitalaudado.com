/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const {fontFamily, transitionProperty} = defaultTheme;

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    function ({addVariant}) {
      addVariant('peer-group-valid', '.peer:checked ~ .peer-group &');
    },
  ],
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
        200: '37.5rem', // 600px
      },
      maxWidth: {
        '3xl': '2600px',
      },
      minWidth: {
        16: '4rem',
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        white: 'rgb(var(--color-white) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
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
      transitionDuration: {
        1250: '1250ms',
      },
      rotate: {
        360: '360deg',
      },
      translate: {
        'toggle-checked': 'calc(100% - 2px)',
      },
    },
  },
  plugins: [],
};
