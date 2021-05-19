

import Link from 'next/link'
import Image from 'next/image'

function contact() {
    return (
        <div>
            <Image src="/4.jpg" width={250} height={210} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates error sint enim quod ex soluta deserunt blanditiis fuga ut non?</p>
            <Image src="/2.jpg" width={200} height={210} />
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil error aspernatur unde voluptate nulla illum?</h1>
            <Image src="/3.jpg" width={300} height={210} />
            <Link href="/"><a>Home</a></Link>
            <Link href="/service"><a>Service</a></Link>
            <Link href="/article"><a>Article</a></Link>

        </div>
    )
}

export default contact
