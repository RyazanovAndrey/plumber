import Image from "next/image"
import expImage from '../public/section-img-2.png'

const Experience = () => {
  return (
    <section className="bg-primary py-30">
        <div className="container grid grid-cols-2 gap-20 items-center">
          <div className="text-white space-y-5">
            <div className="section-desc">Our experience</div>
            <h3 className="section-title">Building Trast Through Quality Services</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cumque porro ad quasi excepturi voluptatem alias laborum eaque autem mollitia.</p>
            <div className="flex gap-x-20">
              <div className="">
                <span className="text-4xl font-bold block">15+</span>
                <span>Years of experience</span>
              </div>
              <div className="">
                <span className="text-4xl font-bold block">10k+</span>
                <span>Happy clients</span>
              </div>
              <div className="">
                <span className="text-4xl font-bold block">30+</span>
                <span>Qualified Experts</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image className="rounded-2xl" src={expImage} width={400} height={400} alt=""/>
          </div>
        </div>
    </section>
  )
}

export default Experience