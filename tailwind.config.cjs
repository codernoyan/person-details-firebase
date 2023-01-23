/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navColor: '#001C7B',
        box1Color: '#92D050',
        box2Color: '#FF0000',
        rightSideColor: '#D9D9D9',
        leftSideColor: '#00B8F1',
      },
    },
  },
  plugins: [],
};
