import MediaQuery from '@/core/utils/media-query'
import HeaderTitle from '@/views/components/header/HeaderTitle'
import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

const CustomPageHeader = ({ icon, pageTitle, children }: { icon: string; pageTitle: string; children: ReactNode }) => {
  const router = useRouter()
  const tablet = MediaQuery().tablet

  const redirectToBack = () => {
    //Xử lý khi người dùng vào từ 1 link khác
    if (window?.history?.state?.idx == 0) {
      router.push('/dashboard')
    } else {
      router.back()
    }
  }

  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {!tablet ? <HeaderTitle icon={icon} pageTitle={pageTitle} /> : null}
      <Grid item container xs={12} md={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        {children}
      </Grid>
    </Grid>
  )
}

export default CustomPageHeader
