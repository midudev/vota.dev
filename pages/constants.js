import * as SVG from 'components/SVGIcons'

export const EXAMPLES_LIST = [
  {
    title: 'Nullish Coalescing Operator',
    image: '/es-nullish-coalescing.png',
    width: 300,
    height: 300,
  },
  // { title: 'es-optional-chaining.png' },
  // { title: 'es-top-level-await.png' },
  // { title: 'es-promise-any.png' },
  // { title: 'es-replace-all.png' },
  // { title: 'es-logical-assignment.png' },
]

export const LIST_SVG_ICONS = {
  UI_LIBRARY_LIST: [
    { iconSvg: <SVG.ReactIcon />, title: 'React' },
    { iconSvg: <SVG.Vue />, title: 'Vue.js' },
    { iconSvg: <SVG.Angular />, title: 'Angular' },
    { iconSvg: <SVG.Svelte />, title: 'Svelte' },
    { iconSvg: <SVG.Lit />, title: 'Lit' },
    // { iconSvg: <SVG.Ember />, title: 'Ember' },
    // { iconSvg: <SVG.Alpine />, title: 'Alpine.js' },
    // { iconSvg: <SVG.Preact />, title: 'Preact' },
    // { iconSvg: <SVG.Stimulus />, title: 'Stimulus' },
    // { iconSvg: <SVG.Solid />, title: 'Solid' },
  ],
  BACKEND_LIST: [
    { iconSvg: <SVG.Nest />, title: 'Nest.js' },
    { iconSvg: <SVG.Express />, title: 'Express' },
    { iconSvg: <SVG.Fastify />, title: 'Fastify' },
    { iconSvg: <SVG.Hapi />, title: 'Hapi' },
  ],
  FULL_STACK_LIST: [
    { iconSvg: <SVG.Next />, title: 'Next.js' },
    { iconSvg: <SVG.Nuxt />, title: 'Nuxt' },
    { iconSvg: <SVG.Svelte />, title: 'SvelteKit' },
    { iconSvg: <SVG.Remix />, title: 'Remix' },
    { iconSvg: <SVG.Astro />, title: 'Astro' },
    { iconSvg: <SVG.Blitz />, title: 'BlitzJS' },
  ],
  PACKAGE_LIST: [
    { iconSvg: <SVG.Webpack />, title: 'Webpack' },
    { iconSvg: <SVG.Rollup />, title: 'Rollup' },
    { iconSvg: <SVG.Parcel />, title: 'Parcel' },
    { iconSvg: <SVG.Esbuild />, title: 'EsBuild' },
    { iconSvg: <SVG.Vite />, title: 'Vite' },
  ],
  ENVAIROMENT_LIST: [
    { iconSvg: <SVG.Node />, title: 'Node.js' },
    { iconSvg: <SVG.Deno />, title: 'Deno' },
  ],
  CSS_IN_JS_LIST: [
    { iconSvg: <SVG.Stitches />, title: 'Stitches', isPng: false },
    {
      iconSvg: <SVG.StyledComponents />,
      title: 'Styled Components',
      isPng: false,
    },
    { iconPng: '/Emotion.png', title: 'Emotion', isPng: true },
  ],
  FRAMEWORK_CSS_LIST: [
    { iconSvg: <SVG.Tailwind />, title: 'Tailwind' },
    { iconSvg: <SVG.Bulma />, title: 'Bulma' },
  ],
  TOOL_TESTING_LIST: [
    { iconSvg: <SVG.Jest />, title: 'Jest', isPng: false },
    { iconPng: '/TestingLibrary.png', title: 'Testing Library', isPng: true },
    { iconSvg: <SVG.Vitest />, title: 'Vitest', isPng: false },
  ],
  E2S_LIST: [
    { iconSvg: <SVG.Cypress />, title: 'Cypress' },
    { iconSvg: <SVG.Playwright />, title: 'Playwright' },
    { iconSvg: <SVG.Puppeteer />, title: 'Puppeteer' },
  ],
  SERVICE_LIST: [
    { iconSvg: <SVG.Firebase />, title: 'Firebase' },
    { iconSvg: <SVG.Supabase />, title: 'Supabase' },
    { iconSvg: <SVG.Airtable />, title: 'Airtable' },
    { iconSvg: <SVG.Amplify />, title: 'Amplify' },
    { iconSvg: <SVG.MongoDB />, title: 'Mongo' },
  ],
  CATALOG_LIST: [
    { iconPng: '/Chakra.png', title: 'Chakra UI', isPng: true },
    { iconSvg: <SVG.MaterialUI />, title: 'Material UI', isPng: false },
    { iconSvg: <SVG.Next />, title: 'Next UI', isPng: false },
    { iconPng: '/Ant.png', title: 'Ant Design', isPng: true },
    { iconSvg: <SVG.DaisyUI />, title: 'Daisy UI', isPng: false },
    {
      iconPng: '/ReactSemanticUI.png',
      title: 'React Semantic UI',
      isPng: true,
    },
  ],
  HOSTING_LIST: [
    { iconSvg: <SVG.Vercel />, title: 'Vercel', isPng: false },
    { iconSvg: <SVG.Netlify />, title: 'Netlify', isPng: false },
    { iconPng: '/Render.webp', title: 'Render', isPng: true },
    { iconSvg: <SVG.AWS />, title: 'AWS', isPng: false },
    { iconSvg: <SVG.Azure />, title: 'Azure', isPng: false },
    { iconSvg: <SVG.GoogleCloud />, title: 'Google Cloud', isPng: false },
  ],
}
