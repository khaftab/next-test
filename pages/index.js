import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src="/1.jpg" width={700} height={600} />
      <Image src="/2.jpg" width={700} height={600} />
      <Image src="/3.jpg" width={700} height={600} />
      <Image src="/4.jpg" width={700} height={600} />
      <Image src="/5.jpg" width={700} height={600} />

      <Link href="/service"><a>Service</a></Link>
      <Link href="/contact"><a>contact</a></Link>
      <Link href="/article"><a>Article</a></Link>
    </div>
  )
}