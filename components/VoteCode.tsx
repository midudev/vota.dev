import { ReactElement } from 'react'
import * as SVG from 'components/SVGIcons'

interface VotePillProps {
  image?: string
  title?: string
  svg?: ReactElement
}

export const VoteCode = ({ image, title }: VotePillProps) => {
  return (
    <button className="pointer group">
      <div className="flex flex-col items-center gap-2 px-8 py-3 rounded-3xl ">
        <figure className="flex object-contain w-96">
          <img className="object-contain w-full" alt={title} src={image} />
        </figure>
        <div className="text-2xl font-semibold text-gray-700">{title}</div>
      </div>
    </button>
  )
}
