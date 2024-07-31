import React from "react";
import { useRouter } from "next/router";
import Styles from "../../styles/Slug.module.css";
import { useState } from "react";
import { useEffect } from "react";
const slug = () => {
  const [blog, setblog] = useState();
  const router = useRouter();
  useEffect(() => {
    if(!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setblog(parsed);
      });
  }, [router.isReady]);

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

export default slug;
