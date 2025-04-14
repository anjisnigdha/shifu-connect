/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0faff',
          100: '#e0f4fe',
          200: '#bae6fd',
          300: '#7dd4fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f9f5ff',
          100: '#f2e9ff',
          200: '#e5d4fe',
          300: '#d2b1fd',
          400: '#b77ef9',
          500: '#9a50f4',
          600: '#8431e7',
          700: '#6e21c5',
          800: '#5a1ca0',
          900: '#4b1a84',
          950: '#2e0e5f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 