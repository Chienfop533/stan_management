import UserService from '@/services/UserService'
import { UserType } from '@/types/UserType'
import { useRouter } from 'next/router'
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react'

type LoginParams = {
  email: string
  password: string
  remember_me: boolean
}
interface AuthValuesType {
  user: UserType | null
  loading: boolean
  setUser: Dispatch<SetStateAction<UserType | null>>
  setLoading: Dispatch<SetStateAction<boolean>>
  login: (params: LoginParams) => void
  logout: () => void
}
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
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
    const verifyAccessToken = async () => {
      const response: any = await UserService.verifyToken()
      if (response?.success) {
        setLoading(false)
        const userData: UserType = {
          id: response.data._id,
          avatar: response.data.avatar,
          fullName: response.data.full_name,
          email: response.data.email,
          password: response.data.password
        }
        setUser({ ...userData })
        window.localStorage.setItem('userData', JSON.stringify(userData))
      } else {
        clearUserDataAndRedirectToLogin()
      }
    }
    const clearUserDataAndRedirectToLogin = () => {
      localStorage.removeItem('userData')
      setUser(null)
      setLoading(false)
    }
    verifyAccessToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleLogin = async (params: LoginParams) => {
    const response: any = await UserService.login(params)
    if (response?.success) {
      handleDataOnAccessSuccess(response.data)
      sessionStorage.setItem('accessToken', response.accessToken)
    }
    return response
  }
  const handleLogout = async () => {
    const response: any = await UserService.logout()
    if (response?.success) {
      sessionStorage.removeItem('accessToken')
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
      fullName: data.full_name,
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
    logout: handleLogout
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
