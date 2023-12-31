'use client'
import { Box, Theme, styled } from '@mui/material'
import AuthWrapper from './AuthWrapper'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { ReactNode } from 'react'
import MediaQuery from '@/core/utils/media-query'
interface AuthPageProps {
  children: ReactNode
}
const BoxWrapper = styled(Box)(({ theme }) => ({
  padding: '2rem',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: 600,
  minHeight: '80vh',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '0.5rem'
  }
}))
const AuthPage = ({ children }: AuthPageProps) => {
  const tablet = MediaQuery().tablet
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
      {!tablet ? <AuthWrapper /> : null}
      <BoxWrapper>{children}</BoxWrapper>
    </Box>
  )
}

export default AuthPage
