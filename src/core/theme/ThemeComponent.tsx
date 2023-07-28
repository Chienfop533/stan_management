import { CssBaseline, GlobalStyles, ThemeProvider, createTheme } from '@mui/material'
import { ReactNode, useContext } from 'react'
import themeOptions from './ThemeOptions'
import GlobalStyling from './globalStyles'
import { ThemeContext } from '@/context/ModeThemeContext'
import { useTranslation } from 'react-i18next'
import Spinner from '../components/spinner'

interface Props {
  children: ReactNode
}

const ThemeComponent = (props: Props) => {
  const { children } = props
  const modeContext = useContext(ThemeContext)

  const theme = createTheme(themeOptions(modeContext.mode))
  const { ready } = useTranslation()
  if (!ready) {
    return <Spinner />
  } else {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={() => GlobalStyling() as any} />
        <CssBaseline />
        {children}
      </ThemeProvider>
    )
  }
}
export default ThemeComponent
