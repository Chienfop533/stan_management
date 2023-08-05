import IconifyIcon from '@/core/components/icon'
import Input from '@/core/components/input'
import { LinkStyled } from '@/core/components/link'
import { Progress } from '@/core/components/progress'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import BlankLayout from '@/layouts/BlankLayout'
import Translate from '@/services/common/translate'
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
import { ReactNode, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
interface FormData {
  email: string
  password: string
  verifyPassword: string
}

const defaultValues: FormData = {
  email: '',
  password: '',
  verifyPassword: ''
}

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showPassword2, setShowPassword2] = useState<boolean>(false)
  const [countProgress, setCountProgress] = useState<number>(0)

  const {
    control,
    handleSubmit,
    watch,
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

  const onSubmit = (formData: FormData) => {
    const { email, password } = formData
    console.log(email, password)
  }

  return (
    <AuthPage>
      <Typography variant='h1'>{Translate('sign_up')}</Typography>
      <Typography fontSize={18}>{Translate('your_app')}</Typography>
      <Box sx={{ width: '100%', maxWidth: 400 }}>
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
              {Translate('password')}
            </InputLabel>
            <Controller
              name='password'
              control={control}
              rules={{
                required: { value: true, message: 'Vui lòng nhập password' },
                pattern: { value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, message: '' }
              }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  id='password'
                  label='Mật khẩu'
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
          <Typography sx={{ mt: 4, color: 'text.disabled', fontSize: 14 }}>{Translate('rule_password')}</Typography>
          <FormControl fullWidth sx={{ mt: 4, mb: 2 }}>
            <InputLabel htmlFor='verifyPassword' error={Boolean(errors.verifyPassword)}>
              {Translate('confirm_password')}
            </InputLabel>
            <Controller
              name='verifyPassword'
              control={control}
              rules={{
                required: { value: true, message: 'Vui lòng nhập password' },
                minLength: { value: 8, message: 'Tối thiểu 8 ký tự' },
                validate: value => value === watch('password') || 'Xác nhận mật khẩu sai'
              }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  id='verifyPassword'
                  label='Xác nhận mật khẩu'
                  type={showPassword2 ? 'text' : 'password'}
                  error={Boolean(errors.verifyPassword)}
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
            {errors.verifyPassword && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.verifyPassword.message}</FormHelperText>
            )}
          </FormControl>
          <Button
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            sx={{ mb: 4, mt: 6, borderRadius: '10px', height: '45px' }}
          >
            {Translate('sign_up')}
          </Button>
        </form>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Typography sx={{ color: 'text.secondary', mr: 2 }}>{Translate('have_account') + '?'}</Typography>
        <LinkStyled href='/login'>{Translate('login')}</LinkStyled>
      </Box>
    </AuthPage>
  )
}

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
