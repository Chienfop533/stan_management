import { ReactNode, useEffect, useState } from 'react'
import AppBarLayout from './AppBarLayout'
import { Box, BoxProps, Fab, styled } from '@mui/material'
import DrawerLayout from './DrawerLayout'
import ScrollToTop from '@/core/components/scroll-to-top'
import IconifyIcon from '@/core/components/icon'
import QueryBreakpoints from '@/core/utils/query-breakpoints'

interface UserLayoutProps {
  children: ReactNode
}
const UserLayoutWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  height: '100%'
}))
const MainContentWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen
  })
}))

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4),
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen
  }),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))

const UserLayout = ({ children }: UserLayoutProps) => {
  const drawResponsive = QueryBreakpoints().drawResponsive
  const [openDrawer, setOpenDrawer] = useState<boolean>(!drawResponsive)
  useEffect(() => {
    if (drawResponsive) {
      setOpenDrawer(false)
    } else {
      setOpenDrawer(true)
    }
  }, [drawResponsive])
  return (
    <UserLayoutWrapper>
      <DrawerLayout openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <MainContentWrapper>
        <AppBarLayout openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <ContentWrapper
          sx={{
            width: openDrawer && !drawResponsive ? `calc(100% - 280px)` : '100%',
            marginLeft: openDrawer && !drawResponsive ? '280px' : 0
          }}
        >
          {children}
        </ContentWrapper>
      </MainContentWrapper>
      <ScrollToTop className='mui-fixed'>
        <Fab color='primary' size='small' aria-label='scroll back to top'>
          <IconifyIcon icon='tabler:arrow-up' />
        </Fab>
      </ScrollToTop>
    </UserLayoutWrapper>
  )
}

export default UserLayout
