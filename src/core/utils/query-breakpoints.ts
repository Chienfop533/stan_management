import { useMediaQuery, useTheme } from '@mui/material'

const QueryBreakpoints = () => {
  const theme = useTheme()
  const drawResponsive = useMediaQuery(theme.breakpoints.down('lg'))
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  return { drawResponsive, hidden }
}

export default QueryBreakpoints
