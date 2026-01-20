import { servicesCards } from "@/data"
import Image from "next/image"
import Link from "next/link"
import * as motion from "motion/react-client"
import { containerStagger, fadeInUp } from "@/motion/animation"

type TProps = {
  count: number,
  exploreBlock: boolean
}

const Services = ({ count, exploreBlock }: TProps) => {
  return (
    <motion.section className="pb-10"
      variants={containerStagger}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: false }}
    >
      <div className="container">
        <div className="text-center space-y-3 mb-20">
          <motion.span variants={fadeInUp} className="section-desc">Our services</motion.span>
          <motion.h3 variants={fadeInUp} className="section-title">Explore our Sevices & solutions</motion.h3>
          <motion.p variants={fadeInUp}>We offer a complete range of professional plumbing services <br /> designed to keep your water systems running smoothly</motion.p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5">
          {servicesCards.slice(0, count).map(item => (
            <motion.div variants={fadeInUp} className="border rounded-2xl p-5 bg-gray-100 space-y-5">
              <div className="font-bold text-xl">{item.title}</div>
              <p>{item.text}</p>
              <div className="flex justify-between items-center">
                <Image src={item.icon} width={60} height={60} alt="" />
                <div className="text-5xl font-bold text-card">{item.id}.</div>
              </div>
            </motion.div>
          ))}
          <motion.div variants={fadeInUp} className={`bg-secondary rounded-2xl p-5 space-y-5 ${exploreBlock ? 'block' : 'hidden'}`}>
            <Image src={'/icon-10.svg'} width={60} height={60} alt="" />
            <p>Clearing blocked sinks, toilets, showers, and sewer lines.</p>
            <Link href="/" className="btn-fill-blue">Explore more</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Services