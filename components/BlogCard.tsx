import Link from 'next/link'

const BlogCard = () => {
  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">2022/11/9</span>
          <Link href="/" className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" role="button">React</Link>
      </div>

      <div className="mt-2">
          <Link href="/" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" role="link">ブログ記事のタイトル入力欄</Link>
          <p className="mt-2 text-gray-600 dark:text-gray-300">記事の冒頭部分を切りの良いところまで表示させる欄。マークダウンであらかじめ指定しておいた部分がここに表示されます。</p>
      </div>

      <div className="flex items-center mt-4">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline" role="link">続きを読む</Link>
      </div>
    </div>
  )
}

export default BlogCard