module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'color-green': '#3A5743', // Verde militar
      },
      spacing: {
        '10px': '50px',
        '25px': '140px',
        '100px': '100px',
      },
      screens: {
        'xspeque': '338px',
      },
      width: {
        'ancho': '95%',  // Esto agrega la clase w-95
      },
      colors: {
        // 'fondo_pastel_morado': '#1a1c24',
         'fondo_pastel_morado': '#b8bedd',
        'fondo_pastel_celeste': '#ecf8f8',
        'pastel-orange-400': '#FFB7A2',
      },
      boxShadow: {
        'custom': '0 20px 25px -5px rgb(0 0 0 / 0.30), 0 8px 10px -6px rgb(0 0 0 / 0.40)',
      },
      
    },
  },
  variants: {},
  plugins: [],
}
