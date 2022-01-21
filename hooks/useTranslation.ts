import { useRouter } from 'next/router'
import { en, es } from 'translations'

export const useTranslation = () => {
  const { locale } = useRouter()
  const i18n = locale === 'es' ? es : en
  return i18n
}
