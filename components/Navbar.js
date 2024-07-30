import React from 'react'
import Link from "next/link"
import Styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <>
    <nav className={Styles.navbar}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/Posts"><li>Posts</li></Link>
          <Link href="/About"><li>About</li></Link>
          <Link href="/Contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </>
   )
}

export default Navbar