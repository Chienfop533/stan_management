import { AppBar, Box, IconButton, Theme, Toolbar, styled } from '@mui/material'
import UserDropdown from './components/UserDropdown'
import IconifyIcon from '@/core/components/icon'
import NotificationDropdown from './components/NotificationDropdown'
import EventDropdown from './components/EventDropdown'
import HistoryDropdown from './components/HistoryDropdown'
import ModeToggle from './components/ModeToggle'

const AppBarWrapper = styled(AppBar)(({ theme }) => ({
  inlineSize: '100%',
  paddingInline: '1rem',
  insetBlockStart: '0.5rem',
  height: 60,
  position: 'sticky',
  backgroundColor: 'transparent',
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
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '10px',
  minHeight: '60px !important',
  flexShrink: 0,
  backdropFilter: 'blur(5px)'
}))
const AppBarLayout = () => {
  return (
    <AppBarWrapper elevation={0} color='default'>
      <ToolbarStyled>
        <IconButton color='inherit'>
          <IconifyIcon icon='line-md:menu-fold-right' />
        </IconButton>
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
