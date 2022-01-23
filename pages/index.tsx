import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { VotePill } from 'components/VotePill'
import { VoteCode } from 'components/VoteCode'
import { useTranslation } from 'hooks/useTranslation'

import { SectionTitle } from 'components/sectionTitle'
import { LIST_SVG_ICONS, EXAMPLES_LIST } from '../constants'

interface DataIconsTech {
  isPng?: boolean
  iconPng?: string
  title: string
  iconSvg?: any
}

const Home: NextPage = () => {
  const i18n = useTranslation()

  const validateTagIcon = ({ isPng, iconPng, title, iconSvg }: DataIconsTech) =>
    isPng ? (
      <VotePill image={iconPng} title={title} key={title} />
    ) : (
      <VotePill title={title} svg={iconSvg} />
    )

  return (
    <>
      <Head>
        <title>🗳 vota.dev - {i18n.SEO_TITLE}</title>
      </Head>
      <Header />
      <section className="mt-32">
        <h1 className="max-w-5xl mx-auto text-5xl font-extrabold text-center text-black md:text-8xl">
          {i18n.HERO_TITLE}
        </h1>
        <p className="max-w-lg mx-auto mt-10 text-2xl text-center text-black opacity-70">
          {i18n.HERO_SUBTITLE}
        </p>

        <div className="max-w-4xl p-10 mx-auto my-20 bg-white border-2 border-black rounded-lg">
          <SectionTitle>{i18n.ECMA_TITLE}</SectionTitle>
          <ul className="grid grid-cols-1 m-auto mb-12 md:grid-cols-2 place-content-center">
            {EXAMPLES_LIST.map(({ image, title }) => (
              <VoteCode title={title} image={image} key={title} />
            ))}
          </ul>

          <SectionTitle>{i18n.UI_TITLE}</SectionTitle>
          <ul className="grid grid-cols-1 gap-4 mb-12 md:grid-cols-4">
            {LIST_SVG_ICONS.UI_LIBRARY_LIST.map(({ iconSvg, title }) => (
              <VotePill svg={iconSvg} title={title} key={title} />
            ))}
          </ul>

          <SectionTitle>{i18n.BACKEND_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {LIST_SVG_ICONS.BACKEND_LIST.map(({ iconSvg, title }) => (
              <VotePill svg={iconSvg} title={title} key={title} />
            ))}
          </ul>

          <SectionTitle>{i18n.CSS_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <li></li>
          </ul>

          <SectionTitle>{i18n.FULL_STACK_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {LIST_SVG_ICONS.FULL_STACK_LIST.map(({ iconSvg, title }) => (
              <VotePill svg={iconSvg} title={title} key={title} />
            ))}
          </ul>

          <SectionTitle>{i18n.PACKAGE_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {LIST_SVG_ICONS.PACKAGE_LIST.map(({ iconSvg, title }) => (
              <VotePill svg={iconSvg} title={title} key={title} />
            ))}
          </ul>

          <SectionTitle>{i18n.ENV_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {LIST_SVG_ICONS.ENVAIROMENT_LIST.map(({ iconSvg, title }) => (
              <VotePill svg={iconSvg} title={title} key={title} />
            ))}
          </ul>

          <SectionTitle>{i18n.CSS_IN_JS_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {LIST_SVG_ICONS.CSS_IN_JS_LIST.map(
              ({ iconSvg, title, isPng, iconPng }) =>
                validateTagIcon({ isPng, iconPng, title, iconSvg })
            )}
          </ul>

          <SectionTitle>{i18n.FRAMEWORK_CSS_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {LIST_SVG_ICONS.FRAMEWORK_CSS_LIST.map(({ iconSvg, title }) => (
              <VotePill svg={iconSvg} title={title} key={title} />
            ))}
          </ul>

          <SectionTitle>{i18n.TOOL_TESTING_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {LIST_SVG_ICONS.TOOL_TESTING_LIST.map(
              ({ iconSvg, iconPng, title, isPng }) =>
                validateTagIcon({ isPng, iconPng, title, iconSvg })
            )}
          </ul>

          <SectionTitle>{i18n.E2S_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {LIST_SVG_ICONS.E2S_LIST.map(({ iconSvg, title }) => (
              <VotePill svg={iconSvg} title={title} key={title} />
            ))}
          </ul>

          <SectionTitle>{i18n.SERVICE_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {LIST_SVG_ICONS.SERVICE_LIST.map(({ iconSvg, title }) => (
              <VotePill svg={iconSvg} title={title} key={title} />
            ))}
          </ul>

          <SectionTitle>{i18n.CATALOG_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {LIST_SVG_ICONS.CATALOG_LIST.map(
              ({ iconSvg, iconPng, title, isPng }) =>
                validateTagIcon({ isPng, iconPng, title, iconSvg })
            )}
          </ul>

          <SectionTitle>{i18n.HOSTING_TITLE}</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            {LIST_SVG_ICONS.HOSTING_LIST.map(
              ({ iconSvg, iconPng, title, isPng }) =>
                validateTagIcon({ isPng, iconPng, title, iconSvg })
            )}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
