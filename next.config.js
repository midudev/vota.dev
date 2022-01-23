/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
  images: {
    domains: ['midu.dev', 'avatars.githubusercontent.com'],
  },
}
