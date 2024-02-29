import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import IconifyIcon from '@/core/components/icon'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { Box } from '@mui/material'
import ScrumboardItemDetailSidebar from './ScrumboardItemDetailSidebar'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3)
  },

  '& .MuiPaper-root': {
    borderRadius: '24px',
    maxWidth: '768px',
    width: '100%',
    margin: theme.spacing(4)
  }
}))
const TitleTag = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '1rem'
}))
const ItemContentStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  justifyContent: 'space-between'
}))

export default function ScrumboardItemDetail() {
  const [open, setOpen] = React.useState(true)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
        <DialogTitle
          sx={theme => ({
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/stan-management.appspot.com/o/stan_image_card%2F1.jpg?alt=media&token=85c21ddf-c8b9-463c-9b0a-b9fde32d3d47)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundColor: theme => theme.palette.background.default,
            position: 'relative',
            [theme.breakpoints.down('md')]: {
              height: '100px'
            }
          })}
          id='customized-dialog-title'
        >
          <Button
            sx={{
              position: 'absolute',
              right: 8,
              bottom: 8,
              color: theme => theme.palette.text.primary,
              backgroundColor: theme => hexToRGBA(theme.palette.grey[300], 0.8),
              '&:hover': {
                backgroundColor: theme => hexToRGBA(theme.palette.grey[300], 1)
              }
            }}
          >
            <IconifyIcon icon='mingcute:bank-card-line' fontSize={18} />
            <Typography sx={{ textTransform: 'none', fontWeight: 600, ml: 2, fontSize: '12px' }}>Ảnh bìa</Typography>
          </Button>
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
            backgroundColor: theme => hexToRGBA(theme.palette.grey[300], 0.6),
            '&:hover': {
              backgroundColor: theme => hexToRGBA(theme.palette.grey[300], 0.8)
            }
          }}
        >
          <IconifyIcon icon='humbleicons:times' fontSize={18} />
        </IconButton>
        <DialogContent dividers>
          <TitleTag>
            <IconifyIcon icon='fe:credit-card' fontSize={24} />
            <Typography variant='h3'>Xây dựng giao diện dashboard</Typography>
          </TitleTag>

          <ItemContentStyled>
            <Box>
              <TitleTag>
                <IconifyIcon icon='fe:credit-card' fontSize={24} />
                <Typography variant='h3'>Xây dựng giao diện dashboard</Typography>
              </TitleTag>
            </Box>
            <ScrumboardItemDetailSidebar />
          </ItemContentStyled>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  )
}
