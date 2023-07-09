// ** Type Imports
import { Palette } from '@mui/material'

const DefaultPalette = (mode: Palette['mode']): Palette => {
  // ** Vars
  const whiteColor = '#FFF'
  const blackColor = '#000'
  const lightColor = '32, 32, 32'
  const darkColor = '242, 242, 242'
  const lightPaperColor = '#fefefe'
  const darkPaperBgColor = '#202020'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const defaultBgColor = () => {
    if (mode === 'light') {
      return '#F5F5F5'
    } else return '#252525'
  }

  return {
    mode: mode,
    common: {
      black: blackColor,
      white: whiteColor
    },
    backgroundColor: {
      primary: mode === 'light' ? '#7FFFD4' : '#242124',
      secondary: mode === 'light' ? '#B2FFFF' : '#2A3439',
      transparent: mode === 'light' ? '#FFE4E1' : '#E4E4E4'
    },
    red: {
      light: '#FFC0CB',
      dark: '#ED2939'
    },
    orange: {
      light: '#FBCEB1',
      dark: '#FF7538'
    },
    green: {
      light: '#90EE90',
      dark: '#3EB489'
    },
    turquoise: {
      light: '#E0FFFF',
      dark: '#3AA8C1'
    },
    blue: {
      light: '#AFDBF5',
      dark: '#0087BD'
    },
    violet: {
      light: '#FAE6FA',
      dark: '#7851A9'
    },
    pink: {
      light: '#FFDAE9',
      dark: '#C54B8C'
    },
    gray: {
      light: '#E5E4E2',
      dark: '#708090'
    },
    yellow: {
      light: '#FFFDD0',
      dark: '#FCF75E'
    },
    brown: {
      light: '#EFDECD',
      dark: '#926644'
    },
    primary: {
      light: '#76FF7A',
      main: '#0BDA51',
      dark: '#00A86B',
      contrastText: whiteColor
    },
    secondary: {
      light: '#73C2FB',
      main: '#00B9E8',
      dark: '#0095B6',
      contrastText: whiteColor
    },
    error: {
      light: '#FF7F7F',
      main: '#F2003C',
      dark: '#C51E3A',
      contrastText: whiteColor
    },
    warning: {
      light: '#FFFF00',
      main: '#FFA000',
      dark: '#B87333',
      contrastText: whiteColor
    },
    info: {
      light: '#73C2FB',
      main: '#00B9E8',
      dark: '#0095B6',
      contrastText: whiteColor
    },
    success: {
      light: '#76FF7A',
      main: '#0BDA51',
      dark: '#00A86B',
      contrastText: whiteColor
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161'
    },
    text: {
      primary: `rgba(${mainColor}, 0.9)`,
      secondary: `rgba(${mainColor}, 0.7)`,
      disabled: `rgba(${mainColor}, 0.5)`
    },
    divider: `rgba(${mainColor}, 0.15)`,
    background: {
      paper: mode === 'light' ? lightPaperColor : darkPaperBgColor,
      default: defaultBgColor()
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  } as Palette
}

export default DefaultPalette
