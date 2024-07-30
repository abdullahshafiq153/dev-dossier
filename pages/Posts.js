import React from 'react'
import Link from "next/link"
import Styles from "../styles/Posts.module.css";

const BlogPosts = () => {
  return (
    <div>
      Posts
      <div className={Styles.blogPosts}>
        <div className={Styles.post}>
          <Link href="/blogposts/learn-nextjs" legacyBehavior>
            <a className={Styles.postLink}>
              <h3>Get started with Next js</h3>
            </a>
          </Link>
          <p>Use Yarn to create a next app</p>
        </div>
        <div className={Styles.post}>
          <Link href="/blogposts/learn-nextjs" legacyBehavior>
            <a className={Styles.postLink}>
              <h3>Get started with Next js</h3>
            </a>
          </Link>
          <p>Use Yarn to create a next app</p>
        </div>
        <div className={Styles.post}>
          <Link href="/blogposts/learn-nextjs" legacyBehavior>
            <a className={Styles.postLink}>
              <h3>Get started with Next js</h3>
            </a>
          </Link>
          <p>Use Yarn to create a next app</p>
        </div>
        <div className={Styles.post}>
          <Link href="/blogposts/learn-nextjs" legacyBehavior>
            <a className={Styles.postLink}>
              <h3>Get started with Next js</h3>
            </a>
          </Link>
          <p>Use Yarn to create a next app</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPosts;
