import IconifyIcon from '@/core/components/icon'
import Input from '@/core/components/input'
import { LinkStyled } from '@/core/components/link'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { useAuth } from '@/hooks/useAuth'
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
  Typography
} from '@mui/material'
import { ReactNode, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

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
  const [errorMessage, setErrorMessage] = useState<string>('')
  const { t } = useTranslation()
  const auth = useAuth()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues, mode: 'onChange' })

  const onSubmit = async (formData: FormData) => {
    const { email, password } = formData
    const response: any = await auth.login({ email, password, remember_me: rememberMe })

    if (response.success) {
      setErrorMessage('')
      toast.success(t('action_message_success', { action: t('login') }))
      reset()
    } else {
      setErrorMessage(t('error_message.login'))
      toast.error(t('action_message_fail', { action: t('login') }))
    }
  }

  return (
    <AuthPage>
      <Typography variant='h1'>{t('login')}</Typography>
      <Typography fontSize={18}>{t('your_app')}</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.5rem 0',
          paddingLeft: '3rem',
          m: 2,
          width: '100%',
          maxWidth: 350,
          backgroundColor: theme => `${hexToRGBA(theme.palette.backgroundColor.primary, 0.2)}`,
          borderRadius: '50px',
          border: '1px solid',
          borderColor: theme => `${hexToRGBA(theme.palette.backgroundColor.primary, 0.5)}`,
          cursor: 'pointer'
        }}
      >
        <IconifyIcon icon='flat-color-icons:google' />
        <Typography sx={{ fontSize: 16, padding: '0 1rem' }}>{t('login_with') + ' Google'}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.5rem 0',
          paddingLeft: '3rem',
          m: 2,
          width: '100%',
          maxWidth: 350,
          backgroundColor: theme => `${hexToRGBA(theme.palette.backgroundColor.secondary, 0.2)}`,
          borderRadius: '50px',
          border: '1px solid',
          borderColor: theme => `${hexToRGBA(theme.palette.backgroundColor.secondary, 0.5)}`,
          cursor: 'pointer'
        }}
      >
        <IconifyIcon icon='logos:facebook' />
        <Typography sx={{ fontSize: 16, padding: '0 1rem' }}>{t('login_with') + ' Facebook'}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.5rem 0',
          paddingLeft: '3rem',
          m: 2,
          width: '100%',
          maxWidth: 350,
          backgroundColor: theme => `${hexToRGBA(theme.palette.backgroundColor.transparent, 0.2)}`,
          borderRadius: '50px',
          border: '1px solid',
          borderColor: theme => `${hexToRGBA(theme.palette.backgroundColor.transparent, 0.5)}`,
          cursor: 'pointer'
        }}
      >
        <IconifyIcon icon='devicon:github' />
        <Typography sx={{ fontSize: 16, padding: '0 1rem' }}>{t('login_with') + ' Github'}</Typography>
      </Box>
      <Divider sx={{ fontSize: 16, width: '100%', maxWidth: 450, fontWeight: 500 }}>{t('or_with') + ' Email'}</Divider>
      <Box sx={{ width: '100%', maxWidth: 400 }}>
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Typography sx={{ fontSize: 14, color: 'error.main' }}>{errorMessage}</Typography>
          <FormControl fullWidth sx={{ mt: 4, mb: 2 }}>
            <InputLabel htmlFor='email' error={Boolean(errors.email)}>
              Email
            </InputLabel>
            <Controller
              name='email'
              control={control}
              rules={{
                required: { value: true, message: t('require_email') },
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t('validate_email') }
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
              {t('password')}
            </InputLabel>
            <Controller
              name='password'
              control={control}
              rules={{
                required: { value: true, message: t('require_password') },
                minLength: { value: 8, message: t('validate_password') }
              }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  id='password'
                  label={t('password')}
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
              label={t('remember_me')}
              control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
            />
            <Typography sx={{ color: 'turquoise.dark', fontWeight: 600, cursor: 'pointer' }}>
              {t('forgot_password') + '?'}
            </Typography>
          </Box>
          <Button
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            sx={{ mb: 4, borderRadius: '10px', height: '45px' }}
          >
            {t('login')}
          </Button>
        </form>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Typography sx={{ color: 'text.secondary', mr: 2 }}>{t('not_account') + '?'}</Typography>
        <LinkStyled href='/register'>{t('sign_up')}</LinkStyled>
      </Box>
    </AuthPage>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
LoginPage.authGuard = false

export default LoginPage
