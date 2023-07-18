// ** React Import

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import IconifyIcon from '@/core/components/icon'
import { Box, Divider, IconButton, Menu, MenuItem, MenuItemProps, Typography, styled } from '@mui/material'

const MenuItemStyled = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  margin: '0 0.5rem',
  borderRadius: '5px'
}))

const LanguageDropdown = () => {
  // ** Hook
  const { i18n } = useTranslation()
  const iconLang = localStorage.getItem('i18nextLng') || 'vi'

  const handleLangItemClick = (lang: 'en' | 'vi') => {
    i18n.changeLanguage(lang)
  }

  // ** Change html `lang` attribute when changing locale
  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IconButton aria-haspopup='true' onClick={handleClick} aria-controls={open ? 'language' : undefined}>
          <IconifyIcon icon={iconLang == 'vi' ? 'flagpack:vn' : 'flagpack:us'} width={32} height={24} />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='language'
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
              marginTop: '1rem',
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
        <MenuItemStyled
          selected={iconLang == 'vi'}
          onClick={() => handleLangItemClick('vi')}
          sx={theme => ({
            backgroundColor: iconLang == 'vi' ? `${theme.palette.primary.main} !important` : '',
            color: iconLang == 'vi' ? `${theme.palette.grey[50]} !important` : 'inherit',
            mx: '1rem'
          })}
        >
          <Typography>Việt Nam</Typography>
        </MenuItemStyled>
        <Divider />
        <MenuItemStyled
          selected={iconLang == 'en'}
          onClick={() => handleLangItemClick('en')}
          sx={theme => ({
            backgroundColor: iconLang == 'en' ? `${theme.palette.primary.main} !important` : '',
            color: iconLang == 'en' ? `${theme.palette.grey[50]} !important` : 'inherit',
            mx: '1rem'
          })}
        >
          <Typography>English</Typography>
        </MenuItemStyled>
      </Menu>
    </>
  )
}

export default LanguageDropdown
