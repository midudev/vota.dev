import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp ({ Component: App, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className='flex flex-col min-h-screen bg-yellow-js align-center'>
        <App {...pageProps} />
      </div>
    </SessionProvider>
  )
}

export default MyApp
