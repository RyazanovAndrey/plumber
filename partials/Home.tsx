import Image from "next/image"
import Link from "next/link"
import imgHero from '../public/hero-3.png'

const Home = () => {
  return (
    <section className="bg-primary text-white pt-25">
      <div className="container grid grid-cols-2 gap-10 items-center">
        <div className="space-y-3">
          <div className="uppercase">Read for help you</div>
          <h1 className="text-6xl font-bold">Expert Plumbing <br /> <span className="text-secondary text-[clamp(1.25rem, 3.12vw, 3.75rem)]">services</span> provider</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut deserunt nemo repellendus cum est sed, tempore id quam laudantium. Totam?</p>
          <Link href={'/'} className="btn inline-block">Learn more</Link>
        </div>
        <div className="">
          <Image src={imgHero} width={450} alt="" preload />
        </div>
      </div>
    </section>
  )
}

export default Home