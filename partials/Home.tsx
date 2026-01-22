import Image from "next/image"
import Link from "next/link"
import imgHero from '../public/hero-3.png'
import * as motion from "motion/react-client"
import { containerStagger, fadeIn, fadeInUp } from "@/motion/animation"

const Home = () => {
  return (
    <motion.section
      variants={containerStagger}
      initial='hidden'
      whileInView={'visible'}
      viewport={{ once: false }}
    >
      <div className="bg-primary text-white pt-25">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-3">
            <motion.div variants={fadeInUp} className="uppercase">Read for help you</motion.div>
            <motion.h1 variants={fadeInUp} className="font-bold text-[clamp(30px,3.10vw,60px)]">Expert Plumbing <br /> <span className="text-secondary">services</span> provider</motion.h1>
            <motion.p variants={fadeInUp}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut deserunt nemo repellendus cum est sed, tempore id quam laudantium. Totam?</motion.p>
            <motion.button variants={fadeInUp}>
              <Link href={'/'} className="btn inline-block">Learn more</Link>
            </motion.button>
          </div>
          <motion.div className="" variants={fadeIn}>
            <Image src={imgHero} width={450} alt="" preload />
          </motion.div>
        </div>
      </div>
      <div>
        <div className="container flex flex-col gap-y-3 md:flex-row">
          <motion.div variants={fadeInUp} className="relative top-0 md:-top-10 left-0 flex gap-x-3 bg-white p-5 rounded-2xl md:rounded-l-2xl mr-3 shadow-2xl md:max-w-75 text-primary md:max-h-35 font-semibold">
            <Image src={'icon-1.svg'} width={70} height={70} alt="" />
            <p>Emergency plumbing repairs available 24/7. Fast response time guaranteed</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-secondary p-5 rounded-2xl text-primary font-semibold md:max-w-60 space-y-2 relative top-0 md:-top-20 left-0">
            <Image src={'icon-2.svg'} width={70} height={70} alt="" />
            <p>Licensed and insured plumbing professional with over 10 years of experience</p>
            <Link href={'/'} className="btn-fill-blue">Here us</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home