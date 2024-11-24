export const getFlagLocale = (locale: string) => {
  const flagsEmojis: any = {
    es: '🇪🇸 ',
    // en: '🇺🇸',
    en: '🇬🇧',
  }
  return flagsEmojis[locale] || ''
}
