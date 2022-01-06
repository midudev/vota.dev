// import NavUserProfile from 'components/NavUserProfile.jsx'
import { LoadingIcon } from 'components/LoadingIcon'
import { LoginButton } from 'components/LoginButton'
import { signOut, useSession } from 'next-auth/react'

export function NavUserOutlet () {
  const { data: session, status } = useSession()
  console.log(session)


  if (status === "loading") return <LoadingIcon />
  if (status === "unauthenticated" || session == null) return <LoginButton />

  return <>
    Signed in as {session.user?.email} <br />
    <button  onClick={() => signOut()}>Sign out</button>
  </>
}