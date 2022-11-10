import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Description from '../components/Description'
import Information from '../components/Information'
import BlogCard from '../components/BlogCard'

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
        <div className="container mx-auto px-4 grid gap-8 justify-center">
          <Description />
          <Information />
          <BlogCard />
          
        </div>
      </main>

    </>
  )
}

export default Home
