import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component: App, pageProps: { session, ...pageProps } }: AppProps) {
  return <SessionProvider session={session}>
    <App {...pageProps} />
  </SessionProvider>
}

export default MyApp
