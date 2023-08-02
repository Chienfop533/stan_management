import { useMediaQuery, useTheme } from '@mui/material'

const MediaQuery = () => {
  const theme = useTheme()
  const laptop = useMediaQuery(theme.breakpoints.down('lg'))
  const tablet = useMediaQuery(theme.breakpoints.down('md'))
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return { laptop, tablet, mobile }
}

export default MediaQuery
