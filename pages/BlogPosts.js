import React, { useState } from "react";
import Link from "next/link";
import Styles from "../styles/Posts.module.css";
import { useEffect } from "react";


const BlogPosts = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setblogs(parsed);
      });
  }, []);

  return (
    
      <div className={Styles.blogPosts}>
        {blogs.map((blogitem) => {
          return <div key={blogitem.slug} className={Styles.post}>
            <Link href={`/blogposts/${blogitem.slug}`} legacyBehavior>
              <a className={Styles.postLink}>
                <h3>{blogitem.title}</h3>
              </a>
            </Link>
            <p>{blogitem.content.substr(0,140)}.....</p>

          </div>;
        })}
      </div>
    
  );
};

export default BlogPosts;
