import UserService from '@/services/api/UserService'
import { Typography } from '@mui/material'

export default function Home() {
  const refreshToken = async () => {
    await UserService.refreshToken()
    await UserService.logout()
    await UserService.verifyToken()
  }
  console.log(refreshToken())

  return <Typography paragraph>Home</Typography>
}
