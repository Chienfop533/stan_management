import IconifyIcon from '@/core/components/icon'
import Input from '@/core/components/input'
import { LinkStyled } from '@/core/components/link'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import BlankLayout from '@/layouts/BlankLayout'
import AuthPage from '@/views/pages/auth/AuthPage'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { ReactNode, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

interface FormData {
  email: string
  password: string
}

const defaultValues: FormData = {
  email: '',
  password: ''
}

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues, mode: 'onChange' })

  const onSubmit = (formData: FormData) => {
    const { email, password } = formData
    console.log(email, password, rememberMe)
  }
  const theme = useTheme()
  const responsive = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <AuthPage>
      <Typography variant='h1'>Đăng nhập</Typography>
      <Typography fontSize={18}>Ứng dụng quản lý của bạn</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.5rem 0',
          paddingLeft: '3rem',
          m: 2,
          width: !responsive ? 350 : '100%',
          backgroundColor: theme => `${hexToRGBA(theme.palette.backgroundColor.primary, 0.2)}`,
          borderRadius: '50px',
          border: '1px solid',
          borderColor: theme => `${hexToRGBA(theme.palette.backgroundColor.primary, 0.5)}`,
          cursor: 'pointer'
        }}
      >
        <IconifyIcon icon='flat-color-icons:google' />
        <Typography sx={{ fontSize: 16, padding: '0 1rem' }}>Đăng nhập với Google</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.5rem 0',
          paddingLeft: '3rem',
          m: 2,
          width: !responsive ? 350 : '100%',
          backgroundColor: theme => `${hexToRGBA(theme.palette.backgroundColor.secondary, 0.2)}`,
          borderRadius: '50px',
          border: '1px solid',
          borderColor: theme => `${hexToRGBA(theme.palette.backgroundColor.secondary, 0.5)}`,
          cursor: 'pointer'
        }}
      >
        <IconifyIcon icon='logos:facebook' />
        <Typography sx={{ fontSize: 16, padding: '0 1rem' }}>Đăng nhập với Facebook</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.5rem 0',
          paddingLeft: '3rem',
          m: 2,
          width: !responsive ? 350 : '100%',
          backgroundColor: theme => `${hexToRGBA(theme.palette.backgroundColor.transparent, 0.2)}`,
          borderRadius: '50px',
          border: '1px solid',
          borderColor: theme => `${hexToRGBA(theme.palette.backgroundColor.transparent, 0.5)}`,
          cursor: 'pointer'
        }}
      >
        <IconifyIcon icon='devicon:github' />
        <Typography sx={{ fontSize: 16, padding: '0 1rem' }}>Đăng nhập với Github</Typography>
      </Box>
      <Divider sx={{ fontSize: 16, width: !responsive ? 450 : '100%', fontWeight: 500 }}>Hoặc với email</Divider>
      <Box sx={{ width: !responsive ? 400 : '100%' }}>
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mt: 4, mb: 2 }}>
            <InputLabel htmlFor='email' error={Boolean(errors.email)}>
              Email
            </InputLabel>
            <Controller
              name='email'
              control={control}
              rules={{
                required: { value: true, message: 'Vui lòng nhập email' },
                pattern: { value: /^[^s@]+@[^s@]+.[^s@]+$/, message: 'Vui lòng nhập đúng định dạng email' }
              }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  id='email'
                  label='Email'
                  type='email'
                  error={Boolean(errors.email)}
                />
              )}
            />
            {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mt: 4, mb: 2 }}>
            <InputLabel htmlFor='password' error={Boolean(errors.password)}>
              Mật khẩu
            </InputLabel>
            <Controller
              name='password'
              control={control}
              rules={{
                required: { value: true, message: 'Vui lòng nhập password' },
                minLength: { value: 8, message: 'Tối thiểu 6 ký tự' }
              }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  id='password'
                  label='Password'
                  type={showPassword ? 'text' : 'password'}
                  error={Boolean(errors.password)}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <IconifyIcon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.password && <FormHelperText sx={{ color: 'error.main' }}>{errors.password.message}</FormHelperText>}
          </FormControl>
          <Box
            sx={{
              mb: 1.75,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <FormControlLabel
              label='Ghi nhớ tôi'
              control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
            />
            <Typography sx={{ color: 'turquoise.dark', fontWeight: 600, cursor: 'pointer' }}>Quên mật khẩu?</Typography>
          </Box>
          <Button
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            sx={{ mb: 4, borderRadius: '10px', height: '45px' }}
          >
            Đăng nhập
          </Button>
        </form>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Typography sx={{ color: 'text.secondary', mr: 2 }}>Bạn chưa có tài khoản?</Typography>
        <LinkStyled href='/register'>Đăng ký</LinkStyled>
      </Box>
    </AuthPage>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
export default LoginPage
