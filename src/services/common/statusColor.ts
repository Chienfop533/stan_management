import { useTheme } from '@mui/material'

const StatusColor = (status: string) => {
  const theme = useTheme()
  switch (status) {
    case 'init':
      return theme.palette.status.init
    case 'active':
      return theme.palette.status.active
    case 'complete':
      return theme.palette.status.complete
    case 'late':
      return theme.palette.status.late
    case 'pause':
      return theme.palette.status.pause
    default:
      return theme.palette.status.init
  }
}

export default StatusColor
