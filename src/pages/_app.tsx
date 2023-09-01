import ThemeComponent from '@/core/theme/ThemeComponent'
import UserLayout from '@/layouts/UserLayout'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement } from 'react'
import '@/configs/i18n'
import dynamic from 'next/dynamic'
import Spinner from '@/core/components/spinner'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Provider } from 'react-redux'
import { store } from '@/store'

type ExtendedAppProps = AppProps & {
  Component: NextPage
}
const ModeThemeProvider = dynamic(() => import('@/context/ModeThemeContext'), {
  ssr: false,
  loading: () => <Spinner />
})
export default function App(props: ExtendedAppProps) {
  const { Component, pageProps } = props
  const getLayout = Component.getLayout ?? ((page: ReactElement) => <UserLayout>{page}</UserLayout>)

  return (
    <>
      <Head>
        <title>Stan Management</title>
        <meta name='description' content='Schedule, Task and Note Management' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ModeThemeProvider>
        <ThemeComponent>
          <Provider store={store}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {getLayout(<Component {...pageProps} />)}
            </LocalizationProvider>
          </Provider>
        </ThemeComponent>
      </ModeThemeProvider>
    </>
  )
}
