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
        'extralarge': '1920px',
        'smallS8': { 'raw': '(max-width: 360px)' }, // Specific to devices with <=360px width
      },
    },
  },
  plugins: [],
};
