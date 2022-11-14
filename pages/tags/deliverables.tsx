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
          ゲームを一緒にやってくれる人を募集するサービスです。
          <br /><br />
          他にも類似サービスはあるのですが、このサービスの特徴として<span className="bg-red-200">募集の空き人数が一目見てわかる</span>仕様になってます。
          <br /><br />
          またもう一つの特徴として、これからいつも一緒に遊ぶフレンドとしての募集というよりは、<span className="bg-red-200">誰でもいいから今一緒に遊ぶ相手を探したい</span>ときに使えるサービスを目指しています。
          <br /><br />
          今後追加予定の機能としては、ツイッターと連携したアカウントは募集の自動ツイートできるようにしたり、ユーザーのプロフィールをもっと細かく設定できるようにしたいです。
          <br /><br />
          今のところサービス利用者が自分しかいないので、サービス利用者を増やす工夫が必要。
          <br /><br />
          <span className="bg-red-200">今後のアップデート内容は随時このサイトで発表していこう</span>と思います。
        </p>

      </div>
    </>
  )  
}

export default Deliverables