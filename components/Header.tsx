import { NavUserOutlet } from "components/NavUserOutlet"
import { Logo } from "./Logo"

export function Header() {
  return (
    <header className='flex items-center justify-between w-full max-w-4xl px-2 mx-auto my-4'>
      <Logo />
      <div>
        <NavUserOutlet />
      </div>
    </header>
  )
}
