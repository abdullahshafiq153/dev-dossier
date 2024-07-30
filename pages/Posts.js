import React from "react";
import Styles from "../styles/Posts.module.css";
import Link   from "next/link";

const Posts = () => {
  return (
    <div>
      Posts
      <div className={Styles.blogPosts}>
       
        <div className={Styles.post}>
          <Link href={'/blogposts/learn-nextjs'}>
          <h3>Get started with Next js</h3></Link>
          <p>Use Yarn to create a next app</p>
        </div>
        <div className={Styles.post}>
          <h3>Get started with Next js</h3>
          <p>Use Yarn to create a next app</p>
        </div>
        <div className={Styles.post}>
          <h3>Get started with Next js</h3>
          <p>Use Yarn to create a next app</p>
        </div>
        <div className={Styles.post}>
          <h3>Get started with Next js</h3>
          <p>Use Yarn to create a next app</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
