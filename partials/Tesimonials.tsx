import { testimonialsList } from "@/data"
import Image from "next/image"

const Testimonials = () => {
  return (
    <section className="bg-primary py-30">
      <div className="container">
        <div className="container grid grid-cols-2 gap-20 items-center">
          <div className="text-white space-y-5">
            <div className="section-desc">Testimonials</div>
            <h3 className="section-title">What our clients say about us</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cumque porro ad quasi excepturi voluptatem alias laborum eaque autem mollitia.</p>
            <button className="btn">Learn more</button>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {testimonialsList.map(item => {
              return (
                <div className="bg-white rounded-2xl p-5 grid grid-[auto_1fr_auto]">
                  <p>{item.text}</p>
                  <div className="flex gap-x-2 items-center mt-2">
                    <Image src={item.img} width={50} height={50} alt="" className="rounded-full" />
                    <p className="font-bold">{item.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials