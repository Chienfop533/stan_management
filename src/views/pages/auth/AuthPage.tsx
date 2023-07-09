import { Box, Theme, useMediaQuery, useTheme } from '@mui/material'
import AuthWrapper from './AuthWrapper'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { ReactNode } from 'react'
interface AuthPageProps {
  children: ReactNode
}
const AuthPage = ({ children }: AuthPageProps) => {
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        background: (theme: Theme) =>
          `linear-gradient(145deg, ${hexToRGBA(theme.palette.backgroundColor.primary, 0.5)} 0%,${hexToRGBA(
            theme.palette.backgroundColor.secondary,
            0.2
          )} 25%,${hexToRGBA(theme.palette.backgroundColor.primary, 0.2)} 50%, ${hexToRGBA(
            theme.palette.backgroundColor.secondary,
            0.5
          )} 100%)`,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}
    >
      {' '}
      {!hidden ? <AuthWrapper /> : null}
      <Box sx={{ width: 600, p: 8, backgroundColor: 'background.paper', borderRadius: '20px' }}>{children}</Box>
    </Box>
  )
}

export default AuthPage