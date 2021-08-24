import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather Vain</title>
        <meta name="description" content="An app for checking current and forecasted weather built with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.home}>
        <p>Weather Vain* focuses on the weather info affecting your appearance. Can I wear shorts today? Will the wind ruin my hair? Is it going to be tanning weather?</p>
        <br/>
        <p>Click <Link href="/current"><a className={styles.home__anchor}>here</a></Link> to see the current weather in Stockholm (just Stockholm for now)</p>
        <br/>
        <p>Or click <Link href="/forecasted"><a className={styles.home__anchor}>here</a></Link> to see the weather (just in Stockholm) over the next 3 days</p>
      </section>

    </div>
  )
}
