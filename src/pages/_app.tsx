import ThemeComponent from '@/core/theme/ThemeComponent'
import UserLayout from '@/layouts/UserLayout'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'
import '@/configs/i18n'
import dynamic from 'next/dynamic'
import Spinner from '@/core/components/spinner'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { AuthProvider } from '@/context/AuthContext'
import AuthGuard from '@/core/auth/AuthGuard'
import GuestGuard from '@/core/auth/GuestGuard'
import Router from 'next/router'
import NProgress from 'nprogress'
import { createEmotionCache } from '@/core/utils/create-emotion-cache'
import type { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}
type GuardProps = {
  authGuard: boolean
  children: ReactNode
}

const ModeThemeProvider = dynamic(() => import('@/context/ModeThemeContext'), {
  ssr: false
})

const clientSideEmotionCache = createEmotionCache()

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

const Guard = ({ children, authGuard }: GuardProps) => {
  if (authGuard) {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  } else {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  }
}
export default function App(props: ExtendedAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? ((page: ReactElement) => <UserLayout>{page}</UserLayout>)
  const authGuard = Component.authGuard ?? true

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Stan Management</title>
        <meta name='description' content='Schedule, Task and Note Management' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <AuthProvider>
        <ModeThemeProvider>
          <ThemeComponent>
            <Provider store={store}>
              <Guard authGuard={authGuard}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  {getLayout(<Component {...pageProps} />)}
                </LocalizationProvider>
              </Guard>
            </Provider>
          </ThemeComponent>
        </ModeThemeProvider>
      </AuthProvider>
    </CacheProvider>
  )
}
