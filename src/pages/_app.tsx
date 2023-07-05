import ThemeComponent from '@/core/theme/ThemeComponent'
import '@/styles/globals.css'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeComponent>
        <Component {...pageProps} />
      </ThemeComponent>
    </>
  )
}
