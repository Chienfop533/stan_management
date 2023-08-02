import IconifyIcon from '@/core/components/icon'
import { Grid, IconButton, Typography } from '@mui/material'

const HeaderTitle = ({ icon, pageTitle }: { icon: string; pageTitle: string }) => {
  return (
    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton>
        <IconifyIcon icon={icon} />
      </IconButton>
      <Typography variant='h3'>{pageTitle}</Typography>
    </Grid>
  )
}

export default HeaderTitle
