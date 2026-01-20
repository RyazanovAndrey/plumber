'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "@/data"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {

  const path = usePathname()
  const [isShowMenu, setisShowMenu] = useState<boolean>(false)

  return (
    <header className='header'>
      <div className="container flex justify-between items-center">
        <div className="text-3xl">Plumber</div>
        <div className="hidden lg:flex gap-x-20 px-2 items-center">
          {navLinks.map(item => {
            const isActive = path == item.href || path.startsWith(item.href) && item.href !== '/'
            return <Link href={item.href} className={isActive ? 'link active' : 'link'}>{item.title}</Link>
          })}
          <Link href={'/contacts'} className="btn">Contacts</Link>
        </div>

        {/* Mobile menu */}
        <div className={`fixed top-0 left-0 bg-white w-full h-screen text-center grid place-items-center transition-all duration-300 ${isShowMenu ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col">
            {navLinks.map(item => {
              return <Link href={item.href} className="text-primary text-2xl p-3" onClick={() => setisShowMenu(!isShowMenu)}>{item.title}</Link>
            })}
          </div>
            <Link href={'/contacts'} className="btn" onClick={() => setisShowMenu(!isShowMenu)}>Contacts</Link>
        </div>


        {/* Burger */}
        <div className="bg-secondary rounded-full p-2 cursor-pointer lg:hidden scale-z-90" onClick={() => setisShowMenu(!isShowMenu)}>
          {isShowMenu ? <X color="#092c52" size={28} /> : <Menu color="#092c52" size={28} />}
        </div>
      </div>
    </header>
  )
}

export default Header