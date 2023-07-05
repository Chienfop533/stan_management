import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { ReactNode } from 'react'
import themeOptions from './ThemeOptions'

interface Props {
  children: ReactNode
}

const ThemeComponent = (props: Props) => {
  const { children } = props
  const theme = createTheme(themeOptions('light'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
export default ThemeComponent
