'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "@/data"
import { useEffect, useState } from "react"

const Header = () => {

  const path = usePathname()
  const [isShowMenu, setisShowMenu] = useState<boolean>(false)

  useEffect(() => {
    const showNavMenu = () => setisShowMenu(window.scrollY > 500)
    window.addEventListener('scroll', showNavMenu)

    return () => window.removeEventListener('scroll', showNavMenu)

  }, [])

  return (
    <header className={`${isShowMenu ? 'header active' : 'header'}`}>
      <div className="container flex justify-between items-center">
        <div className="text-3xl">Plumber</div>
        <div className="flex gap-x-20 items-center">
          {navLinks.map(item => {
            const isActive = path == item.href || path.startsWith(item.href) && item.href !== '/'
            return <Link href={item.href} className={isActive ? 'link active' : 'link'}>{item.title}</Link>
          })}
          <Link href={'/contacts'} className="btn">Contacts</Link>
        </div>
      </div>
    </header>
  )
}

export default Header