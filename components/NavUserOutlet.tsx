// import NavUserProfile from 'components/NavUserProfile.jsx'
import { LoadingIcon } from "components/LoadingIcon"
import { LoginButton } from "components/LoginButton"
import { useSession } from "next-auth/react"
import { NavUserProfile } from './NavUserProfile'

export function NavUserOutlet() {
  const { data: session, status } = useSession()

  if (status === "loading") return <LoadingIcon />
  if (status === "unauthenticated" || session == null) return <LoginButton />
  if (session.user != null) return <NavUserProfile user={session.user} />

  return null
}
