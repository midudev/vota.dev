import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { VoteCode } from 'components/VoteCode'
import { useTranslation } from 'hooks/useTranslation'

import { SectionTitle } from 'components/sectionTitle'
import { EXAMPLES_LIST } from '../constants'
import { CategoriesBlock } from 'components/CategoriesBlock'

const Home: NextPage = () => {
  const i18n = useTranslation()

  return (
    <>
      <Head>
        <title>🗳 vota.dev - {i18n.SEO.SEO_TITLE}</title>
      </Head>
      <Header />
      <section className="mt-32">
        <h1 className="max-w-5xl mx-auto text-5xl font-extrabold text-center text-black md:text-8xl">
          {i18n.MAIN_TITLE.HERO_TITLE}
        </h1>
        <p className="max-w-lg mx-auto mt-10 text-2xl text-center text-black opacity-70">
          {i18n.MAIN_TITLE.HERO_SUBTITLE}
        </p>

        <div className="max-w-4xl p-10 mx-auto my-20 bg-white border-2 border-black rounded-lg">
          <SectionTitle>{i18n.CATEGORIES.ECMA_TITLE}</SectionTitle>
          <ul className="grid grid-cols-1 m-auto mb-12 md:grid-cols-2 place-content-center">
            {EXAMPLES_LIST.map(({ image, title }) => (
              <VoteCode title={title} image={image} key={title} />
            ))}
          </ul>

          <CategoriesBlock categories={i18n.CATEGORIES} />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
