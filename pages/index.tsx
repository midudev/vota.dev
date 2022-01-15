import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/Header'
import React, { ReactElement } from 'react'
import * as SVG from "components/SVGIcons"
import HideShowToggleButton from 'components/HideShowToggleButton'

interface SectionTitleProps {
  children?: string
  elementID: string
}

const SectionTitle = ({children, elementID}: SectionTitleProps) =>
  <h2 className='mb-6 text-4xl font-bold text-center'>{children} <HideShowToggleButton idButton={elementID}/></h2>

  interface SectionDescriptionProps {
    children?: string
  }
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaco laboris nisi ut aliquip ex ea comodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."

  const SectionDescription = ({children}: SectionDescriptionProps) =>
    
    <p className='mb-6 text-1xl text-center'>{children || lorem.slice(0, Math.random() *  (300-50) + 50)}</p>

  interface ListItemsProps {
  childrenList: ReactElement[]
  id: string
}

const ListItems = ({id, childrenList}: ListItemsProps )  =>
  <ul id={id} className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
    {childrenList}
  </ul>

interface BoxProps{
  image?: string,
  title?: string
  svg?: ReactElement
}


const Box = ({image, title, svg}: BoxProps) => 
<button className='pointer group hover:scale-105 '>
  <div className='flex flex-row items-center gap-2 px-8 py-2 border border-gray-200 rounded-3xl hover:border-midu'>
    <figure className='flex object-contain w-10 h-10'>
      {svg ? svg : image ? <img className='object-contain w-10 h-10' alt={title} src={image} /> : <SVG.Loading className="w-6 h-6 mr-1 animate-spin place-self-center"/>}
    </figure>
    <div className='text-2xl font-semibold text-gray-700 my-auto'>
      {title} 
    </div>
  </div>
</button>

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
          Decide qué stack, tecnologías y frameworks han sido los mejores del año. ¡Cada voto, cuenta!
        </p>

        <div className='max-w-4xl p-10 mx-auto my-20 bg-white border-2 border-black rounded-lg'>
          <SectionTitle elementID='mbuiToggle'>Mejor biblioteca UI </SectionTitle>
          <ul id='mbui' className='grid grid-cols-4 gap-4 mb-12 hidden'>
            <Box svg={<SVG.React/>} title='React' />
            <Box svg={<SVG.Vue/>} title='Vue.js' />
            <Box svg={<SVG.Angular/>} title='Angular' />
            <Box svg={<SVG.Svelte/>} title='Svelte' />
            <Box svg={<SVG.Lit/>} title='Lit' />
             <Box svg={<SVG.Ember/>} title='Ember' />
            {/*<Box svg={<SVG.Alpine/>} title='Alpine.js' />
            <Box svg={<SVG.Preact/>} title='Preact' />
            <Box svg={<SVG.Stimulus/>} title='Stimulus' />
            <Box svg={<SVG.Solid/>} title='Solid' /> */}
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mfbToggle'>Mejor framework Backend</SectionTitle>
          <ul id='mfb' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <Box svg={<SVG.Nest/>} title='Nest.js' />
            <Box svg={<SVG.Express/>} title='Express' />
            <Box svg={<SVG.Fastify/>} title='Fastify' />
            <Box svg={<SVG.Hapi/>} title='Hapi' />
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mnfecToggle'>Mejor nueva funcionalidad ECMAScript</SectionTitle>
          <ul id='mnfec' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <li></li>
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mnfcssToggle'>Mejor nueva funcionalidad CSS</SectionTitle>
          <ul id='mnfcss' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <li></li>
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mffsToggle'>Mejor framework FullStack</SectionTitle>
          <ul id='mffs' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <Box svg={<SVG.Next/>} title='Next.js' />
            <Box svg={<SVG.Nuxt/>} title='Nuxt' />
            <Box svg={<SVG.Svelte/>} title='SvelteKit' />
            <Box image='remix.svg' title='Remix' />
            <Box svg={<SVG.Astro/>} title='Astro' />
            <Box svg={<SVG.Blitz/>} title='BlitzJS' />
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mecToggle'>Mejores empaquetadores de código</SectionTitle>
          <ul id='mec' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <Box svg={<SVG.Webpack/>} title='Webpack' />
            <Box image='rollup.svg' title='Rollup' />
            <Box svg={<SVG.Parcel/>} title='Parcel' />
            <Box svg={<SVG.Esbuild/>} title='EsBuild' />
            <Box svg={<SVG.Vite/>} title='Vite' />
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='meejToggle'>Mejor entorno de ejecución de JavaScript</SectionTitle>
          <ul id='meej' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <Box svg={<SVG.Node/>} title='Node.js' />
            <Box svg={<SVG.Deno/>} title='Deno' />
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mlcssjsToggle'>Mejor librería CSS en JS</SectionTitle>
          <ul id='mlcssjs' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <Box svg={<SVG.Stitches/>} title='Stitches' />
            <Box svg={<SVG.StyledComponents/>} title='Styled Components' />
            <Box image='Emotion.png' title='Emotion' />
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mfcssToggle'>Mejor framework CSS</SectionTitle>
          <ul id='mfcss' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <Box svg={<SVG.Tailwind/>}title='Tailwind' />
            <Box svg={<SVG.Bulma/>} title='Bulma' />
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mhtToggle'>Mejor herramienta de testing</SectionTitle>
          <ul id='mht' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <Box svg={<SVG.Jest/>} title='Jest' />
            <Box image='TestingLibrary.png' title='Testing Library' />
            <Box svg={<SVG.Vitest/>} title='Vitest' />
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mte2eToggle'>Mejor test E2E</SectionTitle>
          <ul id='mte2e' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <Box svg={<SVG.Cypress/>} title='Cypress' />
            <Box svg={<SVG.Playwright/>} title='Playwright' />
            <Box svg={<SVG.Puppeteer/>} title='Puppeteer' />
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mbaasToggle'>Mejor BaaS (Backend as a Service)</SectionTitle>
          <ul id='mbaas' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <Box svg={<SVG.Firebase/>} title='Firebase' />
            <Box svg={<SVG.Supabase/>} title='Supabase' />
            <Box svg={<SVG.Airtable/>} title='Airtable' />
            <Box svg={<SVG.Amplify/>} title='Amplify' />
            <Box svg={<SVG.MongoDB/>} title='Mongo' />
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mccToggle'>Mejor catálogo de componentes</SectionTitle>
          <ul id='mcc' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <Box image='Chakra.png' title='Chakra UI' />
            <Box svg={<SVG.MaterialUI/>} title='Material UI' />
            <Box svg={<SVG.Next/>} title='Next UI' />
            <Box image='Ant.svg' title='Ant Design' />
            <Box svg={<SVG.DaisyUI/>} title='Daisy UI' />
            <Box image='ReactSemanticUI.png' title='React Semantic UI' />
          </ul>
          <SectionDescription></SectionDescription>

          <SectionTitle elementID='mshToggle'>Mejor sitio para hosting de tu proyecto web</SectionTitle>
          <ul id='msh' className='flex flex-wrap gap-4 m-auto mb-12 place-content-center hidden'>
            <Box svg={<SVG.Vercel/>}title='Vercel' />
            <Box svg={<SVG.Netlify/>} title='Netlify' />
            <Box image='Render.webp' title='Render' />
            <Box svg={<SVG.AWS/>} title='AWS' />
            <Box svg={<SVG.Azure/>} title='Azure' />
            <Box svg={<SVG.GoogleCloud/>} title='Google Cloud' />
          </ul>
          <SectionDescription></SectionDescription>

        </div>
      </section>
    </>
  )
}

export default Home
