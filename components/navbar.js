import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
    <ul className={styles.navbar} type="disc">
      <Link href="/">
      <li>Home</li>
      </Link>
      <Link href="/blogs">
      <li>Blogs</li>
      </Link>
      <Link href="/about">
      <li>About</li>
      </Link>
      <Link href="/contact">
      <li>Contact us</li>
      </Link>
    </ul>
  </nav>
  )
}

export default Navbar