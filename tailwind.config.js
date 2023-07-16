/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Spline Sans Mono']
      },
      colors: {
        'highlight': '#B0FF92',
        'accent': '#9f9fad',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

// B0FF92