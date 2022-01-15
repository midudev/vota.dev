import { signIn } from "next-auth/react"
import { Github } from "./SVGIcons"

export function LoginButton() {
  const handleClick = () => signIn("github")

  return (
    <button
      className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={handleClick}
    >
      <Github className="w-6 h-6 mr-2"/>
      Iniciar sesión
    </button>
  )
}
