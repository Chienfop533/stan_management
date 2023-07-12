import IconifyIcon from '@/core/components/icon'
import { IconButton } from '@mui/material'
import { useState } from 'react'

const ModeToggle = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const handleModeToggle = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }
  return (
    <IconButton color='inherit' onClick={handleModeToggle}>
      <IconifyIcon icon={mode == 'light' ? 'ph:sun-light' : 'circum:dark'} />
    </IconButton>
  )
}

export default ModeToggle
