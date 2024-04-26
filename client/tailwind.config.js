const colors = require('tailwindcss/colors');

// const deprecatedColors = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray'];
// deprecatedColors.forEach((color) => Object.defineProperty(colors, color, { enumerable: false }));

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        'gradient-blue': 'bg-gradient-to-t from-[#024AB5] from-10% via-[#316EC9] via-50% to-[#70A9FF] to-90%',
        // eslint-disable-next-line max-len
        'gradient-auth': `radial-gradient((to bottom, ${theme('colors.blue.500')} 90%, ${theme('colors.blue.600')} 50%, ${theme('colors.blue.800')} 10%);`
      }),
      colors: {
        blue: {
          ...colors.blue,
          500: '#024AB5',
          600: '#316EC9',
          700: '#2E65F3',
          800: '#70A9FF',
          900: '#2B3674',
        },
        gray: {
          ...colors.gray,
          '300': '#F2F2F2',
          '700': '#6C757D',
        }
      },
      borderWidth: {
        'DEFAULT': '1px',
        '20': '20px',
        '50': '50px'
      },
      borderRadius: {
        'lg2xl': '150px'
      }
    },
  },
  plugins: [],
};
