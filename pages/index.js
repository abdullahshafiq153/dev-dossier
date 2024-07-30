import Head from "next/head";
import Styles from "../styles/Home.module.css";

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
        <div className={Styles.blogPosts}>
          <h2>Popular Blogs</h2>
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
          <div className={Styles.post}>
            <h3>Get started with Next js</h3>
            <p>Use Yarn to create a next app</p>
          </div>
        </div>
      </main>
    </>
  );
}
