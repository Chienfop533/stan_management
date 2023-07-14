import { AppBar, Box, IconButton, Toolbar, styled } from '@mui/material'
import UserDropdown from './components/UserDropdown'
import IconifyIcon from '@/core/components/icon'
import NotificationDropdown from './components/NotificationDropdown'
import EventDropdown from './components/EventDropdown'
import HistoryDropdown from './components/HistoryDropdown'
import ModeToggle from './components/ModeToggle'
import { Dispatch, SetStateAction } from 'react'
import QueryBreakpoints from '@/core/utils/query-breakpoints'

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
  openDrawer: boolean
  setOpenDrawer: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <AppBarWrapper
      elevation={0}
      color='default'
      sx={{
        width: openDrawer && !QueryBreakpoints().drawResponsive ? `calc(100% - 280px)` : '100%',
        marginLeft: openDrawer && !QueryBreakpoints().drawResponsive ? '280px' : 0
      }}
    >
      <ToolbarStyled sx={{ justifyContent: !openDrawer ? 'space-between' : 'flex-end' }}>
        {!openDrawer && (
          <IconButton color='inherit' onClick={() => setOpenDrawer(true)}>
            <IconifyIcon icon='line-md:menu-fold-right' />
          </IconButton>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
