import Image from "next/image"
import { Clock2, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import * as motion from "motion/react-client"
import { containerStagger, fadeIn, fadeInUp } from "@/motion/animation"

const Problems = () => {

  const problemsList = [
    { title: 'Phone num', contact: '+38', icon: <Phone size={26} /> },
    { title: 'Location', contact: '123, Broadway', icon: <MapPin size={26}  /> },
    { title: 'Email adress', contact: 'help@gmail.com', icon: <Mail size={26}  /> },
    { title: 'Business Hours', contact: 'help@gmail.com', icon: <Clock2 size={26}  /> },
  ]

  return (
    <motion.section
      variants={containerStagger}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: false }}
      className="bg-secondary pt-20 hidden">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div>
            <motion.h3 variants={fadeInUp} className="section-title mb-10">Have a problem we'll fix it today</motion.h3>
            <div className="grid grid-cols-2 gap-x-20 mb-5">
              {problemsList.map(item => {
                return <motion.div variants={fadeInUp} className="flex items-center gap-x-5 mt-5">
                  <div className="">{item.icon}</div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="">{item.contact}</div>
                  </div>
                </motion.div>
              })}
            </div>
            <motion.button variants={fadeInUp}>
              <Link href={'/'} className="btn-fill-blue w-50">Contact us</Link>
            </motion.button>
          </div>
          <motion.div variants={fadeIn} className="flex justify-end">
            <Image src={'/2563.png'} alt="" width={500} height={500} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Problems