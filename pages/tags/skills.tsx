import type { NextPage } from 'next'
import Navbar from '../../components/Navbar';

const Skills: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-4xl px-4 py-8 grid gap-8 justify-center">
        <h1 className="text-3xl">Webのスキル</h1>

        <h2 className="text-xl border-black border-b-2">フロントエンド</h2>
        <div className="flex">
          <p className="bg-gray-200 p-2 rounded-lg w-fit mr-4">HTML</p>
          <p className="bg-gray-200 p-2 rounded-lg w-fit mr-4">CSS</p>
          <p className="bg-gray-200 p-2 rounded-lg w-fit">JavaScript(TypeScript)</p>
        </div>

        <table className="border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black">使ったことがあるフレームワーク</th>
              <th className="border border-black">コメント</th>
              <th className="border border-black">これで作ったもの</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black">BootStrap</td>
              <td className="border border-black">一番最初に使ったCSSフレームワーク。今は使ってないけどこれを学んだおかげで、他のCSSフレームワークもすぐ使えるようになった。</td>
              <td className="border border-black">なし</td>
            </tr>
            <tr>
              <td className="border border-black">Tailwind CSS</td>
              <td className="border border-black">最近(2022年11月)流行ってるらしいので使ってみている。クラス名を考えなくていいので結構良い。</td>
              <td className="border border-black">このサイト</td>
            </tr>
            <tr>
              <td className="border border-black">MUI</td>
              <td className="border border-black">Reactと相性の良いCSSフレームワークを探していて、MUIを使うことにした。BootStrapに似ていて使いやすい。</td>
              <td className="border border-black"><a href="https://gamebosyu.com" className="hover:text-cyan-500 transition-colors">ゲーム募集ドットコム</a></td>
            </tr>
          </tbody>
        </table>

        <h4>BootStrap</h4>
        <p>ちょっと触ったことがある程度</p>

        <h4>Tailwind CSS</h4>
        <p>このサイトはTailwind CSSで作っています</p>

        <h4>MUI</h4>
        <p><a href="https://gamebosyu.com">ゲーム募集ドットコム</a>で使っています</p>

        <h3>JSフレームワーク（基本的にTypeScriptで使っています）</h3>
        <h4>React</h4>
        <p><a href="https://gamebosyu.com">ゲーム募集ドットコム</a>で使っています</p>
        <p>このサイトはNext.jsで作っています</p>

        <h4>Vue.js</h4>
        <p>Vue2をちょっと触ったことがある程度。Vue3になってからはほとんど使ってないです</p>
        
        <h2>バックエンド</h2>
        <h3>PHP, Python, Ruby</h3>

        <h3>PHPフレームワーク</h3>
        <h4>Laravel</h4>
        <p><a href="https://gamebosyu.com">ゲーム募集ドットコム</a>で使っています</p>

        <h4>WordPress</h4>
        <p>以前にWordPressを使ってブログを書いていたこともあります。特に書く事が思いつかず、２週間くらいしか続きませんでしたが。</p>
        
        <h3>Pythonフレームワーク</h3>
        <h4>Django</h4>
        <p>以前にDjangoを使って映画や本などについて誰でも感想を書けるサイトを作っていました。途中で熱が冷めてしまって完成はしませんでしたが。</p>

        <h3>Rubyフレームワーク</h3>
        <h4>Ruby on Rails</h4>
        <p><a href="https://railstutorial.jp">Ruby on Railsチュートリアルをやったことがあります。最後まではやってませんが。</a></p>

        <h2>データベース</h2>
        <h3>MySQL, PostgreSQL</h3>
        <p>基本的にフレームワークからORMを使ってDB操作をするので、生のSQLを書いたことはほとんどありません。</p>

        <h2>その他</h2>
        <h3>Git</h3>
        <p>コードを書くときは常に使っています。過去にSource Treeを使っていましたが、いちいち起動するのが面倒くさくなったのでターミナルでコマンドを打って使ってます。</p>
        
      </div>
    </>
  )  
}

export default Skills