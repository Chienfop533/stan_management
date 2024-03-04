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
import { Avatar, Box, Checkbox } from '@mui/material'
import ScrumboardItemDetailSidebar from './ScrumboardItemDetailSidebar'
import { useTranslation } from 'react-i18next'
import { ActionButtonStyled } from '@/core/components/action-button'

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
  flexDirection: 'row',
  gap: '1rem'
}))
const ItemContentStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  justifyContent: 'space-between'
}))

const LabelChip = styled(Typography)(({ theme }) => ({
  minWidth: 48,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  fontWeight: 600,
  padding: theme.spacing(2),
  borderRadius: '0.25rem',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.85
  },
  '&:active': {
    opacity: 0.7
  }
}))

export default function ScrumboardItemDetail() {
  const { t } = useTranslation()
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
            <Typography sx={{ textTransform: 'none', fontWeight: 600, ml: 2, fontSize: '12px' }}>
              {t('cover_img')}
            </Typography>
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
            <Box>
              <Typography variant='h3'>Xây dựng giao diện dashboard</Typography>
              <Typography sx={{ fontSize: '14px' }}>
                {t('in_list')}:{' '}
                <Typography
                  component='span'
                  sx={{ fontSize: '14px', color: 'error.main', fontWeight: 600, cursor: 'pointer' }}
                >
                  Todo
                </Typography>
              </Typography>
            </Box>
          </TitleTag>

          <ItemContentStyled>
            <Box>
              <Box
                sx={{
                  margin: '0.75rem 0 0.75rem 2.5rem',
                  display: 'flex',
                  flexDirection: 'row',
                  rowGap: 2,
                  columnGap: 6,
                  flexWrap: 'wrap'
                }}
              >
                <Box sx={{ marginBottom: '0.5rem' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row', gap: 3 }}>
                    <IconifyIcon icon='formkit:people' fontSize={20} />
                    <Typography variant='h4'>{t('member')}</Typography>
                  </Box>
                  <Box
                    sx={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}
                  >
                    <Avatar
                      alt='Remy Sharp'
                      src='/static/images/avatar/1.jpg'
                      sx={{
                        width: 32,
                        height: 32,
                        cursor: 'pointer',
                        '&:hover': { opacity: 0.85 },
                        '&:active': { opacity: 0.7 }
                      }}
                    />
                    <Avatar
                      alt='Remy Sharp'
                      src='/static/images/avatar/1.jpg'
                      sx={{
                        width: 32,
                        height: 32,
                        cursor: 'pointer',
                        '&:hover': { opacity: 0.85 },
                        '&:active': { opacity: 0.7 }
                      }}
                    />
                    <Avatar
                      alt='Remy Sharp'
                      src='/static/images/avatar/1.jpg'
                      sx={{
                        width: 32,
                        height: 32,
                        cursor: 'pointer',
                        '&:hover': { opacity: 0.85 },
                        '&:active': { opacity: 0.7 }
                      }}
                    />
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        cursor: 'pointer',
                        '&:hover': { opacity: 0.85 },
                        '&:active': { opacity: 0.7 }
                      }}
                    >
                      <IconifyIcon icon='fluent:add-20-filled' fontSize={18} />
                    </Avatar>
                  </Box>
                </Box>
                <Box sx={{ marginBottom: '0.5rem' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row', gap: 3 }}>
                    <IconifyIcon icon='mingcute:tag-line' fontSize={20} />
                    <Typography variant='h4'>{t('labels')}</Typography>
                  </Box>
                  <Box
                    sx={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}
                  >
                    <LabelChip
                      sx={{
                        backgroundColor: 'red.dark',
                        color: 'white'
                      }}
                    >
                      Test
                    </LabelChip>
                    <LabelChip
                      sx={{
                        backgroundColor: 'green.dark',
                        color: 'white'
                      }}
                    >
                      Testtttttttrrrr
                    </LabelChip>
                    <LabelChip
                      sx={{
                        backgroundColor: 'green.dark',
                        color: 'white'
                      }}
                    >
                      Test
                    </LabelChip>
                    <LabelChip
                      sx={{
                        backgroundColor: 'green.dark',
                        color: 'white'
                      }}
                    >
                      Testrr
                    </LabelChip>
                    <LabelChip
                      sx={{
                        backgroundColor: 'yellow.light',
                        color: 'black'
                      }}
                    >
                      Test
                    </LabelChip>
                  </Box>
                </Box>
                <Box sx={{ marginBottom: '0.5rem' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row', gap: 3 }}>
                    <IconifyIcon icon='pajamas:clock' fontSize={20} />
                    <Typography variant='h4'>{t('due_date')}</Typography>
                  </Box>
                  <Box
                    sx={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}
                  >
                    <Checkbox sx={{ padding: 0 }} defaultChecked />
                    <Box
                      sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        backgroundColor: theme =>
                          theme.palette.mode == 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
                        cursor: 'pointer',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                        '&:hover': { opacity: 0.85 },
                        '&:active': { opacity: 0.7 }
                      }}
                    >
                      20/06/2023 lúc 14:00
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row', gap: 3 }}>
                    <IconifyIcon icon='fluent:list-24-filled' fontSize={24} />
                    <Typography variant='h3'>{t('description')}</Typography>
                  </Box>
                  <ActionButtonStyled sx={{ padding: '0.25rem' }}>{t('edit')}</ActionButtonStyled>
                </Box>
              </Box>
            </Box>
            <ScrumboardItemDetailSidebar />
          </ItemContentStyled>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  )
}
