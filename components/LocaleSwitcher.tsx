import { useRouter } from 'next/router'

import { getFlagLocale } from '../helpers/flags'

const MODE = process.env.NEXT_PUBLIC_LAYOUT_LOCALE_MODE || 'text'

function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale, pathname, asPath, query } = router

  const changeLocale = (nextLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: nextLocale })
  }

  return (
    <nav>
      <select
        defaultValue={locale}
        onChange={(ev) => changeLocale(ev.target.value)}
        className="border-2 border-solid border-black text-black text-sm lg:text-xl p-1 uppercase bg-transparent font-semibold hover:opacity-80 transform transition duration-100 hover:scale-105 rounded-md"
      >
        {locales?.map((locale) => (
          <option
            key={locale}
            value={locale}
            className="flex items-center justify-center space-x-1 text-black font-bold bg-yellow-js"
          >
            {MODE === 'text' && `${locale}`}
            {MODE === 'both' && `${getFlagLocale(locale)} ${locale}`}
            {MODE === 'flag' && `${getFlagLocale(locale)}`}
          </option>
        ))}
      </select>
    </nav>
  )
}
export default LocaleSwitcher
