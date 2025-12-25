import Image from "next/image"
import Link from "next/link"

const HomeItems = () => {
  return (
    <section>
      <div className="container flex">
        <div className="flex gap-x-3 bg-white p-5 rounded-l-2xl shadow-2xl max-w-75 text-primary -mt-5 max-h-35 font-semibold">
          <Image src={'/icon-1.svg'} width={70} height={70} alt="" />
          <p>Emergency plumbing repairs available 24/7. Fast response time guaranteed</p>
        </div>
        <div className="bg-secondary p-5 rounded-2xl text-primary font-semibold max-w-60 -mt-15 space-y-2">
          <Image src={'/icon-2.svg'} width={70} height={70} alt="" />
          <p>Licensed and insured plumbing professional with over 10 years of experience</p>
          <Link href={'/'} className="btn-fill-blue">Here us</Link>
        </div>
      </div>
    </section>
  )
}

export default HomeItems