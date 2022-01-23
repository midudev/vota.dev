import { ReactElement } from 'react'
import Image from 'next/image'

interface VotePillProps {
  image?: string
  title?: string
  svg?: ReactElement
}

export const VoteCode = ({ image, title }: VotePillProps) => {
  return (
    <button className="pointer group">
      <div className="flex flex-col items-center">
        <figure className="relative flex object-contain w-full">
          <Image
            className="object-contain w-full"
            alt={title}
            src={image ?? ''}
            layout="fill"
          />
        </figure>
        <div className="text-2xl font-semibold text-gray-700">{title}</div>
      </div>
    </button>
  )
}
