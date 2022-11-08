import type { NextPage } from 'next'
import Link from 'next/link';

const Skills: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Link href="/">HOME</Link>
      <Link href="/tags/deliverables">今まで作ったサイト集</Link>
      <h1>Webに関するスキル</h1>

      <h2>フロントエンド</h2>
      <h3>HTML, CSS, JavaScript(TypeScript)</h3>

      <h3>HTML, CSSフレームワーク</h3>
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
  )  
}

export default Skills