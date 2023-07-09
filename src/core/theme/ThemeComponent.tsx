import { CssBaseline, GlobalStyles, ThemeProvider, createTheme } from '@mui/material'
import { ReactNode } from 'react'
import themeOptions from './ThemeOptions'
import GlobalStyling from './globalStyles'

interface Props {
  children: ReactNode
}

const ThemeComponent = (props: Props) => {
  const { children } = props
  const theme = createTheme(themeOptions('light'))

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={() => GlobalStyling() as any} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
export default ThemeComponent
