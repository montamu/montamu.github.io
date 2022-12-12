import type { NextPage } from 'next'
import Navbar from '../../components/Navbar';

const Deliverables: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-4xl px-4 py-8 grid gap-8 justify-center">
        <h1 className="text-3xl">作ったもの</h1>

        <div className="px-8 py-4 bg-white border-black border dark:bg-gray-800">
          <p>自分がこれまで作ったアプリで公開しているものをこのページで紹介します。作ったけど公開していないものは作ったものとしてカウントしてません。</p>
        </div>

        <h2 className="text-xl border-black border-b-2">Webサービス</h2>

        <h3 className="border-black border w-fit p-2"><a href="https://gamebosyu.com" className="hover:text-cyan-500 transition-colors">ゲーム募集ドットコム(https://gamebosyu.com)</a></h3>
        <p>
          <b>ゲームを一緒にやってくれる人を募集するサービス</b>です。
          <br /><br />
          暴言などのマナーの悪い人と当たらないようにし、<b>ユーザーのみなさんが楽しくゲームができるようなサービスを目指しています</b>。
          <br /><br />
          今後のアップデート内容は随時このサイトで発表していきます。
          <br /><br />
          <span className='bg-red-200'>※サーバーとして利用しているHerokuの無料枠の廃止に伴って、現在サイトの公開を停止しています。できるだけ早く公開を再開したいと思っています。(2022/12/12追記)</span>
        </p>
        

      </div>
    </>
  )  
}

export default Deliverables