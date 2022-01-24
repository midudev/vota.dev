import { ReactElement } from 'react'
import * as SVG from 'components/SVGIcons'

interface MiduLinkProps {
  title?: string
  link?: string
  icon?: ReactElement
}

export const MiduLink = ({ title, link, icon }: MiduLinkProps) => {
  return (
    <div className="flex">
      <span>&bull;</span>
      <a
        className=" flex px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
        href={link}
        rel="nofollow noreferrer"
        target="_blank"
      >
        {icon || <SVG.Loading className="w-6 h-6 mx-2 animate-spin" />}
        {title}
      </a>
    </div>
  )
}
