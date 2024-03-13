import UserService from '@/services/UserService'
import { UserType } from '@/types/UserType'
import { useRouter } from 'next/router'
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react'

type LoginParams = {
  email: string
  password: string
  rememberMe: boolean
}
interface AuthValuesType {
  user: UserType | null
  loading: boolean
  setUser: Dispatch<SetStateAction<UserType | null>>
  setLoading: Dispatch<SetStateAction<boolean>>
  login: (params: LoginParams) => void
  loginWithGoogle: () => void
  logout: () => void
}
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  loginWithGoogle: () => Promise.resolve,
  logout: () => Promise.resolve()
}
type Props = {
  children: ReactNode
}

const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const router = useRouter()

  useEffect(() => {
    verifyAccessToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const verifyAccessToken = async () => {
    const response: any = await UserService.verifyToken()
    if (response?.success) {
      setLoading(false)
      const userData: UserType = {
        id: response.data._id,
        avatar: response.data.avatar,
        fullName: response.data.fullName,
        email: response.data.email,
        password: response.data.password
      }
      setUser({ ...userData })
      window.localStorage.setItem('userData', JSON.stringify(userData))
    } else {
      await refreshAccessToken()
    }
  }
  const refreshAccessToken = async () => {
    const response: any = await UserService.refreshToken()
    if (response?.success) {
      setLoading(false)
      verifyAccessToken()
      sessionStorage.setItem('access_token', response.accessToken)
    } else {
      clearUserDataAndRedirectToLogin()
    }
  }
  const clearUserDataAndRedirectToLogin = () => {
    localStorage.removeItem('userData')
    setUser(null)
    setLoading(false)
    if (!router.pathname.includes('login')) {
      router.replace('/login')
    }
  }
  const handleLogin = async (params: LoginParams) => {
    const response: any = await UserService.login(params)
    if (response?.success) {
      handleDataOnAccessSuccess(response.data)
      sessionStorage.setItem('access_token', response.accessToken)
    }
    return response
  }
  const handleLoginWithGoogle = async () => {
    const response: any = await UserService.loginWithGoogle()
    return response
  }
  const handleLogout = async () => {
    const response: any = await UserService.logout()
    if (response?.success) {
      sessionStorage.removeItem('access_token')
      localStorage.removeItem('userData')
      setUser(null)
      router.push('/login')
    }
    return response
  }
  const handleDataOnAccessSuccess = async (data: any) => {
    const userData: UserType = {
      id: data._id,
      avatar: data.avatar,
      fullName: data.fullName,
      email: data.email,
      password: data.password
    }
    setUser({ ...userData })
    window.localStorage.setItem('userData', JSON.stringify(userData))
    const returnUrl = router.query.returnUrl
    const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/personal/dashboard'
    router.replace(redirectURL as string)
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    loginWithGoogle: handleLoginWithGoogle,
    logout: handleLogout
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
