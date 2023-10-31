import { Drawer, Hidden, SwipeableDrawer, styled } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import SideBarList from './SideBarList'

const DrawerWrapper = styled(Drawer)(({ theme }) => ({
  width: 250,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 250,
    boxSizing: 'border-box'
  },
  zIndex: 1200,
  right: 0,
  position: 'absolute',
  '.MuiPaper-root': {
    padding: '0 0.5rem',
    position: 'absolute',
    border: 'none'
  }
}))
const ScrumboardSettings = ({
  openSideBar,
  setOpenSideBar,
  scrumboardId
}: {
  openSideBar: boolean
  setOpenSideBar: Dispatch<SetStateAction<boolean>>
  scrumboardId: string
}) => {
  const handleClose = () => {
    setOpenSideBar(false)
  }

  return (
    <>
      <Hidden lgUp>
        <SwipeableDrawer
          anchor='right'
          open={openSideBar}
          onClose={handleClose}
          onOpen={handleClose}
          sx={{
            width: 250,
            '& .MuiDrawer-paper': {
              width: 250,
              boxSizing: 'border-box'
            },
            '.MuiPaper-root': {
              padding: '0 0.5rem',
              border: 'none'
            }
          }}
        >
          <SideBarList scrumboardId={scrumboardId} setOpenSideBar={setOpenSideBar} />
        </SwipeableDrawer>
      </Hidden>
      <Hidden lgDown>
        <DrawerWrapper
          variant='permanent'
          anchor='right'
          open={openSideBar}
          sx={{
            height: 'calc(100vh - 84px)',
            marginRight: openSideBar ? '0' : '-250px',
            transition: theme =>
              theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
              })
          }}
        >
          <SideBarList scrumboardId={scrumboardId} setOpenSideBar={setOpenSideBar} />
        </DrawerWrapper>
      </Hidden>
    </>
  )
}

export default ScrumboardSettings
