import { footerList } from "@/data"
import Link from "next/link"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="py-5 hidden">
      <div className="container">
        <div className="">
          <div className="grid grid-cols-4 gap-x-5">
          <div className="">
            <div className="font-bold">Plumber</div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, impedit?</p>
          </div>
          <div className="">
            <div className="font-bold mb-2">{footerList[0].title}</div>
            {footerList[0].list.map(item => {
              return <Link href={'/'} className="block hover:underline">{item}</Link>
            })}
          </div>
          <div className="">
            <div className="font-bold">{footerList[1].title}</div>
            {footerList[1].list.map(item => {
              return <Link href={'/'} className="block hover:underline">{item}</Link>
            })}
          </div>
          <div className="">
            <div className="font-bold">{footerList[2].title}</div>
            {footerList[2].list.map(item => {
              return <Link href={'/'} className="block hover:underline">{item}</Link>
            })}
          </div>
        </div>
        </div>
        <div className="mt-5">
          <p>&copy; {year} All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer