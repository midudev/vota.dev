import { NavUserOutlet } from 'components/NavUserOutlet'
import LocaleSwitcher from './LocaleSwitcher'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="flex items-center justify-between w-full max-w-4xl px-2 mx-auto my-4">
      <Logo />
      <div className="flex flex-row items-center justify-around space-x-4">
        <NavUserOutlet />
        <LocaleSwitcher useFlags={false} />
      </div>
    </header>
  )
}
