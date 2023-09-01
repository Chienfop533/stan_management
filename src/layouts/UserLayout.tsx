import { ReactNode, useEffect, useState } from 'react'
import AppBarLayout from './AppBarLayout'
import { Box, BoxProps, Fab, styled } from '@mui/material'
import DrawerLayout from './DrawerLayout'
import ScrollToTop from '@/core/components/scroll-to-top'
import IconifyIcon from '@/core/components/icon'
import MediaQuery from '@/core/utils/media-query'
import CustomToastContainer from '@/core/components/toast'

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
  const laptop = MediaQuery().laptop
  const [openDrawer, setOpenDrawer] = useState<boolean>(!laptop)
  useEffect(() => {
    setOpenDrawer(!laptop)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [laptop])

  return (
    <UserLayoutWrapper>
      <DrawerLayout openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <CustomToastContainer />
      <MainContentWrapper>
        <AppBarLayout openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <ContentWrapper
          sx={theme => ({
            width: openDrawer ? `calc(100% - 280px)` : '100%',
            marginLeft: openDrawer ? '280px' : 0,
            [theme.breakpoints.down('lg')]: {
              width: '100%',
              marginLeft: 0
            }
          })}
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
