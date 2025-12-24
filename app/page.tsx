import Image from "next/image";
import imgHero from '../public/hero-3.png'
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="container grid grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="uppercase">Read for help you</div>
            <h1 className="text-6xl font-bold">Expert Plumbing <br /> <span className="text-secondary">services</span> provider</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut deserunt nemo repellendus cum est sed, tempore id quam laudantium. Totam?</p>
            <Link href={'/'} className="btn">Learn more</Link>
          </div>
          <div className="">
            <Image src={imgHero} width={450} alt="" preload />
          </div>
        </div>
      </section>
      <section>
        <div className="container flex">
          <div className="flex gap-x-3 bg-white p-5 rounded-l-2xl shadow-2xl max-w-75 text-primary -mt-5 max-h-35 font-semibold">
            <Image src={'/icon-1.svg'} width={70} height={70} alt="" />
            <p>Emergency plumbing repairs available 24/7. Fast response time guaranteed</p>
          </div>
          <div className="bg-secondary p-5 rounded-2xl text-primary font-semibold max-w-60 -mt-15 space-y-2">
            <Image src={'/icon-2.svg'} width={70} height={70} alt="" />
            <p>Licensed and insured plumbing professional with over 10 years of experience</p>
            <Link href={'/'} className="bg-primary text-white inline-block py-3 px-6 rounded-full">Here us</Link>
          </div>
        </div>
      </section>
    </>
  )
}