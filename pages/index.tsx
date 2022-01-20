import { Box } from 'components/box'
import { Header } from 'components/Header'
import React from 'react'
import { VotePill } from 'components/VotePill'
import * as SVG from "components/SVGIcons"

interface SectionTitleProps {
  children?: string
}

const SectionTitle = ({children}: SectionTitleProps) =>
  <h2 className='mb-6 text-4xl font-bold text-center'>{children}</h2>

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>🗳 vota.dev - Vota los mejores del año en el mundo del desarrollo web</title>
      </Head>
      <Header />
      <section className='mt-32'>
        <h1 className='max-w-5xl mx-auto font-extrabold text-center text-black text-8xl'>
          Vota los mejores del desarrollo web
        </h1>
        <p className='max-w-lg mx-auto mt-10 text-2xl text-center text-black opacity-70'>
          Decide qué stack, tecnologías y frameworks han sido los mejores del año. ¡Cada voto cuenta!
        </p>

        <div className='max-w-4xl p-10 mx-auto my-20 bg-white border-2 border-black rounded-lg'>
          <SectionTitle>Mejor biblioteca UI</SectionTitle>
          <ul className='grid grid-cols-4 gap-4 mb-12'>
            <VotePill svg={<SVG.React/>} title='React' />
            <VotePill svg={<SVG.Vue/>} title='Vue.js' />
            <VotePill svg={<SVG.Angular/>} title='Angular' />
            <VotePill svg={<SVG.Svelte/>} title='Svelte' />
            <VotePill svg={<SVG.Lit/>} title='Lit' />
            {/* <VotePill svg={<SVG.Ember/>} title='Ember' />
            <VotePill svg={<SVG.Alpine/>} title='Alpine.js' />
            <VotePill svg={<SVG.Preact/>} title='Preact' />
            <VotePill svg={<SVG.Stimulus/>} title='Stimulus' />
            <VotePill svg={<SVG.Solid/>} title='Solid' /> */}
          </ul>

          <SectionTitle>Mejor framework Backend</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-12 place-content-center'>
            <VotePill svg={<SVG.Nest/>} title='Nest.js' />
            <VotePill svg={<SVG.Express/>} title='Express' />
            <VotePill svg={<SVG.Fastify/>} title='Fastify' />
            <VotePill svg={<SVG.Hapi/>} title='Hapi' />
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
          <ul className='flex flex-wrap gap-4 m-auto mb-12 place-content-center'>
            <VotePill svg={<SVG.Next/>} title='Next.js' />
            <VotePill svg={<SVG.Nuxt/>} title='Nuxt' />
            <VotePill svg={<SVG.Svelte/>} title='SvelteKit' />
            <VotePill svg={<SVG.Remix/>} title='Remix' />
            <VotePill svg={<SVG.Astro/>} title='Astro' />
            <VotePill svg={<SVG.Blitz/>} title='BlitzJS' />
          </ul>

          <SectionTitle>Mejores empaquetadores de código</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-12 place-content-center'>
            <VotePill svg={<SVG.Webpack/>} title='Webpack' />
            <VotePill svg={<SVG.Rollup/>} title='Rollup' />
            <VotePill svg={<SVG.Parcel/>} title='Parcel' />
            <VotePill svg={<SVG.Esbuild/>} title='EsBuild' />
            <VotePill svg={<SVG.Vite/>} title='Vite' />
          </ul>

          <SectionTitle>Mejor entorno de ejecución de JavaScript</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-12 place-content-center'>
            <VotePill svg={<SVG.Node/>} title='Node.js' />
            <VotePill svg={<SVG.Deno/>} title='Deno' />
          </ul>

          <SectionTitle>Mejor librería CSS en JS</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-12 place-content-center'>
            <VotePill svg={<SVG.Stitches/>} title='Stitches' />
            <VotePill svg={<SVG.StyledComponents/>} title='Styled Components' />
            <VotePill image='Emotion.png' title='Emotion' />
          </ul>

          <SectionTitle>Mejor framework CSS</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-12 place-content-center'>
            <VotePill svg={<SVG.Tailwind/>}title='Tailwind' />
            <VotePill svg={<SVG.Bulma/>} title='Bulma' />
          </ul>

          <SectionTitle>Mejor herramienta de testing</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-12 place-content-center'>
            <VotePill svg={<SVG.Jest/>} title='Jest' />
            <VotePill image='TestingLibrary.png' title='Testing Library' />
            <VotePill svg={<SVG.Vitest/>} title='Vitest' />
          </ul>

          <SectionTitle>Mejor test E2E</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-12 place-content-center'>
            <VotePill svg={<SVG.Cypress/>} title='Cypress' />
            <VotePill svg={<SVG.Playwright/>} title='Playwright' />
            <VotePill svg={<SVG.Puppeteer/>} title='Puppeteer' />
          </ul>

          <SectionTitle>Mejor BaaS (Backend as a Service)</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-12 place-content-center'>
            <VotePill svg={<SVG.Firebase/>} title='Firebase' />
            <VotePill svg={<SVG.Supabase/>} title='Supabase' />
            <VotePill svg={<SVG.Airtable/>} title='Airtable' />
            <VotePill svg={<SVG.Amplify/>} title='Amplify' />
            <VotePill svg={<SVG.MongoDB/>} title='Mongo' />
          </ul>

          <SectionTitle>Mejor catálogo de componentes</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-12 place-content-center'>
            <VotePill image='Chakra.png' title='Chakra UI' />
            <VotePill svg={<SVG.MaterialUI/>} title='Material UI' />
            <VotePill svg={<SVG.Next/>} title='Next UI' />
            <VotePill image='Ant.png' title='Ant Design' />
            <VotePill svg={<SVG.DaisyUI/>} title='Daisy UI' />
            <VotePill image='ReactSemanticUI.png' title='React Semantic UI' />
          </ul>

          <SectionTitle>Mejor sitio para hosting de tu proyecto web</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-12 place-content-center'>
            <VotePill svg={<SVG.Vercel/>}title='Vercel' />
            <VotePill svg={<SVG.Netlify/>} title='Netlify' />
            <VotePill image='Render.webp' title='Render' />
            <VotePill svg={<SVG.AWS/>} title='AWS' />
            <VotePill svg={<SVG.Azure/>} title='Azure' />
            <VotePill svg={<SVG.GoogleCloud/>} title='Google Cloud' />
          </ul>
        </div>
      </section>
    </>
  )
}

export default Home
