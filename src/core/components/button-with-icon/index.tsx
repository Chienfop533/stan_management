import { Button, ButtonProps, Typography } from '@mui/material'
import IconifyIcon from '../icon'
interface ButtonWithIconType {
  icon: string
  name: string
}
const ButtonWithIcon = (props: ButtonWithIconType & ButtonProps) => {
  const { icon, name, sx, ...rest } = props
  return (
    <Button
      size='large'
      variant='contained'
      sx={{ borderRadius: '10px', height: '45px', px: 4, minWidth: 'unset', ...sx }}
      {...rest}
    >
      <IconifyIcon icon={icon} width={24} height={24} />
      <Typography sx={{ ml: 2 }}>{name}</Typography>
    </Button>
  )
}

export default ButtonWithIcon
