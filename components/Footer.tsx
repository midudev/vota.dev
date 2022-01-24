import Image from 'next/image'
import { useTranslation } from 'hooks/useTranslation'
import { MIDU_LINKS } from '../constants'
import { MiduLink } from '../components/MiduLinks'
export function Footer() {
  const i18n = useTranslation()

  return (
    <footer className="flex flex-center justify-center w-full py-12 mt-8 border-t-2 border-t-black">
      <div className="w-full">
        <div className="flex justify-center py-2">
          <a
            className="flex flex-center pr-2 border-dashed border-b-2 border-b-yellow-js hover:border-black"
            href="https://midu.dev"
            target="_blank"
            rel="noreferrer"
          >
            {i18n.DEVELOPED_BY}
            {''}
          </a>
          <a
            className="flex flex-center pr-2"
            href="https://midu.dev"
            target="_blank"
            rel="noreferrer"
          >
            <picture className="flex flex-center bg-white rounded-full">
              <Image
                width="92"
                height="28"
                loading="lazy"
                src="https://midu.dev/logo.png"
                alt="midudev logo"
              />
            </picture>
          </a>
        </div>
        <div className="flex w-full justify-center">
          {MIDU_LINKS.map(({ title, link, icon }) => (
            <MiduLink title={title} link={link} icon={icon} key={title} />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <span>&bull;</span>
          <a
            className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black mx-2"
            href="https://github.com/midudev/vota.dev/issues/new"
            rel="nofollow noreferrer"
            target="_blank"
          >
            {i18n.SUBMIT_SUGGESTION}
          </a>
        </div>
      </div>
    </footer>
  )
}
