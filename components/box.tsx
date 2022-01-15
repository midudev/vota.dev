import * as SVG from "components/SVGIcons"
import { ReactElement } from "react"

interface BoxProps {
  image?: string
  title?: string
  svg?: ReactElement
}

export const Box = ({ image, title, svg }: BoxProps) => (
  <button className="pointer group">
    <div className="flex flex-row items-center gap-2 px-8 py-2 border border-gray-200 rounded-3xl ">
      <figure className="flex object-contain w-10 h-10">
        {svg ? (
          svg
        ) : image ? (
          <img className="object-contain w-10 h-10" alt={title} src={image} />
        ) : (
          <SVG.Loading className="w-6 h-6 mr-1 animate-spin place-self-center" />
        )}
      </figure>
      <div className="mt-4 text-2xl font-semibold text-gray-700">{title}</div>
    </div>
  </button>
)
