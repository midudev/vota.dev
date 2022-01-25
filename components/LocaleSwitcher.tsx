import { useRouter } from 'next/router'

import { getFlagLocale } from '../helpers/flags'

interface LocaleSwitcherProps {
  useFlags?: boolean
}

function LocaleSwitcher({ useFlags = false }: LocaleSwitcherProps) {
  const { locales, locale } = useRouter()
  const router = useRouter()
  const { pathname, asPath, query } = router

  const changeLocale = (nextLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: nextLocale })
  }

  return (
    <nav>
      <select
        defaultValue={locale}
        onChange={(ev) => changeLocale(ev.target.value)}
        className="border-2 border-solid border-black text-black text-sm lg:text-xl p-1 uppercase bg-transparent font-semibold hover:opacity-80 transform transition duration-100 hover:scale-105"
      >
        {locales?.map((locale) => (
          <option
            key={locale}
            value={locale}
            className="flex items-center justify-center space-x-1 bg-transparent text-black font-bold"
          >
            {`${useFlags ? getFlagLocale(locale) : ''} ${locale}`}
          </option>
        ))}
      </select>
    </nav>
  )
}
export default LocaleSwitcher
