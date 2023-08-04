import { IconButton, Tooltip, TooltipProps } from '@mui/material'
import IconifyIcon from '../icon'
import { MouseEventHandler } from 'react'
type CustomTooltipProps = {
  title: string
  icon: string
  statusColor: string
  sx?: TooltipProps['sx']
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}
const CustomToolTip = (props: CustomTooltipProps) => {
  const { title, icon, sx, statusColor, onClick } = props
  return (
    <Tooltip
      title={title}
      sx={{
        backgroundColor: `status.${statusColor}`,
        padding: '5px',
        '&:hover.MuiIconButton-root': { backgroundColor: `status.${statusColor}` },
        ...sx
      }}
      onClick={onClick}
    >
      <IconButton>
        <IconifyIcon icon={icon} fontSize={20} color='white' />
      </IconButton>
    </Tooltip>
  )
}

export default CustomToolTip
