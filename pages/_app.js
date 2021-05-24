import { useEffect } from 'react'
import '../styles/globals.css'
import { Workbox } from 'workbox-window'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.workbox.unregister()
  }, [])
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
