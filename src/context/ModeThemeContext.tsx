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
  const [mode, setMode] = useState<PaletteMode>((localStorage.getItem('mode') as PaletteMode) || 'light')

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
