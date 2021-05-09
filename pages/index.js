import React from 'react'
import Head from 'next/head'
import App from 'Components/App'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DrawPi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App />
    </div>
  )
}
