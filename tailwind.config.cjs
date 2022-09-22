/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'toast-slide-up': {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' }
        },
      }
    },
  },
  plugins: [],
}
