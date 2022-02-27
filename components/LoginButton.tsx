import { signIn } from "next-auth/react"
import { IconGithub } from "assets/icons/IconGithub"
import { useTranslation } from 'hooks/useTranslation'

export function LoginButton() {
  const handleClick = () => signIn('github')
  const i18n = useTranslation()

  return (
    <button
      className="inline-flex items-center px-4 py-2 font-bold text-white bg-black rounded hover:bg-gray-800"
      onClick={handleClick}
    >
      <IconGithub/>
      Iniciar sesión
    </button>
  )
}
