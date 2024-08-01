import React, { useState } from "react";
import Link from "next/link";
import Styles from "../styles/Posts.module.css";
import { useEffect } from "react";
import * as fs from "fs";

const BlogPosts = (props) => {
  console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setblogs(parsed);
  //     });
  // }, []);

  return (    <div className={Styles.blogPosts}>
      
      {blogs.map((blogitem) => {
        return (          <div key={blogitem.slug} className={Styles.post}>
            <Link href={`/blogposts/${blogitem.slug}`} legacyBehavior>
              <a className={Styles.postLink}>
                <h3>{blogitem.title}</h3>
              </a>
            </Link>
            <p>{blogitem.content.substr(0, 140)}.....</p>
          </div>
        );
      })}
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
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    //console.log(item);
    myfile = await fs.promises.readFile('blogdata/' + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }


  return { props: {allBlogs}, };
}

export default BlogPosts;

