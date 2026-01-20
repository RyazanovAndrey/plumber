import { containerStagger, fadeIn, fadeInUp } from "@/motion/animation"
import { Clock2, Mail, MapPin, Phone } from "lucide-react"
import * as motion from "motion/react-client"

export default function Page() {

    const problemsList = [
        { title: 'Phone num', contact: '+38', icon: <Phone size={26} /> },
        { title: 'Location', contact: '123, Broadway', icon: <MapPin size={26} /> },
        { title: 'Email adress', contact: 'help@gmail.com', icon: <Mail size={26} /> },
        { title: 'Business Hours', contact: 'help@gmail.com', icon: <Clock2 size={26} /> },
    ]

    return (
        <motion.section className="py-30"
            variants={containerStagger}
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{ once: false }}
        >
            <div className="container">
                <div className="text-center space-y-3 mb-20">
                    <motion.h3 variants={fadeInUp} className="section-title">Contact us</motion.h3>
                    <motion.p variants={fadeInUp}>Ready to solve your plumbing problems? We`re here to help with fast, reliable service you can trust. <br /> Contact us today for professional plumbing solutions and upfront pricing</motion.p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="bg-primary p-5 text-white rounded-lg">
                        <motion.p variants={fadeInUp} className="uppercase mb-3">Contact us</motion.p>
                        <motion.div variants={fadeInUp} className="text-3xl font-bold">Need  more information? Get in touch</motion.div>
                        <motion.p variants={fadeInUp}>Have question about our plumbing services or need expert advice for your project? We`re here to help with professional guidance and reliable solutions</motion.p>
                        <div className="grid grid-cols-1">
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
                    </div>
                    <div className="">
                        <div className="text-3xl font-bold">Send message</div>
                        <motion.form action="" variants={fadeIn}>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                                <input type="text" className="border h-10 pl-3 outline-0 rounded-md border-gray-200" placeholder="First name" />
                                <input type="text" className="border h-10 pl-3 outline-0 rounded-md border-gray-200" placeholder="Last name" />
                                <input type="text" className="border h-10 pl-3 outline-0 rounded-md border-gray-200" placeholder="Email" />
                                <input type="text" className="border h-10 pl-3 outline-0 rounded-md border-gray-200" placeholder="Phone" />
                            </div>
                            <textarea className="border w-full rounded-md border-gray-200 mt-3 pl-3 py-2
                             outline-0"></textarea>
                            <button type="submit" className="bg-secondary w-full rounded-md h-10 cursor-pointer text-primary">Send message</button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}