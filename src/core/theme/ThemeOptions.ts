import { PaletteMode, ThemeOptions, createTheme } from '@mui/material'
import { deepmerge } from '@mui/utils'
import breakpoints from './breakpoints'
import spacing from './spacing'
import typography from './typography'
import palette from './palette'

const themeOptions = (mode: PaletteMode): ThemeOptions => {
  const defaultTheme = createTheme()
  return deepmerge(defaultTheme, {
    breakpoints: breakpoints(),
    ...spacing,
    typography,
    palette: palette(mode)
  })
}
export default themeOptions
