import { servicesCards } from "@/data"
import Image from "next/image"
import Link from "next/link"

type TProps = {
  count: number,
  exploreBlock: boolean
}

const Services = ({ count, exploreBlock }: TProps) => {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="text-center space-y-3 mb-20">
          <span className="section-desc">Our services</span>
          <h3 className="section-title">Explore our Sevices & solutions</h3>
          <p>We offer a complete range of professional plumbing services <br /> designed to keep your water systems running smoothly</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {servicesCards.slice(0, count).map(item => (
            <div className="border rounded-2xl p-5 bg-gray-100 space-y-5">
              <div className="font-bold text-xl">{item.title}</div>
              <p>{item.text}</p>
              <div className="flex justify-between items-center">
                <Image src={item.icon} width={60} height={60} alt="" />
                <div className="text-5xl font-bold text-card">{item.id}.</div>
              </div>
            </div>
          ))}
          <div className={`bg-secondary rounded-2xl p-5 space-y-5 ${exploreBlock ? 'block' : 'hidden'}`}>
            <Image src={'/icon-10.svg'} width={60} height={60} alt="" />
            <p>Clearing blocked sinks, toilets, showers, and sewer lines.</p>
            <Link href="/" className="btn-fill-blue">Explore more</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services