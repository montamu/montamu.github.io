import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="border-black border-b bg-white mb-8">
      <div className="h-16 mx-auto px-5 flex items-center justify-start gap-5">
          <Link href="/"><a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">レモンのWebサイト</a></Link>
          
          <ul className="flex items-center gap-5">
            <li><Link href="/tags/skills"><a className="hover:text-cyan-500 transition-colors">Webのスキル</a></Link></li>
            <li><Link href="/tags/deliverables"><a className="hover:text-cyan-500 transition-colors">作ったもの</a></Link></li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar