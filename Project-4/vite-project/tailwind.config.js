/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': '1800px',
      // => @media (max-width: 1535px) { ... }

      'xl':  {"max":'1174px'} ,
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1030px'} ,
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '735px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '596px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

