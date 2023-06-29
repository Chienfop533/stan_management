import { lato, nunito } from '@/assets/fonts/fonts'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stan Management</title>
        <meta name='description' content='Schedule, Task and Note Management' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${lato.variable} ${nunito.variable}`}>
        <h1>ok</h1>
        <h4>tt</h4>
        <p>ok</p>
      </main>
    </>
  )
}
