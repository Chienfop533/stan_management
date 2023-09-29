import { Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, TextField } from '@mui/material'
import { MouseEventHandler, ReactNode } from 'react'
type CustomDialogProps = {
  open: boolean
  title: string
  children: ReactNode
  handleClose: MouseEventHandler<HTMLButtonElement> | undefined
  closeName: string
  handleSave: MouseEventHandler<HTMLButtonElement> | undefined
  saveName: string
  sx?: DialogProps['sx']
}
const CustomDialog = (props: CustomDialogProps) => {
  const { open, title, children, handleClose, handleSave, closeName, saveName, sx } = props
  return (
    <Dialog open={open} onClose={handleClose} disableScrollLock={true} sx={{ ...sx }}>
      <DialogTitle sx={{ fontFamily: 'Nunito' }}>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button variant='contained' color='error' sx={{ fontWeight: 600, boxShadow: 'none' }} onClick={handleClose}>
          {closeName}
        </Button>
        <Button variant='contained' sx={{ fontWeight: 600, boxShadow: 'none' }} onClick={handleSave}>
          {saveName}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
