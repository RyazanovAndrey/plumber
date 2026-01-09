import { CircleCheck } from "lucide-react"
import Image from "next/image"
import ImageAbout from '../public/section-img-1.png'
import Link from "next/link"

const AboutUs = () => {
  return (
    <section className="py-30">
      <div className="container grid grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="section-desc">About us</div>
          <h3 className="section-title">We are avalible for 24/7 Energency Services</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque earum officia amet laudantium necessitatibus ea aut in exercitationem obcaecati eius nobis nostrum eaque, tempora error id tempore libero laboriosam nemo fugit incidunt magnam voluptate sint, aperiam velit. Eveniet earum velit, delectus quis rem inventore ducimus! In provident, et molestias aut, amet consequuntur vero velit asperiores quae quibusdam dolore, nulla ducimus cum aliquam. Nostrum cum iste odit impedit reprehenderit, officia repudiandae nemo eum officiis sit quam consequatur optio quidem necessitatibus facilis? Numquam necessitatibus ullam fugit eos nesciunt sed non animi. Laborum, neque quidem iste tenetur suscipit porro ad nulla dignissimos error.</p>
          <div className="font-bold">Our commitments to you:</div>
          <div className="space-y-3">
            <div className="flex items-center gap-x-2"><CircleCheck />Licensed, bonded and fully insured technicians</div>
            <div className="flex items-center gap-x-2"><CircleCheck />Upfront pricing with no hidden fees or surprises</div>
            <div className="flex items-center gap-x-2"><CircleCheck />Same-day service for most repairs and emergecies</div>
          </div>
          <Link href={'/'} className="btn">Learn more</Link>
        </div>
        <div className="">
          <Image src={ImageAbout} alt="" />
        </div>
      </div>
    </section>
  )
}

export default AboutUs