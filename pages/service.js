import Image from 'next/image'
import Link from 'next/link'
// require('dotenv').config()
const service = () => {
    console.log(process.env.NEXT_PUBLIC_OPEN)
    return (
        <div>
            <Image src="/1.jpg" width={700} height={600} />
            <Image src="/2.jpg" width={700} height={600} />
            <Image src="/3.jpg" width={700} height={600} />
            <Image src="/4.jpg" width={700} height={600} />
            <Image src="/5.jpg" width={700} height={600} /> <Image src="/1.jpg" width={700} height={600} />
            <Image src="/2.jpg" width={700} height={600} />
            <Link href="/"><a>Home</a></Link>
            <Link href="/contact"><a>contact</a></Link>
            <Link href="/article"><a>Article</a></Link>
        </div>
    )
}

export default service