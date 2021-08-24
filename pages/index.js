import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather Vain</title>
        <meta name="description" content="An app for checking current and forecasted weather built with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1>Weather app</h1>
        <p>Click <Link href="/current"><a>here</a></Link> to see the current weather in Stockholm (just Stockholm for now)</p>
        <p>Or click <Link href="/forecasted"><a>here</a></Link> to see the weather (just in Stockholm) over the next 3 days</p>
      </section>

    </div>
  )
}
