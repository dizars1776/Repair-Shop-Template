/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-nav-texture':
          'linear-gradient(0deg, rgba(20, 73, 67, 1) 11.88%, rgba(22, 45, 42, 1) 53.7%, rgba(34, 55, 57, 1) 100%);',
        'services-texture': 'url("/images/services/servicesBg.webp")',
        'cta-texture': 'url("/images/floating-cogs.svg")',
        'contactus-texture': 'url("/images/contactus/backdrop-contactus.webp")',
      },
      colors: {
        'base-light': '#686868',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      heading: ['Roboto Condensed', 'sans-serif'],
    },
  },
  plugins: [],
}
