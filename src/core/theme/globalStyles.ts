import { lato } from '@/assets/fonts/fonts'

const GlobalStyles = () => {
  return {
    'p.MuiTypography-root': {
      fontFamily: lato.style.fontFamily
    },
    'div.MuiInputBase-root': {
      fontFamily: lato.style.fontFamily
    },
    'label.MuiFormLabel-root': {
      fontFamily: lato.style.fontFamily
    },
    'button.MuiButtonBase-root': {
      fontFamily: lato.style.fontFamily
    }
  }
}

export default GlobalStyles
