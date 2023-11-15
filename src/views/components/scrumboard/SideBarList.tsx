import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import IconifyIcon from '@/core/components/icon'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
const SideBarList = ({
  setOpenSideBar,
  scrumboardId,
  setOpenForm,
  setOpenDeleteDialog
}: {
  setOpenSideBar: Dispatch<SetStateAction<boolean>>
  scrumboardId: string
  setOpenForm: Dispatch<SetStateAction<boolean>>
  setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>
}) => {
  const { t } = useTranslation()
  const router = useRouter()

  const handleClose = () => {
    setOpenSideBar(false)
  }
  const handleDelete = () => {
    setOpenDeleteDialog(true)
  }
  const handleEdit = () => {
    setOpenForm(true)
  }
  return (
    <>
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
        <ListItem disablePadding onClick={handleEdit}>
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
          <ListItemButton
            sx={{ borderRadius: '0.5rem' }}
            onClick={() => router.push(`/manage/scrumboard/${scrumboardId}/member`)}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <IconifyIcon icon='formkit:people' fontSize={24} />
            </ListItemIcon>
            <ListItemText primary={t('member')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ borderRadius: '0.5rem' }}
            onClick={() => router.push(`/manage/scrumboard/${scrumboardId}/calendar`)}
          >
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
        <ListItem disablePadding onClick={handleDelete} sx={{ color: 'error.main' }}>
          <ListItemButton sx={{ borderRadius: '0.5rem' }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <IconifyIcon icon='mingcute:delete-2-fill' fontSize={24} color='red' />
            </ListItemIcon>
            <ListItemText primary={t('delete')} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  )
}

export default SideBarList
