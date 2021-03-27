import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat fuga minima? Officiis id quaerat eius iusto quam aliquam soluta quae! Rerum ipsam dolor voluptatibus aliquam numquam inventore praesentium laudantium.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni magnam incidunt fugiat quae quos, ipsa omnis aperiam quaerat repudiandae temporibus porro totam similique veritatis voluptatum mollitia expedita hic! Velit.
        </p>
      </div>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </>
  )
}