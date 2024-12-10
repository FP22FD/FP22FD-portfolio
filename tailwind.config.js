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
        sans: ['Lora', ...fontFamily.sans], // Lora as the default font
        display: ['Playfair Display', ...fontFamily.serif], // Playfair Display for display headings text
      },
      colors: {
        primary: {
          'blue': '#91b9ca', // Use for hero section background, footer, and buttons
        },
        accent: {
          orangeDark: '#dda778', // Use for small accents, badges, icons
          orangeLight: '#ffebd6', // Use for hover effects, and alternative backgrounds
        },
        typography: {
          default: '#212427',// Body text, paragraph text, form labels, modal backgrounds
          grey: '#5A5E60', // Body text, paragraph text, form labels, modal backgrounds
          white: '#FFFFFF', // Background page, cards, containers, text on dark backgrounds
        },
        neutral: {
          white: '#FFFFFF', // Backgrounds, cards, containers, text on dark backgrounds
          ofWhite: '#fafafa', // Backgrounds, cards, containers, text on dark backgrounds
          default: '#e2e0e0', // Grey color for borders, dividers, and input field backgrounds
          lighter: '#F9FAFB', // Light section backgrounds and hover states
          light: '#E9ECEF', // Light section backgrounds and hover states
          dark: '#ABB5BE', // Secondary text or disabled elements
        },
        status: {
          success: {
            green: '#4D7C0F', // Success messages or positive action icons
            'green-bg': '#D1E7DD', // Success notification backgrounds
          },
          error: {
            red: '#B91C1C', // Error messages, form validation errors, warning elements
            'red-bg': '#F8D7DA', // Error notification backgrounds
          },
        },
      },
      boxShadow: {
        custom: '0 10px 20px rgba(194, 194, 194, 0.16)', // Custom shadow
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
            src: 'url("/src/assets/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf") format("TrueType")',
          },
          {
            fontFamily: 'Playfair Display',
            fontStyle: 'normal',
            fontWeight: '600',
            src: 'url("/src/assets/fonts/Playfair_Display/PlayfairDisplay-semiBold.ttf") format("TrueType")',
          },
          {
            fontFamily: 'Playfair Display',
            fontStyle: 'normal',
            fontWeight: '700',
            src: 'url("/src/assets/fonts/Playfair_Display/PlayfairDisplay-Bold.ttf") format("TrueType")',
          },
          {
            fontFamily: 'Lora',
            fontStyle: 'normal',
            fontWeight: '400',
            src: 'url("/src/assets/fonts/Lora/Lora-regular.ttf") format("TrueType")',
          },
        ],
      });

      addBase({
        'h1, h2, h3, h4, h5': { fontFamily: 'Playfair Display, Arial, Helvetica, sans-serif' },
        'body': { fontFamily: 'Lora, Verdana, Tahoma, sans-serif' },
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
          backgroundImage: 'linear-gradient(90deg, rgb(145, 185, 202), rgb(145, 185, 202))',
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
              backgroundImage: 'linear-gradient(90deg, #91b9ca, #91b9ca)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '0 100%',
              transition: 'background-size 0.3s ease-out',
            },
            '&:hover::after': {
              backgroundSize: '100% 100%',
            },
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};
