/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      body: ['"Press Start 2P"', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        warning: '#e64a16',
        primary: '#002642',
        secondary: '#f86d13',
        danger: '#840032',
        white: '#fcfbfa',
        black: '#02040f'
      }
    }
  },
  variants: {},
  plugins: []
}
