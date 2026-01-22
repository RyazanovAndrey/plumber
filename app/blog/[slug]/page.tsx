import { blogList } from "@/data"
import Image from "next/image"

type TProps = {
    params: Promise<{ slug: string }>
}

export const findItem = (slug: string) => {
    const findInfo  = blogList.find(item => item.id == slug)
    return findInfo
}

export async function generateStaticParams() {
  return blogList.map(item => ({
    slug: item.id
  }))
}

export const generateMetadata = async ({ params }: TProps) => {
    const { slug } = await params
    const findInfo = findItem(slug)

    return {
        title: findInfo?.title
    }
}

export default async function Page({ params }: TProps) {

    const { slug } = await params
    const findInfo = findItem(slug)

    return (
        <div className="py-30">
            <div className="container">
                <div className="text-center flex justify-center">
                    <div className="max-w-200">
                        <div className="section-title">Blog detail</div>
                        <p>Discover helpful plumbing tips, maintenance advice, and expert insights from the Plumber team</p>
                    </div>
                </div>
                <div className="mt-20 flex gap-x-20 items-center">
                    <Image src={findInfo?.img ?? ''} width={400} height={400} className="rounded-2xl" alt="" />
                    <div className="">
                        <div className="text-2xl font-bold">{findInfo?.title}</div>
                        <p className="text-xl font-bold mt-5">Introduction:</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ratione voluptatem odio ad, ullam maxime labore animi fugit doloribus? Tenetur, sit numquam quae aperiam beatae ullam dolor dolore velit cum amet. Adipisci quidem, aliquid recusandae velit laborum quasi ullam nihil, ea inventore accusantium ex? Inventore delectus eum culpa debitis quia.</p>
                    </div>
                </div>
                <div className="">
                    <p className="text-xl font-bold mt-5">Main content:</p>
                    <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo dolor, suscipit eos saepe ratione commodi odio cupiditate magnam molestiae! Inventore dolores atque magnam facilis voluptatum a sapiente nihil hic voluptatibus eligendi modi tempora, aspernatur, suscipit assumenda, earum sit recusandae quas quia qui eos. Voluptatem, voluptatum? Voluptates minus quibusdam labore consequuntur dolorem obcaecati, reprehenderit facilis, iste aut aliquid temporibus ipsam ratione eos ullam amet repudiandae culpa inventore commodi ducimus laborum numquam perspiciatis. Dolores perferendis ex harum laborum aperiam aspernatur! Mollitia a cum esse fugit fugiat nihil numquam sit dignissimos aperiam eum iure nemo provident, error voluptate dicta, iste deleniti recusandae voluptatum.</p>
                </div>
            </div>
        </div>
    )
}