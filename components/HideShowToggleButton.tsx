import { ReactElement } from "react"
import { Triangle } from "./SVGIcons"

type hstbProps = {
    idButton: string
}

export default function HideShowToggleButton({idButton}: hstbProps) {
  const handleClick = () => {
    const element = document.getElementById(idButton.split('Toggle')[0])
    const button = document.getElementById(idButton)
    if (element && button) {
      element.classList.toggle("hidden")
      button.classList.toggle("rotate-90")
    }
  }

  return (
    <button
      id={idButton}
      title="Mostrar/Ocultar"
      className="bg-white border rounded hover:border-black text-black"
      onClick={handleClick}
    >
      <Triangle className="w-6 h-6" />
    </button>
  )
}
