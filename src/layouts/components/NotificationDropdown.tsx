import IconifyIcon from '@/core/components/icon'
import { Badge, IconButton } from '@mui/material'

const NotificationDropdown = () => {
  return (
    <>
      <IconButton color='inherit'>
        <Badge color='error' badgeContent={2}>
          <IconifyIcon icon='mi:notification' />
        </Badge>
      </IconButton>
    </>
  )
}

export default NotificationDropdown
