import { CircleCheck } from "lucide-react"
import Image from "next/image"
import ImageAbout from '../public/section-img-1.png'
import Link from "next/link"
import * as motion from "motion/react-client"
import { containerStagger, fadeIn, fadeInUp } from "@/motion/animation"

const AboutUs = () => {
  return (
    <motion.section className="py-30"
      variants={containerStagger}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: false }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-8">
          <motion.div variants={fadeInUp} className="section-desc">About us</motion.div>
          <motion.h3 variants={fadeInUp} className="section-title">We are avalible for 24/7 Energency Services</motion.h3>
          <motion.p variants={fadeInUp}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quae corporis culpa quos harum, provident nulla architecto qui quidem nam magnam minus, at impedit tempore praesentium voluptate ratione eveniet. Nostrum.</motion.p>
          <motion.div variants={fadeInUp}>
            <div className="font-bold">Our commitments to you:</div>
            <div className="space-y-3">
              <div className="flex items-center gap-x-2"><CircleCheck />Licensed, bonded and fully insured technicians</div>
              <div className="flex items-center gap-x-2"><CircleCheck />Upfront pricing with no hidden fees or surprises</div>
              <div className="flex items-center gap-x-2"><CircleCheck />Same-day service for most repairs and emergecies</div>
            </div>
          </motion.div>
          <motion.button variants={fadeInUp}>
              <Link href={'/'} className="btn">Learn more</Link>
          </motion.button>
        </div>
        <motion.div variants={fadeIn} className="">
          <Image src={ImageAbout} alt="" />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutUs