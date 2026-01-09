import Link from "next/link"
import { blogList } from "@/data"
import Image from "next/image"

const Blog = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="max-w-120">
            <div className="section-desc">Our blog</div>
            <div className="section-title">Latest plumbing tips and industry updates</div>
          </div>
          <Link href={'/blog'} className="btn">Browse all articles</Link>
        </div>
        <div className="grid grid-cols-3 mt-10 gap-5">
          {blogList.map(item => {
            return (
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <Image src={item.img} alt="" width={500} height={300} />
                <div className="p-5 space-y-5">
                  <div className="text-md font-bold">{item.title}</div>
                  <div className="">{item.date}</div>
                  <Link href={`/blog/${item.id}`} className="underline">Read more</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog