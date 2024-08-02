import React from "react";
import { useRouter } from "next/router";
import Styles from "../../styles/Slug.module.css";
import { useState } from "react";
import { useEffect } from "react";
import * as fs from "fs";

const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  


  const [blog, setblog] = useState(props.blogPost);

  return (
    <div className={Styles.main}>
      <h1 className={Styles.title}>{blog ? blog.title : "Loading..."}</h1>
      <hr className={Styles.separator} />
      {blog ? (
        <div className={Styles.content} dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
      ) : (
        <p className={Styles.loading}>Loading content...</p>
      )}
    </div>
  );
};

//static site generation
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-get-started-with-nextjs" } },
      { params: { slug: "how-to-learn-react" } },
      { params: { slug: "web-development-2024-roadmap" } },
    ],

    fallback: true, // false or "blocking"
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { slug } = context.params;

  let blogPost = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return { props: { blogPost: JSON.parse(blogPost) } };
}

// export async function getServerSideProps(context) {

//     const { slug } = context.query;
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//     let blogPost = await data.json();

//   return { props: {blogPost} };
// }

export default Slug;
