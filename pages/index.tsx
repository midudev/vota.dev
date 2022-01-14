import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/Header'
import React from 'react'

interface SectionTitleProps {
  children: string
}

const SectionTitle = ({children}: SectionTitleProps) =>
  <h2 className='mb-6 text-4xl font-bold text-center'>{children}</h2>

interface BoxProps{
  image: string,
  title: string
}

const BoxBox = ({image, title}: BoxProps) => <div>
  <div className='flex flex-col items-center justify-center py-4 border border-gray-200 rounded'>
    <div className='w-16 h-16'>
      <img alt={title} src={image} />
    </div>
    <div className='mt-4 text-lg font-bold'>
      {title}
    </div>
  </div>
</div>

const Box = ({image, title}: BoxProps) => <div>
  <div className='flex flex-row items-center gap-2 px-8 py-2 border border-gray-200 rounded-3xl'>
    <img className='object-contain w-10 h-10' alt={title} src={image} />
    <div className='text-lg font-bold'>
      {title}
    </div>
  </div>
</div>

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>🗳 vota.dev - Vota los mejores del año en el mundo del desarrollo web</title>
      </Head>
      <Header />
      <section className='mt-40'>
        <h1 className='max-w-5xl mx-auto font-extrabold text-center text-black text-8xl'>
          Vota los mejores del desarrollo web
        </h1>
        <p className='max-w-lg mx-auto mt-10 text-2xl text-center text-black opacity-70'>
          Decide qué stack, tecnologías y frameworks han sido los mejores del año. ¡Cada voto, cuenta!
        </p>

        <div className='max-w-4xl p-10 mx-auto my-20 bg-white border-2 border-black rounded-lg'>
          <SectionTitle>Mejor biblioteca UI</SectionTitle>
          <ul className='flex flex-wrap gap-4 mb-12'>
            <Box image='react.svg' title='React' />
            <Box image='vue.svg' title='Vue.js' />
            <Box image='angular.svg' title='Angular' />
            <Box image='svelte.svg' title='Svelte' />
            <Box image='lit.svg' title='Lit' />
            {/* <Box image='.svg' title='Ember' />
            <Box image='.svg' title='Alpine.js' />
            <Box image='.svg' title='Preact' />
            <Box image='.svg' title='Stimulus' />
            <Box image='.svg' title='Solid' /> */}
          </ul>

          <SectionTitle>Mejor biblioteca UI</SectionTitle>
          <ul className='grid grid-cols-4 gap-4 mb-12'>
            <BoxBox image='react.svg' title='React' />
            <BoxBox image='vue.svg' title='Vue.js' />
            <BoxBox image='angular.svg' title='Angular' />
            <BoxBox image='svelte.svg' title='Svelte' />
            <BoxBox image='lit.svg' title='Lit' />
            {/* <Box image='.svg' title='Ember' />
            <Box image='.svg' title='Alpine.js' />
            <Box image='.svg' title='Preact' />
            <Box image='.svg' title='Stimulus' />
            <Box image='.svg' title='Solid' /> */}
          </ul>

          <SectionTitle>Mejor framework Backend</SectionTitle>
          <ul>
            <li>Nest.js</li>
            <li>Express</li>
            <li>Fastify</li>
            <li>Hapi</li>
          </ul>

          <SectionTitle>Mejor nueva funcionalidad ECMAScript</SectionTitle>
          <ul>
            <li></li>
          </ul>

          <SectionTitle>Mejor nueva funcionalidad CSS</SectionTitle>
          <ul>
            <li></li>
          </ul>

          <SectionTitle>Mejor framework FullStack</SectionTitle>
          <ul>
            <li>Next.js</li>
            <li>Nuxt</li>
            <li>SvelteKit</li>
            <li>Remix</li>
            <li>Astro</li>
            <li>BlitzJS</li>
          </ul>

          <SectionTitle>Mejores empaquetadores de código</SectionTitle>
          <ul>
            <li>Webpack</li>
            <li>Rollup</li>
            <li>Parcel</li>
            <li>Esbuild</li>
            <li>Vite</li>
          </ul>

          <SectionTitle>Mejor entorno de ejecución de JavaScript</SectionTitle>
          <ul>
            <li>Node.js</li>
            <li>Deno</li>
          </ul>

          <SectionTitle>Mejor librería CSS en JS</SectionTitle>
          <ul>
            <li>Stitches</li>
            <li>Styled Components</li>
            <li>Emotion</li>
          </ul>

          <SectionTitle>Mejor framework CSS</SectionTitle>
          <ul>
            <li>Tailwind</li>
          </ul>

          <SectionTitle>Mejor herramienta de testing</SectionTitle>
          <ul>
            <li>Jest</li>
            <li>Testing Library</li>
            <li>Vitest</li>
          </ul>

          <SectionTitle>Mejor test E2E</SectionTitle>
          <ul>
            <li>Cypress</li>
            <li>Playwright</li>
            <li>Pupeeteer</li>
          </ul>

          <SectionTitle>Mejor BaaS (Backend as a Service)</SectionTitle>
          <ul>
            <li>Firebase</li>
            <li>Supabase</li>
            <li>Airtable</li>
            <li>Amplify</li>
            <li>Mongo Stitch</li>
          </ul>

          <SectionTitle>Mejor catálogo de componentes</SectionTitle>
          <ul>
            <li>Chakra UI</li>
            <li>Material UI</li>
            <li>NextUI</li>
            <li>Antd</li>
            <li>DaisyUI</li>
            <li>React Semantic UI</li>
          </ul>

          <SectionTitle>Mejor sitio para hosting de tu proyecto web</SectionTitle>
          <ul>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>render.com</li>
            <li>AWS</li>
            <li>Azure</li>
            <li>Google Pollas</li>

          </ul>
        </div>
      </section>
    </>
  )
}

export default Home
