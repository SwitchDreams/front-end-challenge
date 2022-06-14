import { extendTheme } from 'native-base'

const theme = extendTheme({
  colors: {
    primary: {
      100: '#E1D4F7',
      200: '#C3A9EF',
      300: '#A57FE6',
      400: '#8754DE',
      500: '#6A29D6',
      600: '#5421AB',
      700: '#3F1980',
      800: '#2A1056',
      900: '#15082B',
    },
  },
  fontConfig: {
    Lexend: {
      100: {
        normal: 'Lexend_100Thin',
      },
      200: {
        normal: 'Lexend_200ExtraLight',
      },
      300: {
        normal: 'Lexend_300Light',
      },
      400: {
        normal: 'Lexend_400Regular',
      },
      500: {
        normal: 'Lexend_500Medium',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      700: {
        normal: 'Lexend_700Bold',
      },
      800: {
        normal: 'Lexend_800ExtraBold',
      },
      900: {
        normal: 'Roboto-Bold',
      },
    },
  },
  fonts: {
    heading: 'Lexend',
    body: 'Lexend',
    mono: 'Lexend',
  },
})

export default theme
