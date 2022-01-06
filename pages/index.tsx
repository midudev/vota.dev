import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import LoginButton from 'components/LoginButton'

const Home: NextPage = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button  onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      <LoginButton />
    </>
  )

  // return (
  //   <>
  //     <Head>
  //       <title>🗳 vota.dev - Vota los mejores del año en el mundo del desarrollo web</title>
  //     </Head>
  //     <div className='grid h-screen place-content-center'>
  //     <h1 className="text-3xl text-blue-800 font-bold">
  //       Hola Vota.Dev - El proyecto de la comunidad
  //     </h1>
  //     </div>
  //   </>
  // )
}

export default Home
