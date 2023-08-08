import IconifyIcon from '@/core/components/icon'
import { Grid, IconButton, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export type HeaderTitleProps =
  | {
      pageTitle: string
      icon: string
      type: 'mainPage'
    }
  | {
      pageTitle: string
      icon?: undefined
      type: 'subPage'
    }
const HeaderTitle = (props: HeaderTitleProps) => {
  const { pageTitle, icon, type } = props
  const router = useRouter()
  const redirectToBack = () => {
    //Xử lý khi người dùng vào từ 1 link khác
    if (window?.history?.state?.idx == 0) {
      router.push('/dashboard')
    } else {
      router.back()
    }
  }
  return (
    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={type == 'subPage' ? redirectToBack : undefined}>
        <IconifyIcon icon={type == 'subPage' ? 'ic:round-keyboard-backspace' : icon} fontSize={24} />
      </IconButton>
      <Typography variant='h3'>{pageTitle}</Typography>
    </Grid>
  )
}

export default HeaderTitle
