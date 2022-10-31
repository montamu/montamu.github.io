import type { NextPage } from 'next'
import Link from 'next/link';

const Skills: NextPage = () => {
  return (
    <>
      <Link href="/">HOME</Link>
      <h1>Webに関するスキル</h1>

      <h2>フロントエンド</h2>
      <h3>HTML, CSS, JavaScript(TypeScript)</h3>
      <h3>HTML, CSSフレームワーク</h3>
      <h4>BootStrap</h4>
      <h4>Tailwind CSS</h4>
      <h4>MUI</h4>

      <h3>JSフレームワーク</h3>
      <h4>React</h4>
      <h4>Vue.js</h4>
      

      <h2>バックエンド</h2>
      <h3>PHP, Python, Ruby</h3>

      <h3>PHPフレームワーク</h3>
      <h4>Laravel</h4>
      <h4>WordPress</h4>
      
      <h3>Pythonフレームワーク</h3>
      <h4>Django</h4>

      <h3>Rubyフレームワーク</h3>
      <h4>Ruby on Rails</h4>

      <h2>データベース</h2>
      <h3>MySQL, PostgreSQL</h3>

      <h2>その他</h2>
      <h3>Git</h3>
      
    </>
  )  
}

export default Skills