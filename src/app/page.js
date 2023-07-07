'use client'
import Link from 'next/link'
import styles from './page.module.css'
import {useRouter} from 'next/navigation'
import Image from 'next/image'
import Profile from '../../public/vercel.svg'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight:'100',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  const router =useRouter();
  const navigate= (routeName) =>{
    router.push(routeName)
  }
  return (
    <main className={styles.main}>
      <h1>home page</h1>
      <Link href="/login">Go to login page</Link>
      <Link href="/about">Go to about page</Link>
      <button onClick={() =>  navigate("/login")}>Go to login page</button>
      <button onClick={() =>  navigate("/about")}>Go to about page</button>
      <h2>Example of fetching api through client side component </h2>
      <Link href="/productlist">Go to product list</Link>
      <h2>Example of fetching api through server component</h2>
      <Link href="/productlist2">Go to product list 2</Link>
      <Image src={Profile} width={200} height={200} />
      <p className={roboto.className}>font with next js font feature</p>
      <Link href="/location">Get user geo loaction page</Link>
    </main>
  )
}
