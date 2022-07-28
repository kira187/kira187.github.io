module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily:{
        poppins: "'Poppins', sans-serif",
      },
      zIndex: {
        '100': '100',
        '1000': '1000',
      },
      transitionDuration: {
        '400': '400ms',
      },
      fontSize: {
        '3xl': '1.75rem',
        'sm': '.875rem',
        'xs': '.625rem',
      },
      borderRadius: {
        '8xl': '4rem',
        '10xl': '5rem',
      },
      colors:{
        'first-color': 'hsl(220, 66%, 55%)',
        'first-color-alt': 'hsl(220, 66%, 60%)',
        'title-color': 'hsl(219, 15%, 15%)',
        'text-color': 'hsl(219, 8%, 35%)',
        'text-color-light': 'hsl(219, 4%, 55%)',
        'body-color': 'hsl(219, 100%, 99%)',
        'container-color': '#fff',
        'title-color-dark': 'hsl(219, 15%, 95%)',
        'text-color-dark': 'hsl(219, 8%, 75%)',
        'body-color-dark': 'hsl(219, 48%, 8%)',
        'container-color-dark': 'hsl(219, 32%, 12%)',
        'nav-color': 'hsla(219, 32%, 16%, .8)',
        'light-nav-color': 'hsla(219, 32%, 90%, .8)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}