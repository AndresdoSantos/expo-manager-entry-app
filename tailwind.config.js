/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'inter-400': 'Inter_400Regular',
        'inter-700': 'Inter_700Bold',
      },
    },
  },
  plugins: [],
}
