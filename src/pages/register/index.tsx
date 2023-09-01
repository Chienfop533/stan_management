import ImageConstant from '@/assets/images/images'
import IconifyIcon from '@/core/components/icon'
import Input from '@/core/components/input'
import { LinkStyled } from '@/core/components/link'
import { Progress } from '@/core/components/progress'
import BlankLayout from '@/layouts/BlankLayout'
import UserService from '@/services/api/UserService'
import AuthPage from '@/views/pages/auth/AuthPage'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
  Typography,
  styled
} from '@mui/material'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
interface FormData {
  email: string
  full_name: string
  password: string
  verify_password: string
}

const defaultValues: FormData = {
  email: '',
  full_name: '',
  password: '',
  verify_password: ''
}

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showPassword2, setShowPassword2] = useState<boolean>(false)
  const [countProgress, setCountProgress] = useState<number>(0)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const { t } = useTranslation()
  const router = useRouter()

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({ defaultValues, mode: 'onChange' })

  const listPattern = [/(?=.*?[A-Z])/, /(?=.*?[a-z])/, /(?=.*?[0-9])/, /(?=.*?[#?!@$%^&*-])/, /.{8,}/]
  useEffect(() => {
    let count = 0
    listPattern.forEach(pattern => {
      if (pattern.test(watch('password'))) {
        count = count + 1
      }
    })
    setCountProgress(count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('password')])

  const onSubmit = async (formData: FormData) => {
    const { email, password, full_name } = formData
    const response: any = await UserService.register({
      avatar: ImageConstant.defaultAvatar,
      full_name,
      email,
      password
    })
    console.log(response)
    if (response.success) {
      setErrorMessage('')
      toast.success(t('action_message_success', { action: t('sign_up') }))
      reset()
      router.push('/login')
    } else {
      setErrorMessage(t('error_message.register'))
      toast.error(t('action_message_fail', { action: t('sign_up') }))
    }
  }

  return (
    <AuthPage>
      <Typography variant='h1'>{t('sign_up')}</Typography>
      <Typography fontSize={18}>{t('your_app')}</Typography>
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
            <InputLabel htmlFor='full_name' error={Boolean(errors.full_name)}>
              {t('full_name')}
            </InputLabel>
            <Controller
              name='full_name'
              control={control}
              rules={{
                required: { value: true, message: t('require_field', { field: t('full_name') }) },
                minLength: { value: 5, message: t('min_characters', { number: 5 }) }
              }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  id='full_name'
                  label={t('full_name')}
                  type='text'
                  error={Boolean(errors.full_name)}
                />
              )}
            />
            {errors.full_name && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.full_name.message}</FormHelperText>
            )}
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
                pattern: { value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, message: '' }
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Progress
              variant='determinate'
              value={countProgress >= 2 ? 100 : 0}
              sx={{ height: 5, width: '24%' }}
            ></Progress>
            <Progress
              variant='determinate'
              value={countProgress >= 3 ? 100 : 0}
              sx={{ height: 5, width: '24%' }}
            ></Progress>
            <Progress
              variant='determinate'
              value={countProgress >= 4 ? 100 : 0}
              sx={{ height: 5, width: '24%' }}
            ></Progress>
            <Progress
              variant='determinate'
              value={countProgress >= 5 ? 100 : 0}
              sx={{ height: 5, width: '24%' }}
            ></Progress>
          </Box>
          <Typography sx={{ mt: 4, color: 'text.disabled', fontSize: 14 }}>{t('rule_password')}</Typography>
          <FormControl fullWidth sx={{ mt: 4, mb: 2 }}>
            <InputLabel htmlFor='verify_password' error={Boolean(errors.verify_password)}>
              {t('confirm_password')}
            </InputLabel>
            <Controller
              name='verify_password'
              control={control}
              rules={{
                required: { value: true, message: t('require_password') },
                minLength: { value: 8, message: t('validate_password') },
                validate: value => value === watch('password') || t('validate_password_2')
              }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  id='verify_password'
                  label={t('confirm_password')}
                  type={showPassword2 ? 'text' : 'password'}
                  error={Boolean(errors.verify_password)}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowPassword2(!showPassword2)}
                      >
                        <IconifyIcon icon={showPassword2 ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.verify_password && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.verify_password.message}</FormHelperText>
            )}
          </FormControl>
          <Button
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            sx={{ mb: 4, mt: 6, borderRadius: '10px', height: '45px' }}
          >
            {t('sign_up')}
          </Button>
        </form>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Typography sx={{ color: 'text.secondary', mr: 2 }}>{t('have_account') + '?'}</Typography>
        <LinkStyled href='/login'>{t('login')}</LinkStyled>
      </Box>
    </AuthPage>
  )
}

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
