import { NavUserOutlet } from "components/NavUserOutlet"

export function Header() {
  return (
    <header className='flex items-center justify-between w-full max-w-4xl mx-auto my-4'>
      <h1 className='text-xl font-bold'>🗳 vota.dev</h1>
      <div>
        <NavUserOutlet />
      </div>
    </header>
  )
}
