import { ThemeContext } from '@/context/ModeThemeContext'
import IconifyIcon from '@/core/components/icon'
import { IconButton } from '@mui/material'
import { useContext, useState } from 'react'

const ModeToggle = () => {
  const modeContext = useContext(ThemeContext)

  return (
    <IconButton color='inherit' onClick={modeContext.handleModeToggle}>
      <IconifyIcon icon={modeContext.mode == 'light' ? 'ph:sun-light' : 'circum:dark'} />
    </IconButton>
  )
}

export default ModeToggle
