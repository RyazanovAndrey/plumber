import Image from "next/image"
import { Clock2, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const Problems = () => {
  return (
    <section className="bg-secondary pt-20">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h3 className="section-title mb-10">Have a problem we'll fix it today</h3>
            <div className="grid grid-cols-2 gap-x-20 mb-5">
              <div className="flex items-center gap-x-5 mt-5">
                <Phone />
                <div>
                  <div className="font-bold">Phone num</div>
                  <div className="">+38</div>
                </div>
              </div>
              <div className="flex items-center gap-x-5 mt-5">
                <MapPin />
                <div>
                  <div className="font-bold">Location</div>
                  <div className="">123, Broadway</div>
                </div>
              </div>
              <div className="flex items-center gap-x-5 mt-5">
                <Mail />
                <div>
                  <div className="font-bold">Email adress</div>
                  <div className="">help@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-x-5 mt-5">
                <Clock2 />
                <div>
                  <div className="font-bold">Business Hours</div>
                  <div className="">help@gmail.com</div>
                </div>
              </div>
            </div>
            <Link href={'/'} className="btn-fill-blue w-50">Contact us</Link>
          </div>
          <div className="flex justify-end">
            <Image src={'/cta-img.png'} alt="" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problems