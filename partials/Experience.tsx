import Image from "next/image"
import expImage from '../public/section-img-2.png'
import * as motion from "motion/react-client"
import { containerStagger, fadeIn, fadeInUp } from "@/motion/animation"

const Experience = () => {

  const expList = [
    { title: '15+', desc: 'Years of experience' },
    { title: '10k+', desc: 'Happy clients' },
    { title: '30+', desc: 'Qualified Experts' },
  ]

  return (
    <motion.section
      variants={containerStagger}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: false }}
      className="bg-primary py-30">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="text-white space-y-5">
          <motion.div variants={fadeInUp} className="section-desc">Our experience</motion.div>
          <motion.h3 variants={fadeInUp} className="section-title">Building Trast Through Quality Services</motion.h3>
          <motion.p variants={fadeInUp}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cumque porro ad quasi excepturi voluptatem alias laborum eaque autem mollitia.</motion.p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-10 md:gap-20">
            {expList.map(item => (
              <motion.div className="" variants={fadeInUp}>
                <span className="text-4xl font-bold block">{item.title}</span>
                <span>{item.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div className="flex md:justify-end" variants={fadeIn}>
          <Image className="rounded-2xl" src={expImage} width={400} height={400} alt="" />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience