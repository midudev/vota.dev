// import NavUserProfile from 'components/NavUserProfile.jsx'
import { IconLoading } from "assets/icons/IconLoading";
import { LoginButton } from "components/LoginButton";
import { signOut, useSession } from "next-auth/react";

export function NavUserOutlet() {
  const { data: session, status } = useSession()

  if (status === "loading") return  <IconLoading />
  if (status === "unauthenticated" || session == null) return <LoginButton />

  return (
    <>
      Signed in as {session.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}
