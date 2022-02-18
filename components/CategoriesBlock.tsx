import { getCategoryInfo } from 'utils/getCategoryInfo'
import { SectionTitle } from './sectionTitle'
import { VotePill } from './VotePill'

import type { CategoriesInterface } from '../types/category'

interface DataIconsTech {
  isPng?: boolean
  iconPng?: string
  title: string
  iconSvg?: any
}

export const CategoriesBlock = ({ categories }: CategoriesInterface) => {
  const { categoriesInfo } = getCategoryInfo({ categories })

  const validateTagIcon = ({ isPng, iconPng, title, iconSvg }: DataIconsTech) =>
    isPng ? (
      <VotePill image={iconPng} title={title} key={`category-pill-${title}`} />
    ) : (
      <VotePill title={title} svg={iconSvg} key={`category-pill-${title}`} />
    )

  return (
    <>
      {categoriesInfo.map(({ title, options }) => (
        <div key={`category-name-${title}`}>
          <SectionTitle>{title}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {options &&
              options.map(({ iconSvg, iconPng, title, isPng }) =>
                validateTagIcon({ iconSvg, iconPng, title, isPng })
              )}
          </ul>
        </div>
      ))}
    </>
  )
}
