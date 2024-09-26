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
      primaryDefault: '#217946',
      primaryGreenD1: '#091F12',
      secondaryDefault: '#F56900',
      secondaryLight: '#F8EFE4',
    },
    extend: {},
  },
  plugins: [],
};
