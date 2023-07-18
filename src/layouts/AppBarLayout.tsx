import { AppBar, Box, IconButton, Toolbar, styled, useMediaQuery, useTheme } from '@mui/material'
import UserDropdown from './components/UserDropdown'
import IconifyIcon from '@/core/components/icon'
import NotificationDropdown from './components/NotificationDropdown'
import EventDropdown from './components/EventDropdown'
import HistoryDropdown from './components/HistoryDropdown'
import ModeToggle from './components/ModeToggle'
import { Dispatch, SetStateAction } from 'react'
import { OpenDrawerProps } from './UserLayout'
import dynamic from 'next/dynamic'

const LanguageDropdown = dynamic(() => import('./components/LanguageDropdown'), { ssr: false })

const AppBarWrapper = styled(AppBar)(({ theme }) => ({
  paddingInline: '1rem',
  insetBlockStart: '0.5rem',
  height: 60,
  position: 'sticky',
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen
  }),
  [theme.breakpoints.down('sm')]: {
    paddingInline: '0.5rem'
  },
  '&:after': {
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    content: '""',
    position: 'absolute',
    backdropFilter: 'blur(10px)',
    height: `calc(60px + 1rem)`,
    insetBlockStart: '-0.5rem'
  }
}))
const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '10px',
  minHeight: '60px !important',
  flexShrink: 0,
  backdropFilter: 'blur(5px)'
}))
const AppBarLayout = ({
  openDrawer,
  setOpenDrawer
}: {
  openDrawer: OpenDrawerProps
  setOpenDrawer: Dispatch<SetStateAction<OpenDrawerProps>>
}) => {
  const theme = useTheme()
  const drawer = useMediaQuery(theme.breakpoints.down('lg'))
  const handleOpen = () => {
    if (!drawer) {
      setOpenDrawer(prev => ({ ...prev, default: true }))
    } else {
      setOpenDrawer(prev => ({ ...prev, responsive: true }))
    }
  }
  return (
    <AppBarWrapper
      elevation={0}
      color='default'
      sx={theme => ({
        width: openDrawer.default ? `calc(100% - 280px)` : '100%',
        marginLeft: openDrawer.default ? '280px' : 0,
        [theme.breakpoints.down('lg')]: {
          width: '100%',
          marginLeft: 0
        }
      })}
    >
      <ToolbarStyled sx={{ justifyContent: !openDrawer.default || drawer ? 'space-between' : 'flex-end' }}>
        {!openDrawer.default || drawer ? (
          <IconButton color='inherit' onClick={handleOpen}>
            <IconifyIcon icon='line-md:menu-fold-right' />
          </IconButton>
        ) : null}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <LanguageDropdown />
          <ModeToggle />
          <HistoryDropdown />
          <EventDropdown />
          <NotificationDropdown />
          <UserDropdown />
        </Box>
      </ToolbarStyled>
    </AppBarWrapper>
  )
}

export default AppBarLayout
