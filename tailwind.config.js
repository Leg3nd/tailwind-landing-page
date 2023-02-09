/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        citybreakTeal: '#48AAAD',
        citybreakTealLight: '#91ccce',
        citybreakTealDark: '#2b6668',
        citybreakSecondary: '#fabe50',
        citybreakSecondaryLight: '#fcd896',
        citybreakSecondaryDark: '#967230',
      }
    },
  },
  plugins: [],
}
