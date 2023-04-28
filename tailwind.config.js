/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');
module.exports = konstaConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});