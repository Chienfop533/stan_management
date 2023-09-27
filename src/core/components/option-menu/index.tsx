import { Menu, MenuItem, Typography, styled } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import IconifyIcon from '../icon'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
type OptionsMenuProp = {
  id: string
  anchorEl: null | HTMLElement
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
  listItem: {
    icon: string
    iconColor?: string
    text: string
    handleItem?: React.MouseEventHandler<HTMLLIElement> | undefined
  }[]
}
const MenuStyled = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
  }
}))
const OptionsMenu = (props: OptionsMenuProp) => {
  const { id, anchorEl, setAnchorEl, listItem } = props
  const open = Boolean(anchorEl)
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setAnchorEl(null)
  }
  return (
    <MenuStyled
      anchorEl={anchorEl}
      id={id}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      disableScrollLock={true}
      elevation={0}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {listItem.map(item => (
        <MenuItem
          key={item.text}
          onClick={item.handleItem}
          sx={theme => ({
            mx: '0.5rem',
            borderRadius: '5px',
            ':hover': { backgroundColor: item.iconColor == 'red' ? hexToRGBA(theme.palette.red.light, 0.6) : undefined }
          })}
        >
          <IconifyIcon icon={item.icon} color={item.iconColor} fontSize={18} />
          <Typography sx={theme => ({ ml: 4, color: item.iconColor == 'red' ? theme.palette.red.dark : undefined })}>
            {item.text}
          </Typography>
        </MenuItem>
      ))}
    </MenuStyled>
  )
}

export default OptionsMenu
