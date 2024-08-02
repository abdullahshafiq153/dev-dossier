import React from "react";
import Link from "next/link";
import Styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={Styles.navbar}>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/BlogPosts" legacyBehavior>
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/About" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/Contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
