import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>レモンのWebサイト</title>
        <meta name="description" content="レモンのポートフォリオサイトです。自分のWeb制作スキルや、これまでに作ったサイトなどをまとめています。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          レモンのWebサイト
        </h1>

        <hr />

        <h2>
          <Link href="/tags/skills">Webに関するスキル</Link>
        </h2>

        <h2>
          <Link href="/tags/deliverables">これまでの成果物</Link>
        </h2>

        <hr />

      </main>

    </div>
  )
}

export default Home
