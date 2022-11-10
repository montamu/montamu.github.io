import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="border-black border-b bg-white mb-8">
      <div className="h-16 mx-auto px-5 flex items-center justify-start gap-5">
          <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">レモンのWebサイト</a>
          
          <ul className="flex items-center gap-5">
            <li><Link className="hover:text-cyan-500 transition-colors" href="/tags/skills">Webのスキル</Link></li>
            <li><Link className="hover:text-cyan-500 transition-colors" href="/tags/deliverables">作ったもの</Link></li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar