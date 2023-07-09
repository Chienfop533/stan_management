import BlankLayout from '@/layouts/BlankLayout'
import AuthPage from '@/views/pages/auth/AuthPage'
import { Typography } from '@mui/material'
import { ReactNode } from 'react'

const LoginPage = () => {
  return (
    <AuthPage>
      <Typography>Ok</Typography>
      <Typography>Ok</Typography>
      <Typography>Ok</Typography>
      <Typography>Ok</Typography>
      <Typography>Ok</Typography>
    </AuthPage>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
export default LoginPage
