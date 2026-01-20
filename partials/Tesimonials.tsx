import { testimonialsList } from "@/data"
import Image from "next/image"
import * as motion from "motion/react-client"
import { containerStagger, fadeInUp } from "@/motion/animation"

const Testimonials = () => {
  return (
    <motion.section
      variants={containerStagger}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: false }}
      className="bg-primary py-30 hidden">
      <div className="container">
        <div className="container grid grid-cols-2 gap-20 items-center">
          <div className="text-white space-y-5">
            <motion.div variants={fadeInUp} className="section-desc">Testimonials</motion.div>
            <motion.h3 variants={fadeInUp} className="section-title">What our clients say about us</motion.h3>
            <motion.p variants={fadeInUp}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cumque porro ad quasi excepturi voluptatem alias laborum eaque autem mollitia.</motion.p>
            <motion.button variants={fadeInUp}>
              <button className="btn">Learn more</button>
            </motion.button>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {testimonialsList.map(item => {
              return (
                <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-5 grid grid-[auto_1fr_auto]">
                  <p>{item.text}</p>
                  <div className="flex gap-x-2 items-center mt-2">
                    <Image src={item.img} width={50} height={50} alt="" className="rounded-full" />
                    <p className="font-bold">{item.name}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonials