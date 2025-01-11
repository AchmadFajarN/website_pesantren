/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'natural': {
          'green' : '#3dd909',
          'yellow': '#b5d714'
        },
        'krem': '#f5d44f',
        'dark-green': '#44852f'
      }
    },
  },
  plugins: [],
}
