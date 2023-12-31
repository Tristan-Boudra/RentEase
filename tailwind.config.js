/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1F2937',
        'secondary': '#6B7280',
        'tertiary': '#D1D5DB',
      },
    },
  },
  plugins: [],
}

