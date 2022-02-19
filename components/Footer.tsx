import Image from 'next/image'
import { useTranslation } from 'hooks/useTranslation'

export function Footer() {
  const i18n = useTranslation()

  return (
    <footer className="flex flex-center justify-center w-full py-12 mt-8 border-t-2 border-t-black">
      <div className="">
        <div className="flex justify-center">
          <a
            className="flex pr-2 border-dashed border-b-4 border-b-yellow-js hover:border-black mb-4"
            href="https://midu.dev"
            target="_blank"
            rel="noreferrer"
          >
            {i18n.DEVELOPED_BY}
            &nbsp;
            <picture className="flex flex-center rounded-full">
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
        <span>&bull;</span>
        <a
          className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
          href="https://github.com/midudev/vota.dev"
          rel="nofollow noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <span>&bull;</span>
        <a
          className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
          href="https://midu.tube"
          rel="nofollow noreferrer"
          target="_blank"
        >
          YouTube
        </a>
        <span>&bull;</span>
        <a
          className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
          href="https://midu.live"
          rel="nofollow noreferrer"
          target="_blank"
        >
          Twitch
        </a>
        <span>&bull;</span>
        <a
          className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
          href="https://github.com/midudev/vota.dev/issues/new"
          rel="nofollow noreferrer"
          target="_blank"
        >
          {i18n.SUBMIT_SUGGESTION}
        </a>
        <span>&bull;</span>
      </div>
    </footer>
  )
}
