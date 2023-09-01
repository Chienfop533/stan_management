import CustomToastContainer from '@/core/components/toast'
import { Box, BoxProps, styled } from '@mui/material'
import { ReactNode } from 'react'

const BlankLayoutWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

interface BlankLayoutProps {
  children: ReactNode
}
const BlankLayout = ({ children }: BlankLayoutProps) => {
  return (
    <BlankLayoutWrapper>
      {children}
      <CustomToastContainer />
    </BlankLayoutWrapper>
  )
}

export default BlankLayout
