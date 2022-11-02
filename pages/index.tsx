import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>レモンのWebサイト</title>
        <meta name="description" content="レモンのポートフォリオサイトです。自分のWeb制作スキルや、これまでに作ったサイトなどをまとめています。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          レモンのWebサイト
        </h1>

        <div className="grid grid-cols-2 divide-x">
          <Link href="/tags/skills">Webに関するスキル</Link>
          <Link href="/tags/deliverables">これまでに作ったもの</Link>
        </div>


      </main>

    </div>
  )
}

export default Home
