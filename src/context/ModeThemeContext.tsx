import { PaletteMode } from '@mui/material'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface Props {
  children: ReactNode
}
const defaultThemeContext = {
  mode: 'light' as PaletteMode,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleModeToggle: () => {}
}

export const ThemeContext = createContext(defaultThemeContext)
const ModeThemeProvider = ({ children }: Props) => {
  let initMode = 'light' as PaletteMode
  const [mode, setMode] = useState<PaletteMode>(initMode)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    initMode = (localStorage.getItem('mode') as PaletteMode) || 'light'
    window.localStorage.setItem('mode', initMode)
    setMode(initMode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleModeToggle = () => {
    if (mode === 'light') {
      setMode('dark')
      window.localStorage.setItem('mode', 'dark')
    } else {
      setMode('light')
      window.localStorage.setItem('mode', 'light')
    }
  }
  const value = { mode, handleModeToggle }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ModeThemeProvider
