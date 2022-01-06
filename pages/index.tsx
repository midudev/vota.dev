import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/Header'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>🗳 vota.dev - Vota los mejores del año en el mundo del desarrollo web</title>
      </Head>
      <Header />
    </>
  )
}

export default Home
