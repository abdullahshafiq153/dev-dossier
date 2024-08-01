import React from "react";
import { useRouter } from "next/router";
import Styles from "../../styles/Slug.module.css";
import { useState } from "react";
import { useEffect } from "react";
const slug = (props) => {
  const [blog, setblog] = useState(props.blogPost);

  return (
    <div className={Styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
      <div>
        {blog && blog.content}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  
    const { slug } = context.query;
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    let blogPost = await data.json();
  
  return { props: {blogPost} };
}

export default slug;
