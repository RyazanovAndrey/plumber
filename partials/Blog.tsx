import Link from "next/link"
import { blogList } from "@/data"
import Image from "next/image"
import * as motion from "motion/react-client"
import { containerStagger, fadeInUp } from "@/motion/animation"

const Blog = () => {
  return (
    <motion.section
      variants={containerStagger}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: false }}
      className="py-10 hidden">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="max-w-120">
            <motion.div variants={fadeInUp} className="section-desc">Our blog</motion.div>
            <motion.div variants={fadeInUp} className="section-title">Latest plumbing tips and industry updates</motion.div>
          </div>
          <motion.button variants={fadeInUp}>
            <Link href={'/blog'} className="btn">Browse all articles</Link>
          </motion.button>
        </div>
        <div className="grid grid-cols-3 mt-10 gap-5">
          {blogList.map(item => {
            return (
              <motion.div variants={fadeInUp} className="border border-gray-200 rounded-2xl overflow-hidden">
                <Image src={item.img} alt="" width={500} height={300} />
                <div className="p-5 space-y-5">
                  <div className="text-md font-bold">{item.title}</div>
                  <div className="">{item.date}</div>
                  <Link href={`/blog/${item.id}`} className="underline">Read more</Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Blog