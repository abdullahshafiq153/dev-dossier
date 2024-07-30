import Head from "next/head";
import Link from "next/link";
import Styles from "../styles/Home.module.css";
import Styles2 from "../styles/Posts.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev. Dossier</title>
      </Head>
      
      <main className={Styles.main}>
        <div className={Styles.heading}>
          <h1>Dev. Dossier</h1>
          <p>A blog by a coder</p>
        </div>
        <div className={Styles2.blogPosts}>
        <div className={Styles2.post}>
          <Link href="/blogposts/learn-nextjs" legacyBehavior>
            <a className={Styles2.postLink}>
              <h3>Get started with Next js</h3>
            </a>
          </Link>
          <p>Use Yarn to create a next app</p>
        </div>
        <div className={Styles2.post}>
          <Link href="/blogposts/learn-nextjs" legacyBehavior>
            <a className={Styles2.postLink}>
              <h3>Get started with Next js</h3>
            </a>
          </Link>
          <p>Use Yarn to create a next app</p>
        </div>
        <div className={Styles2.post}>
          <Link href="/blogposts/learn-nextjs" legacyBehavior>
            <a className={Styles2.postLink}>
              <h3>Get started with Next js</h3>
            </a>
          </Link>
          <p>Use Yarn to create a next app</p>
        </div>
        <div className={Styles2.post}>
          <Link href="/blogposts/learn-nextjs" legacyBehavior>
            <a className={Styles2.postLink}>
              <h3>Get started with Next js</h3>
            </a>
          </Link>
          <p>Use Yarn to create a next app</p>
        </div>
      </div>
      </main>
    </>
  );
}
