import React, { useState } from "react";
import Link from "next/link";
import Styles from "../styles/Posts.module.css";
import { useEffect } from "react";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const BlogPosts = (props) => {
  // console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs);
  const [count, setcount] = useState(2);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setblogs(parsed);
  //     });
  // }, []);
  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setcount(count + 2);
    let data = await d.json();
    setblogs(data);
  };
  return (
    <div className={Styles.blogPosts}>
      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {blogs.map((blogitem) => (
          <div key={blogitem.slug} className={Styles.post}>
            <Link href={`/blogposts/${blogitem.slug}`} legacyBehavior>
              <a className={Styles.postLink}>
                <h3>{blogitem.title}</h3>
              </a>
            </Link>
            <p>{blogitem.metadesc}</p>
            <Link href={`/blogposts/${blogitem.slug}`} legacyBehavior>
              <a className={Styles.readMoreButton}>Read More</a>
            </Link>
          </div>
        ))}
      </InfiniteScroll>

      {/* return (
    <div className={Styles.blogPosts}>
      {blogs.map((blogitem) => (
        <div key={blogitem.slug} className={Styles.post}>
          <Link href={`/blogposts/${blogitem.slug}`} legacyBehavior>
            <a className={Styles.postLink}>
              <h3>{blogitem.title}</h3>
            </a>
          </Link>
          <p>{blogitem.metadesc}</p>
          <Link href={`/blogposts/${blogitem.slug}`} legacyBehavior>
            <a className={Styles.readMoreButton}>Read More</a>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

//Server side rendering technique of pre rendering
// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blogs");
//   let allBlogPosts = await data.json();

//   return { props: {allBlogPosts} };
// }

//Static Site generation technique of pre rendering
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allCount = data.length;
  let allBlogs = [];
  for (let index = 0; index < 5; index++) {
    const item = data[index];
    //console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return { props: { allBlogs, allCount } };
}

export default BlogPosts;
