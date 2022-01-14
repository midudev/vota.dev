import { NavUserOutlet } from "components/NavUserOutlet"
import { Vote } from "components/SVGIcons"

export function Header() {
  return (
    <header className="flex items-center justify-between w-full max-w-4xl mx-auto my-4">
      <h1 className="text-xl font-bold flex">
        <Vote className="w-5 h-5 my-auto mr-3" />
        vota.dev
      </h1>
      <div>
        <NavUserOutlet />
      </div>
    </header>
  )
}
