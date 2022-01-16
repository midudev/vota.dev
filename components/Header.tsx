import { NavUserOutlet } from "components/NavUserOutlet"
import { Logo } from "./Logo"

export function Header() {
  return (
    <header className='flex items-center justify-between w-full max-w-4xl px-2 mx-auto my-4'>
      <div className="inline-flex">
      <Logo /> <h1 className="ml-5 text-2xl font-bold my-auto">vota.dev</h1>
      </div>
      <div>
        <NavUserOutlet />
      </div>
    </header>
  )
}
