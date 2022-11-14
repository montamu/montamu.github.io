import type { NextPage } from 'next'
import Navbar from '../../components/Navbar';

const Skills: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-4xl px-4 py-8 grid gap-8 justify-center">
        <h1 className="text-3xl">Webのスキル</h1>

        <div className="px-8 py-4 bg-white border-black border dark:bg-gray-800">
          <p>相対的に<span className="bg-red-200">習熟度が高い</span>（自信があるもの）技術から順に<span className="bg-red-200">赤</span>、<span className="bg-yellow-200">黄</span>、<span className="bg-blue-200">青</span>で色分けしています。その他の技術に関しては相対的に判断するのが難しいので、色分けはあえてしていません。</p>
        </div>

        <h2 className="text-xl border-black border-b-2">フロントエンド</h2>
        <div className="flex">
          <p className="bg-gray-200 p-2 rounded-lg w-fit mr-4">HTML</p>
          <p className="bg-gray-200 p-2 rounded-lg w-fit mr-4">CSS</p>
          <p className="bg-gray-200 p-2 rounded-lg w-fit">JavaScript(TypeScript)</p>
        </div>

        <table className="border-collapse border border-black">
          <thead>
            <tr>
              <th className="table-cell">使ったことがあるフレームワーク</th>
              <th className="table-cell">コメント</th>
              <th className="table-cell">これで作ったもの</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-cell bg-red-200">MUI</td>
              <td className="table-cell">Reactと相性の良いCSSフレームワークを探していて、MUIを使い始めました。BootStrapに似ていて使いやすいです。</td>
              <td className="table-cell"><a href="https://gamebosyu.com" className="hover:text-cyan-500 transition-colors">ゲーム募集ドットコム</a></td>
            </tr>
            <tr>
              <td className="table-cell bg-red-200">React</td>
              <td className="table-cell">TypeScriptと一緒に使ってます。JSXがわりかし好きなので良い感じ。</td>
              <td className="table-cell"><a href="https://gamebosyu.com" className="hover:text-cyan-500 transition-colors">ゲーム募集ドットコム</a></td>
            </tr>
            <tr>
              <td className="table-cell bg-yellow-200">BootStrap</td>
              <td className="table-cell">一番最初に使ったCSSフレームワーク。今は使ってないけどこれを学んだおかげで、他のCSSフレームワークもすぐ使えるようになりました。</td>
              <td className="table-cell">なし</td>
            </tr>
            <tr>
              <td className="table-cell bg-blue-200">Tailwind CSS</td>
              <td className="table-cell">最近(2022年11月)流行ってるらしいので使ってます。クラス名を考えなくていいので書きやすくて結構良い感じ。</td>
              <td className="table-cell">このサイト</td>
            </tr>
            <tr>
              <td className="table-cell bg-blue-200">Vue.js</td>
              <td className="table-cell">Vue2をちょっと使っていたけど、TypeScriptとの相性があまり良くなかったので使わなくなりました。Vue3になってからTypeScriptでも使いやすいらしいので興味アリ。</td>
              <td className="table-cell">なし</td>
            </tr>
          </tbody>
        </table>
        
        <h2 className="text-xl border-black border-b-2">バックエンド</h2>
        <div className="flex">
          <p className="bg-gray-200 p-2 rounded-lg w-fit mr-4">PHP</p>
          <p className="bg-gray-200 p-2 rounded-lg w-fit mr-4">Python</p>
          <p className="bg-gray-200 p-2 rounded-lg w-fit">Ruby</p>
        </div>

        <table className="border-collapse border border-black">
          <thead>
            <tr>
              <th className="table-cell">使ったことがあるフレームワーク</th>
              <th className="table-cell">コメント</th>
              <th className="table-cell">これで作ったもの</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-cell bg-red-200">Laravel</td>
              <td className="table-cell">今一番使ってます。React(TypeScript)と一緒に使ってますが、正直Laravelは単体で使った方がシステムの恩恵を受けられるので、他の言語(Go, Node.jsなど)でバックエンドを実装することを検討中。</td>
              <td className="table-cell"><a href="https://gamebosyu.com" className="hover:text-cyan-500 transition-colors">ゲーム募集ドットコム</a></td>
            </tr>
            <tr>
              <td className="table-cell bg-yellow-200">WordPress</td>
              <td className="table-cell">以前にWordPressを使ってブログを書いていたことがあります。特に書く事が思いつかず、２週間くらいしか続きませんでしたが。</td>
              <td className="table-cell">なし</td>
            </tr>
            <tr>
              <td className="table-cell bg-yellow-200">Django</td>
              <td className="table-cell">以前にDjangoを使って映画や本などについて誰でも感想を書けるサイトを作っていました。リリースまで行きませんでしたが。</td>
              <td className="table-cell">なし</td>
            </tr>
            <tr>
              <td className="table-cell bg-blue-200">Ruby on Rails</td>
              <td className="table-cell">初めて学んだバックエンドのフレームワーク。最近は使ってないので結構忘れてます。</td>
              <td className="table-cell">なし</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl border-black border-b-2">その他の技術</h2>
        <div className="flex">
          <p className="bg-gray-200 p-2 rounded-lg w-fit mr-4">データベース</p>
          <p className="bg-gray-200 p-2 rounded-lg w-fit mr-4">Git</p>
        </div>

        <table className="border-collapse border border-black">
          <thead>
            <tr>
              <th className="table-cell">技術</th>
              <th className="table-cell">コメント</th>
              <th className="table-cell">ツール</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-cell bg-gray-200">データベース</td>
              <td className="table-cell">基本的にフレームワークからORMを使ってDB操作をするので、生のSQLを書いたことはほとんどありません。</td>
              <td className="table-cell">MySQL, PostgreSQL</td>
            </tr>
            <tr>
              <td className="table-cell bg-gray-200">Git</td>
              <td className="table-cell">コードを書くときは常に使っています。過去にSource Treeを使っていましたが、いちいち起動するのが面倒くさくなったので、今はターミナルからコマンドを打って使ってます。</td>
              <td className="table-cell">Github</td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  )  
}

export default Skills