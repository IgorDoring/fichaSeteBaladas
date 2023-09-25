/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        'sm': '0.75rem',
        'lg': '1.25rem'
      },
      center: true
    },
    colors: {
      'preto': '#262126',
      'vermelho': '#A60303',
      'marrom': '#593831',
      'pastel': '#F2D6A2',
      'amarelo': '#F2C84B'
    },
    extend: {},
  },
  plugins: [],
}

