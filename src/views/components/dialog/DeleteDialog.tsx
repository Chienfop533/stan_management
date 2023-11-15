import IconifyIcon from '@/core/components/icon'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'

interface DeleteDialogProps {
  title: string
  dialogOpen: boolean
  setDialogOpen: Dispatch<SetStateAction<boolean>>
  handleDelete: () => void
}
const DeleteDialog = (props: DeleteDialogProps) => {
  const { title, dialogOpen, setDialogOpen, handleDelete } = props
  const { t } = useTranslation()
  const handleClose = () => {
    setDialogOpen(false)
  }
  return (
    <Dialog
      open={dialogOpen}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{t('delete') + ' ' + title.toLowerCase()}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{t('delete_description')}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          <IconifyIcon icon='iconoir:cancel' fontSize={20} style={{ marginRight: '0.25rem' }} />
          {t('cancel')}
        </Button>
        <Button
          onClick={handleDelete}
          sx={{ backgroundColor: 'error.main', color: 'white', '&:hover': { backgroundColor: 'error.dark' } }}
        >
          <IconifyIcon icon='material-symbols-light:delete' fontSize={20} style={{ marginRight: '0.25rem' }} />
          {t('delete')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog
