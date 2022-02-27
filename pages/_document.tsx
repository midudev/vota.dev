import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html>
      <Head />
      <body className="flex flex-col min-h-screen px-2 bg-yellow-js align-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
