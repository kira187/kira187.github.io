module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        dm : "'DM Sans', sans-serif",
      },

      colors: {
        green : {
          DEFAULT : '#71B214'
        },

        gray : {
          600 : '#606060'
        }
      },

      spacing: {
        13 : '3.25rem'
      },

      boxShadow : {
        primary : '0px 9.9px 21.6px rgba(136, 202, 41, 0.41)'
      }

    },
  },
  variants: {
    extend: {
        animation: ['responsive', 'hover','group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
		    fontSize: ['responsive', 'hover', 'group-hover'],
		    scale: ['responsive', 'hover', 'group-hover'],
		    padding: ['responsive', 'hover', 'group-hover'],
		    translate: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
