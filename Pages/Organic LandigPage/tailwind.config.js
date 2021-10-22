module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green : {
          DEFAULT : '#71B214'
        },
      }
    },
  },
  variants: {
    extend: {
      variants: {
        animation: ['responsive', 'hover','group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
        scale: ['responsive', 'hover', 'group-hover'],
        padding: ['responsive', 'hover', 'group-hover'],
        translate: ['active', 'group-hover'],
        },
    },
  },
  plugins: [],
}
