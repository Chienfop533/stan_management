import IconifyIcon from '@/core/components/icon'
import { useAuth } from '@/hooks/useAuth'
import UserService from '@/services/UserService'
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, MenuItemProps, Typography, styled } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

const MenuItemStyled = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  margin: '0 0.5rem',
  borderRadius: '5px'
}))

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const router = useRouter()
  const { t } = useTranslation()
  const auth = useAuth()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = async () => {
    const response: any = await auth.logout()
    if (response.success) {
      toast.success(t('action_message_success', { action: t('logout') }))
    } else {
      toast.error(t('action_message_fail', { action: t('logout') }))
    }
  }
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 2 }}>
        <IconButton aria-haspopup='true' onClick={handleClick} aria-controls={open ? 'profile' : undefined}>
          <Avatar
            sx={{ width: 40, height: 40 }}
            alt='Avatar'
            src={auth?.user?.avatar || '/images/default_avatar.png'}
          ></Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='profile'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        disableScrollLock={true}
        elevation={0}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        slotProps={{
          paper: {
            sx: {
              marginTop: '0.5rem',
              overflow: 'visible',
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 20,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
              }
            }
          }
        }}
      >
        <MenuItemStyled onClick={() => router.push('/personal/profile')}>
          <IconifyIcon icon='radix-icons:avatar' />
          <Typography sx={{ ml: 4 }}>{t('profile')}</Typography>
        </MenuItemStyled>
        <Divider />
        <MenuItemStyled onClick={handleLogout}>
          <IconifyIcon icon='ic:round-logout' color='red' />
          <Typography sx={{ ml: 4, color: 'red.dark' }}>{t('logout')}</Typography>
        </MenuItemStyled>
      </Menu>
    </>
  )
}

export default UserDropdown
