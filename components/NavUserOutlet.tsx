// import NavUserProfile from 'components/NavUserProfile.jsx'
import { LoadingIcon } from "components/LoadingIcon"
import { LoginButton } from "components/LoginButton"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/router'

export function NavUserOutlet() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") return <LoadingIcon />
  if (status === "unauthenticated" || session == null) return <LoginButton />
  
  const handleSignOut = async () => {
    const data = await signOut({ redirect: false })
    return router.push(data.url)
  }

  return (
    <>
      Signed in as {session.user?.email} <br />
      <button onClick={handleSignOut}>Sign out</button>
    </>
  )
}
