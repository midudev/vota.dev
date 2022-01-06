import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp ({ Component: App, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <App {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
