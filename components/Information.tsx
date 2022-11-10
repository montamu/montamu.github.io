const Information = () => {
  return (
    <div className="max-w-2xl bg-white dark:bg-gray-800">
      <h1 className="text-2xl inline-block mb-4">お知らせ</h1>
      <div className="mt-2 border-black border-l-4 pl-4 flex flex-row">
        <div className="px-2 py-2 mr-4 rounded-r-[16px] bg-gray-200">
          <p>2022/11/9</p>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">お知らせの内容を書く欄</p>
      </div>
    </div>
  )
}

export default Information