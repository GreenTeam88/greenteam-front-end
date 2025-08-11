const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      blackDark: '#1C1C1C',
      bgColor: '#F9FBFA',
      primaryDefault: '#217946',
      primaryGreenD1: '#091F12',
      paragraph: '#212529',
      black20: '#1C1C1C',
      black10: '#1C1C1C',
      lightGray: '#F3F7F5',
      secondaryDefault: '#F56900',
      secondaryLight: '#F8EFE4',
      lightOrange: '#F8EFE4',
      ...colors,
    },
    extend: {
      scale: {
        130: '1.3',
        140: '1.4',
        165: '1.65',
        170: '1.70',
        200: '2',
        300: '3',
        400: '4',
      },
    },
  },
  plugins: [],
};
