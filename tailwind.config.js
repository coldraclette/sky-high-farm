/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif'],
    },
    colors: {
      black: '#000000',
      green: '#72AE68',
      white: '#FFFFFF',
      red: '#E8342D',
      blue: '#70BFE9',
      orange: '#DB6634',
      yellow: '#E8C32A',
    },
  },
  plugins: [],
};
