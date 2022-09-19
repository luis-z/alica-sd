import colors from 'vuetify/lib/util/colors'

let darkMode = 'false'
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || 'false'
}

const palette = {
  joker: {
    primary: colors.indigo.lighten1, // primary main
    primarylight: colors.deepPurple.lighten4, // primary light
    primarydark: colors.indigo.lighten1, // primary dark
    secondary: colors.cyan.base, // secondary main
    secondarylight: colors.cyan.lighten4, // secondary light
    secondarydark: colors.cyan.darken4, // secondary dark
    anchor: colors.indigo.lighten1 // link
  }
}

export const theme = {
  ...palette.joker
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
