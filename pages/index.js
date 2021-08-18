import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Weather App</title>
        <meta name="description" content="An app for checking current and forecasted weather built with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Weather app</h1>
        <p>There will be an intro</p>
        <p>Click <Link href="/results/">here</Link> to find out about the weather</p>
      </main>

    </div>
  )
}
