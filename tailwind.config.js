/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#1537B6',
        'blue-brand': '#0A2178',
        'btn-primary': '#335EF7',
        highlight: '#E3E9FF',
        content: '#8D94A6',
      },
    },
    fontFamily: {
      roboto: ['Roboto'],
      nunito: ['Nunito'],
    },
    borderWidth: {
      1: '1px',
    },
    backgroundImage: {
      background: "url('./img/bg.png')",
    },
  },
  plugins: [],
};
