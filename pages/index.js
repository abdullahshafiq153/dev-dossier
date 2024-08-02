import Head from "next/head";
import Link from "next/link";
import Styles from "../styles/Home.module.css";
import Styles2 from "../styles/Posts.module.css";
import fs from "fs";
import path from "path";

export default function Home({ allBlogs = [] }) { // Default value for allBlogs
  return (
    <>
      <Head>
        <title>Dev. Dossier</title>
      </Head>
      
      <main className={Styles.main}>
        <section className={Styles.hero}>
          <div className={Styles.heroContent}>
            <h1 className={Styles.heroTitle}>Welcome to Dev. Dossier</h1>
            <p className={Styles.heroSubtitle}>A Coding Blog to Fuel Your Passion</p>
            <p className={Styles.heroDescription}>
              Explore tutorials, tips, and insights on programming languages, frameworks, and development tools. Join our community of passionate developers and enhance your coding skills.
            </p>
            <Link href="/BlogPosts" legacyBehavior>
              <a className={Styles.heroButton}>Explore Posts</a>
            </Link>
          </div>
        </section>
        <div className={Styles2.blogPosts}>
          {allBlogs.map((blogitem) => (
            <div key={blogitem.slug} className={Styles2.post}>
              <Link href={`/blogposts/${blogitem.slug}`} legacyBehavior>
                <a className={Styles2.postLink}>
                  <h3>{blogitem.title}</h3>
                </a>
              </Link>
              <p>{blogitem.metadesc}</p>
              <Link href={`/blogposts/${blogitem.slug}`} legacyBehavior>
                <a className={Styles2.readMoreButton}>Read More</a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

// Static Site Generation (SSG) for fetching blog posts
export async function getStaticProps() {
  const blogDir = path.join(process.cwd(), "blogdata");
  const filenames = await fs.promises.readdir(blogDir);
  
  const allBlogs = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContent = await fs.promises.readFile(filePath, "utf-8");
      return JSON.parse(fileContent);
    })
  );

  return { props: { allBlogs } };
}
