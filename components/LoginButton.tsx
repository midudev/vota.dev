import { signIn } from "next-auth/react"
import { IconGithub } from "assets/icons/IconGithub"

export function LoginButton() {
  const handleClick = () => signIn("github")

  return (
    <button
      className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={handleClick}
    >
      <IconGithub/>
      Iniciar sesión
    </button>
  )
}
