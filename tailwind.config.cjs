/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-nav-texture':
          'linear-gradient(0deg, rgba(20, 73, 67, 1) 11.88%, rgba(22, 45, 42, 1) 53.7%, rgba(34, 55, 57, 1) 100%);',
        'services-texture': "url('/images/servicesBg.jpg')",
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      heading: ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
}
