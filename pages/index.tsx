import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>レモンのWebサイト</title>
        <meta name="description" content="レモンのポートフォリオサイトです。自分のWeb制作スキルや、これまでに作ったサイトなどをまとめています。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className="container mx-auto px-4">

          
        </div>
      </main>

    </>
  )
}

export default Home
