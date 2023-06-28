import Head from 'next/head'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Stan Management</title>
        <meta name='description' content='Schedule, Task and Note Management' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={lato.className}>
        <h1>ok</h1>
      </main>
    </>
  )
}
