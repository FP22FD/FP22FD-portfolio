/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
      fontFamily: {
        sans: ['Lora', ...fontFamily.sans],
        display: ['Playfair Display', ...fontFamily.serif],
      },
      colors: {
        primary: {
          defaultBlue: '#AADCEC',
          lightBlue: '#E7F5F9',
          darkBlue: '#014361',
          lightPurple: '#CEB8D7',
          darkPurple: '#801EE0',
        },
        typography: {
          default: '#212427',
          grey: '#5A5E60',
          white: '#FFFFFF',
        },
        neutral: {
          ofWhite: '#fafafa',
          default: '#e2e0e0',
        },
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Playfair Display',
            fontStyle: 'normal',
            fontWeight: '400',
            src: 'url("/assets/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf") format("TrueType")',
          },
          {
            fontFamily: 'Playfair Display',
            fontStyle: 'normal',
            fontWeight: '600',
            src: 'url("/assets/fonts/Playfair_Display/PlayfairDisplay-semiBold.ttf") format("TrueType")',
          },
          {
            fontFamily: 'Playfair Display',
            fontStyle: 'normal',
            fontWeight: '700',
            src: 'url("/assets/fonts/Playfair_Display/PlayfairDisplay-Bold.ttf") format("TrueType")',
          },
          {
            fontFamily: 'Lora',
            fontStyle: 'normal',
            fontWeight: '400',
            src: 'url("/assets/fonts/Lora/Lora-regular.ttf") format("TrueType")',
          },
        ],
      });

      addBase({
        'h1, h2, h3, h4, h5': {
          fontFamily: 'Playfair Display, Arial, Helvetica, sans-serif',
        },
        body: { fontFamily: 'Lora, Verdana, Tahoma, sans-serif' },
      });
    },
    function ({ addComponents }) {
      addComponents({
        '.highlight': {
          display: 'inline',
          textDecoration: 'none',
          backgroundSize: '100% 8px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 100%',
          transition: 'background-size 0.3s ease-out',
          backgroundImage: 'linear-gradient(90deg, rgb(206, 184, 215), rgb(206, 184, 215))',
        },
        '.highlight:hover': {
          backgroundSize: '100% 20px',
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities(
        {
          '.hover-underline': {
            position: 'relative',
            display: 'inline-block',
            textDecoration: 'none',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '2px',
              backgroundImage: 'linear-gradient(90deg, #AADCEC, #014361)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '0 100%',
              transition: 'background-size 0.3s ease-out',
            },
            '&:hover::after': {
              backgroundSize: '100% 100%',
            },
          },
        },
        ['responsive', 'hover'],
      );
    },
  ],
};
