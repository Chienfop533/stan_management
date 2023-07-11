import { bungee_inline } from '@/assets/fonts/fonts'
import IconifyIcon from '@/core/components/icon'
import BlankLayout from '@/layouts/BlankLayout'
import AuthPage from '@/views/pages/auth/AuthPage'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

const Error404 = () => {
  const route = useRouter()
  return (
    <AuthPage>
      <Typography
        variant='h1'
        className={bungee_inline.className}
        sx={{ fontSize: 64, color: 'green.dark', margin: '1rem' }}
      >
        404
      </Typography>
      <Typography variant='h2' sx={{ fontSize: 32, color: 'red.dark', margin: '1rem', textAlign: 'center' }}>
        Không tìm thấy trang!
      </Typography>
      <Typography sx={{ fontSize: 16, textAlign: 'center' }}>
        Vui lòng quay lại trang chủ để tiếp tục sử dụng Stan management
      </Typography>
      <Button
        fullWidth
        size='large'
        variant='contained'
        sx={{ margin: '2rem', borderRadius: '10px', height: '45px', maxWidth: 400 }}
        onClick={() => route.push('/')}
      >
        <IconifyIcon icon='ion:arrow-back' />
        <Typography component='span' sx={{ ml: 4, fontWeight: 600, fontSize: 16 }}>
          Về trang chủ
        </Typography>
      </Button>
    </AuthPage>
  )
}
Error404.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
export default Error404
