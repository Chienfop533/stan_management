import { Button, ButtonProps } from '@mui/material'
import { ReactNode } from 'react'
type Props = ButtonProps & {
  children: ReactNode
}
const ButtonStyled = (props: Props) => {
  const { sx, children, ...rest } = props
  return (
    <Button
      fullWidth
      size='large'
      variant='contained'
      sx={{ borderRadius: '10px', height: '45px', minWidth: 'unset', ...sx }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default ButtonStyled
