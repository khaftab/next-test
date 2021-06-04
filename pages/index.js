import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}`
  }
  return (
    <div className={styles.container}>

      <Image src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2Fgas-oven.jpg?alt=media&token=23356762-ec87-4cac-869d-7481f6a95e44" width={300} height={200} loader={myLoader} />
      <Image src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2Fgas-oven.jpg?alt=media&token=23356762-ec87-4cac-869d-7481f6a95e44" width={700} height={600} />
      <Image src="/4.jpg" width={700} height={600} />
      <Image src="/5.jpg" width={700} height={600} />
      <Image src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2Fgas-oven.jpg?alt=media&token=23356762-ec87-4cac-869d-7481f6a95e44" width={300} height={200} loader={myLoader} /> <Image src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2Fgas-oven.jpg?alt=media&token=23356762-ec87-4cac-869d-7481f6a95e44" width={300} height={200} loader={myLoader} />
      <Image src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2Fgas-oven.jpg?alt=media&token=23356762-ec87-4cac-869d-7481f6a95e44" width={300} height={200} loader={myLoader} /> <Image src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2FInverter-battery.jpg?alt=media&token=edfff048-059a-4bc9-8b6a-eb02a384dde8" width={300} height={200} loader={myLoader} />
      <Image src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2Fgas-oven.jpg?alt=media&token=23356762-ec87-4cac-869d-7481f6a95e44" width={300} height={200} loader={myLoader} /> <Image src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2Fcelling%20fan.jpg?alt=media&token=8720665e-8e2f-4df5-96f5-2f3e161a700f" width={300} height={200} loader={myLoader} />

      <Link href="/service"><a>Service</a></Link>
      <Link href="/contact"><a>contact</a></Link>
      <Link href="/article"><a>Article</a></Link>
    </div>
  )
}