/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1280px',
        'xxl': '1032px',
        '3xl': '1440px',
        'extralarge': '1912px',
        'smallS8': { 'raw': '(max-width: 360px)' },
      },
    },
  },
  plugins: [],
};
