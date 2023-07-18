import ModeThemeProvider from '@/context/ModeThemeContext'
import ThemeComponent from '@/core/theme/ThemeComponent'
import UserLayout from '@/layouts/UserLayout'
import '@/styles/globals.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement } from 'react'

type ExtendedAppProps = AppProps & {
  Component: NextPage
}

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
        <ThemeComponent>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
      </ModeThemeProvider>
    </>
  )
}
