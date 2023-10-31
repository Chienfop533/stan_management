import IconifyIcon from '@/core/components/icon'
import { useAppDispatch } from '@/hooks/redux'
import { deleteScrumboard } from '@/store/scrumboardSlice'
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled
} from '@mui/material'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'

const DrawerWrapper = styled(Drawer)(({ theme }) => ({
  width: 250,
  height: 'calc(100vh - 84px)',
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
  const { t } = useTranslation()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const handleClose = () => {
    setOpenSideBar(false)
  }
  const handleDelete = () => {
    dispatch(deleteScrumboard(scrumboardId))
    router.push('/manage/scrumboard')
  }
  return (
    <>
      {/* <DrawerWrapper
        variant='temporary'
        open={true}
        anchor='right'
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', sm: 'block' }
        }}
      >
        Ok
      </DrawerWrapper> */}
      <Hidden lgDown>
        <DrawerWrapper
          variant='permanent'
          anchor='right'
          open={openSideBar}
          sx={{
            marginRight: openSideBar ? '0' : '-250px',
            transition: theme =>
              theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
              })
          }}
        >
          <Box sx={{ position: 'relative', padding: '0.5rem' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: 600, textAlign: 'center' }}>{t('setting')}</Typography>
            <IconButton
              sx={{ position: 'absolute', right: '0.5rem', top: '0.5rem', padding: 0, borderRadius: '5px' }}
              onClick={handleClose}
            >
              <IconifyIcon icon='iconoir:cancel' fontSize={27} />
            </IconButton>
          </Box>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <IconifyIcon icon='carbon:information' fontSize={24} />
                </ListItemIcon>
                <ListItemText primary={t('detail')} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <IconifyIcon icon='radix-icons:activity-log' fontSize={24} />
                </ListItemIcon>
                <ListItemText primary={t('activities')} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <IconifyIcon icon='ic:baseline-edit' fontSize={24} />
                </ListItemIcon>
                <ListItemText primary={t('edit')} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <IconifyIcon icon='zondicons:pause-outline' fontSize={24} />
                </ListItemIcon>
                <ListItemText primary={t('pause')} />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <IconifyIcon icon='formkit:people' fontSize={24} />
                </ListItemIcon>
                <ListItemText primary={t('member')} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <IconifyIcon icon='solar:calendar-outline' fontSize={24} />
                </ListItemIcon>
                <ListItemText primary={t('calendar')} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <IconifyIcon icon='mingcute:tag-line' fontSize={24} />
                </ListItemIcon>
                <ListItemText primary={t('labels')} />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding onClick={handleDelete}>
              <ListItemButton sx={{ borderRadius: '0.5rem' }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <IconifyIcon icon='mingcute:delete-2-fill' fontSize={24} />
                </ListItemIcon>
                <ListItemText primary={t('delete')} />
              </ListItemButton>
            </ListItem>
          </List>
        </DrawerWrapper>
      </Hidden>
    </>
  )
}

export default ScrumboardSettings
