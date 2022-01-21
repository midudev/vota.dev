import Link from 'next/link'

export const Logo = () => (
  <Link href="/">
    <a className="hover:opacity-90 font-bold text-2xl relative after:content-['dev'] after:text-yellow-js after:bg-black after:px-1">
      Vota
    </a>
  </Link>
)
