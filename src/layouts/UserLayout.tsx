import { ReactNode } from 'react'
import AppBarLayout from './AppBarLayout'
import { Box, BoxProps, styled } from '@mui/material'
import DrawerLayout from './DrawerLayout'

interface UserLayoutProps {
  children: ReactNode
}
const UserLayoutWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  height: '100%'
}))
const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})
const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(4),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <UserLayoutWrapper>
      <DrawerLayout />
      <MainContentWrapper>
        <AppBarLayout />
        <ContentWrapper>{children}</ContentWrapper>
      </MainContentWrapper>
    </UserLayoutWrapper>
  )
}

export default UserLayout
